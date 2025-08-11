import {
  users,
  demoRequests,
  trialRequests,
  type User,
  type InsertUser,
  type DemoRequest,
  type InsertDemoRequest,
  type TrialRequest,
  type InsertTrialRequest,
} from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createDemoRequest(request: InsertDemoRequest): Promise<DemoRequest>;
  getDemoRequests(): Promise<DemoRequest[]>;
  updateDemoRequestContacted(id: number, contacted: boolean): Promise<DemoRequest | undefined>;
  createTrialRequest(request: InsertTrialRequest): Promise<TrialRequest>;
  getTrialRequests(): Promise<TrialRequest[]>;
  checkDuplicateTrialRequest(emailDomain: string, days: number): Promise<TrialRequest | undefined>;
}

export class DatabaseStorage implements IStorage {
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(insertUser)
      .returning();
    return user;
  }

  async createDemoRequest(insertRequest: InsertDemoRequest): Promise<DemoRequest> {
    const [request] = await db
      .insert(demoRequests)
      .values({
        ...insertRequest,
        phone: insertRequest.phone || null,
        message: insertRequest.message || null,
      })
      .returning();
    return request;
  }

  async getDemoRequests(): Promise<DemoRequest[]> {
    const requests = await db
      .select()
      .from(demoRequests)
      .orderBy(demoRequests.createdAt);
    return requests.reverse(); // Most recent first
  }

  async updateDemoRequestContacted(id: number, contacted: boolean): Promise<DemoRequest | undefined> {
    const [updatedRequest] = await db
      .update(demoRequests)
      .set({ contacted })
      .where(eq(demoRequests.id, id))
      .returning();
    return updatedRequest || undefined;
  }

  async createTrialRequest(insertRequest: InsertTrialRequest): Promise<TrialRequest> {
    const emailDomain = insertRequest.email.split('@')[1];
    
    // Check for duplicates to set status
    const existingRequest = await this.checkDuplicateTrialRequest(emailDomain, 30);
    const status = existingRequest ? 'duplicate' : 'new';
    
    const [request] = await db
      .insert(trialRequests)
      .values({
        ...insertRequest,
        emailDomain,
        status,
        prospectType: null, // No longer collected, set to null
        notes: insertRequest.notes || null,
        utmSource: insertRequest.utmSource || null,
        utmMedium: insertRequest.utmMedium || null,
        utmCampaign: insertRequest.utmCampaign || null,
        pageReferrer: insertRequest.pageReferrer || null,
      })
      .returning();
    return request;
  }

  async getTrialRequests(): Promise<TrialRequest[]> {
    const requests = await db
      .select()
      .from(trialRequests)
      .orderBy(trialRequests.createdAt);
    return requests.reverse(); // Most recent first
  }

  async checkDuplicateTrialRequest(emailDomain: string, days: number = 30): Promise<TrialRequest | undefined> {
    const cutoffDate = new Date();
    cutoffDate.setDate(cutoffDate.getDate() - days);
    
    const [existing] = await db
      .select()
      .from(trialRequests)
      .where(eq(trialRequests.emailDomain, emailDomain))
      .orderBy(trialRequests.createdAt)
      .limit(1);
    
    return existing || undefined;
  }
}

export const storage = new DatabaseStorage();

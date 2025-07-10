import { users, demoRequests, type User, type InsertUser, type DemoRequest, type InsertDemoRequest } from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createDemoRequest(request: InsertDemoRequest): Promise<DemoRequest>;
  getDemoRequests(): Promise<DemoRequest[]>;
  updateDemoRequestContacted(id: number, contacted: boolean): Promise<DemoRequest | undefined>;
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
}

export const storage = new DatabaseStorage();

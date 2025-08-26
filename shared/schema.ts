import { pgTable, text, serial, timestamp, boolean, uuid, integer, decimal } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const demoRequests = pgTable("demo_requests", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  company: text("company").notNull(),
  phone: text("phone"),
  message: text("message"),
  requestType: text("request_type").notNull(), // 'demo', 'sample_report', 'assessment', 'waitlist'
  audienceType: text("audience_type"), // 'ma-firm', 'business-owner'
  additionalData: text("additional_data"), // JSON string for flexible data storage
  createdAt: timestamp("created_at").defaultNow().notNull(),
  contacted: boolean("contacted").default(false),
});

export const trialRequests = pgTable("trial_requests", {
  id: text("id").primaryKey().$defaultFn(() => crypto.randomUUID()),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull(),
  emailDomain: text("email_domain").notNull(),
  firmName: text("firm_name").notNull(),
  role: text("role").notNull(),
  prospectType: text("prospect_type"), // Keep but make optional for backward compatibility
  seenBefore: text("seen_before").notNull(), // 'Yes' or 'No'
  timing: text("timing").notNull(),
  notes: text("notes"),
  utmSource: text("utm_source"),
  utmMedium: text("utm_medium"),
  utmCampaign: text("utm_campaign"),
  pageReferrer: text("page_referrer"),
  status: text("status").notNull().default("new"), // 'new', 'duplicate', 'processed'
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertDemoRequestSchema = createInsertSchema(demoRequests).pick({
  name: true,
  email: true,
  company: true,
  phone: true,
  message: true,
  requestType: true,
  audienceType: true,
  additionalData: true,
});

export const insertTrialRequestSchema = createInsertSchema(trialRequests).omit({
  id: true,
  createdAt: true,
  emailDomain: true,
  prospectType: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type DemoRequest = typeof demoRequests.$inferSelect;
export type InsertDemoRequest = z.infer<typeof insertDemoRequestSchema>;
export type TrialRequest = typeof trialRequests.$inferSelect;
export type InsertTrialRequest = z.infer<typeof insertTrialRequestSchema>;

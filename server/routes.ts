import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertDemoRequestSchema, insertTrialRequestSchema } from "@shared/schema";
import { z } from "zod";
import { sendNotificationEmail, sendTrialRequestNotification, sendTrialRequestAutoReply } from "./email";

export async function registerRoutes(app: Express): Promise<Server> {
  // Demo request endpoint
  app.post("/api/demo-request", async (req, res) => {
    try {
      const validatedData = insertDemoRequestSchema.parse(req.body);
      const demoRequest = await storage.createDemoRequest(validatedData);
      
      // Send email notification
      await sendNotificationEmail({
        name: validatedData.name,
        email: validatedData.email,
        company: validatedData.company || 'Not provided',
        requestType: validatedData.requestType as "demo" | "sample_report" | "assessment",
        message: validatedData.message || undefined
      });
      
      res.json({ success: true, data: demoRequest });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ success: false, error: "Invalid request data", details: error.errors });
      } else {
        res.status(500).json({ success: false, error: "Internal server error" });
      }
    }
  });

  // Get all demo requests (for admin purposes)
  app.get("/api/demo-requests", async (req, res) => {
    try {
      const requests = await storage.getDemoRequests();
      res.json({ success: true, data: requests });
    } catch (error) {
      res.status(500).json({ success: false, error: "Internal server error" });
    }
  });

  // Update demo request contacted status
  app.patch("/api/demo-request/:id/contacted", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const { contacted } = req.body;
      
      if (typeof contacted !== 'boolean') {
        return res.status(400).json({ success: false, error: "Invalid contacted status" });
      }

      const updatedRequest = await storage.updateDemoRequestContacted(id, contacted);
      if (!updatedRequest) {
        return res.status(404).json({ success: false, error: "Demo request not found" });
      }

      res.json({ success: true, data: updatedRequest });
    } catch (error) {
      res.status(500).json({ success: false, error: "Internal server error" });
    }
  });

  // Trial request endpoint
  app.post("/api/trial-requests", async (req, res) => {
    try {
      const validatedData = insertTrialRequestSchema.parse(req.body);
      
      // Check for duplicates
      const emailDomain = validatedData.email.split('@')[1];
      const existingRequest = await storage.checkDuplicateTrialRequest(emailDomain, 30);
      
      let status = 'new';
      if (existingRequest) {
        status = 'duplicate';
      }

      const trialRequest = await storage.createTrialRequest(validatedData);
      
      // Send email notifications
      const emailData = {
        firstName: validatedData.firstName,
        lastName: validatedData.lastName,
        email: validatedData.email,
        firmName: validatedData.firmName,
        role: validatedData.role,
        seenBefore: validatedData.seenBefore,
        timing: validatedData.timing,
        notes: validatedData.notes || undefined
      };

      // Send notification to admin
      await sendTrialRequestNotification(emailData);
      
      // Send auto-reply to user
      await sendTrialRequestAutoReply(emailData);
      
      res.json({ success: true, data: trialRequest });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ success: false, error: "Invalid request data", details: error.errors });
      } else {
        console.error('Trial request error:', error);
        res.status(500).json({ success: false, error: "Internal server error" });
      }
    }
  });

  // Get all trial requests (for admin purposes)
  app.get("/api/trial-requests", async (req, res) => {
    try {
      const requests = await storage.getTrialRequests();
      res.json({ success: true, data: requests });
    } catch (error) {
      res.status(500).json({ success: false, error: "Internal server error" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}

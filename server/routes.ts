import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertDemoRequestSchema } from "@shared/schema";
import { z } from "zod";
import { sendSampleReportNotification, sendContactFormNotification } from "./email";

export async function registerRoutes(app: Express): Promise<Server> {
  // Demo request endpoint
  app.post("/api/demo-request", async (req, res) => {
    try {
      const validatedData = insertDemoRequestSchema.parse(req.body);
      const demoRequest = await storage.createDemoRequest(validatedData);
      
      // Send email notification based on request type
      if (validatedData.requestType === 'sample_report') {
        await sendSampleReportNotification({
          name: validatedData.name,
          email: validatedData.email,
          company: validatedData.company || 'Not provided',
          audienceType: validatedData.audienceType || 'Not specified'
        });
      } else {
        await sendContactFormNotification({
          name: validatedData.name,
          email: validatedData.email,
          company: validatedData.company,
          message: validatedData.message || 'No message provided',
          requestType: validatedData.requestType
        });
      }
      
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

  const httpServer = createServer(app);
  return httpServer;
}

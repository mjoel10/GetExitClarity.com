import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";

const app = express();

// Add CORS middleware
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  
  if (req.method === "OPTIONS") {
    res.sendStatus(200);
    return;
  }
  
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});

(async () => {
  const server = await registerRoutes(app);

  // Handle dynamic meta tags for blog posts before catch-all
  app.get('/blog/:slug', (req, res, next) => {
    const { slug } = req.params;
    
    // Blog post data - should match the data in BlogPost component
    const blogPosts: Record<string, any> = {
      "ultimate-exit-why-87-percent-fail": {
        title: "The Ultimate Exit: Why 87% of Business Sales Fail (And How to Be in the 13% That Don't)",
        slug: "ultimate-exit-why-87-percent-fail",
        category: "Exit Planning",
        author: "ExitClarity Team",
        publishedDate: "August 11, 2025",
        excerpt: "The difference between a successful exit and a failed one isn't luck. It's preparation. And most owners aren't prepared at all."
      }
    };

    const post = blogPosts[slug];
    
    if (post) {
      // For social media crawlers, serve a simplified HTML with proper meta tags
      const userAgent = req.get('User-Agent') || '';
      const isSocialCrawler = /facebookexternalhit|twitterbot|linkedinbot|slackbot|whatsapp/i.test(userAgent);
      
      if (isSocialCrawler) {
        const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${post.title} | ExitClarity</title>
  <meta name="description" content="${post.excerpt}" />
  
  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="article" />
  <meta property="og:url" content="https://exitclarity.io/blog/${post.slug}" />
  <meta property="og:title" content="${post.title}" />
  <meta property="og:description" content="${post.excerpt}" />
  <meta property="og:image" content="https://exitclarity.io/src/assets/AdobeStock_454297497_1754937961456.jpeg" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="article:author" content="${post.author}" />
  <meta property="article:published_time" content="${new Date(post.publishedDate).toISOString()}" />
  <meta property="article:section" content="${post.category}" />
  
  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:title" content="${post.title}" />
  <meta property="twitter:description" content="${post.excerpt}" />
  <meta property="twitter:image" content="https://exitclarity.io/src/assets/AdobeStock_454297497_1754937961456.jpeg" />
</head>
<body>
  <div id="root"></div>
  <script>window.location.href = 'https://exitclarity.io/blog/${post.slug}';</script>
</body>
</html>`;
        res.send(html);
        return;
      }
    }
    
    // For regular users, continue to the SPA
    next();
  });

  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    res.status(status).json({ message });
    throw err;
  });

  // importantly only setup vite in development and after
  // setting up all the other routes so the catch-all route
  // doesn't interfere with the other routes
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  // ALWAYS serve the app on port 5000
  // this serves both the API and the client.
  // It is the only port that is not firewalled.
  const port = 5000;
  server.listen({
    port,
    host: "0.0.0.0",
    reusePort: true,
  }, () => {
    log(`serving on port ${port}`);
  });
})();

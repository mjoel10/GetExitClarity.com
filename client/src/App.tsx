import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Landing from "@/pages/landing";
import BusinessOwners from "@/pages/business-owners";
import MAFirms from "@/pages/ma-firms";
import About from "@/pages/about";
import Resources from "@/pages/resources";
import SampleReport from "@/pages/sample-report";
import Blog from "@/pages/blog";
import TrialRequest from "@/pages/trial-request";
import Contact from "@/pages/contact";
import Privacy from "@/pages/privacy";
import Terms from "@/pages/terms";
import Cookies from "@/pages/cookies";
import Security from "@/pages/security";
import NotFound from "@/pages/not-found";
import { useEffect } from "react";
import { initGA } from "./lib/analytics";
import { useAnalytics } from "./hooks/use-analytics";

function Router() {
  // Track page views when routes change
  useAnalytics();
  
  return (
    <Switch>
      <Route path="/" component={Landing} />
      <Route path="/platform/ma-firms" component={MAFirms} />
      <Route path="/platform/business-owners" component={BusinessOwners} />
      <Route path="/sample-report" component={SampleReport} />
      <Route path="/resources" component={Resources} />
      <Route path="/blog" component={Blog} />
      <Route path="/trial-request" component={TrialRequest} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      {/* Legacy routes - redirect to new paths */}
      <Route path="/business-owners" component={BusinessOwners} />
      <Route path="/ma-firms" component={MAFirms} />
      {/* Legal pages */}
      <Route path="/privacy" component={Privacy} />
      <Route path="/terms" component={Terms} />
      <Route path="/cookies" component={Cookies} />
      <Route path="/security" component={Security} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  // Initialize Google Analytics when app loads
  useEffect(() => {
    try {
      // Temporarily disabled GA to resolve runtime error
      // initGA();
    } catch (error) {
      console.warn('Google Analytics initialization failed:', error);
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;

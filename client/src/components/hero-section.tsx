import { Button } from "@/components/ui/button";
import { Calendar, FileText, ArrowRight } from "lucide-react";
import HeroDashboard from "./hero-dashboard";
import { Link } from "wouter";

export function HeroSection() {
  return (
    <section className="relative py-20 lg:py-28 bg-gradient-to-br from-background to-muted/20">
      <div className="container mx-auto px-6">
        <div className="hero-content-wrapper">
          {/* Text Content Container */}
          <div className="hero-content-container">
            {/* Headlines Section */}
            <div className="hero-headlines">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight text-center lg:text-left">
                Turn Exit Readiness Into{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  High-Confidence Deals
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-muted-foreground mb-8 leading-relaxed text-center lg:text-left">
                ExitClarity systematizes and scales early owner engagement by turning the overwhelming thought of selling into a clear, actionable process.
              </p>
            </div>

            {/* MacBook Visual - Shows here on mobile only */}
            <div className="hero-macbook-section lg:hidden">
              <div className="relative">
                {/* Subtle blue background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-primary/8 to-accent/5 rounded-2xl blur-sm"></div>
                
                <div className="relative z-10">
                  <HeroDashboard />
                </div>
                
                {/* Background decorative elements */}
                <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-4 -left-4 w-48 h-48 bg-gradient-to-br from-accent/10 to-primary/10 rounded-full blur-3xl"></div>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="hero-cta-section">
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
                <Button variant="hero" size="xl" className="group" asChild>
                  <a href="https://calendly.com/exitclarity-info/30min" target="_blank" rel="noopener noreferrer">
                    <Calendar className="mr-2 h-5 w-5" />
                    Schedule Demo
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
                
                <Button variant="professional" size="xl" className="group" asChild>
                  <Link href="/resources">
                    <FileText className="mr-2 h-5 w-5" />
                    View Sample Report
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
            
            {/* Key Stats */}
            <div className="hero-stats-section">
              <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto lg:mx-0">
                <div className="text-center lg:text-left">
                  <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">30+</div>
                  <p className="text-sm text-muted-foreground">Years M&A Experience</p>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">11</div>
                  <p className="text-sm text-muted-foreground">Readiness Factors</p>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">500+</div>
                  <p className="text-sm text-muted-foreground">Deals Analyzed</p>
                </div>
              </div>
            </div>
          </div>

          {/* MacBook Visual - Shows here on desktop only */}
          <div className="hero-macbook-desktop hidden lg:block">
            <div className="relative">
              {/* Subtle blue background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-primary/8 to-accent/5 rounded-2xl blur-sm"></div>
              
              <div className="relative z-10">
                <HeroDashboard />
              </div>
              
              {/* Background decorative elements */}
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-4 -left-4 w-48 h-48 bg-gradient-to-br from-accent/10 to-primary/10 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
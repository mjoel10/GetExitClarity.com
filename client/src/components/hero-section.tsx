import { Button } from "@/components/ui/button";
import { Calendar, FileText, ArrowRight, Users } from "lucide-react";
import HeroMacBook from "./hero-macbook";
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
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight text-center xl:text-left">
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Know Who's Ready. Know Who's Not.
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-muted-foreground mb-8 leading-relaxed text-center xl:text-left">
                ExitClarity distills decades of buy-side and sell-side expertise into a readiness system that shows if a seller is GO, FIX, or WAIT—so your team qualifies faster and avoids wasted deals.
              </p>
            </div>

            {/* CTA Buttons - Shows above MacBook on mobile, below headlines on desktop */}
            <div className="hero-cta-section order-2 xl:order-3">
              <div className="flex flex-col sm:flex-row gap-4 justify-center xl:justify-start mb-12">
                <Button variant="hero" size="xl" className="group" asChild>
                  <a href="/trial-request">
                    <Users className="mr-2 h-5 w-5" />
                    Run Your First Seller Report Free
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
                
                <Button variant="professional" size="xl" className="group" asChild>
                  <Link href="/sample-report">
                    <FileText className="mr-2 h-5 w-5" />
                    See Sample Report
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* MacBook Visual - Shows here on mobile only */}
            <div className="hero-macbook-section xl:hidden order-3">
              <div className="relative flex justify-center">
                {/* Subtle blue background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-primary/8 to-accent/5 rounded-2xl blur-sm"></div>
                
                <div className="relative z-10 w-full max-w-lg">
                  <HeroMacBook />
                </div>
                
                {/* Background decorative elements */}
                <div className="absolute -top-4 -right-4 w-32 h-32 md:w-48 md:h-48 lg:w-72 lg:h-72 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-4 -left-4 w-24 h-24 md:w-32 md:h-32 lg:w-48 lg:h-48 bg-gradient-to-br from-accent/10 to-primary/10 rounded-full blur-3xl"></div>
              </div>
            </div>
            
            {/* Key Stats */}
            <div className="hero-stats-section order-4 xl:order-4">
              <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto xl:mx-0">
                <div className="text-center xl:text-left">
                  <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">30+</div>
                  <p className="text-sm text-muted-foreground">Years M&A Experience</p>
                </div>
                <div className="text-center xl:text-left">
                  <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">11</div>
                  <p className="text-sm text-muted-foreground">Readiness Factors</p>
                </div>
                <div className="text-center xl:text-left">
                  <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">300+</div>
                  <p className="text-sm text-muted-foreground">Deals Analyzed</p>
                </div>
              </div>
            </div>
          </div>

          {/* MacBook Visual - Shows here on desktop only */}
          <div className="hero-macbook-desktop hidden xl:block">
            <div className="relative">
              {/* Subtle blue background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-primary/8 to-accent/5 rounded-2xl blur-sm"></div>
              
              <div className="relative z-10">
                <HeroMacBook />
              </div>
              
              {/* Background decorative elements */}
              <div className="absolute -top-4 -right-4 w-32 h-32 md:w-48 md:h-48 lg:w-72 lg:h-72 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 md:w-32 md:h-32 lg:w-48 lg:h-48 bg-gradient-to-br from-accent/10 to-primary/10 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
import { Button } from "@/components/ui/button";
import { Calendar, FileText, ArrowRight } from "lucide-react";
import HeroMacBook from "./hero-macbook";

export function HeroSection() {
  return (
    <section className="relative py-8 sm:py-12 md:py-16 lg:py-20 xl:py-28 bg-gradient-to-br from-background to-muted/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center bg-primary/10 text-primary px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full mr-1.5 sm:mr-2"></span>
              30+ Years M&A Experience
            </div>
            
            {/* Main Headlines */}
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-4 sm:mb-6 leading-tight px-2 sm:px-0">
              Turn Exit Readiness Into{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                High-Confidence Deals
              </span>
            </h1>
            
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground mb-6 sm:mb-8 leading-relaxed px-2 sm:px-0">
              ExitClarity systematizes and scales early owner engagement by turning the overwhelming thought of selling into a clear, actionable process.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-6 sm:mb-8 lg:mb-12 px-2 sm:px-0">
              <Button variant="hero" size="xl" className="group text-sm sm:text-base px-4 sm:px-6 py-2.5 sm:py-3">
                <Calendar className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Schedule Demo
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <Button variant="professional" size="xl" className="group text-sm sm:text-base px-4 sm:px-6 py-2.5 sm:py-3">
                <FileText className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                View Sample Report
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
            
            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 lg:gap-8 max-w-sm sm:max-w-md lg:max-w-lg mx-auto lg:mx-0 px-2 sm:px-0">
              <div className="text-center lg:text-left">
                <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-primary mb-1">30+</div>
                <p className="text-xs sm:text-sm text-muted-foreground leading-tight">Years M&A Experience</p>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-primary mb-1">11</div>
                <p className="text-xs sm:text-sm text-muted-foreground leading-tight">Readiness Factors</p>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-primary mb-1">500+</div>
                <p className="text-xs sm:text-sm text-muted-foreground leading-tight">Deals Analyzed</p>
              </div>
            </div>
          </div>

          {/* Right Column - MacBook Assessment Interface */}
          <div className="relative order-1 lg:order-2 w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-none mx-auto">
            {/* Subtle blue background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-primary/8 to-accent/5 rounded-2xl blur-sm"></div>
            
            <div className="relative z-10">
              <HeroMacBook />
            </div>
            
            {/* Background decorative elements - hidden on mobile */}
            <div className="hidden md:block absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-3xl"></div>
            <div className="hidden md:block absolute -bottom-4 -left-4 w-48 h-48 bg-gradient-to-br from-accent/10 to-primary/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
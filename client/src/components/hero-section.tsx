import { Button } from "@/components/ui/button";
import { Calendar, FileText, Play, ArrowRight } from "lucide-react";
import exitClarityScreenshot from "@assets/previewed (2)_1752029982903.png";

export function HeroSection() {
  return (
    <section className="relative py-20 lg:py-28 bg-gradient-to-br from-background to-muted/20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
              30+ Years M&A Experience
            </div>
            
            {/* Main Headlines */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Turn Exit Readiness Into{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                High-Confidence Deals
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 leading-relaxed">
              ExitClarity systematizes and scales early owner engagement by turning the overwhelming thought of selling into a clear, actionable process.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Button variant="hero" size="xl" className="group">
                <Calendar className="mr-2 h-5 w-5" />
                Schedule Demo
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <Button variant="professional" size="xl" className="group">
                <FileText className="mr-2 h-5 w-5" />
                View Sample Report
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <Button variant="outline" size="xl" className="group">
                <Play className="mr-2 h-5 w-5" />
                Start Assessment
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
            
            {/* Key Stats */}
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

          {/* Right Column - App Screenshot */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src={exitClarityScreenshot} 
                alt="ExitClarity Assessment Interface showing exit goals, timeline, and assessment progress"
                className="w-full h-auto max-w-2xl mx-auto rounded-lg shadow-2xl"
              />
            </div>
            
            {/* Background decorative elements */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-4 -left-4 w-48 h-48 bg-gradient-to-br from-accent/10 to-primary/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
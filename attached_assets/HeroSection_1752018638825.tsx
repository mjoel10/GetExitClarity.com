import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, FileText } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-background via-background to-muted overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Turn Exit Readiness Into{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  High-Confidence Deals
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                ExitClarity systematizes and scales early owner engagement by turning the overwhelming thought of selling into a clear, actionable process.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" className="group">
                <Calendar className="mr-2 h-5 w-5" />
                Schedule a Demo
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <Button variant="professional" size="xl" className="group">
                <FileText className="mr-2 h-5 w-5" />
                View Sample Report
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-8 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">30+</div>
                <div className="text-sm text-muted-foreground">Years M&A Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">11</div>
                <div className="text-sm text-muted-foreground">Readiness Factors</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Deals Analyzed</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-strong">
              <img 
                src={heroImage} 
                alt="Professional M&A meeting" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-strong border">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-foreground">Assessment Complete</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">Ready for strategic review</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
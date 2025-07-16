import { Target, Database, FileText, Settings, BarChart3, Zap, Calendar, ArrowRight } from "lucide-react";
import { DualCTA } from "./dual-cta";
import { Button } from "@/components/ui/button";

export function FeaturesSection() {
  const features = [
    {
      icon: Target,
      title: "Scale Your Firm Instantly",
      description: "Unlimited client assessments with comprehensive reporting"
    },
    {
      icon: BarChart3,
      title: "Centralized Tracking",
      description: "Pipeline visibility dashboard to track client readiness across your portfolio"
    },
    {
      icon: FileText,
      title: "Unbiased Value for Your Prospects",
      description: "Informed by 30+ years of business ownership and M&A experience"
    },
    {
      icon: Settings,
      title: "White-Label Authority Building",
      description: "Co-branded reports that position your firm alongside ExitClarity as trusted exit-readiness experts"
    },
    {
      icon: Database,
      title: "Benchmarked Scoring",
      description: "Objective, data-backed readiness scoring with realistic valuation expectations"
    },
    {
      icon: Zap,
      title: "Zero-Touch Nurturing Engine",
      description: "Automated nurturing sequences that maintain engagement without manual effort"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Purpose-Built for{" "}
            <span className="text-primary">M&A Professionals</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            Streamline how you qualify, track, and support long-term exit prospects with tools designed specifically for the M&A workflow.
          </p>
          
          <div className="flex justify-center">
            <Button variant="hero" size="xl" className="group" asChild>
              <a href="https://calendly.com/exitclarity-info/30min" target="_blank" rel="noopener noreferrer">
                <Calendar className="mr-2 h-5 w-5" />
                See How It Works
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="group bg-white p-8 rounded-2xl shadow-soft hover:shadow-medium transition-all duration-200 border border-border hover:border-primary/20"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200">
                  <Icon className="h-7 w-7 text-primary" />
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>


      </div>
    </section>
  );
}
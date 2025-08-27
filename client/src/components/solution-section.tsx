import { CheckCircle, Users, Target, BarChart3, TrendingUp, Shield, UserPlus, FileText, ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";

export function SolutionSection() {
  const [, navigate] = useLocation();

  const handleMAFirmsLearnMore = () => {
    navigate("/platform/ma-firms");
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  const handleBusinessOwnersLearnMore = () => {
    navigate("/platform/business-owners");
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  const professionalFeatures = [
    {
      icon: Target,
      title: "Scale early-stage engagement",
      description: "Structured approach to prospect qualification"
    },
    {
      icon: BarChart3,
      title: "Objectively score prospect readiness",
      description: "Data-driven assessment across 11 key factors"
    },
    {
      icon: TrendingUp,
      title: "Track and prioritize your funnel",
      description: "Real-time visibility into your best leads"
    },
    {
      icon: CheckCircle,
      title: "Deliver high-value analysis without custom consulting",
      description: "Automated insights and recommendations"
    },
    {
      icon: Users,
      title: "Build trust early—before the deal",
      description: "Establish advisor credibility through value delivery"
    }
  ];

  const ownerFeatures = [
    {
      icon: Shield,
      title: "Understand if and when you're ready to sell",
      description: "Clear GO/FIX/WAIT recommendations informed by decades of ownership and M&A experience"
    },
    {
      icon: TrendingUp,
      title: "Leverage a personalized roadmap to improve valuation",
      description: "Improve with step-by-step, ROI-focused guidance"
    },
    {
      icon: CheckCircle,
      title: "Know your deal risks before a buyer does",
      description: "Identify and fix weak spots before due diligence"
    },
    {
      icon: Target,
      title: "Build clarity, confidence, and control into your exit",
      description: "Take charge of your exit timeline and outcomes"
    },
    {
      icon: Users,
      title: "Expert guidance on your terms",
      description: "Professional insights without initial contracts or commitments"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            The Solution: A Readiness Engine That{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Builds Trust at Every Stage
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            ExitClarity creates alignment between M&A professionals and business owners through our subscription-based platform, delivering structured intelligence and actionable insights.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* For M&A Professionals */}
          <div className="bg-white rounded-2xl p-8 shadow-soft border flex flex-col h-full">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-2">For M&A Professionals</h3>
              <p className="text-muted-foreground">Scale early-stage engagement and build stronger funnels</p>
            </div>
            
            <div className="space-y-6 flex-1">
              {professionalFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            
            {/* CTA Buttons for M&A Professionals */}
            <div className="mt-16 flex flex-col xl:flex-row gap-3">
              <Button variant="hero" size="default" className="group xl:flex-1 sm:py-4 sm:px-6 sm:text-lg" asChild>
                <a href="https://calendly.com/exitclarity-info/30min" target="_blank" rel="noopener noreferrer">
                  <Calendar className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  Get Started Today
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button variant="outline" size="default" className="group xl:flex-1 sm:py-4 sm:px-6 sm:text-lg" onClick={handleMAFirmsLearnMore}>
                <FileText className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>

          {/* For Business Owners */}
          <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 border flex flex-col h-full">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-2">For Business Owners</h3>
              <p className="text-muted-foreground">Understand your exit-readiness and maximize your exit value</p>
            </div>
            
            <div className="space-y-6 flex-1">
              {ownerFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            
            {/* CTA Buttons for Business Owners */}
            <div className="mt-16 flex flex-col xl:flex-row gap-3">
              <Button variant="hero" size="default" className="group xl:flex-1 sm:py-4 sm:px-6 sm:text-lg" asChild>
                <Link href="/business-owners-waitlist">
                  <UserPlus className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  Join Our Waitlist
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button variant="outline" size="default" className="group xl:flex-1 sm:py-4 sm:px-6 sm:text-lg" onClick={handleBusinessOwnersLearnMore}>
                <FileText className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

// Assessment Progress Visual Component
function AssessmentProgress() {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg border max-w-md mx-auto">
      {/* Header */}
      <div className="text-center mb-6">
        <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-4 flex items-center justify-center">
          <CheckCircle className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">Exit Readiness Assessment</h3>
        <p className="text-gray-600 text-sm">See exactly where you stand</p>
      </div>
      
      {/* Progress Bar */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-700">Assessment Progress</span>
          <span className="text-sm font-bold text-primary">8 of 11 factors</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div 
            className="bg-gradient-to-r from-primary to-accent h-3 rounded-full transition-all duration-1000 ease-out"
            style={{ width: '73%' }}
          ></div>
        </div>
        <p className="text-xs text-gray-500 mt-1">9 mins remaining</p>
      </div>
      
      {/* Categories */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-700">Financial Performance</span>
          <CheckCircle className="w-5 h-5 text-primary" />
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-700">Documentation</span>
          <CheckCircle className="w-5 h-5 text-primary" />
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-700">Team & Transition</span>
          <CheckCircle className="w-5 h-5 text-primary" />
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-700">Strategic Planning</span>
          <div className="w-5 h-5 border-2 border-primary rounded-full flex items-center justify-center">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function HeroSection() {
  const handleCTAClick = () => {
    window.open('https://app.exitclarity.io/signupdirect', '_blank');
  };

  return (
    <section className="relative py-20 lg:py-28 bg-gradient-to-br from-background to-muted/20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="order-2 lg:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Are You Ready to Sell Your Business?
            </h1>
            
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Get a free personalized exit readiness report in 20 minutes
            </p>
            
            {/* Value Propositions */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-lg text-foreground">Realistic business valuation ranges</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-lg text-foreground">Clear timeline for optimal sale</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-lg text-foreground">GO / FIX / WAIT recommendations across 11 categories</span>
              </div>
            </div>
            
            {/* CTA Button */}
            <div className="mb-6">
              <Button 
                onClick={handleCTAClick}
                variant="hero"
                size="xl"
                className="font-semibold transition-all duration-200 hover:shadow-lg hover:scale-105"
              >
                Create Your Free ExitClarity Account
              </Button>
            </div>
            
            {/* Trust Indicator */}
            <p className="text-sm text-muted-foreground">
              Join 500+ business owners who've discovered their exit readiness
            </p>
          </div>
          
          {/* Right Side - Assessment Visual */}
          <div className="order-1 lg:order-2">
            <AssessmentProgress />
          </div>
        </div>
      </div>
    </section>
  );
}
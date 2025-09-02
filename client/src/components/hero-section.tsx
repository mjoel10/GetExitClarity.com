import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

// Professional Assessment Visual Component
function AssessmentProgress() {
  return (
    <div className="bg-white rounded-2xl p-2 shadow-2xl border max-w-2xl mx-auto">
      <iframe 
        src="/attached_assets/assessment-platform.html"
        className="w-full h-[500px] rounded-xl border-0"
        title="ExitClarity Assessment Platform"
        style={{ 
          background: 'linear-gradient(135deg, #0a4f4f 0%, #1a7575 100%)',
          transform: 'scale(0.7)',
          transformOrigin: 'top left',
          width: '142.857%',
          height: '714px'
        }}
      />
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
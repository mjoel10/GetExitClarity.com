import { Button } from "@/components/ui/button";
import { CheckCircle, Target, TrendingUp } from "lucide-react";

// Professional Assessment Visual Component
function AssessmentProgress() {
  return (
    <div 
      className="max-w-lg mx-auto rounded-2xl p-4 shadow-xl relative overflow-hidden"
      style={{ 
        backgroundColor: '#f8fafc'
      }}
    >
      {/* Animated particles background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full animate-pulse"
            style={{
              left: `${15 + i * 12}%`,
              top: `${10 + (i % 4) * 25}%`,
              animationDelay: `${i * 0.3}s`
            }}
          />
        ))}
      </div>

      {/* Platform Card */}
      <div className="bg-white rounded-2xl p-6 relative z-10 shadow-xl">
        {/* Header */}
        <div className="text-center mb-6">
          <div className="w-10 h-10 rounded-full mx-auto mb-2 flex items-center justify-center" style={{ backgroundColor: '#0B5FFF' }}>
            <CheckCircle className="w-5 h-5 text-white" />
          </div>
          <h3 className="text-lg font-bold mb-1" style={{ color: '#0B5FFF' }}>
            ExitClarity
          </h3>
          <p className="text-gray-600 text-xs">Exit Readiness Assessment</p>
        </div>

        {/* Progress Section */}
        <div className="bg-blue-50 rounded-lg p-3 mb-4 border border-blue-200">
          <div className="flex justify-between items-center mb-3">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">Assessment Progress</span>
            </div>
            <span className="bg-primary/10 text-primary px-2 py-1 rounded-md text-xs font-medium">
              8 mins remaining
            </span>
          </div>
          
          <div className="mb-2">
            <span className="text-lg font-bold text-gray-900">8 of 11 factors</span>
          </div>
          
          <div className="w-full bg-white rounded-full h-2 mb-1 shadow-inner">
            <div 
              className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-1000 ease-out relative overflow-hidden"
              style={{ width: '72.7%' }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Factor Grid - Improved Layout */}
        <div className="grid grid-cols-2 gap-2 mb-4">
          {[
            { name: "Financial Performance", completed: true },
            { name: "Documentation", completed: true },
            { name: "Team & Transition", completed: true },
            { name: "Strategic Planning", completed: false, active: true },
            { name: "Operations", completed: true },
            { name: "Market Position", completed: false },
          ].map((factor, i) => (
            <div 
              key={i}
              className={`p-3 rounded-lg border transition-all duration-300 ${
                factor.completed 
                  ? 'bg-blue-50 border-blue-200' 
                  : factor.active 
                    ? 'bg-yellow-50 border-yellow-300 shadow-md ring-1 ring-yellow-400/30' 
                    : 'bg-gray-50 border-gray-200'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className={`w-6 h-6 rounded-md flex items-center justify-center text-xs font-bold ${
                    factor.completed 
                      ? 'bg-primary text-white' 
                      : factor.active 
                        ? 'bg-yellow-400 text-white' 
                        : 'bg-gray-300 text-gray-600'
                  }`}>
                    {factor.completed ? '✓' : 
                     factor.active ? <Target className="w-3 h-3" /> : 
                     factor.name === 'Market Position' ? <TrendingUp className="w-3 h-3" /> : '○'}
                  </div>
                  <h4 className="font-medium text-gray-900 text-xs leading-tight">{factor.name}</h4>
                </div>
                {factor.completed && (
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats - Cleaner Design */}
        <div className="grid grid-cols-3 gap-3 p-3 bg-gray-50 rounded-lg border">
          <div className="text-center">
            <div className="text-xl font-bold text-gray-900">73%</div>
            <div className="text-xs text-gray-600">Complete</div>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold text-gray-900">8:47</div>
            <div className="text-xs text-gray-600">Remaining</div>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold text-gray-900">11</div>
            <div className="text-xs text-gray-600">Total Factors</div>
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
    <section className="relative py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Side - Content */}
          <div className="order-2 lg:order-1">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4" style={{ lineHeight: '1.5' }}>
              Are You Ready to Sell Your Business?
            </h1>
            
            <p className="text-lg lg:text-xl text-muted-foreground mb-6" style={{ lineHeight: '1.5' }}>
              Get a free personalized exit readiness report in 20 minutes
            </p>
            
            {/* Value Propositions */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-base text-foreground">Realistic business valuation ranges</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-base text-foreground">Clear timeline for optimal sale</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-base text-foreground">GO / FIX / WAIT recommendations across 11 categories</span>
              </div>
            </div>
            
            {/* CTA Button */}
            <div className="mb-4">
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
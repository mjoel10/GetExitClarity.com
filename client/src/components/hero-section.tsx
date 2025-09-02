import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

// Professional Assessment Visual Component
function AssessmentProgress() {
  return (
    <div 
      className="max-w-2xl mx-auto rounded-3xl p-8 shadow-2xl relative overflow-hidden"
      style={{ 
        background: 'linear-gradient(135deg, #0a4f4f 0%, #1a7575 100%)'
      }}
    >
      {/* Animated particles background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
            style={{
              left: `${10 + i * 15}%`,
              top: `${20 + (i % 3) * 30}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + i}s`
            }}
          />
        ))}
      </div>

      {/* Platform Card */}
      <div className="bg-white rounded-3xl p-8 relative z-10 shadow-xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          </div>
          <h3 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
            ExitClarity
          </h3>
          <p className="text-gray-600 text-lg">Exit Readiness Assessment</p>
        </div>

        {/* Progress Section */}
        <div className="bg-gray-50 rounded-2xl p-6 mb-8">
          <div className="flex justify-between items-center mb-4">
            <span className="text-lg text-primary font-semibold flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Assessment Progress
            </span>
            <div className="flex items-center gap-2">
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-lg text-sm font-medium">
                8 mins remaining
              </span>
            </div>
          </div>
          <div className="flex justify-between items-center mb-3">
            <span className="text-2xl font-bold text-gray-900">8 of 11 factors</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
            <div 
              className="bg-gradient-to-r from-primary to-accent h-3 rounded-full transition-all duration-1000 ease-out relative overflow-hidden"
              style={{ width: '72.7%' }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Factor Grid */}
        <div className="grid grid-cols-2 gap-4">
          {[
            { name: "Financial Performance", completed: true, icon: "💰" },
            { name: "Documentation", completed: true, icon: "📄" },
            { name: "Team & Transition", completed: true, icon: "👥" },
            { name: "Strategic Planning", completed: false, icon: "🎯" },
            { name: "Operations", completed: true, icon: "⚙️" },
            { name: "Market Position", completed: false, icon: "📈" },
          ].map((factor, i) => (
            <div 
              key={i}
              className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                factor.completed 
                  ? 'bg-primary/5 border-primary/20' 
                  : i === 3 
                    ? 'bg-yellow-50 border-yellow-200 shadow-lg ring-2 ring-yellow-400/50' 
                    : 'bg-gray-50 border-gray-200'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold ${
                  factor.completed 
                    ? 'bg-primary text-white' 
                    : i === 3 
                      ? 'bg-yellow-400 text-white animate-pulse' 
                      : 'bg-gray-300 text-gray-600'
                }`}>
                  {factor.completed ? '✓' : factor.icon}
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 text-sm">{factor.name}</h4>
                </div>
                {factor.completed && (
                  <CheckCircle className="w-5 h-5 text-primary" />
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="flex justify-center gap-8 mt-8 p-6 bg-yellow-50 rounded-2xl">
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900">73%</div>
            <div className="text-sm text-gray-600">Complete</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900">8:47</div>
            <div className="text-sm text-gray-600">Remaining</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900">11</div>
            <div className="text-sm text-gray-600">Total Factors</div>
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
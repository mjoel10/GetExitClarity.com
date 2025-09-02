import { Button } from "@/components/ui/button";
import { CheckCircle, Target, TrendingUp, Sparkles, ArrowRight } from "lucide-react";

// Professional Assessment Visual Component
function AssessmentProgress() {
  return (
    <div className="relative">
      {/* Decorative background elements */}
      <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-blue-200/30 to-primary/20 rounded-full blur-2xl"></div>
      <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-tr from-primary/30 to-blue-300/20 rounded-full blur-xl"></div>
      
      <div 
        className="relative max-w-lg mx-auto rounded-3xl p-6 shadow-2xl border border-white/60 backdrop-blur-sm"
        style={{ 
          background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(248,250,252,0.95) 100%)'
        }}
      >
        {/* Animated particles background */}
        <div className="absolute inset-0 overflow-hidden rounded-3xl">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1.5 h-1.5 bg-primary/20 rounded-full animate-pulse"
              style={{
                left: `${15 + i * 8}%`,
                top: `${10 + (i % 4) * 25}%`,
                animationDelay: `${i * 0.4}s`
              }}
            />
          ))}
        </div>

        {/* Platform Card */}
        <div className="relative z-10">
          {/* Visual Header */}
          <div className="text-center mb-6">
            <div className="w-8 h-8 rounded-xl mx-auto bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center shadow-sm">
              <CheckCircle className="w-4 h-4 text-white" />
            </div>
          </div>

          {/* Enhanced Progress Section */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-2xl p-5 mb-6 border border-blue-200/50 shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="text-sm font-bold text-primary">Assessment Progress</span>
              </div>
              <span className="bg-primary/15 text-primary px-3 py-1.5 rounded-xl text-xs font-bold shadow-sm">
                8 mins remaining
              </span>
            </div>
            
            <div className="mb-3">
              <span className="text-2xl font-bold text-gray-900">8 of 11 factors</span>
            </div>
            
            <div className="w-full bg-white rounded-full h-3 mb-1 shadow-inner border border-gray-200">
              <div 
                className="bg-gradient-to-r from-primary via-blue-500 to-blue-600 h-3 rounded-full transition-all duration-1000 ease-out relative overflow-hidden shadow-sm"
                style={{ width: '72.7%' }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Enhanced Factor Grid */}
          <div className="grid grid-cols-2 gap-3 mb-6">
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
                className={`p-4 rounded-xl border transition-all duration-300 ${
                  factor.completed 
                    ? 'bg-gradient-to-br from-blue-50 to-blue-100/50 border-blue-200 shadow-sm' 
                    : factor.active 
                      ? 'bg-gradient-to-br from-teal-50 to-teal-100/50 border-teal-300 shadow-md ring-1 ring-teal-400/30' 
                      : 'bg-gradient-to-br from-gray-50 to-gray-100/50 border-gray-200'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-7 h-7 rounded-xl flex items-center justify-center text-xs font-bold shadow-sm ${
                      factor.completed 
                        ? 'bg-gradient-to-br from-primary to-blue-600 text-white' 
                        : factor.active 
                          ? 'bg-gradient-to-br from-teal-400 to-teal-500 text-white' 
                          : 'bg-gradient-to-br from-gray-300 to-gray-400 text-gray-600'
                    }`}>
                      {factor.completed ? '✓' : 
                       factor.active ? <Target className="w-4 h-4" /> : 
                       factor.name === 'Market Position' ? <TrendingUp className="w-4 h-4" /> : '○'}
                    </div>
                    <h4 className="font-semibold text-gray-900 text-xs leading-tight">{factor.name}</h4>
                  </div>
                  {factor.completed && (
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced Bottom Stats */}
          <div className="grid grid-cols-3 gap-4 p-4 bg-gradient-to-br from-gray-50 to-gray-100/50 rounded-2xl border border-gray-200 shadow-sm">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900 mb-1">73%</div>
              <div className="text-xs text-gray-600 font-medium">Complete</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900 mb-1">8:47</div>
              <div className="text-xs text-gray-600 font-medium">Remaining</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900 mb-1">11</div>
              <div className="text-xs text-gray-600 font-medium">Total Factors</div>
            </div>
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
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Premium Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/30 to-slate-50"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-primary/10 to-blue-200/20 rounded-full blur-3xl opacity-60"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-tr from-blue-100/40 to-primary/10 rounded-full blur-2xl opacity-40"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* Left Side - Enhanced Content */}
          <div className="order-1 lg:order-1 space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                Are You Ready to{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">
                  Sell Your Business?
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed">
                Get a free personalized exit readiness report in 20 minutes
              </p>
            </div>
            
            {/* Enhanced Value Propositions */}
            <div className="space-y-4">
              {[
                "Realistic business valuation ranges",
                "Clear timeline for optimal sale", 
                "GO / FIX / WAIT recommendations across 11 categories"
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-4 group">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-blue-600/20 rounded-full blur-sm group-hover:blur-md transition-all duration-300"></div>
                    <CheckCircle className="relative w-7 h-7 text-primary flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <span className="text-lg text-foreground group-hover:text-primary transition-colors duration-300 font-medium">
                    {item}
                  </span>
                </div>
              ))}
            </div>
            
            {/* Enhanced CTA Section */}
            <div className="space-y-6">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-blue-600/20 rounded-2xl blur-xl"></div>
                <Button 
                  onClick={handleCTAClick}
                  variant="hero"
                  size="xl"
                  className="relative font-semibold transition-all duration-300 hover:shadow-2xl hover:scale-105 bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 text-lg px-8 py-4"
                >
                  Start Your Assessment
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
              
              {/* Trust Indicator with Free Messaging */}
              <div className="space-y-3">
                <p className="text-sm text-muted-foreground font-medium">
                  No credit card required
                </p>
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-blue-600 border-2 border-white shadow-sm"></div>
                    ))}
                  </div>
                  <p className="text-muted-foreground font-medium">
                    Join 500+ business owners who've discovered their exit readiness
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Side - Enhanced Assessment Visual */}
          <div className="order-2 lg:order-2">
            <AssessmentProgress />
          </div>
        </div>
      </div>
    </section>
  );
}
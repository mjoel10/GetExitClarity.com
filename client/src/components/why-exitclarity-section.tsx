import { Button } from "@/components/ui/button";
import { Handshake, Award, Shield, FileText, CheckCircle, ArrowRight, Star } from "lucide-react";

export function WhyExitClaritySection() {
  const handleCTAClick = () => {
    window.open('https://app.exitclarity.io/signupdirect', '_blank');
  };

  const reasons = [
    {
      icon: Handshake,
      title: "Owner-First Approach",
      description: "No hidden agenda. We don't broker deals or take commissions."
    },
    {
      icon: Award,
      title: "30+ Years Experience",
      description: "Built on decades of real business ownership and M&A expertise"
    },
    {
      icon: Shield,
      title: "Private & Secure",
      description: "Your report is confidential. Never shared without your explicit approval."
    }
  ];

  return (
    <section className="relative py-16 lg:py-20 overflow-hidden">
      {/* Premium Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/30 to-slate-50"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-blue-100/40 to-primary/10 rounded-full blur-2xl opacity-40"></div>
      <div className="absolute bottom-10 left-10 w-24 h-24 bg-gradient-to-tr from-primary/30 to-blue-300/20 rounded-full blur-xl opacity-60"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-primary/20">
            <FileText className="w-4 h-4" />
            Your Comprehensive Report
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-extrabold text-foreground mb-6 leading-tight">
            Get Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">
              Personalized Exit Readiness
            </span>{" "}
            Assessment
          </h2>
          
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            See exactly where your business stands and what needs to be done to maximize your exit value
          </p>
        </div>

        {/* Report Preview + What You'll Receive */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Premium Report Visual */}
          <div className="relative">
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-blue-200/30 to-primary/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-tr from-primary/30 to-blue-300/20 rounded-full blur-xl"></div>
            
            <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/60 w-full max-w-2xl mx-auto">
              {/* Premium Page Count Badge */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-2xl text-sm font-bold shadow-xl">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  20-30 Page Report
                </div>
              </div>

              {/* Enhanced Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center shadow-lg">
                    <span className="text-white text-lg font-bold">E</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">ExitClarity Report</h4>
                    <p className="text-xs text-gray-500 font-medium">Professional Assessment</p>
                  </div>
                </div>
                <div className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs font-semibold">
                  Sample
                </div>
              </div>

              {/* Enhanced Key Metrics Section */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-2xl p-6 mb-6 border border-blue-200/50">
                <div className="flex items-center justify-between">
                  {/* Enhanced Score Circle */}
                  <div className="relative w-20 h-20 flex-shrink-0">
                    <svg className="w-20 h-20 transform -rotate-90">
                      <circle cx="40" cy="40" r="32" stroke="#e5e7eb" strokeWidth="5" fill="none" />
                      <circle 
                        cx="40" 
                        cy="40" 
                        r="32" 
                        stroke="url(#gradient)" 
                        strokeWidth="5" 
                        fill="none"
                        strokeLinecap="round"
                        strokeDasharray="201"
                        strokeDashoffset="60"
                      />
                      <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" style={{stopColor:"#0B5FFF"}} />
                          <stop offset="100%" style={{stopColor:"#3B82F6"}} />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-2xl font-bold text-gray-900">85</div>
                    </div>
                  </div>

                  {/* Enhanced Metrics */}
                  <div className="flex-1 px-8">
                    <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-xl mb-4 shadow-sm">
                      <CheckCircle className="w-5 h-5" />
                      <span className="font-semibold">Ready to Exit</span>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-6">
                      <div className="text-center">
                        <div className="text-xl font-bold text-gray-900 mb-1">$12M-$18M</div>
                        <div className="text-xs text-gray-500 uppercase font-semibold tracking-wide">Est. Value</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xl font-bold text-gray-900 mb-1">4.2x</div>
                        <div className="text-xs text-gray-500 uppercase font-semibold tracking-wide">Multiple</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xl font-bold text-gray-900 mb-1">94%</div>
                        <div className="text-xs text-gray-500 uppercase font-semibold tracking-wide">Readiness</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced Content Preview */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-4 border border-gray-200">
                  <h4 className="font-bold text-gray-800 mb-3 text-xs uppercase tracking-wide">Executive Summary</h4>
                  <div className="space-y-2">
                    <div className="h-2 bg-gradient-to-r from-gray-300 to-gray-200 rounded w-full"></div>
                    <div className="h-2 bg-gradient-to-r from-gray-300 to-gray-200 rounded w-4/5"></div>
                    <div className="h-2 bg-gradient-to-r from-gray-300 to-gray-200 rounded w-3/4"></div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-4 border border-gray-200">
                  <h4 className="font-bold text-gray-800 mb-3 text-xs uppercase tracking-wide">11 Assessments</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-700 font-medium">Financial</span>
                      <div className="w-10 h-2 bg-gradient-to-r from-green-500 to-green-400 rounded-full"></div>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-700 font-medium">Market</span>
                      <div className="w-8 h-2 bg-gradient-to-r from-blue-500 to-blue-400 rounded-full"></div>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-700 font-medium">Operations</span>
                      <div className="w-6 h-2 bg-gradient-to-r from-yellow-500 to-yellow-400 rounded-full"></div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-4 border border-gray-200">
                  <h4 className="font-bold text-gray-800 mb-3 text-xs uppercase tracking-wide">Recommendations</h4>
                  <div className="space-y-2">
                    <div className="h-2 bg-gradient-to-r from-gray-300 to-gray-200 rounded w-full"></div>
                    <div className="h-2 bg-gradient-to-r from-gray-300 to-gray-200 rounded w-5/6"></div>
                    <div className="h-2 bg-gradient-to-r from-gray-300 to-gray-200 rounded w-4/5"></div>
                  </div>
                </div>
              </div>

              {/* Enhanced Badge */}
              <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-3 rounded-2xl text-sm font-bold shadow-xl">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  11 Critical Factors
                </div>
              </div>
            </div>
          </div>
          
          {/* What You'll Receive */}
          <div className="space-y-6">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-4 leading-tight">
                This is what you'll receive
              </h3>
              
              <ul className="space-y-3">
                {[
                  "Comprehensive exit readiness score (0-100)",
                  "Realistic valuation ranges based on your industry", 
                  "Clear GO/FIX/WAIT recommendation",
                  "Detailed analysis across 11 critical factors",
                  "Prioritized action plan with ROI estimates"
                ].map((item, index) => (
                  <li key={index} className="flex items-start group">
                    <div className="w-3 h-3 bg-gradient-to-br from-primary to-blue-600 rounded-full mt-2 mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-200"></div>
                    <span className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-200">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-blue-600/10 rounded-2xl blur-xl"></div>
              <Button 
                onClick={handleCTAClick}
                variant="hero"
                size="xl"
                className="relative font-semibold transition-all duration-300 hover:shadow-xl hover:scale-105 bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90"
              >
                Get Your Free Report Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>

        {/* Cohesive Unbiased Advice Section - Different Visual Treatment */}
        <div className="relative">
          {/* Connecting visual element */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-px h-8 bg-gradient-to-b from-primary/40 to-transparent"></div>
          
          {/* Content Card */}
          <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-8 lg:p-10 shadow-2xl border border-slate-700/50 relative overflow-hidden">
            {/* Dark theme decorative elements */}
            <div className="absolute top-6 right-6 w-24 h-24 bg-gradient-to-br from-blue-400/20 to-primary/20 rounded-full blur-2xl"></div>
            <div className="absolute bottom-6 left-6 w-20 h-20 bg-gradient-to-tr from-primary/20 to-blue-400/20 rounded-full blur-xl"></div>
            
            <div className="relative z-10">
              {/* Header */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold mb-4 border border-white/20">
                  <Star className="w-4 h-4" />
                  Built by Business Owners
                </div>
                
                <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-4 leading-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                    Unbiased Advice
                  </span>{" "}
                  You Can Trust
                </h2>
                
                <p className="text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto">
                  Built by business owners, for business owners. Get the insights you need without hidden agendas.
                </p>
              </div>

              {/* Trust Points - Horizontal Layout */}
              <div className="grid md:grid-cols-3 gap-8">
                {reasons.map((reason, index) => {
                  const Icon = reason.icon;
                  return (
                    <div key={index} className="text-center group">
                      <div className="relative mb-6">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-400/30 to-cyan-400/30 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
                        <div className="relative w-16 h-16 rounded-2xl mx-auto flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 bg-gradient-to-br from-slate-700 to-slate-800 border border-slate-600">
                          <Icon className="w-8 h-8 text-blue-400" />
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                        {reason.title}
                      </h3>
                      <p className="text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
                        {reason.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
import { Button } from "@/components/ui/button";
import { Clipboard, BarChart3, FileText, CheckCircle, ArrowRight, TrendingUp } from "lucide-react";

export function AssessmentProcessSection() {
  const handleCTAClick = () => {
    window.open('https://app.exitclarity.io/signupdirect', '_blank');
  };

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Premium Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-blue-50/30"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-32 left-10 w-40 h-40 bg-gradient-to-br from-primary/10 to-blue-200/20 rounded-full blur-3xl opacity-60"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-tr from-blue-100/40 to-primary/10 rounded-full blur-2xl opacity-40"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Enhanced Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <TrendingUp className="w-4 h-4" />
            Professional Assessment Process
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-foreground mb-6 leading-tight">
            Your Personalized{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">
              Exit Readiness Report
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Get professional insights in minutes with our comprehensive analysis
          </p>
        </div>

        {/* Enhanced Three-step process */}
        <div className="relative mb-24">
          {/* Connecting Lines */}
          <div className="hidden md:block absolute top-16 left-1/2 transform -translate-x-1/2 w-full max-w-4xl">
            <div className="relative h-0.5 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20">
              <div className="absolute left-1/6 top-0 w-4 h-0.5 bg-primary transform -translate-x-1/2"></div>
              <div className="absolute right-1/6 top-0 w-4 h-0.5 bg-primary transform translate-x-1/2"></div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Step 1 */}
            <div className="relative text-center group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-blue-600/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <div className="relative w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <Clipboard className="w-9 h-9 text-white" />
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    1
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Take Assessment</h3>
              <p className="text-muted-foreground leading-relaxed">
                Answer questions about your business in 5-7 minutes
              </p>
              
              {/* Arrow for desktop */}
              <div className="hidden md:block absolute top-16 -right-4 text-primary/40">
                <ArrowRight className="w-6 h-6" />
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative text-center group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-blue-600/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <div className="relative w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <BarChart3 className="w-9 h-9 text-white" />
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    2
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Get Instant Analysis</h3>
              <p className="text-muted-foreground leading-relaxed">
                Algorithm analyzes against 1000+ successful exits
              </p>
              
              {/* Arrow for desktop */}
              <div className="hidden md:block absolute top-16 -right-4 text-primary/40">
                <ArrowRight className="w-6 h-6" />
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative text-center group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-blue-600/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <div className="relative w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <FileText className="w-9 h-9 text-white" />
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    3
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Receive Your Report</h3>
              <p className="text-muted-foreground leading-relaxed">
                Detailed report with valuation and action plan
              </p>
            </div>
          </div>
        </div>

        {/* Enhanced Report Preview */}
        <div className="grid lg:grid-cols-2 gap-20 items-center">
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
          
          {/* Enhanced Description */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-6 leading-tight">
                This is what you'll receive
              </h3>
              
              <ul className="space-y-5">
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
      </div>
    </section>
  );
}
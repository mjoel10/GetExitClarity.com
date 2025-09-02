import { Clipboard, BarChart3, FileText, TrendingUp, ArrowRight } from "lucide-react";

export function AssessmentStepsSection() {
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
        <div className="relative">
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
      </div>
    </section>
  );
}
import { Clipboard, BarChart3, FileText, TrendingUp, ArrowDown } from "lucide-react";

export function AssessmentStepsSection() {
  const steps = [
    {
      icon: Clipboard,
      number: 1,
      title: "Take Assessment",
      description: "Answer questions about your business in 20-30 minutes"
    },
    {
      icon: BarChart3,
      number: 2,
      title: "Get Instant Analysis",
      description: "Algorithm analyzes against 500+ successful exits and past mistakes"
    },
    {
      icon: FileText,
      number: 3,
      title: "Receive Your Report",
      description: "Valuation ranges, realistic timeline for when to sell, an action plan with ROI paybacks, and a clear GO / FIX / WAIT recommendation"
    }
  ];

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Premium Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-blue-50/30"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-32 left-10 w-40 h-40 bg-gradient-to-br from-primary/10 to-blue-200/20 rounded-full blur-3xl opacity-60"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-tr from-blue-100/40 to-primary/10 rounded-full blur-2xl opacity-40"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Side-by-side Layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Left: Header Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
              <TrendingUp className="w-4 h-4" />
              Professional Assessment Process
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-extrabold text-foreground leading-tight">
              How It{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">
                Works
              </span>
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Get professional insights in minutes with our simple 3-step process
            </p>
            
            <div className="pt-4">
              <div className="inline-flex items-center gap-3 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>5-7 minutes</span>
                </div>
                <div className="w-px h-4 bg-muted"></div>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Instant results</span>
                </div>
                <div className="w-px h-4 bg-muted"></div>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span>20-30 page report</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right: Vertical Steps */}
          <div className="space-y-8">
            {/* Connecting Line */}
            <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-primary/20 via-primary/40 to-primary/20 hidden lg:block"></div>
            
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative group">
                  <div className="flex items-start gap-6">
                    {/* Step Icon */}
                    <div className="relative flex-shrink-0">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-blue-600/20 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
                      <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                        <Icon className="w-7 h-7 text-white" />
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg">
                          {step.number}
                        </div>
                      </div>
                    </div>
                    
                    {/* Step Content */}
                    <div className="flex-1 pt-2">
                      <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
                        {step.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Vertical Arrow */}
                  {index < steps.length - 1 && (
                    <div className="flex justify-center mt-6 mb-2 lg:hidden">
                      <ArrowDown className="w-5 h-5 text-primary/60" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
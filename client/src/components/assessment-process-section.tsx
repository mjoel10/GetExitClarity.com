import { Button } from "@/components/ui/button";
import { Clipboard, BarChart3, FileText, CheckCircle } from "lucide-react";

export function AssessmentProcessSection() {
  const handleCTAClick = () => {
    window.open('https://app.exitclarity.io/signupdirect', '_blank');
  };

  return (
    <section className="py-20 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl font-extrabold text-foreground mb-4" style={{ lineHeight: '1.3' }}>
            Your Personalized Exit Readiness Report
          </h2>
        </div>

        {/* Three-step process */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {/* Step 1 */}
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: '#0B5FFF' }}>
              <Clipboard className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-3">Take Assessment</h3>
            <p className="text-sm text-muted-foreground" style={{ lineHeight: '1.5' }}>Answer questions about your business in 5-7 minutes</p>
          </div>

          {/* Step 2 */}
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: '#0B5FFF' }}>
              <BarChart3 className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-3">Get Instant Analysis</h3>
            <p className="text-sm text-muted-foreground" style={{ lineHeight: '1.5' }}>Algorithm analyzes against 1000+ successful exits</p>
          </div>

          {/* Step 3 */}
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: '#0B5FFF' }}>
              <FileText className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-3">Receive Your Report</h3>
            <p className="text-sm text-muted-foreground" style={{ lineHeight: '1.5' }}>Detailed report with valuation and action plan</p>
          </div>
        </div>

        {/* Report Preview */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Report Visual */}
          <div className="bg-white rounded-2xl p-6 border shadow-lg w-full max-w-2xl mx-auto relative">
            {/* Page Count Badge */}
            <div className="absolute -top-3 -right-3 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
              20-30 Page Report
            </div>

            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#0B5FFF' }}>
                  <span className="text-white text-sm font-bold">E</span>
                </div>
                <span className="font-bold text-gray-900">ExitClarity Report</span>
              </div>
              <span className="text-gray-400 text-sm">Sample</span>
            </div>

            {/* Top Section: Key Metrics + Score */}
            <div className="bg-blue-50 rounded-xl p-4 mb-4 border">
              <div className="flex items-center justify-between">
                {/* Score Circle */}
                <div className="relative w-16 h-16 flex-shrink-0">
                  <svg className="w-16 h-16 transform -rotate-90">
                    <circle cx="32" cy="32" r="26" stroke="#e5e7eb" strokeWidth="4" fill="none" />
                    <circle 
                      cx="32" 
                      cy="32" 
                      r="26" 
                      stroke="#0B5FFF" 
                      strokeWidth="4" 
                      fill="none"
                      strokeLinecap="round"
                      strokeDasharray="163"
                      strokeDashoffset="49"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-lg font-bold text-gray-900">85</div>
                  </div>
                </div>

                {/* Key Metrics */}
                <div className="flex-1 px-6">
                  <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-3 py-1 rounded-full mb-3">
                    <CheckCircle className="w-4 h-4" />
                    <span className="font-semibold text-sm">Ready to Exit</span>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-lg font-bold text-gray-900">$12M-$18M</div>
                      <div className="text-xs text-gray-500 uppercase">Est. Value</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-gray-900">4.2x</div>
                      <div className="text-xs text-gray-500 uppercase">Multiple</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-gray-900">94%</div>
                      <div className="text-xs text-gray-500 uppercase">Readiness</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Section: Content Preview */}
            <div className="grid grid-cols-3 gap-4">
              {/* Executive Summary */}
              <div className="bg-gray-50 rounded-lg p-3 border">
                <h4 className="font-bold text-gray-800 mb-2 text-xs uppercase tracking-wide">Executive Summary</h4>
                <div className="space-y-1">
                  <div className="h-1.5 bg-gray-300 rounded w-full"></div>
                  <div className="h-1.5 bg-gray-300 rounded w-4/5"></div>
                  <div className="h-1.5 bg-gray-300 rounded w-3/4"></div>
                </div>
              </div>

              {/* Key Assessments */}
              <div className="bg-gray-50 rounded-lg p-3 border">
                <h4 className="font-bold text-gray-800 mb-2 text-xs uppercase tracking-wide">11 Assessments</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-700">Financial</span>
                    <div className="w-8 h-1.5 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-700">Market</span>
                    <div className="w-6 h-1.5 bg-blue-500 rounded-full"></div>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-700">Operations</span>
                    <div className="w-4 h-1.5 bg-yellow-500 rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Recommendations */}
              <div className="bg-gray-50 rounded-lg p-3 border">
                <h4 className="font-bold text-gray-800 mb-2 text-xs uppercase tracking-wide">Recommendations</h4>
                <div className="space-y-1">
                  <div className="h-1.5 bg-gray-300 rounded w-full"></div>
                  <div className="h-1.5 bg-gray-300 rounded w-5/6"></div>
                  <div className="h-1.5 bg-gray-300 rounded w-4/5"></div>
                </div>
              </div>
            </div>

            {/* 11 Critical Factors Badge */}
            <div className="absolute -bottom-3 -left-3 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
              11 Critical Factors
            </div>
          </div>
          
          {/* Description */}
          <div>
            <h3 className="text-xl font-bold text-foreground mb-6">
              This is what you'll receive
            </h3>
            <ul className="space-y-4 text-sm text-muted-foreground" style={{ lineHeight: '1.6' }}>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Comprehensive exit readiness score (0-100)</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Realistic valuation ranges based on your industry</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Clear GO/FIX/WAIT recommendation</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Detailed analysis across 11 critical factors</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Prioritized action plan with ROI estimates</span>
              </li>
            </ul>
            
            <div className="mt-8">
              <Button 
                onClick={handleCTAClick}
                variant="hero"
                size="lg"
                className="font-semibold transition-all duration-200 hover:shadow-lg hover:scale-105"
              >
                Get Your Free Report Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
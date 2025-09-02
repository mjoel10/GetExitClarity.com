import { Button } from "@/components/ui/button";
import { Clipboard, BarChart3, FileText, CheckCircle } from "lucide-react";

export function AssessmentProcessSection() {
  const handleCTAClick = () => {
    window.open('https://app.exitclarity.io/signupdirect', '_blank');
  };

  return (
    <section className="pt-24 pb-24 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h2 className="text-4xl font-extrabold text-foreground mb-8 mt-20" style={{ lineHeight: '1.3' }}>
            Your Personalized Exit Readiness Report
          </h2>
        </div>

        {/* Simplified Three-step process */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
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
        <div className="bg-white rounded-2xl p-8 shadow-lg border">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Simplified Report Visual */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 border shadow-lg max-w-lg mx-auto">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#0B5FFF' }}>
                    <span className="text-white text-sm font-bold">E</span>
                  </div>
                  <span className="font-bold text-gray-900">Exit Readiness Report</span>
                </div>
              </div>

              {/* Main Score */}
              <div className="bg-white rounded-xl p-6 shadow-sm border mb-6">
                <div className="flex items-center gap-6">
                  {/* Score Circle */}
                  <div className="relative w-20 h-20 flex-shrink-0">
                    <svg className="w-20 h-20 transform -rotate-90">
                      <circle cx="40" cy="40" r="32" stroke="#e5e7eb" strokeWidth="6" fill="none" />
                      <circle 
                        cx="40" 
                        cy="40" 
                        r="32" 
                        stroke="#0B5FFF" 
                        strokeWidth="6" 
                        fill="none"
                        strokeLinecap="round"
                        strokeDasharray="201"
                        strokeDashoffset="60"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-2xl font-bold text-gray-900">85</div>
                    </div>
                  </div>

                  {/* Score Details */}
                  <div className="flex-1">
                    <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-3 py-1 rounded-full mb-3">
                      <CheckCircle className="w-4 h-4" />
                      <span className="font-semibold text-sm">Ready to Exit</span>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3">
                      <div className="text-center">
                        <div className="text-lg font-bold text-gray-900">$12M-$18M</div>
                        <div className="text-xs text-gray-500 uppercase">Est. Value</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-gray-900">4.2x</div>
                        <div className="text-xs text-gray-500 uppercase">Multiple</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Report Sections Preview */}
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900 mb-3">11 Critical Areas Analyzed:</h4>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">Financial Performance</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">Market Position</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <span className="text-gray-700">Team & Management</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">Customer Base</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-gray-700">Documentation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">Operations</span>
                  </div>
                </div>
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
      </div>
    </section>
  );
}
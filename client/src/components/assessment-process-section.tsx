import { Button } from "@/components/ui/button";
import { Clipboard, BarChart3, FileText, CheckCircle } from "lucide-react";

export function AssessmentProcessSection() {
  const handleCTAClick = () => {
    window.open('https://app.exitclarity.io/signupdirect', '_blank');
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6" style={{ lineHeight: '1.5' }}>
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
            <h3 className="text-lg font-bold text-foreground mb-2">Take Assessment</h3>
            <p className="text-muted-foreground" style={{ lineHeight: '1.5' }}>Answer questions about your business in 5-7 minutes</p>
          </div>

          {/* Step 2 */}
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: '#0B5FFF' }}>
              <BarChart3 className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">Get Instant Analysis</h3>
            <p className="text-muted-foreground" style={{ lineHeight: '1.5' }}>Algorithm analyzes against 1000+ successful exits</p>
          </div>

          {/* Step 3 */}
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: '#0B5FFF' }}>
              <FileText className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">Receive Your Report</h3>
            <p className="text-muted-foreground" style={{ lineHeight: '1.5' }}>Detailed report with valuation and action plan</p>
          </div>
        </div>

        {/* Report Preview */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Report Visual - Improved MacBook Style */}
            <div 
              className="rounded-2xl p-4 shadow-2xl relative overflow-hidden max-w-md mx-auto"
              style={{ background: 'linear-gradient(135deg, #1a1f2e 0%, #2d3748 100%)' }}
            >
              {/* MacBook Frame */}
              <div className="bg-black rounded-xl p-2 shadow-2xl">
                <div className="bg-white rounded-lg overflow-hidden">
                  {/* Application Header */}
                  <div className="bg-gray-900 text-white px-3 py-2 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">E</span>
                      </div>
                      <span className="text-xs font-semibold">ExitClarity</span>
                    </div>
                    <div className="flex gap-3 text-xs">
                      <span className="text-primary">Analysis</span>
                      <span className="text-gray-400">Recommendations</span>
                    </div>
                    <div className="flex gap-1">
                      <button className="bg-primary text-white px-2 py-1 rounded text-xs">Export</button>
                      <button className="border border-gray-600 text-gray-300 px-2 py-1 rounded text-xs">Share</button>
                    </div>
                  </div>

                  {/* Main Content */}
                  <div className="flex h-80">
                    {/* Sidebar */}
                    <div className="w-24 bg-gray-50 border-r p-2">
                      <div className="bg-white rounded p-2 mb-3 border">
                        <div className="text-xs font-bold text-gray-900">#EC-2024-156</div>
                        <div className="text-xs text-gray-600">TechVision Solutions</div>
                        <div className="text-xs text-gray-500">Dec 2024</div>
                      </div>
                      
                      <div className="space-y-1">
                        <div className="text-xs font-semibold text-gray-500 uppercase mb-1">Report Sections</div>
                        <div className="bg-primary/10 text-primary px-1 py-1 rounded text-xs font-medium">Executive Summary</div>
                        <div className="text-gray-600 px-1 py-1 text-xs hover:bg-gray-100 rounded">Financial Analysis</div>
                        <div className="text-gray-600 px-1 py-1 text-xs hover:bg-gray-100 rounded">Market Position</div>
                        <div className="text-gray-600 px-1 py-1 text-xs hover:bg-gray-100 rounded">Risk Assessment</div>
                        <div className="text-gray-600 px-1 py-1 text-xs hover:bg-gray-100 rounded flex justify-between">
                          Recommendations 
                          <span className="bg-primary text-white text-xs px-1 rounded">8</span>
                        </div>
                      </div>
                    </div>

                    {/* Content Area */}
                    <div className="flex-1 p-3 bg-gray-50">
                      <div className="mb-4">
                        <h1 className="text-sm font-bold text-gray-900 mb-1">Executive Summary</h1>
                        <p className="text-xs text-gray-600">Comprehensive exit readiness analysis for TechVision Solutions</p>
                      </div>

                      {/* Score Card */}
                      <div className="bg-white rounded-lg p-4 shadow-sm border mb-4">
                        <div className="flex items-center gap-4">
                          {/* Score Circle */}
                          <div className="relative w-16 h-16 flex-shrink-0">
                            <svg className="w-16 h-16 transform -rotate-90">
                              <circle cx="32" cy="32" r="26" stroke="#e5e7eb" strokeWidth="4" fill="none" />
                              <circle 
                                cx="32" 
                                cy="32" 
                                r="26" 
                                stroke="url(#reportScoreGradient2)" 
                                strokeWidth="4" 
                                fill="none"
                                strokeLinecap="round"
                                strokeDasharray="163"
                                strokeDashoffset="49"
                              />
                              <defs>
                                <linearGradient id="reportScoreGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                                  <stop offset="0%" stopColor="#6e7fff" />
                                  <stop offset="100%" stopColor="#4a5f8f" />
                                </linearGradient>
                              </defs>
                            </svg>
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="text-center">
                                <div className="text-lg font-bold text-gray-900">70</div>
                              </div>
                            </div>
                          </div>

                          {/* Score Details */}
                          <div className="flex-1 min-w-0">
                            <div className="inline-flex items-center gap-1 bg-gradient-to-r from-primary to-accent text-white px-2 py-1 rounded mb-2">
                              <CheckCircle className="w-3 h-3" />
                              <span className="font-semibold text-xs">GO - Proceed to Market</span>
                            </div>
                            
                            <div className="grid grid-cols-3 gap-2">
                              <div className="bg-gray-50 rounded p-2 text-center">
                                <div className="text-xs text-gray-500 uppercase">Enterprise Value</div>
                                <div className="text-xs font-bold text-gray-900">$12M-$18M</div>
                              </div>
                              <div className="bg-gray-50 rounded p-2 text-center">
                                <div className="text-xs text-gray-500 uppercase">Multiple</div>
                                <div className="text-xs font-bold text-gray-900">4.2x</div>
                              </div>
                              <div className="bg-gray-50 rounded p-2 text-center">
                                <div className="text-xs text-gray-500 uppercase">Readiness</div>
                                <div className="text-xs font-bold text-gray-900">94%</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Additional Content Preview */}
                      <div className="space-y-2">
                        <div className="bg-white rounded p-2 border">
                          <h3 className="font-semibold text-gray-900 mb-1 text-xs">Key Strengths</h3>
                          <div className="text-xs text-gray-600 leading-relaxed">
                            Strong financial performance with consistent EBITDA growth of 15% annually...
                          </div>
                        </div>
                        
                        <div className="bg-white rounded p-2 border">
                          <h3 className="font-semibold text-gray-900 mb-1 text-xs">Areas for Improvement</h3>
                          <div className="text-xs text-gray-600 leading-relaxed">
                            Documentation gaps in key customer contracts and operational procedures...
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* MacBook Base */}
              <div className="w-full h-1 bg-gradient-to-r from-gray-400 to-gray-500 rounded-b-lg mt-1"></div>
            </div>
            
            {/* Description */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                This is what you'll receive
              </h3>
              <ul className="space-y-3 text-muted-foreground">
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
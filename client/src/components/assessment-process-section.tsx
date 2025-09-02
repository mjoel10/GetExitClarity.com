import { Button } from "@/components/ui/button";
import { Clipboard, BarChart3, FileText } from "lucide-react";

export function AssessmentProcessSection() {
  const handleCTAClick = () => {
    window.open('https://app.exitclarity.io/signupdirect', '_blank');
  };

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-8">
            Your Personalized Exit Readiness Report
          </h2>
        </div>

        {/* Three-step process */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Step 1 */}
          <div className="text-center">
            <div className="relative mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full mx-auto flex items-center justify-center mb-4">
                <Clipboard className="w-10 h-10 text-white" />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">1</span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-foreground mb-4">Take Assessment (5-7 min)</h3>
            <p className="text-muted-foreground">
              Answer questions about your business operations, financials, and goals
            </p>
          </div>

          {/* Step 2 */}
          <div className="text-center">
            <div className="relative mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full mx-auto flex items-center justify-center mb-4">
                <BarChart3 className="w-10 h-10 text-white" />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">2</span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-foreground mb-4">Get Instant Analysis (automated)</h3>
            <p className="text-muted-foreground">
              Our algorithm analyzes your responses against 1000+ successful exits
            </p>
          </div>

          {/* Step 3 */}
          <div className="text-center">
            <div className="relative mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full mx-auto flex items-center justify-center mb-4">
                <FileText className="w-10 h-10 text-white" />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">3</span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-foreground mb-4">Receive Your Report (immediate)</h3>
            <p className="text-muted-foreground">
              Get your detailed report with valuation ranges and action plan
            </p>
          </div>
        </div>

        {/* Report Preview */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Report Visual - MacBook Style */}
            <div 
              className="rounded-2xl p-6 shadow-2xl relative overflow-hidden"
              style={{ background: 'linear-gradient(135deg, #1a1f2e 0%, #2d3748 100%)' }}
            >
              {/* MacBook Frame */}
              <div className="bg-black rounded-xl p-2 shadow-2xl">
                <div className="bg-white rounded-lg overflow-hidden">
                  {/* Application Header */}
                  <div className="bg-gray-900 text-white px-4 py-3 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">E</span>
                      </div>
                      <span className="text-sm font-semibold">ExitClarity</span>
                    </div>
                    <div className="flex gap-4 text-xs">
                      <span className="text-primary">Executive Summary</span>
                      <span className="text-gray-400">Analysis</span>
                      <span className="text-gray-400">Recommendations</span>
                    </div>
                    <div className="flex gap-2">
                      <button className="bg-primary text-white px-3 py-1 rounded text-xs">Export</button>
                      <button className="border border-gray-600 text-gray-300 px-3 py-1 rounded text-xs">Share</button>
                    </div>
                  </div>

                  {/* Main Content */}
                  <div className="flex">
                    {/* Sidebar */}
                    <div className="w-48 bg-gray-50 border-r p-4">
                      <div className="bg-white rounded-lg p-3 mb-4 border">
                        <div className="text-lg font-bold text-gray-900">#EC-2024-156</div>
                        <div className="text-xs text-gray-600">TechVision Solutions</div>
                        <div className="text-xs text-gray-500">Dec 2024</div>
                      </div>
                      
                      <div className="space-y-1">
                        <div className="text-xs font-semibold text-gray-500 uppercase mb-2">Report Sections</div>
                        <div className="bg-primary/10 text-primary px-2 py-1 rounded text-xs font-medium">Executive Summary</div>
                        <div className="text-gray-600 px-2 py-1 text-xs hover:bg-gray-100 rounded">Financial Analysis</div>
                        <div className="text-gray-600 px-2 py-1 text-xs hover:bg-gray-100 rounded">Market Position</div>
                        <div className="text-gray-600 px-2 py-1 text-xs hover:bg-gray-100 rounded">Risk Assessment</div>
                        <div className="text-gray-600 px-2 py-1 text-xs hover:bg-gray-100 rounded flex justify-between">
                          Recommendations 
                          <span className="bg-primary text-white text-xs px-1 rounded">8</span>
                        </div>
                      </div>
                    </div>

                    {/* Content Area */}
                    <div className="flex-1 p-6 bg-gray-50">
                      <div className="mb-6">
                        <h1 className="text-xl font-bold text-gray-900 mb-2">Executive Summary</h1>
                        <p className="text-sm text-gray-600">Comprehensive exit readiness analysis for TechVision Solutions</p>
                      </div>

                      {/* Score Card */}
                      <div className="bg-white rounded-xl p-6 shadow-sm border mb-6">
                        <div className="flex items-center gap-6">
                          {/* Score Circle */}
                          <div className="relative w-20 h-20">
                            <svg className="w-20 h-20 transform -rotate-90">
                              <circle cx="40" cy="40" r="32" stroke="#e5e7eb" strokeWidth="6" fill="none" />
                              <circle 
                                cx="40" 
                                cy="40" 
                                r="32" 
                                stroke="url(#scoreGradient)" 
                                strokeWidth="6" 
                                fill="none"
                                strokeLinecap="round"
                                strokeDasharray="201"
                                strokeDashoffset="60"
                              />
                              <defs>
                                <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="0%">
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
                          <div className="flex-1">
                            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-accent text-white px-4 py-2 rounded-lg mb-3">
                              <CheckCircle className="w-4 h-4" />
                              <span className="font-semibold text-sm">GO - Proceed to Market</span>
                            </div>
                            
                            <div className="grid grid-cols-3 gap-4">
                              <div className="bg-gray-50 rounded-lg p-3 text-center">
                                <div className="text-xs text-gray-500 uppercase">Enterprise Value</div>
                                <div className="text-sm font-bold text-gray-900">$12M-$18M</div>
                              </div>
                              <div className="bg-gray-50 rounded-lg p-3 text-center">
                                <div className="text-xs text-gray-500 uppercase">Multiple</div>
                                <div className="text-sm font-bold text-gray-900">4.2x</div>
                              </div>
                              <div className="bg-gray-50 rounded-lg p-3 text-center">
                                <div className="text-xs text-gray-500 uppercase">Readiness</div>
                                <div className="text-sm font-bold text-gray-900">94%</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Additional Content Preview */}
                      <div className="space-y-4">
                        <div className="bg-white rounded-lg p-4 border">
                          <h3 className="font-semibold text-gray-900 mb-2 text-sm">Key Strengths</h3>
                          <div className="text-xs text-gray-600 leading-relaxed">
                            Strong financial performance with consistent EBITDA growth of 15% annually...
                          </div>
                        </div>
                        
                        <div className="bg-white rounded-lg p-4 border">
                          <h3 className="font-semibold text-gray-900 mb-2 text-sm">Areas for Improvement</h3>
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
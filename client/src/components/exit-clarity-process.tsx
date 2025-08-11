import { Target, BarChart3, TrendingUp, CheckCircle, Settings, Zap, Shield, DollarSign, Info, AlertTriangle, TrendingDown, Clock, Calendar, FileText, Users } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "wouter";

export function ExitClarityProcess() {
  const [hoveredFactor, setHoveredFactor] = useState<number | null>(null);
  const [, navigate] = useLocation();

  const handleViewSampleReport = () => {
    navigate("/sample-report");
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  const factorDescriptions = {
    0: "Evaluate your company's market position, competitive advantages, revenue model, and growth trajectory to understand overall business strength and appeal to buyers.",
    1: "Define your exit objectives, preferred timeline, minimum valuation expectations, and deal structure preferences to align strategy with realistic outcomes.",
    2: "Assess your psychological preparation for transition, family alignment, post-exit plans, and emotional attachment to ensure you're truly ready to let go.",
    3: "Review financial reporting standards, revenue predictability, profitability trends, and accounting practices that directly impact valuation and buyer confidence.",
    4: "Analyze systems, processes, technology infrastructure, and operational efficiency to determine how well the business can function independently.",
    5: "Examine legal agreements, compliance records, intellectual property protection, and organizational documentation required for due diligence.",
    6: "Evaluate key person dependencies, management depth, employee retention risks, and succession planning that could affect business continuity.",
    7: "Consider prior transaction attempts, lessons learned, and market knowledge that influence current exit strategy and buyer expectations.",
    8: "Plan advisor selection, marketing approach, buyer targeting, and competitive positioning to maximize exposure and negotiating leverage.",
    9: "Understand transaction structures, risk tolerance, earnout preferences, and terms negotiation to optimize deal outcome and minimize exposure.",
    10: "Prepare transition planning, cultural integration, employee communication, and operational handoff to ensure smooth ownership transfer."
  };

  const factors = [
    "Business Overview", "Exit Goals & Timeline", "Personal & Emotional Readiness", 
    "Financial Quality", "Operational Maturity", "Documentation Preparedness", 
    "Team & Transition Risk", "Previous M&A Experience", "Representation & Market Strategy", 
    "Deal Structure & Risk", "Business Continuity & Post-Sale"
  ];

  return (
    <>
      {/* Section 1: The ExitClarity Process - Timeline Style */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-6 relative">
          {/* Section Header */}
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              The ExitClarity Process
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Our comprehensive 11-factor assessment is informed by 30+ years of business ownership and M&A experience and provides the strategic clarity you need to maximize your exit outcome
            </p>
          </div>

          {/* Process Steps - Responsive Timeline */}
          <div className="max-w-5xl mx-auto mb-20">
            <div className="relative">
              {/* Timeline line - Mobile version (left side) */}
              <div className="lg:hidden absolute left-6 top-12 bottom-12 w-1 bg-gradient-to-b from-primary via-green-500 via-amber-500 to-purple-500 rounded-full"></div>
              
              {/* Timeline line - Desktop version (center) */}
              <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-green-500 via-amber-500 to-purple-500 rounded-full"></div>
              
              {/* Timeline Steps */}
              <div className="space-y-8 lg:space-y-16">
                {/* Step 1 */}
                <div className="relative">
                  {/* Mobile Layout */}
                  <div className="lg:hidden flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-blue-600 rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
                      <span className="text-white font-bold text-lg">1</span>
                    </div>
                    <div className="flex-1">
                      <div className="bg-white p-6 rounded-2xl shadow-xl border border-primary/10">
                        <h3 className="text-xl font-bold text-foreground mb-3">Complete Assessment</h3>
                        <p className="text-muted-foreground leading-relaxed">Answer strategic questions across 11 key factors in 30-45 minutes to reveal your exit readiness</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Desktop Layout */}
                  <div className="hidden lg:flex items-center">
                    <div className="flex-1 pr-8 text-right">
                      <div className="bg-white p-6 rounded-2xl shadow-xl border border-primary/10">
                        <h3 className="text-xl font-bold text-foreground mb-3">Complete Assessment</h3>
                        <p className="text-muted-foreground leading-relaxed">Answer strategic questions across 11 key factors in 30-45 minutes to reveal your exit readiness</p>
                      </div>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-primary to-blue-600 rounded-full flex items-center justify-center shadow-lg z-10">
                      <span className="text-white font-bold text-lg">1</span>
                    </div>
                    <div className="flex-1 pl-8"></div>
                  </div>
                </div>
                
                {/* Step 2 */}
                <div className="relative">
                  {/* Mobile Layout */}
                  <div className="lg:hidden flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
                      <span className="text-white font-bold text-lg">2</span>
                    </div>
                    <div className="flex-1">
                      <div className="bg-white p-6 rounded-2xl shadow-xl border border-green-500/10">
                        <h3 className="text-xl font-bold text-foreground mb-3">Receive Strategic Report</h3>
                        <p className="text-muted-foreground leading-relaxed">Get your personalized 20-25 page strategic report with valuation estimates, risk analysis, and roadmap</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Desktop Layout */}
                  <div className="hidden lg:flex items-center">
                    <div className="flex-1 pr-8"></div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg z-10">
                      <span className="text-white font-bold text-lg">2</span>
                    </div>
                    <div className="flex-1 pl-8">
                      <div className="bg-white p-6 rounded-2xl shadow-xl border border-green-500/10">
                        <h3 className="text-xl font-bold text-foreground mb-3">Receive Strategic Report</h3>
                        <p className="text-muted-foreground leading-relaxed">Get your personalized 20-25 page strategic report with valuation estimates, risk analysis, and roadmap</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Step 3 */}
                <div className="relative">
                  {/* Mobile Layout */}
                  <div className="lg:hidden flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
                      <span className="text-white font-bold text-lg">3</span>
                    </div>
                    <div className="flex-1">
                      <div className="bg-white p-6 rounded-2xl shadow-xl border border-amber-500/10">
                        <h3 className="text-xl font-bold text-foreground mb-3">Get Clear Recommendation</h3>
                        <p className="text-muted-foreground leading-relaxed">Get a definitive GO/FIX/WAIT recommendation with clear reasoning and prioritized next steps</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Desktop Layout */}
                  <div className="hidden lg:flex items-center">
                    <div className="flex-1 pr-8 text-right">
                      <div className="bg-white p-6 rounded-2xl shadow-xl border border-amber-500/10">
                        <h3 className="text-xl font-bold text-foreground mb-3">Get Clear Recommendation</h3>
                        <p className="text-muted-foreground leading-relaxed">Get a definitive GO/FIX/WAIT recommendation with clear reasoning and prioritized next steps</p>
                      </div>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg z-10">
                      <span className="text-white font-bold text-lg">3</span>
                    </div>
                    <div className="flex-1 pl-8"></div>
                  </div>
                </div>
                
                {/* Step 4 */}
                <div className="relative">
                  {/* Mobile Layout */}
                  <div className="lg:hidden flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-violet-600 rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
                      <span className="text-white font-bold text-lg">4</span>
                    </div>
                    <div className="flex-1">
                      <div className="bg-white p-6 rounded-2xl shadow-xl border border-purple-500/10">
                        <h3 className="text-xl font-bold text-foreground mb-3">Follow Your Action Plan</h3>
                        <p className="text-muted-foreground leading-relaxed">Execute your personalized action plan with prioritized improvements, timeline milestones, and ROI projections</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Desktop Layout */}
                  <div className="hidden lg:flex items-center">
                    <div className="flex-1 pr-8"></div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-purple-500 to-violet-600 rounded-full flex items-center justify-center shadow-lg z-10">
                      <span className="text-white font-bold text-lg">4</span>
                    </div>
                    <div className="flex-1 pl-8">
                      <div className="bg-white p-6 rounded-2xl shadow-xl border border-purple-500/10">
                        <h3 className="text-xl font-bold text-foreground mb-3">Follow Your Action Plan</h3>
                        <p className="text-muted-foreground leading-relaxed">Execute your personalized action plan with prioritized improvements, timeline milestones, and ROI projections</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 11 Factors - Compact Style */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-primary/10">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-foreground mb-3">11 Critical Assessment Factors</h3>
              <div className="w-20 h-0.5 bg-gradient-to-r from-slate-400 to-slate-500 mx-auto"></div>
            </div>
            
            {/* Structured Grid Layout */}
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {factors.map((factor, index) => (
                  <div 
                    key={index} 
                    className="relative"
                    onMouseEnter={() => setHoveredFactor(index)}
                    onMouseLeave={() => setHoveredFactor(null)}
                  >
                    <div className="bg-slate-50 border border-slate-200 px-4 py-3 rounded-lg text-sm font-medium text-slate-700 hover:border-slate-300 hover:bg-slate-100 transition-all duration-200 cursor-help flex items-center gap-3 h-full">
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                        {index + 1}
                      </div>
                      <span className="leading-tight flex-1">{factor}</span>
                      <Info className="h-3 w-3 text-slate-400 flex-shrink-0" />
                    </div>
                    
                    {/* Tooltip */}
                    {hoveredFactor === index && (
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-80 max-w-[90vw] bg-white border border-slate-200 rounded-xl shadow-2xl p-4 z-50 animate-in fade-in-0 zoom-in-95 duration-200">
                        <div className="text-sm text-foreground font-medium mb-2">
                          {factor}
                        </div>
                        <div className="text-xs text-muted-foreground leading-relaxed">
                          {factorDescriptions[index as keyof typeof factorDescriptions]}
                        </div>
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[6px] border-r-[6px] border-t-[6px] border-l-transparent border-r-transparent border-t-white"></div>
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 translate-y-[-1px] w-0 h-0 border-l-[7px] border-r-[7px] border-t-[7px] border-l-transparent border-r-transparent border-t-slate-200"></div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              
            </div>
            
            {/* CTA after 11 factors */}
            <div className="text-center mt-8">
              <p className="text-muted-foreground mb-4 text-sm">Ready to assess your exit readiness?</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a 
                  href="https://calendly.com/exitclarity-info/30min" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-sm"
                >
                  <Calendar className="h-4 w-4 mr-2" />
                  Schedule Demo
                </a>
                <button
                  onClick={handleViewSampleReport}
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-foreground border-2 border-primary/20 font-semibold rounded-xl hover:border-primary hover:text-primary transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 text-sm"
                >
                  <FileText className="h-4 w-4 mr-2" />
                  View Sample Report
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Common Exit Challenges - Blue to White Gradient */}
      <section className="py-24 bg-gradient-to-b from-blue-900 via-primary/60 to-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-6">
          {/* Section Header */}
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Common Exit Challenges
            </h2>
            <p className="text-xl text-blue-100 leading-relaxed">
              Most business owners face these critical obstacles when preparing for exit. ExitClarity helps you identify and address them before they derail your transaction.
            </p>
          </div>
          
          {/* Challenge Cards */}
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <AlertTriangle className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">Hidden Value Killers</h3>
                  <p className="text-muted-foreground leading-relaxed">Operational dependencies, documentation gaps, and key person risks that buyers discover during due diligence - often killing deals at the last minute.</p>
                </div>
              </div>
              
              <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <TrendingDown className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">Unrealistic Expectations</h3>
                  <p className="text-muted-foreground leading-relaxed">Overestimated valuations and compressed timelines that waste years of preparation and damage relationships with potential buyers and advisors.</p>
                </div>
              </div>
              
              <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Clock className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">Poor Timing & Preparation</h3>
                  <p className="text-muted-foreground leading-relaxed">Rushing to market before addressing fundamental readiness issues, resulting in lower valuations and unfavorable deal terms.</p>
                </div>
              </div>
              
              <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">Lack of Experience & Guidance</h3>
                  <p className="text-muted-foreground leading-relaxed">Going it alone or relying on the wrong advisors leads to critical missteps, missed value drivers, and ultimately, lower valuations and failed or unfavorable outcomes.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Why Business Owners Choose ExitClarity - White Background */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6 relative">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Why Business Owners Choose{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                ExitClarity
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Join the business owners who've gained clarity and confidence in their exit journey
            </p>
          </div>
          
          {/* Benefits - Clean Grid Layout */}
          <div className="max-w-6xl mx-auto">
            {/* Benefits Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-border hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <CheckCircle className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-foreground mb-4">Confidence & Clarity</h4>
                  <p className="text-muted-foreground leading-relaxed">Understand realistic estimated outcomes for your specific business and gain confidence about the entire exit process</p>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-border hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-violet-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Settings className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-foreground mb-4">Control Over Process</h4>
                  <p className="text-muted-foreground leading-relaxed">Take control through detailed preparation and personalized guidance tailored to your business and situation</p>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-border hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Zap className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-foreground mb-4">Faster Sales</h4>
                  <p className="text-muted-foreground leading-relaxed">Accelerate your sale process through comprehensive pre-diligence preparation and documentation</p>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-border hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-foreground mb-4">Reduced Risk</h4>
                  <p className="text-muted-foreground leading-relaxed">Minimize process risk using lessons learned from previous transactions and proven best practices</p>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-border hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <DollarSign className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-foreground mb-4">Cost Savings</h4>
                  <p className="text-muted-foreground leading-relaxed">Save on professional fees through early preparation and efficient process management</p>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-border hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-foreground mb-4">Expert Guidance</h4>
                  <p className="text-muted-foreground leading-relaxed">Access insights driven by 30+ years of business ownership and sell-side/buy-side M&A expertise before you commit to consulting engagements.</p>
                </div>
              </div>
            </div>
            
            {/* Enhanced Bottom CTA */}
            <div className="mt-12">
              <div className="bg-gradient-to-r from-primary to-blue-600 rounded-2xl p-8 shadow-xl text-center">
                <div className="max-w-3xl mx-auto">
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    Ready to Transform Your Exit Strategy?
                  </h3>
                  <p className="text-lg text-blue-100 mb-6 leading-relaxed">
                    Join successful business owners who've gained clarity and confidence in their exit journey. 
                    Get your comprehensive strategic report and personalized recommendations today.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a 
                      href="https://calendly.com/exitclarity-info/30min" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary font-bold rounded-xl hover:bg-blue-50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-lg"
                    >
                      <Calendar className="h-5 w-5 mr-3" />
                      Schedule Your Demo
                    </a>
                    <button
                      onClick={handleViewSampleReport}
                      className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white border-2 border-white/30 font-bold rounded-xl hover:bg-white/20 hover:border-white/50 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 text-lg"
                    >
                      <FileText className="h-5 w-5 mr-3" />
                      Download Sample Report
                    </button>
                  </div>
                  <div className="mt-6 flex items-center justify-center text-blue-100">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4" />
                      <span className="text-sm">No obligation • 30+ years M&A expertise</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
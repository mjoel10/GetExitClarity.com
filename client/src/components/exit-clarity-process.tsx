import { Target, BarChart3, TrendingUp, CheckCircle, Settings, Zap, Shield, DollarSign, Info } from "lucide-react";
import { useState } from "react";

export function ExitClarityProcess() {
  const [hoveredFactor, setHoveredFactor] = useState<number | null>(null);

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
              Our comprehensive 11-factor assessment provides the strategic clarity you need to maximize your exit outcome
            </p>
          </div>

          {/* Timeline Process Steps */}
          <div className="relative max-w-6xl mx-auto mb-20">
            {/* Timeline Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary/20 via-primary to-primary/20 transform -translate-y-1/2 hidden lg:block"></div>
            
            <div className="grid lg:grid-cols-4 gap-8 lg:gap-4">
              <div className="relative bg-white p-8 rounded-3xl shadow-xl border-2 border-primary/10 hover:border-primary/30 transition-all duration-300 group">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-primary to-blue-600 rounded-full flex items-center justify-center shadow-lg lg:scale-110">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <div className="pt-8">
                  <h3 className="text-xl font-bold text-foreground mb-4 text-center">Complete Assessment</h3>
                  <p className="text-muted-foreground leading-relaxed text-center">30-45 minute comprehensive evaluation covering all critical aspects of exit readiness</p>
                </div>
              </div>
              
              <div className="relative bg-white p-8 rounded-3xl shadow-xl border-2 border-primary/10 hover:border-primary/30 transition-all duration-300 group lg:mt-12">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg lg:scale-110">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <div className="pt-8">
                  <h3 className="text-xl font-bold text-foreground mb-4 text-center">Receive Strategic Report</h3>
                  <p className="text-muted-foreground leading-relaxed text-center">Detailed 15-20 page personalized analysis with specific insights for your business</p>
                </div>
              </div>
              
              <div className="relative bg-white p-8 rounded-3xl shadow-xl border-2 border-primary/10 hover:border-primary/30 transition-all duration-300 group">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg lg:scale-110">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <div className="pt-8">
                  <h3 className="text-xl font-bold text-foreground mb-4 text-center">Get Clear Recommendation</h3>
                  <p className="text-muted-foreground leading-relaxed text-center">GO/FIX/WAIT decision with weighted scoring methodology and specific reasoning</p>
                </div>
              </div>
              
              <div className="relative bg-white p-8 rounded-3xl shadow-xl border-2 border-primary/10 hover:border-primary/30 transition-all duration-300 group lg:mt-12">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-600 rounded-full flex items-center justify-center shadow-lg lg:scale-110">
                  <span className="text-white font-bold text-xl">4</span>
                </div>
                <div className="pt-8">
                  <h3 className="text-xl font-bold text-foreground mb-4 text-center">Follow Action Plan</h3>
                  <p className="text-muted-foreground leading-relaxed text-center">Phased roadmap with 90-180 day preparation phases and measurable milestones</p>
                </div>
              </div>
            </div>
          </div>

          {/* 11 Factors - Badge Style */}
          <div className="bg-white rounded-3xl p-12 shadow-2xl border border-primary/10">
            <div className="text-center mb-10">
              <h3 className="text-3xl font-bold text-foreground mb-4">11 Critical Assessment Factors</h3>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 relative">
              {factors.map((factor, index) => (
                <div 
                  key={index} 
                  className="relative"
                  onMouseEnter={() => setHoveredFactor(index)}
                  onMouseLeave={() => setHoveredFactor(null)}
                >
                  <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 px-6 py-3 rounded-full text-sm font-semibold text-foreground hover:from-primary/20 hover:to-accent/20 transition-all duration-200 transform hover:scale-105 cursor-help flex items-center gap-2">
                    {index + 1}. {factor}
                    <Info className="h-3 w-3 text-primary/60" />
                  </div>
                  
                  {/* Tooltip */}
                  {hoveredFactor === index && (
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-80 max-w-[90vw] bg-white border border-primary/20 rounded-xl shadow-2xl p-4 z-50 animate-in fade-in-0 zoom-in-95 duration-200">
                      <div className="text-sm text-foreground font-medium mb-2">
                        {index + 1}. {factor}
                      </div>
                      <div className="text-xs text-muted-foreground leading-relaxed">
                        {factorDescriptions[index as keyof typeof factorDescriptions]}
                      </div>
                      {/* Arrow pointing down */}
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[6px] border-r-[6px] border-t-[6px] border-l-transparent border-r-transparent border-t-white"></div>
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 translate-y-[-1px] w-0 h-0 border-l-[7px] border-r-[7px] border-t-[7px] border-l-transparent border-r-transparent border-t-primary/20"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: What You'll Receive - Split Layout Style */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-blue-700"></div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/5 to-transparent"></div>
        <div className="container mx-auto px-6 relative">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              What You'll Receive
            </h2>
            <p className="text-xl text-blue-100">
              Comprehensive strategic analysis tailored specifically to your business situation and exit goals
            </p>
          </div>
          
          {/* Deliverables - Asymmetric Layout */}
          <div className="max-w-7xl mx-auto">
            {/* First Item - Full Width */}
            <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-10 mb-8 shadow-2xl border border-white/20">
              <div className="flex items-start lg:items-center gap-8 flex-col lg:flex-row">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Target className="h-10 w-10 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-4">Strategic Direction</h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">Clear GO/FIX/WAIT recommendation with weighted scoring methodology, specific reasoning, and detailed preparation roadmap identifying exactly what needs to be addressed before going to market.</p>
                </div>
              </div>
            </div>
            
            {/* Second & Third Items - Side by Side */}
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20 transform lg:-rotate-1 hover:rotate-0 transition-transform duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <BarChart3 className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Market Reality Check</h3>
                <p className="text-muted-foreground leading-relaxed">Market-appropriate valuation ranges using current industry multiples and comparable transactions. Multiple scenario analysis with Conservative, Base Case, and Optimistic projections.</p>
              </div>
              
              <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20 transform lg:rotate-1 hover:rotate-0 transition-transform duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Actionable Roadmap</h3>
                <p className="text-muted-foreground leading-relaxed">Phase-by-phase preparation with specific investments and projected 3-5x ROI, success metrics, and timeline management to prevent delays and maintain business momentum.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Why Business Owners Choose ExitClarity - Hexagon Pattern */}
      <section className="py-24 bg-gradient-to-b from-slate-50 to-white relative">
        <div className="container mx-auto px-6">
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
          
          {/* Benefits - Circular Layout */}
          <div className="max-w-5xl mx-auto relative">
            {/* Center Circle */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-2xl z-10 hidden lg:flex">
              <span className="text-white font-bold text-lg text-center leading-tight">Exit<br/>Success</span>
            </div>
            
            {/* Benefit Cards in Circular Pattern */}
            <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
              {/* Top Row */}
              <div className="lg:col-start-2 bg-gradient-to-br from-white to-blue-50 rounded-2xl p-8 shadow-xl border-2 border-primary/10 hover:border-primary/30 transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <CheckCircle className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-foreground mb-4">Confidence & Clarity</h4>
                  <p className="text-muted-foreground leading-relaxed">Understand realistic estimated outcomes for your specific business and gain confidence about the entire exit process</p>
                </div>
              </div>
              
              {/* Middle Row */}
              <div className="bg-gradient-to-br from-white to-purple-50 rounded-2xl p-8 shadow-xl border-2 border-primary/10 hover:border-primary/30 transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-violet-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Settings className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-foreground mb-4">Control Over Process</h4>
                  <p className="text-muted-foreground leading-relaxed">Take control through detailed preparation and personalized guidance tailored to your business and situation</p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-white to-orange-50 rounded-2xl p-8 shadow-xl border-2 border-primary/10 hover:border-primary/30 transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Zap className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-foreground mb-4">Faster Sales</h4>
                  <p className="text-muted-foreground leading-relaxed">Accelerate your sale process through comprehensive pre-diligence preparation and documentation</p>
                </div>
              </div>
              
              {/* Bottom Row */}
              <div className="bg-gradient-to-br from-white to-cyan-50 rounded-2xl p-8 shadow-xl border-2 border-primary/10 hover:border-primary/30 transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-foreground mb-4">Reduced Risk</h4>
                  <p className="text-muted-foreground leading-relaxed">Minimize process risk using lessons learned from previous transactions and proven best practices</p>
                </div>
              </div>
              
              <div className="lg:col-start-2 bg-gradient-to-br from-white to-green-50 rounded-2xl p-8 shadow-xl border-2 border-primary/10 hover:border-primary/30 transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <DollarSign className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-foreground mb-4">Cost Savings</h4>
                  <p className="text-muted-foreground leading-relaxed">Save on professional fees through early preparation and efficient process management</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
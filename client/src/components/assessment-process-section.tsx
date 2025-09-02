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
            {/* Report Visual */}
            <div className="bg-white rounded-xl p-2 shadow-2xl border">
              <iframe 
                src="/attached_assets/comprehensive-report.html"
                className="w-full h-[400px] rounded-xl border-0"
                title="ExitClarity Comprehensive Report"
                style={{ 
                  background: 'linear-gradient(135deg, #1a1f2e 0%, #2d3748 100%)',
                  transform: 'scale(0.6)',
                  transformOrigin: 'top left',
                  width: '166.667%',
                  height: '667px'
                }}
              />
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
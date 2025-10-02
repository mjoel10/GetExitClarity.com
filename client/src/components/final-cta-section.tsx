import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { TalkToAdvisorModal } from "./talk-to-advisor-modal";

export function FinalCTASection() {
  const [isAdvisorModalOpen, setIsAdvisorModalOpen] = useState(false);

  const handleCTAClick = () => {
    setIsAdvisorModalOpen(true);
  };

  return (
    <section className="py-16 text-white" style={{ backgroundColor: '#1e40af' }}>
      <div className="container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Headline */}
          <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ lineHeight: '1.5' }}>
            Stop Guessing. Start Knowing.
          </h2>
          
          {/* Subheadline */}
          <p className="text-lg lg:text-xl mb-6 text-white/90" style={{ lineHeight: '1.5' }}>
            Get your free exit readiness report in the next 20 minutes
          </p>
          
          {/* CTA Buttons */}
          <div>
            {/* Two Buttons Side-by-Side */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-2">
              <Button 
                onClick={() => window.location.href = 'https://app.exitclarity.io/owner-signup'}
                className="w-full sm:w-[280px] bg-white hover:bg-gray-100 text-primary font-semibold text-lg px-8 py-6 transition-all duration-300 hover:shadow-xl"
              >
                Get Your Report
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                onClick={handleCTAClick}
                className="w-full sm:w-[280px] bg-transparent hover:bg-white/10 text-white border-2 border-white font-semibold text-lg px-8 py-6 transition-all duration-300 hover:shadow-lg"
              >
                Match with an Advisor
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
            
            {/* View Sample Report Link */}
            <a
              href="/sample-report"
              className="inline-block text-sm text-white hover:text-white/80 font-medium underline transition-colors duration-200"
            >
              View Sample Report
            </a>
          </div>
          
          {/* Trust indicators */}
          <p className="text-white/70">
            No credit card required • 100% confidential
          </p>
        </div>
      </div>

      {/* Talk to Advisor Modal */}
      <TalkToAdvisorModal 
        isOpen={isAdvisorModalOpen}
        onClose={() => setIsAdvisorModalOpen(false)}
      />
    </section>
  );
}
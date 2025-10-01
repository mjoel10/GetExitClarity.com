import { useState } from "react";
import { Button } from "@/components/ui/button";
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
          
          {/* CTA Button */}
          <div className="mb-4">
            <Button 
              onClick={handleCTAClick}
              className="bg-white text-primary hover:bg-gray-100 font-semibold text-lg px-12 py-4 rounded-lg transition-all duration-200 hover:shadow-xl hover:scale-105"
            >
              Get Matched with an Advisor
            </Button>
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
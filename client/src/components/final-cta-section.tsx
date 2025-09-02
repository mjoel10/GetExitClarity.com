import { Button } from "@/components/ui/button";

export function FinalCTASection() {
  const handleCTAClick = () => {
    window.open('https://app.exitclarity.io/signupdirect', '_blank');
  };

  return (
    <section className="py-24 bg-gradient-to-br from-primary via-primary to-accent text-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Headline */}
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Stop Guessing. Start Knowing.
          </h2>
          
          {/* Subheadline */}
          <p className="text-xl lg:text-2xl mb-8 text-white/90">
            Get your free exit readiness report in the next 20 minutes
          </p>
          
          {/* CTA Button */}
          <div className="mb-6">
            <Button 
              onClick={handleCTAClick}
              className="bg-white text-primary hover:bg-gray-100 font-semibold text-lg px-12 py-4 rounded-lg transition-all duration-200 hover:shadow-xl hover:scale-105"
            >
              Create Your Free ExitClarity Account
            </Button>
          </div>
          
          {/* Trust indicators */}
          <p className="text-white/70">
            No credit card required • 100% confidential
          </p>
        </div>
      </div>
    </section>
  );
}
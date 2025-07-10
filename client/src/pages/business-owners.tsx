import Header from "@/components/header";
import { OwnerBenefitsSection } from "@/components/owner-benefits-section";
import { ExitClarityProcess } from "@/components/exit-clarity-process";
import { DualCTA } from "@/components/dual-cta";
import Footer from "@/components/footer";
import { useMeta } from "@/hooks/use-meta";

export default function BusinessOwners() {
  useMeta({
    title: "ExitClarity | For Business Owners",
    description: "Get clarity on your exit readiness. Understand your valuation, identify risks, and build a strategic roadmap for maximum return."
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-20">
        <div className="py-24">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                For Business Owners
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Maximize your company's value and prepare for a successful exit with our comprehensive assessment and strategic planning tools.
              </p>
            </div>
          </div>
        </div>
        
        <OwnerBenefitsSection />
        
        <ExitClarityProcess />
        
        <DualCTA />
      </div>
      <Footer />
    </div>
  );
}
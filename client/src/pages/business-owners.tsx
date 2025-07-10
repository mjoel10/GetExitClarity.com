import Header from "@/components/header";
import { OwnerBenefitsSection } from "@/components/owner-benefits-section";
import { ExitClarityProcess } from "@/components/exit-clarity-process";
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
      <div>
        <OwnerBenefitsSection />
        
        <ExitClarityProcess />
      </div>
      <Footer />
    </div>
  );
}
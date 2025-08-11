import Header from "@/components/header";
import { FeaturesSection } from "@/components/features-section";
import { BusinessCaseROI } from "@/components/business-case-roi";
import { EnhancedDealPreparation } from "@/components/enhanced-deal-preparation";
import { PracticeBenefits } from "@/components/practice-benefits";
import { MAFirmsHeroCTA } from "@/components/ma-firms-hero-cta";
import Footer from "@/components/footer";
import { useMeta } from "@/hooks/use-meta";

export default function MAFirms() {
  useMeta({
    title: "ExitClarity | For M&A Professionals",
    description: "Systematize prospect qualification and pipeline management. Qualify deals 3x faster with automated scoring and white-labeled reports."
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-16 sm:pt-20">
        <FeaturesSection />
        <BusinessCaseROI />
        <EnhancedDealPreparation />
        <PracticeBenefits />
        <MAFirmsHeroCTA />
      </div>
      <Footer />
    </div>
  );
}
import Header from "@/components/header";
import { FeaturesSection } from "@/components/features-section";
import { BusinessCaseROI } from "@/components/business-case-roi";
import { EnhancedDealPreparation } from "@/components/enhanced-deal-preparation";
import { PracticeBenefits } from "@/components/practice-benefits";
import { DualCTA } from "@/components/dual-cta";

export default function MAFirms() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-20">
        <FeaturesSection />
        <BusinessCaseROI />
        <DualCTA />
        <EnhancedDealPreparation />
        <PracticeBenefits />
        <DualCTA />
      </div>
    </div>
  );
}
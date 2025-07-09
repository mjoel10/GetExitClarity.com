import Header from "@/components/header";
import { EnhancedDealPreparation } from "@/components/enhanced-deal-preparation";
import { FeaturesSection } from "@/components/features-section";
import { ProspectQualification } from "@/components/prospect-qualification";
import { BusinessCaseROI } from "@/components/business-case-roi";
import HowItWorks from "@/components/how-it-works";

export default function MAFirms() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-20">
        <EnhancedDealPreparation />
        <FeaturesSection />
        <ProspectQualification />
        <HowItWorks />
        <BusinessCaseROI />
      </div>
    </div>
  );
}
import Header from "@/components/header";
import { FeaturesSection } from "@/components/features-section";
import { BusinessCaseROI } from "@/components/business-case-roi";

export default function MAFirms() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-20">
        <FeaturesSection />
        <BusinessCaseROI />
      </div>
    </div>
  );
}
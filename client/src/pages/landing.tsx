import { HeroSection } from "@/components/hero-section";
import { ProblemSection } from "@/components/problem-section";
import { SolutionSection } from "@/components/solution-section";
import { ProcessSection } from "@/components/process-section";
import { FeaturesSection } from "@/components/features-section";
import { OwnerBenefitsSection } from "@/components/owner-benefits-section";
import { OutcomesSection } from "@/components/outcomes-section";
import { CTASection } from "@/components/cta-section";

export default function Landing() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <ProcessSection />
      <FeaturesSection />
      <OwnerBenefitsSection />
      <OutcomesSection />
      <CTASection />
    </div>
  );
}

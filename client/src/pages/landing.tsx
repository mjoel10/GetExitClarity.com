import { HeroSection } from "@/components/hero-section";
import { ProblemSection } from "@/components/problem-section";
import { SolutionSection } from "@/components/solution-section";
import HowItWorks from "@/components/how-it-works";
import { ProcessSection } from "@/components/process-section";
import { FeaturesSection } from "@/components/features-section";
import { OwnerBenefitsSection } from "@/components/owner-benefits-section";
import TestimonialSection from "@/components/testimonial-section";
import { OutcomesSection } from "@/components/outcomes-section";
import { CTASection } from "@/components/cta-section";

export default function Landing() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <HowItWorks />
      <ProcessSection />
      <FeaturesSection />
      <OwnerBenefitsSection />
      <TestimonialSection />
      <OutcomesSection />
      <CTASection />
    </div>
  );
}

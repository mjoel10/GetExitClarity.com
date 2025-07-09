import Header from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { ProblemSection } from "@/components/problem-section";
import { SolutionSection } from "@/components/solution-section";
import HowItWorks from "@/components/how-it-works";
import { OwnerBenefitsSection } from "@/components/owner-benefits-section";
import TestimonialSection from "@/components/testimonial-section";
import { OutcomesSection } from "@/components/outcomes-section";
import { CTASection } from "@/components/cta-section";

export default function Landing() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-20">
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <HowItWorks />
        <OwnerBenefitsSection />
        <TestimonialSection />
        <OutcomesSection />
        <CTASection />
      </div>
    </div>
  );
}

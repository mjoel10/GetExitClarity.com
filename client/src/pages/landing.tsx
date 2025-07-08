import { HeroSection } from "@/components/hero-section";
import ProblemSection from "@/components/problem-section";
import SolutionSection from "@/components/solution-section";
import ProcessSection from "@/components/process-section";
import FeaturesSection from "@/components/features-section";
import OwnerBenefits from "@/components/owner-benefits";
import BenefitsSection from "@/components/benefits-section";
import FinalCTA from "@/components/final-cta";
import Footer from "@/components/footer";

export default function Landing() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <ProcessSection />
      <FeaturesSection />
      <OwnerBenefits />
      <BenefitsSection />
      <FinalCTA />
      <Footer />
    </div>
  );
}

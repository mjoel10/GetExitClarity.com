import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import ProblemSection from "@/components/problem-section";
import SolutionSection from "@/components/solution-section";
import HowItWorks from "@/components/how-it-works";
import PlatformFeatures from "@/components/platform-features";
import OwnerBenefits from "@/components/owner-benefits";
import TestimonialSection from "@/components/testimonial-section";
import BenefitsSection from "@/components/benefits-section";
import FinalCTA from "@/components/final-cta";
import Footer from "@/components/footer";

export default function Landing() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <HowItWorks />
      <PlatformFeatures />
      <OwnerBenefits />
      <TestimonialSection />
      <BenefitsSection />
      <FinalCTA />
      <Footer />
    </div>
  );
}

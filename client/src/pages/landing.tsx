import Header from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { ProblemSection } from "@/components/problem-section";
import { SolutionSection } from "@/components/solution-section";
import HowItWorks from "@/components/how-it-works";
import { CTASection } from "@/components/cta-section";
import Footer from "@/components/footer";

export default function Landing() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-20">
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <HowItWorks />
        <CTASection />
      </div>
      <Footer />
    </div>
  );
}

import Header from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { ProblemSection } from "@/components/problem-section";
import { RossStorySection } from "@/components/ross-story-section";
import { AssessmentStepsSection } from "@/components/assessment-steps-section";
import { WhyExitClaritySection } from "@/components/why-exitclarity-section";
import { FAQSection } from "@/components/faq-section";
import { FinalCTASection } from "@/components/final-cta-section";
import Footer from "@/components/footer";
import { useMeta } from "@/hooks/use-meta";

export default function Landing() {
  useMeta({
    title: "Are You Ready to Sell Your Business? | ExitClarity",
    description: "Get a free personalized exit readiness report in 20 minutes. Realistic business valuation ranges, clear timeline for optimal sale, and GO/FIX/WAIT recommendations across 11 categories."
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-20">
        <HeroSection />
        <ProblemSection />
        <RossStorySection />
        <AssessmentStepsSection />
        <WhyExitClaritySection />
        <FAQSection />
        <FinalCTASection />
      </div>
      <Footer />
    </div>
  );
}

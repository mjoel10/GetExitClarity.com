import Header from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { ProblemSection } from "@/components/problem-section";
import { RossStorySection } from "@/components/ross-story-section";
import { AssessmentStepsSection } from "@/components/assessment-steps-section";
import { WhyExitClaritySection } from "@/components/why-exitclarity-section";
import { FAQSection } from "@/components/faq-section";
import Footer from "@/components/footer";
import { useMeta } from "@/hooks/use-meta";

export default function Landing() {
  useMeta({
    title: "Are You Ready to Sell Your Business? | ExitClarity",
    description: "Assess your exit readiness in minutes. Get valuation ranges, buyer risk factors, and a clear action plan to maximize value before you sell. Delivered within 24 hours."
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-16">
        <HeroSection />
        <ProblemSection />
        <RossStorySection />
        <AssessmentStepsSection />
        <WhyExitClaritySection />
        <FAQSection />
      </div>
      <Footer />
    </div>
  );
}

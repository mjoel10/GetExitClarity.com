import Header from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { ProblemSection } from "@/components/problem-section";
import { RossStorySection } from "@/components/ross-story-section";
import { AssessmentProcessSection } from "@/components/assessment-process-section";
import { WhatsIncludedSection } from "@/components/whats-included-section";
import { WhyExitClaritySection } from "@/components/why-exitclarity-section";
import { SocialProofSection } from "@/components/social-proof-section";
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
        <AssessmentProcessSection />
        <WhatsIncludedSection />
        <WhyExitClaritySection />
        <SocialProofSection />
        <FAQSection />
        <FinalCTASection />
      </div>
      <Footer />
    </div>
  );
}

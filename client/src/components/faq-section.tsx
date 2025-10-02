import { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TalkToAdvisorModal } from "./talk-to-advisor-modal";

export function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);
  const [isAdvisorModalOpen, setIsAdvisorModalOpen] = useState(false);

  const faqs = [
    {
      question: "How long does the assessment take?",
      answer: "The assessment typically takes about 15–30 minutes. It's designed to be efficient while covering all 11 deal-critical readiness factors. Your advisor then reviews the results with you to provide context, recommendations, and next steps."
    },
    {
      question: "How much does it cost?",
      answer: "ExitClarity is delivered through trusted advisors, wealth managers, and M&A professionals. Pricing may vary depending on your advisor relationship, but the goal is the same, to give you unbiased, actionable insights that strengthen your readiness and deal value."
    },
    {
      question: "Will you share my information?",
      answer: "No. Your information remains private and is only shared with the advisor you choose to work with. ExitClarity does not sell or distribute your data."
    },
    {
      question: "How accurate is the valuation?",
      answer: "ExitClarity provides valuation ranges based on conservative EBITDA multiples and relevant market comps. These insights create a clear, fact-based baseline of what buyers are likely to pay. Your advisor then layers their deal expertise and knowledge of your industry and buyer pool to refine the picture."
    },
    {
      question: "What if I'm not ready to sell?",
      answer: "That's exactly what ExitClarity is built for. Many owners aren't ready on the first try. Your advisor can use your results to highlight key gaps, set priorities, and create a plan to improve valuation and reduce risk before you go to market."
    },
    {
      question: "Can I retake the assessment?",
      answer: "Yes. Owners often retake the assessment to measure progress and update readiness. Your advisor can guide when and how to revisit it, so improvements are tracked and your timing stays on target."
    },
    {
      question: "Do I still need an advisor if I have ExitClarity?",
      answer: "Yes. ExitClarity doesn't replace your advisor, it enhances their ability to guide you. The platform delivers objective data and unbiased insights rooted in real owner sell-side experience, while your advisor applies deal expertise, strategy, and negotiation to turn those insights into a stronger exit outcome."
    }
  ];

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Premium Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-56 h-56 bg-gradient-to-br from-white/10 to-blue-300/20 rounded-full blur-3xl opacity-60"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-tr from-blue-400/20 to-white/10 rounded-full blur-2xl opacity-40"></div>
      
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 bg-white/20 rounded-full animate-pulse"
            style={{
              left: `${15 + i * 7}%`,
              top: `${20 + (i % 4) * 20}%`,
              animationDelay: `${i * 0.7}s`,
              animationDuration: `${4 + (i % 2)}s`
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-white/20">
            <HelpCircle className="w-4 h-4" />
            Frequently Asked Questions
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
            Common{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-purple-500">
              Questions
            </span>
          </h2>
          
          <p className="text-xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
            Everything you need to know about our exit readiness assessment
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="group relative">
              {/* Background glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-white/20 to-white/10 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300 opacity-75"></div>
              
              {/* Card */}
              <div className="relative bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/60 overflow-hidden group-hover:transform group-hover:scale-[1.02] transition-all duration-300">
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full px-6 sm:px-8 py-6 text-left flex justify-between items-center hover:bg-white/80 transition-all duration-200"
                >
                  <h3 className="text-lg sm:text-xl font-bold text-foreground pr-4 leading-relaxed">{faq.question}</h3>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-primary to-blue-600 flex items-center justify-center transition-transform duration-200 ${
                    openFAQ === index ? 'rotate-180' : ''
                  }`}>
                    <ChevronDown className="w-4 h-4 text-white" />
                  </div>
                </button>
                
                {openFAQ === index && (
                  <div className="px-6 sm:px-8 pb-6">
                    <div className="border-t border-gray-200/50 pt-4">
                      <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto mt-16 text-center">
          <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-lg text-blue-100 mb-8">
            Take the first step toward a successful exit
          </p>
          
          {/* Two Buttons Side-by-Side */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-2">
            <Button 
              onClick={() => window.location.href = 'https://app.exitclarity.io/owner-signup'}
              className="w-full sm:w-[280px] bg-white hover:bg-gray-100 text-primary font-semibold text-lg px-8 py-6 transition-all duration-300 hover:shadow-xl"
            >
              Get Started
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button 
              onClick={() => setIsAdvisorModalOpen(true)}
              className="w-full sm:w-[280px] bg-transparent hover:bg-white/10 text-white border-2 border-white font-semibold text-lg px-8 py-6 transition-all duration-300 hover:shadow-lg"
            >
              Match with an Advisor
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
          
          {/* View Sample Report Link */}
          <a
            href="/sample-report"
            className="inline-block text-sm text-white hover:text-white/80 font-medium underline transition-colors duration-200"
          >
            View Sample Report
          </a>
        </div>
      </div>

      {/* Talk to Advisor Modal */}
      <TalkToAdvisorModal 
        isOpen={isAdvisorModalOpen}
        onClose={() => setIsAdvisorModalOpen(false)}
      />
    </section>
  );
}
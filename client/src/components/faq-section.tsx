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
      answer: "The assessment typically takes about 15–30 minutes. It's designed to be efficient while covering all 11 deal-critical readiness factors. Once complete, you'll receive your comprehensive report within 24 hours. If you're working with an advisor, they can review the results with you to provide additional context and next steps."
    },
    {
      question: "How much does it cost?",
      answer: "A comprehensive exit readiness report is $3,500. You can purchase directly or work with a trusted advisor who can guide you through the process and help you implement the recommendations. Either way, you'll receive unbiased, actionable insights that strengthen your readiness and maximize your deal value."
    },
    {
      question: "Will you share my information?",
      answer: "No. Your information remains completely private and confidential. ExitClarity does not sell or distribute your data to third parties. If you choose to work with an advisor, you control what information you share with them."
    },
    {
      question: "How accurate is the valuation?",
      answer: "ExitClarity provides valuation ranges based on conservative EBITDA multiples and relevant market comparables. These insights create a clear, fact-based baseline of what buyers are likely to pay. The report includes scenario-based ranges that account for your business's specific characteristics and risk factors."
    },
    {
      question: "What if I'm not ready to sell?",
      answer: "That's exactly what ExitClarity is built for. Most owners aren't ready on their first assessment. Your report will highlight key gaps, prioritize improvements, and provide a concrete action plan to increase valuation and reduce risk before you go to market. You can use this roadmap on your own or work with an advisor to accelerate progress."
    },
    {
      question: "Can I retake the assessment?",
      answer: "Yes. Many owners retake the assessment every 6-12 months to measure progress and track improvements. Each new assessment shows how your readiness has evolved, helping you stay on target for a successful exit."
    },
    {
      question: "Do I still need an advisor if I have ExitClarity?",
      answer: "It depends on your situation. ExitClarity gives you the objective data, unbiased advice, and actionable roadmap you need to improve your exit readiness. However, many owners choose to work with an advisor who can provide deal expertise, strategic guidance, and negotiation support to maximize their exit outcome. The platform is designed to work either way—as a standalone tool or to enhance your advisor relationship."
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
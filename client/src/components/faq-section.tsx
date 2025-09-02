import { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

export function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: "How long does the assessment take?",
      answer: "The assessment takes about 20 minutes to complete. It's designed to be thorough yet efficient, covering all 11 critical readiness factors without being overwhelming."
    },
    {
      question: "Is it really free?",
      answer: "Yes, the assessment and your personalized exit readiness report are completely free. No credit card required, no hidden charges. We believe every business owner deserves to know where they stand."
    },
    {
      question: "Will you share my information?",
      answer: "Never without your permission. Your business information and report are kept strictly confidential. We don't sell data or share your details with brokers, investment banks, or other third parties."
    },
    {
      question: "How accurate is the valuation?",
      answer: "Our valuation ranges are based on analysis of 1000+ real transactions across industries. While every business is unique, our estimates provide realistic ranges that align with what buyers typically pay in today's market."
    },
    {
      question: "What if I'm not ready to sell?",
      answer: "Perfect - that's exactly why you should take the assessment now. Most business owners who maximize their exit value start preparing 2-5 years before selling. The report will show you exactly what to improve and when."
    },
    {
      question: "Can I retake the assessment?",
      answer: "Absolutely. We encourage you to retake the assessment as you make improvements to your business. Track your progress over time and see how your readiness score and valuation estimates improve."
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
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-400">
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
      </div>
    </section>
  );
}
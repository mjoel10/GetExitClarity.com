import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

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
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-8">
            Common Questions
          </h2>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg border overflow-hidden">
              <button
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-foreground pr-4">{faq.question}</h3>
                {openFAQ === index ? (
                  <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-primary flex-shrink-0" />
                )}
              </button>
              
              {openFAQ === index && (
                <div className="px-8 pb-6">
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
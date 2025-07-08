import { motion } from "framer-motion";
import { Compass, DollarSign, TrendingUp, Shield, Handshake, UserCheck } from "lucide-react";

export default function OwnerBenefits() {
  const benefits = [
    {
      icon: Compass,
      title: "Clear GO/FIX/WAIT recommendations",
      description: "Know exactly where you stand and what your next steps should be",
      label: "Data-driven decision making"
    },
    {
      icon: DollarSign,
      title: "Realistic valuation ranges with drivers",
      description: "Understand your business value and the factors that influence it most",
      label: "Market-based analysis"
    },
    {
      icon: TrendingUp,
      title: "Actionable prep roadmaps with ROI forecasts",
      description: "Prioritized improvements that deliver the highest valuation impact",
      label: "ROI-focused guidance"
    },
    {
      icon: Shield,
      title: "Risk identification and mitigation strategy",
      description: "Address deal-killing issues before they become problems",
      label: "Proactive risk management"
    },
    {
      icon: Handshake,
      title: "Deal structure guidance and buyer targeting",
      description: "Understand optimal deal structures and identify ideal buyer profiles",
      label: "Strategic positioning"
    },
    {
      icon: UserCheck,
      title: "Representation planning and advisor vetting",
      description: "Get guidance on selecting the right advisors for your specific situation",
      label: "Expert advisor matching"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Clarity and Control—<span className="text-primary">Before You Go to Market</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            ExitClarity helps owners understand where they stand, what they're worth, and how to move forward—on their own terms.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{benefit.title}</h3>
              <p className="text-gray-600 mb-4 text-sm">{benefit.description}</p>
              <div className="text-xs text-blue-600 font-medium">{benefit.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

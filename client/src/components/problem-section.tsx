import { motion } from "framer-motion";
import { DollarSign, AlertTriangle, TrendingUp, UserCheck } from "lucide-react";

export default function ProblemSection() {
  const problemCards = [
    {
      icon: DollarSign,
      title: "Revenue ≠ Exit Ready",
      description: "Top-line growth doesn't matter if financials aren't clean, predictable, and documented.",
    },
    {
      icon: AlertTriangle,
      title: "Operational Blind Spots",
      description: "Key-person risk, poor systems, and undocumented processes stall deals in diligence.",
    },
    {
      icon: TrendingUp,
      title: "Unrealistic Expectations",
      description: "Inflated valuations and short timelines kill trust before deals can even start.",
    },
    {
      icon: UserCheck,
      title: "Inadequate Representation",
      description: "The wrong advisor (or no advisor) leads to costly mistakes in high-stakes negotiations.",
    },
  ];

  const stats = [
    { value: "70%", label: "of M&A conversations never progress to LOI" },
    { value: "6-18", label: "months wasted on unqualified prospects" },
    { value: "40%", label: "of deals fail during diligence" },
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
            Most Exit Conversations Stall Because{" "}
            <span className="text-primary">Readiness Is Unclear</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            M&A professionals waste time on prospects who aren't ready. Business owners wait too long, unprepared and overconfident. ExitClarity bridges that gap with structured, scalable intelligence that moves both sides forward.
          </p>
        </motion.div>

        <div className="mb-16">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center text-gray-900 mb-12"
          >
            Why So Many Deals Fall Apart Before They Begin
          </motion.h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {problemCards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                  <card.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">{card.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{card.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-12 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-6xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-lg text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

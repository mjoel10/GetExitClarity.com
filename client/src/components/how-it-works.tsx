import { motion } from "framer-motion";
import { CheckCircle, BarChart, TrendingUp } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Complete the Assessment",
      description: "Owners answer questions across 11 readiness categories—covering operational, financial, emotional, and strategic dimensions.",
      features: [
        "11 comprehensive readiness factors",
        "30-minute guided assessment",
        "Confidential and secure process",
        "Industry-specific considerations"
      ],
      icon: BarChart,
      color: "bg-primary"
    },
    {
      number: "02",
      title: "Receive a Strategic Report",
      description: "Each owner receives a 15–20 page personalized report with a GO/FIX/WAIT recommendation, risk analysis, valuation estimate, and action plan.",
      features: [
        "GO/FIX/WAIT recommendation",
        "Detailed risk analysis",
        "Valuation range estimate",
        "Prioritized action plan"
      ],
      icon: CheckCircle,
      color: "bg-primary"
    },
    {
      number: "03",
      title: "Take Action & Track Progress",
      description: "Advisors use the platform to nurture prospects, track improvement, and accelerate deals with better-prepared clients.",
      features: [
        "Progress tracking dashboard",
        "Automated follow-up sequences",
        "Milestone achievement alerts",
        "Deal readiness scoring"
      ],
      icon: TrendingUp,
      color: "bg-accent"
    }
  ];

  const stats = [
    { value: "15-20", label: "Pages of strategic insights per report" },
    { value: "11", label: "Comprehensive readiness factors assessed" },
    { value: "30", label: "Minutes to complete full assessment" }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-gray-900 mb-6">How ExitClarity Works</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Built on 30+ years of M&A experience, our 11-factor assessment delivers strategic clarity, risk analysis, and actionable guidance for every stakeholder.
          </p>
        </motion.div>

        <div className="space-y-20">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
            >
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 ${step.color} text-white rounded-lg flex items-center justify-center font-bold text-xl mr-4`}>
                    {step.number}
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">{step.title}</h3>
                </div>
                <p className="text-lg text-gray-600 mb-6">{step.description}</p>
                <div className="grid grid-cols-2 gap-4">
                  {step.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-accent mr-3 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div className={`${step.color} p-8 rounded-2xl shadow-2xl`}>
                  <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-6 mx-auto">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-center">
                    <div className="text-white/90 text-lg mb-2">
                      {index === 0 && "Assessment Progress"}
                      {index === 1 && "Strategic Report"}
                      {index === 2 && "Readiness Score"}
                    </div>
                    <div className="text-4xl font-bold text-white">
                      {index === 0 && "85%"}
                      {index === 1 && "GO"}
                      {index === 2 && "92%"}
                    </div>
                    <div className="text-white/80 text-sm">
                      {index === 0 && "8 of 11 factors completed"}
                      {index === 1 && "Ready for market entry"}
                      {index === 2 && "Ready for market entry"}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

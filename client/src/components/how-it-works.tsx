import { motion } from "framer-motion";
import { CheckCircle, BarChart, TrendingUp } from "lucide-react";
import assessmentProgressImage from "@assets/ChatGPT Image Jul 9, 2025, 09_40_33 AM_1752079279510.png";
import AssessmentCard from "./assessment-card";
import StrategicReportCard from "./strategic-report-card";
import ProgressDashboard from "./progress-dashboard";

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
      description: "Each owner receives a 20 - 25 page customized report with a GO/FIX/WAIT recommendation, risk analysis, valuation estimate, and action plan.",
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
    { value: "20-25", label: "pages of strategic insights per report" },
    { value: "11", label: "Comprehensive readiness factors assessed" },
    { value: "20", label: "Minutes to complete full assessment" }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-foreground mb-6">How ExitClarity Works</h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            The Exit Readiness Platform is powered by our proprietary algorithms, drawing on real-world lessons from 30+ years of business ownership and navigating successful (and failed) exits.
          </p>
        </motion.div>

        <div className="space-y-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
            >
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="flex items-center mb-6">
                  <div className={`w-10 h-10 ${step.color} text-white rounded-lg flex items-center justify-center font-bold text-lg mr-4`}>
                    {step.number}
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{step.title}</h3>
                </div>
                <p className="text-muted-foreground mb-6">{step.description}</p>
                <div className="grid grid-cols-2 gap-4">
                  {step.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-foreground text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                {index === 0 ? (
                  <AssessmentCard />
                ) : index === 1 ? (
                  <StrategicReportCard />
                ) : (
                  <ProgressDashboard />
                )}
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

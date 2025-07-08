import { motion } from "framer-motion";
import { Search, Database, FileText, Settings, BarChart3, Zap } from "lucide-react";

export default function PlatformFeatures() {
  const features = [
    {
      icon: Search,
      title: "Prospect Scoring Engine",
      description: "Objective, data-driven assessment of exit readiness across 11 key factors",
      benefit: "Unlimited client assessments with professional-grade reporting"
    },
    {
      icon: Database,
      title: "CRM-Integrated Pipeline Tracking",
      description: "Seamless integration with your existing systems for unified prospect management",
      benefit: "Pipeline visibility dashboard to track client readiness across your portfolio"
    },
    {
      icon: FileText,
      title: "White-labeled Strategic Reports",
      description: "Professional, branded reports that position you as the trusted advisor",
      benefit: "Co-branded reports that position your firm alongside ExitClarity as trusted exit-readiness experts"
    },
    {
      icon: Settings,
      title: "Automated Roadmaps & Recommendations",
      description: "Personalized action plans with prioritized next steps and ROI projections",
      benefit: "Expert analysis and commentary from experienced M&A professionals"
    },
    {
      icon: BarChart3,
      title: "Portfolio Management by Readiness Stage",
      description: "Visual dashboard to track prospects across the readiness spectrum",
      benefit: "Systematic preparation tools to improve client outcomes before market entry"
    },
    {
      icon: Zap,
      title: "Scalable Prospect Engagement at Zero Cost",
      description: "Automated nurturing sequences that maintain engagement without manual effort",
      benefit: "Automated nurturing sequences that maintain engagement without manual effort"
    }
  ];

  const platformStats = [
    { value: "3x", label: "Faster prospect qualification" },
    { value: "85%", label: "Reduction in time-to-qualification" },
    { value: "60%", label: "Increase in qualified pipeline" }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Purpose-Built for <span className="text-primary">M&A Professionals</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            ExitClarity streamlines how you qualify, track, and support long-term exit prospects with tools designed specifically for the M&A workflow.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <div className="text-sm text-gray-500">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>{feature.benefit}</span>
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
          className="mt-16 text-center"
        >
          <div className="bg-white p-8 rounded-2xl shadow-lg inline-block max-w-4xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">See the Platform in Action</h3>
            <p className="text-gray-600 mb-6">Watch how ExitClarity transforms your prospect engagement from initial contact to deal closure, with complete visibility and control throughout the process.</p>
            <div className="grid md:grid-cols-3 gap-8 mb-6">
              {platformStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

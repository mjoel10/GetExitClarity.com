import { motion } from "framer-motion";
import { TrendingUp, DollarSign, Clock, Search, Users, Shield, AlertTriangle, Handshake, BarChart3 } from "lucide-react";

export default function BenefitsSection() {
  const firmBenefits = [
    {
      icon: TrendingUp,
      title: "Higher conversion from prospect to client",
      description: "Better qualified prospects lead to more successful engagements",
      value: "3x"
    },
    {
      icon: DollarSign,
      title: "Larger average deal sizes",
      description: "Better-prepared companies command higher valuations",
      value: "$2.4M"
    },
    {
      icon: Clock,
      title: "Faster, cleaner diligence",
      description: "Reduction in due diligence timeline and complications",
      value: "40%"
    },
    {
      icon: Search,
      title: "Lower BD costs",
      description: "Automated prospect nurturing reduces manual outreach",
      value: "60%"
    },
    {
      icon: Users,
      title: "Stronger client relationships",
      description: "Client satisfaction through value-first approach",
      value: "95%"
    }
  ];

  const ownerBenefits = [
    {
      icon: Shield,
      title: "Confidence in their timing and value",
      description: "Of owners feel more prepared for exit conversations",
      value: "90%"
    },
    {
      icon: AlertTriangle,
      title: "Reduced deal risk",
      description: "Fewer deals fail due to preparedness issues",
      value: "50%"
    },
    {
      icon: Clock,
      title: "Faster sale process",
      description: "Months average time to close vs 12-18 months",
      value: "6-8"
    },
    {
      icon: Handshake,
      title: "Better terms and structure",
      description: "Higher average valuation vs unprepared sellers",
      value: "25%"
    },
    {
      icon: BarChart3,
      title: "Lower advisory costs through prep",
      description: "Average savings in professional service fees",
      value: "$200K"
    }
  ];

  const overallStats = [
    { value: "500+", label: "Successful assessments completed" },
    { value: "$2.1B", label: "Total deal value facilitated" },
    { value: "95%", label: "Client satisfaction rate" },
    { value: "18", label: "Months average time savings" }
  ];

  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Proven Benefits for <span className="text-primary">Firms and Founders</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Real outcomes from M&A professionals and business owners who use ExitClarity to create successful exits.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-8">For M&A Firms</h3>
            <p className="text-lg text-gray-600 mb-8">Transform your practice with better prospects and faster deals</p>
            
            <div className="space-y-6">
              {firmBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center justify-between p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                >
                  <div className="flex items-center">
                    <benefit.icon className="w-6 h-6 text-primary mr-4" />
                    <div>
                      <div className="font-bold text-gray-900">{benefit.title}</div>
                      <div className="text-gray-600 text-sm">{benefit.description}</div>
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-primary">{benefit.value}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-8">For Business Owners</h3>
            <p className="text-lg text-gray-600 mb-8">Achieve better outcomes with strategic preparation</p>
            
            <div className="space-y-6">
              {ownerBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center justify-between p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                >
                  <div className="flex items-center">
                    <benefit.icon className="w-6 h-6 text-accent mr-4" />
                    <div>
                      <div className="font-bold text-gray-900">{benefit.title}</div>
                      <div className="text-gray-600 text-sm">{benefit.description}</div>
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-accent">{benefit.value}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-primary text-white p-12 rounded-2xl text-center">
            <h3 className="text-3xl font-bold mb-8">ExitClarity Creates Win-Win Outcomes</h3>
            <div className="grid md:grid-cols-4 gap-8">
              {overallStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-4xl font-bold mb-2">{stat.value}</div>
                  <div className="text-white/90">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

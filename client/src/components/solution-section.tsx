import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Users, Building, CheckCircle } from "lucide-react";

export default function SolutionSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const maFeatures = [
    {
      title: "Systematize early-stage engagement",
      description: "Structured approach to prospect qualification"
    },
    {
      title: "Objectively score prospect readiness",
      description: "Data-driven assessment across 11 key factors"
    },
    {
      title: "Track and prioritize your pipeline",
      description: "CRM-integrated visibility into prospect progress"
    },
    {
      title: "Deliver high-value analysis without custom consulting",
      description: "Automated insights and recommendations"
    },
    {
      title: "Build trust early—before the deal",
      description: "Establish advisor credibility through value delivery"
    }
  ];

  const ownerFeatures = [
    {
      title: "Understand if and when you're ready to sell",
      description: "Clear GO/FIX/WAIT recommendations based on data"
    },
    {
      title: "Get a personalized roadmap to improve valuation",
      description: "Actionable steps with ROI forecasts"
    },
    {
      title: "Know your deal risks before a buyer does",
      description: "Identify and address vulnerabilities early"
    },
    {
      title: "Build clarity, confidence, and control into the process",
      description: "Take charge of your exit timeline and outcomes"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            A Readiness Engine That Works for{" "}
            <span className="text-primary">Both Sides</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            ExitClarity creates alignment between M&A professionals and business owners through structured intelligence and actionable insights.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white p-10 rounded-2xl shadow-lg border-t-4 border-primary"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mr-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">For M&A Professionals</h3>
                <p className="text-gray-600">Systematize early-stage engagement and build stronger pipelines</p>
              </div>
            </div>
            <ul className="space-y-4">
              {maFeatures.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-accent mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-gray-900">{feature.title}</div>
                    <div className="text-gray-600">{feature.description}</div>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white p-10 rounded-2xl shadow-lg border-t-4 border-accent"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mr-4">
                <Building className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">For Business Owners</h3>
                <p className="text-gray-600">Understand where you stand and how to move forward</p>
              </div>
            </div>
            <ul className="space-y-4">
              {ownerFeatures.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-accent mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-gray-900">{feature.title}</div>
                    <div className="text-gray-600">{feature.description}</div>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white p-8 rounded-2xl shadow-lg inline-block">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to bridge the readiness gap?</h3>
            <p className="text-gray-600 mb-6">See how ExitClarity creates better outcomes for both M&A professionals and business owners.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => scrollToSection("final-cta")}
                className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-200"
              >
                Schedule Demo
              </Button>
              <Button 
                variant="outline"
                onClick={() => scrollToSection("sample-report")}
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold px-8 py-3 rounded-lg transition-all duration-200"
              >
                View Sample Report
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

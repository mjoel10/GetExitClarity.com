import { CheckCircle, Target, BarChart3, Users2 } from "lucide-react";

export default function SolutionSection() {
  const solutions = [
    {
      icon: <Target className="h-8 w-8 text-blue-600" />,
      title: "Comprehensive Assessment Framework",
      description: "Evaluate exit readiness across 11 critical factors with standardized, data-driven methodologies developed from 500+ successful transactions."
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-green-600" />,
      title: "Automated Analysis & Reporting",
      description: "Generate detailed readiness reports in minutes, not weeks, with actionable insights and recommendations for improvement."
    },
    {
      icon: <Users2 className="h-8 w-8 text-purple-600" />,
      title: "Dual-Audience Platform",
      description: "Serve both M&A professionals seeking deal intelligence and business owners preparing for exit with tailored insights."
    }
  ];

  const audiences = [
    {
      title: "M&A Professionals",
      description: "Streamline due diligence, identify high-potential targets, and provide superior client advisory services.",
      benefits: [
        "Faster deal qualification",
        "Enhanced client relationships",
        "Improved transaction success rates",
        "Competitive differentiation"
      ]
    },
    {
      title: "Business Owners",
      description: "Understand your exit readiness, identify improvement areas, and maximize transaction value.",
      benefits: [
        "Clear exit readiness assessment",
        "Actionable improvement roadmap",
        "Valuation optimization strategies",
        "Transaction timeline planning"
      ]
    }
  ];

  return (
    <section id="solution" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            The ExitClarity Solution
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive platform that transforms exit readiness assessment from 
            guesswork into data-driven strategic advantage.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {solutions.map((solution, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                {solution.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {solution.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {solution.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8 mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              11 Critical Readiness Factors
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our comprehensive assessment framework evaluates every aspect of exit readiness
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Financial Performance",
              "Market Position",
              "Operational Efficiency",
              "Management Team",
              "Growth Potential",
              "Risk Management",
              "Customer Concentration",
              "Competitive Advantage",
              "Scalability",
              "Documentation Quality",
              "Legal Compliance"
            ].map((factor, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                <span className="text-gray-700">{factor}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {audiences.map((audience, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {audience.title}
              </h3>
              <p className="text-gray-600 mb-6">
                {audience.description}
              </p>
              <ul className="space-y-3">
                {audience.benefits.map((benefit, benefitIndex) => (
                  <li key={benefitIndex} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
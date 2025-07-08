import { FileText, BarChart3, Target } from "lucide-react";

export default function ProcessSection() {
  const steps = [
    {
      icon: <FileText className="h-12 w-12 text-blue-600" />,
      title: "Data Collection",
      description: "Comprehensive questionnaire and document review covering all 11 readiness factors",
      details: [
        "Financial statements analysis",
        "Operational metrics review",
        "Management team assessment",
        "Market position evaluation"
      ]
    },
    {
      icon: <BarChart3 className="h-12 w-12 text-green-600" />,
      title: "Analysis & Scoring",
      description: "AI-powered assessment using our proprietary framework based on 500+ successful transactions",
      details: [
        "Automated scoring algorithm",
        "Benchmarking against industry standards",
        "Gap identification and prioritization",
        "Risk assessment and mitigation"
      ]
    },
    {
      icon: <Target className="h-12 w-12 text-purple-600" />,
      title: "Actionable Insights",
      description: "Detailed report with specific recommendations and implementation roadmap",
      details: [
        "Comprehensive readiness report",
        "Prioritized improvement plan",
        "Valuation optimization strategies",
        "Timeline and milestone planning"
      ]
    }
  ];

  return (
    <section id="process" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our streamlined 3-step process transforms complex exit readiness assessment 
            into clear, actionable insights in just days, not months.
          </p>
        </div>

        <div className="relative">
          {/* Process Steps */}
          <div className="grid md:grid-cols-3 gap-8 relative">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm z-10">
                  {index + 1}
                </div>
                
                {/* Connecting Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-0 left-1/2 w-full h-0.5 bg-gray-300 transform translate-x-1/2 z-0"></div>
                )}

                {/* Card */}
                <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200 hover:shadow-md transition-shadow pt-12">
                  <div className="text-center mb-6">
                    <div className="flex justify-center mb-4">
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {step.description}
                    </p>
                  </div>

                  <ul className="space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-gray-600">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-16 bg-white rounded-lg p-8 shadow-sm border border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Typical Timeline
          </h3>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">Day 1</div>
              <p className="text-gray-600">Initial consultation and data collection setup</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">Days 2-3</div>
              <p className="text-gray-600">Document review and assessment completion</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">Days 4-5</div>
              <p className="text-gray-600">Analysis processing and report generation</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">Day 6</div>
              <p className="text-gray-600">Report delivery and strategy session</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
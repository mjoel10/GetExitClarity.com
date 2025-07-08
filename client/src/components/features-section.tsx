import { Shield, Zap, Globe, Users, BarChart3, Clock } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: "Comprehensive Risk Assessment",
      description: "Identify and quantify risks across all business dimensions with our proven framework."
    },
    {
      icon: <Zap className="h-8 w-8 text-yellow-600" />,
      title: "Lightning-Fast Analysis",
      description: "Complete assessments in days, not months, with our automated analysis engine."
    },
    {
      icon: <Globe className="h-8 w-8 text-green-600" />,
      title: "Industry Benchmarking",
      description: "Compare against industry standards and best-in-class performance metrics."
    },
    {
      icon: <Users className="h-8 w-8 text-purple-600" />,
      title: "Expert Validation",
      description: "All reports reviewed by seasoned M&A professionals with 30+ years experience."
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-indigo-600" />,
      title: "Actionable Insights",
      description: "Get specific, prioritized recommendations with clear implementation timelines."
    },
    {
      icon: <Clock className="h-8 w-8 text-red-600" />,
      title: "Real-Time Updates",
      description: "Track improvement progress with dynamic scoring and milestone tracking."
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Platform Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Powerful tools and insights designed specifically for M&A professionals 
            and business owners preparing for successful exits.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                {feature.icon}
                <h3 className="text-lg font-semibold text-gray-900 ml-3">
                  {feature.title}
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg p-8 text-white">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">
              Trusted by Leading M&A Professionals
            </h3>
            <div className="grid md:grid-cols-3 gap-8 mt-8">
              <div>
                <div className="text-3xl font-bold mb-2">500+</div>
                <p className="text-blue-100">Deals Analyzed</p>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">95%</div>
                <p className="text-blue-100">Client Satisfaction</p>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">$2.3B</div>
                <p className="text-blue-100">Transaction Value</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
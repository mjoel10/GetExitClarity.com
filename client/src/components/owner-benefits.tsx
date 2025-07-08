import { DollarSign, TrendingUp, Award, Shield, Users, Target } from "lucide-react";

export default function OwnerBenefits() {
  const benefits = [
    {
      icon: <DollarSign className="h-8 w-8 text-green-600" />,
      title: "Maximize Exit Valuation",
      description: "Increase your company's value by 20-40% by addressing critical readiness gaps before going to market.",
      metric: "20-40% increase in valuation"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-blue-600" />,
      title: "Accelerate Sale Process",
      description: "Reduce time to close by 3-6 months with comprehensive preparation and documentation.",
      metric: "3-6 months faster closing"
    },
    {
      icon: <Award className="h-8 w-8 text-purple-600" />,
      title: "Attract Premium Buyers",
      description: "Position your company to attract strategic buyers and private equity firms willing to pay premium prices.",
      metric: "Premium buyer interest"
    },
    {
      icon: <Shield className="h-8 w-8 text-indigo-600" />,
      title: "Reduce Transaction Risk",
      description: "Minimize deal-killing issues and due diligence surprises that can derail transactions.",
      metric: "90% fewer deal risks"
    },
    {
      icon: <Users className="h-8 w-8 text-orange-600" />,
      title: "Strengthen Management Team",
      description: "Build a robust leadership structure that buyers value and reduces key person risk.",
      metric: "Enhanced team value"
    },
    {
      icon: <Target className="h-8 w-8 text-red-600" />,
      title: "Negotiate Better Terms",
      description: "Enter negotiations from a position of strength with comprehensive preparation and documentation.",
      metric: "Better deal terms"
    }
  ];

  return (
    <section id="owner-benefits" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Why Business Owners Choose ExitClarity
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your exit strategy with actionable insights that deliver measurable results. 
            Our clients consistently achieve better outcomes with our comprehensive approach.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-lg p-8 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {benefit.description}
                  </p>
                  <div className="bg-blue-50 text-blue-800 px-3 py-1 rounded-full text-sm font-medium inline-block">
                    {benefit.metric}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Success Story */}
        <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Success Story
            </h3>
            <blockquote className="text-xl text-gray-600 italic mb-6">
              "ExitClarity's assessment revealed critical gaps in our financial reporting and management systems. 
              By addressing these issues over 18 months, we increased our valuation by 35% and attracted multiple 
              strategic buyers. The investment in preparation paid for itself many times over."
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-2"></div>
                <div className="font-semibold text-gray-900">Sarah Chen</div>
                <div className="text-sm text-gray-600">Former CEO, TechFlow Solutions</div>
                <div className="text-sm text-blue-600 font-medium">$85M Exit • 2023</div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Stats */}
        <div className="mt-16 grid md:grid-cols-4 gap-6 text-center">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="text-3xl font-bold text-green-600 mb-2">$2.3B</div>
            <p className="text-gray-600">Total Transaction Value</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
            <p className="text-gray-600">Successful Exits</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="text-3xl font-bold text-purple-600 mb-2">30+</div>
            <p className="text-gray-600">Years M&A Experience</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="text-3xl font-bold text-orange-600 mb-2">95%</div>
            <p className="text-gray-600">Client Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  );
}
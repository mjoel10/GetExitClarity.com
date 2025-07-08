import { AlertTriangle, Clock, TrendingDown, Users } from "lucide-react";

export default function ProblemSection() {
  const problems = [
    {
      icon: <AlertTriangle className="h-8 w-8 text-red-500" />,
      title: "Blind Spot Assessment",
      description: "M&A professionals lack standardized frameworks to evaluate exit readiness, leading to missed opportunities and suboptimal deal structures."
    },
    {
      icon: <Clock className="h-8 w-8 text-yellow-500" />,
      title: "Time-Intensive Due Diligence",
      description: "Manual assessment processes consume valuable time that could be spent on strategic deal-making and client relationship building."
    },
    {
      icon: <TrendingDown className="h-8 w-8 text-orange-500" />,
      title: "Inconsistent Valuations",
      description: "Without comprehensive readiness data, valuations vary wildly, creating uncertainty for both buyers and sellers in the transaction process."
    },
    {
      icon: <Users className="h-8 w-8 text-blue-500" />,
      title: "Client Expectation Gaps",
      description: "Business owners overestimate their exit readiness, leading to disappointed expectations and delayed transactions."
    }
  ];

  return (
    <section id="problem" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            The Exit Readiness Challenge
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            M&A professionals and business owners face critical gaps in assessing exit readiness, 
            leading to missed opportunities and suboptimal outcomes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {problems.map((problem, index) => (
            <div key={index} className="bg-white rounded-lg p-8 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  {problem.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {problem.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-red-50 rounded-lg p-8 border border-red-200">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-red-800 mb-4">
              The Cost of Inadequate Assessment
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-bold text-red-600 mb-2">23%</div>
                <p className="text-red-700">Average valuation discount for unprepared exits</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-600 mb-2">6-12 months</div>
                <p className="text-red-700">Additional time to market for inadequate preparation</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-600 mb-2">40%</div>
                <p className="text-red-700">Of deals fail due to insufficient readiness</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
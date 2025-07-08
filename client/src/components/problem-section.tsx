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
    <section id="problem" className="py-24 bg-gradient-to-br from-red-50 to-red-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-6">
            <AlertTriangle className="w-8 h-8 text-red-600" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Most Exit Conversations Stall Because <span className="text-red-600">Readiness Is Unclear</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            M&A professionals waste time on prospects who aren't ready. Business owners wait too long, 
            unprepared and overconfident. ExitClarity bridges that gap with structured, scalable intelligence that 
            moves both sides forward.
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Why So Many Deals Fall Apart Before They Begin
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((problem, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm border border-red-200 p-8 text-center hover:shadow-md transition-all duration-200 hover:scale-105">
              <div className="flex justify-center mb-6">
                {problem.icon}
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                {problem.title}
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-lg shadow-sm border border-red-200 p-8">
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
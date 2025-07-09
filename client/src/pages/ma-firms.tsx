import Header from "@/components/header";

export default function MAFirms() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              For M&A Firms
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enhance your deal sourcing and evaluation processes with advanced analytics and comprehensive business intelligence tools.
            </p>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Deal Sourcing</h3>
              <p className="text-gray-600">
                Advanced screening and evaluation tools to identify high-quality acquisition targets and investment opportunities.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Due Diligence</h3>
              <p className="text-gray-600">
                Streamlined assessment processes and comprehensive reporting to accelerate your due diligence workflow.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Portfolio Management</h3>
              <p className="text-gray-600">
                Monitor and optimize portfolio company performance with real-time analytics and strategic insights.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
import Header from "@/components/header";

export default function BusinessOwners() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              For Business Owners
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Maximize your company's value and prepare for a successful exit with our comprehensive assessment and strategic planning tools.
            </p>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Exit Readiness Assessment</h3>
              <p className="text-gray-600">
                Comprehensive evaluation of your business across 11 key dimensions to identify strengths and optimization opportunities.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Strategic Planning</h3>
              <p className="text-gray-600">
                Develop a roadmap to enhance your company's value and market position before entering the M&A process.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Valuation Optimization</h3>
              <p className="text-gray-600">
                Identify and implement strategies to maximize your business valuation and negotiation position.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
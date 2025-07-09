import Header from "@/components/header";

export default function Resources() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Resources
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Access valuable insights, guides, and tools to enhance your M&A knowledge and decision-making process.
            </p>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Exit Planning Guide</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive guide to preparing your business for a successful exit, from initial planning to final transaction.
              </p>
              <a href="#" className="text-primary font-medium hover:text-primary/80 transition-colors">
                Download PDF →
              </a>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Valuation Benchmarks</h3>
              <p className="text-gray-600 mb-4">
                Industry-specific valuation multiples and benchmarks to help you understand your company's market position.
              </p>
              <a href="#" className="text-primary font-medium hover:text-primary/80 transition-colors">
                View Report →
              </a>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">M&A Market Trends</h3>
              <p className="text-gray-600 mb-4">
                Latest trends and insights from the M&A market, including deal activity, valuations, and strategic considerations.
              </p>
              <a href="#" className="text-primary font-medium hover:text-primary/80 transition-colors">
                Read More →
              </a>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Due Diligence Checklist</h3>
              <p className="text-gray-600 mb-4">
                Essential checklist for conducting thorough due diligence in M&A transactions.
              </p>
              <a href="#" className="text-primary font-medium hover:text-primary/80 transition-colors">
                Download →
              </a>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Webinar Series</h3>
              <p className="text-gray-600 mb-4">
                Join our expert-led webinars covering key topics in M&A strategy, valuation, and transaction execution.
              </p>
              <a href="#" className="text-primary font-medium hover:text-primary/80 transition-colors">
                View Schedule →
              </a>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Case Studies</h3>
              <p className="text-gray-600 mb-4">
                Real-world examples of successful exits and lessons learned from various M&A transactions.
              </p>
              <a href="#" className="text-primary font-medium hover:text-primary/80 transition-colors">
                Explore Cases →
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
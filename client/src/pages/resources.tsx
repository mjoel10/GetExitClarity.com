import Header from "@/components/header";
import Footer from "@/components/footer";
import { SampleReportHero } from "@/components/sample-report-hero";
import { useMeta } from "@/hooks/use-meta";

export default function Resources() {
  useMeta({
    title: "ExitClarity | M&A Resources & Insights",
    description: "Access exit planning guides, market insights, and strategic tools. Download our sample exit readiness report and M&A knowledge resources."
  });
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <SampleReportHero />

      <main className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Break and New Heading */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Additional M&A Resources
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our comprehensive collection of guides, reports, and tools to support your M&A journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
      <Footer />
    </div>
  );
}
// import { Helmet } from "react-helmet-async";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";

export default function Blog() {
  return (
    <>

      <div className="min-h-screen bg-white">
        <Header />
        
        <main className="pt-16 sm:pt-20">
          {/* Hero Section */}
          <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-blue-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <div className="text-center max-w-4xl mx-auto">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                  ExitClarity Blog
                </h1>
                <p className="text-lg sm:text-xl text-gray-600 leading-relaxed px-2">
                  Insights and strategies for M&A professionals
                </p>
              </div>
            </div>
          </section>

          {/* Coming Soon Section */}
          <section className="py-12 sm:py-16 lg:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <div className="max-w-4xl mx-auto">
                <div className="bg-blue-50 border border-blue-200 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-12 text-center">
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                    Coming Soon
                  </h2>
                  <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6 px-2">
                    We're preparing valuable insights on exit planning, M&A trends, and strategic guidance for business owners and advisors.
                  </p>
                  <p className="text-sm sm:text-base text-gray-500">
                    Check back soon for expert content from our team of M&A professionals.
                  </p>
                </div>

                {/* Planned Categories */}
                <div className="mt-8 sm:mt-12">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 sm:mb-6 text-center">
                    Upcoming Content Categories
                  </h3>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                    <div className="p-4 bg-white border border-gray-200 rounded-lg">
                      <Badge variant="outline" className="mb-2 text-xs">Exit Planning</Badge>
                      <p className="text-sm text-gray-600">Strategic guidance for business exit preparation</p>
                    </div>
                    <div className="p-4 bg-white border border-gray-200 rounded-lg">
                      <Badge variant="outline" className="mb-2 text-xs">Valuations</Badge>
                      <p className="text-sm text-gray-600">Market trends and valuation methodologies</p>
                    </div>
                    <div className="p-4 bg-white border border-gray-200 rounded-lg">
                      <Badge variant="outline" className="mb-2 text-xs">M&A Trends</Badge>
                      <p className="text-sm text-gray-600">Current market conditions and opportunities</p>
                    </div>
                    <div className="p-4 bg-white border border-gray-200 rounded-lg">
                      <Badge variant="outline" className="mb-2 text-xs">Due Diligence</Badge>
                      <p className="text-sm text-gray-600">Best practices for transaction preparation</p>
                    </div>
                    <div className="p-4 bg-white border border-gray-200 rounded-lg">
                      <Badge variant="outline" className="mb-2 text-xs">Case Studies</Badge>
                      <p className="text-sm text-gray-600">Real-world success stories and lessons learned</p>
                    </div>
                    <div className="p-4 bg-white border border-gray-200 rounded-lg">
                      <Badge variant="outline" className="mb-2 text-xs">Industry Insights</Badge>
                      <p className="text-sm text-gray-600">Sector-specific analysis and opportunities</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
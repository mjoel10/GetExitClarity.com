import Header from "@/components/header";
import Footer from "@/components/footer";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              About ExitClarity
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're transforming how businesses approach M&A transactions with intelligent assessment tools and strategic insights.
            </p>
          </div>
          
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-gray-600 mb-6">
                ExitClarity empowers business owners and M&A professionals with the tools and insights needed to maximize transaction value and success rates. Our platform bridges the gap between traditional advisory services and modern data-driven decision making.
              </p>
              <p className="text-gray-600">
                Through comprehensive assessments and strategic planning tools, we help businesses prepare for successful exits while enabling M&A firms to identify and evaluate opportunities more effectively.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Why ExitClarity?</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <span className="text-gray-600">Data-driven insights for better decision making</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <span className="text-gray-600">Comprehensive assessment across 11 key dimensions</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <span className="text-gray-600">Strategic planning and optimization recommendations</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <span className="text-gray-600">Streamlined workflows for M&A professionals</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
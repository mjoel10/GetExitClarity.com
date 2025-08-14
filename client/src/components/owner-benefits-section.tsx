import { UserPlus, FileText, ArrowRight, CheckCircle, TrendingUp, Shield } from "lucide-react";
import { Link, useLocation } from "wouter";

export function OwnerBenefitsSection() {
  const [, navigate] = useLocation();

  const handleGetAssessment = () => {
    navigate("/resources");
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  return (
    <section className="pt-44 pb-24 bg-gradient-to-br from-primary/80 via-primary/85 to-primary/90 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      
      <div className="container mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - Hero Content */}
          <div className="text-white">
            <div className="mb-8">
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Turn Exit Readiness Into
                <span className="block bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                  Maximum Value
                </span>
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed mb-8">
                Get clarity on your business value, identify growth opportunities, and build a strategic roadmap for your exit—all before you go to market.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="space-y-4 mb-10">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-4 w-4 text-white" />
                </div>
                <span className="text-blue-100 font-medium">Know exactly where you stand and what you're worth</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                  <TrendingUp className="h-4 w-4 text-white" />
                </div>
                <span className="text-blue-100 font-medium">Prioritized action plan with ROI forecasts</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                  <Shield className="h-4 w-4 text-white" />
                </div>
                <span className="text-blue-100 font-medium">Address deal-killing risks before they become problems</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                  <Shield className="h-4 w-4 text-white" />
                </div>
                <span className="text-blue-100 font-medium">Avoid making mistakes that will cost you money</span>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/business-owners-waitlist"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary font-semibold rounded-xl hover:bg-blue-50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <UserPlus className="h-5 w-5 mr-2" />
                Join Our Waitlist
              </Link>
              <button
                onClick={handleGetAssessment}
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white border-2 border-white/20 font-semibold rounded-xl hover:bg-white/20 hover:border-white/40 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                <FileText className="h-5 w-5 mr-2" />
                View Sample Report
              </button>
            </div>
          </div>

          {/* Right Column - Visual Element */}
          <div className="relative lg:ml-12">
            <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                  <TrendingUp className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Your Exit Readiness Assessment</h3>
                <p className="text-muted-foreground">Get a comprehensive view of your business value and readiness</p>
              </div>

              {/* Mock Assessment Preview */}
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg border border-green-200">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="font-medium text-green-800">Financial Performance</span>
                  </div>
                  <span className="text-green-600 font-semibold">Strong</span>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <span className="font-medium text-yellow-800">Market Position</span>
                  </div>
                  <span className="text-yellow-600 font-semibold">Moderate</span>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="font-medium text-blue-800">Documentation</span>
                  </div>
                  <span className="text-blue-600 font-semibold">Needs Work</span>
                </div>
              </div>

              <div className="mt-8 text-center">
                <button
                  onClick={handleGetAssessment}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary/10 text-primary rounded-lg font-medium hover:bg-primary/20 transition-all duration-200 cursor-pointer"
                >
                  <span>Get Your Complete Assessment</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
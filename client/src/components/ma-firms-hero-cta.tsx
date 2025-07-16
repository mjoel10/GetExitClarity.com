import { Calendar, FileText, CheckCircle, ArrowRight } from "lucide-react";
import { useLocation } from "wouter";

export function MAFirmsHeroCTA() {
  const [, navigate] = useLocation();

  const handleViewSampleReport = () => {
    navigate("/resources");
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-primary to-blue-600 rounded-2xl p-8 md:p-12 shadow-xl text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                Ready to Transform Your M&A Practice?
              </h2>
              <p className="text-lg text-blue-100 mb-6 leading-relaxed">
                Join successful M&A professionals who've scaled their prospect qualification and accelerated their deal cycles. 
                Get your comprehensive strategic report and personalized recommendations today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://calendly.com/exitclarity-info/30min" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary font-bold rounded-xl hover:bg-blue-50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-lg"
                >
                  <Calendar className="h-5 w-5 mr-3" />
                  Schedule Your Demo
                  <ArrowRight className="h-5 w-5 ml-3 transition-transform group-hover:translate-x-1" />
                </a>
                <button 
                  onClick={handleViewSampleReport}
                  className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white border-2 border-white/30 font-bold rounded-xl hover:bg-white/20 hover:border-white/50 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 text-lg"
                >
                  <FileText className="h-5 w-5 mr-3" />
                  View Sample Report
                  <ArrowRight className="h-5 w-5 ml-3 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
              <div className="mt-6 flex items-center justify-center text-blue-100">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4" />
                  <span className="text-sm">No obligation • 30+ years M&A expertise</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
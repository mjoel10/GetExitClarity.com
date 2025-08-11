import { FileText, BarChart3, Shield, Calendar, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

export function EnhancedDealPreparation() {
  const [, navigate] = useLocation();

  const handleViewSampleReport = () => {
    navigate("/sample-report");
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  return (
    <section className="py-20" style={{ backgroundColor: 'hsl(218, 100%, 25%)' }}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'hsl(0, 0%, 100%)' }}>
            Enhanced Deal Preparation
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'hsl(0, 0%, 100%, 0.8)' }}>
            Streamline your M&A process with comprehensive preparation tools that reduce risk and accelerate deal completion.
          </p>
        </div>

        {/* Three Column Grid Layout */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center p-6 rounded-xl border" style={{ 
            backgroundColor: 'hsl(0, 0%, 100%)', 
            borderColor: 'hsl(218, 100%, 35%)',
            boxShadow: '0 4px 20px -4px hsl(0, 0%, 0%, 0.1)'
          }}>
            <div className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: 'hsl(218, 100%, 25%, 0.1)' }}>
              <FileText className="w-6 h-6" style={{ color: 'hsl(218, 100%, 25%)' }} />
            </div>
            <h3 className="text-lg font-semibold mb-3" style={{ color: 'hsl(218, 15%, 15%)' }}>Pre-Diligence Organization</h3>
            <p className="text-sm" style={{ color: 'hsl(218, 10%, 45%)' }}>Standardized documentation and preparation that addresses issues before they become problems.</p>
          </div>

          <div className="text-center p-6 rounded-xl border" style={{ 
            backgroundColor: 'hsl(0, 0%, 100%)', 
            borderColor: 'hsl(218, 100%, 35%)',
            boxShadow: '0 4px 20px -4px hsl(0, 0%, 0%, 0.1)'
          }}>
            <div className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: 'hsl(218, 100%, 25%, 0.1)' }}>
              <BarChart3 className="w-6 h-6" style={{ color: 'hsl(218, 100%, 25%)' }} />
            </div>
            <h3 className="text-lg font-semibold mb-3" style={{ color: 'hsl(218, 15%, 15%)' }}>Realistic Valuation Expectations</h3>
            <p className="text-sm" style={{ color: 'hsl(218, 10%, 45%)' }}>Market-based valuation analysis and industry benchmarking to prevent deal failures.</p>
          </div>

          <div className="text-center p-6 rounded-xl border" style={{ 
            backgroundColor: 'hsl(0, 0%, 100%)', 
            borderColor: 'hsl(218, 100%, 35%)',
            boxShadow: '0 4px 20px -4px hsl(0, 0%, 0%, 0.1)'
          }}>
            <div className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: 'hsl(218, 100%, 25%, 0.1)' }}>
              <Shield className="w-6 h-6" style={{ color: 'hsl(218, 100%, 25%)' }} />
            </div>
            <h3 className="text-lg font-semibold mb-3" style={{ color: 'hsl(218, 15%, 15%)' }}>Risk Mitigation</h3>
            <p className="text-sm" style={{ color: 'hsl(218, 10%, 45%)' }}>Proactive risk identification and strategic insights beyond basic financial analysis.</p>
          </div>
        </div>
        
        {/* Custom CTAs optimized for dark background */}
        <div className="text-center mt-12">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="group px-8 py-4 text-lg bg-blue-600 text-white border-blue-600 hover:bg-blue-700 hover:border-blue-700" 
              asChild
            >
              <a href="https://calendly.com/exitclarity-info/30min" target="_blank" rel="noopener noreferrer">
                <Calendar className="mr-3 h-5 w-5" />
                Schedule Demo
                <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="group px-8 py-4 text-lg border-white text-blue-800 bg-white hover:bg-blue-50 hover:text-blue-900" 
              onClick={handleViewSampleReport}
            >
              <FileText className="mr-3 h-5 w-5" />
              View Sample Report
              <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
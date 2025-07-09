import { FileText, BarChart3, Shield } from 'lucide-react';

export function EnhancedDealPreparation() {
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
            <p className="text-sm" style={{ color: 'hsl(218, 10%, 45%)' }}>Systematic documentation and preparation that addresses issues before they become problems.</p>
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
      </div>
    </section>
  );
}
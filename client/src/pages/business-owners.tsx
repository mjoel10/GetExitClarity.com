import Header from "@/components/header";
import { OwnerBenefitsSection } from "@/components/owner-benefits-section";

export default function BusinessOwners() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-20">
        <div className="py-24">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                For Business Owners
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Maximize your company's value and prepare for a successful exit with our comprehensive assessment and strategic planning tools.
              </p>
            </div>
          </div>
        </div>
        
        <OwnerBenefitsSection />
        
        <div className="py-24">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">Exit Readiness Assessment</h3>
                <p className="text-muted-foreground">
                  Comprehensive evaluation of your business across 11 key dimensions to identify strengths and optimization opportunities.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">Strategic Planning</h3>
                <p className="text-muted-foreground">
                  Develop a roadmap to enhance your company's value and market position before entering the M&A process.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">Valuation Optimization</h3>
                <p className="text-muted-foreground">
                  Identify and implement strategies to maximize your business valuation and negotiation position.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
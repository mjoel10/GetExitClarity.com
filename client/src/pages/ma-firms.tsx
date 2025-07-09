import Header from "@/components/header";
import { FeaturesSection } from "@/components/features-section";

export default function MAFirms() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-20">
        <FeaturesSection />
        
        <div className="py-24">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">Deal Sourcing</h3>
                <p className="text-muted-foreground">
                  Advanced screening and evaluation tools to identify high-quality acquisition targets and investment opportunities.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">Due Diligence</h3>
                <p className="text-muted-foreground">
                  Streamlined assessment processes and comprehensive reporting to accelerate your due diligence workflow.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">Portfolio Management</h3>
                <p className="text-muted-foreground">
                  Monitor and optimize portfolio company performance with real-time analytics and strategic insights.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
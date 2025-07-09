import { FileCheck, DollarSign, Shield, BarChart, Brain } from "lucide-react";

export function EnhancedDealPreparation() {
  const features = [
    {
      icon: FileCheck,
      title: "Pre-Diligence Organization",
      description: "Reduce time-to-close and process risk with systematic documentation and preparation"
    },
    {
      icon: DollarSign,
      title: "Realistic Valuation Expectations",
      description: "Prevent deal failures due to unrealistic pricing with market-based valuation analysis"
    },
    {
      icon: Shield,
      title: "Risk Mitigation",
      description: "Address issues before they become deal killers with proactive risk identification"
    },
    {
      icon: BarChart,
      title: "Industry Benchmarking",
      description: "Provide context and credibility to recommendations with comprehensive market data"
    },
    {
      icon: Brain,
      title: "Strategic Insights",
      description: "Go beyond basic financial analysis with operational and strategic factor evaluation"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Enhanced Deal Preparation
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Streamline your M&A process with comprehensive preparation tools that reduce risk and accelerate deal completion.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="group bg-white p-8 rounded-2xl shadow-soft hover:shadow-medium transition-all duration-200 border border-border hover:border-primary/20"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200">
                  <Icon className="h-7 w-7 text-primary" />
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
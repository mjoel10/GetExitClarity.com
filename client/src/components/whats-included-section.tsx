import { Target, DollarSign, AlertTriangle, Clock, CheckCircle, BarChart3, TrendingUp, Users } from "lucide-react";

export function WhatsIncludedSection() {
  const features = [
    {
      icon: Target,
      title: "Exit Readiness Score",
      description: "See how buyers will evaluate your business",
      visual: "70/100"
    },
    {
      icon: DollarSign,
      title: "Valuation Range", 
      description: "Realistic estimates based on your industry and performance",
      visual: "$12M-$18M"
    },
    {
      icon: AlertTriangle,
      title: "Risk Assessment",
      description: "Identify deal-killers before they cost you",
      visual: "8 of 11"
    },
    {
      icon: Clock,
      title: "Timeline Projection",
      description: "Know the optimal time to maximize value",
      visual: "2-3 years"
    },
    {
      icon: CheckCircle,
      title: "Action Plan",
      description: "Prioritized improvements with ROI estimates",
      visual: "GO/FIX/WAIT"
    },
    {
      icon: BarChart3,
      title: "11 Category Analysis",
      description: "GO / FIX / WAIT recommendations for each area",
      visual: "Complete"
    },
    {
      icon: TrendingUp,
      title: "Industry Benchmarks",
      description: "See how you stack up against similar businesses",
      visual: "Top 25%"
    },
    {
      icon: Users,
      title: "Next Steps Roadmap",
      description: "Clear guidance on what to do next",
      visual: "Detailed"
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-8">
            Everything You Need to Make Informed Decisions
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg border hover:shadow-xl transition-all duration-200"
              >
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="bg-gray-100 rounded-lg py-2 px-3 inline-block">
                    <span className="text-primary font-bold text-sm">{feature.visual}</span>
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
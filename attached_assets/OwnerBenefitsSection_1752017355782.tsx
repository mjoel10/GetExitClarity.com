import { CheckCircle, Target, TrendingUp, Shield, Users, DollarSign } from "lucide-react";

export function OwnerBenefitsSection() {
  const benefits = [
    {
      icon: Target,
      title: "Clear GO/FIX/WAIT recommendations",
      description: "Know exactly where you stand and what your next steps should be",
      highlight: "Data-driven decision making"
    },
    {
      icon: DollarSign,
      title: "Realistic valuation ranges with drivers",
      description: "Understand your business value and the factors that influence it most",
      highlight: "Market-based analysis"
    },
    {
      icon: TrendingUp,
      title: "Actionable prep roadmaps with ROI forecasts",
      description: "Prioritized improvements that deliver the highest valuation impact",
      highlight: "ROI-focused guidance"
    },
    {
      icon: Shield,
      title: "Risk identification and mitigation strategy",
      description: "Address deal-killing issues before they become problems",
      highlight: "Proactive risk management"
    },
    {
      icon: Users,
      title: "Deal structure guidance and buyer targeting",
      description: "Understand optimal deal structures and identify ideal buyer profiles",
      highlight: "Strategic positioning"
    },
    {
      icon: CheckCircle,
      title: "Representation planning and advisor vetting",
      description: "Get guidance on selecting the right advisors for your specific situation",
      highlight: "Expert advisor matching"
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Clarity and Control—
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Before You Go to Market
            </span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            ExitClarity helps owners understand where they stand, what they're worth, and how to move forward—on their own terms.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div 
                key={index}
                className="group bg-white p-8 rounded-2xl shadow-soft hover:shadow-medium transition-all duration-200 border border-border"
              >
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-200">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <span className="inline-block bg-accent/10 text-accent text-xs font-medium px-2 py-1 rounded-full mb-2">
                      {benefit.highlight}
                    </span>
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-200">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Owner Success Story */}
        <div className="bg-white rounded-2xl p-8 shadow-soft border">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                "Finally, a clear path forward"
              </h3>
              <p className="text-muted-foreground mb-6">
                "After years of wondering if we were ready to sell, ExitClarity gave us the clarity we needed. We identified three critical areas to improve and increased our valuation by 40% over 18 months."
              </p>
              <div className="space-y-2">
                <div className="font-semibold text-foreground">Sarah Chen</div>
                <div className="text-sm text-muted-foreground">CEO, TechStart Solutions</div>
                <div className="text-sm text-primary">$24M Exit • 2023</div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="text-center p-4 bg-primary/5 rounded-xl">
                <div className="text-2xl font-bold text-primary mb-1">40%</div>
                <div className="text-sm text-muted-foreground">Valuation increase</div>
              </div>
              <div className="text-center p-4 bg-primary/5 rounded-xl">
                <div className="text-2xl font-bold text-primary mb-1">18</div>
                <div className="text-sm text-muted-foreground">Months to exit</div>
              </div>
              <div className="text-center p-4 bg-primary/5 rounded-xl">
                <div className="text-2xl font-bold text-primary mb-1">3</div>
                <div className="text-sm text-muted-foreground">Critical improvements</div>
              </div>
              <div className="text-center p-4 bg-primary/5 rounded-xl">
                <div className="text-2xl font-bold text-primary mb-1">$24M</div>
                <div className="text-sm text-muted-foreground">Final exit value</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
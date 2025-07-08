import { TrendingUp, Clock, DollarSign, Users, Shield, Target } from "lucide-react";

export function OutcomesSection() {
  const firmBenefits = [
    {
      icon: TrendingUp,
      title: "Higher conversion from prospect to client",
      stat: "3x",
      description: "Better qualified prospects lead to more successful engagements"
    },
    {
      icon: DollarSign,
      title: "Larger average deal sizes",
      stat: "$2.4M",
      description: "Better-prepared companies command higher valuations"
    },
    {
      icon: Clock,
      title: "Faster, cleaner diligence",
      stat: "40%",
      description: "Reduction in due diligence timeline and complications"
    },
    {
      icon: Target,
      title: "Lower BD costs",
      stat: "60%",
      description: "Automated prospect nurturing reduces manual outreach"
    },
    {
      icon: Users,
      title: "Stronger client relationships",
      stat: "95%",
      description: "Client satisfaction through value-first approach"
    }
  ];

  const ownerBenefits = [
    {
      icon: Shield,
      title: "Confidence in their timing and value",
      stat: "90%",
      description: "Of owners feel more prepared for exit conversations"
    },
    {
      icon: Target,
      title: "Reduced deal risk",
      stat: "50%",
      description: "Fewer deals fail due to preparedness issues"
    },
    {
      icon: Clock,
      title: "Faster sale process",
      stat: "6-8",
      description: "Months average time to close vs 12-18 months"
    },
    {
      icon: DollarSign,
      title: "Better terms and structure",
      stat: "25%",
      description: "Higher average valuation vs unprepared sellers"
    },
    {
      icon: TrendingUp,
      title: "Lower advisory costs through prep",
      stat: "$200K",
      description: "Average savings in professional service fees"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Proven Benefits for{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Firms and Founders
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Real outcomes from M&A professionals and business owners who use ExitClarity to create successful exits.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* For M&A Firms */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold text-foreground mb-4">For M&A Firms</h3>
              <p className="text-muted-foreground">Transform your practice with better prospects and faster deals</p>
            </div>
            
            <div className="space-y-6">
              {firmBenefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-soft border border-border hover:shadow-medium transition-all duration-200">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-foreground">{benefit.title}</h4>
                          <span className="text-2xl font-bold text-primary">{benefit.stat}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{benefit.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* For Business Owners */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold text-foreground mb-4">For Business Owners</h3>
              <p className="text-muted-foreground">Achieve better outcomes with strategic preparation</p>
            </div>
            
            <div className="space-y-6">
              {ownerBenefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl p-6 border hover:shadow-soft transition-all duration-200">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-soft">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-foreground">{benefit.title}</h4>
                          <span className="text-2xl font-bold text-primary">{benefit.stat}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{benefit.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Combined Success Metrics */}
        <div className="mt-16 bg-primary rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-primary-foreground mb-8">
            ExitClarity Creates Win-Win Outcomes
          </h3>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div>
              <div className="text-3xl font-bold text-primary-foreground mb-2">500+</div>
              <p className="text-primary-foreground/80">Successful assessments completed</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-foreground mb-2">$2.1B</div>
              <p className="text-primary-foreground/80">Total deal value facilitated</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-foreground mb-2">95%</div>
              <p className="text-primary-foreground/80">Client satisfaction rate</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-foreground mb-2">18</div>
              <p className="text-primary-foreground/80">Months average time savings</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
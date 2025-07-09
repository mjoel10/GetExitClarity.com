import { Target, Database, FileText, Settings, BarChart3, Zap } from "lucide-react";

export function FeaturesSection() {
  const features = [
    {
      icon: Target,
      title: "Scale Your Practice Instantly",
      description: "Unlimited client assessments with professional-grade reporting"
    },
    {
      icon: BarChart3,
      title: "Deal Flow Intelligence",
      description: "Pipeline visibility dashboard to track client readiness across your portfolio"
    },
    {
      icon: FileText,
      title: "30+ Years of M&A Wisdom",
      description: "Expert analysis and commentary from experienced M&A professionals"
    },
    {
      icon: Settings,
      title: "White-Label Authority Building",
      description: "Co-branded reports that position your firm alongside ExitClarity as trusted exit-readiness experts"
    },
    {
      icon: Database,
      title: "Client Success Accelerator",
      description: "Systematic preparation tools to improve client outcomes before market entry"
    },
    {
      icon: Zap,
      title: "Zero-Touch Nurturing Engine",
      description: "Automated nurturing sequences that maintain engagement without manual effort"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Purpose-Built for{" "}
            <span className="text-primary">M&A Professionals</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed mb-4">
            Turn every prospect conversation into a value-delivery touchpoint
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            ExitClarity streamlines how you qualify, track, and support long-term exit prospects with tools designed specifically for the M&A workflow.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
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

        {/* Platform Preview */}
        <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 border">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              See the Platform in Action
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Watch how ExitClarity transforms your prospect engagement from initial contact to deal closure, with complete visibility and control throughout the process.
            </p>
          </div>
          
          <div className="flex justify-center">
            <div className="bg-white rounded-xl p-6 shadow-soft border">
              <div className="w-96 h-48 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-2">Platform Demo</div>
                  <div className="text-lg text-muted-foreground">Coming Soon</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
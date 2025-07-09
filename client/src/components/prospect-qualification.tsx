import { Target, Scale, TrendingUp, Users, Award } from "lucide-react";

export function ProspectQualification() {
  const features = [
    {
      icon: Target,
      title: "Systematic Assessment",
      description: "Evaluate prospects' actual readiness vs. perceived readiness with objective criteria"
    },
    {
      icon: Scale,
      title: "Objective Scoring",
      description: "Eliminate subjective judgment in prospect evaluation with data-driven metrics"
    },
    {
      icon: TrendingUp,
      title: "Data-Driven Prioritization",
      description: "Optimize business development efforts and resource allocation based on real insights"
    },
    {
      icon: Users,
      title: "Strategic Partnership Positioning",
      description: "Natural conversation starter that positions advisors as strategic partners, not just service providers"
    },
    {
      icon: Award,
      title: "Upfront Value Delivery",
      description: "Build trust through sophisticated analysis without requiring immediate fees"
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Prospect Qualification at Scale
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Transform your business development approach with systematic prospect evaluation and relationship building tools.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="group bg-white p-8 rounded-2xl shadow-soft hover:shadow-medium transition-all duration-200 border border-border"
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
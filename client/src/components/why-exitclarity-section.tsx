import { Handshake, Award, Shield } from "lucide-react";

export function WhyExitClaritySection() {
  const reasons = [
    {
      icon: Handshake,
      title: "Owner-First Approach",
      description: "No hidden agenda. We don't broker deals or take commissions."
    },
    {
      icon: Award,
      title: "30+ Years Experience",
      description: "Built on decades of real business ownership and M&A expertise"
    },
    {
      icon: Shield,
      title: "Private & Secure",
      description: "Your report is confidential. Never shared without your explicit approval."
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-8">
            Unbiased Advice You Can Trust
          </h2>
        </div>

        {/* Three Columns */}
        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">{reason.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
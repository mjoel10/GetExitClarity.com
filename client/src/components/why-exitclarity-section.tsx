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
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6" style={{ lineHeight: '1.5' }}>
            Unbiased Advice You Can Trust
          </h2>
        </div>

        {/* Three Columns */}
        <div className="grid md:grid-cols-3 gap-6">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: '#0B5FFF' }}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">{reason.title}</h3>
                <p className="text-muted-foreground" style={{ lineHeight: '1.5' }}>{reason.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
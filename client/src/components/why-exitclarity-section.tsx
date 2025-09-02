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
    <section className="py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-extrabold text-foreground mb-8" style={{ lineHeight: '1.3' }}>
            Unbiased Advice You Can Trust
          </h2>
        </div>

        {/* Three Columns */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: '#0B5FFF' }}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">{reason.title}</h3>
                <p className="text-sm text-muted-foreground" style={{ lineHeight: '1.7' }}>{reason.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
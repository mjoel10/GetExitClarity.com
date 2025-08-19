import { AlertTriangle, TrendingDown, Clock, DollarSign } from "lucide-react";

export function ProblemSection() {
  const problems = [
    {
      icon: DollarSign,
      title: "Exit Ready Financials",
      description: "Go beyond topline revenue. ExitClarity surfaces gaps in documentation, contracts, and quality so you walk in with facts that build instant credibility."
    },
    {
      icon: AlertTriangle,
      title: "Proactive Risk Management",
      description: "Catch key-person risks, weak systems, and process gaps before diligence derails the deal, and show owners how to fix them."
    },
    {
      icon: TrendingDown,
      title: "Realistic Valuation Guidance",
      description: "Anchor owners to conservative, buyer-type ranges early, resetting expectations without losing trust or momentum."
    },
    {
      icon: Clock,
      title: "Confident Decision Making",
      description: "GO / FIX / WAIT guidance turns hesitation into clear next steps, keeping sellers engaged and you in control."
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Main Problem Statement */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            <span className="text-primary">Clarity That Turns Sellers Into Clients</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            ExitClarity shows where owners stand today, and gives them a clear path forward, so you can focus on mandates that close now while nurturing tomorrow's pipeline.
          </p>
        </div>

        {/* Why Deals Fall Apart */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-foreground mb-12">
            Owners Don't Choose Service Providers. They Choose Trusted Partners.
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {problems.map((problem, index) => {
              const Icon = problem.icon;
              return (
                <div 
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-soft hover:shadow-medium transition-all duration-200 border border-border"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">{problem.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{problem.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Statistics */}
        <div className="bg-white rounded-2xl p-8 shadow-soft border">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">95%</div>
              <p className="text-muted-foreground">of business development outreach never succeeds</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">6-18</div>
              <p className="text-muted-foreground">months wasted on unqualified prospects</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">1</div>
              <p className="text-muted-foreground">additional deal pays for ExitClarity</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
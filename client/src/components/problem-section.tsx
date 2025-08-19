import { AlertTriangle, TrendingDown, Clock, DollarSign } from "lucide-react";

export function ProblemSection() {
  const problems = [
    {
      icon: DollarSign,
      title: "Exit Ready Financials",
      description: "ExitClarity pinpoints gaps in financial documentation, contracts, and revenue quality — showing owners what truly drives readiness and positioning you as the advisor who sees beyond topline numbers."
    },
    {
      icon: AlertTriangle,
      title: "Proactive Risk Management",
      description: "Our platform flags transition and team risks early, helping you step in before they become deal-killers — and positioning you as the advisor who protects value, not just chases it."
    },
    {
      icon: TrendingDown,
      title: "Realistic Valuation Guidance",
      description: "ExitClarity benchmarks owners against realistic valuation ranges by buyer type, allowing you to reset expectations early and keep trust intact — no more surprises mid-process."
    },
    {
      icon: Clock,
      title: "Confident Decision Making",
      description: "With clear GO / FIX / WAIT guidance, ExitClarity turns owner uncertainty into actionable next steps — letting you guide sellers decisively and keep momentum moving forward."
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Main Problem Statement */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Most Exit Conversations Stall Because{" "}
            <span className="text-primary">Readiness Is Unclear</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Many owners overestimate value and underestimate complexity. ExitClarity makes the blind spots visible with structured, repeatable assessments — moving owners from "not ready" to clear roadmaps, and firms from stalled conversations to signed mandates.
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
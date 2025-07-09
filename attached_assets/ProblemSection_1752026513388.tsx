import { AlertTriangle, TrendingDown, Clock, DollarSign } from "lucide-react";

export function ProblemSection() {
  const problems = [
    {
      icon: DollarSign,
      title: "Revenue ≠ Exit Ready",
      description: "Top-line growth doesn't matter if financials aren't clean, predictable, and documented."
    },
    {
      icon: AlertTriangle,
      title: "Operational Blind Spots",
      description: "Key-person risk, poor systems, and undocumented processes stall deals in diligence."
    },
    {
      icon: TrendingDown,
      title: "Unrealistic Expectations",
      description: "Inflated valuations and short timelines kill trust before deals can even start."
    },
    {
      icon: Clock,
      title: "Inadequate Representation",
      description: "The wrong advisor (or no advisor) leads to costly mistakes in high-stakes negotiations."
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
            M&A professionals waste time on prospects who aren't ready. Business owners wait too long, unprepared and overconfident. ExitClarity bridges that gap with structured, scalable intelligence that moves both sides forward.
          </p>
        </div>

        {/* Why Deals Fall Apart */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-foreground mb-12">
            Why So Many Deals Fall Apart Before They Begin
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
              <div className="text-3xl font-bold text-primary mb-2">70%</div>
              <p className="text-muted-foreground">of M&A conversations never progress to LOI</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">6-18</div>
              <p className="text-muted-foreground">months wasted on unqualified prospects</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">40%</div>
              <p className="text-muted-foreground">of deals fail during diligence</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
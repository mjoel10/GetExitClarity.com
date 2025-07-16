import { CheckCircle, FileText, TrendingUp } from "lucide-react";

export function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Complete the Assessment",
      description: "Owners answer questions across 11 readiness categories—covering operational, financial, emotional, and strategic dimensions.",
      icon: CheckCircle,
      details: [
        "11 comprehensive readiness factors",
        "30-minute guided assessment",
        "Confidential and secure process",
        "Industry-specific considerations"
      ]
    },
    {
      number: "02", 
      title: "Receive a Strategic Report",
      description: "Each owner receives a 20 - 25 page customized report with a GO/FIX/WAIT recommendation, risk analysis, valuation estimate, and action plan.",
      icon: FileText,
      details: [
        "GO/FIX/WAIT recommendation",
        "Detailed risk analysis",
        "Valuation range estimate", 
        "Prioritized action plan"
      ]
    },
    {
      number: "03",
      title: "Take Action & Track Progress",
      description: "Advisors use the platform to nurture prospects, track improvement, and accelerate deals with better-prepared clients.",
      icon: TrendingUp,
      details: [
        "Progress tracking dashboard",
        "Automated follow-up sequences",
        "Milestone achievement alerts",
        "Deal readiness scoring"
      ]
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            How ExitClarity Works
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            The Exit Readiness Platform is powered by our proprietary algorithms, drawing on real-world lessons from 30+ years of business ownership and navigating successful (and failed) exits.
          </p>
        </div>

        {/* Process Steps */}
        <div className="space-y-16">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                      <span className="text-primary-foreground font-bold text-lg">{step.number}</span>
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-foreground">{step.title}</h3>
                  </div>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {step.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Visual */}
              <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div className="bg-white rounded-2xl p-8 shadow-soft border">
                  <div className="flex items-center justify-center h-48">
                    <div className="text-center">
                      <step.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                      <div className="text-2xl font-bold text-foreground mb-2">Step {step.number}</div>
                      <div className="text-lg text-muted-foreground">{step.title}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
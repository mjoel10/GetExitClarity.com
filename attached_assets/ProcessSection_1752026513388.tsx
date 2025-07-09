import { CheckCircle, FileText, TrendingUp } from "lucide-react";
import assessmentIcon from "@/assets/assessment-icon.png";
import reportIcon from "@/assets/report-icon.png";
import actionIcon from "@/assets/action-icon.png";

export function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Complete the Assessment",
      description: "Owners answer questions across 11 readiness categories—covering operational, financial, emotional, and strategic dimensions.",
      icon: assessmentIcon,
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
      description: "Each owner receives a 15–20 page personalized report with a GO/FIX/WAIT recommendation, risk analysis, valuation estimate, and action plan.",
      icon: reportIcon,
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
      icon: actionIcon,
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
            Built on 30+ years of M&A experience, our 11-factor assessment delivers strategic clarity, risk analysis, and actionable guidance for every stakeholder.
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

                  <div className="grid md:grid-cols-2 gap-3">
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
              <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                <div className="relative">
                  <div className="bg-white rounded-2xl p-8 shadow-soft border">
                    <img 
                      src={step.icon} 
                      alt={step.title}
                      className="w-full h-auto max-w-xs mx-auto"
                    />
                  </div>
                  
                  {/* Step connector (except for last step) */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                      <div className="w-px h-16 bg-gradient-to-b from-primary to-transparent"></div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 bg-white rounded-2xl p-8 shadow-soft border">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">15-20</div>
              <p className="text-muted-foreground">Pages of strategic insights per report</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">11</div>
              <p className="text-muted-foreground">Comprehensive readiness factors assessed</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">30</div>
              <p className="text-muted-foreground">Minutes to complete full assessment</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
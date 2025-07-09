export function BusinessCaseROI() {
  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-soft border border-border">
            <div className="text-center mb-8">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Business Case & ROI
              </h2>
              <div className="bg-gradient-to-r from-primary to-accent rounded-lg p-6 mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Platform pays for itself with less than 1 converted deal per year
                </h3>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-muted/30 rounded-lg p-6">
                <h4 className="text-xl font-semibold text-foreground mb-4">
                  The Challenge
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  Most M&A firms struggle to engage prospects 1-3 years before they're ready to sell. 
                  ExitClarity gives you a reason to start valuable conversations early, systematically 
                  qualify readiness, and build trust through sophisticated analysis.
                </p>
              </div>

              <div className="bg-muted/30 rounded-lg p-6">
                <h4 className="text-xl font-semibold text-foreground mb-4">
                  The Solution
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  Focus on relationship building and pipeline development, not incremental revenue. 
                  Create lasting partnerships with business owners by delivering immediate value through 
                  comprehensive exit readiness analysis and strategic guidance.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">1-3 Years</div>
                  <div className="text-sm text-muted-foreground">Early engagement window</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">85%</div>
                  <div className="text-sm text-muted-foreground">Trust building improvement</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">3x</div>
                  <div className="text-sm text-muted-foreground">Faster qualification</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
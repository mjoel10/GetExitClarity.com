export function RossStorySection() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Side - Content */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4" style={{ lineHeight: '1.5' }}>
              Built by an Owner Who Learned the Hard Way
            </h2>
            
            <div className="prose prose-lg text-muted-foreground leading-relaxed">
              <p className="mb-6">
                Ross Joel failed to sell his company three times before finally succeeding on the fourth attempt. After selling to private equity in 2020, he helped grow that business 10X post-sale.
              </p>
              
              <p className="mb-6">
                He built ExitClarity to give owners the unbiased advice and insights he wishes he'd had earlier.
              </p>
              
              <div className="bg-muted/30 p-6 rounded-lg border-l-4 border-primary">
                <p className="text-lg font-medium text-foreground italic">
                  "I wish I had known then what I know now. ExitClarity ensures no business owner has to learn these lessons the hard way."
                </p>
                <p className="text-sm text-muted-foreground mt-3">— Ross Joel, Founder</p>
              </div>
            </div>
          </div>
          
          {/* Right Side - Photo placeholder and testimonial */}
          <div className="space-y-6">
            {/* Professional headshot placeholder */}
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 border text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-4xl font-bold">RJ</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Ross Joel</h3>
              <p className="text-muted-foreground">Founder & CEO, ExitClarity</p>
              <p className="text-sm text-muted-foreground mt-2">30+ Years M&A Experience</p>
            </div>
            
            {/* Small testimonial card */}
            <div className="bg-white rounded-xl p-6 shadow-soft border">
              <p className="text-sm text-muted-foreground italic mb-3">
                "After helping dozens of business owners navigate their exits, I realized the biggest gap wasn't in execution—it was in knowing when they were truly ready."
              </p>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-xs font-bold">RJ</span>
                </div>
                <div>
                  <p className="text-xs font-medium text-foreground">Ross Joel</p>
                  <p className="text-xs text-muted-foreground">Former Business Owner</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
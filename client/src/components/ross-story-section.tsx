import rossPhoto from "@assets/DSC09365_1756833269930.jpg";

export function RossStorySection() {
  return (
    <section className="pt-24 pb-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left Side - Content (60%) */}
          <div className="lg:col-span-3">
            <h2 className="text-4xl font-extrabold text-foreground mb-8 mt-20" style={{ lineHeight: '1.3' }}>
              Built by an Owner Who Learned the Hard Way
            </h2>
            
            <div className="space-y-6 text-muted-foreground">
              <p className="text-base" style={{ lineHeight: '1.6' }}>
                Ross Joel failed to sell his company three times before finally succeeding on the fourth attempt. After selling to private equity in 2020, he helped grow that business 10X post-sale.
              </p>
              
              <p className="text-base" style={{ lineHeight: '1.6' }}>
                He built ExitClarity to give owners the unbiased advice and insights he wishes he'd had earlier.
              </p>
              
              <div className="bg-blue-50 p-8 rounded-xl border-l-4 border-primary mt-10 shadow-sm">
                <p className="text-lg font-medium text-foreground italic mb-4" style={{ lineHeight: '1.5' }}>
                  "I wish I had known then what I know now. ExitClarity ensures no business owner has to learn these lessons the hard way."
                </p>
                <p className="text-sm text-muted-foreground font-semibold">— Ross Joel, Founder</p>
              </div>
            </div>
          </div>
          
          {/* Right Side - Photo (40%) */}
          <div className="lg:col-span-2">
            <div className="text-center">
              <div className="inline-block">
                <img 
                  src={rossPhoto} 
                  alt="Ross Joel, Founder of ExitClarity" 
                  className="w-64 h-64 object-cover rounded-xl shadow-lg mx-auto"
                />
                <div className="mt-6 text-center">
                  <h3 className="text-lg font-bold text-foreground mb-2">Ross Joel</h3>
                  <p className="text-sm text-muted-foreground font-medium">Founder & CEO, ExitClarity</p>
                  <p className="text-sm text-muted-foreground mt-1">30+ Years M&A Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
import rossPhoto from "@assets/DSC09365_1756833269930.jpg";

export function RossStorySection() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Sophisticated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/40 to-white"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-br from-blue-100/30 to-blue-200/20 rounded-full blur-3xl opacity-60"></div>
      <div className="absolute bottom-10 left-10 w-48 h-48 bg-gradient-to-tr from-primary/10 to-blue-200/20 rounded-full blur-2xl opacity-40"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-16 items-center">
          {/* Left Side - Content (60%) */}
          <div className="lg:col-span-3">
            <div className="space-y-8">
              <h2 className="text-4xl lg:text-5xl font-extrabold text-foreground leading-tight">
                Built by an Owner Who{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">
                  Learned the Hard Way
                </span>
              </h2>
              
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Ross failed to sell his company three times before finally getting it right on the fourth. After selling to private equity in 2020, he grew the business 10X post-sale.
                </p>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We built ExitClarity to be the tool he wishes he had back then—an unbiased, owner-first readiness check grounded in real scars, not theory.
                </p>
              </div>
              
              {/* Enhanced Quote Design */}
              <div className="relative mt-12">
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-primary/20 to-blue-600/20 rounded-full blur-xl"></div>
                <div className="relative bg-white/80 backdrop-blur-sm border border-white/60 rounded-2xl p-6 sm:p-8 shadow-xl">
                  <div className="absolute -top-3 -left-3 w-6 h-6 bg-primary rounded-full"></div>
                  <div className="absolute top-4 left-4 text-primary/20 text-4xl font-serif">"</div>
                  
                  <blockquote className="relative pl-8">
                    <p className="text-xl font-medium text-foreground italic leading-relaxed mb-6">
                      I wish I had known then what I know now. ExitClarity ensures no business owner has to learn these lessons the hard way.
                    </p>
                    <footer className="flex items-center gap-3">
                      <div className="w-8 h-0.5 bg-gradient-to-r from-primary to-blue-600"></div>
                      <cite className="text-sm font-semibold text-muted-foreground not-italic">
                        Ross Joel, Founding Partner
                      </cite>
                    </footer>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Side - Enhanced Photo (40%) */}
          <div className="lg:col-span-2">
            <div className="relative">
              {/* Background decorative elements */}
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-blue-200/30 to-primary/20 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-tr from-primary/30 to-blue-300/20 rounded-full blur-xl"></div>
              
              {/* Photo Container */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-blue-600/20 rounded-3xl blur-lg transform rotate-3 scale-105"></div>
                <div className="relative bg-white rounded-3xl p-6 shadow-2xl border border-white/60">
                  <img 
                    src={rossPhoto} 
                    alt="Ross Joel, Founder of ExitClarity" 
                    className="w-full h-80 object-cover rounded-2xl shadow-lg"
                  />
                  
                  {/* Professional Info Card */}
                  <div className="mt-6 text-center">
                    <h3 className="text-xl font-bold text-foreground mb-2">Ross Joel</h3>
                    <div className="space-y-1">
                      <p className="text-sm font-semibold text-primary">Founding Partner, ExitClarity</p>
                      <p className="text-sm text-muted-foreground">30+ Years of Business Experience</p>
                    </div>
                    
                    {/* Achievement badges */}
                    <div className="flex justify-center gap-2 mt-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        Successful Exit
                      </span>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        10X Growth
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
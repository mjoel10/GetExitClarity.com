import { AlertTriangle, TrendingDown, Clock } from "lucide-react";

export function ProblemSection() {
  const stats = [
    {
      icon: AlertTriangle,
      value: "80%",
      description: "of business owners have no exit strategy",
      color: "from-slate-600 to-slate-700",
      bgColor: "from-slate-50 to-slate-100/50",
      borderColor: "border-slate-200/50"
    },
    {
      icon: TrendingDown,
      value: "$10M+",
      description: "average value left on the table",
      color: "from-slate-600 to-slate-700",
      bgColor: "from-slate-50 to-slate-100/50",
      borderColor: "border-slate-200/50"
    },
    {
      icon: Clock,
      value: "18-24",
      description: "months typical prep time needed",
      color: "from-blue-500 to-blue-600",
      bgColor: "from-blue-50 to-blue-100/50",
      borderColor: "border-blue-200/50"
    }
  ];

  return (
    <section className="relative py-16 lg:py-24 overflow-hidden">
      {/* Premium Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-white/10 to-blue-300/20 rounded-full blur-3xl opacity-60"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-tr from-blue-400/20 to-white/10 rounded-full blur-2xl opacity-40"></div>
      
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/10 rounded-full animate-pulse"
            style={{
              left: `${10 + i * 6}%`,
              top: `${15 + (i % 5) * 15}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + (i % 3)}s`
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Enhanced Problem Statement */}
        <div className="text-center max-w-5xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-white/20">
            <AlertTriangle className="w-4 h-4" />
            The Reality Check
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
            Most Business Owners Aren't Ready When{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-teal-100">
              The Opportunity Knocks
            </span>
          </h2>
          
          <p className="text-xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
            The statistics reveal a critical gap in exit readiness that costs business owners millions
          </p>
        </div>

        {/* Enhanced Statistics Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="relative group">
                {/* Background glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-white/20 to-white/10 rounded-3xl blur-lg group-hover:blur-xl transition-all duration-300 opacity-75"></div>
                
                {/* Card */}
                <div className="relative bg-white/95 backdrop-blur-sm rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl border border-white/60 text-center group-hover:transform group-hover:scale-105 transition-all duration-300">
                  {/* Icon */}
                  <div className="relative mb-6">
                    <div className={`absolute inset-0 bg-gradient-to-br ${stat.bgColor} rounded-2xl blur-sm`}></div>
                    <div className={`relative w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${stat.bgColor} border ${stat.borderColor} flex items-center justify-center shadow-lg`}>
                      <Icon className={`w-8 h-8 bg-gradient-to-br ${stat.color} bg-clip-text text-transparent`} style={{
                        filter: `drop-shadow(0 0 0 ${stat.color.includes('red') ? '#dc2626' : '#2563eb'})`
                      }} />
                    </div>
                  </div>
                  
                  {/* Statistic */}
                  <div className={`text-5xl lg:text-6xl font-extrabold mb-4 bg-gradient-to-br ${stat.color} bg-clip-text text-transparent`}>
                    {stat.value}
                  </div>
                  
                  {/* Description */}
                  <p className="text-gray-700 font-medium leading-relaxed">
                    {stat.description}
                  </p>
                  
                  {/* Subtle accent line */}
                  <div className={`w-12 h-1 bg-gradient-to-r ${stat.color} rounded-full mx-auto mt-6 opacity-60`}></div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Enhanced Bottom Message */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-2xl border border-white/20">
            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
            <span className="font-semibold">Don't let opportunity pass you by</span>
          </div>
        </div>
      </div>
    </section>
  );
}
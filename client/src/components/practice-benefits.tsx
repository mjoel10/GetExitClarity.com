import { TrendingUp, Target, Clock, Users } from 'lucide-react';

export function PracticeBenefits() {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Higher Conversion Rates",
      description: "Convert more prospects to engaged clients through systematic qualification and early relationship building."
    },
    {
      icon: Target,
      title: "Improved Deal Prep", 
      description: "Better-prepared companies command higher valuations and more favorable deal terms."
    },
    {
      icon: Clock,
      title: "Faster Deal Cycles",
      description: "Accelerate completion through systematic preparation and risk mitigation."
    },
    {
      icon: Users,
      title: "Lower Business Development Costs",
      description: "Lower acquisition costs through scalable lead qualification and automated nurturing."
    }
  ];

  return (
    <section className="pt-20 pb-8" style={{ backgroundColor: 'hsl(0, 0%, 100%)' }}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'hsl(218, 15%, 15%)' }}>
            Key Benefits
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'hsl(218, 10%, 45%)' }}>
            Transform your business development with scalable prospect evaluation and relationship building.
          </p>
        </div>

        {/* Benefits List */}
        <div className="grid md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div key={index} className="rounded-xl p-6 border hover:shadow-lg transition-all duration-200" style={{ 
                backgroundColor: 'hsl(0, 0%, 100%)', 
                borderColor: 'hsl(218, 20%, 90%)',
                boxShadow: '0 4px 20px -4px hsl(218, 100%, 25%, 0.1)'
              }}>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'hsl(218, 100%, 25%, 0.1)' }}>
                    <Icon className="h-5 w-5" style={{ color: 'hsl(218, 100%, 25%)' }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold mb-2" style={{ color: 'hsl(218, 15%, 15%)' }}>{benefit.title}</h4>
                    <p className="text-sm" style={{ color: 'hsl(218, 10%, 45%)' }}>{benefit.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
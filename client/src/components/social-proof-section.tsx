import { Star, Quote } from "lucide-react";

export function SocialProofSection() {
  const testimonials = [
    {
      quote: "ExitClarity helped me realize I wasn't as ready as I thought. The roadmap they provided added $2M to my eventual sale price.",
      name: "Sarah Mitchell",
      title: "Former CEO",
      company: "TechVision Solutions",
      industry: "SaaS",
      rating: 5
    },
    {
      quote: "I wish I had this assessment 3 years ago. Would have saved me from making costly mistakes in my first exit attempt.",
      name: "Mike Rodriguez",
      title: "Founder",
      company: "Rodriguez Manufacturing",
      industry: "Manufacturing",
      rating: 5
    },
    {
      quote: "The valuation ranges were spot-on. Gave me confidence going into negotiations and helped me choose the right buyer.",
      name: "Jennifer Chen",
      title: "Owner",
      company: "Chen Digital Marketing",
      industry: "Services",
      rating: 5
    },
    {
      quote: "ExitClarity's assessment revealed gaps in our documentation that could have killed our deal. We fixed them and closed successfully.",
      name: "David Thompson",
      title: "Co-Founder",
      company: "Thompson & Associates",
      industry: "Consulting",
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-8">
            Join Hundreds of Prepared Business Owners
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border">
              {/* Stars */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              {/* Quote */}
              <div className="relative mb-6">
                <Quote className="w-8 h-8 text-primary/20 absolute -top-2 -left-2" />
                <p className="text-muted-foreground italic leading-relaxed pl-6">
                  "{testimonial.quote}"
                </p>
              </div>
              
              {/* Author */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-sm">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.title}, {testimonial.company}</p>
                  <div className="inline-block bg-primary/10 text-primary text-xs px-2 py-1 rounded mt-1">
                    {testimonial.industry}
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
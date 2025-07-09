import { Button } from "@/components/ui/button";
import { Calendar, FileText, Play, ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto px-6">
        {/* Main CTA */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
            Start Turning Exit Conversations Into{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Strategic Wins
            </span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            Whether you're advising or preparing to sell, ExitClarity brings structure, insight, and confidence to every step of the journey.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" className="group" asChild>
              <a href="https://calendly.com/exitclarity-info/30min" target="_blank" rel="noopener noreferrer">
                <Calendar className="mr-2 h-5 w-5" />
                Schedule a Demo
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            
            <Button variant="professional" size="xl" className="group">
              <FileText className="mr-2 h-5 w-5" />
              See Sample Report
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>

        {/* Two-Column Value Props */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-white p-8 rounded-2xl shadow-soft border">
            <h3 className="text-2xl font-bold text-foreground mb-4">For M&A Professionals</h3>
            <p className="text-muted-foreground mb-6">
              Transform your practice with systematic prospect qualification, automated nurturing, and higher-quality deal flow.
            </p>
            <ul className="space-y-3 text-sm text-muted-foreground mb-6">
              <li className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                <span>Qualify prospects 3x faster with objective scoring</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                <span>Generate co-brand strategic reports to build trust early</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                <span>Track pipeline progress with CRM integration</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                <span>Close deals faster with better-prepared clients</span>
              </li>
            </ul>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button variant="hero" size="lg" className="group flex-1" asChild>
                <a href="https://calendly.com/exitclarity-info/30min" target="_blank" rel="noopener noreferrer">
                  <Calendar className="mr-2 h-5 w-5" />
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button variant="outline" size="lg" className="group flex-1">
                <FileText className="mr-2 h-5 w-5" />
                Learn More
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-8 rounded-2xl border">
            <h3 className="text-2xl font-bold text-foreground mb-4">For Business Owners</h3>
            <p className="text-muted-foreground mb-6">
              Gain clarity on your exit readiness, understand your value, and build a strategic roadmap for maximum return.
            </p>
            <ul className="space-y-3 text-sm text-muted-foreground mb-6">
              <li className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                <span>Get clear GO/FIX/WAIT recommendation with rationale</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                <span>Understand your valuation range and value drivers</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                <span>Identify and mitigate deal-killing risks early</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                <span>Build confidence and control in your exit process</span>
              </li>
            </ul>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button variant="hero" size="lg" className="group flex-1" asChild>
                <a href="https://calendly.com/exitclarity-info/30min" target="_blank" rel="noopener noreferrer">
                  <Calendar className="mr-2 h-5 w-5" />
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button variant="outline" size="lg" className="group flex-1">
                <FileText className="mr-2 h-5 w-5" />
                Learn More
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
}
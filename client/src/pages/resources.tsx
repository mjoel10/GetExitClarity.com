import Header from "@/components/header";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, TrendingUp, BarChart3, CheckSquare, Video, BookOpen, ArrowRight } from "lucide-react";
import { useMeta } from "@/hooks/use-meta";

export default function Resources() {
  useMeta({
    title: "ExitClarity | M&A Resources & Tools",
    description: "Free M&A resources including exit planning guides, valuation benchmarks, due diligence checklists, and market insights for advisors and business owners.",
    ogTitle: "ExitClarity | M&A Resources & Tools",
    ogDescription: "Free M&A resources including exit planning guides, valuation benchmarks, due diligence checklists, and market insights for advisors and business owners."
  });

  const resourceCards = [
    {
      title: "Exit Planning Guide",
      description: "Comprehensive guide to preparing your business for a successful exit, from initial planning to final transaction.",
      icon: FileText,
    },
    {
      title: "Valuation Benchmarks", 
      description: "Industry-specific valuation multiples and benchmarks to help you understand your company's market position.",
      icon: BarChart3,
    },
    {
      title: "M&A Market Trends",
      description: "Latest trends and insights from the M&A market, including deal activity, valuations, and strategic considerations.",
      icon: TrendingUp,
    },
    {
      title: "Due Diligence Checklist",
      description: "Essential checklist for conducting thorough due diligence in M&A transactions.",
      icon: CheckSquare,
    },
    {
      title: "Webinar Series",
      description: "Join our expert-led webinars covering key topics in M&A strategy, valuation, and transaction execution.",
      icon: Video,
    },
    {
      title: "Case Studies",
      description: "Real-world examples of successful exits and lessons learned from various M&A transactions.",
      icon: BookOpen,
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-white">
        <Header />
        
        <main className="pt-20">
          {/* Hero Section */}
          <section className="py-16 lg:py-20 bg-gradient-to-br from-blue-50 to-white">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
              <div className="text-center max-w-4xl mx-auto mb-12">
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  Resource Center
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  Explore our comprehensive collection of guides, reports, and tools to support your M&A journey
                </p>
                
                {/* Sample Report Notice */}
                <div className="bg-blue-100 border border-blue-200 rounded-xl p-4 mb-8">
                  <p className="text-blue-800">
                    Looking for our Sample Report?{" "}
                    <Button variant="link" className="p-0 h-auto font-semibold text-blue-600 hover:text-blue-800" asChild>
                      <a href="/sample-report">
                        View Sample Report →
                      </a>
                    </Button>
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Resources Grid */}
          <section className="py-16 lg:py-20">
            <div className="max-w-7xl mx-auto px-4 md:px-6">

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {resourceCards.map((resource, index) => {
                  const IconComponent = resource.icon;
                  return (
                    <Card key={index} className="hover:shadow-lg transition-shadow duration-200">
                      <CardHeader>
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                          <IconComponent className="w-6 h-6 text-blue-600" />
                        </div>
                        <CardTitle className="text-xl">{resource.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 mb-4 leading-relaxed">
                          {resource.description}
                        </p>
                        <Badge variant="outline" className="bg-gray-50 text-gray-600 border-gray-300">
                          Coming Soon
                        </Badge>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
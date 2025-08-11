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
          <section className="py-20 lg:py-24 bg-gradient-to-br from-blue-50 via-indigo-50/30 to-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
              <div className="text-center max-w-4xl mx-auto">
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  Resource Center
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed mb-12">
                  Explore our comprehensive collection of guides, reports, and tools to support your M&A journey
                </p>
                
                {/* Hero Visual Element */}
                <div className="relative mb-12 flex justify-center">
                  <svg
                    width="400"
                    height="200"
                    viewBox="0 0 400 200"
                    className="w-full max-w-md h-auto opacity-60"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Background shapes */}
                    <circle cx="80" cy="60" r="40" fill="#1e40af" opacity="0.1" />
                    <circle cx="320" cy="140" r="35" fill="#3b82f6" opacity="0.15" />
                    <rect x="150" y="20" width="60" height="40" rx="8" fill="#6366f1" opacity="0.1" />
                    <rect x="220" y="120" width="80" height="50" rx="10" fill="#1e40af" opacity="0.12" />
                    
                    {/* Document icons */}
                    <rect x="50" y="100" width="45" height="60" rx="4" fill="#1e40af" opacity="0.2" stroke="#1e40af" strokeWidth="1" />
                    <rect x="58" y="108" width="29" height="2" fill="#1e40af" opacity="0.4" />
                    <rect x="58" y="118" width="24" height="2" fill="#1e40af" opacity="0.4" />
                    <rect x="58" y="128" width="29" height="2" fill="#1e40af" opacity="0.4" />
                    <rect x="58" y="138" width="20" height="2" fill="#1e40af" opacity="0.4" />
                    
                    <rect x="120" y="80" width="45" height="60" rx="4" fill="#3b82f6" opacity="0.2" stroke="#3b82f6" strokeWidth="1" />
                    <rect x="128" y="88" width="29" height="2" fill="#3b82f6" opacity="0.4" />
                    <rect x="128" y="98" width="24" height="2" fill="#3b82f6" opacity="0.4" />
                    <rect x="128" y="108" width="29" height="2" fill="#3b82f6" opacity="0.4" />
                    <rect x="128" y="118" width="20" height="2" fill="#3b82f6" opacity="0.4" />
                    
                    <rect x="270" y="40" width="45" height="60" rx="4" fill="#6366f1" opacity="0.2" stroke="#6366f1" strokeWidth="1" />
                    <rect x="278" y="48" width="29" height="2" fill="#6366f1" opacity="0.4" />
                    <rect x="278" y="58" width="24" height="2" fill="#6366f1" opacity="0.4" />
                    <rect x="278" y="68" width="29" height="2" fill="#6366f1" opacity="0.4" />
                    <rect x="278" y="78" width="20" height="2" fill="#6366f1" opacity="0.4" />
                    
                    {/* Chart/Graph elements */}
                    <rect x="180" y="140" width="8" height="30" fill="#1e40af" opacity="0.3" />
                    <rect x="192" y="125" width="8" height="45" fill="#3b82f6" opacity="0.3" />
                    <rect x="204" y="135" width="8" height="35" fill="#6366f1" opacity="0.3" />
                    <rect x="216" y="115" width="8" height="55" fill="#1e40af" opacity="0.3" />
                    
                    {/* Connecting lines */}
                    <path d="M95 130 Q140 110 165 90" stroke="#1e40af" strokeWidth="1" fill="none" opacity="0.2" strokeDasharray="3,3" />
                    <path d="M145 110 Q200 100 270 70" stroke="#3b82f6" strokeWidth="1" fill="none" opacity="0.2" strokeDasharray="3,3" />
                    
                    {/* Floating elements */}
                    <circle cx="340" cy="50" r="3" fill="#6366f1" opacity="0.4" />
                    <circle cx="30" cy="40" r="2" fill="#1e40af" opacity="0.4" />
                    <circle cx="370" cy="180" r="2" fill="#3b82f6" opacity="0.4" />
                  </svg>
                </div>
                
                {/* Sample Report Notice */}
                <div className="bg-blue-100 border border-blue-200 rounded-xl p-4 mb-8 backdrop-blur-sm bg-blue-50/80">
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
            
            {/* Background decorative elements */}
            <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-200/20 to-indigo-200/20 rounded-full blur-xl"></div>
            <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-indigo-200/20 to-purple-200/20 rounded-full blur-xl"></div>
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
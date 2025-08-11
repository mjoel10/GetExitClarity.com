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
          <section className="py-12 lg:py-16 bg-gradient-to-br from-blue-50 via-indigo-50/30 to-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
              <div className="text-center max-w-4xl mx-auto">
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  Resource Center
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  Explore our comprehensive collection of guides, reports, and tools to support your M&A journey
                </p>
                
                {/* Hero Visual Element */}
                <div className="relative mb-6 flex justify-center">
                  <svg
                    width="600"
                    height="220"
                    viewBox="0 0 600 220"
                    className="w-full max-w-xl h-auto opacity-90"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Large background elements */}
                    <circle cx="120" cy="60" r="45" fill="#1e40af" opacity="0.15" />
                    <circle cx="480" cy="160" r="40" fill="#3b82f6" opacity="0.18" />
                    <rect x="220" y="20" width="70" height="45" rx="10" fill="#6366f1" opacity="0.16" />
                    <rect x="350" y="140" width="100" height="60" rx="12" fill="#1e40af" opacity="0.14" />
                    
                    {/* Central knowledge hub */}
                    <circle cx="300" cy="110" r="60" fill="#1e40af" opacity="0.12" stroke="#1e40af" strokeWidth="2" strokeOpacity="0.25" />
                    <circle cx="300" cy="110" r="35" fill="#3b82f6" opacity="0.15" />
                    <circle cx="300" cy="110" r="15" fill="#6366f1" opacity="0.3" />
                    
                    {/* Document clusters */}
                    <g transform="translate(80,90)">
                      <rect x="0" y="0" width="40" height="55" rx="5" fill="#1e40af" opacity="0.35" stroke="#1e40af" strokeWidth="1.5" />
                      <rect x="6" y="8" width="28" height="2" fill="#1e40af" opacity="0.7" />
                      <rect x="6" y="16" width="22" height="2" fill="#1e40af" opacity="0.7" />
                      <rect x="6" y="24" width="28" height="2" fill="#1e40af" opacity="0.7" />
                      <rect x="6" y="32" width="18" height="2" fill="#1e40af" opacity="0.7" />
                      <rect x="6" y="40" width="24" height="2" fill="#1e40af" opacity="0.7" />
                      
                      <rect x="12" y="-12" width="40" height="55" rx="5" fill="#3b82f6" opacity="0.3" stroke="#3b82f6" strokeWidth="1.5" />
                      <rect x="18" y="-4" width="28" height="2" fill="#3b82f6" opacity="0.6" />
                      <rect x="18" y="4" width="22" height="2" fill="#3b82f6" opacity="0.6" />
                      <rect x="18" y="12" width="28" height="2" fill="#3b82f6" opacity="0.6" />
                      <rect x="18" y="20" width="18" height="2" fill="#3b82f6" opacity="0.6" />
                    </g>
                    
                    <g transform="translate(470,40)">
                      <rect x="0" y="0" width="40" height="55" rx="5" fill="#6366f1" opacity="0.35" stroke="#6366f1" strokeWidth="1.5" />
                      <rect x="6" y="8" width="28" height="2" fill="#6366f1" opacity="0.7" />
                      <rect x="6" y="16" width="22" height="2" fill="#6366f1" opacity="0.7" />
                      <rect x="6" y="24" width="28" height="2" fill="#6366f1" opacity="0.7" />
                      <rect x="6" y="32" width="18" height="2" fill="#6366f1" opacity="0.7" />
                      
                      <rect x="-12" y="12" width="40" height="55" rx="5" fill="#1e40af" opacity="0.3" stroke="#1e40af" strokeWidth="1.5" />
                      <rect x="-6" y="20" width="28" height="2" fill="#1e40af" opacity="0.6" />
                      <rect x="-6" y="28" width="22" height="2" fill="#1e40af" opacity="0.6" />
                      <rect x="-6" y="36" width="28" height="2" fill="#1e40af" opacity="0.6" />
                    </g>
                    
                    {/* Analytics/Chart section */}
                    <g transform="translate(160,160)">
                      <rect x="0" y="0" width="80" height="45" rx="6" fill="#f8fafc" stroke="#1e40af" strokeWidth="1" opacity="0.4" />
                      <rect x="12" y="28" width="8" height="12" fill="#1e40af" opacity="0.6" />
                      <rect x="24" y="20" width="8" height="20" fill="#3b82f6" opacity="0.6" />
                      <rect x="36" y="24" width="8" height="16" fill="#6366f1" opacity="0.6" />
                      <rect x="48" y="16" width="8" height="24" fill="#1e40af" opacity="0.6" />
                      <rect x="60" y="22" width="8" height="18" fill="#3b82f6" opacity="0.6" />
                    </g>
                    
                    {/* Knowledge flow lines */}
                    <path d="M120 110 Q180 100 240 110" stroke="#1e40af" strokeWidth="2" fill="none" opacity="0.35" strokeDasharray="4,4" />
                    <path d="M360 110 Q420 100 470 80" stroke="#3b82f6" strokeWidth="2" fill="none" opacity="0.35" strokeDasharray="4,4" />
                    <path d="M280 150 Q240 170 200 180" stroke="#6366f1" strokeWidth="2" fill="none" opacity="0.35" strokeDasharray="4,4" />
                    
                    {/* Floating insight elements */}
                    <circle cx="140" cy="40" r="4" fill="#6366f1" opacity="0.6" />
                    <circle cx="450" cy="30" r="3" fill="#1e40af" opacity="0.6" />
                    <circle cx="50" cy="60" r="2" fill="#3b82f6" opacity="0.6" />
                    <circle cx="550" cy="80" r="4" fill="#6366f1" opacity="0.6" />
                    <circle cx="80" cy="200" r="3" fill="#1e40af" opacity="0.6" />
                    <circle cx="520" cy="190" r="2" fill="#3b82f6" opacity="0.6" />
                    
                    {/* Growth arrows */}
                    <path d="M380 80 L410 65 L406 70 M410 65 L406 60" stroke="#1e40af" strokeWidth="2" fill="none" opacity="0.4" />
                    <path d="M200 140 L230 125 L226 130 M230 125 L226 120" stroke="#3b82f6" strokeWidth="2" fill="none" opacity="0.4" />
                  </svg>
                </div>
                
                {/* Sample Report Notice */}
                <div className="bg-blue-100 border border-blue-200 rounded-xl p-4 backdrop-blur-sm bg-blue-50/80">
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
          <section className="py-8 lg:py-12">
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
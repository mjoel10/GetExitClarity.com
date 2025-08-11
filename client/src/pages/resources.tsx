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
                <div className="relative mb-8 flex justify-center">
                  <svg
                    width="600"
                    height="280"
                    viewBox="0 0 600 280"
                    className="w-full max-w-2xl h-auto opacity-70"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Large background elements */}
                    <circle cx="120" cy="80" r="60" fill="#1e40af" opacity="0.08" />
                    <circle cx="480" cy="200" r="50" fill="#3b82f6" opacity="0.12" />
                    <rect x="220" y="30" width="90" height="60" rx="12" fill="#6366f1" opacity="0.1" />
                    <rect x="350" y="180" width="120" height="80" rx="16" fill="#1e40af" opacity="0.08" />
                    
                    {/* Central knowledge hub */}
                    <circle cx="300" cy="140" r="80" fill="#1e40af" opacity="0.06" stroke="#1e40af" strokeWidth="2" strokeOpacity="0.15" />
                    <circle cx="300" cy="140" r="50" fill="#3b82f6" opacity="0.08" />
                    <circle cx="300" cy="140" r="20" fill="#6366f1" opacity="0.2" />
                    
                    {/* Document clusters */}
                    <g transform="translate(80,120)">
                      <rect x="0" y="0" width="50" height="70" rx="6" fill="#1e40af" opacity="0.25" stroke="#1e40af" strokeWidth="1.5" />
                      <rect x="8" y="10" width="34" height="3" fill="#1e40af" opacity="0.5" />
                      <rect x="8" y="20" width="28" height="3" fill="#1e40af" opacity="0.5" />
                      <rect x="8" y="30" width="34" height="3" fill="#1e40af" opacity="0.5" />
                      <rect x="8" y="40" width="24" height="3" fill="#1e40af" opacity="0.5" />
                      <rect x="8" y="50" width="30" height="3" fill="#1e40af" opacity="0.5" />
                      
                      <rect x="15" y="-15" width="50" height="70" rx="6" fill="#3b82f6" opacity="0.2" stroke="#3b82f6" strokeWidth="1.5" />
                      <rect x="23" y="-5" width="34" height="3" fill="#3b82f6" opacity="0.4" />
                      <rect x="23" y="5" width="28" height="3" fill="#3b82f6" opacity="0.4" />
                      <rect x="23" y="15" width="34" height="3" fill="#3b82f6" opacity="0.4" />
                      <rect x="23" y="25" width="24" height="3" fill="#3b82f6" opacity="0.4" />
                    </g>
                    
                    <g transform="translate(470,60)">
                      <rect x="0" y="0" width="50" height="70" rx="6" fill="#6366f1" opacity="0.25" stroke="#6366f1" strokeWidth="1.5" />
                      <rect x="8" y="10" width="34" height="3" fill="#6366f1" opacity="0.5" />
                      <rect x="8" y="20" width="28" height="3" fill="#6366f1" opacity="0.5" />
                      <rect x="8" y="30" width="34" height="3" fill="#6366f1" opacity="0.5" />
                      <rect x="8" y="40" width="24" height="3" fill="#6366f1" opacity="0.5" />
                      
                      <rect x="-15" y="15" width="50" height="70" rx="6" fill="#1e40af" opacity="0.2" stroke="#1e40af" strokeWidth="1.5" />
                      <rect x="-7" y="25" width="34" height="3" fill="#1e40af" opacity="0.4" />
                      <rect x="-7" y="35" width="28" height="3" fill="#1e40af" opacity="0.4" />
                      <rect x="-7" y="45" width="34" height="3" fill="#1e40af" opacity="0.4" />
                    </g>
                    
                    {/* Analytics/Chart section */}
                    <g transform="translate(160,200)">
                      <rect x="0" y="0" width="100" height="60" rx="8" fill="#f8fafc" stroke="#1e40af" strokeWidth="1" opacity="0.3" />
                      <rect x="15" y="35" width="12" height="15" fill="#1e40af" opacity="0.4" />
                      <rect x="30" y="25" width="12" height="25" fill="#3b82f6" opacity="0.4" />
                      <rect x="45" y="30" width="12" height="20" fill="#6366f1" opacity="0.4" />
                      <rect x="60" y="20" width="12" height="30" fill="#1e40af" opacity="0.4" />
                      <rect x="75" y="28" width="12" height="22" fill="#3b82f6" opacity="0.4" />
                    </g>
                    
                    {/* Knowledge flow lines */}
                    <path d="M130 140 Q200 120 250 140" stroke="#1e40af" strokeWidth="2" fill="none" opacity="0.25" strokeDasharray="5,5" />
                    <path d="M350 140 Q420 120 470 110" stroke="#3b82f6" strokeWidth="2" fill="none" opacity="0.25" strokeDasharray="5,5" />
                    <path d="M280 200 Q240 220 210 230" stroke="#6366f1" strokeWidth="2" fill="none" opacity="0.25" strokeDasharray="5,5" />
                    
                    {/* Floating insight elements */}
                    <circle cx="150" cy="50" r="6" fill="#6366f1" opacity="0.4" />
                    <circle cx="450" cy="40" r="4" fill="#1e40af" opacity="0.4" />
                    <circle cx="50" cy="80" r="3" fill="#3b82f6" opacity="0.4" />
                    <circle cx="550" cy="100" r="5" fill="#6366f1" opacity="0.4" />
                    <circle cx="80" cy="250" r="4" fill="#1e40af" opacity="0.4" />
                    <circle cx="520" cy="240" r="3" fill="#3b82f6" opacity="0.4" />
                    
                    {/* Growth arrows */}
                    <path d="M380 100 L420 80 L415 85 M420 80 L415 75" stroke="#1e40af" strokeWidth="2" fill="none" opacity="0.3" />
                    <path d="M200 180 L240 160 L235 165 M240 160 L235 155" stroke="#3b82f6" strokeWidth="2" fill="none" opacity="0.3" />
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
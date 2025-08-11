import Header from "@/components/header";
import Footer from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, Clock, User, ArrowRight, TrendingUp, Target, Users, BookOpen, BarChart3, Lightbulb } from "lucide-react";
import { Link } from "wouter";
import { useMeta } from "@/hooks/use-meta";

// Featured blog post data
const featuredPost = {
  title: "The Ultimate Exit: Why 87% of Business Sales Fail (And How to Be in the 13% That Don't)",
  slug: "ultimate-exit-why-87-percent-fail",
  category: "Exit Planning",
  author: "ExitClarity Team",
  publishedDate: "January 11, 2025",
  readTime: "5 min",
  excerpt: "The difference between a successful exit and a failed one isn't luck. It's preparation. And most owners aren't prepared at all.",
  featured: true
};

export default function Blog() {
  useMeta({
    title: "ExitClarity Blog - Strategic Guidance for Business Owners and M&A Advisors",
    description: "Expert insights on exit planning, M&A trends, and business valuation strategies for business owners and M&A advisors.",
    ogTitle: "ExitClarity Blog - Strategic Guidance for Business Owners and M&A Advisors",
    ogDescription: "Expert insights on exit planning, M&A trends, and business valuation strategies for business owners and M&A advisors."
  });

  return (
    <>
      <div className="min-h-screen bg-white">
        <Header />
        
        <main className="pt-16 sm:pt-20">
          {/* Enhanced Hero Section */}
          <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-primary/5 via-blue-50 to-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/3 to-transparent"></div>
            
            {/* Decorative background elements */}
            <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
            <div className="absolute top-40 right-20 w-32 h-32 bg-blue-200/20 rounded-full blur-2xl"></div>
            <div className="absolute bottom-10 left-1/4 w-24 h-24 bg-primary/5 rounded-full blur-xl"></div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Content Column */}
                <div className="text-center lg:text-left">
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                    ExitClarity Blog
                  </h1>
                  <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-6">
                    Expert strategies, market insights, and actionable guidance for successful exits and strategic M&A decisions
                  </p>
                  
                  {/* Key highlights */}
                  <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Target className="w-4 h-4 text-primary" />
                      <span>Exit Strategy</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-primary" />
                      <span>Market Trends</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-primary" />
                      <span>M&A Insights</span>
                    </div>
                  </div>
                </div>
                
                {/* Visual Column - Abstract Knowledge Illustration */}
                <div className="relative">
                  <div className="bg-white rounded-2xl shadow-xl p-8 relative overflow-hidden">
                    {/* Abstract content illustration */}
                    <div className="space-y-6">
                      {/* Top section - Knowledge nodes */}
                      <div className="flex justify-between items-start">
                        <div className="flex flex-col items-center space-y-2">
                          <div className="w-12 h-12 bg-gradient-to-br from-primary to-blue-500 rounded-full flex items-center justify-center">
                            <BookOpen className="w-6 h-6 text-white" />
                          </div>
                          <div className="h-1 w-8 bg-primary/30 rounded-full"></div>
                        </div>
                        
                        <div className="flex flex-col items-center space-y-2">
                          <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center">
                            <BarChart3 className="w-5 h-5 text-white" />
                          </div>
                          <div className="h-1 w-6 bg-green-300 rounded-full"></div>
                        </div>
                        
                        <div className="flex flex-col items-center space-y-2">
                          <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full flex items-center justify-center">
                            <Lightbulb className="w-4 h-4 text-white" />
                          </div>
                          <div className="h-1 w-4 bg-orange-300 rounded-full"></div>
                        </div>
                      </div>
                      

                      
                      {/* Content blocks */}
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <div className="h-2 bg-gray-100 rounded-full flex-1">
                            <div className="h-full w-4/5 bg-gradient-to-r from-primary/60 to-primary/30 rounded-full"></div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                          <div className="h-2 bg-gray-100 rounded-full flex-1">
                            <div className="h-full w-3/5 bg-gradient-to-r from-green-400/60 to-green-400/30 rounded-full"></div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                          <div className="h-2 bg-gray-100 rounded-full flex-1">
                            <div className="h-full w-2/3 bg-gradient-to-r from-orange-400/60 to-orange-400/30 rounded-full"></div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Bottom insight indicator */}
                      <div className="flex items-center justify-center pt-4">
                        <div className="flex items-center space-x-2 text-sm text-gray-500">
                          <Target className="w-4 h-4 text-primary" />
                          <span>Strategic Insights</span>
                          <div className="w-1 h-1 bg-primary rounded-full animate-pulse"></div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Floating elements */}
                    <div className="absolute top-4 right-4 w-3 h-3 bg-primary/40 rounded-full"></div>
                    <div className="absolute bottom-6 left-4 w-2 h-2 bg-green-400/40 rounded-full"></div>
                    <div className="absolute top-1/2 right-2 w-1 h-1 bg-orange-400/60 rounded-full"></div>
                  </div>
                  
                  {/* Background decoration */}
                  <div className="absolute -inset-2 bg-gradient-to-br from-primary/5 to-blue-100/10 rounded-2xl -z-10 transform rotate-1"></div>
                  <div className="absolute -inset-1 bg-gradient-to-tl from-green-100/10 to-transparent rounded-2xl -z-10 transform -rotate-1"></div>
                </div>
              </div>
            </div>
          </section>

          {/* Featured Article */}
          <section className="py-12 sm:py-16 lg:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <div className="max-w-4xl mx-auto">
                <Link href={`/blog/${featuredPost.slug}`}>
                  <div className="bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden relative cursor-pointer group">
                    {/* Featured Badge */}
                    <div className="absolute top-4 right-4 z-10">
                      <Badge className="bg-primary text-white">Featured</Badge>
                    </div>
                    
                    {/* Hero Image */}
                    <div className="h-64 sm:h-80 bg-gradient-to-br from-primary/20 via-blue-100 to-primary/10 flex items-center justify-center group-hover:from-primary/25 group-hover:to-primary/15 transition-colors duration-300">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                          <ArrowRight className="w-8 h-8 text-primary" />
                        </div>
                        <p className="text-primary/60 font-medium">Featured Article</p>
                      </div>
                    </div>
                    
                    <div className="p-6 sm:p-8">
                      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-primary transition-colors">
                        {featuredPost.title}
                      </h2>
                      
                      {/* Meta Info */}
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          <span>{featuredPost.author}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{featuredPost.publishedDate}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{featuredPost.readTime} read</span>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 text-lg leading-relaxed mb-6">
                        {featuredPost.excerpt}
                      </p>
                      
                      <div className="flex items-center text-primary font-medium group-hover:text-primary/80 transition-colors">
                        Read Full Article
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </section>

          {/* Additional Resources Grid */}
          <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <div className="text-center mb-12">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  Additional Resources
                </h3>
                <p className="text-gray-600">More insights coming soon to help you master the exit process</p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {/* Article 1 */}
                <div className="bg-white rounded-xl shadow-md transition-shadow duration-300 overflow-hidden">
                  <div className="h-48 bg-gradient-to-br from-red-100 to-red-50 flex items-center justify-center">
                    <div className="text-red-300 text-center">
                      <div className="w-12 h-12 bg-red-200 rounded-full flex items-center justify-center mb-2 mx-auto">
                        <ArrowRight className="w-6 h-6" />
                      </div>
                      <p className="text-sm font-medium">Article Thumbnail</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant="secondary" className="bg-red-100 text-red-700">Exit Planning</Badge>
                      <Badge variant="outline" className="text-gray-500">Coming Soon</Badge>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">
                      The 30-Minute Assessment That Changes Everything
                    </h4>
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                      <Calendar className="w-4 h-4" />
                      <span>Coming Soon</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      How modern technology is replacing weeks of manual evaluation with instant, actionable insights.
                    </p>
                    <div className="flex items-center text-gray-400 text-sm cursor-default">
                      <span>Coming Soon</span>
                      <ArrowRight className="ml-1 w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Article 2 */}
                <div className="bg-white rounded-xl shadow-md transition-shadow duration-300 overflow-hidden">
                  <div className="h-48 bg-gradient-to-br from-green-100 to-green-50 flex items-center justify-center">
                    <div className="text-green-300 text-center">
                      <div className="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center mb-2 mx-auto">
                        <ArrowRight className="w-6 h-6" />
                      </div>
                      <p className="text-sm font-medium">Article Thumbnail</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant="secondary" className="bg-green-100 text-green-700">Valuations</Badge>
                      <Badge variant="outline" className="text-gray-500">Coming Soon</Badge>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">
                      Why Timing Matters: The FIX vs WAIT Decision
                    </h4>
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                      <Calendar className="w-4 h-4" />
                      <span>Coming Soon</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      Not every fixable issue should be fixed before market. Learn which improvements justify delay.
                    </p>
                    <div className="flex items-center text-gray-400 text-sm cursor-default">
                      <span>Coming Soon</span>
                      <ArrowRight className="ml-1 w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Article 3 */}
                <div className="bg-white rounded-xl shadow-md transition-shadow duration-300 overflow-hidden">
                  <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center">
                    <div className="text-blue-300 text-center">
                      <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center mb-2 mx-auto">
                        <ArrowRight className="w-6 h-6" />
                      </div>
                      <p className="text-sm font-medium">Article Thumbnail</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant="secondary" className="bg-blue-100 text-blue-700">M&A Trends</Badge>
                      <Badge variant="outline" className="text-gray-500">Coming Soon</Badge>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">
                      2025 M&A Outlook: What Sellers Need to Know
                    </h4>
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                      <Calendar className="w-4 h-4" />
                      <span>Coming Soon</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      Market conditions, buyer preferences, and valuation trends shaping successful exits this year.
                    </p>
                    <div className="flex items-center text-gray-400 text-sm cursor-default">
                      <span>Coming Soon</span>
                      <ArrowRight className="ml-1 w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>


        </main>

        <Footer />
      </div>
    </>
  );
}
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, Clock, User, ArrowRight, TrendingUp, Target, Users, BookOpen, BarChart3, Lightbulb } from "lucide-react";
import { Link } from "wouter";
import { useMeta } from "@/hooks/use-meta";

// Import thumbnail images
import thumbnail1 from "@assets/AdobeStock_454297497_1754937961456.jpeg"; // Handshake image
import thumbnail2 from "@assets/AdobeStock_629687249_1754937961457.jpeg";
import thumbnail3 from "@assets/AdobeStock_724350667_1754937961457.jpeg";
import thumbnail4 from "@assets/AdobeStock_864896666_1754937961457.jpeg";
import compoundEffectImage from "@assets/AdobeStock_487776534_1756231203462.jpeg"; // New compound effect image

// Import centralized blog data
import { getFeaturedBlogPosts, getAllBlogPosts } from "../../../shared/blog-data";

// Get all published posts and sort by date (newest first)
const allPosts = getAllBlogPosts();
const publishedPosts = allPosts.filter(post => !post.comingSoon);
const sortedPublishedPosts = publishedPosts.sort((a, b) => {
  const dateA = new Date(a.publishedDate || '');
  const dateB = new Date(b.publishedDate || '');
  return dateB.getTime() - dateA.getTime();
});

// Function to get the correct thumbnail for each article
const getArticleThumbnail = (post: any, fallbackIndex: number) => {
  if (post.slug === "compound-effect-exit-planning") return compoundEffectImage;
  if (post.slug === "ultimate-exit-why-87-percent-fail") return thumbnail1;
  return [thumbnail2, thumbnail3, thumbnail4][fallbackIndex % 3];
};

// Featured post is the newest published article
const featuredPost = sortedPublishedPosts[0] ? {
  ...sortedPublishedPosts[0],
  thumbnail: getArticleThumbnail(sortedPublishedPosts[0], 0)
} : {
  title: "No Featured Articles Yet",
  slug: "",
  category: "",
  author: "",
  publishedDate: "",
  readTime: "",
  excerpt: "",
  thumbnail: thumbnail1
};

// Additional articles are the next 3 most recent (positions 2-4)
const additionalPublishedArticles = sortedPublishedPosts.slice(1, 4).map((post, index) => ({
  ...post,
  thumbnail: getArticleThumbnail(post, index + 1),
  comingSoon: false
}));

// Placeholder articles for empty slots
const upcomingPosts = [
  {
    title: "The Ultimate Exit Plan: Strategies to Assess, Enhance, and Maximize the Value of Your Company",
    category: "Exit Planning",
    excerpt: "A comprehensive guide to developing and executing a successful exit strategy that maximizes value.",
    thumbnail: thumbnail2,
    comingSoon: true
  },
  {
    title: "Why Timing Matters: The FIX vs WAIT Decision",
    category: "Valuations", 
    excerpt: "Not every fixable issue should be fixed before market. Learn which improvements justify delay.",
    thumbnail: thumbnail3,
    comingSoon: true
  },
  {
    title: "2025 M&A Outlook: What Sellers Need to Know",
    category: "M&A Trends",
    excerpt: "Market conditions, buyer preferences, and valuation trends shaping successful exits this year.",
    thumbnail: thumbnail4,
    comingSoon: true
  }
];

// Fill up to 3 slots total, using published articles first, then placeholders
const finalAdditionalArticles = [
  ...additionalPublishedArticles,
  ...upcomingPosts.slice(0, Math.max(0, 3 - additionalPublishedArticles.length))
];

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
                    <div className="h-64 sm:h-80 relative overflow-hidden">
                      <img 
                        src={featuredPost.thumbnail} 
                        alt={featuredPost.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
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
                  Additional Articles
                </h3>
                <p className="text-gray-600">Take a look at our other articles about exit planning, valuations, sale strategies, timing, and more.</p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
                {finalAdditionalArticles.map((post, index) => (
                  <div key={index} className="flex flex-col">
                    {post.comingSoon ? (
                      <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col cursor-default h-full">
                        <div className="h-48 relative overflow-hidden">
                          <img 
                            src={post.thumbnail} 
                            alt={post.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-black/20"></div>
                        </div>
                        <div className="p-6 flex flex-col flex-1">
                          <div className="flex items-center justify-between mb-3">
                            <Badge 
                              variant="secondary" 
                              className={
                                post.category === "Exit Planning" ? "bg-red-100 text-red-700" :
                                post.category === "Strategic Planning" ? "bg-purple-100 text-purple-700" :
                                post.category === "Valuations" ? "bg-green-100 text-green-700" :
                                "bg-blue-100 text-blue-700"
                              }
                            >
                              {post.category}
                            </Badge>
                            <Badge variant="outline" className="text-gray-500">Coming Soon</Badge>
                          </div>
                          <h4 className="text-xl font-bold text-gray-900 mb-3 leading-tight min-h-[84px] flex items-start">
                            {post.title}
                          </h4>
                          <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                            <Calendar className="w-4 h-4" />
                            <span>Coming Soon</span>
                          </div>
                          <div className="flex-1 mb-4">
                            <p className="text-gray-600 text-sm leading-relaxed">
                              {post.excerpt}
                            </p>
                          </div>
                          <div className="flex items-center text-gray-400 text-sm cursor-default">
                            <span>Coming Soon</span>
                            <ArrowRight className="ml-1 w-4 h-4" />
                          </div>
                        </div>
                      </div>
                    ) : (
                      <Link href={`/blog/${'slug' in post ? post.slug : ''}`} className="block h-full">
                        <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col cursor-pointer group h-full">
                          <div className="h-48 relative overflow-hidden">
                            <img 
                              src={post.thumbnail} 
                              alt={post.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
                          </div>
                          <div className="p-6 flex flex-col flex-1">
                            <div className="flex items-center justify-between mb-3">
                              <Badge 
                                variant="secondary" 
                                className={
                                  post.category === "Exit Planning" ? "bg-red-100 text-red-700" :
                                  post.category === "Strategic Planning" ? "bg-purple-100 text-purple-700" :
                                  post.category === "Valuations" ? "bg-green-100 text-green-700" :
                                  "bg-blue-100 text-blue-700"
                                }
                              >
                                {post.category}
                              </Badge>
                              {'readTime' in post && post.readTime && <Badge variant="outline" className="text-gray-500">{post.readTime} read</Badge>}
                            </div>
                            <h4 className="text-xl font-bold text-gray-900 mb-3 leading-tight min-h-[84px] flex items-start group-hover:text-primary transition-colors">
                              {post.title}
                            </h4>
                            <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                              <Calendar className="w-4 h-4" />
                              <span>{'publishedDate' in post ? post.publishedDate : ""}</span>
                            </div>
                            <div className="flex-1 mb-4">
                              <p className="text-gray-600 text-sm leading-relaxed">
                                {post.excerpt}
                              </p>
                            </div>
                            <div className="flex items-center text-primary text-sm group-hover:text-primary/80 transition-colors">
                              <span>Read Article</span>
                              <ArrowRight className="ml-1 w-4 h-4" />
                            </div>
                          </div>
                        </div>
                      </Link>
                    )}
                  </div>
                ))}
              </div>
              
              {/* View All Articles Button */}
              <div className="text-center mt-12">
                <Link href="/blog/archive">
                  <Button variant="outline" size="lg" className="px-8 py-3 text-primary border-primary hover:bg-primary hover:text-white transition-colors">
                    View All Articles
                  </Button>
                </Link>
              </div>
            </div>
          </section>


        </main>

        <Footer />
      </div>
    </>
  );
}
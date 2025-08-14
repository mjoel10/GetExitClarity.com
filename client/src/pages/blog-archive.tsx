import Header from "@/components/header";
import Footer from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User, ArrowLeft, Search } from "lucide-react";
import { Link } from "wouter";
import { useMeta } from "@/hooks/use-meta";
import { useState } from "react";

// Import thumbnail images
import thumbnail1 from "@assets/AdobeStock_454297497_1754937961456.jpeg";
import thumbnail2 from "@assets/AdobeStock_629687249_1754937961457.jpeg";
import thumbnail3 from "@assets/AdobeStock_724350667_1754937961457.jpeg";
import thumbnail4 from "@assets/AdobeStock_864896666_1754937961457.jpeg";

// All blog articles data
const allBlogPosts = [
  {
    title: "The Ultimate Exit: Why 87% of Business Sales Fail (And How to Be in the 13% That Don't)",
    slug: "ultimate-exit-why-87-percent-fail",
    category: "Exit Planning",
    author: "ExitClarity Team",
    publishedDate: "August 11, 2025",
    readTime: "5 min",
    excerpt: "The difference between a successful exit and a failed one isn't luck. It's preparation. And most owners aren't prepared at all.",
    thumbnail: thumbnail1,
    published: true
  },
  {
    title: "The Ultimate Exit Plan: Strategies to Assess, Enhance, and Maximize the Value of Your Company",
    slug: "ultimate-exit-plan-strategies",
    category: "Exit Planning",
    author: "ExitClarity Team",
    publishedDate: "Coming Soon",
    readTime: "6 min",
    excerpt: "A comprehensive guide to developing and executing a successful exit strategy that maximizes value.",
    thumbnail: thumbnail2,
    published: false
  },
  {
    title: "Why Timing Matters: The FIX vs WAIT Decision",
    slug: "timing-fix-vs-wait-decision",
    category: "Valuations", 
    author: "ExitClarity Team",
    publishedDate: "Coming Soon",
    readTime: "4 min",
    excerpt: "Not every fixable issue should be fixed before market. Learn which improvements justify delay.",
    thumbnail: thumbnail3,
    published: false
  },
  {
    title: "2025 M&A Outlook: What Sellers Need to Know",
    slug: "2025-ma-outlook-sellers",
    category: "M&A Trends",
    author: "ExitClarity Team",
    publishedDate: "Coming Soon",
    readTime: "7 min",
    excerpt: "Market conditions, buyer preferences, and valuation trends shaping successful exits this year.",
    thumbnail: thumbnail4,
    published: false
  }
];

const categories = ["All", "Exit Planning", "Valuations", "M&A Trends"];

export default function BlogArchive() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  useMeta({
    title: "All Articles - ExitClarity Blog",
    description: "Browse our complete library of articles about exit planning, valuations, M&A trends, and strategic guidance for business owners and advisors.",
    ogTitle: "All Articles - ExitClarity Blog",
    ogDescription: "Browse our complete library of articles about exit planning, valuations, M&A trends, and strategic guidance for business owners and advisors.",
    ogType: "website"
  });

  // Filter articles based on category and search term
  const filteredPosts = allBlogPosts.filter(post => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = searchTerm === "" || 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <div className="min-h-screen bg-white">
        <Header />
        
        <main className="pt-16 sm:pt-20">
          {/* Archive Header */}
          <section className="py-12 sm:py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <div className="mb-6">
                <Link href="/blog">
                  <Button 
                    variant="ghost" 
                    className="text-gray-600 hover:text-gray-900"
                  >
                    <ArrowLeft className="mr-2 w-4 h-4" />
                    Back to Blog
                  </Button>
                </Link>
              </div>

              <div className="text-center mb-12">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  All Articles
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  Comprehensive insights on exit planning, valuations, M&A strategies, and more to help you navigate successful business transitions.
                </p>
              </div>

              {/* Search and Filters */}
              <div className="max-w-4xl mx-auto">
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  {/* Search Bar */}
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                      type="text"
                      placeholder="Search articles..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                    />
                  </div>
                  
                  {/* Category Filter */}
                  <div className="flex gap-2 overflow-x-auto">
                    {categories.map((category) => (
                      <Button
                        key={category}
                        variant={selectedCategory === category ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedCategory(category)}
                        className="whitespace-nowrap"
                      >
                        {category}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Articles Grid */}
          <section className="py-12 sm:py-16 lg:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              {filteredPosts.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-lg">No articles found matching your criteria.</p>
                </div>
              ) : (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                  {filteredPosts.map((post, index) => (
                    <div key={index} className={`bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden ${post.published ? 'cursor-pointer' : 'cursor-default'}`}>
                      {post.published ? (
                        <Link href={`/blog/${post.slug}`}>
                          <div className="h-48 relative overflow-hidden">
                            <img 
                              src={post.thumbnail} 
                              alt={post.title}
                              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-black/20 hover:bg-black/30 transition-colors duration-300"></div>
                            {post.slug === "ultimate-exit-why-87-percent-fail" && (
                              <div className="absolute top-4 right-4">
                                <Badge className="bg-primary text-white">Featured</Badge>
                              </div>
                            )}
                          </div>
                        </Link>
                      ) : (
                        <div className="h-48 relative overflow-hidden">
                          <img 
                            src={post.thumbnail} 
                            alt={post.title}
                            className="w-full h-full object-cover opacity-75"
                          />
                          <div className="absolute inset-0 bg-black/40"></div>
                        </div>
                      )}
                      
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-3">
                          <Badge 
                            variant="secondary" 
                            className={
                              post.category === "Exit Planning" ? "bg-red-100 text-red-700" :
                              post.category === "Valuations" ? "bg-green-100 text-green-700" :
                              "bg-blue-100 text-blue-700"
                            }
                          >
                            {post.category}
                          </Badge>
                          {!post.published && (
                            <Badge variant="outline" className="text-gray-500">Coming Soon</Badge>
                          )}
                        </div>
                        
                        <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                          {post.title}
                        </h3>
                        
                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                          <div className="flex items-center gap-1">
                            <User className="w-4 h-4" />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{post.publishedDate}</span>
                          </div>
                          {post.published && (
                            <div className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              <span>{post.readTime} read</span>
                            </div>
                          )}
                        </div>
                        
                        <p className="text-gray-600 text-sm leading-relaxed mb-4">
                          {post.excerpt}
                        </p>
                        
                        {post.published ? (
                          <Link href={`/blog/${post.slug}`}>
                            <div className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors text-sm">
                              Read Article →
                            </div>
                          </Link>
                        ) : (
                          <div className="inline-flex items-center text-gray-400 text-sm cursor-default">
                            Coming Soon
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
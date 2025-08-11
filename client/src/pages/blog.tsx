import Header from "@/components/header";
import Footer from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, Clock, User, ArrowRight, Mail } from "lucide-react";
import { useState } from "react";
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
  const [email, setEmail] = useState("");

  useMeta({
    title: "ExitClarity Blog - Insights and Strategies for M&A Professionals",
    description: "Expert insights on exit planning, M&A trends, and business valuation strategies from the ExitClarity team.",
    ogTitle: "ExitClarity Blog - M&A Insights and Exit Planning Strategies",
    ogDescription: "Expert insights on exit planning, M&A trends, and business valuation strategies from the ExitClarity team."
  });

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Newsletter signup logic would go here
    console.log("Newsletter signup:", email);
    setEmail("");
    alert("Thank you! We'll notify you when new content is available.");
  };

  return (
    <>
      <div className="min-h-screen bg-white">
        <Header />
        
        <main className="pt-16 sm:pt-20">
          {/* Hero Section with gradient background */}
          <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-primary/5 via-blue-50 to-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/3 to-transparent"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
              <div className="text-center max-w-4xl mx-auto">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                  ExitClarity Blog
                </h1>
                <p className="text-lg sm:text-xl text-gray-600 leading-relaxed px-2">
                  Insights and strategies for M&A professionals
                </p>
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

          {/* Recent Articles Grid */}
          <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <div className="text-center mb-12">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  More Articles Coming Soon
                </h3>
                <p className="text-gray-600">We're preparing more valuable insights for M&A professionals</p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                <div className="bg-white rounded-xl shadow-md p-12 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                    <Mail className="w-8 h-8 text-primary/60" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">
                    More Insights Coming Soon
                  </h4>
                  <p className="text-gray-600 mb-6">
                    We're preparing comprehensive guides on exit planning, valuations, and M&A trends.
                  </p>
                  <p className="text-sm text-gray-500">
                    Subscribe below to be notified when new articles are published.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Newsletter Signup Section */}
          <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-primary to-blue-700">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <div className="max-w-2xl mx-auto text-center">
                <Mail className="w-12 h-12 text-white/80 mx-auto mb-6" />
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                  Get First Access to New Content
                </h3>
                <p className="text-lg text-blue-100 mb-8">
                  Be notified when we publish new insights for M&A professionals
                </p>
                
                <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/60"
                  />
                  <Button type="submit" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                    Notify Me
                  </Button>
                </form>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
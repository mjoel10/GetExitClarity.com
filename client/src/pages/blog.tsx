import Header from "@/components/header";
import Footer from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, Clock, User, ArrowRight, Mail } from "lucide-react";
import { useState } from "react";

export default function Blog() {
  const [email, setEmail] = useState("");

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

          {/* Featured Article Preview */}
          <section className="py-12 sm:py-16 lg:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <div className="max-w-4xl mx-auto">
                <div className="bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden relative">
                  {/* Coming Soon Badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <Badge className="bg-primary text-white">Coming Soon</Badge>
                  </div>
                  
                  {/* Hero Image Placeholder */}
                  <div className="h-64 sm:h-80 bg-gradient-to-br from-primary/20 via-blue-100 to-primary/10 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                        <ArrowRight className="w-8 h-8 text-primary" />
                      </div>
                      <p className="text-primary/60 font-medium">Featured Article Image</p>
                    </div>
                  </div>
                  
                  <div className="p-6 sm:p-8">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                      The Ultimate Exit Plan: Strategies to Assess, Enhance, and Maximize the Value of Your Company
                    </h2>
                    
                    {/* Meta Info */}
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        <span>By ExitClarity Team</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>Coming January 2025</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>12 min read</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 text-lg leading-relaxed mb-6">
                      Selling a business is one of the most significant decisions an owner will ever make, yet many entrepreneurs fail to prepare adequately for this transition. Learn the key strategies for proactive planning, understanding valuation metrics, and implementing approaches that enhance business value long before a sale is considered...
                    </p>
                    
                    <Button variant="outline" disabled className="text-gray-400 cursor-not-allowed">
                      Read More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Recent Articles Grid */}
          <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <div className="text-center mb-12">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  Recent Articles
                </h3>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {/* Article 1 */}
                <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden group">
                  <div className="h-48 bg-gradient-to-br from-red-100 to-red-50 flex items-center justify-center">
                    <div className="text-red-300 text-center">
                      <div className="w-12 h-12 bg-red-200 rounded-full flex items-center justify-center mb-2 mx-auto">
                        <ArrowRight className="w-6 h-6" />
                      </div>
                      <p className="text-sm font-medium">Article Thumbnail</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <Badge variant="secondary" className="mb-3 bg-red-100 text-red-700">Exit Planning</Badge>
                    <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                      5 Signs Your Client Isn't Exit-Ready
                    </h4>
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                      <Calendar className="w-4 h-4" />
                      <span>Coming Soon</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      Learn the key indicators that reveal when a business needs more preparation before going to market.
                    </p>
                    <div className="flex items-center text-gray-400 text-sm">
                      <span>Coming Soon</span>
                      <ArrowRight className="ml-1 w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Article 2 */}
                <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden group">
                  <div className="h-48 bg-gradient-to-br from-green-100 to-green-50 flex items-center justify-center">
                    <div className="text-green-300 text-center">
                      <div className="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center mb-2 mx-auto">
                        <ArrowRight className="w-6 h-6" />
                      </div>
                      <p className="text-sm font-medium">Article Thumbnail</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <Badge variant="secondary" className="mb-3 bg-green-100 text-green-700">Valuations</Badge>
                    <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                      Maximizing Valuations in 2025
                    </h4>
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                      <Calendar className="w-4 h-4" />
                      <span>Coming Soon</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      Market trends and strategic approaches to help your clients achieve premium valuations.
                    </p>
                    <div className="flex items-center text-gray-400 text-sm">
                      <span>Coming Soon</span>
                      <ArrowRight className="ml-1 w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Article 3 */}
                <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden group">
                  <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center">
                    <div className="text-blue-300 text-center">
                      <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center mb-2 mx-auto">
                        <ArrowRight className="w-6 h-6" />
                      </div>
                      <p className="text-sm font-medium">Article Thumbnail</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <Badge variant="secondary" className="mb-3 bg-blue-100 text-blue-700">M&A Trends</Badge>
                    <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                      The Hidden Costs of Poor Deal Preparation
                    </h4>
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                      <Calendar className="w-4 h-4" />
                      <span>Coming Soon</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      Why thorough preparation saves time, reduces risk, and improves deal outcomes.
                    </p>
                    <div className="flex items-center text-gray-400 text-sm">
                      <span>Coming Soon</span>
                      <ArrowRight className="ml-1 w-4 h-4" />
                    </div>
                  </div>
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
import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Calendar, Clock, ArrowRight, ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { useMeta } from "@/hooks/use-meta";

// Import thumbnail images
import thumbnail1 from "@assets/AdobeStock_454297497_1754937961456.jpeg";
import thumbnail2 from "@assets/AdobeStock_629687249_1754937961457.jpeg";
import thumbnail3 from "@assets/AdobeStock_724350667_1754937961457.jpeg";
import thumbnail4 from "@assets/AdobeStock_864896666_1754937961457.jpeg";
import compoundEffectImage from "@assets/AdobeStock_487776534_1756231203462.jpeg";

// Import centralized blog data
import { getAllBlogPosts } from "../../../shared/blog-data";

export default function BlogArchive() {
  useMeta({
    title: "All Articles - ExitClarity Insights",
    description: "Browse all ExitClarity articles about exit planning, business valuations, M&A strategies, and successful business exits for both owners and advisors.",
  });

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

  return (
    <>
      <div className="min-h-screen bg-white">
        <Header />
        
        <main className="pt-24">
          {/* Page Header */}
          <section className="py-12 sm:py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <div className="text-center">
                <div className="flex items-center justify-center mb-4">
                  <Link href="/blog" className="flex items-center text-primary hover:text-primary/80 transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Blog
                  </Link>
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  All Articles
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Comprehensive insights on exit planning, business valuations, and M&A strategies to help business owners and advisors navigate successful exits.
                </p>
              </div>
            </div>
          </section>

          {/* Articles Grid */}
          <section className="py-12 sm:py-16 lg:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {sortedPublishedPosts.map((post, index) => (
                  <Link key={post.slug} href={`/blog/${post.slug}`} className="block">
                    <article className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer group h-full flex flex-col">
                      <div className="h-48 relative overflow-hidden">
                        <img 
                          src={getArticleThumbnail(post, index)} 
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
                        {index === 0 && (
                          <div className="absolute top-4 right-4">
                            <Badge className="bg-primary text-white">Latest</Badge>
                          </div>
                        )}
                      </div>
                      
                      <div className="p-6 flex flex-col flex-1">
                        <div className="flex items-center justify-end mb-3">
                          {post.readTime && <Badge variant="outline" className="text-gray-500">{post.readTime} read</Badge>}
                        </div>
                        
                        <h2 className="text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-primary transition-colors flex-1">
                          {post.title}
                        </h2>
                        
                        <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                          <Calendar className="w-4 h-4" />
                          <span>{post.publishedDate}</span>
                        </div>
                        
                        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>
                        
                        <div className="flex items-center text-primary text-sm group-hover:text-primary/80 transition-colors">
                          <span>Read Article</span>
                          <ArrowRight className="ml-1 w-4 h-4" />
                        </div>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>

              {sortedPublishedPosts.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-lg">No articles published yet. Check back soon for insights on exit planning and business strategy.</p>
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
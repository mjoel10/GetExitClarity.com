import { useParams } from "wouter";
import { useEffect } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User, ArrowLeft, Share2 } from "lucide-react";
import { useMeta } from "@/hooks/use-meta";
import { useQuery, useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import type { BlogPost } from "@shared/schema";

// Import the handshake image for Open Graph
import handshakeImage from "@assets/AdobeStock_454297497_1754937961456.jpeg";

export default function BlogPost() {
  const { slug } = useParams();

  // Fetch blog post data
  const { data: postResponse, isLoading, error } = useQuery({
    queryKey: ['/api/blog-posts', slug],
    enabled: !!slug,
  });
  const post = (postResponse as any)?.data as BlogPost | undefined;

  // View tracking mutation
  const viewMutation = useMutation({
    mutationFn: (viewData: { userAgent?: string; referrer?: string }) =>
      apiRequest(`/api/blog-posts/${slug}/view`, "POST", viewData),
  });

  // Track view on component mount
  useEffect(() => {
    if (slug) {
      viewMutation.mutate({
        userAgent: navigator.userAgent,
        referrer: document.referrer || undefined,
      });
    }
  }, [slug]);

  // Set meta tags for SEO
  useMeta({
    title: post ? `${post.title} - ExitClarity Blog` : "ExitClarity Blog",
    description: post ? post.excerpt : "Expert insights on exit planning and M&A strategies.",
  });

  if (error) {
    return (
      <>
        <Header />
        <main className="pt-16 sm:pt-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Article Not Found</h1>
              <p className="text-gray-600 mb-8">The article you're looking for doesn't exist or has been moved.</p>
              <Button asChild>
                <a href="/blog">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Blog
                </a>
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  if (isLoading) {
    return (
      <>
        <Header />
        <main className="pt-16 sm:pt-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-200 rounded mb-4"></div>
              <div className="h-64 bg-gray-200 rounded mb-8"></div>
              <div className="space-y-4">
                <div className="h-4 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  if (!post) {
    return (
      <>
        <Header />
        <main className="pt-16 sm:pt-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Article Not Found</h1>
              <p className="text-gray-600 mb-8">The article you're looking for doesn't exist or has been moved.</p>
              <Button asChild>
                <a href="/blog">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Blog
                </a>
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      
      <main className="pt-16 sm:pt-20">
        {/* Hero Section with Breadcrumb */}
        <section className="py-8 sm:py-12 bg-gradient-to-br from-primary/5 to-white border-b border-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <Button variant="ghost" asChild className="mb-6">
              <a href="/blog" className="text-primary hover:text-primary/80">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </a>
            </Button>
            
            <div className="flex items-center gap-2 mb-4">
              <Badge 
                variant="secondary" 
                className={
                  post.category === "Exit Planning" ? "bg-red-100 text-red-700" :
                  post.category === "Valuations" ? "bg-green-100 text-green-700" :
                  post.category === "M&A Trends" ? "bg-purple-100 text-purple-700" :
                  "bg-blue-100 text-blue-700"
                }
              >
                {post.category}
              </Badge>
              {post.viewCount > 0 && (
                <Badge variant="outline" className="text-gray-500">
                  {post.viewCount} views
                </Badge>
              )}
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {post.title}
            </h1>
            
            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-6">
              <div className="flex items-center gap-2">
                <User className="w-5 h-5" />
                <span className="font-medium">{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>
                  {new Date(post.createdAt).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>{post.readTime} read</span>
              </div>
            </div>

            {/* Share Button */}
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: post.title,
                      text: post.excerpt,
                      url: window.location.href,
                    });
                  } else {
                    navigator.clipboard.writeText(window.location.href);
                    // You could add a toast notification here
                  }
                }}
              >
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-12 sm:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            {/* Hero Image */}
            {post.thumbnail && (
              <div className="mb-12">
                <img 
                  src={post.thumbnail}
                  alt={post.title}
                  className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-2xl shadow-lg"
                />
              </div>
            )}

            {/* Article body with rich typography */}
            <div className="prose prose-lg prose-blue max-w-none">
              <div 
                dangerouslySetInnerHTML={{ 
                  __html: post.content
                    .replace(/\n\n/g, '</p><p>')
                    .replace(/^/, '<p>')
                    .replace(/$/, '</p>')
                    .replace(/## (.*?)\n/g, '<h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mt-12 mb-6">$1</h2>')
                    .replace(/### (.*?)\n/g, '<h3 class="text-xl sm:text-2xl font-bold text-gray-900 mt-8 mb-4">$1</h3>')
                    .replace(/<strong>(.*?)<\/strong>/g, '<strong class="font-bold text-gray-900">$1</strong>')
                    .replace(/- (.*?)\n/g, '<li class="mb-2">$1</li>')
                    .replace(/(<li.*?<\/li>)/g, '<ul class="list-disc list-inside mb-6 space-y-2">$1</ul>')
                }}
              />
            </div>

            {/* Article footer with CTA */}
            <div className="mt-16 pt-8 border-t border-gray-200">
              <div className="bg-gradient-to-br from-primary/5 to-blue-50 rounded-2xl p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Ready to Transform Your Exit Strategy?
                </h3>
                <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
                  Get the GO/FIX/WAIT clarity that changes everything with our comprehensive assessment framework.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg">
                    <a href="/trial-request">Request Trial Access</a>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <a href="/sample-report">Download Sample Report</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
}
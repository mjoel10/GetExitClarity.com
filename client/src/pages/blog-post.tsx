import { useParams } from "wouter";
import { useEffect } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User, ArrowLeft, Share2 } from "lucide-react";
import { useMeta } from "@/hooks/use-meta";

// Import centralized blog data
import { getBlogPost } from "@shared/blog-data";

// Format content for display
const formatContent = (content: string) => {
  return content.split('\n').map((paragraph, index) => {
    if (paragraph.startsWith('## ')) {
      return <h2 key={index} className="text-2xl font-bold mt-8 mb-4">{paragraph.replace('## ', '')}</h2>;
    }
    if (paragraph.startsWith('### ')) {
      return <h3 key={index} className="text-xl font-bold mt-6 mb-3">{paragraph.replace('### ', '')}</h3>;
    }
    if (paragraph.startsWith('- ')) {
      return <li key={index} className="ml-6 mb-2">{paragraph.replace('- ', '')}</li>;
    }
    if (paragraph.includes('<strong>') && paragraph.includes('</strong>')) {
      return (
        <p key={index} className="mb-4">
          <span dangerouslySetInnerHTML={{ __html: paragraph }} />
        </p>
      );
    }
    if (paragraph.trim() === '') {
      return <div key={index} className="mb-4"></div>;
    }
    if (paragraph.trim() === '---') {
      return <hr key={index} className="my-8 border-gray-200" />;
    }
    return <p key={index} className="mb-4">{paragraph}</p>;
  });
};

export default function BlogPost() {
  const { slug } = useParams();
  const post = getBlogPost(slug || '');

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

  useMeta({
    title: post ? `${post.title} | ExitClarity` : "Article Not Found | ExitClarity",
    description: post ? post.excerpt : "Article not found",
    ogTitle: post ? post.title : "Article Not Found",
    ogDescription: post ? post.excerpt : "Article not found",
    ogType: "article",
    ogUrl: post ? `https://exitclarity.io/blog/${post.slug}` : undefined,
    articleAuthor: post ? post.author : undefined,
    articlePublishedTime: post ? new Date(post.publishedDate).toISOString() : undefined,
    articleSection: post ? post.category : undefined
  });

  if (!post) {
    return (
      <>
        <div className="min-h-screen bg-white">
          <Header />
          <main className="pt-16 sm:pt-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
              <div className="text-center">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">Article Not Found</h1>
                <p className="text-gray-600 mb-8">The article you're looking for doesn't exist.</p>
                <Button onClick={() => window.history.back()}>
                  <ArrowLeft className="mr-2 w-4 h-4" />
                  Go Back
                </Button>
              </div>
            </div>
          </main>
          <Footer />
        </div>
      </>
    );
  }

  const formatContent = (content: string) => {
    return content
      .split('\n\n')
      .map((paragraph, index) => {
        if (paragraph.startsWith('## ')) {
          return <h2 key={index} className="text-2xl font-bold text-gray-900 mt-8 mb-4">{paragraph.slice(3)}</h2>;
        }
        if (paragraph.startsWith('### ')) {
          return <h3 key={index} className="text-xl font-semibold text-gray-900 mt-6 mb-3">{paragraph.slice(4)}</h3>;
        }
        if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
          return <h4 key={index} className="text-lg font-semibold text-gray-900 mt-4 mb-2">{paragraph.slice(2, -2)}</h4>;
        }
        if (paragraph.startsWith('- ')) {
          const items = paragraph.split('\n- ').map(item => item.replace(/^- /, ''));
          return (
            <ul key={index} className="list-disc list-inside space-y-2 mb-6 text-gray-700 leading-relaxed">
              {items.map((item, itemIndex) => (
                <li key={itemIndex} dangerouslySetInnerHTML={{ __html: item }}></li>
              ))}
            </ul>
          );
        }
        if (paragraph.startsWith('1. ')) {
          const items = paragraph.split(/\n\d+\. /).filter(Boolean);
          return (
            <ol key={index} className="list-decimal list-inside space-y-2 mb-6 text-gray-700 leading-relaxed">
              {items.map((item, itemIndex) => (
                <li key={itemIndex} dangerouslySetInnerHTML={{ __html: item.replace(/^\d+\. /, '') }}></li>
              ))}
            </ol>
          );
        }
        if (paragraph === '---') {
          return <hr key={index} className="my-8 border-gray-200" />;
        }
        return <p key={index} className="mb-6 text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: paragraph }}></p>;
      });
  };

  return (
    <>
      <div className="min-h-screen bg-white">
        <Header />
        
        <main className="pt-16 sm:pt-20">
          {/* Article Header */}
          <section className="py-8 sm:py-12 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6">
              <div className="mb-6">
                <Button 
                  variant="ghost" 
                  onClick={() => window.history.back()}
                  className="text-gray-600 hover:text-gray-900"
                >
                  <ArrowLeft className="mr-2 w-4 h-4" />
                  Back to Blog
                </Button>
              </div>
              
              <div className="mb-6">
                <Badge className="mb-4 bg-primary text-white">{post.category}</Badge>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  {post.title}
                </h1>
                
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{post.publishedDate}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime} read</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <Button variant="outline" size="sm">
                    <Share2 className="mr-2 w-4 h-4" />
                    Share
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Article Content */}
          <article className="py-8 sm:py-12">
            <div className="max-w-3xl mx-auto px-4 sm:px-6">
              <div className="prose prose-lg max-w-none">
                {post.content ? formatContent(post.content) : <p>No content available.</p>}
              </div>
            </div>
            
            {/* CTA Section - Full Width */}
            <div className="max-w-5xl mx-auto px-4 sm:px-6 mt-12">
              <div className="p-8 sm:p-12 bg-gradient-to-r from-primary to-blue-700 rounded-2xl text-center text-white">
                <h3 className="text-2xl sm:text-3xl font-bold mb-4">Ready to Get Started?</h3>
                <p className="text-blue-100 mb-8 text-lg sm:text-xl max-w-2xl mx-auto">
                  ExitClarity is an exit readiness platform for M&A professionals and business owners preparing for exit.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  {/* M&A Firms CTA */}
                  <div className="text-center">
                    <a href="/trial-request">
                      <Button className="!bg-blue-500 !text-white hover:!bg-blue-600 font-semibold !px-8 !py-4 !text-lg w-64">
                        Test With One Prospect →
                      </Button>
                    </a>
                    <p className="text-white text-sm mt-1.5 font-medium">For M&A Firms</p>
                  </div>
                  
                  {/* Business Owners CTA */}
                  <div className="text-center">
                    <a href="/business-owners-waitlist">
                      <Button className="!bg-white !text-blue-700 hover:!bg-gray-50 font-semibold !px-8 !py-4 !text-lg w-64">
                        Check Your Readiness →
                      </Button>
                    </a>
                    <p className="text-white text-sm mt-1.5 font-medium">For Business Owners</p>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </main>

        <Footer />
      </div>
    </>
  );
}
import { useParams } from "wouter";
import { useEffect } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User, ArrowLeft, Share2 } from "lucide-react";
import { useMeta } from "@/hooks/use-meta";

// Blog post data - in a real app, this would come from a CMS or database
const blogPosts = {
  "ultimate-exit-why-87-percent-fail": {
    title: "The Ultimate Exit: Why 87% of Business Sales Fail (And How to Be in the 13% That Don't)",
    slug: "ultimate-exit-why-87-percent-fail",
    category: "Exit Planning",
    author: "ExitClarity Team",
    publishedDate: "August 11, 2025",
    readTime: "5 min",
    excerpt: "The difference between a successful exit and a failed one isn't luck. It's preparation. And most owners aren't prepared at all.",
    featured: true,
    content: `You've built something remarkable. Years of early mornings, late nights, and countless decisions have created a business that matters—to customers, employees, and the market. But here's what no one tells you about selling that business: The difference between a successful exit and a failed one isn't luck. It's preparation.

And most owners aren't prepared at all.

## The Brutal Truth About Business Exits

Recent data shows that exit preparation typically begins 12-18 months before engaging advisors, yet most business owners start thinking about their exit just 6 months before they want to close. That gap—between when preparation should start and when it actually does—costs millions in lost value.

Consider these realities:

- 73% of business owners regret their exit within 12 months of closing
- Only 20% of businesses that go to market actually sell
- The average business takes 9-12 months to sell after hitting the market
- Deal fatigue kills more transactions than valuation disputes

The problem isn't that these businesses lack value. It's that their owners confused having a valuable business with having a sellable business. There's a massive difference.

## The GO/FIX/WAIT Framework: Your North Star for Exit Timing

Not every business that wants to sell should sell now. And not every fixable issue is worth fixing before going to market. The key is knowing the difference.

### GO: When You're Genuinely Ready

Your business is ready for market when:

- Financial performance is consistent with 3+ years of clean, auditable financials
- Owner dependency is minimal—the business runs without you for 30+ days
- Customer concentration is balanced—no single customer exceeds 20% of revenue
- Management team is proven and incentivized to stay post-sale
- Growth trajectory is clear with documented systems and processes

If you check these boxes, you're in the elite 13% ready to achieve a successful exit.

### FIX: Issues Worth Delaying For

Some problems significantly impact valuation or kill deals entirely:

<strong>Financial Infrastructure (3-6 months to fix)</strong>

Messy books are the fastest way to lose a buyer. If your monthly financials aren't GAAP-compliant or you can't produce a trailing twelve months P&L on demand, fix this first. Quality financial statements and improved internal controls are essential for successful exits.

<strong>Customer Concentration Risk (6-12 months to fix)</strong>

When one customer represents 30%+ of revenue, you're not selling a business—you're selling a hostage situation. Diversification takes time but can double your multiple.

<strong>Leadership Gaps (12-18 months to fix)</strong>

Owner dependence is a critical risk factor that must be addressed before sale. Building a management team that can operate without you isn't just about delegation—it's about creating institutional knowledge that survives your departure.

### WAIT: When Patience Pays

Sometimes the best move is no move:

- Market timing is unfavorable (industry downturn, regulatory uncertainty)
- Major contracts are renewing within 6 months
- Strategic initiatives are mid-flight with value not yet realized
- Personal readiness isn't there—and that's okay

## The Hidden Costs of Poor Preparation

Every unprepared exit attempt carries compounding costs:

<strong>Direct Costs:</strong>

- 40-80 hours of management time per failed process
- $50,000-150,000 in advisory fees and due diligence
- 6-12 months of distracted leadership

<strong>Opportunity Costs:</strong>

- Missing better buyers while chasing bad ones
- Burning out your best people with fire drills
- Competitors gaining ground while you're distracted

<strong>Reputation Costs:</strong>

- Once you're "shopped," future buyers question why you didn't sell
- Failed processes leak to employees, customers, and competitors
- Your advisors lose credibility taking unprepared companies to market

## The Data-Driven Path to Exit Success

Modern exit planning isn't about gut feelings—it's about systematic assessment across proven dimensions. An exit-readiness assessment involves a comprehensive review of current business functions, historical performance, and future projections.

The most successful exits follow this progression:

<strong>Phase 1: Assessment (Month 1)</strong>

- Objective evaluation across 11 critical factors
- Benchmark against actual market comparables
- Identify GO/FIX/WAIT status with clear rationale

<strong>Phase 2: Preparation (Months 2-12)</strong>

- Address identified gaps systematically
- Build institutional strength beyond the owner
- Create the value story buyers actually care about

<strong>Phase 3: Positioning (Months 13-15)</strong>

- Develop strategic buyer targeting
- Prepare management for the process
- Build the data room proactively, not reactively

<strong>Phase 4: Process (Months 16-24)</strong>

- Run competitive process with qualified buyers
- Maintain business momentum during diligence
- Close at maximum value with minimum friction

## Why Most Owners Get This Wrong (And How You Won't)

The traditional approach to exit planning is fundamentally broken:

- Advisors engage too late when problems are baked in
- Valuations happen in isolation without fixing underlying issues
- Owners operate on emotion rather than data
- Preparation is reactive rather than strategic

The modern approach—the one that actually works—is different:

- Start with data, not opinions
- Fix strategically, not comprehensively
- Build transferable value, not just profitable operations
- Track progress systematically, not sporadically

## Your Next Move

If you're thinking about an exit—whether in 1 year or 5—you have three choices:

1. Hope for the best and join the 87% of failed exits
2. Hire expensive advisors who bill whether you're ready or not
3. Get clarity now with systematic assessment and preparation

The difference between a life-changing exit and a life-draining one isn't the quality of your business. It's the quality of your preparation.

And preparation starts with knowing exactly where you stand.

Ready to transform your exit from uncertain to inevitable? The ExitClarity Assessment analyzes your business across 11 critical dimensions in under 30 minutes, delivering the GO/FIX/WAIT clarity that changes everything.

---

**About ExitClarity**

We've distilled 30+ years of M&A expertise into a platform that gives business owners and their advisors the insights needed for successful exits. Our assessment framework has evaluated over 300 businesses, identifying over $2B in transferable value.`
  }
};

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts[slug as keyof typeof blogPosts];

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

  useMeta({
    title: post ? `${post.title} | ExitClarity` : "Article Not Found | ExitClarity",
    description: post ? post.excerpt : "Article not found",
    ogTitle: post ? post.title : "Article Not Found",
    ogDescription: post ? post.excerpt : "Article not found",
    ogType: "article"
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
                {formatContent(post.content)}
              </div>
            </div>
            
            {/* CTA Section - Full Width */}
            <div className="max-w-5xl mx-auto px-4 sm:px-6 mt-12">
              <div className="p-8 sm:p-12 bg-gradient-to-r from-primary to-blue-700 rounded-2xl text-center text-white">
                <h3 className="text-2xl sm:text-3xl font-bold mb-4">Ready to Get Started?</h3>
                <p className="text-blue-100 mb-8 text-lg sm:text-xl max-w-2xl mx-auto">
                  ExitClarity is an exit readiness platform for M&A professionals and business owners preparing for exit.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  {/* M&A Firms CTA - Primary */}
                  <a href="/trial-request">
                    <Button size="lg" className="bg-white text-blue-700 font-semibold hover:bg-gray-50 border-2 border-white shadow-lg">
                      M&A Firms → Test with one prospect
                    </Button>
                  </a>
                  
                  {/* Business Owners CTA - Secondary */}
                  <a href="/business-owners-waitlist">
                    <Button size="lg" className="bg-transparent text-white font-semibold hover:bg-white/10 border-2 border-white">
                      Business Owners → Check your readiness
                    </Button>
                  </a>
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
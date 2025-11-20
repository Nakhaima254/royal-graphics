import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowLeft, Facebook, Twitter, Linkedin, Link as LinkIcon, User } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const BlogPostPage = () => {
  const { slug } = useParams();

  // Blog post data - in a real app, this would come from an API or CMS
  const blogPosts: Record<string, any> = {
    "10-essential-seo-tips-for-2025": {
      title: "10 Essential SEO Tips for 2025",
      category: "SEO",
      date: "March 15, 2025",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
      author: {
        name: "Sarah Johnson",
        role: "SEO Specialist",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
        bio: "SEO expert with 8+ years of experience helping businesses rank higher and drive organic traffic."
      },
      content: `
        <p>Search engine optimization continues to evolve, and staying ahead of the curve is crucial for maintaining visibility in search results. Here are the ten essential SEO strategies you need to implement in 2025.</p>

        <h2>1. Focus on User Experience (UX)</h2>
        <p>Google's algorithms increasingly prioritize websites that offer exceptional user experiences. This means fast loading times, mobile responsiveness, intuitive navigation, and engaging content that keeps visitors on your site.</p>

        <h2>2. Optimize for Core Web Vitals</h2>
        <p>Core Web Vitals have become critical ranking factors. Focus on improving your Largest Contentful Paint (LCP), First Input Delay (FID), and Cumulative Layout Shift (CLS) scores to enhance your site's performance.</p>

        <h2>3. Create High-Quality, In-Depth Content</h2>
        <p>Gone are the days of thin content. Search engines now favor comprehensive, authoritative articles that thoroughly address user queries. Aim for content that provides real value and answers questions completely.</p>

        <h2>4. Leverage AI-Powered Tools Wisely</h2>
        <p>While AI tools can assist with content creation and optimization, ensure your content maintains authenticity and provides unique insights. Use AI as a supplement, not a replacement for human expertise.</p>

        <h2>5. Build a Strong Internal Linking Structure</h2>
        <p>Internal links help search engines understand your site's architecture and distribute page authority. Create a logical linking structure that guides both users and search engines through your content.</p>

        <h2>6. Optimize for Voice Search</h2>
        <p>With the rise of voice assistants, optimizing for conversational queries is more important than ever. Focus on natural language and question-based keywords to capture voice search traffic.</p>

        <h2>7. Prioritize Mobile-First Indexing</h2>
        <p>Google primarily uses the mobile version of your site for indexing and ranking. Ensure your mobile site is fully optimized with fast loading speeds and a seamless user experience.</p>

        <h2>8. Build Quality Backlinks</h2>
        <p>Quality still trumps quantity when it comes to backlinks. Focus on earning links from authoritative, relevant websites through valuable content and genuine relationships.</p>

        <h2>9. Implement Schema Markup</h2>
        <p>Structured data helps search engines understand your content better and can lead to rich snippets in search results. Implement relevant schema types to enhance your visibility.</p>

        <h2>10. Monitor and Adapt</h2>
        <p>SEO is not a set-it-and-forget-it strategy. Regularly monitor your rankings, traffic, and user behavior. Be prepared to adapt your strategy based on performance data and algorithm updates.</p>

        <h2>Conclusion</h2>
        <p>Implementing these SEO strategies will help you stay competitive in 2025's search landscape. Remember, SEO is a long-term investment that requires patience, consistency, and continuous optimization.</p>
      `
    },
    "the-power-of-brand-identity": {
      title: "The Power of Brand Identity in Digital Marketing",
      category: "Design",
      date: "March 12, 2025",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=80",
      author: {
        name: "Michael Chen",
        role: "Creative Director",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
        bio: "Award-winning designer specializing in brand identity and visual storytelling for digital platforms."
      },
      content: `
        <p>In today's crowded digital marketplace, a strong brand identity is no longer optional—it's essential for business success. Your brand identity is the face of your business, and it plays a crucial role in how customers perceive and connect with your company.</p>

        <h2>What is Brand Identity?</h2>
        <p>Brand identity encompasses all the visual and verbal elements that represent your business, including your logo, color palette, typography, imagery, tone of voice, and messaging. It's the complete package that makes your brand recognizable and memorable.</p>

        <h2>Why Brand Identity Matters</h2>
        <p>A cohesive brand identity helps you stand out from competitors, build trust with your audience, and create emotional connections that drive loyalty. It's the foundation upon which all your marketing efforts are built.</p>

        <h2>Key Elements of Strong Brand Identity</h2>
        <h3>Visual Consistency</h3>
        <p>Maintaining consistent visuals across all touchpoints reinforces recognition. Your color scheme, logo usage, and imagery style should be uniform whether customers encounter you on social media, your website, or in print materials.</p>

        <h3>Authentic Voice</h3>
        <p>Your brand voice should reflect your company's personality and values. Whether professional and authoritative or friendly and approachable, consistency in communication builds familiarity and trust.</p>

        <h3>Emotional Connection</h3>
        <p>Great brands evoke emotions. Consider how you want customers to feel when they interact with your brand, and design experiences that deliver those emotions consistently.</p>

        <h2>Building Your Brand Identity</h2>
        <p>Start with deep research into your target audience, competitors, and market positioning. Define your brand values, mission, and unique selling propositions. Then, translate these strategic foundations into visual and verbal elements that resonate with your audience.</p>

        <h2>Implementing Across Digital Channels</h2>
        <p>Once established, your brand identity should be applied consistently across all digital channels—website, social media, email marketing, and digital advertising. Create brand guidelines to ensure consistency as your team grows.</p>

        <h2>The ROI of Strong Branding</h2>
        <p>Investing in brand identity pays dividends. Companies with strong brand identities command premium pricing, enjoy higher customer loyalty, and experience lower customer acquisition costs. Your brand becomes an asset that appreciates over time.</p>
      `
    },
    "social-media-trends-2025": {
      title: "Social Media Trends to Watch This Year",
      category: "Social Media",
      date: "March 10, 2025",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&q=80",
      author: {
        name: "Emily Rodriguez",
        role: "Social Media Strategist",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
        bio: "Social media expert helping brands build engaged communities and drive conversions through strategic content."
      },
      content: `
        <p>Social media is constantly evolving, and 2025 brings exciting new trends that will shape how brands connect with their audiences. Stay ahead of the curve by understanding and implementing these emerging strategies.</p>

        <h2>1. Short-Form Video Dominance</h2>
        <p>Short-form video content continues to reign supreme. Platforms like TikTok, Instagram Reels, and YouTube Shorts are where audiences spend most of their time. Brands must master the art of creating engaging, authentic videos that capture attention in seconds.</p>

        <h2>2. AI-Powered Personalization</h2>
        <p>Artificial intelligence is enabling hyper-personalized content delivery. Brands can now tailor messages, timing, and content formats to individual user preferences, dramatically improving engagement rates.</p>

        <h2>3. Social Commerce Integration</h2>
        <p>Social platforms are becoming full-fledged shopping destinations. With features like Instagram Shopping, TikTok Shop, and Facebook Marketplace, the line between social media and e-commerce is blurring.</p>

        <h2>4. Authentic Community Building</h2>
        <p>Audiences crave genuine connections. Brands that prioritize community over followers, encouraging two-way conversations and user-generated content, will build loyal, engaged audiences.</p>

        <h2>5. Micro and Nano Influencers</h2>
        <p>The influencer landscape is shifting toward smaller, more niche creators with highly engaged audiences. These partnerships often deliver better ROI and more authentic endorsements than mega-influencer collaborations.</p>

        <h2>6. Interactive and Immersive Content</h2>
        <p>Features like polls, quizzes, AR filters, and live streaming create interactive experiences that boost engagement and keep audiences coming back for more.</p>

        <h2>7. Sustainability and Social Responsibility</h2>
        <p>Consumers, especially younger generations, expect brands to take stands on social and environmental issues. Authentic commitment to causes resonates deeply with modern audiences.</p>

        <h2>Adapting Your Strategy</h2>
        <p>To leverage these trends effectively, focus on creating authentic content that provides value to your audience. Experiment with new formats, engage genuinely with your community, and measure what works for your specific audience.</p>
      `
    }
  };

  const post = blogPosts[slug || ""] || blogPosts["10-essential-seo-tips-for-2025"];

  // Get related posts (excluding current post)
  const relatedPosts = Object.entries(blogPosts)
    .filter(([key]) => key !== slug)
    .slice(0, 3)
    .map(([key, value]) => ({ ...value, slug: key }));

  const shareUrl = window.location.href;
  const shareTitle = post.title;

  const handleShare = (platform: string) => {
    const urls: Record<string, string> = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`
    };
    
    window.open(urls[platform], '_blank', 'width=600,height=400');
  };

  const copyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    // You could add a toast notification here
  };

  return (
    <div className="pt-16">
      <div className="bg-primary-dark py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/blogs">
            <Button variant="ghost" className="text-primary-foreground hover:text-primary-foreground/80 mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>

      <article className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="mb-6">
            <span className="px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
              {post.category}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>

          <div className="flex items-center justify-between flex-wrap gap-4 mb-8 pb-8 border-b border-border">
            <div className="flex items-center gap-4">
              <Avatar className="w-12 h-12">
                <AvatarImage src={post.author.avatar} alt={post.author.name} />
                <AvatarFallback><User /></AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold">{post.author.name}</p>
                <p className="text-sm text-muted-foreground">{post.author.role}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {post.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
            </div>
          </div>

          <div className="mb-8">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-[400px] object-cover rounded-xl"
            />
          </div>

          <div 
            className="prose prose-lg max-w-none mb-12"
            dangerouslySetInnerHTML={{ __html: post.content }}
            style={{
              color: 'hsl(var(--foreground))',
            }}
          />

          <div className="border-t border-b border-border py-8 mb-12">
            <h3 className="text-lg font-semibold mb-4">Share this article</h3>
            <div className="flex gap-3">
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleShare('facebook')}
                className="gap-2"
              >
                <Facebook className="w-4 h-4" />
                Facebook
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleShare('twitter')}
                className="gap-2"
              >
                <Twitter className="w-4 h-4" />
                Twitter
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleShare('linkedin')}
                className="gap-2"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={copyLink}
                className="gap-2"
              >
                <LinkIcon className="w-4 h-4" />
                Copy Link
              </Button>
            </div>
          </div>

          <div className="bg-secondary/20 rounded-xl p-8 mb-12">
            <div className="flex gap-6 items-start">
              <Avatar className="w-20 h-20">
                <AvatarImage src={post.author.avatar} alt={post.author.name} />
                <AvatarFallback><User /></AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-xl font-bold mb-2">About {post.author.name}</h3>
                <p className="text-muted-foreground mb-3">{post.author.bio}</p>
                <p className="text-sm font-semibold text-primary">{post.author.role}</p>
              </div>
            </div>
          </div>
        </div>
      </article>

      <section className="py-12 bg-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {relatedPosts.map((relatedPost, index) => (
              <Link key={index} to={`/blogs/${relatedPost.slug}`}>
                <article className="bg-card rounded-xl overflow-hidden border border-border hover:shadow-elegant transition-smooth group h-full">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                        {relatedPost.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {relatedPost.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {relatedPost.readTime}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold group-hover:text-primary transition-smooth">
                      {relatedPost.title}
                    </h3>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPostPage;
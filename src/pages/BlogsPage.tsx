import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, Clock, ArrowRight, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const BlogsPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const blogPosts = [
    // SEO Category
    {
      slug: "10-essential-seo-tips-for-2025",
      title: "10 Essential SEO Tips for 2025",
      excerpt: "Discover the latest SEO strategies that will help your website rank higher in search results and drive more organic traffic to your business.",
      category: "SEO",
      date: "March 15, 2025",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
    },
    {
      slug: "local-seo-dominating-your-market",
      title: "Local SEO: Dominating Your Geographic Market",
      excerpt: "Learn how to optimize your online presence for local search and attract more customers in your area.",
      category: "SEO",
      date: "March 1, 2025",
      readTime: "9 min read",
      image: "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?w=800&q=80"
    },
    {
      slug: "technical-seo-audit-guide",
      title: "Complete Technical SEO Audit Guide",
      excerpt: "A comprehensive checklist for conducting technical SEO audits that uncover hidden issues affecting your rankings.",
      category: "SEO",
      date: "February 25, 2025",
      readTime: "12 min read",
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80"
    },
    {
      slug: "keyword-research-strategies",
      title: "Advanced Keyword Research Strategies",
      excerpt: "Master the art of finding high-value keywords that drive targeted traffic and conversions for your business.",
      category: "SEO",
      date: "February 20, 2025",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&q=80"
    },
    {
      slug: "voice-search-optimization",
      title: "Voice Search Optimization Guide",
      excerpt: "Prepare your website for the future of search with voice-first optimization strategies and best practices.",
      category: "SEO",
      date: "February 10, 2025",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?w=800&q=80"
    },
    {
      slug: "seo-for-ecommerce",
      title: "SEO for E-commerce: Complete Playbook",
      excerpt: "Boost your online store visibility with proven e-commerce SEO tactics that drive sales and revenue.",
      category: "SEO",
      date: "February 5, 2025",
      readTime: "11 min read",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80"
    },
    {
      slug: "link-building-strategies",
      title: "Ethical Link Building Strategies That Work",
      excerpt: "Build high-quality backlinks that boost your domain authority without risking Google penalties.",
      category: "SEO",
      date: "January 28, 2025",
      readTime: "9 min read",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80"
    },
    // Design Category
    {
      slug: "the-power-of-brand-identity",
      title: "The Power of Brand Identity in Digital Marketing",
      excerpt: "Learn how a strong brand identity can transform your business and create lasting connections with your target audience.",
      category: "Design",
      date: "March 12, 2025",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80"
    },
    {
      slug: "how-to-create-engaging-visual-content",
      title: "How to Create Engaging Visual Content",
      excerpt: "Master the art of visual storytelling with these proven techniques for creating graphics that capture attention and drive engagement.",
      category: "Design",
      date: "March 8, 2025",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80"
    },
    {
      slug: "color-psychology-in-branding",
      title: "Color Psychology in Branding Design",
      excerpt: "Understand how colors influence customer perception and learn to choose the perfect palette for your brand.",
      category: "Design",
      date: "February 28, 2025",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=800&q=80"
    },
    {
      slug: "typography-trends-2025",
      title: "Typography Trends Shaping 2025",
      excerpt: "Explore the latest typography trends that are defining modern web design and brand aesthetics this year.",
      category: "Design",
      date: "February 18, 2025",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80"
    },
    {
      slug: "ui-ux-design-principles",
      title: "Essential UI/UX Design Principles",
      excerpt: "Create intuitive user experiences with fundamental design principles that keep users engaged and satisfied.",
      category: "Design",
      date: "February 8, 2025",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&q=80"
    },
    {
      slug: "logo-design-process",
      title: "The Complete Logo Design Process",
      excerpt: "From concept to final delivery, learn the professional workflow for creating memorable brand logos.",
      category: "Design",
      date: "February 1, 2025",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?w=800&q=80"
    },
    {
      slug: "motion-graphics-for-marketing",
      title: "Motion Graphics for Marketing Success",
      excerpt: "Elevate your marketing with animated content that captures attention and boosts engagement rates.",
      category: "Design",
      date: "January 25, 2025",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80"
    },
    // Social Media Category
    {
      slug: "social-media-trends-2025",
      title: "Social Media Trends to Watch This Year",
      excerpt: "Stay ahead of the curve with these emerging social media trends that will shape how brands connect with audiences in 2025.",
      category: "Social Media",
      date: "March 10, 2025",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80"
    },
    {
      slug: "instagram-algorithm-secrets",
      title: "Instagram Algorithm Secrets Revealed",
      excerpt: "Decode the Instagram algorithm and learn strategies to boost your visibility and engagement on the platform.",
      category: "Social Media",
      date: "March 3, 2025",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&q=80"
    },
    {
      slug: "tiktok-marketing-guide",
      title: "TikTok Marketing: A Complete Guide",
      excerpt: "Everything you need to know about leveraging TikTok for business growth and brand awareness.",
      category: "Social Media",
      date: "February 22, 2025",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1596558450268-9c27524ba856?w=800&q=80"
    },
    {
      slug: "linkedin-content-strategy",
      title: "LinkedIn Content Strategy for B2B",
      excerpt: "Build a powerful LinkedIn presence that generates leads and establishes thought leadership in your industry.",
      category: "Social Media",
      date: "February 15, 2025",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80"
    },
    {
      slug: "facebook-ads-mastery",
      title: "Facebook Ads Mastery for Small Business",
      excerpt: "Learn to create high-converting Facebook ad campaigns that maximize your advertising budget.",
      category: "Social Media",
      date: "February 8, 2025",
      readTime: "9 min read",
      image: "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=800&q=80"
    },
    {
      slug: "influencer-marketing-guide",
      title: "Influencer Marketing: Finding the Right Partners",
      excerpt: "Navigate the world of influencer marketing and build partnerships that deliver authentic brand exposure.",
      category: "Social Media",
      date: "February 2, 2025",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1598128558393-70ff21433be0?w=800&q=80"
    },
    {
      slug: "social-media-analytics",
      title: "Social Media Analytics That Matter",
      excerpt: "Focus on the metrics that truly impact your business and learn to interpret social media data effectively.",
      category: "Social Media",
      date: "January 26, 2025",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
    },
    // Marketing Category
    {
      slug: "email-marketing-best-practices-2025",
      title: "Email Marketing Best Practices for 2025",
      excerpt: "Maximize your email campaign performance with these essential strategies and tactics that deliver real results.",
      category: "Marketing",
      date: "March 5, 2025",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&q=80"
    },
    {
      slug: "content-marketing-roi",
      title: "Measuring Content Marketing ROI",
      excerpt: "Learn how to track and measure the return on investment of your content marketing efforts effectively.",
      category: "Marketing",
      date: "February 26, 2025",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
    },
    {
      slug: "marketing-automation-tools",
      title: "Top Marketing Automation Tools for 2025",
      excerpt: "Compare the best marketing automation platforms and find the perfect tool for your business needs.",
      category: "Marketing",
      date: "February 19, 2025",
      readTime: "9 min read",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
    },
    {
      slug: "customer-journey-mapping",
      title: "Customer Journey Mapping Essentials",
      excerpt: "Create effective customer journey maps that improve user experience and drive conversions at every touchpoint.",
      category: "Marketing",
      date: "February 12, 2025",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
    },
    {
      slug: "ppc-advertising-tips",
      title: "PPC Advertising Tips for Higher ROI",
      excerpt: "Optimize your pay-per-click campaigns with proven strategies that reduce costs and increase conversions.",
      category: "Marketing",
      date: "February 6, 2025",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1553484771-371a605b060b?w=800&q=80"
    },
    {
      slug: "brand-storytelling",
      title: "The Art of Brand Storytelling",
      excerpt: "Connect with your audience on an emotional level through compelling brand narratives that drive loyalty.",
      category: "Marketing",
      date: "January 30, 2025",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80"
    },
    {
      slug: "conversion-rate-optimization",
      title: "Conversion Rate Optimization Secrets",
      excerpt: "Turn more visitors into customers with data-driven CRO techniques that boost your bottom line.",
      category: "Marketing",
      date: "January 22, 2025",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
    }
  ];

  const categories = ["All", "SEO", "Design", "Social Media", "Marketing"];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    const matchesSearch = searchQuery === "" || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-16">
      <div className="bg-primary py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Blog & Insights
          </motion.h1>
          <motion.p 
            className="text-primary-foreground/90 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Expert tips, industry insights, and digital marketing strategies to help your business thrive
          </motion.p>
        </div>
      </div>

      <motion.section 
        className="py-12 border-b border-border"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          
          {/* Category Filters */}
          <div className="flex gap-3 flex-wrap justify-center">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
              >
                <Button
                  variant={category === activeCategory ? "accent" : "outline"}
                  size="sm"
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            key={activeCategory}
          >
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.slug}
                className="bg-card rounded-xl overflow-hidden border border-border hover:shadow-premium transition-smooth group"
                variants={fadeInUp}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -5 }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-smooth">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {post.excerpt}
                  </p>
                  <Link to={`/blogs/${post.slug}`}>
                    <Button variant="ghost" className="p-0 h-auto font-semibold group/btn">
                      Read More 
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-smooth" />
                    </Button>
                  </Link>
                </div>
              </motion.article>
            ))}
          </motion.div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No articles found in this category.</p>
            </div>
          )}
        </div>
      </section>

      <motion.section 
        className="py-20 bg-secondary/20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            className="text-3xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Stay Updated
          </motion.h2>
          <motion.p 
            className="text-muted-foreground mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Subscribe to our newsletter and get the latest digital marketing insights delivered to your inbox
          </motion.p>
          <motion.div 
            className="max-w-md mx-auto flex gap-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-lg bg-background border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button variant="accent" size="lg">
              Subscribe
            </Button>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default BlogsPage;
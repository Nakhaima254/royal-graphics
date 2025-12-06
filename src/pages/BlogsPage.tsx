import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight } from "lucide-react";
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
  const blogPosts = [
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
      slug: "the-power-of-brand-identity",
      title: "The Power of Brand Identity in Digital Marketing",
      excerpt: "Learn how a strong brand identity can transform your business and create lasting connections with your target audience.",
      category: "Design",
      date: "March 12, 2025",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80"
    },
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
      slug: "how-to-create-engaging-visual-content",
      title: "How to Create Engaging Visual Content",
      excerpt: "Master the art of visual storytelling with these proven techniques for creating graphics that capture attention and drive engagement.",
      category: "Design",
      date: "March 8, 2025",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80"
    },
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
      slug: "local-seo-dominating-your-market",
      title: "Local SEO: Dominating Your Geographic Market",
      excerpt: "Learn how to optimize your online presence for local search and attract more customers in your area.",
      category: "SEO",
      date: "March 1, 2025",
      readTime: "9 min read",
      image: "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?w=800&q=80"
    }
  ];

  const categories = ["All", "SEO", "Design", "Social Media", "Marketing"];

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
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-3 flex-wrap justify-center">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
              >
                <Button
                  variant={category === "All" ? "accent" : "outline"}
                  size="sm"
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
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {blogPosts.map((post, index) => (
              <motion.article
                key={index}
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

          <motion.div 
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button variant="outline" size="lg">
              Load More Articles
            </Button>
          </motion.div>
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
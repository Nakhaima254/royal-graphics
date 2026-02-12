import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Share2, CheckCircle, ArrowLeft, Users, TrendingUp, BarChart3, MessageCircle } from "lucide-react";
import AnimatedCounter from "@/components/AnimatedCounter";
import Icon from "@/components/ui/icon";
import ServiceTestimonials, { Testimonial } from "@/components/ServiceTestimonials";
import ServiceFAQ from "@/components/ServiceFAQ";
import SEO from "@/components/SEO";

const SocialMediaMarketingPage = () => {
  const features = [
    "Social Media Strategy Development",
    "Content Creation & Scheduling",
    "Community Management",
    "Paid Social Advertising",
    "Influencer Marketing",
    "Analytics & Performance Reporting"
  ];

  const benefits = [
    {
      icon: Users,
      title: "Increased Brand Awareness",
      description: "Reach millions of potential customers and build a recognizable brand presence across all major platforms."
    },
    {
      icon: MessageCircle,
      title: "Enhanced Engagement",
      description: "Create meaningful conversations with your audience through compelling content and community management."
    },
    {
      icon: TrendingUp,
      title: "Higher Conversion Rates",
      description: "Turn followers into customers with strategic campaigns designed to drive sales and leads."
    },
    {
      icon: BarChart3,
      title: "Data-Driven Insights",
      description: "Make informed decisions with comprehensive analytics and performance tracking across all channels."
    }
  ];

  const platforms = [
    { name: "Facebook", color: "bg-blue-600" },
    { name: "Instagram", color: "bg-pink-600" },
    { name: "Twitter/X", color: "bg-gray-900" },
    { name: "LinkedIn", color: "bg-blue-700" },
    { name: "TikTok", color: "bg-gray-900" },
    { name: "YouTube", color: "bg-red-600" }
  ];

  const process = [
    { step: "01", title: "Discovery", description: "We analyze your brand, competitors, and target audience to understand your unique position." },
    { step: "02", title: "Strategy", description: "Develop a comprehensive social media strategy aligned with your business goals." },
    { step: "03", title: "Content Creation", description: "Create engaging, platform-specific content that resonates with your audience." },
    { step: "04", title: "Execution", description: "Implement campaigns, manage communities, and run targeted advertising." },
    { step: "05", title: "Optimize", description: "Continuously monitor, analyze, and optimize for better performance." }
  ];

  const testimonials: Testimonial[] = [
    {
      name: "Janet Akinyi",
      role: "Owner",
      company: "Akinyi Boutique",
      content: "Our Instagram following grew from 2K to 50K in just 6 months! The engagement on our posts has been incredible and we're seeing real sales from social media now.",
      rating: 5
    },
    {
      name: "Michael Mutiso",
      role: "Marketing Manager",
      company: "FitLife Gym Nairobi",
      content: "They completely transformed our social media presence. The content is engaging, on-brand, and our membership inquiries have tripled since we started working together.",
      rating: 5
    },
    {
      name: "Agnes Muthoni",
      role: "Co-Founder",
      company: "Green Earth Organics",
      content: "Professional, creative, and results-driven. They understand our audience and create content that truly resonates. Best decision we made for our marketing.",
      rating: 5
    },
    {
      name: "Kevin Otieno",
      role: "Director",
      company: "Otieno Motors Ltd",
      content: "Our Facebook page went from 500 likes to over 15,000 in 4 months. The quality of leads we get from social media has improved dramatically.",
      rating: 5
    },
    {
      name: "Esther Nyokabi",
      role: "Owner",
      company: "Nyokabi Beauty Parlor",
      content: "The before/after content strategy they created for us went viral! We now have clients booking weeks in advance thanks to our social media presence.",
      rating: 5
    }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="pt-16">
      <SEO title="Social Media Marketing" description="Expert social media management - content creation, strategy, and growth for your brand." image="/images/og-social.jpg" url="/services/social-media-marketing" />
      {/* Hero Section */}
      <div className="bg-accent py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/services">
            <Button variant="ghost" className="text-accent-foreground hover:text-accent-foreground/80 mb-4">
              <Icon icon={ArrowLeft} size="sm" className="mr-2 text-accent-foreground" />
              Back to Services
            </Button>
          </Link>
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-20 h-20 bg-accent-foreground/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Icon icon={Share2} size="xl" className="w-10 h-10 text-accent-foreground" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-accent-foreground mb-4">
              Social Media Marketing
            </h1>
            <p className="text-accent-foreground/90 max-w-2xl mx-auto text-lg mb-8">
              Build your online presence and engage with your audience across all platforms
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              {platforms.map((platform) => (
                <span key={platform.name} className={`${platform.color} text-white px-4 py-2 rounded-full text-sm font-medium`}>
                  {platform.name}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">Grow Your Social Presence</h2>
              <p className="text-muted-foreground mb-6">
                We help you build meaningful connections with your audience through strategic social media marketing. From content creation to community management, we handle it all so you can focus on running your business.
              </p>
              <p className="text-muted-foreground mb-6">
                Our team of social media experts stays ahead of the latest trends and algorithm changes to ensure your brand stays visible and relevant in the ever-evolving digital landscape.
              </p>
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Icon icon={CheckCircle} variant="accent" size="md" className="flex-shrink-0 text-accent" />
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80"
                alt="Social Media Marketing Services"
                className="rounded-2xl shadow-accent"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Why Social Media Marketing?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              In today's digital world, social media is where your customers spend their time. Here's how we help you capitalize on that.
            </p>
          </motion.div>
          <motion.div 
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="p-6 h-full hover:shadow-card transition-all duration-300 hover:-translate-y-2 group">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                      <Icon className="w-6 h-6 text-accent group-hover:text-accent-foreground transition-colors" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Our Process</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A proven methodology that delivers consistent results for your social media campaigns.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-5 gap-4">
            {process.map((item, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-4xl font-bold text-accent mb-2">{item.step}</div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-accent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold text-accent-foreground mb-2">
                <AnimatedCounter value={500} suffix="+" />
              </div>
              <div className="text-accent-foreground/80">Campaigns Launched</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="text-4xl font-bold text-accent-foreground mb-2">
                <AnimatedCounter value={2} suffix="M+" />
              </div>
              <div className="text-accent-foreground/80">Followers Gained</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="text-4xl font-bold text-accent-foreground mb-2">
                <AnimatedCounter value={150} suffix="%" />
              </div>
              <div className="text-accent-foreground/80">Avg. Engagement Increase</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="text-4xl font-bold text-accent-foreground mb-2">
                <AnimatedCounter value={95} suffix="%" />
              </div>
              <div className="text-accent-foreground/80">Client Retention</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <ServiceTestimonials testimonials={testimonials} accentColor="accent" />

      {/* FAQ Section */}
      <ServiceFAQ 
        faqs={[
          { question: "Which social media platforms do you manage?", answer: "We manage all major platforms including Facebook, Instagram, Twitter/X, LinkedIn, TikTok, YouTube, and Pinterest. We'll recommend the best platforms based on your target audience." },
          { question: "How often will you post on my accounts?", answer: "Posting frequency depends on your package and platform. Typically, we post 3-7 times per week on Instagram, 1-2 times daily on Twitter, and 2-4 times per week on LinkedIn." },
          { question: "Do you create all the content?", answer: "Yes! Our team creates custom graphics, writes engaging captions, and develops content calendars. We can also incorporate your existing assets and user-generated content." },
          { question: "How do you measure success?", answer: "We track key metrics including follower growth, engagement rate, reach, website traffic from social, and conversions. You'll receive detailed monthly reports with insights and recommendations." },
          { question: "Can I approve content before it's posted?", answer: "Absolutely! We provide content calendars in advance for your review and approval. You have full visibility and control over what gets published." }
        ]}
      />

      {/* CTA Section */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Go Viral?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's create a social media strategy that drives real results and helps your brand stand out in the crowded digital landscape.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link to="/contact">
                <Button variant="accent" size="lg">Get Started</Button>
              </Link>
              <Link to="/pricing">
                <Button variant="outline" size="lg">View Pricing</Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SocialMediaMarketingPage;
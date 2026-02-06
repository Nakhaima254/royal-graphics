import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { PenTool, CheckCircle, ArrowLeft, FileText, Zap, Target, Users } from "lucide-react";
import AnimatedCounter from "@/components/AnimatedCounter";
import Icon from "@/components/ui/icon";
import ServiceTestimonials, { Testimonial } from "@/components/ServiceTestimonials";
import ServiceFAQ from "@/components/ServiceFAQ";

const CopywritingPage = () => {
  const features = [
    "Website Copy & Landing Pages",
    "Blog Posts & Articles",
    "Email Marketing Campaigns",
    "Ad Copy & Headlines",
    "Product Descriptions",
    "Brand Messaging & Taglines"
  ];

  const benefits = [
    {
      icon: Target,
      title: "Conversion Focused",
      description: "Every word is crafted to guide readers toward taking action and becoming customers."
    },
    {
      icon: Users,
      title: "Audience-Centric",
      description: "We speak your customers' language to build trust and connection with your brand."
    },
    {
      icon: Zap,
      title: "SEO Optimized",
      description: "Content that ranks well in search engines while remaining engaging and readable."
    },
    {
      icon: FileText,
      title: "Brand Voice",
      description: "Consistent messaging that reflects your unique brand personality across all channels."
    }
  ];

  const copyTypes = [
    { title: "Website Copy", description: "Compelling homepage, about, and service page content" },
    { title: "Blog Content", description: "Engaging articles that educate and attract traffic" },
    { title: "Email Sequences", description: "Nurture campaigns that convert leads to customers" },
    { title: "Social Captions", description: "Scroll-stopping posts for all platforms" },
    { title: "Ad Copy", description: "High-converting headlines and body copy" },
    { title: "Sales Pages", description: "Long-form copy that sells products and services" }
  ];

  const process = [
    { step: "01", title: "Discovery", description: "Understanding your brand, audience, and goals" },
    { step: "02", title: "Research", description: "Analyzing competitors and market positioning" },
    { step: "03", title: "Strategy", description: "Creating a content plan and messaging framework" },
    { step: "04", title: "Writing", description: "Crafting compelling copy that converts" },
    { step: "05", title: "Review", description: "Revisions and optimization for best results" }
  ];

  const testimonials: Testimonial[] = [
    {
      name: "Andrew Kipruto",
      role: "Founder",
      company: "Digital Nomad Kenya",
      content: "The website copy they wrote doubled our conversion rate! Every word was crafted with intention. Our brand finally has a voice that resonates with our audience.",
      rating: 5
    },
    {
      name: "Caroline Chebet",
      role: "Marketing Director",
      company: "Nexus Tech Nairobi",
      content: "Their blog content consistently ranks on page one of Google. Traffic has increased 300% and the leads are highly qualified. Outstanding copywriting team!",
      rating: 5
    },
    {
      name: "Daniel Otieno",
      role: "E-commerce Owner",
      company: "Urban Style Kenya",
      content: "Product descriptions that actually sell! Our average order value increased by 25% after they rewrote all our product pages. Worth every penny.",
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
      {/* Hero Section */}
      <div className="bg-primary-dark py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link to="/services">
            <Button variant="ghost" className="text-primary-foreground hover:text-primary-foreground/80 mb-4">
              <Icon icon={ArrowLeft} size="sm" className="mr-2 text-primary-foreground" />
              Back to Services
            </Button>
          </Link>
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-20 h-20 bg-primary-foreground/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 border border-primary-foreground/20">
              <Icon icon={PenTool} size="xl" className="w-10 h-10 text-primary-foreground" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              Copywriting
            </h1>
            <p className="text-primary-foreground/90 max-w-2xl mx-auto text-lg">
              Words that sell, stories that connect, and content that converts
            </p>
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
              <h2 className="text-3xl font-bold mb-6">Words That Drive Action</h2>
              <p className="text-muted-foreground mb-6">
                Great copy is the backbone of successful marketing. We craft compelling content that speaks to your audience, builds trust, and drives conversions.
              </p>
              <p className="text-muted-foreground mb-6">
                Our copywriters combine creativity with strategy to deliver messages that resonate with your target audience and inspire them to take action.
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
                    <Icon icon={CheckCircle} variant="primary" size="md" className="flex-shrink-0" />
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
                src="https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&q=80"
                alt="Copywriting Services"
                className="rounded-2xl shadow-card"
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
            <h2 className="text-3xl font-bold mb-4">Why Professional Copywriting Matters</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The right words can transform your business by connecting with customers on an emotional level.
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
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <Icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
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

      {/* Copy Types Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Types of Copy We Create</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From websites to emails, we create compelling copy for every channel.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {copyTypes.map((type, index) => (
              <motion.div
                key={index}
                className="p-6 border border-border rounded-xl hover:border-primary hover:shadow-card transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="font-semibold text-lg mb-2">{type.title}</h3>
                <p className="text-muted-foreground">{type.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold text-primary-foreground mb-2">
                <AnimatedCounter value={2000} suffix="+" />
              </div>
              <div className="text-primary-foreground/80">Articles Written</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="text-4xl font-bold text-primary-foreground mb-2">
                <AnimatedCounter value={500} suffix="+" />
              </div>
              <div className="text-primary-foreground/80">Landing Pages</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="text-4xl font-bold text-primary-foreground mb-2">
                <AnimatedCounter value={45} suffix="%" />
              </div>
              <div className="text-primary-foreground/80">Avg. Conversion Lift</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="text-4xl font-bold text-primary-foreground mb-2">
                <AnimatedCounter value={100} suffix="%" />
              </div>
              <div className="text-primary-foreground/80">Satisfaction Rate</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Our Copywriting Process</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A strategic approach that ensures your copy delivers results.
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
                <div className="text-4xl font-bold text-primary/30 mb-2">{item.step}</div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <ServiceTestimonials testimonials={testimonials} accentColor="primary" />

      {/* FAQ Section */}
      <ServiceFAQ 
        faqs={[
          { question: "What industries do you write for?", answer: "We write for diverse industries including tech, e-commerce, healthcare, finance, real estate, and more. We research your industry thoroughly to understand your audience and competition." },
          { question: "How do you capture my brand voice?", answer: "We start with a brand voice questionnaire and analyze your existing content. Through collaboration, we develop a style guide that ensures all copy sounds authentically you." },
          { question: "Do you offer SEO copywriting?", answer: "Yes! All our web copy is optimized for search engines while remaining engaging for readers. We research keywords and incorporate them naturally into compelling content." },
          { question: "What is your revision process?", answer: "We include 2-3 rounds of revisions in our packages. We welcome your feedback and work collaboratively to refine the copy until it perfectly meets your needs." },
          { question: "How long does a typical project take?", answer: "Timelines vary by project scope. Blog posts typically take 3-5 days, website copy 1-2 weeks, and comprehensive brand messaging 2-4 weeks. Rush services are available." }
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
            <h2 className="text-3xl font-bold mb-4">Ready for Copy That Converts?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's create compelling content that drives your business forward
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link to="/contact">
                <Button variant="accent" size="lg">Get a Quote</Button>
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

export default CopywritingPage;

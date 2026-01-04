import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Palette, CheckCircle, ArrowLeft, Layers, PenTool, Eye, Sparkles } from "lucide-react";
import AnimatedCounter from "@/components/AnimatedCounter";
import Icon from "@/components/ui/icon";
import ServiceTestimonials, { Testimonial } from "@/components/ServiceTestimonials";
import ServiceFAQ from "@/components/ServiceFAQ";

const GraphicDesignPage = () => {
  const features = [
    "Logo & Brand Identity Design",
    "Marketing Materials & Brochures",
    "Social Media Graphics",
    "Website UI/UX Design",
    "Packaging Design",
    "Infographics & Data Visualization"
  ];

  const benefits = [
    {
      icon: Eye,
      title: "Visual Impact",
      description: "Create stunning first impressions that capture attention and communicate your brand's value instantly."
    },
    {
      icon: Layers,
      title: "Brand Consistency",
      description: "Maintain a cohesive visual identity across all touchpoints for stronger brand recognition."
    },
    {
      icon: PenTool,
      title: "Custom Solutions",
      description: "Every design is crafted specifically for your brand, ensuring uniqueness and relevance."
    },
    {
      icon: Sparkles,
      title: "Modern Aesthetics",
      description: "Stay ahead of design trends with contemporary visuals that resonate with modern audiences."
    }
  ];

  const portfolio = [
    { title: "Brand Identity", image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&q=80" },
    { title: "Marketing Materials", image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=400&q=80" },
    { title: "Social Graphics", image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=400&q=80" },
    { title: "Packaging Design", image: "https://images.unsplash.com/photo-1636622433525-f8cc5a68c5dd?w=400&q=80" }
  ];

  const process = [
    { step: "01", title: "Brief", description: "Understanding your vision, goals, and requirements in detail." },
    { step: "02", title: "Research", description: "Analyzing competitors, trends, and your target audience." },
    { step: "03", title: "Concept", description: "Creating initial design concepts and mood boards." },
    { step: "04", title: "Design", description: "Crafting polished designs based on approved concepts." },
    { step: "05", title: "Delivery", description: "Providing final files in all required formats." }
  ];

  const testimonials: Testimonial[] = [
    {
      name: "Sarah Mitchell",
      role: "Marketing Director",
      company: "TechFlow Solutions",
      content: "The logo and brand identity they created perfectly captures our company's innovative spirit. We've received countless compliments from clients and partners.",
      rating: 5
    },
    {
      name: "David Chen",
      role: "Founder",
      company: "Artisan Coffee Co.",
      content: "From packaging design to marketing materials, every piece has been exceptional. Our products now stand out on shelves and our sales have increased significantly.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "CEO",
      company: "Bloom Wellness",
      content: "They transformed our entire visual identity. The attention to detail and understanding of our brand values was remarkable. Highly recommend!",
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
      <div className="bg-primary py-20 relative overflow-hidden">
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
              <Icon icon={Palette} size="xl" className="w-10 h-10 text-primary-foreground" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              Graphic Design
            </h1>
            <p className="text-primary-foreground/90 max-w-2xl mx-auto text-lg">
              Stunning visual designs that capture your brand essence and leave lasting impressions
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
              <h2 className="text-3xl font-bold mb-6">Transform Your Brand Visually</h2>
              <p className="text-muted-foreground mb-6">
                Our graphic design services bring your ideas to life with creative solutions that resonate with your target audience. From brand identity to marketing materials, we create designs that stand out and communicate your message effectively.
              </p>
              <p className="text-muted-foreground mb-6">
                With over 10 years of experience, our designers combine artistic creativity with strategic thinking to deliver visuals that not only look beautiful but also drive results for your business.
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
                src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80"
                alt="Graphic Design Services"
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
            <h2 className="text-3xl font-bold mb-4">Why Professional Design Matters</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Great design is more than aesthetics—it's a powerful business tool that builds trust and drives engagement.
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

      {/* Portfolio Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Our Work</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A glimpse of the creative solutions we've delivered for our clients.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolio.map((item, index) => (
              <motion.div
                key={index}
                className="group relative overflow-hidden rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white font-semibold">{item.title}</span>
                </div>
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
                <AnimatedCounter value={500} suffix="+" />
              </div>
              <div className="text-primary-foreground/80">Logos Created</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="text-4xl font-bold text-primary-foreground mb-2">
                <AnimatedCounter value={1000} suffix="+" />
              </div>
              <div className="text-primary-foreground/80">Designs Delivered</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="text-4xl font-bold text-primary-foreground mb-2">
                <AnimatedCounter value={98} suffix="%" />
              </div>
              <div className="text-primary-foreground/80">Client Satisfaction</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="text-4xl font-bold text-primary-foreground mb-2">
                <AnimatedCounter value={10} suffix="+" />
              </div>
              <div className="text-primary-foreground/80">Years Experience</div>
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
            <h2 className="text-3xl font-bold mb-4">Our Design Process</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A structured approach that ensures quality and meets your expectations every time.
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
          { question: "How long does a logo design project take?", answer: "Typically 1-2 weeks for a complete logo design, including initial concepts, revisions, and final delivery. Complex brand identity projects may take 3-4 weeks." },
          { question: "What file formats will I receive?", answer: "You'll receive your designs in all major formats including AI, EPS, PDF, SVG, PNG, and JPG. We ensure you have files suitable for both print and digital use." },
          { question: "How many revisions are included?", answer: "Our standard packages include 2-3 rounds of revisions. We work closely with you to ensure the final design meets your expectations." },
          { question: "Can you work with my existing brand guidelines?", answer: "Absolutely! We can work within your existing brand guidelines to create new materials that maintain consistency with your current visual identity." },
          { question: "Do you offer rush delivery?", answer: "Yes, we offer expedited services for urgent projects. Rush delivery is available for an additional fee, depending on the scope of work." }
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
            <h2 className="text-3xl font-bold mb-4">Ready to Elevate Your Brand?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's create stunning visuals that make your brand unforgettable and help you stand out from the competition.
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

export default GraphicDesignPage;

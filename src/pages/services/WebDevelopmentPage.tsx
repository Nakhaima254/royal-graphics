import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Code, CheckCircle, ArrowLeft, Smartphone, Globe, ShoppingCart, Shield, Zap, Sparkles } from "lucide-react";
import SEO from "@/components/SEO";

const WebDevelopmentPage = () => {
  const features = [
    "Custom Website Development",
    "E-commerce Solutions",
    "Responsive Mobile Design",
    "SEO Optimized Websites",
    "Fast Loading Performance",
    "Secure & Reliable Hosting Setup"
  ];

  const benefits = [
    {
      icon: Globe,
      title: "Modern Web Standards",
      description: "Built with latest technologies ensuring compatibility across all browsers and devices."
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Ready",
      description: "Complete online store solutions with payment integration and inventory management."
    },
    {
      icon: Shield,
      title: "Secure & Protected",
      description: "Enterprise-grade security measures to protect your data and customer information."
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized for speed with performance scores exceeding industry standards."
    }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 }
  };

  return (
    <div className="pt-[5.5rem]">
      <SEO title="Web Development" description="Professional web development services - custom websites, e-commerce, mobile apps. Fast, secure, SEO-optimized solutions." image="/web-dev.png" url="/services/web-development" />
      <div className="bg-primary py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/services">
            <Button variant="ghost" className="text-primary-foreground hover:text-primary-foreground/80 mb-4">
              <ArrowLeft className="w-4 h-4 mr-2 text-primary-foreground" />
              Back to Services
            </Button>
          </Link>
          <motion.div className="text-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="w-20 h-20 bg-primary-foreground/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Code className="w-10 h-10 text-primary-foreground" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Web Development</h1>
            <p className="text-primary-foreground/90 max-w-2xl mx-auto text-lg">Professional websites and web applications that drive business growth</p>
          </motion.div>
        </div>
      </div>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInUp} initial="initial" whileInView="animate" viewport={{ once: true }}>
              <h2 className="text-3xl font-bold mb-6 text-white">Professional Web Development</h2>
              <p className="text-white/80 mb-6">Custom-built websites using modern frameworks and best practices for optimal performance, security, and user experience.</p>
              <ul className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <motion.li key={index} className="flex items-center gap-3" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-white">{feature}</span>
                  </motion.li>
                ))}
              </ul>
              <a href="https://www.waksdigital.co.ke/pricing" target="_blank" rel="noopener noreferrer">
                <Button variant="accent" size="lg">View Pricing</Button>
              </a>
            </motion.div>
            <motion.div className="relative" initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
              <img 
                src="/hero-bg.png"
                alt="Web Development" 
                className="rounded-2xl shadow-card w-full h-auto object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-white">Why Professional Development Matters</h2>
            <p className="text-white/80 max-w-2xl mx-auto">Modern web solutions that perform, convert, and scale with your business.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={index} className="p-6 h-full hover:shadow-card transition-all duration-300">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl font-bold mb-4 text-primary-foreground">Ready to Build Your Website?</h2>
          <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto">Get a professionally developed website that drives results for your business.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="https://www.waksdigital.co.ke/pricing" target="_blank" rel="noopener noreferrer">
              <Button variant="accent" size="lg">View Pricing</Button>
            </a>
            <Link to="/contact"><Button variant="outline" size="lg">Get a Quote</Button></Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebDevelopmentPage;
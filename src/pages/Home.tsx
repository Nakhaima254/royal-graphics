import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Palette, TrendingUp, Share2, ArrowRight, Users, Award, Target, CheckCircle, Star, MessageSquare, Lightbulb, Rocket } from "lucide-react";
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

const Home = () => {
  const stats = [
    { number: "150+", label: "Happy Clients", icon: Users },
    { number: "10+", label: "Years Experience", icon: Award },
    { number: "98%", label: "Client Satisfaction", icon: Star },
    { number: "24/7", label: "Support Available", icon: Target },
  ];

  const process = [
    { step: "01", title: "Discovery", description: "We learn about your business, goals, and target audience", icon: MessageSquare },
    { step: "02", title: "Strategy", description: "Develop a tailored plan to achieve your objectives", icon: Lightbulb },
    { step: "03", title: "Execution", description: "Implement solutions with precision and creativity", icon: Target },
    { step: "04", title: "Growth", description: "Monitor, optimize, and scale for continued success", icon: Rocket },
  ];

  const testimonials = [
    { name: "Mary Nkirote", role: "CEO, Nkirote Ventures", content: "Royal Graphics helped us get more customers online. Our traffic increased by 300% in just 6 months!", rating: 5 },
    { name: "John Barasa", role: "Founder, Barasa Imports", content: "The team's creativity and professionalism exceeded our expectations. Highly recommended!", rating: 5 },
    { name: "Faith Otieno", role: "Marketing Director", content: "Best investment we made for our brand. The ROI has been incredible.", rating: 5 },
  ];

  return (
    <div>
      <Hero />
      
      {/* Stats Section */}
      <section className="py-16 bg-accent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {stats.map((stat, index) => (
              <motion.div key={index} className="text-center" variants={fadeInUp} transition={{ duration: 0.5 }}>
                <div className="w-12 h-12 bg-accent-foreground/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="w-6 h-6 text-accent-foreground" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-accent-foreground mb-1">{stat.number}</div>
                <div className="text-accent-foreground/80 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">What We Do</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              Our Core Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Digital solutions that help your business grow and get real results
            </p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-3 gap-8 mb-12"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div 
              className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              variants={fadeInUp}
              transition={{ duration: 0.5 }}
            >
              <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-6">
                <Palette className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Graphic Design</h3>
              <p className="text-muted-foreground mb-4">Professional designs that capture your brand essence and leave lasting impressions.</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary" /> Logo & Brand Identity</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary" /> Marketing Materials</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary" /> UI/UX Design</li>
              </ul>
            </motion.div>
            
            <motion.div 
              className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              variants={fadeInUp}
              transition={{ duration: 0.5 }}
            >
              <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3">SEO Services</h3>
              <p className="text-muted-foreground mb-4">Data-driven strategies that boost your visibility and drive organic traffic.</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary" /> Keyword Research</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary" /> On-Page Optimization</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary" /> Link Building</li>
              </ul>
            </motion.div>
            
            <motion.div 
              className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              variants={fadeInUp}
              transition={{ duration: 0.5 }}
            >
              <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-6">
                <Share2 className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Social Media</h3>
              <p className="text-muted-foreground mb-4">Build genuine community engagement and grow your social presence.</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary" /> Content Creation</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary" /> Community Management</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary" /> Paid Advertising</li>
              </ul>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link to="/services">
              <Button variant="accent" size="lg">
                View All Services <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">How We Work</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              Our Proven Process
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A streamlined approach to deliver results that exceed expectations
            </p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {process.map((item, index) => (
              <motion.div 
                key={index} 
                className="relative text-center"
                variants={fadeInUp}
                transition={{ duration: 0.5 }}
              >
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <span className="absolute top-0 right-1/2 translate-x-12 -translate-y-2 text-5xl font-bold text-primary/20">{item.step}</span>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-border" />
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Testimonials</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index} 
                className="bg-card border border-border rounded-xl p-8"
                variants={fadeInUp}
                transition={{ duration: 0.5 }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-foreground mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section 
        className="py-20 bg-primary"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Ready to Grow Your Business?
          </motion.h2>
          <motion.p 
            className="text-primary-foreground/90 max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Get started with a free consultation and discover how we can help your business grow
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link to="/contact">
              <Button variant="secondary" size="lg">
                Get Free Consultation
              </Button>
            </Link>
            <Link to="/pricing">
              <Button variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                View Pricing
              </Button>
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;
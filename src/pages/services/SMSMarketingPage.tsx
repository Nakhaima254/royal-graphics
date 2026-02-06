import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MessageSquare, CheckCircle, ArrowLeft, Smartphone, Clock, BarChart3, Shield } from "lucide-react";
import AnimatedCounter from "@/components/AnimatedCounter";
import Icon from "@/components/ui/icon";
import ServiceTestimonials, { Testimonial } from "@/components/ServiceTestimonials";
import ServiceFAQ from "@/components/ServiceFAQ";

const SMSMarketingPage = () => {
  const features = [
    "SMS Campaign Strategy",
    "Promotional Text Messages",
    "Automated SMS Sequences",
    "Two-Way Messaging",
    "Contact List Management",
    "Delivery & Response Analytics"
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Instant Delivery",
      description: "Messages are delivered within seconds, ensuring timely communication with your audience."
    },
    {
      icon: BarChart3,
      title: "98% Open Rate",
      description: "SMS has the highest open rate of any marketing channel, ensuring your message is seen."
    },
    {
      icon: Smartphone,
      title: "Direct Reach",
      description: "Connect with customers on their most personal device for maximum engagement."
    },
    {
      icon: Shield,
      title: "Compliant Messaging",
      description: "All campaigns follow TCPA and carrier guidelines to protect your business."
    }
  ];

  const smsTypes = [
    { title: "Promotional SMS", description: "Flash sales, discounts, and special offers" },
    { title: "Transactional SMS", description: "Order confirmations and shipping updates" },
    { title: "Appointment Reminders", description: "Reduce no-shows with timely reminders" },
    { title: "Cart Abandonment", description: "Recover lost sales with targeted texts" },
    { title: "Loyalty Programs", description: "Reward customers and drive repeat business" },
    { title: "Event Notifications", description: "Announce events and drive attendance" }
  ];

  const process = [
    { step: "01", title: "Strategy", description: "Define goals and target audience" },
    { step: "02", title: "List Build", description: "Grow your subscriber base organically" },
    { step: "03", title: "Content", description: "Craft compelling, concise messages" },
    { step: "04", title: "Schedule", description: "Optimize timing for maximum impact" },
    { step: "05", title: "Analyze", description: "Track results and refine campaigns" }
  ];

  const testimonials: Testimonial[] = [
    {
      name: "Jennifer Achieng",
      role: "Owner",
      company: "Sweet Treats Bakery Nairobi",
      content: "Our SMS flash sales sell out within hours now! The response rate is incredible. We've seen a 40% increase in repeat customers since implementing their SMS strategy.",
      rating: 5
    },
    {
      name: "Marcus Omondi",
      role: "Operations Manager",
      company: "QuickFix Auto Mombasa",
      content: "Appointment reminders via SMS reduced our no-shows by 75%. The ROI on this service is unbelievable. Wish we had started SMS marketing sooner!",
      rating: 5
    },
    {
      name: "Sophia Wanjala",
      role: "Marketing Manager",
      company: "Fitness First Gym Kenya",
      content: "They helped us build an engaged SMS list of 10,000+ members. Our promotional messages get responses within minutes. Game changer for our business!",
      rating: 5
    },
    {
      name: "Timothy Njuguna",
      role: "CEO",
      company: "Njuguna Pharmacy Chain",
      content: "SMS reminders for prescription refills have been amazing. Customer retention is up 60% and our customers appreciate the personalized service.",
      rating: 5
    },
    {
      name: "Grace Kemunto",
      role: "Owner",
      company: "Kemunto Fashion House",
      content: "Our VIP customer SMS list gets exclusive deals first. Sales from SMS campaigns alone account for 35% of our monthly revenue now!",
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
      <div className="bg-accent py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
            <div className="w-20 h-20 bg-accent-foreground/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 border border-accent-foreground/20">
              <Icon icon={MessageSquare} size="xl" className="w-10 h-10 text-accent-foreground" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-accent-foreground mb-4">
              SMS Marketing
            </h1>
            <p className="text-accent-foreground/90 max-w-2xl mx-auto text-lg">
              Instant reach with targeted SMS campaigns that get 98% open rates
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
              <h2 className="text-3xl font-bold mb-6">Reach Customers Instantly</h2>
              <p className="text-muted-foreground mb-6">
                SMS marketing delivers your message directly to your customers' phones with incredible open rates. We help you create compliant, effective SMS campaigns that drive immediate action and engagement.
              </p>
              <p className="text-muted-foreground mb-6">
                With years of experience in mobile marketing, we know how to craft messages that get read and drive results for your business.
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
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80"
                alt="SMS Marketing Services"
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
            <h2 className="text-3xl font-bold mb-4">Why SMS Marketing Works</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Text messages cut through the noise and reach customers where they're most engaged.
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

      {/* SMS Types Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">SMS Campaign Types</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Strategic SMS campaigns for every business need.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {smsTypes.map((type, index) => (
              <motion.div
                key={index}
                className="p-6 border border-border rounded-xl hover:border-accent hover:shadow-card transition-all duration-300"
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
      <section className="py-16 bg-accent relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold text-accent-foreground mb-2">
                <AnimatedCounter value={98} suffix="%" />
              </div>
              <div className="text-accent-foreground/80">Open Rate</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="text-4xl font-bold text-accent-foreground mb-2">
                <AnimatedCounter value={45} suffix="%" />
              </div>
              <div className="text-accent-foreground/80">Response Rate</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="text-4xl font-bold text-accent-foreground mb-2">
                <AnimatedCounter value={1} suffix="M+" />
              </div>
              <div className="text-accent-foreground/80">Messages Sent</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="text-4xl font-bold text-accent-foreground mb-2">
                <AnimatedCounter value={500} suffix="+" />
              </div>
              <div className="text-accent-foreground/80">Clients Served</div>
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
            <h2 className="text-3xl font-bold mb-4">Our SMS Marketing Process</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A proven approach to SMS marketing success.
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
                <div className="text-4xl font-bold text-accent/30 mb-2">{item.step}</div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <ServiceTestimonials testimonials={testimonials} accentColor="accent" />

      {/* FAQ Section */}
      <ServiceFAQ 
        faqs={[
          { question: "Is SMS marketing legal?", answer: "Yes, when done correctly! We ensure all campaigns are TCPA and CTIA compliant. Recipients must opt-in, and we include proper disclosures and easy opt-out options in every message." },
          { question: "How do you build an SMS subscriber list?", answer: "We use compliant methods including keyword opt-ins, web forms, in-store signage, and cross-promotion from email. All subscribers explicitly consent to receive texts." },
          { question: "What is the cost per text message?", answer: "Costs vary based on volume and carrier rates. We provide transparent pricing and help you maximize ROI by targeting the right audience with the right messages." },
          { question: "Can I send images or links in SMS?", answer: "Yes! MMS allows you to send images, GIFs, and longer messages. Links are automatically shortened and tracked for analytics. We recommend a mix of SMS and MMS." },
          { question: "How do you track SMS campaign performance?", answer: "We track delivery rates, open rates (for MMS), click-through rates, conversions, and ROI. You receive detailed reports with actionable insights for optimization." }
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
            <h2 className="text-3xl font-bold mb-4">Ready to Text Your Way to Success?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's create SMS campaigns that drive immediate results
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

export default SMSMarketingPage;

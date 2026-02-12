import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, CheckCircle, ArrowLeft, BarChart3, Zap, Target, TrendingUp } from "lucide-react";
import AnimatedCounter from "@/components/AnimatedCounter";
import Icon from "@/components/ui/icon";
import ServiceTestimonials, { Testimonial } from "@/components/ServiceTestimonials";
import ServiceFAQ from "@/components/ServiceFAQ";
import SEO from "@/components/SEO";

const EmailMarketingPage = () => {
  const features = [
    "Email Campaign Strategy",
    "Newsletter Design & Management",
    "Automated Email Sequences",
    "A/B Testing & Optimization",
    "List Building & Segmentation",
    "Performance Analytics & Reporting"
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "High ROI",
      description: "Email marketing delivers an average ROI of $42 for every $1 spent, making it one of the most effective channels."
    },
    {
      icon: Target,
      title: "Targeted Messaging",
      description: "Reach the right audience with personalized content based on behavior, preferences, and demographics."
    },
    {
      icon: Zap,
      title: "Automation",
      description: "Set up automated sequences that nurture leads 24/7, turning subscribers into customers on autopilot."
    },
    {
      icon: BarChart3,
      title: "Measurable Results",
      description: "Track opens, clicks, conversions, and revenue with detailed analytics and reporting."
    }
  ];

  const emailTypes = [
    { name: "Welcome Series", description: "Onboard new subscribers with a memorable first impression" },
    { name: "Promotional Campaigns", description: "Drive sales with compelling offers and announcements" },
    { name: "Newsletter", description: "Keep your audience engaged with valuable content" },
    { name: "Abandoned Cart", description: "Recover lost sales with targeted reminders" },
    { name: "Re-engagement", description: "Win back inactive subscribers with personalized outreach" },
    { name: "Transactional", description: "Enhance customer experience with order updates and receipts" }
  ];

  const testimonials: Testimonial[] = [
    {
      name: "Patricia Wairimu",
      role: "E-commerce Manager",
      company: "HomeStyle Decor Kenya",
      content: "Our email revenue increased by 180% in the first quarter! The automated sequences they set up continue to convert leads on autopilot. Amazing ROI!",
      rating: 5
    },
    {
      name: "Robert Kimani",
      role: "CEO",
      company: "SaaS Solutions Nairobi",
      content: "They revamped our entire email strategy. Open rates went from 15% to 42%, and our churn rate decreased significantly thanks to the re-engagement campaigns.",
      rating: 5
    },
    {
      name: "Michelle Nyambura",
      role: "Marketing Lead",
      company: "Wellness Hub Kenya",
      content: "Professional, data-driven approach to email marketing. They test everything and continuously optimize. Our newsletter is now our top converting channel.",
      rating: 5
    },
    {
      name: "George Maina",
      role: "Director",
      company: "Maina Electronics",
      content: "The abandoned cart emails alone recovered 28% of lost sales. Their email templates are beautiful and the automation saves us hours every week.",
      rating: 5
    },
    {
      name: "Lucy Njoki",
      role: "Owner",
      company: "Njoki Cosmetics",
      content: "Our welcome email series converts 35% of new subscribers into first-time buyers. The segmentation strategy they implemented is incredibly effective.",
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
      <SEO title="Email Marketing" description="Email marketing campaigns, automation sequences, and newsletter design to grow your business." image="/images/og-default.png" url="/services/email-marketing" />
      {/* Hero Section */}
      <div className="bg-primary py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
            <div className="w-20 h-20 bg-primary-foreground/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Icon icon={Mail} size="xl" className="w-10 h-10 text-primary-foreground" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              Email Marketing
            </h1>
            <p className="text-primary-foreground/90 max-w-2xl mx-auto text-lg">
              Strategic email campaigns that nurture leads and drive conversions
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
              <h2 className="text-3xl font-bold mb-6">Connect Directly With Your Audience</h2>
              <p className="text-muted-foreground mb-6">
                Email marketing remains one of the most effective digital marketing channels. We create personalized email campaigns that engage your subscribers and drive measurable results for your business.
              </p>
              <p className="text-muted-foreground mb-6">
                From welcome sequences to complex automation workflows, we design email strategies that nurture relationships and convert prospects into loyal customers.
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
                src="https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&q=80"
                alt="Email Marketing Services"
                className="rounded-2xl shadow-premium"
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
            <h2 className="text-3xl font-bold mb-4">Why Email Marketing Works</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Direct access to your audience's inbox means higher engagement and better conversion rates.
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

      {/* Email Types */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Email Campaigns We Create</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Strategic email sequences designed for every stage of the customer journey.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {emailTypes.map((type, index) => (
              <motion.div
                key={index}
                className="p-6 border border-border rounded-xl hover:border-primary hover:shadow-premium transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="font-semibold text-lg mb-2">{type.name}</h3>
                <p className="text-sm text-muted-foreground">{type.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold text-primary-foreground mb-2">
                <AnimatedCounter value={5} suffix="M+" />
              </div>
              <div className="text-primary-foreground/80">Emails Sent</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="text-4xl font-bold text-primary-foreground mb-2">
                <AnimatedCounter value={35} suffix="%" />
              </div>
              <div className="text-primary-foreground/80">Avg. Open Rate</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="text-4xl font-bold text-primary-foreground mb-2">
                <AnimatedCounter value={12} suffix="%" />
              </div>
              <div className="text-primary-foreground/80">Avg. Click Rate</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="text-4xl font-bold text-primary-foreground mb-2">
                <AnimatedCounter value={42} prefix="$" />
              </div>
              <div className="text-primary-foreground/80">ROI per $1</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <ServiceTestimonials testimonials={testimonials} accentColor="primary" />

      {/* FAQ Section */}
      <ServiceFAQ 
        faqs={[
          { question: "Which email platforms do you work with?", answer: "We work with all major email platforms including Mailchimp, Klaviyo, ConvertKit, ActiveCampaign, HubSpot, and more. We'll help you choose the best fit for your needs." },
          { question: "How do you grow my email list?", answer: "We implement proven list-building strategies including lead magnets, opt-in forms, landing pages, and pop-ups. All methods are compliant and focus on quality subscribers." },
          { question: "What is your approach to email deliverability?", answer: "We follow best practices for deliverability including proper authentication (SPF, DKIM, DMARC), list hygiene, and engagement-based sending to ensure your emails reach the inbox." },
          { question: "How often should I send emails?", answer: "Frequency depends on your audience and content. We typically recommend 1-4 emails per week, but we'll analyze your data to find the optimal cadence for your subscribers." },
          { question: "Do you write the email copy?", answer: "Yes! Our copywriters create compelling subject lines and email content that resonates with your audience and drives action. All copy is customized to match your brand voice." }
        ]}
      />

      {/* CTA */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Boost Your Email ROI?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's create email campaigns that your subscribers actually want to open and engage with.
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

export default EmailMarketingPage;
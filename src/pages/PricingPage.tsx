import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Palette, Share2, Video, PenTool, Mail, MessageSquare, GraduationCap, Stamp, CreditCard, FileText, BookOpen, Image, Megaphone, FileImage, Receipt, AtSign, UtensilsCrossed, Tag, BarChart3, Box, CalendarDays, type LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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

const graphicDesignServices: { name: string; price: string; description: string; icon: LucideIcon }[] = [
  { name: "Logo Design", price: "2,000", description: "Unique logo with 2-3 concepts, vector files (AI, EPS, PNG, JPG)", icon: Stamp },
  { name: "Business Card", price: "800", description: "Double-sided design, print-ready files, multiple formats", icon: CreditCard },
  { name: "Letterhead", price: "700", description: "Professional letterhead design with your branding, editable template", icon: FileText },
  { name: "Brochure", price: "600", description: "Bi-fold or tri-fold design, print-ready PDF, source files", icon: BookOpen },
  { name: "Banners", price: "800", description: "Web or print banners, custom sizes, high-resolution output", icon: Image },
  { name: "Posters", price: "400", description: "Eye-catching poster design, any size, print-ready files", icon: Megaphone },
  { name: "Flyers", price: "500", description: "Single or double-sided, A4/A5 size, print-ready PDF", icon: FileImage },
  { name: "Invoice/Receipt", price: "650", description: "Professional invoice template, editable Word/Excel format", icon: Receipt },
  { name: "Email Signature", price: "300", description: "HTML email signature, works with Gmail, Outlook & more", icon: AtSign },
  { name: "Catalog/Menu", price: "400", description: "Multi-page catalog or menu design, print-ready files", icon: UtensilsCrossed },
  { name: "Product Label", price: "400", description: "Custom product label design, die-cut ready, all formats", icon: Tag },
  { name: "Infographics", price: "600", description: "Data visualization, custom icons, shareable formats", icon: BarChart3 },
  { name: "3D Mockups", price: "500", description: "Realistic product mockups, multiple angles, high-res images", icon: Box },
  { name: "Calendar", price: "600", description: "Custom calendar design, wall or desk format, print-ready", icon: CalendarDays },
];

const servicePricing = {
  graphicDesign: {
    title: "Graphic Design",
    icon: Palette,
    description: "Professional visual designs for your brand",
    isRateCard: true,
  },
  socialMedia: {
    title: "Social Media Marketing",
    icon: Share2,
    description: "Grow your online presence",
    plans: [
      {
        name: "Starter",
        price: "KES 10,000",
        period: "/month",
        description: "Get started with social media",
        features: [
          "2 platforms managed",
          "8 posts per month",
          "Basic content creation",
          "Monthly analytics report",
          "Hashtag research",
          "Email support"
        ]
      },
      {
        name: "Growth",
        price: "KES 25,000",
        period: "/month",
        description: "Accelerate your growth",
        popular: true,
        features: [
          "4 platforms managed",
          "20 posts per month",
          "Custom graphics & content",
          "Stories & Reels (8/month)",
          "Community management",
          "Weekly analytics reports",
          "Competitor analysis",
          "Priority support"
        ]
      },
      {
        name: "Enterprise",
        price: "KES 50,000",
        period: "/month",
        description: "Full social media management",
        features: [
          "All platforms managed",
          "Daily posts",
          "Premium content creation",
          "Daily Stories & Reels",
          "Influencer outreach",
          "Paid ads management",
          "Real-time analytics",
          "Dedicated account manager",
          "Monthly strategy calls"
        ]
      }
    ]
  },
  videoEditing: {
    title: "Video Editing",
    icon: Video,
    description: "Professional video production",
    plans: [
      {
        name: "Basic",
        price: "KES 3,000",
        period: "/video",
        description: "Simple edits (up to 3 min)",
        features: [
          "Basic cuts & transitions",
          "Background music",
          "Text overlays",
          "Color correction",
          "1 revision",
          "3-5 days delivery"
        ]
      },
      {
        name: "Standard",
        price: "KES 8,000",
        period: "/video",
        description: "Professional edits (up to 10 min)",
        popular: true,
        features: [
          "Advanced editing",
          "Motion graphics",
          "Sound design",
          "Color grading",
          "Thumbnails included",
          "3 revisions",
          "2-3 days delivery",
          "Priority support"
        ]
      },
      {
        name: "Premium",
        price: "KES 20,000",
        period: "/video",
        description: "Cinematic production",
        features: [
          "Cinematic editing",
          "Custom animations",
          "Professional sound mix",
          "Advanced color grading",
          "Multiple format exports",
          "Unlimited revisions",
          "1-2 days delivery",
          "Project manager assigned"
        ]
      }
    ]
  },
  copywriting: {
    title: "Copywriting",
    icon: PenTool,
    description: "Words that convert",
    plans: [
      {
        name: "Basic",
        price: "KES 2,500",
        period: "/page",
        description: "Website & blog content",
        features: [
          "SEO-optimized content",
          "Up to 500 words",
          "1 revision",
          "Keyword research",
          "3-5 days delivery"
        ]
      },
      {
        name: "Standard",
        price: "KES 7,500",
        period: "/project",
        description: "Marketing copy package",
        popular: true,
        features: [
          "5 pages of content",
          "Ad copy (5 variations)",
          "Email sequences (3 emails)",
          "SEO optimization",
          "3 revisions",
          "2-3 days delivery",
          "Priority support"
        ]
      },
      {
        name: "Premium",
        price: "KES 25,000",
        period: "/month",
        description: "Ongoing content creation",
        features: [
          "10 blog posts/month",
          "Social media captions",
          "Email newsletters",
          "Ad copy unlimited",
          "Brand voice development",
          "Unlimited revisions",
          "Dedicated writer",
          "Strategy sessions"
        ]
      }
    ]
  },
  emailMarketing: {
    title: "Email Marketing",
    icon: Mail,
    description: "Engage your audience via email",
    plans: [
      {
        name: "Starter",
        price: "KES 8,000",
        period: "/month",
        description: "Basic email campaigns",
        features: [
          "Up to 2,500 subscribers",
          "4 campaigns/month",
          "Basic templates",
          "Open rate tracking",
          "Email support"
        ]
      },
      {
        name: "Professional",
        price: "KES 18,000",
        period: "/month",
        description: "Advanced email marketing",
        popular: true,
        features: [
          "Up to 10,000 subscribers",
          "12 campaigns/month",
          "Custom templates",
          "A/B testing",
          "Automation sequences",
          "Detailed analytics",
          "Priority support"
        ]
      },
      {
        name: "Enterprise",
        price: "KES 40,000",
        period: "/month",
        description: "Full email marketing suite",
        features: [
          "Unlimited subscribers",
          "Unlimited campaigns",
          "Premium templates",
          "Advanced automation",
          "Segmentation",
          "Landing pages",
          "Dedicated manager",
          "Monthly strategy calls"
        ]
      }
    ]
  },
  smsMarketing: {
    title: "SMS Marketing",
    icon: MessageSquare,
    description: "Direct mobile engagement",
    plans: [
      {
        name: "Basic",
        price: "KES 3,000",
        period: "/500 SMS",
        description: "Small campaigns",
        features: [
          "500 SMS credits",
          "Custom sender ID",
          "Delivery reports",
          "Basic scheduling",
          "Email support"
        ]
      },
      {
        name: "Business",
        price: "KES 12,000",
        period: "/2,500 SMS",
        description: "Regular campaigns",
        popular: true,
        features: [
          "2,500 SMS credits",
          "Custom sender ID",
          "Delivery reports",
          "Advanced scheduling",
          "Contact management",
          "Campaign analytics",
          "Priority support"
        ]
      },
      {
        name: "Enterprise",
        price: "KES 45,000",
        period: "/10,000 SMS",
        description: "Large scale messaging",
        features: [
          "10,000 SMS credits",
          "Multiple sender IDs",
          "API integration",
          "Bulk scheduling",
          "Advanced segmentation",
          "Real-time analytics",
          "Dedicated manager",
          "24/7 support"
        ]
      }
    ]
  },
  onlineClasses: {
    title: "Online Classes",
    icon: GraduationCap,
    description: "Learn digital marketing skills",
    plans: [
      {
        name: "Single Course",
        price: "KES 5,000",
        period: "/course",
        description: "Individual topic mastery",
        features: [
          "Full course access",
          "Video tutorials",
          "Downloadable resources",
          "Certificate of completion",
          "Community access",
          "3 months access"
        ]
      },
      {
        name: "Bundle",
        price: "KES 15,000",
        period: "/5 courses",
        description: "Multiple skill development",
        popular: true,
        features: [
          "Choose any 5 courses",
          "All course materials",
          "Live Q&A sessions",
          "1-on-1 mentorship (2 hrs)",
          "Certificates",
          "6 months access",
          "Priority support"
        ]
      },
      {
        name: "Masterclass",
        price: "KES 35,000",
        period: "/lifetime",
        description: "Complete digital marketing",
        features: [
          "All courses included",
          "New courses free",
          "Weekly live sessions",
          "Unlimited mentorship",
          "Job placement support",
          "Lifetime access",
          "Premium community",
          "Private coaching"
        ]
      }
    ]
  }
};

const PricingPage = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="bg-primary py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Transparent Pricing
          </motion.h1>
          <motion.p 
            className="text-primary-foreground/90 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Choose from our comprehensive range of services with clear, competitive pricing. No hidden fees.
          </motion.p>
        </div>
      </div>

      {/* Service Pricing Tabs */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="graphicDesign" className="w-full">
            <TabsList className="flex flex-wrap justify-center gap-2 mb-12 bg-transparent h-auto p-2">
              {Object.entries(servicePricing).map(([key, service]) => {
                const Icon = service.icon;
                return (
                  <TabsTrigger 
                    key={key} 
                    value={key}
                    className="flex items-center gap-2 px-4 py-3 rounded-xl data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all"
                  >
                    <Icon className="w-4 h-4" />
                    <span className="hidden sm:inline">{service.title}</span>
                  </TabsTrigger>
                );
              })}
            </TabsList>

            {Object.entries(servicePricing).map(([key, service]) => (
              <TabsContent key={key} value={key}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold mb-2">{service.title}</h2>
                    <p className="text-muted-foreground">{service.description}</p>
                  </div>

                  {'isRateCard' in service && service.isRateCard ? (
                    <motion.div
                      variants={staggerContainer}
                      initial="hidden"
                      animate="visible"
                    >
                      <div className="text-center mb-8">
                        <h3 className="text-2xl font-bold text-primary mb-2">Individual Service Prices</h3>
                        <p className="text-muted-foreground">Quality designs at affordable rates</p>
                      </div>
                      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {graphicDesignServices.map((item, index) => (
                          <motion.div
                            key={index}
                            variants={fadeInUp}
                          >
                            <Card className="p-5 h-full hover:shadow-premium transition-all duration-300 hover:-translate-y-1 group">
                              <div className="flex items-start gap-3 mb-3">
                                <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                  <item.icon className="w-5 h-5" />
                                </div>
                                <div className="flex-1 flex items-start justify-between">
                                  <h4 className="font-bold text-foreground group-hover:text-primary transition-colors">{item.name}</h4>
                                  <span className="text-lg font-bold text-primary whitespace-nowrap ml-2">KES {item.price}</span>
                                </div>
                              </div>
                              <p className="text-sm text-muted-foreground leading-relaxed pl-12">{item.description}</p>
                            </Card>
                          </motion.div>
                        ))}
                      </div>
                      <div className="mt-10 text-center">
                        <p className="text-muted-foreground mb-4">Need multiple designs? Contact us for package deals!</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                          <Link to="/contact">
                            <Button variant="default" size="lg">Request Quote</Button>
                          </Link>
                          <a href="https://wa.me/254746388308" target="_blank" rel="noopener noreferrer">
                            <Button variant="outline" size="lg">Chat on WhatsApp</Button>
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div 
                      className="grid md:grid-cols-3 gap-6 lg:gap-8"
                      variants={staggerContainer}
                      initial="hidden"
                      animate="visible"
                    >
                      {'plans' in service && service.plans.map((plan, index) => (
                        <motion.div
                          key={index}
                          variants={fadeInUp}
                          transition={{ duration: 0.5 }}
                        >
                          <Card 
                            className={`p-6 lg:p-8 h-full transition-all duration-300 hover:shadow-premium relative ${
                              plan.popular
                                ? "bg-primary text-primary-foreground border-2 border-primary scale-[1.02] shadow-premium"
                                : "hover:-translate-y-2"
                            }`}
                          >
                            {plan.popular && (
                              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-accent text-accent-foreground text-sm font-semibold">
                                Most Popular
                              </div>
                            )}
                            
                            <div className="mb-6">
                              <h3 className={`text-xl font-bold mb-1 ${plan.popular ? "text-primary-foreground" : "text-foreground"}`}>
                                {plan.name}
                              </h3>
                              <p className={`text-sm ${plan.popular ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                                {plan.description}
                              </p>
                            </div>

                            <div className="mb-6">
                              <span className={`text-3xl lg:text-4xl font-bold ${plan.popular ? "text-primary-foreground" : "text-foreground"}`}>
                                {plan.price}
                              </span>
                              <span className={`text-sm ${plan.popular ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                                {plan.period}
                              </span>
                            </div>

                            <ul className="space-y-3 mb-8">
                              {plan.features.map((feature, fIndex) => (
                                <li key={fIndex} className="flex items-start gap-3">
                                  <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                                    plan.popular ? "text-primary-foreground" : "text-primary"
                                  }`} />
                                  <span className={`text-sm ${plan.popular ? "text-primary-foreground/90" : "text-muted-foreground"}`}>
                                    {feature}
                                  </span>
                                </li>
                              ))}
                            </ul>

                            <Link to="/contact">
                              <Button 
                                className="w-full"
                                variant={plan.popular ? "secondary" : "default"}
                              >
                                Get Started
                              </Button>
                            </Link>
                          </Card>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Custom Quote Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Need a Custom Package?</h2>
            <p className="text-muted-foreground mb-8">
              We understand every business is unique. Contact us for a tailored solution that perfectly fits your needs and budget.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact">
                <Button variant="accent" size="lg">Request Custom Quote</Button>
              </Link>
              <a href="https://wa.me/254746388308" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg">Chat on WhatsApp</Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Common questions about our pricing and services
            </p>
          </motion.div>

          <motion.div 
            className="max-w-3xl mx-auto space-y-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                q: "Can I combine services from different categories?",
                a: "Absolutely! We offer bundle discounts when you combine multiple services. Contact us for a custom quote."
              },
              {
                q: "What payment methods do you accept?",
                a: "We accept M-Pesa, bank transfers, PayPal, and credit/debit cards for your convenience."
              },
              {
                q: "Do you offer discounts for long-term contracts?",
                a: "Yes! We offer 10% off for 3-month contracts, 15% off for 6-month contracts, and 20% off for annual contracts."
              },
              {
                q: "What's your refund policy?",
                a: "We offer a 100% satisfaction guarantee. If you're not happy with the initial delivery, we'll revise until you are or provide a full refund."
              },
              {
                q: "How quickly can you start on my project?",
                a: "Most projects can begin within 24-48 hours of confirmation. Rush services are available for urgent needs."
              },
              {
                q: "Do prices include revisions?",
                a: "Yes, all packages include revisions as specified. Additional revisions can be purchased if needed."
              }
            ].map((faq, index) => (
              <motion.div 
                key={index}
                className="bg-card border border-border rounded-xl p-6"
                variants={fadeInUp}
              >
                <h3 className="font-semibold mb-2">{faq.q}</h3>
                <p className="text-muted-foreground text-sm">{faq.a}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-primary-foreground mb-4">
              Ready to Grow Your Business?
            </h2>
            <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Let's discuss your project and find the perfect solution for your needs.
            </p>
            <Link to="/contact">
              <Button variant="secondary" size="lg">
                Start Your Project Today
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;

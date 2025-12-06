import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
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
    transition: { staggerChildren: 0.15 }
  }
};

const PricingPage = () => {
  const pricingPlans = [
    {
      name: "Starter",
      price: "$499",
      period: "/month",
      description: "Perfect for small businesses getting started",
      features: [
        "Basic logo design",
        "Social media graphics (10/month)",
        "Basic SEO audit",
        "2 social media platforms",
        "Monthly analytics report",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$1,299",
      period: "/month",
      description: "Ideal for growing businesses",
      features: [
        "Complete brand identity package",
        "Social media graphics (30/month)",
        "Advanced SEO optimization",
        "4 social media platforms",
        "Content creation & curation",
        "Weekly analytics reports",
        "Priority email & phone support",
        "Monthly strategy sessions"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For businesses needing full-scale solutions",
      features: [
        "Unlimited graphic design",
        "Unlimited social media graphics",
        "Enterprise SEO & SEM",
        "All social media platforms",
        "Full content creation team",
        "Real-time analytics dashboard",
        "Dedicated account manager",
        "Weekly strategy sessions",
        "Custom integrations",
        "24/7 priority support"
      ],
      popular: false
    }
  ];

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
            Pricing Plans
          </motion.h1>
          <motion.p 
            className="text-primary-foreground/90 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Choose the perfect plan for your business needs. All plans include our royal-level service.
          </motion.p>
        </div>
      </div>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                className={`rounded-2xl p-8 transition-smooth hover:shadow-premium ${
                  plan.popular
                    ? "bg-primary text-primary-foreground shadow-premium border-2 border-primary scale-105"
                    : "bg-card border border-border"
                }`}
                variants={fadeInUp}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -5 }}
              >
                {plan.popular && (
                  <div className="inline-block px-4 py-1 rounded-full bg-accent text-accent-foreground text-sm font-semibold mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? "text-primary-foreground" : "text-foreground"}`}>
                  {plan.name}
                </h3>
                <div className="mb-4">
                  <span className={`text-4xl font-bold ${plan.popular ? "text-primary-foreground" : "text-foreground"}`}>
                    {plan.price}
                  </span>
                  <span className={plan.popular ? "text-primary-foreground/80" : "text-muted-foreground"}>
                    {plan.period}
                  </span>
                </div>
                <p className={`mb-6 ${plan.popular ? "text-primary-foreground/90" : "text-muted-foreground"}`}>
                  {plan.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                        plan.popular ? "text-primary-foreground" : "text-primary"
                      }`} />
                      <span className={plan.popular ? "text-primary-foreground/90" : "text-foreground"}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact">
                  <Button
                    variant={plan.popular ? "secondary" : "accent"}
                    size="lg"
                    className="w-full"
                  >
                    {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
                  </Button>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <p className="text-muted-foreground mb-4">
              Need a custom solution? We're here to help.
            </p>
            <Link to="/contact">
              <Button variant="outline" size="lg">
                Contact Us for Custom Pricing
              </Button>
            </Link>
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
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.div 
            className="max-w-3xl mx-auto space-y-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { q: "Can I upgrade or downgrade my plan?", a: "Yes, you can change your plan at any time. Changes take effect on your next billing cycle." },
              { q: "What payment methods do you accept?", a: "We accept all major credit cards, PayPal, and bank transfers for annual plans." },
              { q: "Is there a contract or can I cancel anytime?", a: "Our monthly plans are flexible with no long-term contracts. Cancel anytime with 30 days notice." },
              { q: "Do you offer discounts for annual payments?", a: "Yes! Save 20% when you pay annually. Contact us to learn more about annual pricing." }
            ].map((faq, index) => (
              <motion.div 
                key={index}
                className="bg-card p-6 rounded-lg border border-border"
                variants={fadeInUp}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="font-semibold text-lg mb-2">{faq.q}</h3>
                <p className="text-muted-foreground">{faq.a}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default PricingPage;
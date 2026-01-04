import { Card } from "@/components/ui/card";
import { Award, Users, Target, TrendingUp } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const values = [
  {
    icon: Award,
    title: "Excellence",
    description: "We strive for perfection in every project, delivering nothing but the highest quality work.",
  },
  {
    icon: Users,
    title: "Client-Focused",
    description: "Your success is our success. We build lasting partnerships based on trust and results.",
  },
  {
    icon: Target,
    title: "Strategic Approach",
    description: "Data-driven strategies that align with your business goals and deliver measurable ROI.",
  },
  {
    icon: TrendingUp,
    title: "Innovation",
    description: "Staying ahead of digital trends to keep your brand competitive and relevant.",
  },
];

const stats = [
  { value: 10, suffix: "+", label: "Years of Excellence" },
  { value: 500, suffix: "+", label: "Happy Clients" },
  { value: 1000, suffix: "+", label: "Projects Delivered" },
  { value: 25, suffix: "+", label: "Team Members" },
];

// Animated counter component
const AnimatedCounter = ({ value, suffix }: { value: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}{suffix}
    </span>
  );
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 15,
    },
  },
};

const statVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 150,
      damping: 12,
    },
  },
};

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            About Us
          </motion.div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Your Trusted Digital Partner
          </h2>
          <p className="text-lg text-muted-foreground">
            With over a decade of experience, we've helped hundreds of businesses grow online 
            and reach more customers.
          </p>
        </motion.div>

        {/* Story Section */}
        <motion.div 
          className="max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="p-8 border-border shadow-card hover:shadow-premium transition-all duration-500">
            <h3 className="text-2xl font-bold text-card-foreground mb-4">Our Story</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Founded in 2014, Royal Graphics Solutions was born from a simple vision: to provide businesses with 
                premium digital marketing services that deliver real, measurable results. What started as a small 
                graphic design studio has evolved into a full-service digital marketing agency.
              </p>
              <p>
                Today, we're proud to serve clients across diverse industries, from innovative startups to established 
                enterprises. Our team of creative designers, SEO specialists, and social media experts work together 
                to craft comprehensive digital strategies that drive growth and build lasting brand value.
              </p>
              <p>
                We believe in the power of combining creativity with data-driven insights. Every project we undertake 
                is backed by research, strategy, and a commitment to excellence that has earned us a 95% client 
                satisfaction rate.
              </p>
            </div>
          </Card>
        </motion.div>

        {/* Values Grid */}
        <div>
          <motion.h3 
            className="text-2xl font-bold text-center text-foreground mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Core Values
          </motion.h3>
          <motion.div 
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div key={index} variants={cardVariants}>
                  <Card 
                    className="p-6 border-border hover:shadow-card transition-all duration-300 text-center group cursor-pointer hover:-translate-y-2"
                  >
                    <motion.div 
                      className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4 shadow-card group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300"
                    >
                      <Icon className="w-7 h-7 text-primary-foreground" />
                    </motion.div>
                    <h4 className="text-lg font-semibold text-card-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                      {value.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {value.description}
                    </p>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div 
          className="mt-16 bg-primary rounded-2xl p-8 sm:p-12 text-center shadow-premium overflow-hidden relative"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />
          
          <motion.h3 
            className="text-2xl sm:text-3xl font-bold text-primary-foreground mb-8 relative z-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            By The Numbers
          </motion.h3>
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 relative z-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                variants={statVariants}
                whileHover={{ scale: 1.05 }}
                className="group"
              >
                <motion.div 
                  className="text-3xl sm:text-5xl font-bold text-accent mb-2"
                  initial={{ scale: 0.5 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 200, 
                    damping: 10,
                    delay: index * 0.1 
                  }}
                >
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </motion.div>
                <div className="text-sm sm:text-base text-primary-foreground/90 group-hover:text-accent transition-colors duration-300">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

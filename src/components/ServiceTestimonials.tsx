import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  image?: string;
}

interface ServiceTestimonialsProps {
  testimonials: Testimonial[];
  title?: string;
  subtitle?: string;
  accentColor?: "primary" | "accent";
}

const ServiceTestimonials = ({ 
  testimonials, 
  title = "What Our Clients Say",
  subtitle = "Real feedback from businesses we've helped succeed.",
  accentColor = "primary"
}: ServiceTestimonialsProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.5 }
    }
  };

  const colorClasses = {
    primary: {
      icon: "text-primary",
      bg: "bg-primary/10",
      border: "border-primary/20",
      star: "text-primary"
    },
    accent: {
      icon: "text-accent",
      bg: "bg-accent/10",
      border: "border-accent/20",
      star: "text-accent"
    }
  };

  const colors = colorClasses[accentColor];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={cardVariants}>
              <Card className={`p-6 h-full relative overflow-hidden group hover:shadow-card transition-all duration-300 hover:-translate-y-1 border ${colors.border}`}>
                {/* Quote Icon */}
                <motion.div 
                  className="absolute top-4 right-4 opacity-10"
                  initial={{ rotate: -10, scale: 0 }}
                  whileInView={{ rotate: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <Icon icon={Quote} variant={accentColor} size="xl" className="w-16 h-16" />
                </motion.div>

                {/* Stars */}
                <div className="flex gap-1 mb-4 relative z-10">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, duration: 0.3 }}
                    >
                      <Icon 
                        icon={Star}
                        variant={i < testimonial.rating ? accentColor : "muted"}
                        size="sm"
                        className={i < testimonial.rating ? "fill-current" : ""}
                      />
                    </motion.div>
                  ))}
                </div>

                {/* Content */}
                <motion.p 
                  className="text-muted-foreground mb-6 relative z-10 leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  "{testimonial.content}"
                </motion.p>

                {/* Author */}
                <motion.div 
                  className="flex items-center gap-3 relative z-10"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <div className={`w-12 h-12 rounded-full ${colors.bg} flex items-center justify-center font-bold ${colors.icon}`}>
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </motion.div>

                {/* Hover Effect */}
                <div className={`absolute inset-0 ${colors.bg} opacity-0 group-hover:opacity-50 transition-opacity duration-300 pointer-events-none`} />
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceTestimonials;

import { motion } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useState, useRef, useEffect } from "react";

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
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const colorClasses = {
    primary: {
      icon: "text-primary",
      bg: "bg-primary/10",
      border: "border-primary/20",
      hoverBorder: "hover:border-primary/50",
      star: "text-primary"
    },
    accent: {
      icon: "text-accent",
      bg: "bg-accent/10",
      border: "border-accent/20",
      hoverBorder: "hover:border-accent/50",
      star: "text-accent"
    }
  };

  const colors = colorClasses[accentColor];

  // Auto-scroll effect
  useEffect(() => {
    if (isHovered || testimonials.length <= 3) return;
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isHovered, testimonials.length]);

  const scrollToCard = (index: number) => {
    setActiveIndex(index);
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.scrollWidth / testimonials.length;
      scrollRef.current.scrollTo({
        left: cardWidth * index,
        behavior: 'smooth'
      });
    }
  };

  const handlePrev = () => {
    const newIndex = activeIndex === 0 ? testimonials.length - 1 : activeIndex - 1;
    scrollToCard(newIndex);
  };

  const handleNext = () => {
    const newIndex = (activeIndex + 1) % testimonials.length;
    scrollToCard(newIndex);
  };

  return (
    <section className="py-20 overflow-hidden">
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

        {/* Navigation Arrows */}
        {testimonials.length > 3 && (
          <div className="flex justify-center gap-4 mb-6">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={handlePrev}
              className="rounded-full hover:bg-primary hover:text-primary-foreground transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              onClick={handleNext}
              className="rounded-full hover:bg-primary hover:text-primary-foreground transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        )}

        {/* Testimonials Grid/Carousel */}
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 -mx-4 px-4 lg:grid lg:grid-cols-3 lg:overflow-visible lg:mx-0 lg:px-0"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index} 
              className="min-w-[300px] sm:min-w-[350px] lg:min-w-0 snap-center"
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card 
                className={`p-6 h-full relative overflow-hidden group cursor-pointer border-2 ${colors.border} ${colors.hoverBorder} transition-all duration-500 hover:shadow-premium hover:-translate-y-2 hover:scale-[1.02]`}
              >
                {/* Quote Icon */}
                <motion.div 
                  className="absolute top-4 right-4 opacity-10 group-hover:opacity-30 transition-opacity duration-500"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                >
                  <Icon icon={Quote} variant={accentColor} size="xl" className="w-16 h-16" />
                </motion.div>

                {/* Stars */}
                <div className="flex gap-1 mb-4 relative z-10">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0, rotate: -180 }}
                      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, duration: 0.4, type: "spring" }}
                      whileHover={{ scale: 1.3, rotate: 15 }}
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
                  className="text-muted-foreground mb-6 relative z-10 leading-relaxed line-clamp-4 group-hover:line-clamp-none transition-all duration-300"
                >
                  "{testimonial.content}"
                </motion.p>

                {/* Author */}
                <motion.div 
                  className="flex items-center gap-3 relative z-10"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div 
                    className={`w-12 h-12 rounded-full ${colors.bg} flex items-center justify-center font-bold ${colors.icon} group-hover:scale-110 transition-transform duration-300`}
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    {testimonial.name.charAt(0)}
                  </motion.div>
                  <div>
                    <p className="font-semibold group-hover:text-primary transition-colors duration-300">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </motion.div>

                {/* Animated Border Glow on Hover */}
                <div className={`absolute inset-0 ${colors.bg} opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none`} />
                
                {/* Shine Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none overflow-hidden">
                  <div className="absolute -inset-full top-0 block w-1/2 h-full z-20 transform -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:animate-shine" />
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Dot Indicators */}
        {testimonials.length > 3 && (
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToCard(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex 
                    ? `w-8 ${accentColor === 'primary' ? 'bg-primary' : 'bg-accent'}` 
                    : `w-2 ${accentColor === 'primary' ? 'bg-primary/30' : 'bg-accent/30'} hover:bg-primary/50`
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ServiceTestimonials;

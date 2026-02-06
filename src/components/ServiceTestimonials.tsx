import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useState, useEffect, useCallback } from "react";

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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [direction, setDirection] = useState(1);
  
  const itemsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  const colorClasses = {
    primary: {
      icon: "text-primary",
      bg: "bg-primary/10",
      border: "border-primary/20",
      hoverBorder: "hover:border-primary/50",
      activeDot: "bg-primary",
      inactiveDot: "bg-primary/30"
    },
    accent: {
      icon: "text-accent",
      bg: "bg-accent/10",
      border: "border-accent/20",
      hoverBorder: "hover:border-accent/50",
      activeDot: "bg-accent",
      inactiveDot: "bg-accent/30"
    }
  };

  const colors = colorClasses[accentColor];

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  }, [totalPages]);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  }, [totalPages]);

  // Auto-scroll effect
  useEffect(() => {
    if (isHovered || totalPages <= 1) return;
    
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [isHovered, totalPages, nextSlide]);

  // Get current visible testimonials
  const visibleTestimonials = testimonials.slice(
    currentIndex * itemsPerPage,
    currentIndex * itemsPerPage + itemsPerPage
  );

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.98
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
      scale: 0.98
    })
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

        {/* Testimonials Carousel */}
        <div 
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Navigation Arrows - Only show if more than one page */}
          {totalPages > 1 && (
            <>
              <Button 
                variant="outline" 
                size="icon" 
                onClick={prevSlide}
                className="absolute -left-4 lg:-left-12 top-1/2 -translate-y-1/2 z-10 rounded-full bg-background/80 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground transition-all shadow-lg hidden md:flex"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                onClick={nextSlide}
                className="absolute -right-4 lg:-right-12 top-1/2 -translate-y-1/2 z-10 rounded-full bg-background/80 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground transition-all shadow-lg hidden md:flex"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </>
          )}

          {/* Cards Container */}
          <div className="overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 200, damping: 25 },
                  opacity: { duration: 0.4, ease: "easeInOut" },
                  scale: { duration: 0.4, ease: "easeInOut" }
                }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {visibleTestimonials.map((testimonial, index) => (
                  <motion.div 
                    key={`${currentIndex}-${index}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
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
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            transition={{ delay: i * 0.1 + 0.2, duration: 0.4, type: "spring" }}
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
                      <p className="text-muted-foreground mb-6 relative z-10 leading-relaxed line-clamp-4 group-hover:line-clamp-none transition-all duration-300">
                        "{testimonial.content}"
                      </p>

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

                      {/* Hover Glow Effect */}
                      <div className={`absolute inset-0 ${colors.bg} opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none`} />
                      
                      {/* Shine Effect */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none overflow-hidden">
                        <div className="absolute -inset-full top-0 block w-1/2 h-full z-20 transform -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:animate-shine" />
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dot Indicators & Progress Bar */}
          {totalPages > 1 && (
            <div className="mt-8 flex flex-col items-center gap-4">
              {/* Progress Bar */}
              <div className="w-full max-w-xs h-1 bg-muted rounded-full overflow-hidden">
                <motion.div
                  className={`h-full ${colors.activeDot}`}
                  initial={{ width: 0 }}
                  animate={{ width: `${((currentIndex + 1) / totalPages) * 100}%` }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                />
              </div>
              
              {/* Dots */}
              <div className="flex justify-center gap-2">
                {Array.from({ length: totalPages }).map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => {
                      setDirection(index > currentIndex ? 1 : -1);
                      setCurrentIndex(index);
                    }}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      index === currentIndex 
                        ? `w-8 ${colors.activeDot}` 
                        : `w-2.5 ${colors.inactiveDot} hover:${colors.activeDot}/50`
                    }`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  />
                ))}
              </div>
              
              {/* Page Counter */}
              <p className="text-sm text-muted-foreground">
                {currentIndex + 1} / {totalPages}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ServiceTestimonials;

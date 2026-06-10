import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Icon from "@/components/ui/icon";
import { useState, useEffect } from "react";

const rotatingWords = ["Digital Presence", "Brand Identity", "Online Growth", "Creative Vision"];

const Hero = () => {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative bg-accent overflow-hidden h-[78vh] min-h-[560px] max-h-[820px] flex items-center"
    >
      {/* Dot grid */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(hsl(var(--primary-foreground)) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Decorative bottom accent bar */}
      <div className="absolute bottom-0 left-0 w-1/3 h-1 bg-primary z-20" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full items-center">
          {/* LEFT: Copy */}
          <div className="flex flex-col justify-center space-y-7">
            <motion.span
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 self-start px-4 py-1.5 rounded-full bg-primary-foreground/5 border border-primary-foreground/15 text-primary text-xs font-semibold tracking-wider uppercase"
            >
              <motion.span
                className="w-1.5 h-1.5 rounded-full bg-primary"
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 1.6, repeat: Infinity }}
              />
              Premium Digital Solutions
            </motion.span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-[1.05] tracking-tight">
              <motion.span
                className="block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Elevating Your
              </motion.span>
              <span className="block mt-2 h-[1.15em] relative overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={wordIndex}
                    className="text-primary inline-block"
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: "-100%", opacity: 0 }}
                    transition={{ duration: 0.55, ease: [0.83, 0, 0.17, 1] }}
                  >
                    {rotatingWords[wordIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-base sm:text-lg text-primary-foreground/70 max-w-md leading-relaxed"
            >
              Transform your brand with expert graphic design, data-driven SEO strategies, and engaging social media management.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-4 pt-2"
            >
              <Link to="/contact">
                <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
                  <Button size="lg" className="bg-primary hover:bg-primary-dark text-primary-foreground shadow-premium group">
                    Get Free Consultation
                    <Icon icon={ArrowRight} variant="foreground" size="md" className="ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                </motion.div>
              </Link>
              <Link to="/services">
                <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
                  <Button
                    variant="outline"
                    size="lg"
                    className="bg-transparent border-2 border-primary-foreground/25 text-primary-foreground hover:border-primary hover:text-primary hover:bg-transparent"
                  >
                    View Our Work
                  </Button>
                </motion.div>
              </Link>
            </motion.div>
          </div>

          {/* RIGHT: Geometric motion graphic */}
          <div className="hidden md:flex relative h-full items-center justify-center">
            <div className="relative w-full h-[72%] max-h-[460px]">
              {/* Solid orange square */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
                animate={{ opacity: 0.95, scale: 1, rotate: 12 }}
                transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="absolute top-1/2 left-1/2 -translate-x-[60%] -translate-y-[40%] w-56 h-56 lg:w-64 lg:h-64 bg-primary"
              >
                <motion.div
                  className="absolute inset-0"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.div>

              {/* Outlined square */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
                animate={{ opacity: 1, scale: 1, rotate: -12 }}
                transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="absolute top-1/2 left-1/2 translate-x-[5%] -translate-y-[80%] w-40 h-40 lg:w-48 lg:h-48 border-4 border-primary"
              />

              {/* Dark blue slash */}
              <motion.div
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="absolute top-1/2 left-1/2 -translate-x-[20%] translate-y-[10%] w-72 h-24 lg:w-80 lg:h-32 bg-accent-light/40 -rotate-45"
              />

              {/* Floating accent dots */}
              <motion.div
                className="absolute top-[18%] left-[18%] w-3 h-3 rounded-full bg-primary-foreground/30"
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute bottom-[20%] right-[20%] w-6 h-6 rounded-full bg-primary"
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute top-[50%] right-[42%] w-2 h-2 rounded-full bg-primary-foreground"
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 2.4, repeat: Infinity }}
              />

              {/* Floating stat card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute -bottom-2 left-0 bg-background border border-border rounded-xl shadow-premium p-4 w-[200px]"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                    99%
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-bold text-muted-foreground tracking-wider">Client Growth</div>
                    <div className="text-sm font-bold text-foreground">Success Rate</div>
                  </div>
                </div>
                <div className="mt-3 h-1.5 w-full bg-muted rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "92%" }}
                    transition={{ duration: 1.2, delay: 1.3, ease: "easeOut" }}
                    className="h-full bg-primary"
                  />
                </div>
              </motion.div>

              {/* Floating tag card */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.1 }}
                className="absolute top-2 right-0 bg-accent-light/60 backdrop-blur-sm border border-primary-foreground/10 rounded-lg p-3"
              >
                <div className="w-10 h-1.5 bg-primary rounded mb-2" />
                <div className="w-20 h-1.5 bg-primary-foreground/30 rounded" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

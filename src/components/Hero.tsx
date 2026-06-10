import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Icon from "@/components/ui/icon";
import { useState, useEffect } from "react";

const rotatingWords = ["Digital Presence", "Brand Identity", "Online Growth", "Creative Vision"];
const headingText = "Elevating Your";

const Hero = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  // Typewriter effect
  useEffect(() => {
    let i = 0;
    setDisplayedText("");
    setIsTypingComplete(false);
    const type = () => {
      if (i <= headingText.length) {
        setDisplayedText(headingText.slice(0, i));
        i++;
        setTimeout(type, 100);
      } else {
        setIsTypingComplete(true);
        setShowCursor(false);
      }
    };
    type();
  }, []);

  // Blinking cursor - only active during typewriter animation
  useEffect(() => {
    if (isTypingComplete) {
      setShowCursor(false);
      return;
    }
    const blink = setInterval(() => setShowCursor((v) => !v), 530);
    return () => clearInterval(blink);
  }, [isTypingComplete]);

  // Rotating words
  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);


  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-accent/60" />
      </div>

      {/* Animated Particles */}
      <div className="absolute inset-0 z-[5] overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-64 h-64 rounded-full bg-primary/10 blur-3xl"
          animate={{ x: [0, 100, 0], y: [0, -100, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          style={{ top: "10%", left: "10%" }}
        />
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-accent-light/10 blur-3xl"
          animate={{ x: [0, -120, 0], y: [0, 100, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          style={{ top: "50%", right: "5%" }}
        />
        <motion.div
          className="absolute w-48 h-48 rounded-full bg-primary-light/15 blur-2xl"
          animate={{ x: [0, 80, 0], y: [0, -80, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          style={{ bottom: "20%", left: "60%" }}
        />

        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full"
            animate={{
              y: [0, -100, 0],
              x: [0, Math.sin(i) * 50, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
            style={{ top: `${20 + i * 10}%`, left: `${10 + i * 10}%` }}
          />
        ))}

        {/* Tiny square "bits" floating */}
        {[...Array(14)].map((_, i) => (
          <motion.div
            key={`bit-${i}`}
            className="absolute w-1.5 h-1.5 bg-primary/50 rounded-[2px]"
            animate={{
              y: [0, -40, 0],
              opacity: [0, 1, 0],
              rotate: [0, 90, 0],
            }}
            transition={{
              duration: 5 + (i % 4),
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.4,
            }}
            style={{
              top: `${(i * 47) % 90 + 5}%`,
              left: `${(i * 31) % 95 + 2}%`,
            }}
          />
        ))}

        {/* Tiny ring bits */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`ring-${i}`}
            className="absolute w-3 h-3 border border-primary/40 rounded-full"
            animate={{
              scale: [0.6, 1.4, 0.6],
              opacity: [0, 0.7, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.9,
            }}
            style={{ top: `${15 + i * 13}%`, right: `${8 + i * 11}%` }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20">
        <div className="text-center max-w-4xl mx-auto">
          {/* Animated Badge */}
          <motion.div
            className="relative inline-flex items-center bg-primary-foreground/10 backdrop-blur-md border border-primary-foreground/20 rounded-full px-5 py-2 mb-8 overflow-hidden"
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Shimmer sweep */}
            <motion.span
              aria-hidden
              className="absolute inset-y-0 -left-1/3 w-1/3 bg-gradient-to-r from-transparent via-primary-foreground/30 to-transparent"
              animate={{ x: ["0%", "400%"] }}
              transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", repeatDelay: 1.2 }}
            />
            <span className="relative text-sm font-medium text-primary-foreground/90 flex">
              {"Premium Digital Solutions".split("").map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 + i * 0.03 }}
                  className="inline-block"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </span>
          </motion.div>

          {/* Main Heading with typewriter effect */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            <span>{displayedText}</span>
            <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}>|</span>

            {/* Rotating word */}
            <span className="block mt-2 h-[1.2em] relative overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span
                  key={wordIndex}
                  className="text-primary inline-block"
                  initial={{ y: 60, opacity: 0, filter: "blur(8px)" }}
                  animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                  exit={{ y: -60, opacity: 0, filter: "blur(8px)" }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  {rotatingWords[wordIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
          </h1>

          {/* Animated underline accent */}
          <motion.div
            className="w-24 h-1 bg-primary rounded-full mx-auto mb-8"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
          />

          {/* Subheading */}
          <motion.p
            className="text-lg sm:text-xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            Transform your brand with expert graphic design, data-driven SEO strategies, and engaging social media management.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <Link to="/contact">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="default" size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary-dark text-primary-foreground shadow-premium">
                  Get Free Consultation
                  <Icon icon={ArrowRight} variant="foreground" size="md" className="ml-2 text-primary-foreground" />
                </Button>
              </motion.div>
            </Link>
            <Link to="/services">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20 backdrop-blur-sm"
                >
                  View Our Work
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Bottom Separator */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-border z-10" />
    </section>
  );
};

export default Hero;
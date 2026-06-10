import { Button } from "@/components/ui/button";
import { ArrowRight, Instagram, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Icon from "@/components/ui/icon";
import { useState, useEffect } from "react";
import TypewriterText from "@/components/TypewriterText";
import { Carousel, CarouselContent, CarouselItem, CarouselPagination } from "@/components/ui/carousel";
import socialImg from "@/assets/service-social.jpg";
import designImg from "@/assets/service-design.jpg";
import seoImg from "@/assets/service-seo.jpg";

const socialImages = [
  { src: socialImg, alt: "Social media campaign preview", handle: "@royalgraphics", engagement: "99%" },
  { src: designImg, alt: "Brand design preview", handle: "@royalgraphics", engagement: "99%" },
  { src: seoImg, alt: "SEO performance preview", handle: "@royalgraphics", engagement: "95%" }
];

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
      {/* Glassmorphism background blobs */}
      <motion.div
        aria-hidden
        className="absolute -top-24 -left-24 w-[28rem] h-[28rem] rounded-full bg-primary/25 blur-3xl pointer-events-none z-0 xl:-top-28 xl:-left-28 xl:w-[30rem] xl:h-[30rem]"
        animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute top-1/3 right-[-6rem] w-[32rem] h-[32rem] rounded-full bg-primary-foreground/10 blur-3xl pointer-events-none z-0 xl:right-[-8rem] xl:w-[34rem] xl:h-[34rem]"
        animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute bottom-[-8rem] left-1/3 w-[24rem] h-[24rem] rounded-full bg-primary/15 blur-3xl pointer-events-none z-0 sm:left-1/4 sm:bottom-[-6rem] lg:left-1/3"
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Hero glass gradient and animated noise */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_left_top,rgba(255,255,255,0.18),transparent_28%),radial-gradient(circle_at_right_bottom,rgba(255,255,255,0.12),transparent_26%),linear-gradient(180deg,rgba(255,255,255,0.14),rgba(255,255,255,0))]" />
        <div className="absolute inset-0 glass-noise opacity-70" />
      </div>

      {/* Dot grid overlay */}
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

            <div className="md:hidden mt-8 grid grid-cols-2 gap-3">
              <div className="relative w-full rounded-2xl overflow-hidden border border-primary-foreground/10 glass-surface shadow-card">
                <div className="relative h-24 overflow-hidden">
                  <img
                    src={socialImg}
                    alt="Social media campaign preview"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-2 left-2 inline-flex items-center gap-1 px-2 py-1 rounded-full bg-white/80 backdrop-blur-sm text-[10px] font-semibold text-slate-900">
                    <Icon icon={Instagram} variant="primary" size="xs" />
                    @royalgraphics
                  </div>
                </div>
                <div className="p-3 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-[10px] font-bold">
                    99%
                  </div>
                  <div className="min-w-0">
                    <div className="text-[9px] uppercase font-semibold text-primary-foreground/60 tracking-wider">Engagement</div>
                    <div className="text-[10px] font-bold text-primary-foreground truncate">Above industry avg</div>
                  </div>
                </div>
              </div>
              <div className="relative w-full rounded-2xl overflow-hidden border border-primary-foreground/10 glass-surface shadow-card">
                <div className="relative h-24 overflow-hidden">
                  <img
                    src={designImg}
                    alt="Brand design preview"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-3">
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <Icon icon={TrendingUp} variant="primary" size="xs" />
                    <div className="text-[9px] uppercase font-semibold text-primary-foreground/70 tracking-wider">
                      Brand Reach
                    </div>
                  </div>
                  <div className="h-1.5 w-full bg-primary-foreground/15 rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-[85%]" />
                  </div>
                </div>
              </div>
            </div>
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

{/* Floating Instagram-style image cards (auto-rotating carousel) */}
               <Carousel
                 opts={{ loop: true }}
                 className="absolute -bottom-4 -left-2 w-[220px] rounded-2xl overflow-hidden border border-primary-foreground/20 glass-surface shadow-premium transition-smooth"
               >
                 <CarouselContent>
                   {socialImages.map((item, index) => (
                     <CarouselItem key={index} className="p-0">
                       <div className="relative h-32 overflow-hidden">
                         <img
                           src={item.src}
                           alt={item.alt}
                           className="w-full h-full object-cover"
                           loading="lazy"
                         />
                         <div className="absolute top-2 left-2 inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-background/80 backdrop-blur-sm text-[10px] font-bold text-foreground">
                           <Icon icon={Instagram} variant="primary" size="xs" />
                           {item.handle}
                         </div>
                       </div>
                       <div className="p-3 flex items-center gap-3">
                         <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-xs shrink-0">
                           {item.engagement}
                         </div>
                         <div className="min-w-0">
                           <div className="text-[9px] uppercase font-bold text-primary-foreground/60 tracking-wider">Engagement</div>
                           <div className="text-xs font-bold text-primary-foreground truncate">Above industry avg</div>
                         </div>
                       </div>
                     </CarouselItem>
                   ))}
                 </CarouselContent>
                 <CarouselPagination className="pb-2" />
               </Carousel>

              {/* Floating design preview card (glassmorphism) */}
              <motion.div
                initial={{ opacity: 0, y: -34, x: 20, rotate: 10 }}
                animate={{ opacity: 1, y: 0, x: 0, rotate: 5 }}
                transition={{ duration: 0.95, delay: 1.05, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ rotate: 0, scale: 1.05, x: -6, y: 4 }}
                className="absolute -top-4 -right-2 w-[180px] rounded-2xl overflow-hidden border border-primary-foreground/20 glass-surface shadow-premium transition-smooth"
              >
                <div className="relative h-24 overflow-hidden">
                  <img
                    src={designImg}
                    alt="Brand design preview"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-3">
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <Icon icon={TrendingUp} variant="primary" size="xs" />
                    <div className="text-[9px] uppercase font-bold text-primary-foreground/70 tracking-wider">
                      Brand Reach
                    </div>
                  </div>
                  <div className="h-1.5 w-full bg-primary-foreground/15 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "85%" }}
                      transition={{ duration: 1.2, delay: 1.5, ease: "easeOut" }}
                      className="h-full bg-primary"
                    />
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

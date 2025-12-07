import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Palette, Share2, PenTool, Video, GraduationCap, Mail, MessageSquare } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const serviceLinks = [
  { label: "Graphic Design", href: "/services/graphic-design", icon: Palette, description: "Logos, branding & visual identity" },
  { label: "Social Media Marketing", href: "/services/social-media-marketing", icon: Share2, description: "Grow your online presence" },
  { label: "Copywriting", href: "/services/copywriting", icon: PenTool, description: "Compelling content that converts" },
  { label: "Video Editing", href: "/services/video-editing", icon: Video, description: "Professional video production" },
  { label: "Email Marketing", href: "/services/email-marketing", icon: Mail, description: "Targeted email campaigns" },
  { label: "SMS Marketing", href: "/services/sms-marketing", icon: MessageSquare, description: "Direct mobile engagement" },
  { label: "Online Classes", href: "/services/online-classes", icon: GraduationCap, description: "Learn digital marketing skills" },
];

const featuredServices = [
  { ...serviceLinks[1], highlight: "Boost your brand visibility with our expert social media strategies and content creation." },
  { ...serviceLinks[0], highlight: "Create stunning visuals that capture attention and elevate your brand identity." },
  { ...serviceLinks[3], highlight: "Transform raw footage into compelling stories that engage your audience." },
  { ...serviceLinks[4], highlight: "Drive conversions with targeted email campaigns that deliver results." },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [featuredIndex, setFeaturedIndex] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const interval = setInterval(() => {
      setFeaturedIndex((prev) => (prev + 1) % featuredServices.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentFeatured = featuredServices[featuredIndex];

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Pricing", href: "/pricing" },
    { label: "Blogs", href: "/blogs" },
    { label: "Contact", href: "/contact" },
  ];

  const isServicesActive = location.pathname.startsWith("/services");

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b border-border shadow-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Royal Graphics Logo" className="h-16 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className={`text-foreground hover:text-primary transition-smooth font-medium ${
                location.pathname === "/" ? "text-primary" : ""
              }`}
            >
              Home
            </Link>

            {/* Services Mega Menu */}
            <NavigationMenu className="relative">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={`bg-transparent hover:bg-transparent data-[state=open]:bg-transparent ${isServicesActive ? "text-primary" : ""}`}>
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="absolute -left-32">
                    <motion.div 
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="w-[800px] p-8 bg-card/95 backdrop-blur-xl border border-border/50 rounded-2xl shadow-2xl shadow-primary/10"
                    >
                      {/* Decorative gradient orbs */}
                      <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
                      <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-accent/20 rounded-full blur-3xl pointer-events-none" />
                      
                      <div className="relative flex gap-8">
                        {/* Featured Service - Rotating */}
                        <div className="w-[240px] shrink-0">
                          <AnimatePresence mode="wait">
                            <motion.div
                              key={featuredIndex}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: 20 }}
                              transition={{ duration: 0.4, ease: "easeInOut" }}
                            >
                              <Link 
                                to={currentFeatured.href}
                                className="block p-5 rounded-2xl bg-gradient-to-br from-primary/15 via-primary/10 to-accent/15 border border-primary/30 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 group"
                              >
                                <motion.div 
                                  className="p-3 rounded-xl bg-primary/20 text-primary w-fit mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                                  transition={{ duration: 0.4 }}
                                >
                                  <currentFeatured.icon className="w-7 h-7" />
                                </motion.div>
                                <span className="text-xs font-bold text-primary uppercase tracking-widest">✨ Featured</span>
                                <h3 className="font-bold text-lg text-foreground mt-2 group-hover:text-primary transition-colors duration-300">
                                  {currentFeatured.label}
                                </h3>
                                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                                  {currentFeatured.highlight}
                                </p>
                                <motion.span 
                                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary mt-4"
                                  whileHover={{ x: 5 }}
                                >
                                  Explore service 
                                  <motion.span
                                    animate={{ x: [0, 5, 0] }}
                                    transition={{ repeat: Infinity, duration: 1.5 }}
                                  >
                                    →
                                  </motion.span>
                                </motion.span>
                              </Link>
                            </motion.div>
                          </AnimatePresence>
                          {/* Progress indicators */}
                          <div className="flex gap-2 mt-4 justify-center">
                            {featuredServices.map((_, idx) => (
                              <motion.button
                                key={idx}
                                onClick={() => setFeaturedIndex(idx)}
                                className={`h-2 rounded-full transition-all duration-300 ${
                                  idx === featuredIndex 
                                    ? "w-6 bg-primary" 
                                    : "w-2 bg-primary/30 hover:bg-primary/50"
                                }`}
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.9 }}
                              />
                            ))}
                          </div>
                        </div>

                        {/* Services Grid */}
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-5">
                            <div>
                              <h4 className="font-bold text-lg text-foreground">Our Services</h4>
                              <p className="text-sm text-muted-foreground">Complete digital marketing solutions</p>
                            </div>
                            <Link 
                              to="/services" 
                              className="px-4 py-2 text-sm font-semibold text-primary bg-primary/10 rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                            >
                              View all →
                            </Link>
                          </div>
                          <div className="grid grid-cols-2 gap-3">
                            {serviceLinks.map((service, index) => {
                              const Icon = service.icon;
                              return (
                                <motion.div
                                  key={service.href}
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: index * 0.05, duration: 0.3 }}
                                >
                                  <Link
                                    to={service.href}
                                    className="flex items-start gap-4 p-3 rounded-xl hover:bg-secondary/70 border border-transparent hover:border-border/50 transition-all duration-300 group"
                                  >
                                    <motion.div 
                                      className="p-2.5 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 text-primary group-hover:from-primary group-hover:to-accent group-hover:text-primary-foreground transition-all duration-300 shadow-sm"
                                      whileHover={{ scale: 1.1, rotate: 5 }}
                                    >
                                      <Icon className="w-5 h-5" />
                                    </motion.div>
                                    <div className="flex-1">
                                      <span className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors duration-300 block">
                                        {service.label}
                                      </span>
                                      <span className="text-xs text-muted-foreground line-clamp-1 mt-0.5">
                                        {service.description}
                                      </span>
                                    </div>
                                    <motion.span 
                                      className="text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 self-center"
                                      initial={{ x: -10 }}
                                      whileHover={{ x: 0 }}
                                    >
                                      →
                                    </motion.span>
                                  </Link>
                                </motion.div>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {navItems.slice(1).map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className={`text-foreground hover:text-primary transition-smooth font-medium ${
                  location.pathname === item.href ? "text-primary" : ""
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link to="/contact">
              <Button variant="accent" size="default">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-2">
              <Link
                to="/"
                className={`text-foreground hover:text-primary transition-smooth font-medium py-2 ${
                  location.pathname === "/" ? "text-primary" : ""
                }`}
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>

              {/* Mobile Services Accordion */}
              <div>
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className={`flex items-center justify-between w-full text-foreground hover:text-primary transition-smooth font-medium py-2 ${isServicesActive ? "text-primary" : ""}`}
                >
                  Services
                  <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                </button>
                {servicesOpen && (
                  <div className="pl-4 flex flex-col gap-1 bg-secondary/50 rounded-lg py-2 mt-1">
                    <Link
                      to="/services"
                      className="text-muted-foreground hover:text-primary transition-smooth py-1.5 text-sm"
                      onClick={() => setIsOpen(false)}
                    >
                      View All Services
                    </Link>
                    {serviceLinks.map((service) => {
                      const Icon = service.icon;
                      return (
                        <Link
                          key={service.href}
                          to={service.href}
                          className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-smooth py-1.5 text-sm"
                          onClick={() => setIsOpen(false)}
                        >
                          <Icon className="w-4 h-4" />
                          {service.label}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>

              {navItems.slice(1).map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`text-foreground hover:text-primary transition-smooth font-medium py-2 ${
                    location.pathname === item.href ? "text-primary" : ""
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                <Button variant="accent" size="default" className="w-full mt-2">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;

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
                  <NavigationMenuContent>
                    <motion.div 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="w-[720px] p-6"
                    >
                      <div className="flex items-center justify-between mb-5 pb-4 border-b border-border">
                        <div>
                          <h4 className="font-bold text-foreground">Our Services</h4>
                          <p className="text-sm text-muted-foreground">Comprehensive digital marketing solutions</p>
                        </div>
                        <Link 
                          to="/services" 
                          className="px-4 py-2 text-sm font-medium text-primary-foreground bg-primary rounded-lg hover:bg-primary/90 transition-colors duration-200"
                        >
                          View All Services
                        </Link>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-2">
                        {serviceLinks.map((service, index) => {
                          const Icon = service.icon;
                          return (
                            <motion.div
                              key={service.href}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: index * 0.03, duration: 0.2 }}
                            >
                              <Link
                                to={service.href}
                                className="flex items-start gap-4 p-4 rounded-xl hover:bg-secondary transition-colors duration-200 group"
                              >
                                <div className="p-2.5 rounded-lg bg-secondary text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-200">
                                  <Icon className="w-5 h-5" />
                                </div>
                                <div className="flex-1">
                                  <span className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors duration-200 block">
                                    {service.label}
                                  </span>
                                  <span className="text-xs text-muted-foreground mt-0.5 block">
                                    {service.description}
                                  </span>
                                </div>
                              </Link>
                            </motion.div>
                          );
                        })}
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

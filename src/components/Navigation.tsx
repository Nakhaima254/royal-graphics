import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Palette, Share2, PenTool, Video, GraduationCap, Mail, MessageSquare } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
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
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={`bg-transparent hover:bg-transparent data-[state=open]:bg-transparent ${isServicesActive ? "text-primary" : ""}`}>
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[750px] p-6 bg-card border border-border rounded-lg shadow-lg">
                      <div className="flex gap-6">
                        {/* Featured Service - Rotating */}
                        <Link 
                          to={currentFeatured.href}
                          className="w-[220px] shrink-0 p-4 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/20 hover:border-primary/40 transition-smooth group relative overflow-hidden"
                        >
                          <div className="p-3 rounded-lg bg-primary/20 text-primary w-fit mb-3 group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
                            <currentFeatured.icon className="w-6 h-6" />
                          </div>
                          <span className="text-xs font-semibold text-primary uppercase tracking-wider">Featured</span>
                          <h3 className="font-bold text-foreground mt-1 group-hover:text-primary transition-smooth">
                            {currentFeatured.label}
                          </h3>
                          <p className="text-sm text-muted-foreground mt-2">
                            {currentFeatured.highlight}
                          </p>
                          <span className="inline-flex items-center gap-1 text-sm font-medium text-primary mt-3">
                            Learn more →
                          </span>
                          {/* Progress indicators */}
                          <div className="flex gap-1 mt-4">
                            {featuredServices.map((_, idx) => (
                              <div
                                key={idx}
                                className={`h-1 rounded-full transition-all duration-300 ${
                                  idx === featuredIndex ? "w-4 bg-primary" : "w-1.5 bg-primary/30"
                                }`}
                              />
                            ))}
                          </div>
                        </Link>

                        {/* Services Grid */}
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-4">
                            <div>
                              <h4 className="font-semibold text-foreground">Our Services</h4>
                              <p className="text-xs text-muted-foreground">Complete digital marketing solutions</p>
                            </div>
                            <Link 
                              to="/services" 
                              className="text-sm font-medium text-primary hover:underline"
                            >
                              View all →
                            </Link>
                          </div>
                          <div className="grid grid-cols-2 gap-2">
                            {serviceLinks.map((service) => {
                              const Icon = service.icon;
                              return (
                                <Link
                                  key={service.href}
                                  to={service.href}
                                  className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-secondary/50 transition-smooth group"
                                >
                                  <div className="p-1.5 rounded-md bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
                                    <Icon className="w-4 h-4" />
                                  </div>
                                  <div>
                                    <span className="font-medium text-sm text-foreground group-hover:text-primary transition-smooth block">
                                      {service.label}
                                    </span>
                                    <span className="text-xs text-muted-foreground line-clamp-1">
                                      {service.description}
                                    </span>
                                  </div>
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
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

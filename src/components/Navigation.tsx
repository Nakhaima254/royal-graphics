import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Palette, Share2, PenTool, Video, GraduationCap, Mail, MessageSquare } from "lucide-react";
import { useState } from "react";
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

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

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
                    <div className="w-[600px] p-6 bg-card border border-border rounded-lg shadow-lg">
                      <div className="mb-4">
                        <Link 
                          to="/services" 
                          className="text-lg font-semibold text-primary hover:underline"
                        >
                          View All Services →
                        </Link>
                        <p className="text-sm text-muted-foreground mt-1">
                          Explore our complete range of digital marketing solutions
                        </p>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        {serviceLinks.map((service) => {
                          const Icon = service.icon;
                          return (
                            <Link
                              key={service.href}
                              to={service.href}
                              className="flex items-start gap-3 p-3 rounded-lg hover:bg-secondary/50 transition-smooth group"
                            >
                              <div className="p-2 rounded-md bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
                                <Icon className="w-5 h-5" />
                              </div>
                              <div>
                                <span className="font-medium text-foreground group-hover:text-primary transition-smooth block">
                                  {service.label}
                                </span>
                                <span className="text-xs text-muted-foreground">
                                  {service.description}
                                </span>
                              </div>
                            </Link>
                          );
                        })}
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

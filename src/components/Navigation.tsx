import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Palette, Share2, PenTool, Video, GraduationCap, Mail, MessageSquare } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const serviceLinks = [
  { label: "Graphic Design", href: "/services/graphic-design", icon: Palette },
  { label: "Social Media Marketing", href: "/services/social-media-marketing", icon: Share2 },
  { label: "Copywriting", href: "/services/copywriting", icon: PenTool },
  { label: "Video Editing", href: "/services/video-editing", icon: Video },
  { label: "Email Marketing", href: "/services/email-marketing", icon: Mail },
  { label: "SMS Marketing", href: "/services/sms-marketing", icon: MessageSquare },
  { label: "Online Classes", href: "/services/online-classes", icon: GraduationCap },
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

            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className={`flex items-center gap-1 text-foreground hover:text-primary transition-smooth font-medium ${isServicesActive ? "text-primary" : ""}`}>
                Services
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-card border-border z-[100]">
                <DropdownMenuItem asChild>
                  <Link to="/services" className="flex items-center gap-2 cursor-pointer">
                    View All Services
                  </Link>
                </DropdownMenuItem>
                <div className="h-px bg-border my-1" />
                {serviceLinks.map((service) => {
                  const Icon = service.icon;
                  return (
                    <DropdownMenuItem key={service.href} asChild>
                      <Link to={service.href} className="flex items-center gap-2 cursor-pointer">
                        <Icon className="w-4 h-4 text-primary" />
                        {service.label}
                      </Link>
                    </DropdownMenuItem>
                  );
                })}
              </DropdownMenuContent>
            </DropdownMenu>

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

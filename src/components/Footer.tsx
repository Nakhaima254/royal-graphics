import { Facebook, Instagram, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import footerLogo from "@/assets/footer-logo.png";
import Icon from "@/components/ui/icon";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-footer text-footer-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-0 mb-8">
          {/* Company Info */}
          <div className="lg:pr-8 lg:border-r lg:border-footer-foreground/20">
            <Link to="/" className="mb-2 block">
              <img src={footerLogo} alt="Royal Graphics" className="h-20 w-auto" />
            </Link>
            <p className="text-footer-foreground/80 text-sm mb-4">
              Professional design, SEO, and social media services for growing businesses.
            </p>
            <div className="flex gap-3">
              <a 
                href="https://www.facebook.com/profile.php?id=100090789338821" 
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-lg bg-footer-foreground/10 hover:bg-primary transition-smooth flex items-center justify-center"
              >
                <Icon icon={Facebook} variant="foreground" size="sm" hover="scale" className="text-footer-foreground" />
              </a>
              <a 
                href="https://www.tiktok.com/@royal.graphics.so?_r=1&_t=ZM-92FOEs4YPmN" 
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="w-9 h-9 rounded-lg bg-footer-foreground/10 hover:bg-primary transition-smooth flex items-center justify-center"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
              <a 
                href="https://www.instagram.com/royalgraphics254?igsh=bHNleTJ5azZldjlw" 
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-lg bg-footer-foreground/10 hover:bg-primary transition-smooth flex items-center justify-center"
              >
                <Icon icon={Instagram} variant="foreground" size="sm" hover="scale" className="text-footer-foreground" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="lg:px-8 lg:border-r lg:border-footer-foreground/20">
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-footer-foreground/80">
              <li><Link to="/services/graphic-design" className="hover:text-primary transition-smooth">Graphic Design</Link></li>
              <li><Link to="/services/graphic-design/portfolio" className="hover:text-primary transition-smooth">Design Portfolio</Link></li>
              <li><Link to="/services/social-media-marketing" className="hover:text-primary transition-smooth">Social Media Marketing</Link></li>
              <li><Link to="/services/copywriting" className="hover:text-primary transition-smooth">Copywriting</Link></li>
              <li><Link to="/services/email-marketing" className="hover:text-primary transition-smooth">Email Marketing</Link></li>
              <li><Link to="/services/video-editing" className="hover:text-primary transition-smooth">Video Editing</Link></li>
              <li><Link to="/services/sms-marketing" className="hover:text-primary transition-smooth">SMS Marketing</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="lg:pl-8">
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-footer-foreground/80">
              <li><Link to="/about" className="hover:text-primary transition-smooth">About Us</Link></li>
              <li><Link to="/pricing" className="hover:text-primary transition-smooth">Pricing</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-smooth">All Services</Link></li>
              <li><Link to="/blogs" className="hover:text-primary transition-smooth">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-smooth">Contact</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-footer-foreground/20 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-footer-foreground/70">
          <p>© {currentYear} Royal Graphics Solutions. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="hover:text-primary transition-smooth">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-primary transition-smooth">Terms of Service</Link>
            <Link to="/contact" className="hover:text-primary transition-smooth">Contact Us</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-dark text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 gradient-accent rounded-lg flex items-center justify-center">
                <span className="text-xl font-bold text-accent-foreground">RG</span>
              </div>
              <span className="text-xl font-bold">Royal Graphics</span>
            </div>
            <p className="text-primary-foreground/80 text-sm mb-4">
              Your royal treatment in digital marketing. Elevating brands through expert design, SEO, and social media.
            </p>
            <div className="flex gap-3">
              <a 
                href="#" 
                aria-label="Facebook"
                className="w-9 h-9 rounded-lg bg-primary-foreground/10 hover:bg-accent transition-smooth flex items-center justify-center"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                aria-label="Twitter"
                className="w-9 h-9 rounded-lg bg-primary-foreground/10 hover:bg-accent transition-smooth flex items-center justify-center"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                aria-label="Instagram"
                className="w-9 h-9 rounded-lg bg-primary-foreground/10 hover:bg-accent transition-smooth flex items-center justify-center"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-lg bg-primary-foreground/10 hover:bg-accent transition-smooth flex items-center justify-center"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><Link to="/services" className="hover:text-accent transition-smooth">Graphic Design</Link></li>
              <li><Link to="/services" className="hover:text-accent transition-smooth">SEO Services</Link></li>
              <li><Link to="/services" className="hover:text-accent transition-smooth">Social Media Management</Link></li>
              <li><Link to="/services" className="hover:text-accent transition-smooth">Content Writing</Link></li>
              <li><Link to="/services" className="hover:text-accent transition-smooth">Email Marketing</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><Link to="/about" className="hover:text-accent transition-smooth">About Us</Link></li>
              <li><Link to="/pricing" className="hover:text-accent transition-smooth">Pricing</Link></li>
              <li><a href="#" className="hover:text-accent transition-smooth">Careers</a></li>
              <li><Link to="/blogs" className="hover:text-accent transition-smooth">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-smooth">Contact</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-sm text-primary-foreground/80 mb-4">
              Subscribe to our newsletter for digital marketing tips and updates.
            </p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Your email"
                className="flex-1 px-3 py-2 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <button 
                aria-label="Subscribe"
                className="w-10 h-10 rounded-lg gradient-accent flex items-center justify-center hover:scale-105 transition-bounce"
              >
                <Mail className="w-4 h-4 text-accent-foreground" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/20 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/70">
          <p>© {currentYear} Royal Graphics Solutions. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-accent transition-smooth">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition-smooth">Terms of Service</a>
            <a href="#" className="hover:text-accent transition-smooth">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

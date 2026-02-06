import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "@/pages/Home";
import ServicesPage from "@/pages/ServicesPage";
import GraphicDesignPage from "@/pages/services/GraphicDesignPage";
import GraphicDesignPortfolioPage from "@/pages/services/GraphicDesignPortfolioPage";
import SocialMediaMarketingPage from "@/pages/services/SocialMediaMarketingPage";
import CopywritingPage from "@/pages/services/CopywritingPage";
import VideoEditingPage from "@/pages/services/VideoEditingPage";
import EmailMarketingPage from "@/pages/services/EmailMarketingPage";
import SMSMarketingPage from "@/pages/services/SMSMarketingPage";
import AboutPage from "@/pages/AboutPage";
import PricingPage from "@/pages/PricingPage";
import BlogsPage from "@/pages/BlogsPage";
import BlogPostPage from "@/pages/BlogPostPage";
import ContactPage from "@/pages/ContactPage";
import PrivacyPolicyPage from "@/pages/PrivacyPolicyPage";
import TermsOfServicePage from "@/pages/TermsOfServicePage";
import NotFound from "@/pages/NotFound";
import PageTransition from "./PageTransition";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/services" element={<PageTransition><ServicesPage /></PageTransition>} />
        <Route path="/services/graphic-design" element={<PageTransition><GraphicDesignPage /></PageTransition>} />
        <Route path="/services/graphic-design/portfolio" element={<PageTransition><GraphicDesignPortfolioPage /></PageTransition>} />
        <Route path="/services/social-media-marketing" element={<PageTransition><SocialMediaMarketingPage /></PageTransition>} />
        <Route path="/services/copywriting" element={<PageTransition><CopywritingPage /></PageTransition>} />
        <Route path="/services/video-editing" element={<PageTransition><VideoEditingPage /></PageTransition>} />
        <Route path="/services/email-marketing" element={<PageTransition><EmailMarketingPage /></PageTransition>} />
        <Route path="/services/sms-marketing" element={<PageTransition><SMSMarketingPage /></PageTransition>} />
        <Route path="/about" element={<PageTransition><AboutPage /></PageTransition>} />
        <Route path="/pricing" element={<PageTransition><PricingPage /></PageTransition>} />
        <Route path="/blogs" element={<PageTransition><BlogsPage /></PageTransition>} />
        <Route path="/blogs/:slug" element={<PageTransition><BlogPostPage /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><ContactPage /></PageTransition>} />
        <Route path="/privacy-policy" element={<PageTransition><PrivacyPolicyPage /></PageTransition>} />
        <Route path="/terms-of-service" element={<PageTransition><TermsOfServicePage /></PageTransition>} />
        <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;

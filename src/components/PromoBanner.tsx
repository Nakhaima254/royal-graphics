import { useState, useEffect } from "react";
import { X, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const promoItems = [
  { service: "Logo Design", original: "KES 2,000", discounted: "KES 1,600" },
  { service: "Business Card", original: "KES 800", discounted: "KES 640" },
  { service: "Flyers", original: "KES 800", discounted: "KES 640" },
  { service: "Video Edit", original: "KES 3,000", discounted: "KES 2,400" },
  { service: "Social Media", original: "KES 10,000/mo", discounted: "KES 8,000/mo" },
];

const PromoBanner = () => {
  const [dismissed, setDismissed] = useState(false);
  const [currentItem, setCurrentItem] = useState(0);

  const promoEndDate = new Date("2026-03-31T23:59:59");
  const now = new Date();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentItem((prev) => (prev + 1) % promoItems.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  if (now > promoEndDate || dismissed) return null;

  return (
    <div className="bg-accent text-accent-foreground relative z-[60]">
      <div className="container mx-auto px-4 py-2 flex items-center justify-center gap-3 text-sm font-medium">
        <Sparkles className="w-4 h-4 shrink-0 animate-pulse" />
        <span className="hidden sm:inline font-bold">20% OFF</span>
        <span className="hidden sm:inline">—</span>
        <AnimatePresence mode="wait">
          <motion.span
            key={currentItem}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="inline-flex items-center gap-1.5 min-w-[200px] justify-center"
          >
            <strong>{promoItems[currentItem].service}:</strong>
            <span className="line-through opacity-60">{promoItems[currentItem].original}</span>
            <span className="font-bold">{promoItems[currentItem].discounted}</span>
          </motion.span>
        </AnimatePresence>
        <span className="hidden md:inline text-xs opacity-80">• Ends Mar 31</span>
        <Link
          to="/pricing"
          className="underline font-bold hover:opacity-80 transition-opacity whitespace-nowrap text-xs sm:text-sm"
        >
          View All
        </Link>
        <button
          onClick={() => setDismissed(true)}
          className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:opacity-70 transition-opacity"
          aria-label="Dismiss banner"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};

export default PromoBanner;

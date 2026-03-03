import { useState } from "react";
import { X, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const PromoBanner = () => {
  const [dismissed, setDismissed] = useState(false);
  
  const promoEndDate = new Date("2026-03-31T23:59:59");
  const now = new Date();
  
  if (now > promoEndDate || dismissed) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: "auto", opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        className="bg-accent text-accent-foreground relative z-[60]"
      >
        <div className="container mx-auto px-4 py-2 flex items-center justify-center gap-2 text-sm font-medium">
          <Sparkles className="w-4 h-4 shrink-0" />
          <span className="text-center">
            🎉 <strong>20% OFF</strong> all services! Offer ends <strong>March 31, 2026</strong>.
          </span>
          <Link
            to="/pricing"
            className="underline font-bold hover:opacity-80 transition-opacity whitespace-nowrap"
          >
            View Pricing
          </Link>
          <button
            onClick={() => setDismissed(true)}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:opacity-70 transition-opacity"
            aria-label="Dismiss banner"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default PromoBanner;

import { useState } from "react";
import { Plus, X, Phone, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Icon from "@/components/ui/icon";

const FloatingContact = () => {
  const [isOpen, setIsOpen] = useState(false);

  const contactOptions = [
    {
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      ),
      label: "WhatsApp",
      href: "https://wa.me/254746388308",
      bgColor: "bg-green-500 hover:bg-green-600",
    },
    {
      iconComponent: Phone,
      label: "Call",
      href: "tel:+254746388308",
      bgColor: "bg-blue-500 hover:bg-blue-600",
    },
    {
      iconComponent: Mail,
      label: "Email",
      href: "mailto:info@royalgraphics.co.ke",
      bgColor: "bg-primary hover:bg-primary/90",
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col-reverse items-center gap-3">
      {/* Contact Options */}
      <AnimatePresence>
        {isOpen && (
          <>
            {contactOptions.map((option, index) => (
              <motion.a
                key={option.label}
                href={option.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(option.href, "_blank");
                }}
                className={`w-12 h-12 rounded-full ${option.bgColor} text-white flex items-center justify-center shadow-lg transition-colors cursor-pointer`}
                initial={{ opacity: 0, scale: 0, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0, y: 20 }}
                transition={{ delay: index * 0.1, duration: 0.2 }}
                title={option.label}
              >
                {option.icon ? option.icon : option.iconComponent && (
                  <Icon icon={option.iconComponent} variant="foreground" size="md" className="text-white" />
                )}
              </motion.a>
            ))}
          </>
        )}
      </AnimatePresence>

      {/* Main FAB Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg hover:bg-primary/90 transition-colors"
        whileTap={{ scale: 0.95 }}
        aria-label={isOpen ? "Close contact menu" : "Open contact menu"}
      >
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <Icon icon={isOpen ? X : Plus} variant="foreground" size="lg" className="text-primary-foreground" />
        </motion.div>
      </motion.button>
    </div>
  );
};

export default FloatingContact;

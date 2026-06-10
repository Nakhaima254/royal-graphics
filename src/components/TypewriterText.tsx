import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TypewriterTextProps {
  text: string;
  className?: string;
  delay?: number;
  speed?: number;
}

const TypewriterText = ({ text, className = "", delay = 0, speed = 30 }: TypewriterTextProps) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, delay + speed);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, delay, speed]);

  return (
    <span className={className}>
      {displayedText}
      {currentIndex < text.length && (
        <motion.span
          className="inline-block w-0.5 h-5 bg-primary ml-1 align-bottom"
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity }}
        />
      )}
    </span>
  );
};

export default TypewriterText;
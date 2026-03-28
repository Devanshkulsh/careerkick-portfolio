"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-5 right-4 z-[9999] sm:bottom-8 sm:right-8">
      <AnimatePresence>
        {isVisible && (
          <motion.button
            initial={{ opacity: 0, scale: 0.7, y: 16 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
              boxShadow: "0 16px 40px rgba(124, 255, 59, 0.18)",
            }}
            exit={{ opacity: 0, scale: 0.7, y: 16 }}
            whileHover={{ scale: 1.08, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            onClick={scrollToTop}
            className={cn(
              "group relative flex h-11 w-11 items-center justify-center rounded-full sm:h-12 sm:w-12",
              "bg-primary text-primary-foreground shadow-lg shadow-primary/25",
              "border border-white/10 backdrop-blur-md transition-colors",
              "hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/50",
            )}
            aria-label="Scroll to top"
          >
            <motion.span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 rounded-full bg-primary/30 opacity-0 blur-md"
              animate={{ opacity: [0, 0.5, 0], scale: [0.9, 1.15, 0.9] }}
              transition={{
                duration: 2.6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <ChevronUp className="relative h-5 w-5 stroke-[3px] sm:h-6 sm:w-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

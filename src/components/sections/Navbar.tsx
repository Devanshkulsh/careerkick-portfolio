import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass py-3" : "py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="text-xl font-bold tracking-tight">
          Career<span className="text-primary">Kick</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {["About", "Impact", "Process", "Contact"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              {link}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="bg-primary text-primary-foreground px-6 py-2.5 rounded-full text-sm font-semibold hover:neon-glow transition-shadow duration-300"
        >
          Get Started
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const FooterSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <footer ref={ref} className="relative py-32 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, ease: [0.25, 0.4, 0.25, 1] }}
          className="text-center space-y-6"
        >
          <h2 className="text-5xl md:text-8xl font-extrabold tracking-tight">
            Career<span className="text-primary text-glow">Kick</span>
          </h2>
          <p className="text-muted-foreground text-lg font-light">
            Shaping the future of Ayurveda education.
          </p>
          <div className="h-px w-24 bg-primary/30 mx-auto" />
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} CareerKick Services. All rights reserved.
          </p>
        </motion.div>
      </div>

      {/* Fade to black gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </footer>
  );
};

export default FooterSection;

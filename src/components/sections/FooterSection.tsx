import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const FooterSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <footer ref={ref} className="relative overflow-hidden py-20 sm:py-24 lg:py-32">
      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, ease: [0.25, 0.4, 0.25, 1] }}
          className="space-y-5 text-center sm:space-y-6"
        >
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-8xl">
            Career<span className="text-primary text-glow">Kick</span>
          </h2>
          <p className="mx-auto max-w-xl text-base font-light text-muted-foreground sm:text-lg">
            Shaping the future of Ayurveda education.
          </p>
          <div className="mx-auto h-px w-24 bg-primary/30" />
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} CareerKick Services. All rights reserved.
          </p>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent sm:h-32" />
    </footer>
  );
};

export default FooterSection;

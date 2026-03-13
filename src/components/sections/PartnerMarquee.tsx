import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const colleges = [
  "SKR Ayurved College",
  "Dhanvantari Ayurved",
  "Government Ayurved College",
  "Shri Gurudev Ayurved",
  "Parul University",
  "LJ Ayurved College",
  "KSGH Medical College",
  "Himalayiya University",
  "Rajiv Gandhi University",
  "Bharati Vidyapeeth",
  "DY Patil University",
  "KAHER University",
];

const PartnerMarquee = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center space-y-4"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-primary font-medium">
            Trusted Network
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">
            Partner <span className="text-primary">Colleges</span>
          </h2>
        </motion.div>
      </div>

      {/* Marquee */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
        
        <div className="flex marquee">
          {[...colleges, ...colleges].map((name, i) => (
            <div
              key={`${name}-${i}`}
              className="glass glass-hover rounded-xl px-8 py-5 mx-3 whitespace-nowrap flex-shrink-0 hover:neon-glow transition-shadow duration-300 cursor-default"
            >
              <span className="text-sm font-medium text-muted-foreground">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerMarquee;

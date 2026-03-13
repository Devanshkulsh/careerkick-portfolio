import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  { value: 100000, label: "Allotments", suffix: "+", display: "1 Lac+" },
  { value: 1000000, label: "Students Reached", suffix: "+", display: "10 Lac+" },
  { value: 1000, label: "Institutional Tieups", suffix: "+", display: "1000+" },
  { value: 7, label: "Years of Excellence", suffix: "+", display: "7+" },
];

const AnimatedCounter = ({ target, inView, display }: { target: number; inView: boolean; display: string }) => {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => setShown(true), 800);
      return () => clearTimeout(timer);
    }
  }, [inView]);

  return (
    <span className="text-5xl md:text-7xl font-extrabold text-primary counter-glow">
      {shown ? display : "0"}
    </span>
  );
};

const AchievementsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 relative noise-overlay">
      <div className="absolute inset-0 gradient-mesh opacity-50" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20 space-y-4"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-primary font-medium">
            Our Scale
          </span>
          <h2 className="text-4xl md:text-5xl font-bold">
            Numbers That <span className="text-primary text-glow">Speak</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              className="text-center space-y-3"
            >
              <AnimatedCounter target={stat.value} inView={inView} display={stat.display} />
              <p className="text-sm text-muted-foreground font-medium tracking-wide uppercase">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;

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
    <span className="text-3xl sm:text-5xl md:text-7xl font-extrabold text-primary counter-glow">
      {shown ? display : "0"}
    </span>
  );
};

const AchievementsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="achievements" className="section-shell noise-overlay">
      <div className="absolute inset-0 gradient-mesh opacity-50" />
      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="section-heading"
        >
          <span className="section-kicker">Our Scale</span>
          <h2 className="section-title">
            Numbers That <span className="text-primary text-glow">Speak</span>
          </h2>
        </motion.div>

        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              className="space-y-3 text-center"
            >
              <AnimatedCounter target={stat.value} inView={inView} display={stat.display} />
              <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground sm:text-sm">
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

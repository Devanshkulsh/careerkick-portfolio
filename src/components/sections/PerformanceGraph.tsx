import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingUp } from "lucide-react";

const data = [
  { year: "2022", value: 35 },
  { year: "2023", value: 62 },
  { year: "2024", value: 94 },
];

const PerformanceGraph = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 space-y-4"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-primary font-medium">
            Growth Trajectory
          </span>
          <h2 className="text-4xl md:text-5xl font-bold">
            Exponential <span className="text-primary text-glow">Impact</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto glass rounded-3xl p-10"
        >
          {/* Simple bar chart */}
          <div className="flex items-end justify-center gap-8 md:gap-16 h-64">
            {data.map((d, i) => (
              <div key={d.year} className="flex flex-col items-center gap-4">
                <motion.div
                  className="w-16 md:w-24 rounded-t-xl bg-primary/20 relative overflow-hidden"
                  initial={{ height: 0 }}
                  animate={inView ? { height: `${d.value * 2.2}px` } : { height: 0 }}
                  transition={{ duration: 1, delay: 0.4 + i * 0.2, ease: [0.25, 0.4, 0.25, 1] }}
                >
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 bg-primary rounded-t-xl"
                    initial={{ height: 0 }}
                    animate={inView ? { height: "100%" } : { height: 0 }}
                    transition={{ duration: 1.2, delay: 0.6 + i * 0.2 }}
                  />
                  <motion.span
                    className="absolute -top-8 left-1/2 -translate-x-1/2 text-primary font-bold text-lg"
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: 1 + i * 0.2 }}
                  >
                    {d.value}%
                  </motion.span>
                </motion.div>
                <span className="text-sm text-muted-foreground font-medium">{d.year}</span>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-2 mt-8 text-primary">
            <TrendingUp className="w-5 h-5" />
            <span className="text-sm font-semibold">168% growth in 2 years</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PerformanceGraph;

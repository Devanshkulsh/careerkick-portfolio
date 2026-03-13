import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, DollarSign, Users, BarChart3 } from "lucide-react";

const impacts = [
  {
    icon: DollarSign,
    title: "Increase College Fees",
    desc: "Strong brand perception allows premium pricing with higher perceived value.",
  },
  {
    icon: Users,
    title: "Remove Vacant Seats",
    desc: "Systematic funnel ensures every seat is filled before deadline.",
  },
  {
    icon: BarChart3,
    title: "Improve Cashflow",
    desc: "Predictable enrollment cycles create stable, growing revenue streams.",
  },
];

const RevenueImpact = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto text-center mb-20 space-y-4"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-primary font-medium">
            Financial Growth
          </span>
          <h2 className="text-4xl md:text-5xl font-bold">
            Revenue <span className="text-primary text-glow">Impact</span>
          </h2>
          <p className="text-muted-foreground text-lg font-light">
            Every partnership translates to measurable financial outcomes.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6">
          {impacts.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              className="glass glass-hover rounded-2xl p-6 flex items-center gap-6 group hover:neon-glow transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-muted-foreground font-light">{item.desc}</p>
              </div>
              <ArrowUpRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RevenueImpact;

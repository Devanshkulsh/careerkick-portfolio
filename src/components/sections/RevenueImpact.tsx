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
    <section ref={ref} className="section-shell">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="section-heading mx-auto max-w-4xl"
        >
          <span className="section-kicker">Financial Growth</span>
          <h2 className="section-title">
            Revenue <span className="text-primary text-glow">Impact</span>
          </h2>
          <p className="section-copy">
            Every partnership translates to measurable financial outcomes.
          </p>
        </motion.div>

        <div className="mx-auto max-w-4xl space-y-4 sm:space-y-6">
          {impacts.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              className="flex flex-col gap-4 rounded-2xl p-5 transition-all duration-500 glass glass-hover group hover:neon-glow sm:flex-row sm:items-center sm:gap-6 sm:p-6"
            >
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20 sm:h-14 sm:w-14">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-muted-foreground font-light">{item.desc}</p>
              </div>
              <ArrowUpRight className="hidden w-5 h-5 text-primary opacity-0 transition-opacity group-hover:opacity-100 sm:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RevenueImpact;

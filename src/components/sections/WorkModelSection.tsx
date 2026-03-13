import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Megaphone, Settings } from "lucide-react";

const pillars = [
  {
    icon: Target,
    title: "Strategic Admission Support",
    desc: "End-to-end NEET student funnel from awareness to enrollment with data-driven targeting.",
  },
  {
    icon: Megaphone,
    title: "Branding & Marketing",
    desc: "Building institutional reputation through digital-first storytelling and multi-channel campaigns.",
  },
  {
    icon: Settings,
    title: "Process Optimization",
    desc: "Streamlined operations, CRM deployment, and conversion tracking for measurable outcomes.",
  },
];

const WorkModelSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20 space-y-4"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-primary font-medium">
            How We Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold">
            Three Pillars of <span className="text-primary text-glow">Growth</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.15 }}
              className="glass glass-hover rounded-2xl p-8 group hover:neon-glow transition-all duration-500 relative"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <pillar.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{pillar.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed font-light">{pillar.desc}</p>

              {/* Connector line */}
              {i < 2 && (
                <div className="hidden md:block absolute -right-3 top-1/2 w-6 h-px bg-primary/30" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkModelSection;

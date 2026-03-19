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
    <section ref={ref} id="process" className="section-shell">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="section-heading"
        >
          <span className="section-kicker">What & How Do We Work?</span>
          <h2 className="section-title">
            Three Pillars of <span className="text-primary text-glow">Growth</span>
          </h2>
          <p className="section-copy mx-auto max-w-2xl">
            100% Seats Filling + Brand Building in Ayurveda Industry + Complete Process
Optimization

          </p>
        </motion.div>

        <div className="mx-auto grid max-w-5xl gap-4 sm:gap-6 md:grid-cols-3">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.15 }}
              className="relative rounded-2xl p-6 transition-all duration-500 glass glass-hover group hover:neon-glow sm:p-8"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20 sm:mb-6 sm:h-14 sm:w-14">
                <pillar.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="mb-3 text-lg font-semibold sm:text-xl">{pillar.title}</h3>
              <p className="text-sm font-light leading-relaxed text-muted-foreground">{pillar.desc}</p>

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

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle, TrendingUp, Shield } from "lucide-react";
import EnhancedCard from "@/components/ui/EnhancedCard";

const benefits = [
  {
    icon: CheckCircle,
    title: "100% Seat Fulfillment",
    desc: "Guaranteed full enrollment capacity through our proven funnel system.",
    stat: "100%",
  },
  {
    icon: TrendingUp,
    title: "Reputation Growth",
    desc: "Elevate brand perception among students, parents, and governing bodies.",
    stat: "3x",
  },
  {
    icon: Shield,
    title: "Operational Efficiency",
    desc: "Reduce administrative costs and improve admission cycle time by 60%.",
    stat: "60%",
  },
];

const BenefitsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-shell">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="section-heading"
        >
          <span className="section-kicker">Why CareerKick</span>
          <h2 className="section-title">
            Measurable <span className="text-primary text-glow">Benefits</span>
          </h2>
        </motion.div>

        <div className="mx-auto grid max-w-5xl gap-4 sm:gap-6 lg:grid-cols-3 lg:gap-8">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.15 }}
              className="rounded-2xl p-6 text-center transition-all duration-500 glass glass-hover group hover:neon-glow sm:p-8"
            >
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 transition-colors group-hover:bg-primary/20 sm:mb-6 sm:h-16 sm:w-16">
                <b.icon className="w-7 h-7 text-primary" />
              </div>
              <p className="mb-2 text-3xl font-bold text-primary counter-glow sm:text-4xl">{b.stat}</p>
              <h3 className="text-lg font-semibold mb-3">{b.title}</h3>
              <p className="text-muted-foreground text-sm font-light leading-relaxed">{b.desc}</p>
            </motion.div>
          ))}
        </div>

        <EnhancedCard />
      </div>
    </section>
  );
};

export default BenefitsSection;

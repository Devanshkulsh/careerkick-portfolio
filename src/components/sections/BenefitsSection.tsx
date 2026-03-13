import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle, TrendingUp, Shield } from "lucide-react";

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
    <section ref={ref} className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20 space-y-4"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-primary font-medium">
            Why CareerKick
          </span>
          <h2 className="text-4xl md:text-5xl font-bold">
            Measurable <span className="text-primary text-glow">Benefits</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.15 }}
              className="glass glass-hover rounded-2xl p-8 text-center group hover:neon-glow transition-all duration-500"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <b.icon className="w-7 h-7 text-primary" />
              </div>
              <p className="text-4xl font-bold text-primary counter-glow mb-2">{b.stat}</p>
              <h3 className="text-lg font-semibold mb-3">{b.title}</h3>
              <p className="text-muted-foreground text-sm font-light leading-relaxed">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;

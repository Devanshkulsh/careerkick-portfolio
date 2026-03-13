import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const cases = [
  {
    college: "SKR Ayurved Medical College",
    before: "42% seats vacant, no digital presence",
    after: "100% enrollment, 3x brand visibility",
    timeline: "8 months",
  },
  {
    college: "Dhanvantari Ayurved Institute",
    before: "Low NEET funnel conversion, 28% admission rate",
    after: "92% admission rate, 5x enquiry volume",
    timeline: "6 months",
  },
  {
    college: "Himalayiya University",
    before: "Declining reputation, minimal student intake",
    after: "Full capacity, regional brand authority",
    timeline: "12 months",
  },
];

const CaseStudiesSection = () => {
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
            Proof of Impact
          </span>
          <h2 className="text-4xl md:text-5xl font-bold">
            Transformation <span className="text-primary text-glow">Stories</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {cases.map((c, i) => (
            <motion.div
              key={c.college}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.15 }}
              className="glass rounded-2xl overflow-hidden group hover:neon-glow transition-all duration-500"
            >
              <div className="p-8 space-y-6">
                <h3 className="text-lg font-semibold">{c.college}</h3>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <span className="text-xs font-medium tracking-widest uppercase text-muted-foreground">
                      Before
                    </span>
                    <p className="text-sm text-muted-foreground font-light">{c.before}</p>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="h-px flex-1 bg-primary/20" />
                    <ArrowRight className="w-4 h-4 text-primary" />
                    <div className="h-px flex-1 bg-primary/20" />
                  </div>

                  <div className="space-y-2">
                    <span className="text-xs font-medium tracking-widest uppercase text-primary">
                      After
                    </span>
                    <p className="text-sm text-foreground font-medium">{c.after}</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-border">
                  <span className="text-xs text-muted-foreground">Timeline: </span>
                  <span className="text-xs text-primary font-semibold">{c.timeline}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;

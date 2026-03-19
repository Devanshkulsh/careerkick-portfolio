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
    <section ref={ref} className="section-shell">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="section-heading"
        >
          <span className="section-kicker">Proof of Impact</span>
          <h2 className="section-title">
            Transformation <span className="text-primary text-glow">Stories</span>
          </h2>
        </motion.div>

        <div className="mx-auto grid max-w-6xl gap-4 sm:gap-6 lg:grid-cols-3">
          {cases.map((c, i) => (
            <motion.div
              key={c.college}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.15 }}
              className="overflow-hidden rounded-2xl transition-all duration-500 glass group hover:neon-glow"
            >
              <div className="space-y-5 p-5 sm:space-y-6 sm:p-8">
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

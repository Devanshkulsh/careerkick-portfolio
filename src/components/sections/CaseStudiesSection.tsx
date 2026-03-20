import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Spotlight } from "../ui/Spotlight";

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

  // Custom premium easing curve for smooth animations
  const customEase = [0.22, 1, 0.36, 1];

  return (
    <section ref={ref} className="section-shell relative z-0 overflow-hidden">
      <div
        className={cn(
          "pointer-events-none absolute inset-0 z-0 [background-size:40px_40px] select-none",
          "[background-image:linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)]"
        )}
      />
            {/* Spotlight Effects */}
            <Spotlight
              className="-top-40 left-0 md:-top-20 md:left-60"
              fill="hsl(var(--primary))"
            />
      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: customEase }}
          className="section-heading"
        >
          <span className="section-kicker">Proof of Impact</span>
          <h2 className="section-title">
            Transformation{" "}
            <span className="text-primary text-glow">Stories</span>
          </h2>
        </motion.div>

        <div className="mx-auto grid max-w-6xl gap-4 sm:gap-6 lg:grid-cols-3">
          {cases.map((c, i) => (
            <motion.div
              key={c.college}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.2 + i * 0.15,
                ease: customEase,
              }}
              whileHover={{ y: -8 }}
              className="relative overflow-hidden rounded-2xl transition-all duration-500 glass group hover:neon-glow"
            >
              {/* Subtle hover background highlight gradient */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Corner Glow effect on hover */}
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/20 blur-[3rem] transition-opacity duration-700 opacity-0 group-hover:opacity-100" />

              <div className="relative z-10 space-y-5 p-5 sm:space-y-6 sm:p-8">
                <h3 className="text-lg font-semibold transition-colors duration-300 group-hover:text-primary">
                  {c.college}
                </h3>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <span className="text-xs font-medium tracking-widest uppercase text-muted-foreground">
                      Before
                    </span>
                    <p className="text-sm text-muted-foreground font-light">
                      {c.before}
                    </p>
                  </div>

                  {/* Animated connection lines and arrow */}
                  <div className="flex items-center gap-3">
                    <motion.div
                      initial={{ scaleX: 0, originX: 0 }}
                      animate={inView ? { scaleX: 1 } : {}}
                      transition={{
                        duration: 0.8,
                        delay: 0.5 + i * 0.15,
                        ease: "easeInOut",
                      }}
                      className="h-px flex-1 bg-primary/20"
                    />

                    <motion.div
                      initial={{ opacity: 0, scale: 0, x: -10 }}
                      animate={inView ? { opacity: 1, scale: 1, x: 0 } : {}}
                      transition={{
                        duration: 0.5,
                        delay: 0.8 + i * 0.15,
                        type: "spring",
                        stiffness: 200,
                      }}
                    >
                      <ArrowRight className="w-4 h-4 text-primary transition-transform duration-300 ease-out group-hover:translate-x-1.5 group-hover:scale-110" />
                    </motion.div>

                    <motion.div
                      initial={{ scaleX: 0, originX: 0 }}
                      animate={inView ? { scaleX: 1 } : {}}
                      transition={{
                        duration: 0.8,
                        delay: 0.6 + i * 0.15,
                        ease: "easeInOut",
                      }}
                      className="h-px flex-1 bg-primary/20"
                    />
                  </div>

                  <div className="space-y-2">
                    <span className="text-xs font-medium tracking-widest uppercase text-primary drop-shadow-[0_0_8px_rgba(var(--primary),0.3)]">
                      After
                    </span>
                    <p className="text-sm text-foreground font-medium">
                      {c.after}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-border/60">
                  <span className="text-xs text-muted-foreground">
                    Timeline:{" "}
                  </span>
                  <span className="text-xs text-primary font-semibold">
                    {c.timeline}
                  </span>
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

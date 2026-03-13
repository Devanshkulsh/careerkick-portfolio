import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const PositioningSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center space-y-8"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-primary font-medium">
            Who We Are
          </span>
          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            An established organization
            <br />
            <span className="text-muted-foreground font-light">
              specializing in{" "}
              <span className="text-primary text-glow">BAMS admissions</span>
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-light leading-relaxed">
            We combine strategic marketing, deep domain expertise, and institutional partnerships 
            to transform how Ayurveda colleges attract, enroll, and retain students across India.
          </p>
        </motion.div>

        {/* Floating feature pills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mt-16"
        >
          {[
            "NEET Funnel Marketing",
            "College Branding",
            "Admission Strategy",
            "Institutional Growth",
            "Student Counseling",
            "Digital Outreach",
          ].map((item, i) => (
            <motion.span
              key={item}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 + i * 0.08 }}
              className="glass glass-hover rounded-full px-6 py-3 text-sm text-muted-foreground hover:text-foreground transition-colors cursor-default"
            >
              {item}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PositioningSection;

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const PositioningSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="about" className="section-shell overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-4xl space-y-6 text-center sm:space-y-8"
        >
          <span className="section-kicker">Who We Are</span>
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight">
            An established organization
            <br />
            <span className="text-muted-foreground font-light">
              specializing in{" "}
              <span className="text-primary text-glow">BAMS admissions</span>
            </span>
          </h2>
          <p className="section-copy max-w-2xl mx-auto">
            We combine strategic marketing, deep domain expertise, and institutional partnerships
            to transform how Ayurveda colleges attract, enroll, and retain students across India.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10 flex flex-wrap justify-center gap-3 sm:mt-16 sm:gap-4"
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
              className="cursor-default rounded-full px-4 py-2.5 text-center text-xs text-muted-foreground transition-colors glass glass-hover hover:text-foreground sm:px-6 sm:py-3 sm:text-sm"
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

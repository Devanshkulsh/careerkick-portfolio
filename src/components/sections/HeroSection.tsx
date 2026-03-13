import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.4, 0.25, 1] } },
};

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden noise-overlay gradient-mesh">
      <div className="container relative z-10 mx-auto px-6 py-20 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Typography storytelling */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <motion.div variants={fadeUp} className="flex items-center gap-3">
              <span className="h-px w-12 bg-primary" />
              <span className="text-sm font-medium tracking-widest uppercase text-primary">
                Since 2017
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-[clamp(2.5rem,6vw,5.5rem)] font-extrabold leading-[0.95] tracking-tight"
            >
              Shaping &<br />
              <span className="text-primary text-glow">Transforming</span>
              <br />
              <span className="text-muted-foreground text-[0.55em] font-light">
                Ayurveda Education Industry
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-lg text-muted-foreground max-w-md leading-relaxed font-light"
            >
              India's most trusted partner for NEET visibility, BAMS admissions, 
              and institutional growth strategy.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 pt-4">
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-sm tracking-wide hover:neon-glow-strong transition-shadow duration-300"
              >
                Partner With Us
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#achievements"
                className="group inline-flex items-center gap-3 glass glass-hover px-8 py-4 rounded-full font-medium text-sm tracking-wide text-foreground transition-all duration-300"
              >
                <Play className="w-4 h-4 text-primary" />
                View Impact
              </a>
            </motion.div>
          </motion.div>

          {/* Right — Floating stacked cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
            className="relative hidden lg:flex items-center justify-center h-[500px]"
          >
            {[
              { label: "1 Lac+", sub: "Allotments", rotate: -8, x: -40, y: -30 },
              { label: "10 Lac+", sub: "Students Reached", rotate: 4, x: 30, y: 20 },
              { label: "1000+", sub: "Institutional Tieups", rotate: -2, x: -10, y: 70 },
            ].map((card, i) => (
              <motion.div
                key={card.label}
                className="absolute glass rounded-2xl p-8 w-56"
                initial={{ opacity: 0, y: 60 }}
                animate={{
                  opacity: 1,
                  y: card.y,
                  x: card.x,
                  rotate: card.rotate,
                }}
                transition={{ duration: 0.9, delay: 0.6 + i * 0.15, ease: [0.25, 0.4, 0.25, 1] }}
                whileHover={{ scale: 1.06, rotate: 0 }}
              >
                <p className="text-3xl font-bold text-primary counter-glow">{card.label}</p>
                <p className="text-sm text-muted-foreground mt-1">{card.sub}</p>
              </motion.div>
            ))}

            {/* Glow orb */}
            <div className="absolute w-72 h-72 rounded-full bg-primary/5 blur-[100px] pointer-events-none" />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="text-xs text-muted-foreground tracking-widest uppercase">Scroll</span>
        <motion.div
          className="w-px h-8 bg-primary/40"
          animate={{ scaleY: [1, 0.3, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;

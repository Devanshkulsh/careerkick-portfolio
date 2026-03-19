import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.4, 0.25, 1] },
  },
};

const heroCards = [
  { label: "1 Lac+", sub: "Allotments", rotate: -8, x: -40, y: -30 },
  { label: "10 Lac+", sub: "Students Reached", rotate: 4, x: 30, y: 20 },
  { label: "1000+", sub: "Institutional Tieups", rotate: -2, x: -10, y: 70 },
];

const HeroSection = () => {
  return (
    <section
      id="about"
      className="relative flex min-h-screen items-center overflow-hidden noise-overlay gradient-mesh"
    >
      <div className="container relative z-10 mx-auto px-4 pt-28 pb-20 sm:px-6 sm:pt-32 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="space-y-6 sm:space-y-8"
          >
            <motion.div variants={fadeUp} className="flex items-center gap-3">
              <span className="h-px w-10 bg-primary sm:w-12" />
              <span className="text-xs font-medium uppercase tracking-[0.28em] text-primary sm:text-sm sm:tracking-widest">
                Since 2017
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="max-w-4xl text-[clamp(2.5rem,10vw,5.5rem)] font-extrabold leading-[0.95] tracking-tight"
            >
              Shaping &<br />
              <span className="text-primary text-glow">Transforming</span>
              <br />
              <span className="text-[0.55em] font-light text-muted-foreground">
                Ayurveda Education Industry
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="max-w-xl text-base font-light leading-relaxed text-muted-foreground sm:text-lg"
            >
              India's most trusted partner for NEET visibility, BAMS admissions, and
              institutional growth strategy.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap sm:gap-4 sm:pt-4"
            >
              <a
                href="#contact"
                className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold tracking-wide text-primary-foreground transition-shadow duration-300 hover:neon-glow-strong sm:px-8 sm:py-4"
              >
                Partner With Us
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#achievements"
                className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full px-6 py-3.5 text-sm font-medium tracking-wide text-foreground transition-all duration-300 glass glass-hover sm:px-8 sm:py-4"
              >
                <Play className="h-4 w-4 text-primary" />
                View Impact
              </a>
            </motion.div>
          </motion.div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="grid gap-4 sm:grid-cols-3 lg:hidden"
            >
              {heroCards.map((card, index) => (
                <motion.div
                  key={card.label}
                  className="glass rounded-2xl p-5 sm:p-6"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.65 + index * 0.12 }}
                >
                  <p className="text-2xl font-bold text-primary counter-glow sm:text-3xl">
                    {card.label}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">{card.sub}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
              className="relative hidden min-h-[500px] items-center justify-center lg:flex"
            >
              {heroCards.map((card, index) => (
                <motion.div
                  key={card.label}
                  className="absolute w-56 rounded-2xl p-8 glass"
                  initial={{ opacity: 0, y: 60 }}
                  animate={{
                    opacity: 1,
                    y: card.y,
                    x: card.x,
                    rotate: card.rotate,
                  }}
                  transition={{
                    duration: 0.9,
                    delay: 0.6 + index * 0.15,
                    ease: [0.25, 0.4, 0.25, 1],
                  }}
                  whileHover={{ scale: 1.06, rotate: 0 }}
                >
                  <p className="text-3xl font-bold text-primary counter-glow">{card.label}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{card.sub}</p>
                </motion.div>
              ))}

              <div className="pointer-events-none absolute h-72 w-72 rounded-full bg-primary/5 blur-[100px]" />
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="text-xs uppercase tracking-widest text-muted-foreground">Scroll</span>
        <motion.div
          className="h-8 w-px bg-primary/40"
          animate={{ scaleY: [1, 0.3, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;

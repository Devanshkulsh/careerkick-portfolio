import { AnimatePresence, motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import AdmissionFunnelCard from "@/components/sections/AdmissionFunnelCard";

const positioningTabs = [
  {
    label: "NEET Funnel Marketing",
    image: "/desktop.png",
    heading: "Demand Engine for Ayurveda Admissions",
    description:
      "Performance-led campaign architecture that captures, nurtures, and converts qualified NEET aspirants at scale.",
  },
  {
    label: "College Branding",
    image: "/desktop.png",
    heading: "Brand Storytelling That Builds Trust",
    description:
      "High-impact brand positioning across creative, communication, and digital touchpoints to improve preference and recall.",
  },
  {
    label: "Admission Strategy",
    image: "/desktop.png",
    heading: "Precision Counseling and Conversion Flow",
    description:
      "Counseling-first frameworks with decision-stage messaging to lift seat occupancy and reduce funnel drop-offs.",
  },
  {
    label: "Institutional Growth",
    image: "/desktop.png",
    heading: "Scalable Growth Built with Leadership Teams",
    description:
      "Institution-first planning and execution models that align marketing outcomes with long-term campus growth goals.",
  },
  {
    label: "Student Counseling",
    image: "/desktop.png",
    heading: "Human-Centered Guidance Journeys",
    description:
      "Structured counseling pathways that answer parent and student concerns with clarity, confidence, and speed.",
  },
  {
    label: "Digital Outreach",
    image: "/desktop.png",
    heading: "Always-On Multi-Channel Outreach",
    description:
      "Social, content, and paid channel orchestration engineered to keep your institution visible through the full admission cycle.",
  },
];

const slideVariants = {
  enter: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? 72 : -72,
    scale: 0.985,
    filter: "blur(4px)",
  }),
  center: {
    opacity: 1,
    x: 0,
    scale: 1,
    filter: "blur(0px)",
  },
  exit: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? -56 : 56,
    scale: 1.01,
    filter: "blur(3px)",
  }),
};

const panelTransition = {
  duration: 0.62,
  ease: [0.22, 1, 0.36, 1] as const,
};

const PositioningSection = () => {
  const ref = useRef(null);
  const funnelCardRef = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const funnelInView = useInView(funnelCardRef, {
    amount: 0.35,
    margin: "-60px 0px -60px 0px",
  });
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [funnelChartRun, setFunnelChartRun] = useState(0);

  const activeTab = positioningTabs[activeIndex];

  const handleTabClick = (index: number) => {
    if (index === activeIndex) return;
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  };

  useEffect(() => {
    if (activeIndex === 0 && funnelInView) {
      setFunnelChartRun((current) => current + 1);
    }
  }, [activeIndex, funnelInView]);

  return (
    <section ref={ref} id="about" className="section-shell overflow-hidden">
      <div className="container mx-auto px-3 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-4xl space-y-6 text-center sm:space-y-8"
        >
          <span className="section-kicker">Who We Are</span>
          <h2 className="text-2xl font-bold leading-tight sm:text-4xl lg:text-6xl">
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
          className="mt-10 sm:mt-16"
        >
          <div className="-mx-3 px-3 sm:mx-0 sm:px-0">
            <div className="overflow-x-auto overflow-y-visible py-2 sm:py-3 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
              <div className="mx-auto flex w-max min-w-full snap-x snap-mandatory justify-start gap-2 pr-3 sm:w-auto sm:min-w-0 sm:flex-wrap sm:justify-center sm:gap-4 sm:pr-0">
              {positioningTabs.map((tab, i) => (
                <motion.button
                  key={tab.label}
                  type="button"
                  onClick={() => handleTabClick(i)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.08 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className={`relative snap-start shrink-0 overflow-hidden whitespace-nowrap rounded-full px-3 py-2 text-center text-[11px] transition-all duration-300 sm:px-6 sm:py-3 sm:text-sm ${
                    activeIndex === i
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  } glass glass-hover`}
                >
                  {activeIndex === i && (
                    <motion.span
                      layoutId="active-positioning-tab"
                      className="absolute inset-0 -z-10 rounded-full bg-primary/20"
                      transition={{ type: "spring", stiffness: 280, damping: 24 }}
                    />
                  )}
                  {tab.label}
                </motion.button>
              ))}
              </div>
            </div>
          </div>
        </motion.div>

        <div className="relative mx-auto mt-8 max-w-6xl sm:mt-12">
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-x-6 -top-10 h-20 bg-primary/20 blur-3xl"
            animate={{ opacity: [0.3, 0.65, 0.3], scale: [0.96, 1.04, 0.96] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/30 p-1.5 shadow-[0_25px_80px_rgba(0,0,0,0.6)] sm:rounded-3xl sm:p-3">
            <div
              className={`relative overflow-hidden rounded-[1rem] sm:rounded-[1.35rem] ${
                activeIndex === 0
                  ? "min-h-fit"
                  : "aspect-[5/6] sm:aspect-[16/10] lg:aspect-[2.2/1]"
              }`}
            >
              <motion.div
                aria-hidden="true"
                className="absolute -left-16 top-0 h-40 w-40 rounded-full bg-primary/25 blur-3xl sm:-left-20 sm:h-64 sm:w-64"
                animate={{ x: [0, 80, 0], y: [0, 20, 0] }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                aria-hidden="true"
                className="absolute -bottom-12 right-0 h-44 w-44 rounded-full bg-cyan-500/20 blur-3xl sm:-bottom-16 sm:h-72 sm:w-72"
                animate={{ x: [0, -60, 0], y: [0, -24, 0] }}
                transition={{ duration: 13, delay: 0.6, repeat: Infinity, ease: "easeInOut" }}
              />

              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={activeTab.label}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={panelTransition}
                  className={activeIndex === 0 ? "relative" : "absolute inset-0"}
                >
                  {activeIndex === 0 ? (
                    <motion.div
                      ref={funnelCardRef}
                      className="relative p-3 sm:p-5"
                      initial={{ opacity: 0, y: 18 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.45, ease: "easeOut" }}
                    >
                      <AdmissionFunnelCard
                        animate={funnelInView}
                        chartKey={`positioning-funnel-${funnelChartRun}`}
                      />
                    </motion.div>
                  ) : (
                    <>
                      <motion.img
                        src={activeTab.image}
                        alt={activeTab.heading}
                        className="h-full w-full object-cover"
                        initial={{ scale: 1.06 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" />
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.16),transparent_35%),radial-gradient(circle_at_80%_75%,rgba(163,230,53,0.16),transparent_40%)]" />

                      <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.08, ease: "easeOut" }}
                        className="absolute bottom-0 left-0 w-full p-4 sm:p-8 lg:max-w-3xl"
                      >
                        <p className="mb-2 text-[0.6rem] uppercase tracking-[0.24em] text-primary sm:text-xs sm:tracking-[0.3em]">
                          {activeTab.label}
                        </p>
                        <h3 className="text-lg font-semibold leading-tight sm:text-3xl lg:text-4xl">
                          {activeTab.heading}
                        </h3>
                        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/80 sm:mt-4 sm:text-base">
                          {activeTab.description}
                        </p>
                      </motion.div>
                    </>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PositioningSection;

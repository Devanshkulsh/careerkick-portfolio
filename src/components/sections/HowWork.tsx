"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Target, Megaphone, Settings } from "lucide-react";
import { cn } from "@/lib/utils"; // Assuming you have standard shadcn cn utility

const pillars = [
  {
    icon: Target,
    title: "Strategic Admission Support",
    desc: "Targeted student outreach based on NEET ranks and serious admission intent.",
    image: "/admission-support.png",
    label: "Admission Support",
  },
  {
    icon: Megaphone,
    title: "Branding & Marketing",
    desc: "Positioning colleges as top choices for BAMS aspirants through sharper visibility and trust.",
    image: "/branding.png",
    label: "Branding & Marketing",
  },
  {
    icon: Settings,
    title: "Process Optimization",
    desc: "Organizing admission processes for transparency, faster follow-ups, and better conversion flow.",
    image: "/process-optimization.png",
    label: "Process Optimization",
  },
];

const HowWork = () => {
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(0);
  const activePillar = pillars[activeIndex];

  return (
    <section ref={ref} id="process" className="section-shell relative overflow-hidden py-16">
      {/* Background Glows */}
      <div className="absolute left-1/2 top-16 h-52 w-[72%] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px] pointer-events-none" />
      <div className="absolute right-12 top-24 h-40 w-40 rounded-full bg-cyan-400/10 blur-[100px] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="section-heading mx-auto max-w-3xl text-center"
        >
          <span className="section-kicker text-primary mb-4 block text-sm font-semibold uppercase tracking-widest">
            Three Pillars of Growth
          </span>
          <h2 className="section-title mb-6 text-4xl font-bold md:text-5xl">
            WHAT & HOW DO WE <span className="text-primary drop-shadow-[0_0_15px_rgba(var(--primary),0.5)]">WORK?</span>
          </h2>
          <p className="section-copy mx-auto max-w-2xl text-lg text-muted-foreground">
            100% seats filling, brand building in the Ayurveda industry, and a
            complete admission process that stays structured from enquiry to conversion.
          </p>
        </motion.div>

        {/* 2-Column Layout */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="mx-auto mt-12 grid max-w-6xl gap-8 lg:grid-cols-12 lg:items-start"
        >
          {/* Left Column: Tabs */}
          <div className="order-2 flex flex-col gap-4 lg:order-1 lg:col-span-5">
            <div className="mb-2 hidden lg:block">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary/80">
                Growth Model
              </p>
              <p className="mt-2 text-sm font-light text-muted-foreground">
                Select a pillar to see how we drive results.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              {pillars.map((pillar, index) => {
                const isActive = activeIndex === index;
                const PillarIcon = pillar.icon;

                return (
                  <button
                    key={pillar.title}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className={cn(
                      "group relative flex w-full flex-col items-start rounded-[1.5rem] border p-5 text-left transition-all duration-300 sm:p-6",
                      isActive
                        ? "border-primary/50 bg-primary/10 shadow-[0_0_20px_rgba(var(--primary),0.1)]"
                        : "border-white/10 bg-white/5 hover:bg-white/10"
                    )}
                  >
                    <div className="flex w-full items-center gap-4">
                      <div
                        className={cn(
                          "flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl transition-colors duration-300",
                          isActive
                            ? "bg-primary/20 text-primary"
                            : "bg-white/10 text-muted-foreground group-hover:text-foreground"
                        )}
                      >
                        <PillarIcon className="h-6 w-6" />
                      </div>
                      <h3
                        className={cn(
                          "text-lg font-bold transition-colors duration-300",
                          isActive ? "text-white" : "text-muted-foreground group-hover:text-white"
                        )}
                      >
                        {pillar.title}
                      </h3>
                    </div>

                    {/* Animated Description (Expands when active) */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ height: 0, opacity: 0, mt: 0 }}
                          animate={{ height: "auto", opacity: 1, mt: 16 }}
                          exit={{ height: 0, opacity: 0, mt: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <p className="text-sm leading-relaxed text-slate-300 pl-16">
                            {pillar.desc}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Active Border Indicator */}
                    {isActive && (
                      <motion.div
                        layoutId="activePillarOutline"
                        className="absolute inset-0 rounded-[1.5rem] border-2 border-primary/50"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Image Display */}
          <div className="order-1 lg:order-2 lg:col-span-7 lg:sticky lg:top-24">
            <div className="overflow-hidden rounded-[2.5rem] border border-white/10 bg-black/20 p-2 glass sm:p-4">
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-black/40">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activePillar.title}
                    initial={{ opacity: 0, scale: 0.95, filter: "blur(4px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0, scale: 1.05, filter: "blur(4px)" }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="relative aspect-[4/3] w-full lg:aspect-[16/11]"
                  >
                    <img
                      src={activePillar.image}
                      alt={activePillar.title}
                      className="h-full w-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    
                    {/* Label Overlay */}
                    <div className="absolute bottom-6 left-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-black/60 px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-primary backdrop-blur-md">
                      {activePillar.label}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowWork;

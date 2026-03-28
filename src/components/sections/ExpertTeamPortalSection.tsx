"use client";

import {
  motion,
  useInView,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { Monitor, Users } from "lucide-react";
import { useRef } from "react";

export default function ExpertTeamPortalSection(): JSX.Element {
  const sectionRef = useRef<HTMLElement | null>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-120px" });
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    mass: 0.6,
  });
  const haloY = useTransform(smoothProgress, [0, 1], [40, -40]);
  const haloScale = useTransform(smoothProgress, [0, 1], [0.95, 1.05]);
  const cardY = useTransform(smoothProgress, [0, 1], [30, -30]);
  const imageY = useTransform(smoothProgress, [0, 1], [18, -18]);

  return (
    <section
      ref={sectionRef}
      className="section-shell relative overflow-hidden"
      style={{
        color: "#0f172a",
        background:
          "linear-gradient(180deg, rgba(244,250,252,0.98) 0%, rgba(232,242,247,0.98) 100%), radial-gradient(circle at 16% 20%, rgba(255,255,255,0.95) 0%, transparent 24%), radial-gradient(circle at 82% 18%, rgba(175,229,255,0.42) 0%, transparent 28%), radial-gradient(circle at 28% 82%, rgba(214,255,238,0.42) 0%, transparent 28%), radial-gradient(circle at 86% 82%, rgba(184,212,255,0.25) 0%, transparent 26%)",
      }}
    >
      <motion.div
        className="absolute left-1/2 top-8 h-44 w-[84%] -translate-x-1/2 rounded-full blur-3xl"
        style={{
          background: "rgba(94,127,0,0.12)",
          y: haloY,
          scale: haloScale,
        }}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.div
        className="absolute right-6 top-16 h-36 w-36 rounded-full blur-3xl"
        style={{ background: "rgba(94,127,0,0.08)" }}
        animate={{ y: [0, -16, 0], scale: [1, 1.06, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 left-8 h-28 w-28 rounded-full blur-3xl"
        style={{ background: "rgba(94,127,0,0.07)" }}
        animate={{ y: [0, 18, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
      />

      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        <motion.div
          className="mx-auto max-w-4xl text-center"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="section-kicker" style={{ color: "#4d6b00" }}>
            People & Platform
          </span>
          <h2 className="section-title mt-4">
            Built by <span style={{ color: "#5e7f00" }}>300+ Experts</span>, powered by
            our LMS.
          </h2>
          <p className="section-copy mx-auto mt-4 max-w-2xl" style={{ color: "#334155" }}>
            A dedicated team and a single portal that keeps every workflow aligned.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-10">
          <motion.article
            className="group relative overflow-hidden rounded-[2rem] border border-slate-300/90 bg-white/90 p-8 shadow-[0_18px_40px_rgba(31,41,55,0.12)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ scale: 1.01 }}
            style={{ y: cardY }}
          >
            <div
              className="absolute right-6 top-6 h-20 w-20 rounded-full blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              style={{ background: "rgba(94,127,0,0.18)" }}
            />
            <div className="flex items-center gap-4">
              <div
                className="flex h-12 w-12 items-center justify-center rounded-2xl"
                style={{ border: "1px solid rgba(94,127,0,0.25)", background: "rgba(94,127,0,0.12)", color: "#5e7f00" }}
              >
                <Users className="h-6 w-6" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em]" style={{ color: "#5b7c14" }}>
                  Expert Force
                </p>
                <p className="text-3xl font-semibold sm:text-4xl" style={{ color: "#0f172a" }}>
                  Team of 300+ experts
                </p>
              </div>
            </div>
            <p className="mt-6 text-sm leading-relaxed sm:text-base" style={{ color: "#334155" }}>
              Specialists across admissions, marketing, counseling, and operations work in
              sync to deliver consistent outcomes.
            </p>
            <motion.div
              className="mt-6 grid gap-3 sm:grid-cols-3"
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 6 }}
              transition={{ duration: 0.6, delay: 0.24 }}
            >
              {["Admissions", "Marketing", "Operations"].map((pill) => (
                <div
                  key={pill}
                  className="rounded-2xl border border-slate-200/70 bg-white/70 px-4 py-3 text-xs font-semibold uppercase tracking-[0.22em]"
                  style={{ color: "#4d6b00" }}
                >
                  {pill}
                </div>
              ))}
            </motion.div>
          </motion.article>

          <motion.article
            className="group relative overflow-hidden rounded-[2rem] border border-slate-300/90 bg-white/90 p-6 shadow-[0_18px_40px_rgba(31,41,55,0.12)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 sm:p-8"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ duration: 0.7, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ scale: 1.01 }}
          >
            <div
              className="absolute left-6 top-6 h-20 w-20 rounded-full blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              style={{ background: "rgba(94,127,0,0.18)" }}
            />
            <div className="mb-5 flex items-center gap-3">
              <div
                className="flex h-11 w-11 items-center justify-center rounded-2xl"
                style={{ border: "1px solid rgba(94,127,0,0.25)", background: "rgba(94,127,0,0.12)", color: "#5e7f00" }}
              >
                <Monitor className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em]" style={{ color: "#5b7c14" }}>
                  LMS Portal
                </p>
                <p className="text-lg font-semibold" style={{ color: "#0f172a" }}>
                  Manage everything in one place
                </p>
              </div>
            </div>

            <motion.div
              className="relative overflow-hidden rounded-[1.6rem] border border-slate-200/80 bg-white/70 shadow-[0_20px_40px_rgba(15,23,42,0.12)]"
              style={{ y: imageY }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.img
                src="/desktop.png"
                alt="LMS portal dashboard preview"
                className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/10 via-transparent to-white/60" />
            </motion.div>

            <p className="mt-5 text-sm leading-relaxed sm:text-base" style={{ color: "#334155" }}>
              This is our LMS portal for managing admissions, student communication, and
              performance reporting through one unified system.
            </p>
          </motion.article>
        </div>
      </div>
    </section>
  );
}

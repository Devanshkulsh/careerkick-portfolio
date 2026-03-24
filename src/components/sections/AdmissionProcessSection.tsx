import { motion, useInView } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  BriefcaseBusiness,
  Check,
  Sparkles,
} from "lucide-react";
import { useRef } from "react";

type ProcessStep = {
  title: string;
  description: string;
};

const processSteps: ProcessStep[] = [
  {
    title: "Initial Consultation",
    description: "Understanding college-specific needs and goals.",
  },
  {
    title: "Strategic Planning",
    description: "Developing customized admission and marketing plans.",
  },
  {
    title: "Implementation",
    description: "Executing branding campaigns and admission drives.",
  },
  {
    title: "Continuous Monitoring",
    description: "Tracking progress, refining efforts, and improving outcomes.",
  },
  {
    title: "Final Review",
    description: "Ensuring all seats are filled and stakeholders are satisfied.",
  },
];

export default function AdmissionProcessSection(): JSX.Element {
  const sectionRef = useRef<HTMLElement | null>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-120px" });

  return (
    <section
      ref={sectionRef}
      className="section-shell relative overflow-hidden"
      style={{
        color: "#0f172a",
        background:
          "linear-gradient(180deg, rgba(244,250,252,0.98) 0%, rgba(232,242,247,0.98) 100%)",
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 14% 18%, rgba(255,255,255,0.95) 0%, transparent 24%), radial-gradient(circle at 78% 16%, rgba(175,229,255,0.42) 0%, transparent 28%), radial-gradient(circle at 26% 78%, rgba(214,255,238,0.42) 0%, transparent 28%), radial-gradient(circle at 82% 82%, rgba(184,212,255,0.25) 0%, transparent 26%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-70"
        style={{
          background:
            "linear-gradient(115deg, rgba(255,255,255,0.62) 0%, rgba(255,255,255,0.14) 24%, rgba(173,224,255,0.18) 44%, rgba(255,255,255,0.08) 62%, rgba(255,255,255,0.58) 100%)",
        }}
      />
      <div className="absolute left-[18%] top-16 h-40 w-40 rounded-full bg-white/80 blur-3xl" />
      <div className="absolute right-[14%] top-24 h-48 w-48 rounded-full bg-sky-200/50 blur-3xl" />
      <div className="absolute bottom-12 left-1/2 h-44 w-3/5 -translate-x-1/2 rounded-full bg-emerald-100/45 blur-3xl" />
      <div className="absolute left-0 top-10 h-40 w-20 opacity-50">
        <DotGrid />
      </div>
      <div className="absolute bottom-0 right-0 h-40 w-20 opacity-50">
        <DotGrid />
      </div>
      <div className="absolute bottom-2 left-0 h-24 w-48 opacity-70">
        <svg viewBox="0 0 200 100" className="h-full w-full" aria-hidden="true">
          <path
            d="M 0 6 C 20 18, 28 52, 52 52 S 86 32, 102 44 S 126 88, 154 76 S 182 40, 200 96"
            fill="none"
            stroke="rgba(94,127,0,0.7)"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray="1 12"
          />
        </svg>
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        <motion.div
          className="mx-auto max-w-5xl text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="section-kicker text-[#4d6b00]">How We Execute</span>
          <h2 className="section-title mt-4 uppercase text-slate-950">
            Our Proven <span className="text-primary text-glow">Admission Process</span>
          </h2>
        </motion.div>

        <div className="mx-auto mt-12 grid max-w-7xl items-center gap-10 xl:grid-cols-[minmax(0,1.25fr)_minmax(360px,0.75fr)] xl:gap-14">
          <div className="space-y-5">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -32 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{
                  duration: 0.55,
                  delay: 0.1 + index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group"
              >
                <div className="inline-flex max-w-full items-center rounded-full border border-slate-200 bg-white/95 p-1 shadow-[0_14px_28px_rgba(15,23,42,0.12)] backdrop-blur-sm">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-primary/20 bg-primary/15 text-primary">
                    <Check className="h-4 w-4" strokeWidth={2.8} />
                  </div>
                  <p className="px-4 pr-5 text-sm font-bold uppercase tracking-[0.08em] text-slate-950 sm:text-base">
                    {step.title}
                  </p>
                </div>

                <div className="mt-2.5 rounded-full border border-slate-200 bg-white/92 px-5 py-4 shadow-[0_14px_28px_rgba(15,23,42,0.1),inset_0_1px_0_rgba(255,255,255,0.96)] transition-transform duration-300 group-hover:translate-x-1 sm:px-6">
                  <p className="text-sm font-medium leading-relaxed text-slate-800 sm:text-[1.05rem]">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 36 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-[430px]"
          >
            <div
              className="relative min-h-[500px] rounded-[2.25rem] border border-white/85 p-6 shadow-[0_30px_80px_rgba(15,23,42,0.18),inset_0_1px_0_rgba(255,255,255,0.96)]"
              style={{
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.84) 0%, rgba(255,255,255,0.62) 100%)",
                backdropFilter: "blur(14px)",
              }}
            >
              <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[#5e7f00]/50 to-transparent" />
              <div className="pointer-events-none absolute right-6 top-6 h-28 w-28 rounded-full bg-sky-100/70 blur-3xl" />
              <div className="pointer-events-none absolute bottom-8 left-6 h-24 w-24 rounded-full bg-emerald-100/60 blur-3xl" />
              <div className="absolute left-5 top-10 text-primary">
                <Sparkles className="h-7 w-7" strokeWidth={2.8} />
              </div>
              <div className="absolute right-8 top-10 flex items-center gap-3 text-primary">
                <ArrowRight className="h-10 w-10 text-slate-900" strokeWidth={1.8} />
                <div className="h-5 w-5 rounded-full bg-primary" />
              </div>
              <div className="absolute right-4 top-28 flex flex-col items-end gap-3 text-primary">
                <ArrowDown className="h-10 w-10 text-slate-900" strokeWidth={1.8} />
                <div className="h-4 w-4 rounded-md bg-primary/80" />
              </div>
              <div className="absolute left-4 top-28 text-slate-900">
                <ArrowDown className="h-10 w-10 rotate-180" strokeWidth={1.8} />
              </div>

              <div className="mx-auto mt-12 flex h-40 w-32 flex-col items-center justify-center rounded-[1.35rem] border border-slate-200 bg-white text-slate-950 shadow-[0_18px_36px_rgba(15,23,42,0.16)] sm:h-44 sm:w-36">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                  <BriefcaseBusiness className="h-9 w-9" strokeWidth={2.4} />
                </div>
                <p className="mt-3 text-center text-sm font-semibold uppercase tracking-[0.14em] text-slate-900">
                  Plan
                </p>
              </div>

              <div className="relative mt-8 flex items-end justify-center gap-8">
                <PersonFigure variant="left" />
                <PersonFigure variant="right" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function DotGrid(): JSX.Element {
  return (
    <div className="grid grid-cols-4 gap-2 p-2">
      {[...Array(32)].map((_, index) => (
        <span key={index} className="h-1 w-1 rounded-full bg-[#5e7f00]/70" />
      ))}
    </div>
  );
}

type PersonFigureProps = {
  variant: "left" | "right";
};

function PersonFigure({ variant }: PersonFigureProps): JSX.Element {
  const isLeft = variant === "left";

  return (
    <div className={`relative ${isLeft ? "w-[118px]" : "w-[104px]"}`}>
      <div className={`mx-auto rounded-full ${isLeft ? "h-10 w-10" : "h-9 w-9"} bg-slate-800`} />
      <div
        className={`mx-auto mt-1 rounded-t-[2.4rem] ${
          isLeft
            ? "h-28 w-20 rounded-b-[0.8rem] bg-[#8fae17]"
            : "h-24 w-14 rounded-b-[1.6rem] bg-[#a6c72a]"
        }`}
      />
      <div
        className={`absolute ${
          isLeft ? "left-7 top-[5.4rem] h-16 w-4" : "left-0 top-[6rem] h-16 w-5"
        } rotate-[22deg] rounded-full bg-[#c24b2d]`}
      />
      <div
        className={`absolute ${
          isLeft ? "right-4 top-[5.1rem] h-14 w-4" : "right-1 top-[5.8rem] h-14 w-4"
        } ${isLeft ? "-rotate-[25deg]" : "rotate-[28deg]"} rounded-full bg-[#c24b2d]`}
      />
      {!isLeft ? (
        <>
          <div className="absolute right-1 top-5 h-20 w-5 rounded-full bg-slate-800" />
          <div className="absolute right-[-2px] top-10 h-16 w-2 rounded-full bg-slate-800" />
          <div className="absolute right-4 top-11 h-14 w-2 rounded-full bg-slate-800" />
        </>
      ) : null}
      <div
        className={`mx-auto ${
          isLeft ? "mt-0 h-36 w-16" : "mt-[-0.4rem] h-40 w-14"
        } rounded-t-[1.4rem] bg-slate-800`}
      />
      <div className={`mx-auto mt-[-0.2rem] flex ${isLeft ? "w-20 gap-3" : "w-14 gap-2"} justify-center`}>
        <div className={`${isLeft ? "h-4 w-8" : "h-4 w-6"} rounded-t-sm bg-slate-800`} />
        <div className={`${isLeft ? "h-4 w-8" : "h-4 w-6"} rounded-t-sm bg-slate-800`} />
      </div>
      <div
        className={`absolute ${
          isLeft ? "left-[1.15rem] top-[17.4rem] h-4 w-6" : "left-[1.45rem] top-[17.6rem] h-4 w-5"
        } rounded-full bg-[#c24b2d]`}
      />
      <div
        className={`absolute ${
          isLeft ? "right-[1rem] top-[17.4rem] h-4 w-6" : "right-[0.9rem] top-[17.6rem] h-4 w-5"
        } rounded-full bg-[#c24b2d]`}
      />
    </div>
  );
}

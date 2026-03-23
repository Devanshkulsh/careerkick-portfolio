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
    <section ref={sectionRef} className="section-shell relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(196,255,59,0.14),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(196,255,59,0.12),transparent_26%)]" />
      <div className="absolute left-0 top-10 h-40 w-20 opacity-40">
        <DotGrid />
      </div>
      <div className="absolute bottom-0 right-0 h-40 w-20 opacity-40">
        <DotGrid />
      </div>
      <div className="absolute bottom-2 left-0 h-24 w-48 opacity-70">
        <svg viewBox="0 0 200 100" className="h-full w-full" aria-hidden="true">
          <path
            d="M 0 6 C 20 18, 28 52, 52 52 S 86 32, 102 44 S 126 88, 154 76 S 182 40, 200 96"
            fill="none"
            stroke="rgba(132,204,22,0.85)"
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
          <span className="section-kicker">How We Execute</span>
          <h2 className="section-title mt-4 uppercase text-foreground">
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
                <div className="inline-flex max-w-full items-center rounded-full border border-primary/70 bg-black/60 p-1 shadow-[0_10px_24px_rgba(0,0,0,0.28)] backdrop-blur-sm">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-primary/20 bg-primary/10 text-primary">
                    <Check className="h-4 w-4" strokeWidth={2.8} />
                  </div>
                  <p className="px-4 pr-5 text-sm font-semibold uppercase tracking-[0.08em] text-foreground sm:text-base">
                    {step.title}
                  </p>
                </div>

                <div className="mt-2.5 rounded-full border border-white/10 bg-gradient-to-b from-white/10 via-white/5 to-black px-5 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_12px_22px_rgba(0,0,0,0.24)] transition-transform duration-300 group-hover:translate-x-1 sm:px-6">
                  <p className="text-sm font-light leading-relaxed text-muted-foreground sm:text-[1.05rem]">
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
            <div className="glass relative min-h-[500px] rounded-[2.25rem] p-6">
              <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
              <div className="pointer-events-none absolute right-6 top-6 h-28 w-28 rounded-full bg-primary/8 blur-3xl" />
              <div className="pointer-events-none absolute bottom-8 left-6 h-24 w-24 rounded-full bg-primary/10 blur-3xl" />
              <div className="absolute left-5 top-10 text-primary">
                <Sparkles className="h-7 w-7" strokeWidth={2.8} />
              </div>
              <div className="absolute right-8 top-10 flex items-center gap-3 text-primary">
                <ArrowRight className="h-10 w-10 text-foreground/85" strokeWidth={1.8} />
                <div className="h-5 w-5 rounded-full bg-primary" />
              </div>
              <div className="absolute right-4 top-28 flex flex-col items-end gap-3 text-primary">
                <ArrowDown className="h-10 w-10 text-foreground/85" strokeWidth={1.8} />
                <div className="h-4 w-4 rounded-md bg-primary/80" />
              </div>
              <div className="absolute left-4 top-28 text-foreground/85">
                <ArrowDown className="h-10 w-10 rotate-180" strokeWidth={1.8} />
              </div>

              <div className="mx-auto mt-12 flex h-40 w-32 flex-col items-center justify-center rounded-[1.35rem] border border-primary/20 bg-secondary/80 text-foreground shadow-[0_18px_36px_rgba(0,0,0,0.24)] sm:h-44 sm:w-36">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                  <BriefcaseBusiness className="h-9 w-9" strokeWidth={2.4} />
                </div>
                <p className="mt-3 text-center text-sm font-medium uppercase tracking-[0.14em] text-foreground/85">
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
        <span key={index} className="h-1 w-1 rounded-full bg-primary" />
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
      <div className={`mx-auto rounded-full ${isLeft ? "h-10 w-10" : "h-9 w-9"} bg-foreground`} />
      <div
        className={`mx-auto mt-1 rounded-t-[2.4rem] ${
          isLeft
            ? "h-28 w-20 rounded-b-[0.8rem] bg-primary"
            : "h-24 w-14 rounded-b-[1.6rem] bg-primary/90"
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
          <div className="absolute right-1 top-5 h-20 w-5 rounded-full bg-foreground" />
          <div className="absolute right-[-2px] top-10 h-16 w-2 rounded-full bg-foreground" />
          <div className="absolute right-4 top-11 h-14 w-2 rounded-full bg-foreground" />
        </>
      ) : null}
      <div
        className={`mx-auto ${
          isLeft ? "mt-0 h-36 w-16" : "mt-[-0.4rem] h-40 w-14"
        } rounded-t-[1.4rem] bg-foreground`}
      />
      <div className={`mx-auto mt-[-0.2rem] flex ${isLeft ? "w-20 gap-3" : "w-14 gap-2"} justify-center`}>
        <div className={`${isLeft ? "h-4 w-8" : "h-4 w-6"} rounded-t-sm bg-foreground`} />
        <div className={`${isLeft ? "h-4 w-8" : "h-4 w-6"} rounded-t-sm bg-foreground`} />
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

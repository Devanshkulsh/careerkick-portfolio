import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type StatItem = {
  value: number;
  label: string;
  eyebrow: string;
  format: (value: number) => string;
};

const formatLac = (value: number) => {
  const lacValue = value / 100000;
  const formatted = lacValue < 10 ? lacValue.toFixed(1).replace(/\.0$/, "") : lacValue.toFixed(0);
  return `${formatted} Lac+`;
};

const formatCount = (value: number) => `${Math.round(value).toLocaleString("en-IN")}+`;

const stats: StatItem[] = [
  {
    value: 100000,
    label: "Allotments",
    eyebrow: "Student Flow",
    format: formatLac,
  },
  {
    value: 1000000,
    label: "Students Reached",
    eyebrow: "Market Reach",
    format: formatLac,
  },
  {
    value: 1000,
    label: "Institutional Tieups",
    eyebrow: "Partner Network",
    format: formatCount,
  },
  {
    value: 7,
    label: "Years of Excellence",
    eyebrow: "Track Record",
    format: formatCount,
  },
];

const AnimatedCounter = ({
  target,
  inView,
  format,
}: {
  target: number;
  inView: boolean;
  format: (value: number) => string;
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let frame = 0;
    let timeout = 0;

    if (!inView) {
      setCount(0);
      return undefined;
    }

    timeout = window.setTimeout(() => {
      const start = performance.now();
      const duration = 1400;

      const tick = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);

        setCount(target * eased);

        if (progress < 1) {
          frame = window.requestAnimationFrame(tick);
        }
      };

      frame = window.requestAnimationFrame(tick);
    }, 180);

    return () => {
      window.clearTimeout(timeout);
      window.cancelAnimationFrame(frame);
    };
  }, [inView, target]);

  return (
    <span className="inline-block whitespace-nowrap text-3xl font-bold sm:text-4xl text-gray-900">
      {format(count)}
    </span>
  );
};

const AchievementsSection = () => {
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { amount: 0.08 });

  return (
    <section
      ref={ref}
      id="our-scale"
      className="relative overflow-hidden py-20"
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

      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        <div
          className="mx-auto max-w-6xl rounded-[2rem] border border-white/70 px-4 py-10 shadow-[0_30px_80px_rgba(0,0,0,0.18),inset_0_1px_0_rgba(255,255,255,0.92)] sm:px-6 sm:py-12 lg:px-10 lg:py-14"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.56) 0%, rgba(255,255,255,0.28) 100%)",
            backdropFilter: "blur(14px)",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mx-auto mb-12 max-w-3xl text-center"
          >
            <span
              className="text-xs font-medium tracking-widest uppercase"
              style={{ color: "#4d6b00" }}
            >
              Our Scale
            </span>
            <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl" style={{ color: "#0f172a" }}>
              Numbers That <span style={{ color: "#5e7f00" }}>Speak</span>
            </h2>
            <p className="mt-4 text-sm font-light leading-relaxed sm:text-base" style={{ color: "#334155" }}>
              Performance markers that show how consistently our campaigns, partnerships, and admission systems create momentum.
            </p>
          </motion.div>

          <div className="mx-auto grid max-w-6xl gap-4 sm:gap-6 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: index * 0.08 }}
                className="group relative h-full overflow-hidden rounded-[1.75rem] border border-slate-300/90 bg-white/92 p-6 text-center shadow-[0_18px_40px_rgba(31,41,55,0.12)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-green-200 hover:bg-white hover:shadow-xl sm:p-8"
              >
                <div className="pointer-events-none absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
                <div className="pointer-events-none absolute right-0 top-0 h-24 w-24 rounded-full bg-green-100/50 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
                
                <div className="relative flex h-full flex-col items-center justify-center pt-2">
                  <span
                    className="text-xs font-medium tracking-widest uppercase"
                    style={{ color: "#5b7c14" }}
                  >
                    {stat.eyebrow}
                  </span>

                  <div className="mt-4 flex min-h-[4.5rem] items-center justify-center sm:min-h-[5.5rem]">
                    <AnimatedCounter target={stat.value} inView={inView} format={stat.format} />
                  </div>

                  <div className="mt-3 flex min-h-[3.5rem] items-center justify-center">
                    <p className="text-sm font-medium" style={{ color: "#0f172a" }}>
                      {stat.label}
                    </p>
                  </div>

                  <div
                    className="mt-5 flex items-center gap-2 text-xs"
                    style={{ color: "#475569" }}
                  >
                    <span>Live Momentum</span>
                    <ArrowUpRight className="h-4 w-4" style={{ color: "#5e7f00" }} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;

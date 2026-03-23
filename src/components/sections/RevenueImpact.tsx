import { motion, useInView } from "framer-motion";
import {
  ArrowUpRight,
  BarChart3,
  DollarSign,
  TrendingUp,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import AdmissionFunnelCard from "@/components/sections/AdmissionFunnelCard";

const impacts = [
  {
    icon: DollarSign,
    title: "Maximize Institutional Profitability",
    desc: "Maximize institutional profitability by eliminating the problem of vacant seats through stronger demand and structured admission flow.",
    note: "Premium admissions",
  },
  {
    icon: TrendingUp,
    title: "Increase Fee Value Per Seat",
    desc: "With continuous brand reputation growth and rising demand, colleges can command higher fees for the same seat without affecting enquiry quality.",
    note: "Better seat fill",
  },
  {
    icon: BarChart3,
    title: "Improve Admission Cashflow Stability",
    desc: "Ensure full first-year fee collection in a single payment, reducing instalment complexities and strengthening institutional cashflow efficiency.",
    note: "Healthier intake rhythm",
  },
];

const RevenueImpact = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const chartRef = useRef<HTMLDivElement | null>(null);
  const inView = useInView(sectionRef, { margin: "-100px" });
  const chartInView = useInView(chartRef, {
    amount: 0.45,
    margin: "-60px 0px -60px 0px",
  });
  const [chartRun, setChartRun] = useState(0);

  useEffect(() => {
    if (chartInView) {
      setChartRun((current) => current + 1);
    }
  }, [chartInView]);

  return (
    <section
      ref={sectionRef}
      id="growth"
      className="section-shell relative overflow-hidden"
    >
      <div className="absolute left-1/2 top-16 h-48 w-[70%] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute right-10 top-1/3 h-40 w-40 rounded-full bg-cyan-400/8 blur-3xl" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-10 xl:gap-10">
          <div className="flex flex-col gap-8 sm:gap-10 lg:justify-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              transition={{ duration: 0.7 }}
              className="section-heading mx-auto max-w-3xl text-center lg:mb-0"
            >
              <span className="section-kicker">BAMS Admission Growth</span>
              <h2 className="section-title">
                Revenue <span className="text-primary text-glow">Impact</span>
              </h2>
              <p className="section-copy mx-auto max-w-md ">
                Every counselling push translates into stronger BAMS seat conversion, healthier fee visibility, and more dependable admission-season cashflow.
               </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center self-center gap-3 rounded-full border border-primary/15 bg-primary/10 px-4 py-2 text-sm text-primary -mt-10 md:-mt-4 "
            >
              <TrendingUp className="h-4 w-4 shrink-0" />
              <span className="font-medium">
                NEET-to-BAMS counselling compounding
              </span>
            </motion.div>

            <div className="flex flex-col gap-4 sm:gap-5">
              {impacts.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -40 }}
                  animate={
                    inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -24 }
                  }
                  transition={{ duration: 0.6, delay: 0.18 + index * 0.12 }}
                  className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 p-5 transition-all duration-500 glass glass-hover hover:-translate-y-1 hover:neon-glow sm:p-3"
                >
                  <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
                  <div className="pointer-events-none absolute right-0 top-0 h-28 w-28 rounded-full bg-primary/8 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="relative flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-3">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 sm:h-12 sm:w-12">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                        <h3 className="text-lg font-semibold sm:text-xl">{item.title}</h3>
                        <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary/75 sm:text-xs sm:tracking-[0.24em]">
                          {item.note}
                        </span>
                      </div>
                      <p className="mt-2 max-w-2xl text-sm font-light leading-relaxed text-muted-foreground sm:mt-3 sm:text-base">
                        {item.desc}
                      </p>
                    </div>

                    <ArrowUpRight className="hidden h-5 w-5 flex-shrink-0 text-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:block" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            ref={chartRef}
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 24 }}
            transition={{ duration: 0.75, delay: 0.15 }}
          >
            <AdmissionFunnelCard animate={chartInView} chartKey={chartRun} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RevenueImpact;

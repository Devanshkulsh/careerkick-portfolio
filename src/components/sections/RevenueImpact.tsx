import { motion, useInView } from "framer-motion";
import {
  ArrowUpRight,
  BarChart3,
  DollarSign,
  TrendingUp,
  Users,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  LabelList,
  XAxis,
  YAxis,
} from "recharts";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const impacts = [
  {
    icon: BarChart3,
    title: "Maximize Institutional Profitability",
    desc: "Maximize institutional profitability by killing vacant seats problem.",
    note: "No vacant seats",
  },
  {
    icon: TrendingUp,
    title: "Increase Seat Fee Value",
    desc: "With continuous brand reputation & increase in demand, we help colleges increase their fee for the same seat.",
    note: "Higher fee power",
  },
  {
    icon: DollarSign,
    title: "Secure Full First-Year Fee Upfront",
    desc: "We ensure colleges receive the entire first-year fee in a single payment, eliminating the complexities of installments or part payments, thereby improving cash flow and operational efficiency",
    note: "Upfront revenue",
  },
];

const revenueBars = [
  {
    label: "Leads",
    caption: "Students show interest",
    revenue: 96,
    fill: "#97B80A",
  },
  {
    label: "Counsel",
    caption: "Guidance and counselling",
    revenue: 84,
    fill: "#C4FF3B",
  },
  {
    label: "Apply",
    caption: "Application submitted",
    revenue: 72,
    fill: "#7DD3FC",
  },
  {
    label: "Confirm",
    caption: "BAMS seat confirmed",
    revenue: 61,
    fill: "#34D399",
  },
];

const milestones = [
  { label: "Seats filled", value: "61%" },
  { label: "Admission timeline", value: "45 days" },
  { label: "Lead to admission", value: "61%" },
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
        <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-10 xl:gap-14">
          <div className="flex flex-col gap-8 sm:gap-10 lg:justify-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              transition={{ duration: 0.7 }}
              className="section-heading mx-auto max-w-2xl text-center lg:mb-0"
            >
              <span className="section-kicker">BAMS Admission Growth</span>
              <h2 className="section-title">
                Revenue <span className="text-primary text-glow">Impact</span>
              </h2>
              <p className="section-copy mx-auto max-w-xl">
                Every counselling push translates into stronger BAMS seat
                conversion, healthier fee visibility, and more dependable
                admission-season cashflow.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center self-center gap-3 rounded-full border border-primary/15 bg-primary/10 px-4 py-2 text-sm text-primary"
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
                  className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 p-5 transition-all duration-500 glass glass-hover hover:-translate-y-1 hover:neon-glow sm:p-6"
                >
                  <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
                  <div className="pointer-events-none absolute right-0 top-0 h-28 w-28 rounded-full bg-primary/8 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="relative flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-5">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 sm:h-14 sm:w-14">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-col gap-1.5 sm:flex-row sm:items-center sm:justify-between">
                        <h3 className="text-lg font-semibold sm:text-xl">
                          {item.title}
                        </h3>
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
            className="flex flex-col justify-center overflow-hidden rounded-[2rem] border border-white/10 p-5 glass sm:p-6 lg:p-7"
          >
            <div className="mb-6 flex flex-col items-start justify-between gap-4 sm:flex-row">
              <div>
                <h3 className="mt-2 text-2xl font-bold sm:text-3xl">
                  A simple{" "}
                  <span className="text-primary">BAMS admission funnel</span>
                </h3>
                <p className="mt-3 max-w-md text-sm font-light leading-relaxed text-muted-foreground sm:text-base">
                  This graph shows the usual student journey in a BAMS college:
                  more students start as leads, fewer reach counselling, fewer
                  apply, and the final group confirms admission.
                </p>
              </div>

              <div className="hidden shrink-0 rounded-2xl border border-primary/20 bg-primary/10 px-4 py-3 text-right sm:block">
                <p className="text-xs uppercase tracking-[0.22em] text-primary/70">
                  Final admissions
                </p>
                <p className="mt-1 text-2xl font-bold text-primary counter-glow">
                  61%
                </p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-black/10 px-3 py-6 sm:px-5 sm:py-7">
              <div className="pointer-events-none absolute inset-x-10 top-0 h-24 rounded-full bg-primary/12 blur-3xl" />

              <ChartContainer
                key={chartRun}
                config={{
                  revenue: {
                    label: "Students remaining",
                    color: "#C4FF3B",
                  },
                }}
                className="relative h-[250px] w-full sm:h-[320px]"
              >
                <BarChart
                  data={revenueBars}
                  margin={{ top: 16, right: 8, left: -12, bottom: 0 }}
                  barCategoryGap="20%"
                >
                  <CartesianGrid
                    vertical={false}
                    stroke="rgba(255,255,255,0.08)"
                  />
                  <XAxis
                    dataKey="label"
                    tickLine={false}
                    axisLine={false}
                    tickMargin={12}
                    className="text-[10px] font-medium uppercase tracking-[0.18em] sm:text-[11px]"
                  />
                  <YAxis
                    tickLine={false}
                    axisLine={false}
                    tickMargin={10}
                    domain={[0, 110]}
                    ticks={[0, 25, 50, 75, 100]}
                    className="text-xs"
                  />
                  <ChartTooltip
                    cursor={{ fill: "rgba(196,255,59,0.08)" }}
                    content={
                      <ChartTooltipContent
                        indicator="dot"
                        formatter={(value, _, item) => (
                          <div className="flex min-w-[8rem] items-center justify-between gap-4 sm:min-w-[10rem]">
                            <span className="text-slate-600">
                              {item.payload.caption}
                            </span>
                            <span className="font-mono font-semibold text-slate-950">
                              {value}% of leads
                            </span>
                          </div>
                        )}
                      />
                    }
                  />
                  <Bar
                    dataKey="revenue"
                    radius={[18, 18, 6, 6]}
                    animationDuration={950}
                    animationEasing="ease-out"
                  >
                    <LabelList
                      dataKey="revenue"
                      position="top"
                      offset={12}
                      className="fill-white text-[10px] font-semibold sm:text-[11px]"
                      formatter={(value: number) => `${value}%`}
                    />
                    {revenueBars.map((bar) => (
                      <Cell key={bar.label} fill={bar.fill} />
                    ))}
                  </Bar>
                </BarChart>
              </ChartContainer>

              <div className="mt-5 grid grid-cols-2 gap-2 sm:gap-3 lg:grid-cols-4">
                {revenueBars.map((bar) => (
                  <div
                    key={bar.label}
                    className="flex flex-col justify-center rounded-2xl border border-white/8 bg-white/[0.04] px-2 py-3 text-center sm:px-3"
                  >
                    <p className="text-sm font-semibold">{bar.label}</p>
                    <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.15em] text-muted-foreground sm:text-[11px] sm:tracking-[0.2em]">
                      {bar.caption}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
              {milestones.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 18 }}
                  animate={
                    inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }
                  }
                  transition={{ duration: 0.45, delay: 0.45 + index * 0.08 }}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 sm:py-4"
                >
                  <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground sm:text-xs sm:tracking-[0.22em]">
                    {item.label}
                  </p>
                  <p className="mt-1.5 text-xl font-semibold text-primary sm:mt-2 sm:text-2xl">
                    {item.value}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RevenueImpact;

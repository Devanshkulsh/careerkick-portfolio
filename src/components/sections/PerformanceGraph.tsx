import { motion, useInView } from "framer-motion";
import { TrendingUp } from "lucide-react";
import { useMemo, useRef } from "react";
import {
  CartesianGrid,
  LabelList,
  Line,
  LineChart,
  ReferenceLine,
  XAxis,
  YAxis,
} from "recharts";

import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const animatedData = [
  { stage: "Q1", year2022: 18, year2023: 28, year2024: 42, year2025: 56 },
  { stage: "Q2", year2022: 26, year2023: 44, year2024: 63, year2025: 74 },
  { stage: "Q3", year2022: 31, year2023: 57, year2024: 79, year2025: 88 },
  { stage: "Q4", year2022: 35, year2023: 62, year2024: 89, year2025: 99 },
];

const resetData = animatedData.map((point) => ({
  stage: point.stage,
  year2022: 0,
  year2023: 0,
  year2024: 0,
  year2025: 0,
}));

const yearSummary = [
  { year: "2022", value: 35, uplift: "+35%" },
  { year: "2023", value: 62, uplift: "+77%" },
  { year: "2024", value: 94, uplift: "+52%" },
  { year: "2025", value: 98, uplift: "+4%" },
];

const chartConfig = {
  year2022: {
    label: "2022",
    color: "hsl(71 62% 38%)",
  },
  year2023: {
    label: "2023",
    color: "hsl(71 78% 48%)",
  },
  year2024: {
    label: "2024",
    color: "hsl(var(--primary))",
  },
  year2025: {
    label: "2025",
    color: "hsl(71 86% 58%)",
  },
} as const;

const PerformanceGraph = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: "-100px" });

  const chartData = useMemo(() => (inView ? animatedData : resetData), [inView]);

  return (
    <section ref={ref} id="impact" className="section-shell">
      <div className="container\ mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.7 }}
          className="section-heading"
        >
          <span className="section-kicker">Growth Trajectory</span>
          <h2 className="section-title">
            WHAT WE HAVE DONE IN THE <span className="text-primary text-glow">PAST</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto max-w-5xl rounded-3xl p-5 glass sm:p-8 lg:p-10"
        >
          <div className="mb-6 flex items-start justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-primary/80 sm:text-sm">
                Performance Momentum
              </p>
            </div>
            <div className="hidden rounded-2xl border border-primary/20 bg-primary/10 px-4 py-3 text-right sm:block">
              <p className="text-xs uppercase tracking-[0.22em] text-primary/70">Peak Impact</p>
              <p className="mt-1 text-2xl font-bold text-primary counter-glow">98%</p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-black/10 px-3 py-4 sm:px-5 sm:py-6">
            <div className="pointer-events-none absolute inset-x-8 top-0 h-32 rounded-full bg-primary/15 blur-3xl" />

            <ChartContainer config={chartConfig} className="h-[260px] w-full sm:h-[320px]">
              <LineChart
                key={inView ? "chart-active" : "chart-reset"}
                data={chartData}
                margin={{ top: 24, right: 18, left: -18, bottom: 0 }}
              >
                <CartesianGrid vertical={false} strokeDasharray="4 8" />
                <XAxis
                  dataKey="stage"
                  axisLine={false}
                  tickLine={false}
                  tickMargin={14}
                  tick={{ fontSize: 12 }}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tickMargin={12}
                  tickFormatter={(value) => `${value}%`}
                  domain={[0, 100]}
                  ticks={[0, 25, 50, 75, 100]}
                />
                <ReferenceLine y={0} stroke="hsl(var(--border))" strokeOpacity={0.6} />
                <ChartTooltip
                  cursor={{
                    stroke: "hsl(var(--primary))",
                    strokeOpacity: 0.18,
                    strokeWidth: 1,
                  }}
                  content={
                    <ChartTooltipContent
                      indicator="line"
                      formatter={(value, name) => (
                        <div className="flex min-w-[8rem] items-center justify-between gap-3">
                          <span className="text-muted-foreground">{name}</span>
                          <span className="font-mono font-semibold text-foreground">{value}%</span>
                        </div>
                      )}
                    />
                  }
                />
                <ChartLegend content={<ChartLegendContent />} verticalAlign="top" />

                <Line
                  type="monotone"
                  dataKey="year2022"
                  stroke="var(--color-year2022)"
                  strokeWidth={2.5}
                  dot={{
                    r: 4,
                    fill: "var(--color-year2022)",
                    stroke: "rgba(255,255,255,0.35)",
                    strokeWidth: 1.5,
                  }}
                  activeDot={{
                    r: 6,
                    fill: "var(--color-year2022)",
                    stroke: "rgba(255,255,255,0.85)",
                    strokeWidth: 2,
                  }}
                  isAnimationActive
                  animationDuration={900}
                  animationEasing="ease-out"
                >
                  <LabelList
                    dataKey="year2022"
                    position="top"
                    offset={10}
                    className="text-[10px] font-semibold"
                    style={{ fill: "var(--color-year2022)" }}
                    formatter={(value: number) => `${value}%`}
                  />
                </Line>
                <Line
                  type="monotone"
                  dataKey="year2023"
                  stroke="var(--color-year2023)"
                  strokeWidth={3}
                  dot={{
                    r: 4.5,
                    fill: "var(--color-year2023)",
                    stroke: "rgba(255,255,255,0.35)",
                    strokeWidth: 1.5,
                  }}
                  activeDot={{
                    r: 6.5,
                    fill: "var(--color-year2023)",
                    stroke: "rgba(255,255,255,0.85)",
                    strokeWidth: 2,
                  }}
                  isAnimationActive
                  animationDuration={1200}
                  animationBegin={120}
                  animationEasing="ease-out"
                >
                  <LabelList
                    dataKey="year2023"
                    position="top"
                    offset={10}
                    className="text-[10px] font-semibold"
                    style={{ fill: "var(--color-year2023)" }}
                    formatter={(value: number) => `${value}%`}
                  />
                </Line>
                <Line
                  type="monotone"
                  dataKey="year2024"
                  stroke="var(--color-year2024)"
                  strokeWidth={4}
                  dot={{
                    r: 5,
                    fill: "var(--color-year2024)",
                    stroke: "rgba(255,255,255,0.45)",
                    strokeWidth: 1.5,
                  }}
                  activeDot={{
                    r: 7,
                    fill: "var(--color-year2024)",
                    stroke: "rgba(255,255,255,0.85)",
                    strokeWidth: 2,
                  }}
                  isAnimationActive
                  animationDuration={1500}
                  animationBegin={240}
                  animationEasing="ease-out"
                >
                  <LabelList
                    dataKey="year2024"
                    position="top"
                    offset={12}
                    className="text-xs font-semibold sm:text-sm"
                    style={{ fill: "var(--color-year2024)" }}
                    formatter={(value: number) => `${value}%`}
                  />
                </Line>
                <Line
                  type="monotone"
                  dataKey="year2025"
                  stroke="var(--color-year2025)"
                  strokeWidth={4.5}
                  dot={{
                    r: 5.5,
                    fill: "var(--color-year2025)",
                    stroke: "rgba(255,255,255,0.5)",
                    strokeWidth: 1.5,
                  }}
                  activeDot={{
                    r: 7.5,
                    fill: "var(--color-year2025)",
                    stroke: "rgba(255,255,255,0.9)",
                    strokeWidth: 2,
                  }}
                  isAnimationActive
                  animationDuration={1600}
                  animationBegin={360}
                  animationEasing="ease-out"
                >
                  <LabelList
                    dataKey="year2025"
                    position="top"
                    offset={12}
                    className="text-xs font-semibold sm:text-sm"
                    style={{ fill: "var(--color-year2025)" }}
                    formatter={(value: number) => `${value}%`}
                  />
                </Line>
              </LineChart>
            </ChartContainer>
          </div>

          <div className="mt-6 grid gap-3 sm:mt-8 sm:grid-cols-4">
            {yearSummary.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                transition={{ duration: 0.45, delay: 0.45 + index * 0.12 }}
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="text-sm font-medium text-muted-foreground">{item.year}</span>
                  <span className="text-xs font-semibold tracking-[0.18em] text-primary/80">{item.uplift}</span>
                </div>
                <p className="mt-2 text-2xl font-bold text-primary counter-glow">{item.value}%</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-6 flex items-center justify-center gap-2 text-center text-primary sm:mt-8">
            <TrendingUp className="h-5 w-5" />
            <span className="text-sm font-semibold">168% growth in 2 years</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PerformanceGraph;

import { motion, useInView } from "framer-motion";
import { TrendingUp } from "lucide-react";
import { useMemo, useRef } from "react";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";

import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

const clientGrowthData = [
  { year: "2019", clients: 200 },
  { year: "2020", clients: 500 },
  { year: "2021", clients: 2100 },
  { year: "2022", clients: 3000 },
  { year: "2023", clients: 3700 },
  { year: "2024", clients: 4200 },
  { year: "2025", clients: 6300 },
  { year: "2026", clients: 7000, isExpected: true, label: "7000+" },
];

const resetData = clientGrowthData.map((point) => ({
  ...point,
  clients: 0,
}));

const chartConfig = {
  clients: {
    label: "No. of admissions",
    color: "hsl(var(--primary))",
  },
} as const;

const ClientGraph = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: "-100px" });

  const chartData = useMemo(() => (inView ? clientGrowthData : resetData), [inView]);
  // Optional: keep this if you plan to use it later, otherwise it can be removed
  const peakClients = clientGrowthData[clientGrowthData.length - 1];

  return (
    <section ref={ref} id="client-growth" className="section-shell !pt-10 sm:!pt-14 lg:!pt-16">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 34 }}
          transition={{ duration: 0.7 }}
          className="section-heading"
        >
          <span className="section-kicker">Admission Growth</span>
          <h2 className="section-title">
            YEAR-WISE <span className="text-primary text-glow">ADMISSION GROWTH</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 38 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 38 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto max-w-5xl rounded-3xl p-4 glass sm:p-8 lg:p-10"
        >
          <div className="mb-4 flex items-start justify-between gap-4 sm:mb-6">
            <div>
              <p className="text-[10px] uppercase tracking-widest text-primary/80 sm:text-sm sm:tracking-[0.28em]">
                2019 to 2026 admissions trajectory
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-black/10 px-2 py-4 sm:px-5 sm:py-6">
            <div className="pointer-events-none absolute inset-x-8 top-0 h-32 rounded-full bg-primary/15 blur-3xl" />

            <ChartContainer config={chartConfig} className="h-[260px] w-full sm:h-[320px]">
              <AreaChart
                key={inView ? "client-chart-active" : "client-chart-reset"}
                data={chartData}
                margin={{ top: 20, right: 12, left: -10, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="clientAreaFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--color-clients)" stopOpacity={0.55} />
                    <stop offset="95%" stopColor="var(--color-clients)" stopOpacity={0.04} />
                  </linearGradient>
                </defs>

                <CartesianGrid vertical={false} strokeDasharray="4 8" />
                <XAxis
                  dataKey="year"
                  axisLine={false}
                  tickLine={false}
                  tickMargin={12}
                  minTickGap={15}
                  tick={{ fontSize: 12 }}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tickMargin={8}
                  width={38}
                  domain={[0, 7500]}
                  ticks={[0, 1000, 2000, 3000, 4000, 5000, 6000, 7000]}
                  tickFormatter={(value) => `${value / 1000}k`}
                />
                <ChartTooltip
                  cursor={{ stroke: "hsl(var(--primary))", strokeOpacity: 0.2, strokeWidth: 1 }}
                  content={
                    <ChartTooltipContent
                      indicator="dot"
                      formatter={(value, _, item) => {
                        const label = item.payload?.isExpected ? "7000+ (Expected)" : `${value}`;
                        return (
                          <div className="flex min-w-[9rem] items-center justify-between gap-2 sm:min-w-[11rem] sm:gap-3">
                            <span className="text-xs text-muted-foreground sm:text-sm">No. of admissions</span>
                            <span className="font-mono text-xs font-semibold text-foreground sm:text-sm">{label}</span>
                          </div>
                        );
                      }}
                    />
                  }
                />

                <Area
                  type="monotone"
                  dataKey="clients"
                  stroke="var(--color-clients)"
                  strokeWidth={3.5}
                  fill="url(#clientAreaFill)"
                  dot={{
                    r: 4.5,
                    fill: "var(--color-clients)",
                    stroke: "rgba(255,255,255,0.45)",
                    strokeWidth: 1.5,
                  }}
                  activeDot={{
                    r: 6.5,
                    fill: "var(--color-clients)",
                    stroke: "rgba(255,255,255,0.85)",
                    strokeWidth: 2,
                  }}
                  isAnimationActive
                  animationDuration={1450}
                  animationEasing="ease-out"
                />
              </AreaChart>
            </ChartContainer>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-3 sm:mt-6 sm:grid-cols-3 sm:gap-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-3 sm:px-4">
              <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground sm:text-xs">2019</p>
              <p className="mt-1 text-xl font-bold text-primary sm:text-2xl">200</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-3 sm:px-4">
              <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground sm:text-xs">2025</p>
              <p className="mt-1 text-xl font-bold text-primary sm:text-2xl">6300</p>
            </div>
            <div className="col-span-2 rounded-2xl border border-primary/25 bg-primary/10 px-3 py-3 sm:col-span-1 sm:px-4">
              <p className="text-[10px] uppercase tracking-[0.18em] text-primary/80 sm:text-xs">2026 (Expected)</p>
              <p className="mt-1 text-xl font-bold text-primary counter-glow sm:text-2xl">7000+</p>
            </div>
          </div>

          <div className="mt-5 flex items-center justify-center gap-2 text-center text-primary sm:mt-8">
            <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5" />
            <span className="text-xs font-semibold sm:text-sm">Steady year-on-year admission momentum</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ClientGraph;

import { motion } from "framer-motion";
import { Bar, BarChart, CartesianGrid, Cell, LabelList, XAxis, YAxis } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

const revenueBars = [
  {
    label: "Leads",
    caption: "NEET interest",
    revenue: 36,
    fill: "#97B80A",
  },
  {
    label: "Counsel",
    caption: "Profile guidance",
    revenue: 54,
    fill: "#C4FF3B",
  },
  {
    label: "Apply",
    caption: "BAMS applications",
    revenue: 71,
    fill: "#7DD3FC",
  },
  {
    label: "Confirm",
    caption: "Seat closures",
    revenue: 100,
    fill: "#34D399",
  },
];

const milestones = [
  { label: "Seat fill rate", value: "100%" },
  { label: "Decision cycle", value: "45 days" },
  { label: "Counselling gain", value: "2.4x" },
];

type AdmissionFunnelCardProps = {
  animate?: boolean;
  chartKey?: number | string;
  className?: string;
};

const AdmissionFunnelCard = ({
  animate = false,
  chartKey = "default",
  className = "",
}: AdmissionFunnelCardProps) => {
  return (
    <div
      className={`flex flex-col justify-center overflow-hidden rounded-[2rem] border border-white/10 p-5 glass sm:p-6 lg:p-7 ${className}`}
    >
      <div className="mb-6 flex flex-col items-start justify-between gap-4 sm:flex-row">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-primary/80 sm:text-xs">
            Admission Funnel
          </p>
          <h3 className="mt-0.5 text-2xl font-bold sm:text-3xl">
            BAMS <span className="text-primary">conversion momentum</span>
          </h3>
          <p className="mt-3 max-w-md text-sm font-light leading-relaxed text-muted-foreground sm:text-base">
            A clear view of how a Careerkick can move students from NEET interest to confirmed BAMS admissions across one intake cycle.
          </p>
        </div>

        <div className="hidden shrink-0 rounded-2xl border border-primary/20 bg-primary/10 px-4 py-2 text-right sm:block">
          <p className="text-xs uppercase tracking-[0.22em] text-primary/70">Peak confirmation</p>
          <p className="mt-0.5 text-2xl font-bold text-primary counter-glow">100%</p>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-black/10 px-3 py-6 sm:px-5 sm:py-7">
        <div className="pointer-events-none absolute inset-x-10 top-0 h-24 rounded-full bg-primary/12 blur-3xl" />

        <ChartContainer
          key={chartKey}
          config={{
            revenue: {
              label: "Admission conversion",
              color: "#C4FF3B",
            },
          }}
          className="relative h-[270px] w-full sm:h-[270px]"
        >
          <BarChart
            data={revenueBars}
            margin={{ top: 28, right: 16, left: -12, bottom: 0 }}
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
              domain={[0, 108]}
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
                        {value}%
                      </span>
                    </div>
                  )}
                />
              }
            />
            <Bar
              dataKey="revenue"
              radius={[18, 18, 6, 6]}
              animationDuration={animate ? 950 : 0}
              animationEasing="ease-out"
              isAnimationActive={animate}
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

      <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
        {milestones.map((item, index) => {
          const content = (
            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 sm:py-3">
              <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground sm:text-xs sm:tracking-[0.22em]">
                {item.label}
              </p>
              <p className="mt-1.5 text-xl font-semibold text-primary sm:mt-2 sm:text-2xl">
                {item.value}
              </p>
            </div>
          );

          if (!animate) {
            return <div key={item.label}>{content}</div>;
          }

          return (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.45 + index * 0.08 }}
            >
              {content}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default AdmissionFunnelCard;

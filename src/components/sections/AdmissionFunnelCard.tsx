import { motion } from "framer-motion";
import { Cell, Funnel, FunnelChart, LabelList } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

const funnelStages = [
  {
    stage: "Awareness",
    caption: "NEET prospects reached",
    value: 100,
    volume: "12,000",
    fill: "#C4FF3B",
  },
  {
    stage: "Leads",
    caption: "Form fills & enquiries",
    value: 42,
    volume: "5,040",
    fill: "#97B80A",
  },
  {
    stage: "Qualified",
    caption: "Counselling qualified",
    value: 24,
    volume: "2,880",
    fill: "#7DD3FC",
  },
  {
    stage: "Applications",
    caption: "Submitted BAMS applications",
    value: 11,
    volume: "1,320",
    fill: "#60A5FA",
  },
  {
    stage: "Enrollments",
    caption: "Confirmed admissions",
    value: 6,
    volume: "720",
    fill: "#34D399",
  },
];

const milestones = [
  { label: "Lead to qualified", value: "57%" },
  { label: "App-to-enroll", value: "55%" },
  { label: "Overall conversion", value: "6%" },
];

type AdmissionFunnelCardProps = {
  animate?: boolean;
  chartKey?: number | string;
  className?: string;
};

// Animation variants for staggered entrance
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const AdmissionFunnelCard = ({
  animate = false,
  chartKey = "default",
  className = "",
}: AdmissionFunnelCardProps) => {
  const MotionWrapper = animate ? motion.div : "div";
  const motionProps = animate
    ? { variants: containerVariants, initial: "hidden", animate: "visible" }
    : {};

  return (
    <MotionWrapper
      {...motionProps}
      className={`relative flex flex-col justify-center overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-6 shadow-2xl backdrop-blur-xl sm:p-8 lg:p-10 ${className}`}
    >
      {/* Background Ambient Glow */}
      <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-primary/5 blur-[100px]" />

      {/* Header Section */}
      <motion.div variants={itemVariants} className="mb-8 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <div className="space-y-2">
          <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary/80">
            <span className="h-1.5 w-1.5 rounded-full bg-primary/80 animate-pulse" />
            Marketing Funnel
          </p>
          <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Real{" "}
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              admission conversion
            </span>
          </h3>
          <p className="max-w-md text-sm font-light leading-relaxed text-muted-foreground/80 sm:text-base">
            Stage-by-stage drop-off from total outreach to confirmed enrollments, modeled as a true top-to-bottom funnel.
          </p>
        </div>

        {/* Highlight Badge */}
        <div className="hidden shrink-0 flex-col items-end justify-center rounded-2xl border border-primary/30 bg-primary/10 px-5 py-3 shadow-[0_0_20px_rgba(196,255,59,0.1)] transition-transform hover:scale-105 sm:flex">
          <p className="text-[10px] uppercase tracking-[0.22em] text-primary/80">End conversion</p>
          <p className="mt-1 text-3xl font-extrabold tracking-tight text-primary drop-shadow-[0_0_8px_rgba(196,255,59,0.5)]">
            6%
          </p>
        </div>
      </motion.div>

      {/* Chart & Volumes Section */}
      <motion.div variants={itemVariants} className="relative z-10 overflow-hidden rounded-[1.75rem] border border-white/10 bg-black/20 p-4 shadow-inner sm:p-6 lg:p-8">
        {/* Inner Top Glow */}
        <div className="pointer-events-none absolute inset-x-1/4 top-0 h-24 rounded-full bg-primary/10 blur-[60px]" />

        <ChartContainer
          key={chartKey}
          config={{
            value: {
              label: "Funnel conversion",
              color: "#C4FF3B",
            },
          }}
          // Removed max-w constraint so it scales nicely, and increased height slightly
          className="relative mx-auto h-[300px] w-full sm:h-[350px]"
        >
          {/* Symmetrical margins (100px left and right) ensure it stays perfectly centered and wider */}
          <FunnelChart margin={{ top: 20, right: 100, bottom: 20, left: 100 }}>
            <ChartTooltip
              cursor={{ fill: "rgba(255,255,255,0.05)" }}
              content={
                <ChartTooltipContent
                  indicator="dot"
                  className="border-white/10 bg-black/80 backdrop-blur-md"
                  formatter={(value, _, item) => (
                    <div className="flex min-w-[10rem] items-center justify-between gap-4 sm:min-w-[14rem]">
                      <span className="font-medium text-slate-300">{item.payload.caption}</span>
                      <span className="font-mono font-bold text-white">{value}%</span>
                    </div>
                  )}
                />
              }
            />
            <Funnel
              data={funnelStages}
              dataKey="value"
              nameKey="stage"
              cx="50%"
              cy="50%"
              isAnimationActive={animate}
              animationDuration={animate ? 1200 : 0}
              animationEasing="ease-out"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth={2}
            >
              <LabelList
                dataKey="stage"
                position="right"
                fill="rgba(255,255,255,0.8)"
                className="text-[11px] font-medium tracking-wide sm:text-xs"
              />
              <LabelList
                dataKey="value"
                position="inside"
                className="fill-black/80 text-[11px] font-bold drop-shadow-sm sm:text-xs"
                formatter={(value: number) => `${value}%`}
              />
              {funnelStages.map((stage) => (
                <Cell key={stage.stage} fill={stage.fill} />
              ))}
            </Funnel>
          </FunnelChart>
        </ChartContainer>

        {/* Volume Summary Grid */}
        <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-5">
          {funnelStages.map((stage) => (
            <div
              key={stage.stage}
              className="group flex flex-col justify-center rounded-2xl border border-white/5 bg-white/[0.03] px-3 py-4 text-center transition-all duration-300 hover:bg-white/[0.08]"
            >
              <p className="text-sm font-semibold text-white/90 group-hover:text-white">{stage.stage}</p>
              <p className="mt-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground group-hover:text-primary/80 sm:text-[11px]">
                {stage.volume}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Milestones Bottom Grid */}
      <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
        {milestones.map((item, index) => {
          const content = (
            <div className="flex h-full flex-col justify-center rounded-2xl border border-white/5 bg-white/5 px-5 py-4 transition-all duration-300 hover:border-primary/40 hover:bg-white/10">
              <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground sm:text-xs">
                {item.label}
              </p>
              <p className="mt-2 text-2xl font-bold text-primary sm:text-3xl">
                {item.value}
              </p>
            </div>
          );

          if (!animate) return <div key={item.label} className="h-full">{content}</div>;

          return (
            <motion.div
              key={item.label}
              variants={itemVariants}
              className="h-full"
            >
              {content}
            </motion.div>
          );
        })}
      </div>
    </MotionWrapper>
  );
};

export default AdmissionFunnelCard;

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

type AdmissionFunnelProps = {
  animate?: boolean;
  chartKey?: number | string;
  className?: string;
};

const AdmissionFunnel = ({
  animate = false,
  chartKey = "default",
  className = "",
}: AdmissionFunnelProps) => {
  return (
    <div className={`mx-auto flex w-full items-center justify-center px-1 sm:px-0 ${className}`}>
      <ChartContainer
        key={chartKey}
        config={{
          value: {
            label: "Funnel conversion",
            color: "#C4FF3B",
          },
        }}
        className="mx-auto h-[240px] w-full max-w-[22rem] sm:h-[400px] sm:max-w-3xl"
      >
        <FunnelChart margin={{ top: 12, right: 14, bottom: 12, left: 14 }}>
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
              dataKey="value"
              position="inside"
              className="fill-black/80 text-[10px] font-bold drop-shadow-sm sm:text-xs"
              formatter={(value: number) => `${value}%`}
            />
            {funnelStages.map((stage) => (
              <Cell key={stage.stage} fill={stage.fill} />
            ))}
          </Funnel>
        </FunnelChart>
      </ChartContainer>
    </div>
  );
};

export default AdmissionFunnel;

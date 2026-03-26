import { Cell, Funnel, FunnelChart, LabelList } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const funnelStages = [
  {
    stage: "Awareness",
    caption: "NEET prospects reached",
    value: 100,
    displayValue: 100,
    volume: "12,000",
    fill: "#C4FF3B",
    gradientId: "grad-awareness",
  },
  {
    stage: "Leads",
    caption: "Form fills & enquiries",
    value: 75,
    displayValue: 42,
    volume: "5,040",
    fill: "#97B80A",
    gradientId: "grad-leads",
  },
  {
    stage: "Qualified",
    caption: "Counselling qualified",
    value: 55,
    displayValue: 24,
    volume: "2,880",
    fill: "#7DD3FC",
    gradientId: "grad-qualified",
  },
  {
    stage: "Applications",
    caption: "Submitted BAMS applications",
    value: 35,
    displayValue: 11,
    volume: "1,320",
    fill: "#60A5FA",
    gradientId: "grad-applications",
  },
  {
    stage: "Enrollments",
    caption: "Confirmed admissions",
    value: 20,
    displayValue: 6,
    volume: "720",
    fill: "#34D399",
    gradientId: "grad-enrollments",
  },
];

type AdmissionFunnelProps = {
  animate?: boolean;
  chartKey?: number | string;
  className?: string;
};

const AdmissionFunnel = ({
  animate = true,
  chartKey = "default",
  className = "",
}: AdmissionFunnelProps) => {
  return (
    <div
      className={`flex w-full items-center justify-center overflow-hidden ${className}`}
    >
      <ChartContainer
        key={chartKey}
        config={{
          value: { label: "Conversion", color: "#C4FF3B" },
        }}
        className="h-[300px] w-full max-w-4xl sm:h-[450px]"
      >
        {/* Adjusted margins for mobile (reduced left/right from 20 to 5) to give labels more room */}
        <FunnelChart margin={{ top: 20, right: 5, bottom: 20, left: 5 }}>
          <defs>
            {funnelStages.map((stage) => (
              <linearGradient
                key={stage.gradientId}
                id={stage.gradientId}
                x1="0"
                y1="0"
                x2="1"
                y2="0"
              >
                <stop offset="0%" stopColor={stage.fill} stopOpacity={0.8} />
                <stop offset="50%" stopColor={stage.fill} stopOpacity={1} />
                <stop offset="100%" stopColor={stage.fill} stopOpacity={0.7} />
              </linearGradient>
            ))}
          </defs>

          <ChartTooltip
            cursor={{ fill: "rgba(255,255,255,0.05)" }}
            content={
              <ChartTooltipContent
                indicator="dot"
                className="border-white/10 bg-black/90 backdrop-blur-md"
                formatter={(value, _, item) => (
                  <div className="flex min-w-[10rem] items-center justify-between gap-4 sm:min-w-[12rem]">
                    <span className="text-[10px] sm:text-xs font-medium text-slate-400">
                      {item.payload.caption}
                    </span>
                    <span className="font-mono text-[10px] sm:text-xs font-bold text-white">
                      {item.payload.displayValue}%
                    </span>
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
            animationDuration={1500}
            stroke="#000"
            strokeWidth={1}
          >
            {/* Stage Names - Responsive font size and offset */}
            <LabelList
              dataKey="stage"
              position="left"
              fill="#f8fafc"
              stroke="#0b0b0b"
              strokeWidth={0.6}
              fontSize={window?.innerWidth < 640 ? 9 : 12}
              fontWeight={700}
              offset={10}
            />
            {/* Inside percentages - Responsive font size */}
            <LabelList
              dataKey="displayValue"
              position="inside"
              fill="#0b0b0b"
              stroke="#ffffff"
              strokeWidth={0.8}
              fontSize={window?.innerWidth < 640 ? 10 : 13}
              fontWeight={900}
              formatter={(val: number) => `${val}%`}
            />
            {/* Volume - Responsive font size and offset */}
            <LabelList
              dataKey="volume"
              position="right"
              fill="#f8fafc"
              stroke="#0b0b0b"
              strokeWidth={0.6}
              fontSize={window?.innerWidth < 640 ? 9 : 12}
              fontWeight={800}
              offset={10}
            />
            {funnelStages.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={`url(#${entry.gradientId})`}
                className="drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
              />
            ))}
          </Funnel>
        </FunnelChart>
      </ChartContainer>
    </div>
  );
};

export default AdmissionFunnel;

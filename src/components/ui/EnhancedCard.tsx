import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, BarChart3, Building2, Sparkles, Users } from "lucide-react";
import { useRef } from "react";

type CardMetric = {
  label: string;
  value: string;
};

type CardData = {
  eyebrow: string;
  title: string;
  subtitle: string;
  summary: string;
  metrics: CardMetric[];
  highlights: string[];
  icon: typeof Building2;
};

const cards: CardData[] = [
  {
    eyebrow: "Starting Point",
    title: "From limited visibility to a stronger foundation",
    subtitle:
      "Many colleges begin with good academic intent but low market awareness, inconsistent admissions flow, and weak brand recall.",
    summary:
      "Our work starts by creating clarity in positioning, fixing fragmented outreach, and establishing a more reliable structure for admissions growth.",
    metrics: [
      { label: "Awareness", value: "Minimal to Noticeable" },
      { label: "Lead Quality", value: "Scattered to Aligned" },
      { label: "Process", value: "Manual to Structured" },
    ],
    highlights: ["Sharper positioning", "Better inquiry flow", "Stronger internal process"],
    icon: Building2,
  },
  {
    eyebrow: "Transformation",
    title: "From early-stage presence to trusted market momentum",
    subtitle:
      "Once the foundation is set, branding, admission systems, and campaign performance begin working together instead of in silos.",
    summary:
      "The outcome is a college that feels more visible, more credible, and far better prepared to convert interest into sustainable admission results.",
    metrics: [
      { label: "Brand Trust", value: "Unclear to Confident" },
      { label: "Admissions", value: "Slow to Consistent" },
      { label: "Growth", value: "Reactive to Scalable" },
    ],
    highlights: ["Professional brand perception", "Higher conversion confidence", "Long-term growth readiness"],
    icon: BarChart3,
  },
];

type StoryCardProps = {
  data: CardData;
  showAccent?: boolean;
};

const StoryCard = ({ data, showAccent = false }: StoryCardProps) => {
  const Icon = data.icon;

  return (
    <div className="relative h-full overflow-hidden rounded-[2rem] border border-white/10 glass">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-primary/10 to-transparent" />
      <div className="pointer-events-none absolute -right-10 top-8 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative grid h-full gap-8 px-5 py-6 sm:px-8 sm:py-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-10 lg:py-10">
        <div>
          <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-primary sm:text-xs">
            {data.eyebrow}
          </span>

          <h3 className="mt-4 text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl">
            {data.title}
          </h3>

          <p className="mt-4 max-w-2xl text-sm font-light leading-relaxed text-muted-foreground sm:text-base">
            {data.subtitle}
          </p>

          <p className="mt-4 max-w-2xl text-sm font-light leading-relaxed text-foreground/85 sm:text-base">
            {data.summary}
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {data.metrics.map((metric) => (
              <div key={metric.label} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
                <p className="text-[11px] uppercase tracking-[0.22em] text-primary/75">{metric.label}</p>
                <p className="mt-2 text-sm font-semibold text-foreground sm:text-base">{metric.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative h-full">
          <div className="grid h-full gap-4">
            <div className="rounded-[1.75rem] border border-white/10 bg-black/10 p-5 sm:p-6">
              <div className="flex items-start justify-between gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                {showAccent ? <Sparkles className="h-5 w-5 text-primary/80" /> : <ArrowUpRight className="h-5 w-5 text-primary/70" />}
              </div>

              <div className="mt-6 space-y-3">
                {data.highlights.map((highlight) => (
                  <div
                    key={highlight}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                      <Users className="h-4 w-4 text-primary" />
                    </div>
                    <p className="text-sm font-medium text-foreground">{highlight}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const EnhancedCard = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const stackRef = useRef<HTMLDivElement | null>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: stackRef,
    offset: ["start start", "end end"],
  });

  const overlayY = useTransform(scrollYProgress, [0, 0.72, 1], ["100vh", "0vh", "0vh"]);

  return (
    <div ref={sectionRef} className="mx-auto mt-10 max-w-6xl sm:mt-14">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.75 }}
        className="mb-8 text-center"
      >
        <span className="section-kicker">Transformation Journey</span>
        <h3 className="mt-3 text-2xl font-bold sm:text-3xl">
          Taking colleges from a quiet start to <span className="text-primary text-glow">credible growth</span>
        </h3>
      </motion.div>

      <div ref={stackRef} className="relative h-[125vh]">
        <div className="sticky top-0 flex h-screen w-full items-center overflow-hidden py-6 sm:py-8">
          <div className="relative h-[76vh] min-h-[620px] w-full">
            <div className="absolute inset-0 z-10">
              <StoryCard data={cards[0]} />
            </div>

            <motion.div
              style={{ y: overlayY }}
              className="absolute inset-0 z-20 shadow-[0_-30px_60px_rgba(0,0,0,0.5)] will-change-transform"
            >
              <StoryCard data={cards[1]} showAccent />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedCard;

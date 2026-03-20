import {
  motion,
  useInView,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  ArrowUpRight,
  BarChart3,
  Building2,
  CheckCircle,
  Shield,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react";
import { useRef } from "react";

type BenefitItem = {
  icon: typeof CheckCircle;
  title: string;
  desc: string;
  stat: string;
};

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

const benefits: BenefitItem[] = [
  {
    icon: CheckCircle,
    title: "100% Seat Fulfillment",
    desc: "Guaranteed full enrollment capacity through our proven funnel system.",
    stat: "100%",
  },
  {
    icon: TrendingUp,
    title: "Reputation Growth",
    desc: "Elevate brand perception among students, parents, and governing bodies.",
    stat: "3x",
  },
  {
    icon: Shield,
    title: "Operational Efficiency",
    desc: "Reduce administrative costs and improve admission cycle time by 60%.",
    stat: "60%",
  },
];

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
    highlights: [
      "Sharper positioning",
      "Better inquiry flow",
      "Stronger internal process",
    ],
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
    highlights: [
      "Professional brand perception",
      "Higher conversion confidence",
      "Long-term growth readiness",
    ],
    icon: BarChart3,
  },
];

const STORY_SCROLL_SCREENS = cards.length + 1.1;
const TITLE_REVEAL_END = 0.18;
const REVEAL_START = 0.2;
const REVEAL_END = 0.76;

type StoryCardProps = {
  data: CardData;
  showAccent?: boolean;
};

const StoryCard = ({ data, showAccent = false }: StoryCardProps) => {
  const Icon = data.icon;

  return (
    <div className="relative h-full overflow-y-auto rounded-[1.5rem] border border-white/10 glass sm:overflow-hidden sm:rounded-[2rem]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-primary/10 to-transparent sm:h-40" />
      <div className="pointer-events-none absolute -right-10 top-8 h-32 w-32 rounded-full bg-primary/10 blur-3xl sm:h-40 sm:w-40" />

      <div className="relative grid min-h-full gap-5 px-4 py-5 sm:h-full sm:gap-8 sm:px-8 sm:py-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-10 lg:py-10">
        <div>
          <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-primary sm:text-xs">
            {data.eyebrow}
          </span>

          <h3 className="mt-3 text-xl font-bold leading-tight sm:mt-4 sm:text-3xl lg:text-4xl">
            {data.title}
          </h3>

          <p className="mt-3 max-w-2xl text-[13px] font-light leading-relaxed text-muted-foreground sm:mt-4 sm:text-base">
            {data.subtitle}
          </p>

          <p className="mt-3 max-w-2xl text-[13px] font-light leading-relaxed text-foreground/85 sm:mt-4 sm:text-base">
            {data.summary}
          </p>

          <div className="mt-5 grid gap-2.5 sm:mt-6 sm:gap-3 sm:grid-cols-3">
            {data.metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-2xl border border-white/10 bg-white/5 px-3 py-3 sm:px-4 sm:py-4"
              >
                <p className="text-[11px] uppercase tracking-[0.22em] text-primary/75">
                  {metric.label}
                </p>
                <p className="mt-1.5 text-sm font-semibold text-foreground sm:mt-2 sm:text-base">
                  {metric.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative h-auto min-h-0 sm:h-full">
          <div className="grid h-auto gap-3 sm:h-full sm:gap-4">
            <div className="rounded-[1.4rem] border border-white/10 bg-black/10 p-4 sm:rounded-[1.75rem] sm:p-6">
              <div className="flex items-start justify-between gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 sm:h-12 sm:w-12 sm:rounded-2xl">
                  <Icon className="h-5 w-5 text-primary sm:h-6 sm:w-6" />
                </div>
                {showAccent ? (
                  <Sparkles className="h-5 w-5 text-primary/80" />
                ) : (
                  <ArrowUpRight className="h-5 w-5 text-primary/70" />
                )}
              </div>

              <div className="mt-4 space-y-2.5 sm:mt-6 sm:space-y-3">
                {data.highlights.map((highlight) => (
                  <div
                    key={highlight}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-3 py-2.5 sm:px-4 sm:py-3"
                  >
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 sm:h-8 sm:w-8">
                      <Users className="h-3.5 w-3.5 text-primary sm:h-4 sm:w-4" />
                    </div>
                    <p className="text-[13px] font-medium leading-snug text-foreground sm:text-sm">
                      {highlight}
                    </p>
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

const BenefitsSection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const storyRef = useRef<HTMLDivElement | null>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: storyRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 24,
    mass: 0.45,
  });

  const titleOpacity = useTransform(
    smoothProgress,
    [0, TITLE_REVEAL_END],
    [0, 1],
  );
  const titleY = useTransform(smoothProgress, [0, TITLE_REVEAL_END], [32, 0]);
  const baseCardScale = useTransform(
    smoothProgress,
    [0, REVEAL_END, 1],
    [1, 1, 1],
  );
  const baseCardOpacity = useTransform(
    smoothProgress,
    [0, REVEAL_START, REVEAL_END, 1],
    [1, 1, 0.12, 0.08],
  );
  const overlayY = useTransform(
    smoothProgress,
    [0, REVEAL_START, REVEAL_END, 1],
    ["6%", "6%", "-100%", "-100%"],
  );
  const overlayScale = useTransform(
    smoothProgress,
    [0, REVEAL_START, REVEAL_END],
    [0.994, 0.994, 1],
  );
  const overlayOpacity = useTransform(
    smoothProgress,
    [0, REVEAL_START, REVEAL_END],
    [0.9, 0.9, 1],
  );
  const overlayBackdropOpacity = useTransform(
    smoothProgress,
    [0, REVEAL_START, REVEAL_END],
    [0, 0, 1],
  );

  return (
    <section ref={sectionRef} id="why-choose-us" className="section-shell">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="section-heading"
        >
          <span className="section-kicker">Why CareerKick</span>
          <h2 className="section-title">
            Measurable <span className="text-primary text-glow">Benefits</span>
          </h2>
        </motion.div>

        <div className="mx-auto grid max-w-5xl gap-4 sm:gap-6 lg:grid-cols-3 lg:gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + index * 0.15 }}
              className="rounded-2xl p-6 text-center transition-all duration-500 glass glass-hover group hover:neon-glow sm:p-8"
            >
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 transition-colors group-hover:bg-primary/20 sm:mb-6 sm:h-16 sm:w-16">
                <benefit.icon className="h-7 w-7 text-primary" />
              </div>
              <p className="counter-glow mb-2 text-3xl font-bold text-primary sm:text-4xl">
                {benefit.stat}
              </p>
              <h3 className="mb-3 text-lg font-semibold">{benefit.title}</h3>
              <p className="text-sm font-light leading-relaxed text-muted-foreground">
                {benefit.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mx-auto mt-10 max-w-6xl sm:mt-14">
          <div
            ref={storyRef}
            className="relative"
            style={{
              height: `${STORY_SCROLL_SCREENS * 100}vh`,
              minHeight: `${STORY_SCROLL_SCREENS * 100}svh`,
            }}
          >
            <div
              className="sticky top-0 flex w-full items-center py-3 sm:py-8"
              style={{ height: "100vh", minHeight: "100svh" }}
            >
              <div className="flex w-full flex-col justify-center gap-4 pt-8 sm:gap-8 sm:pt-16 lg:pt-20">
                <motion.div
                  style={{ opacity: titleOpacity, y: titleY }}
                  className="px-3 text-center will-change-transform sm:px-4"
                >
                  <span className="section-kicker">Transformation Journey</span>
                  <h3 className="mt-2 text-xl font-bold leading-tight sm:mt-3 sm:text-3xl">
                    Taking colleges from a quiet start to{" "}
                    <span className="text-primary text-glow">
                      credible growth
                    </span>
                  </h3>
                </motion.div>

                <div className="relative h-[68vh] min-h-0 w-full overflow-hidden sm:h-[62vh] sm:min-h-[520px] lg:h-[70vh]">
                  <motion.div
                    style={{ scale: baseCardScale, opacity: baseCardOpacity }}
                    className="absolute inset-0 z-10 will-change-transform"
                  >
                    <StoryCard data={cards[0]} />
                  </motion.div>

                  <motion.div
                    style={{
                      y: overlayY,
                      scale: overlayScale,
                      opacity: overlayOpacity,
                    }}
                    className="absolute inset-x-0 top-full z-20 h-full shadow-[0_-30px_60px_rgba(0,0,0,0.5)] will-change-transform"
                  >
                    <motion.div
                      style={{ opacity: overlayBackdropOpacity }}
                      className="absolute inset-0 rounded-[2rem] bg-background/92 backdrop-blur-md"
                    />
                    <div className="relative h-full">
                      <StoryCard data={cards[1]} showAccent />
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;

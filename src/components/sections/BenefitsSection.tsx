import { motion, useInView, useScroll, useTransform } from "framer-motion";
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

const STORY_SCROLL_SCREENS = cards.length + 0.35;
const REVEAL_START = 0.18;
const REVEAL_END = 0.7;

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
                {showAccent ? (
                  <Sparkles className="h-5 w-5 text-primary/80" />
                ) : (
                  <ArrowUpRight className="h-5 w-5 text-primary/70" />
                )}
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

const BenefitsSection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const storyRef = useRef<HTMLDivElement | null>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: storyRef,
    offset: ["start start", "end end"],
  });

  const baseCardScale = useTransform(scrollYProgress, [0, REVEAL_END, 1], [1, 0.965, 0.95]);
  const baseCardOpacity = useTransform(scrollYProgress, [0, REVEAL_END, 1], [1, 0.96, 0.92]);
  const overlayY = useTransform(
    scrollYProgress,
    [0, REVEAL_START, REVEAL_END, 1],
    ["0%", "0%", "-100%", "-100%"],
  );
  const overlayScale = useTransform(scrollYProgress, [0, REVEAL_START, REVEAL_END], [0.985, 0.985, 1]);

  return (
    <section ref={sectionRef} className="section-shell">
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
              <p className="counter-glow mb-2 text-3xl font-bold text-primary sm:text-4xl">{benefit.stat}</p>
              <h3 className="mb-3 text-lg font-semibold">{benefit.title}</h3>
              <p className="text-sm font-light leading-relaxed text-muted-foreground">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mx-auto mt-10 max-w-6xl sm:mt-14">
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

          <div
            ref={storyRef}
            className="relative"
            style={{
              height: `${STORY_SCROLL_SCREENS * 100}vh`,
              minHeight: `${STORY_SCROLL_SCREENS * 100}svh`,
            }}
          >
            <div
              className="sticky top-0 flex w-full items-center overflow-hidden py-4 sm:py-8"
              style={{ height: "100vh", minHeight: "100svh" }}
            >
              <div className="relative h-[72vh] min-h-[520px] w-full overflow-hidden sm:h-[76vh] sm:min-h-[620px] lg:h-[78vh]">
                <motion.div
                  style={{ scale: baseCardScale, opacity: baseCardOpacity }}
                  className="absolute inset-0 z-10 will-change-transform"
                >
                  <StoryCard data={cards[0]} />
                </motion.div>

                <motion.div
                  style={{ y: overlayY, scale: overlayScale }}
                  className="absolute inset-x-0 top-full z-20 h-full shadow-[0_-30px_60px_rgba(0,0,0,0.5)] will-change-transform"
                >
                  <StoryCard data={cards[1]} showAccent />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;

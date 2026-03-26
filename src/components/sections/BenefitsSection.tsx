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
  Rocket,
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
  icon: typeof Building2 | typeof BarChart3 | typeof Rocket;
};

const benefits: BenefitItem[] = [
  {
    icon: CheckCircle,
    title: "100% Seat Fulfillment",
    desc: "Fill all seats with deserving candidates efficiently.",
    stat: "100%",
  },
  {
    icon: TrendingUp,
    title: "Reputation Growth",
    desc: "Build brand visibility and credibility in the market.",
    stat: "3x",
  },
  {
    icon: Shield,
    title: "Operational Efficiency",
    desc: "Simplified and organized admission workflows.",
    stat: "60%",
  },
];

const cards: CardData[] = [
  {
    eyebrow: "Benefit 01",
    title: "Guaranteed 100% Seat Fulfillment",
    subtitle:
      "Fill all seats with deserving candidates efficiently.",
    summary:
      "Our focus is on efficiency—ensuring that every seat is filled by candidates who align with your institution's academic standards and intent.",
    metrics: [
      { label: "Occupancy", value: "Gap to 100%" },
      { label: "Candidate Quality", value: "Deserving & Verified" },
      { label: "Efficiency", value: "High-Speed Allotment" },
    ],
    highlights: [
      "Targeted seat allocation",
      "Deserving candidate matching",
      "Maximum capacity utilization",
    ],
    icon: Building2,
  },
  {
    eyebrow: "Benefit 02",
    title: "Enhanced College Reputation",
    subtitle:
      "Build brand visibility and credibility in the market.",
    summary:
      "The goal is to create long-term brand equity, ensuring your college becomes a recognized name with a strong recall value in a competitive market.",
    metrics: [
      { label: "Brand Visibility", value: "Local to National" },
      { label: "Market Trust", value: "Emerging to Established" },
      { label: "Recall", value: "Strong & Positive" },
    ],
    highlights: [
      "Premium brand positioning",
      "Credibility building",
      "Market-wide visibility",
    ],
    icon: BarChart3,
  },
  {
    eyebrow: "Benefit 03",
    title: "Operational Streamlining",
    subtitle:
      "Simplified and organized admission workflows.",
    summary:
      "By organizing admission cycles and communication channels, we ensure your team spends less time on paperwork and more time on quality interactions.",
    metrics: [
      { label: "Workflow", value: "Manual to Automated" },
      { label: "Organization", value: "Fragmented to Unified" },
      { label: "Team Stress", value: "High to Managed" },
    ],
    highlights: [
      "Simplified admission cycles",
      "Unified data tracking",
      "Organized stakeholder flow",
    ],
    icon: Rocket,
  },
];

// Refined Scroll Logic
const STORY_SCROLL_SCREENS = 4;
const TITLE_FADE = [0, 0.12];
const STAGE_1 = [0, 0.35, 0.45]; 
const STAGE_2 = [0.35, 0.5, 0.75, 0.85];
const STAGE_3 = [0.75, 0.9, 1];

const StoryCard = ({ data, showAccent = false }: { data: CardData; showAccent?: boolean }) => {
  const Icon = data.icon;
  return (
    <div className="relative h-full w-full overflow-hidden rounded-[1.5rem] border border-white/10 glass sm:rounded-[2rem]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-primary/10 to-transparent" />
      <div className="relative grid h-full gap-5 px-4 py-5 sm:gap-8 sm:px-10 sm:py-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-primary">
            {data.eyebrow}
          </span>
          <h3 className="mt-4 text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl">
            {data.title}
          </h3>
          <p className="mt-4 text-[14px] font-light leading-relaxed text-muted-foreground sm:text-base">
            {data.subtitle}
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {data.metrics.map((m) => (
              <div key={m.label} className="rounded-2xl border border-white/5 bg-white/5 p-3 sm:p-4">
                <p className="text-[10px] uppercase tracking-widest text-primary/70">{m.label}</p>
                <p className="mt-1 text-sm font-bold sm:text-base">{m.value}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="hidden lg:block">
           <div className="rounded-[2rem] border border-white/10 bg-black/20 p-8 shadow-2xl">
              <div className="flex items-center justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/20">
                  <Icon className="h-7 w-7 text-primary" />
                </div>
                {showAccent ? <Sparkles className="text-primary/80" /> : <ArrowUpRight className="text-primary/40" />}
              </div>
              <div className="mt-8 space-y-4">
                {data.highlights.map((h) => (
                  <div key={h} className="flex items-center gap-4 rounded-xl bg-white/5 p-4">
                    <Users className="h-5 w-5 text-primary/60" />
                    <p className="text-sm font-medium">{h}</p>
                  </div>
                ))}
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
    stiffness: 100,
    damping: 30,
    mass: 0.5,
  });

  // Title Animations
  const titleOpacity = useTransform(smoothProgress, TITLE_FADE, [0, 1]);
  const titleY = useTransform(smoothProgress, TITLE_FADE, [20, 0]);

  // Card 1: Static at start, then blurs
  const card1Scale = useTransform(smoothProgress, [STAGE_1[1], STAGE_1[2]], [1, 0.95]);
  const card1Blur = useTransform(smoothProgress, [STAGE_1[1], STAGE_1[2]], ["blur(0px)", "blur(12px)"]);
  const card1Overlay = useTransform(smoothProgress, [STAGE_1[1], STAGE_1[2]], ["rgba(0,0,0,0)", "rgba(0,0,0,0.4)"]);

  // Card 2: Starts at 150% (hidden), moves to 0% (visible), then blurs
  const card2Y = useTransform(smoothProgress, [STAGE_2[0], STAGE_2[1]], ["150%", "0%"]);
  const card2Scale = useTransform(smoothProgress, [STAGE_2[2], STAGE_2[3]], [1, 0.95]);
  const card2Blur = useTransform(smoothProgress, [STAGE_2[2], STAGE_2[3]], ["blur(0px)", "blur(12px)"]);
  const card2Overlay = useTransform(smoothProgress, [STAGE_2[2], STAGE_2[3]], ["rgba(0,0,0,0)", "rgba(0,0,0,0.4)"]);

  // Card 3: Starts at 150% (hidden), moves to 0% (visible)
  const card3Y = useTransform(smoothProgress, [STAGE_3[0], STAGE_3[1]], ["150%", "0%"]);

  return (
    <section ref={sectionRef} id="why-choose-us" className="section-shell">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mx-auto max-w-6xl">
          {/* Mobile Layout */}
          <div className="space-y-6 sm:hidden">
            <h3 className="text-center text-xl font-bold">Benefits Of Partenering With <span className="text-primary">Careerkick</span></h3>
            {cards.map((c, i) => <StoryCard key={i} data={c} showAccent={i > 0} />)}
          </div>

          {/* Desktop Sticky Scroll */}
          <div ref={storyRef} className="relative hidden h-[400vh] sm:block">
            <div className="sticky top-0 flex h-screen w-full flex-col items-center justify-center overflow-hidden">
              <motion.div style={{ opacity: titleOpacity, y: titleY }} className="mb-12 text-center">
                <span className="section-kicker">Why Partner With Careerkick</span>
                <h3 className="mt-2 text-3xl font-bold">
                  Benefits Of Partenering With <span className="text-primary">Careerkick</span>
                </h3>
              </motion.div>

              <div className="relative h-[60vh] w-full max-w-5xl perspective-1000">
                
                {/* Card 1 Layer */}
                <motion.div 
                  style={{ scale: card1Scale, filter: card1Blur }} 
                  className="absolute inset-0 z-10 will-change-transform"
                >
                  <StoryCard data={cards[0]} />
                  <motion.div style={{ backgroundColor: card1Overlay }} className="pointer-events-none absolute inset-0 z-20 rounded-[2rem]" />
                </motion.div>

                {/* Card 2 Layer */}
                <motion.div 
                  style={{ y: card2Y, scale: card2Scale, filter: card2Blur }} 
                  className="absolute inset-0 z-20 shadow-[0_-30px_60px_rgba(0,0,0,0.6)] will-change-transform"
                >
                  <StoryCard data={cards[1]} showAccent />
                  <motion.div style={{ backgroundColor: card2Overlay }} className="pointer-events-none absolute inset-0 z-30 rounded-[2rem]" />
                </motion.div>

                {/* Card 3 Layer */}
                <motion.div 
                  style={{ y: card3Y }} 
                  className="absolute inset-0 z-40 shadow-[0_-30px_60px_rgba(0,0,0,0.7)] will-change-transform"
                >
                  <StoryCard data={cards[2]} showAccent />
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
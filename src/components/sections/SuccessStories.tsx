import { motion, useInView } from "framer-motion";
import {
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

type StoryItem = {
  college: string;
  image: string;
  problem: string;
  solution: string;
  result: string;
};

const stories: StoryItem[] = [
  {
    college: "MAHARANA GROUP OF INSTITUTIONS, KANPUR",
    image: "/maharana.webp",
    problem: "Low seat fill rate and lack of market presence.",
    solution: "Comprehensive branding, admission support, and counseling.",
    result:
      "Achieved 100% admissions within one cycle. Increased their fee from 2 Lakhs To 3 Lakhs",
  },
  {
    college: "MAJOR SD SINGH AYURVEDIC MEDICAL COLLEGE",
    image: "/sd.webp",
    problem: "Vacant seats due to low college presence and limited demand.",
    solution:
      "Transformed institutions into the best college of UP and the most demanding college of UP through continuous brand reputation management and strategic positioning.",
    result: " Increased fee from 2 Lakhs 60K To Rs. 3 lakhs per year.",
  },
  {
    college: "NAIMINATH AYURVEDIC MEDICAL COLLEGE",
    image: "/naiminath.jpg",
    problem: "Inefficient admission processes.",
    solution: "Process restructuring and targeted campaigns.",
    result:
      "Achieved 100% admissions with high-scoring students within a single cycle. Increased their fee from 2 lakhs to Rs.3 lakhs plus Rs.50K as development fees.",
  },
  {
    college: "BABU YUGRAJ AYURVEDIC MEDICAL COLLEGE",
    image: "/desktop.png",
    problem: "Inconsistent lead quality and low counseling conversion.",
    solution:
      "Built focused digital outreach and streamlined counseling workflows.",
    result:
      "Improved inquiry quality and delivered stronger seat conversion momentum in one admission cycle.",
  },
  {
    college: "SHRI BABU SINGH JAI SINGH AYURVEDIC MEDICAL COLLEGE",
    image: "/desktop.png",
    problem: "Weak visibility in a highly competitive admission landscape.",
    solution:
      "Strengthened brand positioning and aligned campaign messaging with parent/student concerns.",
    result:
      "Boosted market recall and improved consistency in admission funnel performance.",
  },
  {
    college: "SHRI KRISHNA AYURVEDIC MEDICAL COLLEGE",
    image: "/desktop.png",
    problem: "Fragmented admission communication across channels.",
    solution:
      "Implemented unified communication strategy with structured follow-up sequences.",
    result:
      "Enhanced engagement across touchpoints and improved admission readiness.",
  },
  {
    college: "SAS AYURVEDIC MEDICAL COLLEGE",
    image: "/desktop.png",
    problem: "Low campaign efficiency and delayed conversion cycles.",
    solution:
      "Introduced performance-led campaigns with stage-wise tracking and optimization.",
    result:
      "Increased admission velocity and improved conversion confidence through the cycle.",
  },
  {
    college: "DR. SHAKUNTALA AYURVEDIC MEDICAL COLLEGE",
    image: "/desktop.png",
    problem: "Limited brand trust among serious admission prospects.",
    solution:
      "Focused on trust-building content, counseling-first messaging, and stronger local visibility.",
    result:
      "Improved credibility perception and strengthened the admission outcome pipeline.",
  },
];

const contentVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function SuccessStories(): JSX.Element {
  const sectionRef = useRef<HTMLElement | null>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [api, setApi] = useState<CarouselApi>();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!api) return;
    const onSelect = () => setActiveIndex(api.selectedScrollSnap());
    onSelect();
    api.on("select", onSelect);
    api.on("reInit", onSelect);
    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api]);

  useEffect(() => {
    if (!api || isPaused) return;
    const timer = window.setInterval(() => {
      api.scrollNext();
    }, 4500);
    return () => window.clearInterval(timer);
  }, [api, isPaused]);

  return (
    <section
      ref={sectionRef}
      id="success-stories"
      className="section-shell relative overflow-hidden"
    >
      <div className="absolute left-1/2 top-16 h-52 w-[72%] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute right-10 top-24 h-44 w-44 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.7 }}
          className="section-heading mx-auto max-w-3xl text-center"
        >
          <span className="section-kicker">Success Stories</span>
          <h2 className="section-title">
            Colleges That Saw Real{" "}
            <span className="text-primary text-glow">Admission Growth</span>
          </h2>
          <p className="section-copy mx-auto max-w-2xl">
            See how different BAMS colleges improved visibility, strengthened
            counselling, and achieved better admission results with CareerKick.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="mx-auto mt-10 max-w-6xl sm:mt-14"
        >
          <Carousel
            setApi={setApi}
            opts={{ align: "start", loop: true }}
            className="relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onFocusCapture={() => setIsPaused(true)}
            onBlurCapture={() => setIsPaused(false)}
          >
            <CarouselContent className="-ml-0">
              {stories.map((story, index) => (
                <CarouselItem key={story.college} className="pl-0">
                  <motion.div
                    variants={contentVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid gap-4 rounded-[1.5rem] border border-white/10 bg-black/20 p-3 glass sm:gap-6 sm:rounded-[2.5rem] sm:p-5 lg:grid-cols-[1fr_1fr]"
                  >
                    {/* Image & Header Column */}
                    <div className="relative flex flex-col overflow-hidden rounded-[1.25rem] border border-white/10 bg-black/30 sm:rounded-[2rem]">
                      <div className="pointer-events-none absolute inset-x-8 top-0 h-24 rounded-full bg-primary/12 blur-3xl" />
                      <div className="relative aspect-[16/10] w-full overflow-hidden sm:aspect-video">
                        <img
                          src={story.image}
                          alt={story.college}
                          loading="lazy"
                          className="h-full w-full object-cover object-center"
                        />
                        <button
                          type="button"
                          aria-label="Previous story"
                          onClick={() => api?.scrollPrev()}
                          className="absolute left-2 top-1/2 z-20 inline-flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-black/55 text-white backdrop-blur-sm transition hover:bg-black/75 sm:hidden"
                        >
                          <ChevronLeft className="h-4 w-4" />
                        </button>
                        <button
                          type="button"
                          aria-label="Next story"
                          onClick={() => api?.scrollNext()}
                          className="absolute right-2 top-1/2 z-20 inline-flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-black/55 text-white backdrop-blur-sm transition hover:bg-black/75 sm:hidden"
                        >
                          <ChevronRight className="h-4 w-4" />
                        </button>
                      </div>
                      <div className="mt-auto border-t border-white/10 bg-black/40 p-4 sm:p-6 sm:px-8">
                        <div className="flex flex-wrap items-center justify-between gap-3">
                          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-primary/85 sm:text-xs">
                            Featured College
                          </p>
                          <span className="shrink-0 rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-primary/80 sm:text-xs">
                            {index + 1} / {stories.length}
                          </span>
                        </div>
                        <h3 className="mt-3 text-base font-semibold text-white sm:text-lg lg:text-xl lg:leading-tight">
                          {story.college}
                        </h3>
                      </div>
                    </div>

                    {/* Content Journey Column */}
                    <div className="flex flex-col rounded-[1.25rem] border border-white/10 bg-black/20 p-4 sm:rounded-[2rem] sm:p-6 lg:p-8">
                      <div className="mb-4 flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4 sm:mb-6 sm:pb-5">
                        <div className="flex items-center gap-2 text-primary sm:gap-3">
                          <Sparkles className="h-4 w-4 shrink-0 sm:h-5 sm:w-5" />
                          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-primary/80 sm:text-xs">
                            Case Snapshot
                          </p>
                        </div>
                        <p className="text-[11px] text-muted-foreground sm:text-xs">
                          Problem to result journey
                        </p>
                      </div>

                      <div className="grid flex-1 gap-3 sm:gap-4">
                        {/* 1. Problem */}
                        <div className="rounded-[1rem] border border-white/10 bg-white/5 p-4 sm:rounded-[1.25rem] sm:p-5">
                          <div className="flex items-start gap-3 sm:gap-4">
                            <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/10 text-[11px] font-semibold text-foreground">
                              1
                            </span>
                            <div>
                              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary/80 sm:text-xs">
                                Problem
                              </p>
                              <p className="mt-1.5 text-sm font-light leading-relaxed text-muted-foreground sm:text-[15px]">
                                {story.problem}
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* 2. Solution */}
                        <div className="rounded-[1rem] border border-white/10 bg-white/5 p-4 sm:rounded-[1.25rem] sm:p-5">
                          <div className="flex items-start gap-3 sm:gap-4">
                            <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/10 text-[11px] font-semibold text-foreground">
                              2
                            </span>
                            <div>
                              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary/80 sm:text-xs">
                                Solution
                              </p>
                              <p className="mt-1.5 text-sm font-light leading-relaxed text-muted-foreground sm:text-[15px]">
                                {story.solution}
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* 3. Result */}
                        <div className="rounded-[1rem] border border-primary/25 bg-primary/10 p-4 shadow-[0_0_15px_rgba(196,255,59,0.05)] sm:rounded-[1.25rem] sm:p-5">
                          <div className="flex items-start gap-3 sm:gap-4">
                            <div className="mt-0.5 relative">
                              <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/20 text-[11px] font-semibold text-primary">
                                3
                              </span>
                              <CheckCircle2 className="absolute -bottom-1 -right-1 h-3.5 w-3.5 bg-background rounded-full text-primary" />
                            </div>
                            <div>
                              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary/90 sm:text-xs">
                                Result
                              </p>
                              <p className="mt-1.5 text-sm font-medium leading-relaxed text-foreground sm:text-base">
                                {story.result}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Carousel Arrows */}
            <CarouselPrevious className="left-2 top-[calc(100%+1.5rem)] h-10 w-10 -translate-y-0 border-white/20 bg-black/60 text-foreground hover:bg-black/75 sm:-left-5 sm:top-1/2 sm:h-12 sm:w-12 sm:-translate-y-1/2 lg:-left-6 xl:-left-12" />
            <CarouselNext className="right-2 top-[calc(100%+1.5rem)] h-10 w-10 -translate-y-0 border-white/20 bg-black/60 text-foreground hover:bg-black/75 sm:-right-5 sm:top-1/2 sm:h-12 sm:w-12 sm:-translate-y-1/2 lg:-right-6 xl:-right-12" />
          </Carousel>

          {/* Dots Navigation */}
          <div className="mt-20 flex flex-wrap items-center justify-center gap-2.5 sm:mt-10">
            {stories.map((story, index) => (
              <button
                key={`${story.college}-dot`}
                type="button"
                onClick={() => api?.scrollTo(index)}
                aria-label={`Go to ${story.college}`}
                className={`h-2 rounded-full transition-all duration-300 sm:h-2.5 ${
                  activeIndex === index
                    ? "w-8 bg-primary sm:w-10"
                    : "w-2 bg-white/25 hover:bg-white/40 sm:w-2.5"
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

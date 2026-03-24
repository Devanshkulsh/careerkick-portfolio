import { motion, useInView } from "framer-motion";
import { CheckCircle2, Sparkles } from "lucide-react";
import { useRef, useState } from "react";

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
    solution:
      "Comprehensive branding, admission support, and counseling.",
    result: "Achieved 100% admissions within one cycle. Increased their fee from 2 Lakhs To 3 Lakhs",
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
    solution:
      "Process restructuring and targeted campaigns.",
    result: "Achieved 100% admissions with high-scoring students within a single cycle. Increased their fee from 2 lakhs to Rs.3 lakhs plus Rs.50K as development fees.",
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
  const [activeIndex, setActiveIndex] = useState(0);

  const activeStory = stories[activeIndex];

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

        <div className="mx-auto mt-10 grid max-w-7xl gap-6 lg:grid-cols-[0.9fr_1.05fr_1.05fr] lg:items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="rounded-[2rem] border border-white/10 bg-black/20 p-3 glass"
          >
            <div className="flex flex-col gap-3">
              {stories.map((story, index) => (
                <button
                  key={story.college}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`group relative overflow-hidden rounded-[1.4rem] border px-4 py-4 text-left transition-all duration-300 sm:px-5 ${
                    activeIndex === index
                      ? "border-primary/35 bg-primary/14 shadow-[0_18px_40px_rgba(132,204,22,0.12)]"
                      : "border-white/10 bg-white/5 hover:border-primary/20 hover:bg-white/8"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`mt-1 h-2.5 w-2.5 rounded-full ${
                        activeIndex === index ? "bg-primary" : "bg-white/30"
                      }`}
                    />
                    <p
                      className={`text-sm leading-relaxed sm:text-[15px] ${
                        activeIndex === index
                          ? "font-semibold text-foreground"
                          : "font-medium text-muted-foreground"
                      }`}
                    >
                      {story.college}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div
            key={`${activeStory.college}-image`}
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            className="overflow-hidden rounded-[2rem] border border-white/10 bg-black/20 p-3 glass"
          >
            <div className="relative h-full min-h-[320px] overflow-hidden rounded-[1.5rem]">
              <img
                src={activeStory.image}
                alt={activeStory.college}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary/85">
                  Featured College
                </p>
                <h3 className="mt-2 text-lg font-semibold text-white sm:text-xl">
                  {activeStory.college}
                </h3>
              </div>
            </div>
          </motion.div>

          <motion.div
            key={`${activeStory.college}-content`}
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            className="rounded-[2rem] border border-white/10 bg-black/20 p-5 glass sm:p-6"
          >
            <div className="flex items-center gap-3 text-primary">
              <Sparkles className="h-5 w-5" />
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary/80">
                Case Snapshot
              </p>
            </div>

            <div className="mt-5 space-y-4">
              <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/80">
                  Problem
                </p>
                <p className="mt-2 text-sm font-light leading-relaxed text-muted-foreground sm:text-base">
                  {activeStory.problem}
                </p>
              </div>

              <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/80">
                  Solution
                </p>
                <p className="mt-2 text-sm font-light leading-relaxed text-muted-foreground sm:text-base">
                  {activeStory.solution}
                </p>
              </div>

              <div className="rounded-[1.5rem] border border-primary/20 bg-primary/10 p-4">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/90">
                    Result
                  </p>
                </div>
                <p className="mt-2 text-sm font-medium leading-relaxed text-foreground sm:text-base">
                  {activeStory.result}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

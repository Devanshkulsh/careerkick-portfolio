import { motion, useInView } from "framer-motion";
import {
  Check,
  Sparkles,
  Zap,
  Target,
  BarChart3,
  GraduationCap,
} from "lucide-react";
import { useRef } from "react";

const processSteps = [
  {
    title: "Initial Consultation",
    description: "Understanding college-specific needs and goals.",
    icon: <Target className="w-6 h-6" />,
  },
  {
    title: "Strategic Planning",
    description: "Developing customized admission and marketing plans.",
    icon: <Zap className="w-6 h-6" />,
  },
  {
    title: "Implementation",
    description: "Executing branding campaigns and admission drives.",
    icon: <GraduationCap className="w-6 h-6" />,
  },
  {
    title: "Continuous Monitoring",
    description: "Understanding college-specific needs and goals.",
    icon: <BarChart3 className="w-6 h-6" />,
  },
  {
    title: "Final Review",
    description:
      "Ensuring all seats are filled and stakeholders are satisfied.",
    icon: <Sparkles className="w-6 h-6" />,
  },
];

export default function AdmissionProcessSection() {
  const scrollRef = useRef(null);
  const isInView = useInView(scrollRef, { once: true, margin: "-10%" });

  return (
    <section
      ref={scrollRef}
      className="relative overflow-hidden py-16 sm:py-24 lg:py-28"
      style={{
        background: "linear-gradient(180deg, #f8fafc 0%, #f1f5f9 100%)",
      }}
    >
      {/* Background Decorative Accents */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-40">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-sky-100 blur-[120px]" />
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] rounded-full bg-emerald-50 blur-[120px]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="text-[#4d6b00] font-extrabold tracking-[0.25em] uppercase text-[0.65rem] sm:text-xs"
          >
            The Workflow
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="mt-4 section-title font-black text-slate-950 tracking-tight leading-tight"
          >
            OUR PROVEN <span style={{ color: "#5e7f00" }}>ADMISSION</span>{" "}
            PROCESS
          </motion.h2>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Central Line: Left-aligned on mobile, center-aligned on LG */}
          <div className="absolute left-[27px] lg:left-1/2 top-0 bottom-0 w-px bg-slate-300 -translate-x-1/2 z-0" />

          <div className="space-y-12 lg:space-y-0">
            {processSteps.map((step, idx) => (
              <div
                key={idx}
                className={`relative flex items-start lg:items-center w-full lg:mb-20 last:mb-0 ${
                  idx % 2 !== 0 ? "lg:flex-row-reverse" : "lg:flex-row"
                }`}
              >
                {/* Text Content Container */}
                <motion.div
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.1,
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="flex-1 w-full pl-16 lg:pl-0"
                >
                  <div
                    className={`
                      relative rounded-[1.5rem] sm:rounded-[2rem] border border-slate-200 bg-white p-6 sm:p-10 
                      shadow-[0_20px_50px_rgba(0,0,0,0.05)] transition-all duration-300 
                      hover:shadow-[0_30px_60px_rgba(0,0,0,0.08)] hover:-translate-y-1
                      ${idx % 2 !== 0 ? "lg:text-right lg:mr-12" : "lg:text-left lg:ml-12"}
                    `}
                  >
                    <div
                      className={`
                      inline-flex p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-[#5e7f00]/10 text-[#5e7f00] mb-4 sm:mb-6
                      ${idx % 2 !== 0 ? "lg:ml-auto" : ""}
                    `}
                    >
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 sm:text-2xl mb-2 sm:mb-4 leading-tight">
                      {step.title}
                    </h3>
                    <p className="text-sm sm:text-base font-medium leading-relaxed text-slate-700">
                      {step.description}
                    </p>
                  </div>
                </motion.div>

                {/* Progress Circle: Mobile Left / Desktop Center */}
                <div className="absolute left-0 lg:left-1/2 lg:-translate-x-1/2 top-6 lg:top-auto z-10 flex items-center justify-center shrink-0 w-14 h-14 rounded-full bg-[#5e7f00] text-white font-bold text-lg shadow-[0_0_20px_rgba(94,127,0,0.3)] ring-8 ring-[#f8fafc]">
                  {idx + 1}
                </div>

                {/* Desktop Spacer: Keeps the grid balanced */}
                <div className="flex-1 hidden lg:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

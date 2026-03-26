import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { BarChart3, ShoppingCart, Users } from "lucide-react";
import { useRef } from "react";

type Service = {
  id: number;
  title: string;
  points: string[];
  position: "top-left" | "bottom-center" | "top-right";
  icon: typeof BarChart3;
};

const roadPath =
  "M 0 100 H 222 C 282 100 332 146 332 208 V 302 C 332 360 372 392 428 392 H 550 C 610 392 654 434 654 494 V 538 C 654 618 714 680 794 680 H 848 C 926 680 986 620 986 542 V 450 C 986 392 1028 358 1088 358 H 1440";

const services: Service[] = [
  {
    id: 1,
    title: "Branding & Reputation Management",
    points: [
      "Strategic rebranding to improve visibility.",
      "Organizing student-centric events and activities.",
    ],
    position: "top-left",
    icon: BarChart3,
  },
  {
    id: 2,
    title: "Admission Team Training",
    points: ["Equipping colege staff with the best practices"],
    position: "bottom-center",
    icon: Users,
  },
  {
    id: 3,
    title: "Ongoing Support",
    points: ["Dedicated teams for continuous assistance."],
    position: "top-right",
    icon: ShoppingCart,
  },
];

const pinPositions: Record<string, { left: string; top: string }> = {
  "top-left": { left: "18%", top: "12.5%" },
  "bottom-center": { left: "55.5%", top: "85%" },
  "top-right": { left: "75.5%", top: "45%" },
};

export default function ValueAddedServices(): JSX.Element {
  const scrollRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"],
  });

  const pathLength = useSpring(scrollYProgress, { stiffness: 45, damping: 25 });

  return (
    // Changed: h-auto on mobile, h-[400vh] only on desktop (md:)
    <div ref={scrollRef} className="relative h-auto md:h-[400vh] section-shell">
      {/* Changed: relative on mobile, sticky only on desktop (md:) */}
      <section className="relative md:sticky top-0 flex h-auto md:h-screen w-full flex-col overflow-hidden pt-12 md:pt-12">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[140px]" />

        <div className="container relative z-20 mx-auto px-4 flex flex-col h-full">
          <div className="relative z-30 mx-auto mb-8 md:mb-12 max-w-4xl text-center shrink-0">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-primary/80 mb-2 md:mb-3 block"
            >
              The Journey of Support
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-2xl md:text-5xl font-extrabold uppercase tracking-tight leading-tight"
            >
              Value-Added{" "}
              <span className="text-primary text-glow">Services</span>
            </motion.h2>
          </div>

          <div className="relative z-10 mx-auto hidden md:block w-screen -ml-[calc((100vw-100%)/2)] grow overflow-visible">
            <div className="relative h-full w-full max-w-[1280px] mx-auto overflow-visible">
              <svg
                className="absolute inset-0 h-full w-full overflow-visible"
                viewBox="0 0 1440 800"
                preserveAspectRatio="none"
              >
                <path
                  d={roadPath}
                  fill="none"
                  stroke="#1e293b"
                  strokeWidth="54"
                  strokeLinecap="round"
                />
                <motion.path
                  d={roadPath}
                  fill="none"
                  stroke="#334155"
                  strokeWidth="50"
                  strokeLinecap="round"
                  style={{ pathLength }}
                />
                <motion.path
                  d={roadPath}
                  fill="none"
                  stroke="#f4f4f5"
                  strokeWidth="2.5"
                  strokeDasharray="16 24"
                  style={{ pathLength }}
                />
              </svg>

              {services.map((service, index) => {
                const Icon = service.icon;
                const start = index * 0.3;
                const end = start + 0.15;

                const opacity = useTransform(pathLength, [start, end], [0, 1]);
                const scale = useTransform(pathLength, [start, end], [0.9, 1]);
                const floatY = useTransform(pathLength, [start, end], [15, 0]);

                const isUpside = service.id === 2;
                const spacing =
                  service.id === 2
                    ? "bottom-[200px]"
                    : isUpside
                      ? "bottom-[140px]"
                      : "top-[140px]";

                return (
                  <div key={service.id}>
                    <motion.div
                      style={{
                        opacity,
                        scale,
                        left: pinPositions[service.position].left,
                        top: pinPositions[service.position].top,
                      }}
                      className="absolute -translate-x-1/2 -translate-y-1/2"
                    >
                      <div className="relative flex flex-col items-center group">
                        <motion.div
                          style={{ y: floatY }}
                          className={`absolute w-[280px] rounded-2xl border border-white/10 bg-black/20 p-5 shadow-2xl backdrop-blur-xl transition-all duration-500 group-hover:border-primary/35 z-50 ${spacing}`}
                        >
                          <h3 className="text-base font-extrabold uppercase tracking-wide text-foreground mb-2">
                            {service.title}
                          </h3>
                          <ul className="space-y-2">
                            {service.points.map((point) => (
                              <li
                                key={point}
                                className="flex items-start gap-2 text-[13px] font-medium leading-relaxed text-muted-foreground"
                              >
                                <span className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                                {point}
                              </li>
                            ))}
                          </ul>
                          <div
                            className={`absolute left-1/2 -translate-x-1/2 w-4 h-4 rotate-45 border-white/10 bg-black/20 ${
                              isUpside
                                ? "top-full -mt-2 border-r border-b"
                                : "bottom-full -mb-2 border-l border-t"
                            }`}
                          />
                        </motion.div>

                        <div className="relative flex h-[76px] w-[56px] flex-col items-center justify-start rounded-t-full rounded-b-2xl bg-primary/14 border border-primary/35 p-1.5 backdrop-blur-sm transition-colors group-hover:bg-primary/25">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-primary">
                            <Icon size={18} strokeWidth={2.5} />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile Layout: Static grid, no sticky scroll */}
          <div className="mt-2 grid grid-cols-1 gap-4 md:hidden pb-20">
            {services.map((service, index) => (
              <div
                key={service.id}
                className="rounded-2xl border border-white/10 bg-black/20 p-5 shadow-lg flex flex-col"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary text-slate-950">
                    <service.icon size={20} strokeWidth={2.5} />
                  </div>
                  <h3 className="font-black text-foreground uppercase text-sm tracking-wide leading-tight">
                    {service.title}
                  </h3>
                </div>
                <div className="space-y-2 pl-1">
                  {service.points.map((p) => (
                    <div key={p} className="flex items-start gap-3">
                      <span className="h-1 w-1 rounded-full bg-primary mt-1.5" />
                      <p className="text-[11px] font-semibold text-muted-foreground leading-relaxed">
                        {p}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

import {
  BarChart3,
  ShoppingCart,
  Users,
} from "lucide-react";

type Service = {
  id: number;
  title: string;
  points: string[];
  position: string;
  icon: typeof BarChart3;
};

const roadPath =
  "M -40 24 H 222 C 282 24 332 70 332 132 V 226 C 332 284 372 316 428 316 H 550 C 610 316 654 358 654 418 V 462 C 654 542 714 604 794 604 H 848 C 926 604 986 544 986 466 V 374 C 986 316 1028 282 1088 282 H 1320";

const services: Service[] = [
  {
    id: 1,
    title: "Branding & Reputation Management",
    points: [
      "Strategic rebranding to improve visibility.",
      "Organizing student-centric events and activities.",
    ],
    position: "left",
    icon: BarChart3,
  },
  {
    id: 2,
    title: "Ongoing Support",
    points: ["Dedicated teams for continuous assistance."],
    position: "right",
    icon: ShoppingCart,
  },
  {
    id: 3,
    title: "Admission Team Training",
    points: ["Equipping college staff with the best practices."],
    position: "bottom",
    icon: Users,
  },
];

// Mathematically aligned to sit exactly on the SVG path coordinates
const pinPositionClasses: Record<string, string> = {
  left: "left-[25.2%] top-[31.2%]",
  right: "left-[84.8%] top-[40.2%]",
  bottom: "left-[64.2%] top-[82.3%]",
};

// Balanced beside each pin so icons, titles, and bullet text read as a single unit
const textPositionClasses: Record<string, string> = {
  left: "left-[32.4%] top-[31.2%] max-w-[25rem]",
  right: "left-[56.4%] top-[40.2%] max-w-[23rem]",
  bottom: "left-[30.4%] top-[82.3%] max-w-[27rem]",
};

export default function ValueAddedServices(): JSX.Element {
  return (
    <section className="section-shell relative overflow-hidden">
      <div className="absolute left-1/2 top-16 h-36 w-[90%] -translate-x-1/2 rounded-full bg-primary/8 blur-3xl sm:h-44 sm:w-[76%]" />
      <div className="absolute left-5 top-6 grid grid-cols-5 gap-2 opacity-15 sm:left-8 sm:top-8">
        {[...Array(15)].map((_, i) => (
          <div key={i} className="h-1 w-1 rounded-full bg-primary" />
        ))}
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <span className="section-kicker">Extra Support That Drives Results</span>
          <h2 className="section-title mt-4 uppercase">
            Value-Added <span className="text-primary text-glow">Services</span>
          </h2>
        </div>

        <div className="relative mx-auto mt-12 hidden max-w-[1320px] md:block lg:mt-16">
          <div className="relative h-[760px] overflow-visible">
            <svg
              className="absolute inset-0 h-full w-full"
              viewBox="0 0 1280 760"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              {/* Main Road */}
              <path
                d={roadPath}
                fill="none"
                stroke="#9a9a9a"
                strokeWidth="48"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {/* Road Dashes */}
              <path
                d={roadPath}
                fill="none"
                stroke="#f4f4f5"
                strokeWidth="6"
                strokeDasharray="28 22"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Decorative Map Arrows */}
              <path
                d="M 576 268 Q 625 281 648 318"
                fill="none"
                stroke="rgba(255,255,255,0.28)"
                strokeWidth="2"
              />
              <path
                d="M 637 300 L 648 318 L 628 309"
                fill="none"
                stroke="rgba(255,255,255,0.28)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M 730 350 Q 748 301 786 283"
                fill="none"
                stroke="rgba(255,255,255,0.28)"
                strokeWidth="2"
              />
              <path
                d="M 772 276 L 786 283 L 776 296"
                fill="none"
                stroke="rgba(255,255,255,0.28)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            {services.map((service) => {
              const Icon = service.icon;

              return (
                <div key={service.id}>
                  <div
                    className={`absolute -translate-x-1/2 -translate-y-1/2 transition-transform hover:scale-105 ${pinPositionClasses[service.position]}`}
                  >
                    <div className="relative flex h-[102px] w-[78px] items-start justify-center rounded-t-[999px] rounded-b-[2.4rem] bg-primary shadow-[0_20px_50px_rgba(196,255,59,0.18)]">
                      <div className="mt-3 flex h-14 w-14 items-center justify-center rounded-full bg-white text-slate-900">
                        <Icon className="h-6 w-6" strokeWidth={2.2} />
                      </div>
                    </div>
                  </div>

                  <div
                    className={`absolute -translate-y-1/2 ${textPositionClasses[service.position]}`}
                  >
                    <h3 className="text-lg font-bold uppercase leading-tight text-primary xl:text-xl">
                      {service.title}
                    </h3>
                    <ul className="mt-2.5 space-y-1.5 pl-5 text-[15px] font-light leading-relaxed text-white/78 xl:text-base">
                      {service.points.map((point) => (
                        <li key={point} className="list-disc">
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-8 grid gap-4 sm:mt-10 sm:gap-5 md:hidden">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.id}
                className="relative overflow-hidden rounded-[1.5rem] border border-white/10 p-4 glass sm:rounded-[1.75rem] sm:p-5"
              >
                <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
                <div className="flex items-start gap-3.5 sm:gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary text-slate-900 sm:h-14 sm:w-14 sm:rounded-2xl">
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2.2} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-base font-semibold uppercase leading-tight text-primary sm:text-lg">
                      {service.title}
                    </h3>
                    <ul className="mt-2.5 space-y-1.5 pl-4 text-sm font-light leading-relaxed text-white/75 sm:mt-3 sm:space-y-2 sm:pl-5">
                      {service.points.map((point) => (
                        <li key={point} className="list-disc">
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

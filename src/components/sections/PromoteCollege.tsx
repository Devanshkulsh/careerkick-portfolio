import { motion, useInView } from "framer-motion";
import { ExternalLink, MonitorSmartphone, Users } from "lucide-react";
import { useRef } from "react";

type PortalCard = {
  name: string;
  traffic: string;
  image: string;
  imageAlt: string;
  url: string;
};

const portals: PortalCard[] = [
  {
    name: "dirayushupneet.in",
    traffic: "20000+ users per day",
    image: "/dirayushupneet.png",
    imageAlt: "dirayushupneet.in portal preview",
    url: "https://dirayushupneet.in",
  },
];

export default function PromoteCollege(): JSX.Element {
  const sectionRef = useRef<HTMLElement | null>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-120px" });

  return (
    <section ref={sectionRef} className="section-shell relative overflow-hidden">
      <div className="absolute left-1/2 top-16 h-40 w-[86%] -translate-x-1/2 rounded-full bg-primary/8 blur-3xl sm:h-48 sm:w-[70%]" />
      <div className="absolute left-6 top-10 grid grid-cols-5 gap-2 opacity-20 sm:left-10">
        {[...Array(20)].map((_, index) => (
          <span key={index} className="h-1 w-1 rounded-full bg-primary" />
        ))}
      </div>
      <div className="absolute bottom-8 right-6 grid grid-cols-5 gap-2 opacity-20 sm:right-10">
        {[...Array(20)].map((_, index) => (
          <span key={index} className="h-1 w-1 rounded-full bg-primary" />
        ))}
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        <motion.div
          className="mx-auto max-w-4xl text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="section-kicker">Distribution Channels</span>
          <h2 className="section-title mt-4 uppercase">
            Where We Promote <span className="text-primary text-glow">Your College</span>
          </h2>
        </motion.div>

        <div className="mx-auto mt-12 grid max-w-3xl gap-6">
          {portals.map((portal, index) => (
            <motion.article
              key={portal.name}
              initial={{ opacity: 0, y: 36 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              transition={{
                duration: 0.65,
                delay: 0.12 + index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative overflow-hidden rounded-[1.8rem] p-4 glass glass-hover hover:neon-glow sm:p-5"
            >
              <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
              <div className="pointer-events-none absolute right-2 top-2 h-28 w-28 rounded-full bg-primary/8 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <LaptopMockup image={portal.image} imageAlt={portal.imageAlt} />

              <div className="mt-5 rounded-[1.4rem] border border-white/10 bg-black/20 p-4 sm:p-5">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
                      <MonitorSmartphone className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-primary/75">
                        Portal Name
                      </p>
                      <a
                        href={portal.url}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-1 inline-flex items-center gap-2 text-base font-semibold text-foreground transition-colors duration-300 hover:text-primary sm:text-lg"
                      >
                        <span>{portal.name}</span>
                        <ExternalLink className="h-4 w-4 text-primary/80" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Users className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-primary/75">
                      Daily Traffic
                    </p>
                    <p className="mt-1 text-sm font-medium text-muted-foreground sm:text-base">
                      {portal.traffic}
                    </p>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

type LaptopMockupProps = {
  image: string;
  imageAlt: string;
};

function LaptopMockup({ image, imageAlt }: LaptopMockupProps): JSX.Element {
  return (
    <div className="relative mx-auto w-full max-w-[30rem] pt-3">
      <div className="relative rounded-[1.65rem] border border-white/10 bg-[#111111] p-3 shadow-[0_30px_60px_rgba(0,0,0,0.35)]">
        <div className="rounded-[1.15rem] border border-primary/15 bg-black p-2">
          <div className="relative aspect-[16/10] overflow-hidden rounded-[0.9rem] border border-white/10 bg-zinc-950">
            <img
              src={image}
              alt={imageAlt}
              className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-primary/10" />
          </div>
        </div>

        <div className="absolute left-1/2 top-[0.7rem] h-1.5 w-16 -translate-x-1/2 rounded-full bg-white/10" />
      </div>

      <div className="mx-auto h-5 w-[20%] rounded-b-xl bg-gradient-to-b from-zinc-500 to-zinc-700" />
      <div className="mx-auto h-4 w-[66%] rounded-b-[1.4rem] bg-gradient-to-b from-zinc-300 via-zinc-500 to-zinc-700 shadow-[0_18px_22px_rgba(0,0,0,0.22)]" />
    </div>
  );
}

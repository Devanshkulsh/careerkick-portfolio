import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type College = {
  name: string;
  logo: string;
};

const colleges: College[] = [
  {
    name: "Naiminath Ayurvedic Medical College, Hospital and Research Centre",
    logo: "/logos/naiminath-ayurvedic.png",
  },
  { name: "Major SD Singh University, Farrukhabad", logo: "/logos/uni-sd.png" },
  {
    name: "Major S.D. Singh Ayurvedic Medical College",
    logo: "/logos/MajorSD.png",
  },
  {
    name: "Krishna Ayurvedic Medical College & Hospital",
    logo: "/logos/Krishna.png",
  },
  {
    name: "Maharana Pratap College of Ayurveda and Medical, Bithoor & Mandhana",
    logo: "/logos/maharana-pratap.png",
  },
  { name: "MD Ayurvedic College", logo: "/logos/MD.png" },
  { name: "Mangalayatan University", logo: "/logos/Managalayatan.png" },
  {
    name: "Bapu Ayurvedic Medical College and Hospital",
    logo: "/logos/bapu-ayurvedic.png",
  },
  {
    name: "Sarvdev Ayurvedic Medical College, Azamgarh",
    logo: "/logos/sarvdev.png",
  },
  {
    name: "Dr. Shakuntala Ayurvedic Medical College",
    logo: "/logos/shakuntala.png",
  },
  {
    name: "SAS Ayurvedic Medical College and Hospital",
    logo: "/logos/sas.png",
  },
  { name: "RK Ayurvedic Medical College & Hospital", logo: "/logos/RK.png" },
  { name: "Naiminath Homeopathy Medical College", logo: "/logos/NHMC.png" },
  {
    name: "Dr. Vijay Ayurvedic Medical College & Hospital",
    logo: "/logos/Vijay.png",
  },
  { name: "Dental College, Azamgarh", logo: "/logos/Dental.png" },
  {
    name: "Bharat Ayurved Medical College, Hospital & Research Centre, Muzaffarnagar",
    logo: "/logos/bharat-ayurvedic.png",
  },
  { name: "Shree Om University", logo: "/logos/om.png" },
  {
    name: "Baba Vishwanath Ayurvedic Medical College",
    logo: "/logos/baba-vishwanath.png",
  },
  {
    name: "Shri Dhanvantari P.G. Ayurved Medical College",
    logo: "/logos/Dhanvantri.png",
  },
  {
    name: "Vimla Group- Ayurvedic Medical College & Hospital",
    logo: "/logos/Vimla.png",
  },
  {
    name: "Babu Yugraj Singh Ayurvedic Medical College & Hospital",
    logo: "/logos/babu-yugraj.png",
  },
  { name: "ITM Ayurvedic Medical College & Hospital", logo: "/logos/itm.png" },
];

const rows = [colleges.slice(0, 12), colleges.slice(12, 24)];

const duplicatedRows = rows.map((row) => [...row, ...row]);

const cardClassName =
  "group relative mx-2 flex h-[170px] w-[156px] flex-shrink-0 cursor-default flex-col items-center justify-between rounded-2xl border border-white/10 px-4 py-4 text-center transition-all duration-500 glass glass-hover hover:neon-glow sm:mx-3 sm:h-[196px] sm:w-[176px] sm:px-5 sm:py-5";

const PartnerMarquee = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      id="clients"
      className="relative overflow-hidden py-16 sm:py-20 lg:py-24"
    >
      <div className="container mx-auto mb-10 px-4 sm:mb-12 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="space-y-3 text-center sm:space-y-4"
        >
          <span className="section-kicker">Trusted Network</span>
          <h2 className="text-3xl font-bold sm:text-4xl">
            Partner <span className="text-primary">Colleges</span>
          </h2>
        </motion.div>
      </div>

      <div className="relative [perspective:1400px]">
        <div className="absolute bottom-0 left-0 top-0 z-10 w-12 bg-gradient-to-r from-background to-transparent sm:w-20 lg:w-32" />
        <div className="absolute bottom-0 right-0 top-0 z-10 w-12 bg-gradient-to-l from-background to-transparent sm:w-20 lg:w-32" />
        <div className="absolute left-1/2 top-1/2 h-40 w-3/4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />

        <div className="space-y-4 sm:space-y-5">
          {duplicatedRows.map((row, rowIndex) => {
            const movesLeft = rowIndex === 0;

            return (
              <motion.div
                key={`row-${rowIndex}`}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.75, delay: 0.15 + rowIndex * 0.12 }}
                className="overflow-hidden"
              >
                <motion.div
                  className="flex w-max"
                  animate={{
                    x: movesLeft ? ["0%", "-50%"] : ["-50%", "0%"],
                  }}
                  transition={{
                    duration: movesLeft ? 24 : 26,
                    ease: "linear",
                    repeat: Infinity,
                  }}
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                >
                  {row.map((college, index) => (
                    <motion.div
                      key={`${college.name}-${rowIndex}-${index}`}
                      whileHover={{
                        y: -6,
                        rotateX: 0,
                        rotateY: 0,
                        scale: 1.03,
                      }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className={cardClassName}
                      style={{
                        transformStyle: "preserve-3d",
                        rotateX: "12deg",
                        boxShadow:
                          "0 20px 45px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.08), 0 0 24px hsl(var(--primary) / 0.08)",
                      }}
                    >
                      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 via-transparent to-primary/10 opacity-70" />
                      <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
                      <div
                        className="relative flex h-20 w-20 items-center justify-center rounded-full border border-white/15 bg-white/10 p-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_10px_24px_rgba(0,0,0,0.18)] sm:h-24 sm:w-24"
                        style={{ transform: "translateZ(30px)" }}
                      >
                        <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-full bg-white/95 p-2">
                          <img
                            src={college.logo}
                            alt={`${college.name} logo`}
                            className="h-full w-full rounded-full object-cover object-center opacity-100"
                          />
                        </div>
                      </div>
                      <span
                        className="relative block text-[11px] font-medium leading-snug text-muted-foreground sm:text-sm"
                        style={{ transform: "translateZ(24px)" }}
                      >
                        {college.name}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PartnerMarquee;

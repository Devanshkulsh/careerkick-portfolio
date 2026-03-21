"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

type TeamMember = {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
};

const teamData: TeamMember[] = [
  {
    id: 1,
    name: "Mr. Nikhil Sachan",
    role: "Founder & CEO",
    image:
      "https://res.cloudinary.com/dhlqc0ymy/image/upload/v1740807397/nikhil_zrzpnm.jpg",
    bio: "Oversees company vision, growth, and overall strategy",
  },
  {
    id: 2,
    name: "Miss. Sneha Awasthi",
    role: "HR Head",
    image: "https://res.cloudinary.com/dhlqc0ymy/image/upload/v1740808782/sneha_h8p1fz.jpg",
    bio: "Experienced HR leader driving talent development, recruitment excellence, and organizational culture growth."
  },
  {
    id: 3,
    name: "Mr. Shivam Dwivedi",
    role: "Tech Support & IT Specialist",
    image:
      " https://res.cloudinary.com/dhlqc0ymy/image/upload/v1740807405/shivam_myjhqb.jpg",
    bio: "Manages server, hosting, and security issues.",
  },
  {
    id: 4,
    name: "Mrs. Shruti Dubey",
    role: "Admin & Office Support",
    image:
      " https://res.cloudinary.com/dhlqc0ymy/image/upload/v1740808689/shruti_eyt8l6.jpg",
    bio: "Ensures smooth daily operations.",
  },
];

// Refined spring transition for absolute maximum smoothness. 
// Lower stiffness and balanced damping eliminates the mechanical snap/pop.
const springTransition = {
  type: "spring",
  stiffness: 150,
  damping: 22,
  mass: 0.9,
};

export default function TeamsSection() {
  const [selected, setSelected] = useState<TeamMember | null>(null);

  // Handle Escape key, body scroll lock, and layout shift prevention
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };

    if (selected) {
      // Calculate scrollbar width to prevent background layout shift
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.paddingRight = `${scrollbarWidth}px`;
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      // Delay restoring the scrollbar until the layout animation completes (approx 400ms)
      // This totally eliminates the screen distortion caused by the scrollbar reappearing
      const timer = setTimeout(() => {
        document.body.style.paddingRight = "0px";
        document.body.style.overflow = "auto";
      }, 400);

      return () => clearTimeout(timer);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selected]);

  return (
    <section className="bg-[#0b0b0c] py-16 md:py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 md:mb-14 text-center">
          Meet Our Team
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {teamData.map((member) => (
            <motion.div
              key={member.id}
              layoutId={`card-${member.id}`}
              transition={springTransition}
              onClick={() => setSelected(member)}
              className="cursor-pointer rounded-2xl bg-[#111114] overflow-hidden border border-white/5 hover:border-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-white/30"
              tabIndex={0}
            >
              <motion.img
                layoutId={`image-${member.id}`}
                transition={springTransition}
                src={member.image}
                alt={member.name}
                className="h-56 sm:h-60 w-full object-cover object-top"
              />

              <div className="p-5">
                <motion.h3
                  layoutId={`name-${member.id}`}
                  transition={springTransition}
                  className="text-white font-semibold text-lg"
                >
                  {member.name}
                </motion.h3>
                <motion.p
                  layoutId={`role-${member.id}`}
                  transition={springTransition}
                  className="text-white/60 text-sm mt-1"
                >
                  {member.role}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      {/* Removed mode="wait" to prevent layout jumping when snapping back to the grid */}
      <AnimatePresence>
        {selected && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/85 backdrop-blur-md z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.3 } }}
              onClick={() => setSelected(null)}
            />

            {/* Modal Container */}
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 pointer-events-none">
              <motion.div
                layoutId={`card-${selected.id}`}
                transition={springTransition}
                className="bg-[#111114] rounded-2xl md:rounded-3xl overflow-hidden w-[320px] md:w-[420px] border border-white/10 pointer-events-auto relative shadow-2xl"
              >
                {/* Close Button */}
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, transition: { duration: 0.15 } }}
                  onClick={() => setSelected(null)}
                  className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/80 text-white rounded-full backdrop-blur-sm transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
                  aria-label="Close"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </motion.button>

                <motion.img
                  layoutId={`image-${selected.id}`}
                  transition={springTransition}
                  src={selected.image}
                  alt={selected.name}
                  className="h-[320px] md:h-[420px] w-full object-cover object-top"
                />

                <div className="p-6 md:p-8">
                  <motion.h3
                    layoutId={`name-${selected.id}`}
                    transition={springTransition}
                    className="text-2xl font-bold text-white"
                  >
                    {selected.name}
                  </motion.h3>

                  <motion.p
                    layoutId={`role-${selected.id}`}
                    transition={springTransition}
                    className="text-green-400 mt-1 font-medium"
                  >
                    {selected.role}
                  </motion.p>

                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{
                      opacity: 0,
                      y: 5,
                      transition: { duration: 0.15, ease: "easeIn" },
                    }}
                    transition={{
                      delay: 0.1,
                      duration: 0.3,
                      ease: "easeOut",
                    }}
                    className="text-white/70 mt-4 md:mt-5 leading-relaxed text-sm md:text-base"
                  >
                    {selected.bio}
                  </motion.p>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
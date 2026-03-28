"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Calendar, MapPin, Users, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Event = {
  id: number;
  type: "Webinar" | "Seminar";
  title: string;
  date: string;
  location: string;
  attendees: string;
  image: string;
  color: string;
};

const events: Event[] = [
  {
    id: 1,
    type: "Seminar",
    title: "NEET Seminar",
    date: "15th April, 2026",
    location: "Greater Noida, India",
    attendees: "500+ Students",
    image: "/seminar.webp",
    color: "from-primary/25 to-cyan-500/25",
  },
  {
    id: 2,
    type: "Webinar",
    title: "Strategic BAMS Seat Selection",
    date: "22nd April, 2026",
    location: "Online (Zoom Live)",
    attendees: "1200+ Registered",
    image: "/webinar.webp",
    color: "from-primary/20 to-cyan-400/25",
  },
  {
    id: 3,
    type: "Seminar",
    title: "Shiksha Samagam",
    date: "05th May, 2026",
    location: "Greater Noida, UP",
    attendees: "700+ Students",
    image: "/shiksha-samagam.webp",
    color: "from-primary/20 to-sky-400/25",
  },
];

export default function EventsSection() {
  return (
    <section className="section-shell relative overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute left-1/2 top-16 h-48 w-[70%] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
      <div className="absolute right-10 top-1/3 h-40 w-40 rounded-full bg-cyan-400/8 blur-3xl pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        {/* Header Section */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <span className="section-kicker">Engagement & Outreach</span>
            <h2 className="section-title">
              Latest <span className="text-primary text-glow">Events</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="section-copy max-w-md"
          >
            Join our high-impact sessions designed to simplify the BAMS
            admission journey through expert-led interactions.
          </motion.p>
        </div>

        {/* Events Grid */}
        <div className="mt-12 grid grid-cols-1 gap-8 lg:mt-16 lg:grid-cols-3 lg:gap-12">
          {events.map((event, index) => (
            <EventCard key={event.id} event={event} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function EventCard({ event, index }: { event: Event; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  // Mouse tracking for 3D effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), {
    stiffness: 150,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), {
    stiffness: 150,
    damping: 20,
  });

  function handleMouseMove(e: React.MouseEvent) {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXRelative = e.clientX - rect.left;
    const mouseYRelative = e.clientY - rect.top;

    mouseX.set(mouseXRelative / width - 0.5);
    mouseY.set(mouseYRelative / height - 0.5);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="relative group cursor-pointer h-full"
    >
      <div className="relative h-full flex flex-col overflow-hidden rounded-[2.25rem] border border-white/10 bg-white/[0.04] backdrop-blur-xl shadow-2xl transition-all duration-500 glass glass-hover group-hover:border-primary/40">
        {/* Image Container */}
        <div className="relative h-64 w-full flex-shrink-0 overflow-hidden">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-2"
          />
          <div
            className={cn(
              "absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90",
            )}
          />

          {/* Badge */}
          <div className="absolute top-6 left-6 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary z-20">
            {event.type}
          </div>
        </div>

        {/* Content */}
        <div
          className="flex flex-1 flex-col justify-between space-y-6 p-7 sm:p-8"
          style={{ transform: "translateZ(40px)" }}
        >
          <h3 className="text-xl font-semibold text-foreground leading-tight transition-colors group-hover:text-primary sm:text-2xl">
            {event.title}
          </h3>

          <div className="space-y-3 mt-auto">
            <div className="flex items-center gap-3 text-muted-foreground transition-colors group-hover:text-foreground/80">
              <MapPin size={18} className="text-primary" />
              <span className="text-sm font-medium">{event.location}</span>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground transition-colors group-hover:text-foreground/80">
              <Users size={18} className="text-primary" />
              <span className="text-sm font-medium">{event.attendees}</span>
            </div>
          </div>
        </div>

        {/* Inner Card Glow */}
        <div
          className={cn(
            "absolute -inset-2 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none",
            event.color,
          )}
        />
      </div>
    </motion.div>
  );
}
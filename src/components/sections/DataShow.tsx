import React, { useEffect, useState, useRef } from "react";
import { Spotlight } from "@/components/ui/Spotlight";
import { cn } from "@/lib/utils";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { motion, useInView, animate } from "framer-motion";

export function DataShow() {
  return (
    <section className="relative w-full overflow-hidden bg-background px-4 py-16 sm:py-24 sm:px-6 lg:px-10">
      {/* Grid Background */}
      <div
        className={cn(
          "pointer-events-none absolute inset-0 [background-size:40px_40px] sm:[background-size:60px_60px] select-none opacity-15",
          "[background-image:linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)]",
        )}
      />

      {/* Spotlight & Glows */}
      <Spotlight
        className="-top-20 left-0 md:-top-20 md:left-60"
        fill="hsl(var(--primary))"
      />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-5%] sm:top-[-10%] left-1/2 -translate-x-1/2 w-full sm:w-[800px] h-[300px] sm:h-[500px] bg-primary/10 blur-[80px] sm:blur-[150px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4 sm:space-y-6 pb-12 sm:pb-20"
        >
          <div className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 text-[8px] sm:text-[10px] font-bold tracking-[0.2em] sm:tracking-[0.3em] uppercase border border-primary/30 text-primary rounded-full bg-primary/5 backdrop-blur-sm shadow-[0_0_15px_rgba(var(--primary),0.1)]">
            YouTube Metrics • REAL-TIME DATA
          </div>
          <h2 className="section-title  ">
            CAREERKICK NEET{" "}
            <span className="text-primary text-glow">YOUTUBE</span> CHANNEL
          </h2>
          <p className="text-sm sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-medium px-4">
            We have 100+ BAMS Influencers Where We Publish College Video To
            Build A Authentic Brand
          </p>
        </motion.div>

        {/* --- ULTRA PRO MAX REALISTIC MACBOOK MOCKUP --- */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="relative mx-auto max-w-7xl group perspective-1000 scale-[0.85] sm:scale-100 origin-center"
        >
          {/* Main Laptop Body (Chassis) */}
          <div className="relative rounded-xl sm:rounded-2xl border border-neutral-800 bg-[#171717] p-[6px] sm:p-[10px] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.7),0_0_20px_rgba(var(--primary),0.05)] transition-transform duration-700 ease-out sm:group-hover:rotate-x-1 sm:group-hover:shadow-[0_60px_120px_-20px_rgba(0,0,0,0.8),0_0_30px_rgba(var(--primary),0.1)]">
            {/* Inner Display Assembly (Bezel) */}
            <div className="relative rounded-md sm:rounded-lg bg-black p-[3px] sm:p-[6px] shadow-inner overflow-hidden aspect-[16/10]">
              {/* Webcam Dot */}
              <div className="absolute top-1 sm:top-2 left-1/2 -translate-x-1/2 flex gap-1 z-30">
                <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-[#111] border border-neutral-800 shadow-inner"></div>
                <div className="w-0.5 sm:w-1 h-0.5 sm:h-1 rounded-full bg-emerald-500/50 blur-[1px]"></div>{" "}
                {/* Active Light */}
              </div>

              {/* Screen Content (The actual Image) */}
              <div className="relative w-full h-full rounded-sm overflow-hidden bg-[#0f0f0f]">
                <img
                  src="/mac.png"
                  alt="YouTube Analytics Dashboard"
                  className="w-full h-full object-cover opacity-90 transition-all duration-700 sm:group-hover:opacity-100 sm:group-hover:scale-[1.01]"
                />

                {/* Dynamic Screen Glare (Animated on Hover) */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-white/[0.08] opacity-100 sm:group-hover:opacity-0 transition-opacity duration-700 pointer-events-none z-10" />
                <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-white/[0.01] to-white/[0.04] opacity-0 sm:group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-10" />

                {/* Subtle Screen Ambient Glow on Body */}
                <div className="absolute -inset-10 bg-primary/5 blur-3xl opacity-0 sm:group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              </div>
            </div>

            {/* Chamfered Edge Highlight */}
            <div className="absolute inset-0 rounded-xl sm:rounded-2xl border-t-2 border-white/10 pointer-events-none"></div>

            {/* MacBook "Chin" with Logo Area */}
            <div className="h-4 sm:h-6 w-full flex items-center justify-center bg-[#171717] mt-[2px]">
              <div className="w-12 sm:w-20 h-0.5 sm:h-1 bg-neutral-900 rounded-full"></div>{" "}
              {/* Space Grey Aesthetic */}
            </div>
          </div>

          {/* Separate Laptop Base (Chassis Bottom) */}
          <div className="relative h-3 sm:h-5 w-[101%] -ml-[0.5%] bg-[#1a1a1a] rounded-b-lg sm:rounded-b-xl border-t border-neutral-800 shadow-2xl overflow-hidden">
            {/* Base Highlight/Shadow */}
            <div className="absolute inset-x-0 top-0 h-px bg-white/5"></div>
            <div className="absolute inset-x-0 bottom-0 h-1 bg-black/50"></div>
            {/* Thumb Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 h-1.5 sm:h-2 w-16 sm:w-24 bg-black rounded-b-md border border-neutral-800 border-t-0"></div>
          </div>

          {/* Floating Badge (Updated Size/Detail) */}
          <motion.div
            animate={{ y: [0, -10, 0], rotate: [-12, -8, -12] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-6 sm:-top-12 -right-4 sm:-right-12 z-20"
          >
            <Badge className="h-14 w-14 sm:h-24 sm:w-24 shadow-[0_10px_30px_rgba(0,0,0,0.5)]" />
          </motion.div>
        </motion.div>
        {/* --- END REALISTIC MACBOOK MOCKUP --- */}

        {/* Analytics Data Grid with Count-up */}
        <div className="mt-12 sm:mt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-px bg-neutral-800 border border-neutral-800 rounded-2xl sm:rounded-3xl overflow-hidden backdrop-blur-xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)] mx-4 sm:mx-0">
          <StatCard
            label="Views"
            value={263.3}
            suffix="k"
            status="Optimal performance range"
            trend="neutral"
            delay={0.1}
          />
          <StatCard
            label="Engaged views"
            value={127.0}
            suffix="k"
            status="66% surge vs period"
            trend="up"
            delay={0.2}
          />
          <StatCard
            label="Likes"
            value={3.0}
            suffix="k"
            status="77% surge vs period"
            trend="up"
            delay={0.3}
          />
          <StatCard
            label="Subscribers"
            value={182}
            prefix="+"
            status="Consistent growth dynamic"
            trend="neutral"
            delay={0.4}
          />
        </div>
      </div>
    </section>
  );
}

const StatCard = ({
  label,
  value,
  suffix = "",
  prefix = "",
  status,
  trend,
  delay,
}: any) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-50px" });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration: 2.5,
        ease: [0.22, 1, 0.36, 1],
        onUpdate: (latest) => setDisplayValue(latest),
      });
      return () => controls.stop();
    } else {
      setDisplayValue(0);
    }
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      viewport={{ once: false }}
      className="bg-background/60 p-6 sm:p-10 flex flex-col items-center text-center space-y-2 sm:space-y-3.5 hover:bg-primary/[0.04] transition-all duration-300 group relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-primary/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <span className="text-[10px] sm:text-xs font-bold tracking-[0.1em] sm:tracking-[0.2em] text-muted-foreground uppercase relative z-10">
        {label}
      </span>
      <div className="flex items-center gap-2 relative z-10">
        <h3 className="text-3xl sm:text-5xl font-extrabold text-foreground tabular-nums tracking-tight">
          {prefix}
          {displayValue.toFixed(value % 1 === 0 ? 0 : 1)}
          {suffix}
        </h3>
        {trend === "up" ? (
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            className="flex items-center justify-center h-6 w-6 sm:h-8 sm:w-8 rounded-full bg-emerald-500/10 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.2)] border border-emerald-500/20"
          >
            <ArrowUpRight size={14} className="sm:w-5 sm:h-5" strokeWidth={3} />
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            className="flex items-center justify-center h-6 w-6 sm:h-8 sm:w-8 rounded-full bg-primary/10 text-primary border border-primary/20"
          >
            <CheckCircle2 size={14} className="sm:w-5 sm:h-5" />
          </motion.div>
        )}
      </div>
      <p className="text-[10px] sm:text-[12px] font-medium text-muted-foreground/70 leading-relaxed max-w-[180px] relative z-10">
        {status}
      </p>
    </motion.div>
  );
};

const Badge = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "relative rounded-xl sm:rounded-3xl overflow-hidden border border-neutral-800 bg-black/80 backdrop-blur-md shadow-2xl p-2 sm:p-4 flex items-center justify-center",
        className,
      )}
    >
      <img
        src="/logo.png"
        alt="CareerKick Logo"
        className="w-full h-full object-contain"
      />
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-transparent to-white/10 pointer-events-none" />
      <div className="absolute inset-0 rounded-xl sm:rounded-3xl shadow-[inner_0_2px_10px_rgba(217,217,217,0.1)] pointer-events-none"></div>
    </div>
  );
};

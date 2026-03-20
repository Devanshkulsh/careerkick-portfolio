import React from "react";
import { MacbookScroll } from "@/components/ui/macbook-scroll";
import { Spotlight } from "@/components/ui/Spotlight";
import { cn } from "@/lib/utils";

export function DataShow() {
  return (
    <section className="relative w-full overflow-hidden bg-background px-4 sm:px-6 lg:px-10">

      {/* Grid Background */}
      <div
        className={cn(
          "pointer-events-none absolute inset-0 [background-size:40px_40px] select-none",
          "[background-image:linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)]"
        )}
      />

      {/* Spotlight Effects */}
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="hsl(var(--primary))"
      />
      <Spotlight
        className="top-10 right-0 md:right-40"
        fill="hsl(var(--primary))"
      />

      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/20 blur-[120px] rounded-full" />
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10 max-w-6xl mx-auto">

        <MacbookScroll
          title={
            <div className="text-center space-y-4 pb-10 ">

              <h2 className="text-4xl sm:text-3xl md:text-4xl font-semibold text-foreground leading-tight">
                Powering Admissions with  
                <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                  {" "}CareerKick LMS
                </span>
              </h2>

              <p className="text-base sm:text-base text-muted-foreground max-w-2xl mx-auto">
                A smart Lead Management System designed to streamline student
                admissions, track inquiries, and boost conversions - all in one place.
              </p>

              <div className="inline-block px-4 py-2 text-base tracking-widest border border-primary/20 text-primary/80 rounded-full backdrop-blur-md bg-primary/10 sm:px-3 sm:py-1 sm:text-xs">
                LMS - LEADS - AUTOMATION
              </div>
            </div>
          }

          badge={
            <a href="#">
              <Badge className="h-12 w-12 sm:h-14 sm:w-14 -rotate-12 hover:rotate-0 transition-all duration-300" />
            </a>
          }

          src={`/desktop.png`}
          showGradient={true}
        />
      </div>
    </section>
  );
}


// Badge Component
const Badge = ({ className }: { className?: string }) => {
  return (
    <div
      className={`relative ${className} rounded-xl overflow-hidden glass glass-hover shadow-lg`}
    >
      <img
        src="/logo.png"
        alt="CareerKick Logo"
        className="w-full h-full object-contain p-1"
      />

      <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-0 hover:opacity-100 transition duration-300" />
    </div>
  );
};

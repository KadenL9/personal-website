"use client";

import { Calendar, Briefcase, ChevronRight } from "lucide-react";

interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  points: string[];
}

export default function ScreenExperienceMobile({ experiences }: { experiences: Experience[] }) {
  return (
    <div className="relative w-full max-w-md mx-auto py-8 px-4 z-10 font-mono text-left select-none">
      
      {/* Dynamic Scrolling Container Wrapper */}
      <div className="relative w-full flex flex-col gap-8">
        
        {/* ==========================================
            MOBILE LEFT TIMELINE TRACK AXIS
            ========================================== */}
        <div className="absolute left-4 top-4 bottom-4 w-[1px] bg-theme-border-subtle z-10">
          <div 
            className="absolute inset-0 w-full bg-gradient-to-b from-theme-accent via-theme-accent/60 to-theme-accent opacity-60"
            style={{ filter: "drop-shadow(0px 0px 4px var(--color-accent))" }}
          />
        </div>

        {experiences.map((exp) => (
          <div key={exp.id} className="relative w-full flex flex-col items-start pl-10">
            
            {/* ==========================================
                THE TIMELINE INDICATOR NODE
                ========================================== */}
            <div className="absolute left-4 top-5 -translate-x-1/2 z-20 flex items-center justify-center">
              <div className="absolute w-5 h-5 rounded-full bg-theme-accent/20 animate-ping [animation-duration:3.5s]" />
              <div className="w-2 h-2 rounded-full bg-theme-cell border border-theme-accent shadow-[0_0_6px_var(--color-accent)]" />
            </div>

            {/* ==========================================
                THE EXPANSIVE TOUCH-FRIENDLY INFO BLOCK
                ========================================== */}
            <div className="w-full bg-theme-cell border border-theme-border-main rounded-xl p-4.5 font-mono backdrop-blur-md shadow-lg hover:border-theme-accent hover:shadow-[0_0_20px_rgba(109,40,217,0.1)] transition-all duration-300 group">
              
              {/* Timeline metadata strip */}
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-theme-border-subtle pb-2.5 mb-3 text-[8px] font-bold tracking-widest text-theme-text-muted uppercase">
                <span className="text-theme-accent">[{exp.id}]</span>
                <div className="flex items-center gap-1 bg-theme-bg/50 px-1.5 py-0.5 rounded border border-theme-border-subtle">
                  <Calendar className="w-2.5 h-2.5 text-theme-accent" />
                  {exp.period}
                </div>
              </div>

              {/* Title Header */}
              <h3 className="text-sm font-black text-foreground tracking-wider uppercase mb-0.5 flex items-center gap-1.5">
                <Briefcase className="w-3.5 h-3.5 text-theme-accent opacity-75" />
                {exp.role}
              </h3>
              
              {/* Company Identifier */}
              <span className="text-[10px] font-bold text-theme-text-secondary tracking-widest block mb-3 uppercase">
                 {exp.company}
              </span>

              {/* Bullet Points */}
              <ul className="space-y-2">
                {exp.points.map((point, index) => (
                  <li key={index} className="flex items-start gap-1.5 text-[10px] leading-relaxed text-theme-text-secondary">
                    <ChevronRight className="w-3 h-3 mt-0.5 text-theme-accent shrink-0 group-hover:translate-x-0.5 transition-transform duration-200" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}
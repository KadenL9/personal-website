"use client";

import { motion } from "framer-motion";
import { Calendar, Briefcase, ChevronRight } from "lucide-react";

export default function ScreenExperience() {
  const experiences = [
    {
      id: "VS Copilot",
      role: "SOFTWARE ENGINEERING INTERN",
      company: "MICROSOFT",
      period: "JUN-SEP 2026",
      side: "left",
      points: [
        "Added an audio alert feature in Visual Studio with configurable settings that plays whenever Copilot chat finishes generating a response (WIP)",
        "Researched different STT (speech-to-text) engines and implemented the microphone function in Visual Studio that allows users to use STT to prompt copilot (WIP)"
    ]
    },
    {
      id: "1st Party Engineering Tools",
      role: "EXPLORE INTERN",
      company: "Microsoft",
      period: "JUN-SEP 2025",
      side: "right",
      points: [
        "Developed a fine-tuned GPT-4.1 model to assist with .NET Framework to .NET Core migration, using supervised learning with a custom dataset of before-and-after C# code transformations",
        "Designed and built a proof-of-concept .NET migration bot that automates git operations, pull request creation, Roslyn workspace analysis, prompt generation, and C# code transformation, successfully advancing to MVP stage after being presented to first-party customers",
        "Initiated the development of a testing framework to support easy, repeatable evaluation of WCF (Windows Communication Foundation) migration prompts, streamlining prompt iteration",
        "Helped generate and submit 53 pull requests across multiple first-party customer repositories"
      ]
    }
  ];

  return (
    /* CHANGED: Swapped min-h-[800px] to h-auto so the outer card component tracks your data array size seamlessly */
    <div className="relative w-full max-w-4xl h-auto py-12 px-4 md:px-0 z-10 font-mono text-left select-none">
      
      {/* ==========================================
          CHRONOLOGICAL NODE DISTRIBUTION GRID
          ========================================== */}
      {/* CHANGED: Wrapped in a flex box so heights adjust fluidly per entry block */}
      <div className="relative w-full flex flex-col gap-12">
        
        {/* ==========================================
            THE CORE TIMELINE TRACK AXIS (MIDDLE LINE)
            ========================================== */}
        {/* CHANGED: Swapped bottom-0 to top-6 and bottom-6 so the vertical laser stops perfectly inline with your final node intercept point! */}
        <div className="absolute left-4 md:left-1/2 top-6 bottom-6 w-[1px] bg-theme-border-subtle -translate-x-1/2 z-10">
          <div 
            className="absolute inset-0 w-full bg-gradient-to-b from-theme-accent via-theme-accent/60 to-theme-accent opacity-60"
            style={{ filter: "drop-shadow(0px 0px 4px var(--color-accent))" }}
          />
        </div>

        {experiences.map((exp) => {
          const isLeft = exp.side === "left";

          return (
            <div 
              key={exp.id} 
              className={`relative w-full flex flex-col md:flex-row items-start ${
                isLeft ? "md:justify-start" : "md:justify-end"
              }`}
            >
              
              {/* ==========================================
                  THE TIMELINE AXIS CONNECTOR INTERCEPT
                  ========================================== */}
              <div className="absolute left-4 md:left-1/2 top-6 -translate-x-1/2 z-20 flex items-center justify-center">
                <div className="absolute w-6 h-6 rounded-full bg-theme-accent/20 animate-ping [animation-duration:3s]" />
                <div className="w-2.5 h-2.5 rounded-full bg-theme-cell border border-theme-accent shadow-[0_0_8px_var(--color-accent)]" />
              </div>

              {/* ==========================================
                  THE INTERACTIVE FLOATING JOB BOX NODE
                  ========================================== */}
              <div className={`w-full md:w-[calc(50%-32px)] pl-12 md:pl-0 ${isLeft ? "md:pr-0" : "md:pl-0"}`}>
                <div className="w-full bg-theme-cell border border-theme-border-main rounded-xl p-5 font-mono backdrop-blur-md shadow-xl hover:border-theme-accent hover:shadow-[0_0_20px_rgba(109,40,217,0.1)] transition-all duration-300 group">
                  
                  {/* Card Telemetry Meta Data Sub-Dock */}
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-theme-border-subtle pb-3 mb-4 text-[9px] font-bold tracking-widest text-theme-text-muted uppercase">
                    <span className="text-theme-accent">[{exp.id}]</span>
                    <div className="flex items-center gap-1.5 bg-theme-bg/50 px-2 py-0.5 rounded border border-theme-border-subtle">
                      <Calendar className="w-3 h-3 text-theme-accent" />
                      {exp.period}
                    </div>
                  </div>

                  {/* Role Title Headers */}
                  <h3 className="text-base font-black text-foreground tracking-wider uppercase mb-0.5 flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-theme-accent opacity-70" />
                    {exp.role}
                  </h3>
                  
                  {/* Company Identifier Code */}
                  <span className="text-xs font-bold text-theme-text-secondary tracking-widest block mb-4 uppercase">
                     {exp.company}
                  </span>

                  {/* Bulleted Metric Tasks */}
                  <ul className="space-y-2.5">
                    {exp.points.map((point, index) => (
                      <li key={index} className="flex items-start gap-2 text-[11px] leading-relaxed text-theme-text-secondary">
                        <ChevronRight className="w-3.5 h-3.5 mt-0.5 text-theme-accent shrink-0 group-hover:translate-x-0.5 transition-transform duration-200" />
                        <span>{point}</span>
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
  );
}
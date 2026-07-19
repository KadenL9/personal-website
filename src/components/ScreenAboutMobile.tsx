"use client";

import { motion } from "framer-motion";
import { Terminal, Shield, CircleDot } from "lucide-react";
import PlayerScan from "./PlayerSilhouette";

export default function ScreenAboutMobile({ isDarkMode }: { isDarkMode: boolean }) {
  const getDynamicAgeByMonth = (birthYear: number, birthMonth: number): number => {
    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth() + 1;

    let age = currentYear - birthYear;

    if (currentMonth < birthMonth) {
      age--;
    }

    return age;
  };

  const myAge = getDynamicAgeByMonth(2005, 9);

  return (
    <div className="w-full max-w-md mx-auto flex flex-col gap-6 py-6 px-4 select-none">
      
      {/* 1. PILOT PROFILE CARD (Combines PLAYER_CARD & RECRUIT_CLASS info) */}
      <div className="w-full bg-theme-cell border border-theme-border-main rounded-2xl p-5 backdrop-blur-md shadow-xl text-left font-mono relative overflow-hidden transition-all duration-300 hover:border-theme-accent hover:shadow-[0_0_20px_rgba(168,85,247,0.12)] group z-20">
        
        {/* Terminal Header Telemetry */}
        <div className="flex justify-between items-center border-b border-theme-border-subtle pb-2.5 mb-3.5 text-[8px] font-bold text-theme-accent tracking-widest uppercase">
          <span className="flex items-center gap-1.5">
            <Terminal className="w-3 h-3" />
            [ PLAYER_CARD ]
          </span>
          <span className="flex items-center gap-1">
            <CircleDot className="w-2.5 h-2.5 animate-pulse text-theme-accent" />
            ONLINE
          </span>
        </div>

        {/* Identity & Core Details */}
        <div className="flex justify-between items-start gap-4">
          <div>
            <span className="text-[7px] text-theme-text-muted tracking-wider uppercase font-bold block mb-1">IDENT_NAME</span>
            <h2 className="text-xl font-black text-foreground uppercase tracking-tight">Kaden Luu</h2>
          </div>
          <div className="text-right">
            <span className="text-[7px] text-theme-text-muted tracking-wider uppercase font-bold block mb-1">AGE_RECORD</span>
            <span className="text-sm font-black text-foreground">{myAge} YEARS</span>
          </div>
        </div>

        {/* Career & Classification Grid */}
        <div className="grid grid-cols-2 gap-3 mt-4 pt-3 border-t border-theme-border-subtle/50">
          <div className="bg-theme-bg/30 border border-theme-border-subtle/30 rounded-xl p-3 flex flex-col justify-between">
            <span className="text-[7px] text-theme-text-muted tracking-wider uppercase font-bold block mb-1">SPECIALIZATION</span>
            <div>
              <span className="text-[10px] font-black text-foreground uppercase block leading-tight">SOFTWARE ENG</span>
            </div>
          </div>
          <div className="bg-theme-bg/30 border border-theme-border-subtle/30 rounded-xl p-3 flex flex-col justify-between">
            <span className="text-[7px] text-theme-text-muted tracking-wider uppercase font-bold block mb-1">INSTITUTION</span>
            <div>
              <span className="text-[10px] font-black text-foreground uppercase block leading-tight">UC IRVINE</span>
            </div>
          </div>
        </div>

      </div>

      {/* 2. PORTRAIT VIEWPORT */}
      <div className="relative w-full z-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-theme-accent/5 rounded-full blur-3xl pointer-events-none" />
        <PlayerScan isDarkMode={isDarkMode} className="w-full h-[400px] sm:h-[420px]" />
      </div>

      {/* 3. SCOUTING REPORT DOSSIER CARD */}
      <div className="w-full bg-theme-cell border border-theme-border-main rounded-2xl p-5 backdrop-blur-md shadow-xl text-left font-mono relative overflow-hidden transition-all duration-300 hover:border-theme-accent hover:shadow-[0_0_20px_rgba(168,85,247,0.12)] group z-20">
        
        {/* Terminal Header Telemetry */}
        <div className="flex justify-between items-center border-b border-theme-border-subtle pb-2.5 mb-3.5 text-[8px] font-bold text-theme-accent tracking-widest uppercase">
          <span className="flex items-center gap-1.5">
            <Shield className="w-3 h-3" />
            [ SCOUTING_REPORT ]
          </span>
        </div>

        {/* Bio description */}
        <div className="bg-theme-bg/20 border border-theme-border-subtle/30 rounded-xl p-3.5 leading-relaxed">
          <p className="text-[11px] font-medium text-theme-text-secondary leading-relaxed">
            Aspiring Computer Science major with a strong development focus on AI systems. 
            Outside of technology, he is highly active and competitive on the court, focusing heavily on basketball and tennis.
          </p>
        </div>

      </div>

    </div>
  );
}
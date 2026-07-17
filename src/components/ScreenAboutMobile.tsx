"use client";

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
    <div className="w-full max-w-md mx-auto flex flex-col items-center gap-6 py-8 px-4 select-none">
      
      {/* CENTER STAGE: Player Scan Card */}
      <div className="z-20 transform scale-[0.92] sm:scale-100 origin-center">
        <PlayerScan isDarkMode={isDarkMode} />
      </div>

      {/* STACKED HUD CARDS */}
      <div className="w-full flex flex-col gap-4 z-20">
        
        {/* CELL 1: NAME & AGE */}
        <div className="w-full text-left font-mono bg-theme-cell border border-theme-border-main rounded-xl p-4 backdrop-blur-md shadow-xl transition-all duration-300 hover:border-theme-accent hover:shadow-[0_0_20px_rgba(168,85,247,0.12)]">
          <div className="flex justify-between items-center border-b border-theme-border-subtle pb-2 mb-2">
            <span className="text-[9px] font-bold text-theme-accent tracking-widest uppercase">[ PLAYER_CARD ]</span>
            <div className="w-1.5 h-1.5 rounded-full bg-theme-accent" style={{ filter: "drop-shadow(0px 0px 3px var(--color-accent))" }} />
          </div>
          <h2 className="text-xl font-black uppercase tracking-tighter text-foreground">Kaden Luu</h2>
          <p className="text-theme-text-secondary text-xs uppercase tracking-wider mt-1 font-bold">AGE: {myAge}</p>
        </div>

        {/* CELL 2: SOFTWARE ENGINEER / SCHOOL */}
        <div className="w-full text-left font-mono bg-theme-cell border border-theme-border-main rounded-xl p-4 backdrop-blur-md shadow-xl transition-all duration-300 hover:border-theme-accent hover:shadow-[0_0_20px_rgba(168,85,247,0.12)]">
          <div className="flex justify-between items-center border-b border-theme-border-subtle pb-2 mb-2">
            <span className="text-[9px] font-bold text-theme-accent tracking-widest uppercase">[ RECRUIT_CLASS ]</span>
            <div className="w-1.5 h-1.5 rounded-full bg-theme-accent" style={{ filter: "drop-shadow(0px 0px 3px var(--color-accent))" }} />
          </div>
          <h3 className="text-sm font-black text-foreground uppercase tracking-tight">SOFTWARE ENGINEER</h3>
          <p className="text-theme-text-secondary text-[10px] uppercase tracking-wider mt-0.5">UC IRVINE</p>
        </div>

        {/* CELL 3: PERSONAL BIO SCOUTING REPORT */}
        <div className="w-full text-left bg-theme-cell border border-theme-border-main rounded-xl p-4 backdrop-blur-md shadow-xl transition-all duration-300 hover:border-theme-accent hover:shadow-[0_0_20px_rgba(168,85,247,0.12)]">
          <div className="flex justify-between items-center border-b border-theme-border-subtle pb-2 mb-2.5">
            <span className="font-mono text-[9px] font-bold text-theme-accent tracking-widest uppercase block">[ SCOUTING_REPORT ]</span>
            <div className="w-1.5 h-1.5 rounded-full bg-theme-accent" style={{ filter: "drop-shadow(0px 0px 3px var(--color-accent))" }} />
          </div>
          <p className="text-theme-text-secondary text-xs font-medium leading-relaxed font-mono">
            Aspiring Computer Science major with a strong development focus on AI systems.
            Outside of technology, he is highly active and competitive on the court, focusing heavily on basketball and tennis.
          </p>
        </div>

      </div>
    </div>
  );
}
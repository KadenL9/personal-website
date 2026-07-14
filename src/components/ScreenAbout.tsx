"use client";

import PlayerScan from "./PlayerSilhouette";

export default function ScreenAbout() {
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
        <div className="relative w-full max-w-5xl h-[600px] flex items-center justify-center z-10 px-4 md:px-0">
            {/* ==========================================
          THE RESPONSIVE HYBRID CIRCUIT LAYER 
          ========================================== */}
            <div className="absolute inset-0 pointer-events-none hidden md:block z-10">

                {/* LEFT CARD WINGS (Cell 1 & Cell 2) */}
                <div className="absolute left-0 top-0 w-[50%] h-full">
                    {/* Track 1: Top Left Box Horizontal Stem */}
                    <div className="absolute top-[20%] left-0 w-[68%] border-t border-theme-border-main">
                        <div className="absolute inset-0 border-t border-theme-accent" style={{ filter: "drop-shadow(0px 0px 4px var(--color-accent))" }} />
                    </div>
                    {/* Track 1: Diagonal Drop linking straight to Face Scan Area */}
                    <svg className="absolute top-[20%] left-[68%] w-[14%] h-[22%] overflow-visible" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="0" y1="0" x2="100%" y2="100%" className="stroke-theme-border-main" strokeWidth="1.5" />
                        <line x1="0" y1="0" x2="100%" y2="100%" className="stroke-theme-accent" strokeWidth="1.5" style={{ filter: "drop-shadow(0px 0px 4px var(--color-accent))" }} />
                    </svg>

                    {/* Track 2: Bottom Left Box Horizontal Stem */}
                    <div className="absolute top-[80%] left-0 w-[68%] border-t border-theme-border-main">
                        <div className="absolute inset-0 border-t border-theme-accent" style={{ filter: "drop-shadow(0px 0px 4px var(--color-accent))" }} />
                    </div>
                    {/* Track 2: Diagonal Rise linking straight to Face Scan Area */}
                    <svg className="absolute bottom-[20%] left-[68%] w-[14%] h-[22%] overflow-visible" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="0" y1="100%" x2="100%" y2="0" className="stroke-theme-border-main" strokeWidth="1.5" />
                        <line x1="0" y1="100%" x2="100%" y2="0" className="stroke-theme-accent" strokeWidth="1.5" style={{ filter: "drop-shadow(0px 0px 4px var(--color-accent))" }} />
                    </svg>
                </div>

                {/* RIGHT CARD WING (Cell 3) */}
                <div className="absolute right-0 top-0 w-[50%] h-full">
                    {/* Track 3: Mid Right Box Horizontal Stem */}
                    <div className="absolute top-[53%] right-0 w-[62%] border-t border-theme-border-main">
                        <div className="absolute inset-0 border-t border-theme-accent" style={{ filter: "drop-shadow(0px 0px 4px var(--color-accent))" }} />
                    </div>
                    {/* Track 3: Diagonal Rise linking back up toward Face Scan */}
                    <svg className="absolute bottom-[47%] right-[62%] w-[16%] h-[15%] overflow-visible" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="0" y1="0" x2="100%" y2="100%" className="stroke-theme-border-main" strokeWidth="1.5" />
                        <line x1="0" y1="0" x2="100%" y2="100%" className="stroke-theme-accent" strokeWidth="1.5" style={{ filter: "drop-shadow(0px 0px 4px var(--color-accent))" }} />
                    </svg>
                </div>

            </div>

            {/* ==========================================
          THE 3-CELL HUD INTERFACE
          ========================================== */}

            {/* CELL 1: NAME & AGE (Top Left) */}
            <div className="absolute top-[20%] -translate-y-1/2 left-0 w-64 text-left font-mono bg-theme-cell border border-theme-border-main rounded-xl p-4 backdrop-blur-md shadow-2xl z-20 transition-all duration-300 hover:border-theme-accent hover:-translate-y-[calc(50%+4px)] hover:shadow-[0_0_25px_rgba(168,85,247,0.15)] group">
                <div className="flex justify-between items-center border-b border-theme-border-main pb-2 mb-2 transition-colors duration-300 group-hover:border-theme-accent/50">
                    {/* LOCKED: Kept text-theme-accent and bg-theme-accent static */}
                    <span className="text-[9px] font-bold text-theme-accent tracking-widest uppercase">[ PLAYER_CARD ]</span>
                    <div className="w-1.5 h-1.5 rounded-full bg-theme-accent" style={{ filter: "drop-shadow(0px 0px 3px var(--color-accent))" }} />
                </div>
                <h2 className="text-2xl font-black uppercase tracking-tighter text-foreground">Kaden Luu</h2>
                <p className="text-theme-text-secondary text-xs uppercase tracking-wider mt-1 font-bold">AGE: {myAge}</p>
            </div>

            {/* CENTER STAGE: Fixed-Size Card Container */}
            <div className="z-20 transform scale-95">
                <PlayerScan />
            </div>

            {/* CELL 2: SOFTWARE ENGINEER / SCHOOL (Bottom Left) */}
            <div className="absolute top-[80%] -translate-y-1/2 left-0 w-64 text-left font-mono bg-theme-cell border border-theme-border-main rounded-xl p-4 backdrop-blur-md shadow-2xl z-20 transition-all duration-300 hover:border-theme-accent hover:-translate-y-[calc(50%+4px)] hover:shadow-[0_0_25px_rgba(168,85,247,0.15)] group">
                <div className="flex justify-between items-center border-b border-theme-border-main pb-2 mb-2 transition-colors duration-300 group-hover:border-theme-accent/50">
                    {/* LOCKED: Kept text-theme-accent and bg-theme-accent static */}
                    <span className="text-[9px] font-bold text-theme-accent tracking-widest uppercase">[ RECRUIT_CLASS ]</span>
                    <div className="w-1.5 h-1.5 rounded-full bg-theme-accent" style={{ filter: "drop-shadow(0px 0px 3px var(--color-accent))" }} />
                </div>
                <h3 className="text-sm font-black text-foreground uppercase tracking-tight">SOFTWARE ENGINEER</h3>
                <p className="text-theme-text-secondary text-[10px] uppercase tracking-wider mt-0.5">UC IRVINE</p>
            </div>

            {/* CELL 3: PERSONAL BIO SCOUTING REPORT (Mid Right) */}
            <div className="absolute top-[53%] -translate-y-1/2 right-0 w-72 text-left bg-theme-cell border border-theme-border-main rounded-xl p-4 backdrop-blur-md shadow-2xl z-20 transition-all duration-300 hover:border-theme-accent hover:-translate-y-[calc(50%+4px)] hover:shadow-[0_0_25px_rgba(168,85,247,0.15)] group">
                <div className="flex justify-between items-center border-b border-theme-border-main pb-2 mb-2.5 transition-colors duration-300 group-hover:border-theme-accent/50">
                    {/* LOCKED: Kept text-theme-accent and bg-theme-accent static */}
                    <span className="font-mono text-[9px] font-bold text-theme-accent tracking-widest uppercase block">[ SCOUTING_REPORT ]</span>
                    <div className="w-1.5 h-1.5 rounded-full bg-theme-accent" style={{ filter: "drop-shadow(0px 0px 3px var(--color-accent))" }} />
                </div>
                <p className="text-theme-text-secondary text-xs font-medium leading-relaxed font-mono">
                    Aspiring Computer Science major with a strong development focus on AI systems.
                    Outside of technology, he is highly active and competitive on the court, focusing heavily on basketball and tennis.
                </p>
            </div>

        </div>
    );
}
"use client";

import { useScroll, AnimatePresence, motion, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { Sun, Moon } from "lucide-react";
import ScreenAbout from "../components/ScreenAbout";
import ScreenProjects from "../components/ScreenProjects";
import ScreenExperience from "../components/ScreenExperience";

export default function Home() {
    const [stage, setStage] = useState(0);
    const [isDarkMode, setIsDarkMode] = useState(true);

    const { scrollYProgress } = useScroll();

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        if (latest < 0.33) {
            setStage(0);
        } else if (latest >= 0.33 && latest < 0.66) {
            setStage(1);
        } else {
            setStage(2);
        }
    });

    const renderStageContent = () => {
        switch (stage) {
            case 0: return <ScreenAbout />;
            case 1: return <ScreenProjects />;
            case 2: return <ScreenExperience />;
            default: return null;
        }
    };

    const contactLinks = [
        {
            name: "LinkedIn",
            href: "https://linkedin.com/in/kaden-luu",
            icon: () => (
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                </svg>
            )
        },
        {
            name: "GitHub",
            href: "https://github.com/KadenL9",
            icon: () => (
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
            )
        },
        {
            name: "Instagram",
            href: "https://instagram.com/k.luu9",
            icon: () => (
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
            )
        },
        {
            name: "Email",
            href: "mailto:kaden.r.luu@gmail.com",
            icon: () => (
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
            )
        },
    ];

    return (
        <div className={`relative h-[400vh] text-foreground select-none transition-colors duration-500 ${isDarkMode ? "bg-theme-bg dark" : "bg-neutral-50 light"}`}>
            
            <div className="sticky top-0 h-screen w-full flex flex-col justify-between p-6 md:p-12 overflow-hidden z-10">

                {/* ==========================================
                    HIGH-FIDELITY FLUID WAVES BACKGROUND (OS STYLE)
                   ========================================== */}
                <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none transition-colors duration-500">
                    <FluidOSWaves isDarkMode={isDarkMode} />
                </div>

                {/* TOP PANEL: Global Navigation HUD */}
                <header className="w-full max-w-6xl mx-auto flex justify-between items-center z-20 pt-2 shrink-0">
                    <div>
                        <h1 className={`text-xl font-black uppercase tracking-widest transition-colors duration-300 ${isDarkMode ? "text-neutral-200" : "text-neutral-900"}`}>
                            KADEN <span className="text-theme-accent">| Dev</span>
                        </h1>
                    </div>

                    <div className="flex items-center gap-6">
                        <nav className="flex gap-4 font-mono text-[10px] text-theme-text-muted font-bold uppercase tracking-wider">
                            {[
                                { label: "ABOUT", targetStage: 0 },
                                { label: "PROJECTS", targetStage: 1 },
                                { label: "EXPERIENCE", targetStage: 2 }
                            ].map(({ label, targetStage }) => (
                                <button
                                    key={label}
                                    onClick={() => {
                                        const targetScrollTop = (window.innerHeight * 4) * (targetStage * 0.33);
                                        window.scrollTo({
                                            top: targetScrollTop,
                                            behavior: "smooth"
                                        });
                                    }}
                                    className={`transition-colors duration-200 cursor-pointer pointer-events-auto hover:text-foreground ${
                                        stage === targetStage ? "text-theme-accent" : ""
                                    }`}
                                >
                                    {label}
                                </button>
                            ))}
                        </nav>

                        {/* THEME TOGGLE SWITCH */}
                        <button
                            onClick={() => setIsDarkMode(!isDarkMode)}
                            className={`p-2 rounded-lg border backdrop-blur-md transition-all duration-200 pointer-events-auto cursor-pointer ${
                                isDarkMode
                                    ? "bg-theme-cell border-theme-border-main text-theme-accent hover:bg-neutral-800"
                                    : "bg-white border-neutral-300 text-neutral-800 hover:bg-neutral-100"
                            }`}
                            aria-label="Toggle Theme"
                        >
                            {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                        </button>
                    </div>
                </header>

                {/* MAIN STAGE CANVAS */}
                <main className="w-full max-w-6xl mx-auto z-10 flex items-center justify-center relative min-h-[500px] flex-grow">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={stage}
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -15 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="w-full flex items-center justify-center"
                        >
                            {renderStageContent()}
                        </motion.div>
                    </AnimatePresence>
                </main>

                {/* INTEGRATED TELEMETRY FOOTER DOCK */}
<footer className={`w-full border-t border-theme-border-subtle/60 py-4 px-6 font-mono z-20 select-none shrink-0 rounded-xl transition-colors duration-300 ${
    isDarkMode 
        ? "bg-theme-cell/85 border-neutral-800" 
        : "bg-neutral-100/95 border-neutral-300"
} backdrop-blur-md`}>
    <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">

        {/* 1. Left Side: Invisible spacer to push social icons exactly to the center */}
        <div className="hidden md:block flex-1" />

        {/* 2. Middle Section: Social Icons (Perfectly Centered) */}
        <div className="flex items-center justify-center gap-4 flex-1">
            {contactLinks.map((link) => (
                <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={link.name}
                    className={`p-2.5 rounded-lg border transition-all duration-300 flex items-center justify-center group ${
                        isDarkMode
                            ? "border-theme-border-subtle/50 bg-theme-bg/30 text-theme-text-secondary hover:text-theme-accent hover:border-theme-accent hover:bg-theme-accent/5 hover:shadow-[0_0_15px_rgba(168,85,247,0.1)]"
                            : "border-neutral-300 bg-white text-neutral-600 hover:text-indigo-600 hover:border-indigo-600 hover:bg-indigo-50"
                    }`}
                >
                    <div className="transform group-hover:scale-105 transition-transform duration-200">
                        <link.icon />
                    </div>
                </a>
            ))}
        </div>

        {/* 3. Right Side: Copyright (Aligned far-right) */}
        <div className="text-[9px] font-bold tracking-widest uppercase flex-1 text-center md:text-right text-theme-text-muted">
            © {new Date().getFullYear()} KADEN LUU
        </div>

    </div>
</footer>

            </div>
        </div>
    );
}

/* =========================================================================
   FLUID OS WAVES COMPONENT (Upscaled Radial Circles - Pure Lava Lamp Physics)
   ========================================================================= */
function FluidOSWaves({ isDarkMode }: { isDarkMode: boolean }) {
    return (
        <div className="absolute inset-0 w-full h-full bg-theme-bg transition-colors duration-500 overflow-hidden">
            {/* Dark Mode Backdrop Vignette */}
            {isDarkMode && (
                <div className="absolute inset-0 bg-radial-[circle_at_center,_transparent_50%,_#000000_100%] opacity-95 z-[1]" />
            )}

            {/* Bounded Central Canvas (Locked to your content width) */}
            <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-full z-0 pointer-events-none">
                
                {/* BLOB 1: Giant Base Flow (Deep Blue-Indigo) */}
                <motion.div
                    className={`absolute top-[10%] left-[2%] rounded-full shrink-0 transition-colors duration-700 ${
                        isDarkMode 
                            ? "bg-[radial-gradient(circle_at_center,_#2563eb_0%,_#1e1b4b_50%,_transparent_100%)] opacity-70" 
                            : "bg-[radial-gradient(circle_at_center,_#1d4ed8_0%,_#60a5fa_65%,_transparent_100%)] opacity-85"
                    } blur-[110px]`} // Slightly increased blur to match the bigger size
                    style={{ 
                        width: "580px", 
                        height: "580px",
                        minWidth: "580px",
                        minHeight: "580px"
                    }}
                    animate={{
                        scale: [1, 1.12, 0.92, 1.05, 1],
                        rotate: [0, 360],
                        x: [-60, 100, -30, 80, -60],
                        y: [-50, 60, 90, -40, -50],
                    }}
                    transition={{
                        duration: 28,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />

                {/* BLOB 2: Large Wax Fluid (Pink/Fuchsia) */}
                <motion.div
                    className={`absolute bottom-[10%] right-[2%] rounded-full shrink-0 transition-colors duration-700 ${
                        isDarkMode 
                            ? "bg-[radial-gradient(circle_at_center,_#ec4899_0%,_#701a75_55%,_transparent_100%)] opacity-75 mix-blend-screen" 
                            : "bg-[radial-gradient(circle_at_center,_#db2777_0%,_#f472b6_65%,_transparent_100%)] opacity-85"
                    } blur-[100px]`}
                    style={{ 
                        width: "460px", 
                        height: "460px",
                        minWidth: "460px",
                        minHeight: "460px"
                    }}
                    animate={{
                        scale: [1, 0.88, 1.12, 0.95, 1],
                        rotate: [0, -360],
                        x: [50, -100, 70, -50, 50],
                        y: [40, -90, -40, 70, 40],
                    }}
                    transition={{
                        duration: 24,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />

                {/* BLOB 3: Mid-Size Violet Streamer */}
                <motion.div
                    className={`absolute top-[20%] right-[20%] rounded-full shrink-0 transition-colors duration-700 ${
                        isDarkMode 
                            ? "bg-[radial-gradient(circle_at_center,_#4f46e5_0%,_#581c87_50%,_transparent_100%)] opacity-70 mix-blend-screen" 
                            : "bg-[radial-gradient(circle_at_center,_#4f46e5_0%,_#818cf8_65%,_transparent_100%)] opacity-85"
                    } blur-[105px]`}
                    style={{ 
                        width: "520px", 
                        height: "520px",
                        minWidth: "520px",
                        minHeight: "520px"
                    }}
                    animate={{
                        scale: [1, 1.08, 0.92, 1.04, 1],
                        rotate: [0, 360],
                        x: [-80, 80, -50, 70, -80],
                        y: [70, -50, 80, -70, 70],
                    }}
                    transition={{
                        duration: 32,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />

                {/* BLOB 4: Robust Droplet (Fuchsia/Pink Accent) */}
                <motion.div
                    className={`absolute bottom-[15%] left-[15%] rounded-full shrink-0 transition-colors duration-700 ${
                        isDarkMode 
                            ? "bg-[radial-gradient(circle_at_center,_#d946ef_0%,_#4c1d95_55%,_transparent_100%)] opacity-75" 
                            : "bg-[radial-gradient(circle_at_center,_#c084fc_0%,_#e9d5ff_65%,_transparent_100%)] opacity-90"
                    } blur-[90px]`}
                    style={{ 
                        width: "400px", 
                        height: "400px",
                        minWidth: "400px",
                        minHeight: "400px"
                    }}
                    animate={{
                        scale: [1, 0.88, 1.12, 1],
                        rotate: [0, -360],
                        x: [-70, 90, -80, 70, -70],
                        y: [-90, 80, -40, 90, -90],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.5
                    }}
                />

            </div>
        </div>
    );
}
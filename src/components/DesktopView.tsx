"use client";

import { useScroll, AnimatePresence, motion, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { Sun, Moon } from "lucide-react";
import FluidOSWaves from "./FluidOSWaves";

// Desktop Components
import ScreenAbout from "./ScreenAbout";
import ScreenProjects from "./ScreenProjects";
import ScreenExperience from "./ScreenExperience";

// Shared Data Types
import { Project, Experience, ContactLink } from "../data/portfolioData";

interface DesktopViewProps {
    isDarkMode: boolean;
    setIsDarkMode: (val: boolean) => void;
    projects: Project[];
    experiences: Experience[];
    contactLinks: ContactLink[];
}

export default function DesktopView({
    isDarkMode,
    setIsDarkMode,
    projects,
    experiences,
    contactLinks
}: DesktopViewProps) {
    const [stage, setStage] = useState(0);
    const { scrollYProgress } = useScroll();

    // Scroll listener only active on Desktop
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        // Safe check for window dimensions inside the listener to prevent running on mobile screen aspect ratios
        if (typeof window !== "undefined") {
            const isTooNarrow = window.innerWidth < 1024;
            const isTooShort = window.innerHeight < 700;
            if (isTooNarrow || isTooShort) return;
        }

        if (latest < 0.33) {
            setStage(0);
        } else if (latest >= 0.33 && latest < 0.66) {
            setStage(1);
        } else {
            setStage(2);
        }
    });

    const handleNavClick = (targetStage: number) => {
        const totalScrollable = document.documentElement.scrollHeight - window.innerHeight;
        const targetScrollTop = totalScrollable * (targetStage * 0.5);
        window.scrollTo({
            top: targetScrollTop,
            behavior: "smooth"
        });
    };

    return (
        <div className="relative w-full h-[400vh]">
            <div className="relative w-full flex flex-col justify-between p-6 md:p-12 sticky top-0 h-screen overflow-hidden z-10">
                {/* Fluid Background Waves */}
                <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none transition-colors duration-500">
                    <FluidOSWaves isDarkMode={isDarkMode} />
                </div>

                {/* TOP PANEL: Navigation Header */}
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
                                    onClick={() => handleNavClick(targetStage)}
                                    className={`transition-colors duration-200 cursor-pointer pointer-events-auto hover:text-foreground ${
                                        stage === targetStage ? "text-theme-accent" : ""
                                    }`}
                                >
                                    {label}
                                </button>
                            ))}
                        </nav>

                        {/* Theme Switcher */}
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

                {/* MAIN STAGE WINDOW */}
                <main className="w-full max-w-6xl mx-auto z-10 flex flex-col lg:items-center lg:justify-center relative min-h-[500px] flex-grow mt-8 lg:mt-0">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={stage}
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -15 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="w-full flex items-center justify-center"
                        >
                            {stage === 0 && <ScreenAbout />}
                            {stage === 1 && <ScreenProjects />}
                            {stage === 2 && <ScreenExperience />}
                        </motion.div>
                    </AnimatePresence>
                </main>

                {/* TELEMETRY FOOTER DOCK */}
                <footer className={`w-full border-t border-theme-border-subtle/60 py-4 px-6 font-mono z-20 select-none shrink-0 rounded-xl transition-colors duration-300 mt-12 lg:mt-0 ${
                    isDarkMode 
                        ? "bg-theme-cell/85 border-neutral-800" 
                        : "bg-neutral-100/95 border-neutral-300"
                } backdrop-blur-md`}>
                    <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                        <div className="hidden md:block flex-1" />
                        <div className="flex items-center justify-center gap-4 flex-1">
                            {contactLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title={link.name}
                                    className={`p-2.5 rounded-lg border transition-all duration-300 flex items-center justify-center group pointer-events-auto ${
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
                        <div className="text-[9px] font-bold tracking-widest uppercase flex-1 text-center md:text-right text-theme-text-muted">
                            © {new Date().getFullYear()} KADEN LUU
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
}

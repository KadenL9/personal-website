"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, ChevronDown } from "lucide-react";
import FluidOSWaves from "./FluidOSWaves";

// Mobile Components
import ScreenAboutMobile from "./ScreenAboutMobile";
import ScreenProjectsMobile from "./ScreenProjectsMobile";
import ScreenExperienceMobile from "./ScreenExperienceMobile";

// Shared Data Types
import { Project, Experience, ContactLink } from "../data/portfolioData";

interface MobileViewProps {
    isDarkMode: boolean;
    setIsDarkMode: (val: boolean) => void;
    projects: Project[];
    experiences: Experience[];
    contactLinks: ContactLink[];
}

export default function MobileView({
    isDarkMode,
    setIsDarkMode,
    projects,
    experiences,
    contactLinks
}: MobileViewProps) {
    const [activeCategory, setActiveCategory] = useState<0 | 1 | 2>(0);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const categories = [
        { label: "ABOUT", id: 0 },
        { label: "PROJECTS", id: 1 },
        { label: "EXPERIENCE", id: 2 }
    ];

    return (
        <div className="relative w-full min-h-[100dvh] flex flex-col">
            <div className="relative w-full flex flex-col flex-grow justify-between p-6 md:p-12 min-h-[100dvh] z-10">
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

                    <div className="flex items-center gap-4">
                        {/* Custom Sci-Fi Dropdown Taskbar */}
                        <div className="relative">
                            <button
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border font-mono text-[9px] font-bold uppercase tracking-widest transition-all duration-300 pointer-events-auto cursor-pointer ${
                                    isDarkMode
                                        ? "bg-theme-cell border-theme-border-main text-theme-accent hover:border-theme-accent/80"
                                        : "bg-white border-neutral-300 text-neutral-800 hover:border-indigo-600"
                                }`}
                                aria-label="Select Category"
                            >
                                <span>{categories[activeCategory].label}</span>
                                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`} />
                            </button>

                            {/* Dropdown Options List */}
                            <AnimatePresence>
                                {isDropdownOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -8, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: -8, scale: 0.95 }}
                                        transition={{ duration: 0.15 }}
                                        className={`absolute right-0 mt-2 w-32 rounded-xl border p-1 shadow-2xl z-50 backdrop-blur-md ${
                                            isDarkMode
                                                ? "bg-theme-cell/95 border-theme-border-main text-neutral-200"
                                                : "bg-white/95 border-neutral-300 text-neutral-800"
                                        }`}
                                    >
                                        {categories.map((cat, idx) => (
                                            <button
                                                key={cat.label}
                                                onClick={() => {
                                                    setActiveCategory(idx as any);
                                                    setIsDropdownOpen(false);
                                                }}
                                                className={`w-full text-left px-3 py-2 rounded-lg font-mono text-[9px] font-bold uppercase tracking-wider transition-colors duration-200 cursor-pointer pointer-events-auto ${
                                                    activeCategory === idx
                                                        ? "text-theme-accent bg-theme-accent/5 border border-theme-accent/10"
                                                        : isDarkMode
                                                            ? "hover:bg-neutral-800 hover:text-white"
                                                            : "hover:bg-neutral-100 hover:text-neutral-900"
                                                }`}
                                            >
                                                {cat.label}
                                            </button>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

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

                {/* MAIN STAGE WINDOW: Renders the active category page */}
                <main className="w-full max-w-6xl mx-auto z-10 flex flex-col relative flex-grow mt-8">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeCategory}
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -12 }}
                            transition={{ duration: 0.25, ease: "easeInOut" }}
                            className="w-full flex flex-col items-center"
                        >
                            {activeCategory === 0 && <ScreenAboutMobile isDarkMode={isDarkMode} />}
                            {activeCategory === 1 && <ScreenProjectsMobile projects={projects} />}
                            {activeCategory === 2 && <ScreenExperienceMobile experiences={experiences} />}
                        </motion.div>
                    </AnimatePresence>
                </main>

                {/* TELEMETRY FOOTER DOCK */}
                <footer className={`w-full border-t border-theme-border-subtle/60 py-4 px-6 font-mono z-20 select-none shrink-0 rounded-xl transition-colors duration-300 mt-12 ${
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

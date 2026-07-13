"use client";

import { useScroll, AnimatePresence, motion, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { Sun, Moon } from "lucide-react";
import ScreenAbout from "../components/ScreenAbout";
import ScreenProjects from "../components/ScreenProjects";
import ScreenExperience from "../components/ScreenExperience";
import ScreenContact from "../components/ScreenContact";

export default function Home() {
  const [stage, setStage] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Tracks global page-level scroll progress smoothly
  const { scrollYProgress } = useScroll();

  // Modern, performant way to watch motion values in Framer Motion v10+
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < 0.25) {
      setStage(0);
    } else if (latest >= 0.25 && latest < 0.5) {
      setStage(1);
    } else if (latest >= 0.5 && latest < 0.75) {
      setStage(2);
    } else {
      setStage(3);
    }
  });

  const renderStageContent = () => {
    switch (stage) {
      case 0: return <ScreenAbout />;
      case 1: return <ScreenProjects />;
      case 2: return <ScreenExperience />;
      case 3: return <ScreenContact />;
      default: return null;
    }
  };

  return (
    <div 
      className={`relative h-[400vh] text-foreground select-none transition-colors duration-300 ${
        isDarkMode ? "bg-theme-bg dark" : "bg-white light"
      }`}
    >
      <div className="sticky top-0 h-screen w-full flex flex-col justify-between p-6 md:p-12 overflow-hidden z-10">
        
        {/* TOP PANEL: Global Navigation HUD */}
        <header className="w-full max-w-6xl mx-auto flex justify-between items-center z-20 pt-2">
          <div>
            <h1 className={`text-xl font-black uppercase tracking-widest transition-colors duration-300 ${isDarkMode ? "text-neutral-200" : "text-neutral-900"}`}>
              KADEN <span className="text-theme-accent">// Dev</span>
            </h1>
          </div>
          
          <div className="flex items-center gap-6">
          <nav className="flex gap-4 font-mono text-[10px] text-theme-text-muted font-bold uppercase tracking-wider">
              {[
                { label: "ABOUT", targetStage: 0 },
                { label: "PROJECTS", targetStage: 1 },
                { label: "EXPERIENCE", targetStage: 2 },
                { label: "CONTACT", targetStage: 3 }
              ].map(({ label, targetStage }) => (
                <button
                  key={label}
                  onClick={() => {
                    // Calculate the top position based on the 4 stages split evenly across the scroll height
                    const targetScrollTop = (window.innerHeight * 4) * (targetStage * 0.25);
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
                  : "bg-neutral-100 border-neutral-300 text-neutral-800 hover:bg-neutral-200"
              }`}
              aria-label="Toggle Theme"
            >
              {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>
        </header>

        {/* MAIN STAGE CANVAS WITH ANIMATION TRANSITION SWITCHES */}
        <main className="w-full max-w-6xl mx-auto my-auto z-10 flex items-center justify-center relative min-h-[600px]">
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

        <div className="h-4 hidden md:block" />

      </div>
    </div>
  );
}
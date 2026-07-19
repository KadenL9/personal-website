"use client";

import { useState } from "react";
import DesktopView from "../components/DesktopView";
import MobileView from "../components/MobileView";
import { projects, experiences, contactLinks } from "../data/portfolioData";

export default function Home() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    return (
        <div className={`relative w-full text-foreground select-none transition-colors duration-500 ${isDarkMode ? "bg-theme-bg dark" : "bg-neutral-50 light"}`}>
            {/* Desktop viewport container (visible only on >=1024px width AND >=700px height) */}
            <div className="desktop-only w-full">
                <DesktopView
                    isDarkMode={isDarkMode}
                    setIsDarkMode={setIsDarkMode}
                    projects={projects}
                    experiences={experiences}
                    contactLinks={contactLinks}
                />
            </div>

            {/* Mobile viewport container (visible on <1024px width OR <700px height) */}
            <div className="mobile-only w-full">
                <MobileView
                    isDarkMode={isDarkMode}
                    setIsDarkMode={setIsDarkMode}
                    projects={projects}
                    experiences={experiences}
                    contactLinks={contactLinks}
                />
            </div>
        </div>
    );
}
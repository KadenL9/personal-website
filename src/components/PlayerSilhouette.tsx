"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Crosshair, ShieldCheck, Activity } from "lucide-react";

export default function PlayerScan({ isDarkMode = true, className = "w-[320px] h-[420px]" }: { isDarkMode?: boolean; className?: string }) {
    const [scanProgress, setScanProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setScanProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return prev + 1;
            });
        }, 30);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className={`relative bg-theme-bg text-foreground border border-theme-border-main rounded-2xl flex flex-col justify-between p-5 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] overflow-hidden font-mono ${className}`}>

            {/* 1. HUD CORNER BRACKETS */}
            <div className="absolute inset-0 pointer-events-none opacity-40">
                <Crosshair className="absolute top-4 left-4 w-4 h-4 text-theme-text-muted" />
                <Crosshair className="absolute top-4 right-4 w-4 h-4 text-theme-text-muted" />
                <Crosshair className="absolute bottom-4 left-4 w-4 h-4 text-theme-text-muted" />
                <Crosshair className="absolute bottom-4 right-4 w-4 h-4 text-theme-text-muted" />
            </div>

            {/* 2. THE IMAGE VIEWFRAME */}
      <div className={`relative w-full h-[76%] rounded-xl border overflow-hidden group transition-colors duration-300 ${
        isDarkMode 
          ? "bg-theme-cell border-theme-border-subtle" 
          : "bg-white border-neutral-200" // Pure white card backing in light mode instead of theme-cell gray
      }`}>
        
        {/* 
          FIXED: Technical Data Grid Backing 
          Only render the scanning grid in Dark Mode. In Light Mode, we keep it clean so the dots don't distort your photo.
        */}
        {isDarkMode && (
          <div className="absolute inset-0 bg-[radial-gradient(var(--border-main)_1px,transparent_1px)] [background-size:16px_16px] opacity-40 z-0" />
        )}

        {/* Matrix Color Grade Overlay Tint (Only on Dark Mode) */}
        {isDarkMode && (
          <div className="absolute inset-0 bg-gradient-to-t from-theme-bg/70 via-transparent to-transparent pointer-events-none z-10" />
        )}

        {/* PLAYER PORTRAIT IMAGE */}
        <div className="absolute inset-0 flex items-center justify-center p-4 z-20">
          <div className="relative w-full h-full">
            <Image
              src="/me.jpeg"
              alt="Player Silhouette"
              fill
              sizes="(max-width: 320px) 100vw"
              priority
              className={`object-contain transition-all duration-500 ease-out group-hover:scale-105 ${
                isDarkMode 
                  ? "opacity-80 mix-blend-screen" // Sleek holographic blend over dark
                  : "opacity-100 mix-blend-normal" // Crisp, fully-saturated realistic photo over pure white
              }`}
            />
          </div>
        </div>

        {/* Fallback diagnostic icon if image load is slow */}
        {scanProgress < 15 && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-30">
            <Activity className="w-8 h-8 text-theme-text-muted/30 animate-pulse" />
          </div>
        )}

        {/* THE LASER SCAN SWEEP */}
        <motion.div
          className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-theme-accent to-transparent z-40"
          style={{ filter: "drop-shadow(0px 0px 6px var(--color-accent))" }}
          initial={{ top: "0%" }}
          animate={{ top: "100%" }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        />

        {/* Floating Percentage Tag */}
        <div className="absolute bottom-3 right-3 bg-theme-bg/90 backdrop-blur-md px-2 py-0.5 rounded border border-theme-border-subtle text-[10px] text-theme-accent font-bold z-40">
          {scanProgress}% SECURE
        </div>
      </div>
            {/* 3. DIAGNOSTIC DATA BLOCK */}
            <div className="text-[9px] tracking-wider space-y-2 pt-2 border-t border-theme-border-subtle/40">

                {/* Simplified Status Activity Bar */}
                <div className="flex justify-between items-center bg-theme-cell border border-theme-border-subtle px-2 py-1.5 rounded text-theme-text-secondary">
                    <span className="flex items-center gap-1.5 uppercase font-medium">
                        <span
                            className="w-1.5 h-1.5 rounded-full bg-theme-accent animate-pulse"
                            style={{ filter: "drop-shadow(0px 0px 3px var(--color-accent))" }}
                        />
                        SYSTEM ACTIVE
                    </span>
                    <ShieldCheck className="w-3 h-3 text-theme-accent" />
                </div>

                {/* Academic Profile Metadata */}
                <div className="flex justify-center items-center py-0.5 text-center">
                    <span className="text-theme-accent font-bold tracking-widest">CLASS OF 2027</span>
                </div>

            </div>

        </div>
    );
}
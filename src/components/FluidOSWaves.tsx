"use client";

import { motion } from "framer-motion";

export default function FluidOSWaves({ isDarkMode }: { isDarkMode: boolean }) {
    return (
        <div className="absolute inset-0 w-full h-full bg-theme-bg transition-colors duration-500 overflow-hidden">
            {isDarkMode && (
                <div className="absolute inset-0 bg-radial-[circle_at_center,_transparent_50%,_#000000_100%] opacity-95 z-[1]" />
            )}
            <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-full z-0 pointer-events-none">
                <motion.div
                    className={`absolute top-[10%] left-[2%] rounded-full shrink-0 transition-colors duration-700 ${
                        isDarkMode 
                            ? "bg-[radial-gradient(circle_at_center,_#2563eb_0%,_#1e1b4b_50%,_transparent_100%)] opacity-70" 
                            : "bg-[radial-gradient(circle_at_center,_#1d4ed8_0%,_#60a5fa_65%,_transparent_100%)] opacity-85"
                    } blur-[110px]`}
                    style={{ width: "580px", height: "580px", minWidth: "580px", minHeight: "580px" }}
                    animate={{ scale: [1, 1.12, 0.92, 1.05, 1], rotate: [0, 360], x: [-60, 100, -30, 80, -60], y: [-50, 60, 90, -40, -50] }}
                    transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className={`absolute bottom-[10%] right-[2%] rounded-full shrink-0 transition-colors duration-700 ${
                        isDarkMode 
                            ? "bg-[radial-gradient(circle_at_center,_#ec4899_0%,_#701a75_55%,_transparent_100%)] opacity-75 mix-blend-screen" 
                            : "bg-[radial-gradient(circle_at_center,_#db2777_0%,_#f472b6_65%,_transparent_100%)] opacity-85"
                    } blur-[100px]`}
                    style={{ width: "460px", height: "460px", minWidth: "460px", minHeight: "460px" }}
                    animate={{ scale: [1, 0.88, 1.12, 0.95, 1], rotate: [0, -360], x: [50, -100, 70, -50, 50], y: [40, -90, -40, 70, 40] }}
                    transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className={`absolute top-[20%] right-[20%] rounded-full shrink-0 transition-colors duration-700 ${
                        isDarkMode 
                            ? "bg-[radial-gradient(circle_at_center,_#4f46e5_0%,_#581c87_50%,_transparent_100%)] opacity-70 mix-blend-screen" 
                            : "bg-[radial-gradient(circle_at_center,_#4f46e5_0%,_#818cf8_65%,_transparent_100%)] opacity-85"
                    } blur-[105px]`}
                    style={{ width: "520px", height: "520px", minWidth: "520px", minHeight: "520px" }}
                    animate={{ scale: [1, 1.08, 0.92, 1.04, 1], rotate: [0, 360], x: [-80, 80, -50, 70, -80], y: [70, -50, 80, -70, 70] }}
                    transition={{ duration: 32, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className={`absolute bottom-[15%] left-[15%] rounded-full shrink-0 transition-colors duration-700 ${
                        isDarkMode 
                            ? "bg-[radial-gradient(circle_at_center,_#d946ef_0%,_#4c1d95_55%,_transparent_100%)] opacity-75" 
                            : "bg-[radial-gradient(circle_at_center,_#c084fc_0%,_#e9d5ff_65%,_transparent_100%)] opacity-90"
                    } blur-[90px]`}
                    style={{ width: "400px", height: "400px", minWidth: "400px", minHeight: "400px" }}
                    animate={{ scale: [1, 0.88, 1.12, 1], rotate: [0, -360], x: [-70, 90, -80, 70, -70], y: [-90, 80, -40, 90, -90] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                />
            </div>
        </div>
    );
}

"use client";

import { useRef, useState } from "react";
import { motion, useAnimationFrame } from "framer-motion";
import { ExternalLink, Cpu } from "lucide-react";

export default function ScreenProjects() {
    const projects = [
        { id: "DASHBOARD", title: "NBA Stats Analyzer", desc: "Dashboard that visualizes statistical breakdowns of NBA players.", tech: "[PYTHON][Tkinter][Matplotlib]", link: "https://github.com/KadenL9/NBA-Stats-Visualizer" },
        { id: "GAME 2", title: "Wordle Clone", desc: "Custom clone of the popular New York Times game Wordle.", tech: "[Python][Pygame]", link: "https://github.com/KadenL9/Wordle-Clone" },
        { id: "GAME 1", title: "2048 Clone", desc: "Custom clone of the popular mobile game 2048.", tech: "[Python][Pygame]", link: "https://github.com/KadenL9/2048" },
        { id: "PLUGIN", title: "Minecraft DeathSwap", desc: "Custom Minecraft plugin. Game where players try to kill each other when swapping positions.", tech: "[Java][Spigot API]", link: "https://github.com/KadenL9/MinecraftDeathSwap" },
        { id: "PORTFOLIO", title: "Portfolio Website", desc: "Personal portfolio website to showcase projects, technical skills, and experience.", tech: "[TS][CSS][JS][Node.js]", link: "https://github.com/KadenL9/personal-website"}
    ];

    const orbitRadius = 310;
    const speedFactor = 0.015;
    const ghostCount = 52;

    const [angleOffset, setAngleOffset] = useState(0);
    const lastTimeRef = useRef<number | null>(null);

    // High-performance continuous rendering loop
    useAnimationFrame((time) => {
        if (lastTimeRef.current === null) {
            lastTimeRef.current = time;
            return;
        }
        const delta = time - lastTimeRef.current;
        lastTimeRef.current = time;

        setAngleOffset((prev) => prev + (delta * speedFactor * 0.01));
    });

    // 1. Calculate matching paths for the 4 main project lines
    const calculatedPositions = projects.map((proj, index) => {
        const baseAngle = (index * (2 * Math.PI)) / projects.length;
        const currentAngle = baseAngle + angleOffset;
        return {
            ...proj,
            x: Math.cos(currentAngle) * orbitRadius,
            y: Math.sin(currentAngle) * orbitRadius,
        };
    });

    // 2. Build the structural angles for the 16 ghost lines
    const ghostSpokes = Array.from({ length: ghostCount }).map((_, index) => {
        const baseAngle = (index * (2 * Math.PI)) / ghostCount;
        return {
            id: `GHOST_SPOKE_${index}`,
            baseAngle,
            // Give each spoke its own distinct, offset pulse frequency rate
            pulseDuration: 1.5 + (index % 4) * 0.4
        };
    });

    return (
        <div className="relative w-full max-w-5xl h-[750px] flex items-center justify-center z-10 overflow-visible select-none">

            {/* DYNAMIC CONNECTING WEB LINES & HUD GRID LAYER */}
            <div className="absolute inset-0 pointer-events-none z-10">
                <svg className="w-full h-full overflow-visible" style={{ position: 'absolute', top: 0, left: 0 }}>
                    {/* Shift SVG canvas orientation coordinates directly to the exact page center point */}
                    <g transform="translate(512, 375)">

                        {/* ==========================================
                THE 16 FLUID LENGTH GHOST SPOKES
                ========================================== */}
                        {ghostSpokes.map((spoke) => {
                            // Combine the structural base split with the overall master rotation offset
                            const currentAngle = spoke.baseAngle + angleOffset;
                            const cos = Math.cos(currentAngle);
                            const sin = Math.sin(currentAngle);

                            return (
                                <GhostLineSpoke
                                    key={spoke.id}
                                    cos={cos}
                                    sin={sin}
                                    duration={spoke.pulseDuration}
                                />
                            );
                        })}

                        {/* ==========================================
                THE 4 MAIN PROJECT HARDLINES
                ========================================== */}
                        {calculatedPositions.map((node) => (
                            <g key={`line-${node.id}`}>
                                <line x1="0" y1="0" x2={node.x} y2={node.y} className="stroke-theme-border-subtle/40" strokeWidth="1.25" />
                                <line x1="0" y1="0" x2={node.x} y2={node.y} className="stroke-theme-accent opacity-20 group-hover:opacity-100 transition-opacity duration-300" strokeWidth="1.5" style={{ filter: "drop-shadow(0px 0px 3px var(--color-accent))" }} />

                                {/* Data surge stream */}
                                <motion.line
                                    x1="0" y1="0"
                                    x2={node.x} y2={node.y}
                                    className="stroke-theme-accent"
                                    strokeWidth="2"
                                    style={{ filter: "drop-shadow(0px 0px 5px var(--color-accent))" }}
                                    animate={{
                                        opacity: [0.1, 0.8, 0.3, 0.9, 0.2],
                                        strokeDasharray: ["10, 40", "40, 20", "5, 80", "60, 10", "20, 30"],
                                        strokeDashoffset: [0, -60, -120, -180, -240]
                                    }}
                                    transition={{
                                        duration: 6,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                />
                            </g>
                        ))}
                    </g>
                </svg>
            </div>

            {/* RADAR ORBIT TRACK GUIDES */}
            <div className="absolute pointer-events-none z-10 flex items-center justify-center">
                <div style={{ width: orbitRadius * 2, height: orbitRadius * 2 }} className="absolute rounded-full border border-theme-border-subtle/30" />
            </div>

            {/* REVOLVING PROJECT NODES */}
            {calculatedPositions.map((proj) => (
                <motion.div
                    key={proj.id}
                    className="absolute w-[240px] z-20"
                    style={{
                        x: proj.x,
                        y: proj.y,
                        left: "50%",
                        top: "50%",
                        marginLeft: "-120px",
                        translateY: "-50%"
                    }}
                >
                    <ProjectCard project={proj} />
                </motion.div>
            ))}

            {/* FIXED POWER CORE */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 flex flex-col items-center justify-center pointer-events-none">
                <motion.div
                    className="absolute rounded-full bg-theme-accent/20 blur-3xl"
                    animate={{
                        width: ["200px", "260px", "220px", "280px", "200px"],
                        height: ["200px", "260px", "220px", "280px", "200px"],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />

                <div className="relative w-28 h-28 rounded-full border border-theme-accent bg-theme-cell/95 backdrop-blur-xl shadow-[0_0_25px_rgba(168,85,247,0.25)] flex flex-col items-center justify-center font-mono">
                    <div className="text-theme-accent mb-1.5">
                        <Cpu className="w-6 h-6 animate-spin [animation-duration:10s]" />
                    </div>
                    <span className="text-[10px] font-black tracking-widest text-foreground uppercase">
                        PROJECTS
                    </span>
                </div>
            </div>

        </div>
    );
}

/* ===================================================
   FLUID GHOST LINES
   =================================================== */
function GhostLineSpoke({ cos, sin, duration }: { cos: number; sin: number; duration: number }) {
    // Isolate the length multiplier as an independent, smoothly looping value thread
    const [lengthFactor, setLengthFactor] = useState(120);
    const [opacityFactor, setOpacityFactor] = useState(0.3);

    return (
        <g>
            <motion.div
                className="hidden"
                animate={{
                    spokeLength: [35, 120, 50, 105, 35],
                    opacity: [0.1, 0.5, 0.15, 0.45, 0.1]
                }}
                transition={{
                    duration: duration,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                onUpdate={(latest: any) => {
                    setLengthFactor(latest.spokeLength);
                    setOpacityFactor(latest.opacity);
                }}
            />

            {/* The visible vector line */}
            <line
                x1="0"
                y1="0"
                x2={cos * lengthFactor}
                y2={sin * lengthFactor}
                style={{ opacity: opacityFactor }}
                className="stroke-theme-accent/50"
                strokeWidth="1.25"
            />

            {/* Edge vector dot particle tracking along the dynamic peak lengths */}
            <circle
                cx={cos * lengthFactor}
                cy={sin * lengthFactor}
                style={{ opacity: opacityFactor * 1.5 }}
                r="1.25"
                className="fill-theme-accent/80"
            />
        </g>
    );
}

/* ==========================================
   EXPANDABLE PROJECT CARD SUB-COMPONENT
   ========================================== */
function ProjectCard({ project }: { project: any }) {
    return (
        <div className="w-full bg-theme-cell border border-theme-border-main rounded-xl p-4 font-mono backdrop-blur-md shadow-xl text-left hover:border-theme-accent hover:shadow-[0_0_20px_rgba(109,40,217,0.15)] transition-all duration-300 pointer-events-auto group overflow-hidden">

            <div className="flex justify-between items-center border-b border-theme-border-subtle pb-2 mb-2">
                <span className="text-[8px] font-bold text-theme-accent tracking-widest uppercase">[{project.id}]</span>
                <div className="w-1.5 h-1.5 rounded-full bg-theme-accent group-hover:bg-theme-accent transition-colors duration-300" />
            </div>

            <h3 className="text-xs font-black text-foreground uppercase tracking-wider">
                {project.title}
            </h3>

            <div className="max-h-0 opacity-0 group-hover:max-h-[140px] group-hover:opacity-100 transition-all duration-300 ease-in-out">
                <p className="text-theme-text-secondary text-[10px] leading-relaxed mt-3 mb-3 h-[45px] overflow-hidden">
                    {project.desc}
                </p>

                <div className="flex justify-between items-center pt-2 border-t border-theme-border-subtle">
                    <span className="text-[8px] font-bold text-theme-text-muted tracking-wider uppercase">{project.tech}</span>
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-theme-text-secondary hover:text-theme-accent transition-colors duration-200 cursor-pointer flex items-center justify-center p-1 rounded"
                        title="Open Repository"
                    >
                        <ExternalLink className="w-3.5 h-3.5" strokeWidth={2} />
                    </a>
                </div>
            </div>

        </div>
    );
}
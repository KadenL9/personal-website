"use client";

import { Cpu, ExternalLink } from "lucide-react";

interface Project {
    id: string;
    title: string;
    desc: string;
    tech: string;
    link: string;
}

export default function ScreenProjectsMobile({ projects }: { projects: Project[] }) {
    return (
        <div className="w-full max-w-2xl mx-auto flex flex-col gap-6 py-12 px-4 select-none">
            
            {/* Mobile / Tablet Header Accent */}
            <div className="flex items-center gap-3 border-b border-theme-border-subtle/50 pb-4 mb-2">
                <Cpu className="w-5 h-5 text-theme-accent animate-pulse" />
                <h2 className="text-lg font-black tracking-widest uppercase font-mono text-foreground">
                    PROJECTS
                </h2>
            </div>

            {/* Responsive Touch-Optimized Stack */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {projects.map((proj) => (
                    <div 
                        key={proj.id} 
                        className="w-full bg-theme-cell border border-theme-border-main rounded-xl p-4 font-mono backdrop-blur-md shadow-xl text-left hover:border-theme-accent hover:shadow-[0_0_20px_rgba(109,40,217,0.15)] transition-all duration-300 group overflow-hidden"
                    >
                        <div className="flex justify-between items-center border-b border-theme-border-subtle pb-2 mb-2">
                            <span className="text-[8px] font-bold text-theme-accent tracking-widest uppercase">[{proj.id}]</span>
                            <div className="w-1.5 h-1.5 rounded-full bg-theme-accent" />
                        </div>

                        <h3 className="text-xs font-black text-foreground uppercase tracking-wider">
                            {proj.title}
                        </h3>

                        {/* Permanently expanded details block optimized for touch devices */}
                        <div className="mt-3 opacity-100 transition-all duration-300">
                            <p className="text-theme-text-secondary text-[10px] leading-relaxed mb-3">
                                {proj.desc}
                            </p>

                            <div className="flex justify-between items-center pt-2 border-t border-theme-border-subtle">
                                <span className="text-[8px] font-bold text-theme-text-muted tracking-wider uppercase">{proj.tech}</span>
                                <a
                                    href={proj.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-theme-text-secondary hover:text-theme-accent transition-colors duration-200 flex items-center justify-center p-1 rounded"
                                    title="Open Repository"
                                >
                                    <ExternalLink className="w-3.5 h-3.5" strokeWidth={2} />
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
}
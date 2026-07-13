"use client";

import { Mail } from "lucide-react";

export default function ScreenContact() {
    const contactLinks = [
        {
            name: "LinkedIn",
            href: "https://linkedin.com/in/kaden-luu",
            target: "_blank",
            // Native LinkedIn SVG
            icon: () => (
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                </svg>
            )
        },
        {
            name: "GitHub",
            href: "https://github.com/KadenL9",
            target: "_blank",
            // Native GitHub SVG
            icon: () => (
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
            )
        },
        {
            name: "Instagram",
            href: "https://instagram.com/k.luu9",
            target: "_blank",
            // Native Instagram SVG
            icon: () => (
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
            )
        },
        {
            name: "Email",
            href: "mailto:kaden.r.luu@gmail.com",
            target: "_blank",
            icon: () => <Mail className="w-5 h-5" strokeWidth={1.75} />
        },
    ];

    return (
        /* CHANGED: Increased container width to w-[420px] to accommodate gap-12, and overall padding to p-8 */
        <div className="w-[420px] bg-theme-cell border border-theme-border-main rounded-2xl p-8 font-mono backdrop-blur-md shadow-2xl flex flex-col items-center text-center">

            {/* 2K Theme System Header Tag */}
            <div className="w-full flex items-center justify-between border-b border-theme-border-subtle pb-3 mb-6 text-[9px] font-bold tracking-widest text-theme-text-muted uppercase">
                <span className="font-mono text-[9px] font-bold text-theme-accent tracking-widest uppercase block">[ RECRUIT_LINK ]</span>
                <span className="text-theme-accent animate-pulse">● ONLINE</span>
            </div>

            {/* Main Core Title */}
            {/* CHANGED: Increased mb-5 to mb-8 to push the icons further down */}
            <h2 className="text-xl font-black tracking-widest text-foreground uppercase mb-8">
                CONTACT
            </h2>

            {/* Horizontal Icon Dock with Expanded Spacing */}
            <div className="flex items-center justify-center gap-12 w-full px-2">
                {contactLinks.map((link) => (
                    <a
                        key={link.name}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={link.name}
                        className="p-3 rounded-xl border border-theme-border-subtle bg-theme-bg/30 text-theme-text-secondary hover:text-theme-accent hover:border-theme-accent hover:bg-theme-bg/80 transition-all duration-200 pointer-events-auto cursor-pointer flex items-center justify-center group"
                    >
                        <div className="transform group-hover:scale-105 transition-transform duration-200">
                            <link.icon />
                        </div>
                    </a>
                ))}
            </div>

        </div>
    );
}
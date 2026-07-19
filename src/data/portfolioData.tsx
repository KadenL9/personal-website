import React from "react";

export interface Project {
    id: string;
    title: string;
    desc: string;
    tech: string;
    link: string;
}

export interface Experience {
    id: string;
    role: string;
    company: string;
    period: string;
    points: string[];
}

export interface ContactLink {
    name: string;
    href: string;
    icon: () => React.JSX.Element;
}

export const projects: Project[] = [
    { id: "PORTFOLIO", title: "Portfolio Website", desc: "Personal portfolio website to showcase projects, technical skills, and experience.", tech: "[TS][CSS][JS][Node.js]", link: "https://github.com/KadenL9/personal-website"},
    { id: "DASHBOARD", title: "NBA Stats Analyzer", desc: "Dashboard that visualizes statistical breakdowns of NBA players.", tech: "[PYTHON][Tkinter][Matplotlib]", link: "https://github.com/KadenL9/NBA-Stats-Visualizer" },
    { id: "PLUGIN", title: "Minecraft DeathSwap", desc: "Custom Minecraft plugin. Game where players try to kill each other when swapping positions.", tech: "[Java][Spigot API]", link: "https://github.com/KadenL9/MinecraftDeathSwap" },
    { id: "GAME 1", title: "2048 Clone", desc: "Custom clone of the popular mobile game 2048.", tech: "[Python][Pygame]", link: "https://github.com/KadenL9/2048" },
    { id: "GAME 2", title: "Wordle Clone", desc: "Custom clone of the popular New York Times game Wordle.", tech: "[Python][Pygame]", link: "https://github.com/KadenL9/Wordle-Clone" }
];

export const experiences: Experience[] = [
    {
        id: "VS Copilot",
        role: "SOFTWARE ENGINEERING INTERN",
        company: "MICROSOFT",
        period: "JUN-SEP 2026",
        points: [
            "Added an audio alert feature in Visual Studio with configurable settings that plays whenever Copilot chat finishes generating a response (WIP)",
            "Researched different STT (speech-to-text) engines and implemented the microphone function in Visual Studio that allows users to use STT to prompt copilot (WIP)"
        ]
    },
    {
        id: "1st Party Engineering Tools",
        role: "EXPLORE INTERN",
        company: "Microsoft",
        period: "JUN-SEP 2025",
        points: [
            "Developed a fine-tuned GPT-4.1 model to assist with .NET Framework to .NET Core migration, using supervised learning with a custom dataset of before-and-after C# code transformations",
            "Designed and built a proof-of-concept .NET migration bot that automates git operations, pull request creation, Roslyn workspace analysis, prompt generation, and C# code transformation, successfully advancing to MVP stage after being presented to first-party customers",
            "Initiated the development of a testing framework to support easy, repeatable evaluation of WCF (Windows Communication Foundation) migration prompts, streamlining prompt iteration",
            "Helped generate and submit 53 pull requests across multiple first-party customer repositories"
        ]
    }
];

export const contactLinks: ContactLink[] = [
    { name: "LinkedIn", href: "https://linkedin.com/in/kaden-luu", icon: () => <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg> },
    { name: "GitHub", href: "https://github.com/KadenL9", icon: () => <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg> },
    { name: "Instagram", href: "https://instagram.com/k.luu9", icon: () => <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg> },
    { name: "Email", href: "mailto:kaden.r.luu@gmail.com", icon: () => <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg> }
];

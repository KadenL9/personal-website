"use client";

export default function ScreenProjects() {
  return (
    <div className="w-full space-y-6">
      <h2 className="text-2xl font-black uppercase tracking-wider text-neutral-300 border-b border-neutral-950 pb-2">[ 02 / CORE SKILLS & HIGHLIGHTS ]</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* This is where your animated skill bars or project item cards will mount */}
        <div className="p-4 bg-neutral-900/40 rounded-xl border border-neutral-900 h-32 flex items-center justify-center text-neutral-600 text-xs font-mono">Project Card Component Grid Slot</div>
        <div className="p-4 bg-neutral-900/40 rounded-xl border border-neutral-900 h-32 flex items-center justify-center text-neutral-600 text-xs font-mono">Skills Progress Bars Slot</div>
      </div>
    </div>
  );
}
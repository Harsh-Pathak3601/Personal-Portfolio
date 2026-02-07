"use client";

import React, { useState, useEffect, useRef } from "react";
import { ImCancelCircle } from "react-icons/im";

/* ===================== MINI TERMINAL PREVIEW ===================== */
const TerminalPreview = () => (
  <div className="w-full h-28 bg-black/40 rounded-xl border border-white/10 p-3 font-mono text-[8px] flex flex-col gap-1 overflow-hidden pointer-events-none group-hover:border-purple-500/50 transition-colors">
    <div className="flex gap-1 mb-1">
      <div className="w-1.5 h-1.5 rounded-full bg-red-500/50" />
      <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/50" />
      <div className="w-1.5 h-1.5 rounded-full bg-green-500/50" />
    </div>
    <div className="text-emerald-500/80">➜ ~ access core_metrics</div>
    <div className="text-white/40">Loading system dependencies...</div>
    <div className="text-purple-400/70">Authenticated as: HARSH_PATHAK</div>
    <div className="text-emerald-500/80 flex gap-1">
      ➜ ~harsh <span className="w-1 h-2 bg-emerald-500/80 animate-pulse" />
    </div>
  </div>
);

/* ===================== FULL-SCREEN TERMINAL MODAL ===================== */
const TerminalModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([
    { type: "sys", text: "HARSH_CORE_OS v4.0.2 - SECURE_BOOT_INIT..." },
    { type: "sys", text: "Establishing encrypted tunnel... DONE" },
    { type: "resp", text: "Interactive session started. Type 'help' for protocols or 'exit' to close." }
  ]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setInput("");
      setHistory([
        { type: "sys", text: "HARSH_CORE_OS v4.0.2 - SECURE_BOOT_INIT..." },
        { type: "sys", text: "Establishing encrypted tunnel... DONE" },
        { type: "resp", text: "Interactive session started. Type 'help' for protocols or 'exit' to close." }
      ]);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [history]);

  if (!isOpen) return null;

  const handleCmd = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.toLowerCase().trim();
    if (!cmd) return;
    if (cmd === "exit" || cmd === "close") { onClose(); return; }

    let response = `ERR: Protocol '${cmd}' not recognized.`;
    if (cmd === "help") response = "Protocols: bio, skills, socials, clear, exit";
    if (cmd === "bio") response = "Harsh Pathak: Full Stack Engineer specializing in scalable web architectures and MLOps.";
    if (cmd === "skills") response = "STACK: Next.js, Python, Docker, AWS, TypeScript, MongoDB.";
    if (cmd === "socials") response = "GitHub: Harsh-Pathak3601 | LinkedIn: /in/harshpathak";
    
    if (cmd === "clear") setHistory([]);
    else setHistory(prev => [...prev, { type: "cmd", text: cmd }, { type: "resp", text: response }]);
    setInput("");
  };

  return (
    <div className="fixed inset-0 z-[9999] bg-[#0D0214] flex flex-col items-center justify-center p-4 md:p-10 font-mono text-white">
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(147,51,234,0.05)_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px] z-20 opacity-30" />
      <div className="w-full max-w-6xl h-[85vh] bg-[#020617]/95 rounded-3xl border border-purple-500/30 flex flex-col shadow-[0_0_100px_rgba(168,85,247,0.15)] relative z-10 overflow-hidden">
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-white/5">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <span className="text-[10px] tracking-[0.4em] text-white/30 uppercase font-bold italic">Harsh_Full_System_Terminal</span>
          <button onClick={onClose} className="text-[#C1C2D3] hover:text-white transition-colors">
            <ImCancelCircle size={20} />
          </button>
        </div>
        <div className="flex-1 p-6 md:p-10 overflow-hidden flex flex-col">
          <div ref={scrollRef} className="flex-1 overflow-y-auto space-y-4 custom-scrollbar text-sm md:text-base pr-4">
            {history.map((line, i) => (
              <div key={i} className={line.type === "cmd" ? "text-purple-400 font-bold" : line.type === "sys" ? "text-blue-400/50 italic" : "text-emerald-400"}>
                {line.type === "cmd" ? (
                  <div className="flex gap-3">
                    <span className="text-emerald-500">➜</span>
                    <span className="text-purple-400">~</span>
                    <span className="uppercase">{line.text}</span>
                  </div>
                ) : ( <div className="pl-8 leading-relaxed">{line.text}</div> )}
              </div>
            ))}
          </div>
          <form onSubmit={handleCmd} className="mt-6 flex items-center gap-3 border-t border-white/5 pt-6">
            <span className="text-emerald-500 font-bold text-xl">➜</span>
            <span className="text-purple-400 font-bold text-xl">~/harsh</span>
            <div className="flex-1 relative">
              <input autoFocus value={input} onChange={(e) => setInput(e.target.value)}
                className="bg-transparent outline-none w-full text-white text-xl caret-transparent" 
                spellCheck={false} autoComplete="off" />
              <div className="absolute top-1 h-6 w-2.5 bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,1)] animate-pulse" 
                style={{ left: `${input.length * 0.72}rem` }} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

/* ===================== CARD WRAPPER ===================== */
const CardWrapper = ({ title, description, children, className = "", onClick, href }: any) => (
  <div 
    onClick={onClick}
    className={`group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#04071d] p-1 transition-all duration-700 hover:border-purple-500/40 hover:shadow-[0_0_40px_rgba(168,85,247,0.1)] ${className}`}
  >
    <div className="flex h-full flex-col rounded-[1.9rem] bg-gradient-to-br from-white/[0.03] via-transparent to-transparent p-5 md:p-6 text-white">
      <div className="w-full text-center mb-4">
        {href ? (
          <a href={href} target="_blank" rel="noopener noreferrer" className="inline-block group/link">
            <h3 className="text-lg md:text-xl font-black uppercase tracking-tighter text-white group-hover/link:text-purple-400 transition-colors duration-300">
              {title}
            </h3>
          </a>
        ) : (
          <h3 className="text-lg md:text-xl font-black uppercase tracking-tighter text-white group-hover:text-purple-400 transition-colors duration-500">
            {title}
          </h3>
        )}
        <div className="w-10 h-1 bg-purple-500 mx-auto mt-1 rounded-full opacity-50 group-hover:w-16 transition-all duration-500" />
      </div>
      <div className="flex-1 flex items-center justify-center overflow-hidden w-full">
        {children}
      </div>
      <div className="mt-4 text-center">
        <p className="text-[9px] md:text-xs font-medium text-[#C1C2D3] uppercase tracking-[0.2em] opacity-60">
          {description}
        </p>
      </div>
    </div>
  </div>
);

/* ===================== MAIN PAGE ===================== */
export default function ActivityPage() {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  return (
    <main className="min-h-screen w-full bg-[#0D0214] py-16 px-4 md:px-12 lg:px-20 relative overflow-hidden text-white">
      {/* Background Glows Optimized for Obsidian Purple */}
      <div className="fixed top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-900/15 blur-[150px] pointer-events-none" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-900/10 blur-[150px] pointer-events-none" />

      <TerminalModal isOpen={isTerminalOpen} onClose={() => setIsTerminalOpen(false)} />

      <div className="mx-auto max-w-[1300px] relative z-10">
        <header className="mb-16 flex flex-col items-center text-center">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter">
            Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-emerald-400">Snapshot</span>
          </h1>
          <p className="mt-4 text-purple-200/50 max-w-xl text-xs md:text-sm font-light tracking-widest uppercase italic">
            Proof of my skills, consistency, and problem-solving approach.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 lg:gap-6">
          <CardWrapper 
            title="GitHub Streak" 
            description="Contribution consistency tracking" 
            className="md:col-span-12 lg:col-span-8 h-[320px]"
            href="https://github.com/Harsh-Pathak3601"
          >
            <img src="https://github-readme-streak-stats.herokuapp.com/?user=Harsh-Pathak3601&theme=tokyonight&hide_border=true&background=0D021400&ring=a855f7&fire=a855f7" className="w-full h-full object-contain" alt="Streak" />
          </CardWrapper>

          <CardWrapper title="System Terminal" description="Interactive command center" className="md:col-span-12 lg:col-span-4 h-[320px] cursor-pointer group/term-card" onClick={() => setIsTerminalOpen(true)}>
            <div className="flex flex-col items-center gap-4 w-full px-4">
              <TerminalPreview />
              <span className="text-purple-400 font-mono text-[9px] tracking-[0.3em] animate-pulse">INIT_FULL_SYSTEM_ACCESS</span>
            </div>
          </CardWrapper>

          <CardWrapper 
            title="GitHub Impact" 
            description="Overall repository statistics" 
            className="md:col-span-12 lg:col-span-6 h-[340px]"
            href="https://github.com/Harsh-Pathak3601"
          >
            <img src="https://github-readme-stats-fast.vercel.app/api?username=Harsh-Pathak3601&show_icons=true&theme=tokyonight&hide_border=true&bg_color=0D021400&title_color=a855f7&icon_color=a855f7" className="w-full h-auto object-contain" alt="Stats" />
          </CardWrapper>

          <CardWrapper 
            title="LeetCode DSA" 
            description="Problem solving metrics" 
            className="md:col-span-12 lg:col-span-6 h-[340px]"
            href="https://leetcode.com/u/Pathak"
          >
            <img src="https://leetcard.jacoblin.cool/Pathak?theme=dark&font=Karma&ext=contest" className="w-full h-auto object-contain" alt="LeetCode" />
          </CardWrapper>

          <CardWrapper title="Language Stack" description="Language distribution" className="md:col-span-12 lg:col-span-5 h-[340px]">
            <img src="https://github-readme-stats-eight-theta.vercel.app/api/top-langs/?username=Harsh-Pathak3601&layout=compact&theme=tokyonight&hide_border=true&bg_color=0D021400&title_color=a855f7" className="w-[85%] h-auto object-contain" alt="Langs" />
          </CardWrapper>

          <CardWrapper 
            title="GFG Ranking" 
            description="Practice milestones" 
            className="md:col-span-12 lg:col-span-7 h-[340px]"
            href="https://www.geeksforgeeks.org/user/pathakharsh3601/"
          >
            <img src="https://gfg-stats-mocha.vercel.app/profile/pathakharsh3601" className="w-[85%] h-auto object-contain" alt="GFG" />
          </CardWrapper>
        </div>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(168, 85, 247, 0.2); border-radius: 10px; }
      `}</style>
    </main>
  );
}
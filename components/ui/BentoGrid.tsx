"use client";

import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Lottie from "lottie-react";
import { cn } from "@/lib/utils";
import { ImCancelCircle } from "react-icons/im";

/* ===================== CONSTANTS ===================== */

const skillIcons = {
  JavaScript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  React: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  Node: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  Express: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  MongoDB: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  PostgreSQL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  Python: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  Docker: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  Git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  Tailwind: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  Redux: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
  AWS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
  GraphQL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
  MySQL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
} as const;

type SkillKey = keyof typeof skillIcons;

/* ===================== GRID ===================== */

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto", className)}>
      {children}
    </div>
  );
};

/* ===================== ITEM ===================== */

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const [copied, setCopied] = useState(false);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [terminalInput, setTerminalInput] = useState("");
  const [terminalHistory, setTerminalHistory] = useState<{ type: 'cmd' | 'resp' | 'sys', text: string | React.ReactNode }[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll terminal
  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [terminalHistory]);

  // Lock body scroll and ensure terminal visibility
  useEffect(() => {
    if (isTerminalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isTerminalOpen]);

  const launchTerminal = () => {
    setTerminalInput(""); 
    setIsTerminalOpen(true);
    setTerminalHistory([
      { type: 'sys', text: "--- HARSH_OS v4.0.2 ---" },
      { type: 'sys', text: "SYSTEM STATUS: ENCRYPTED" },
      { type: 'resp', text: "Welcome to the Web Terminal! Type 'help' for available commands." },
    ]);
  };

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = terminalInput.toLowerCase().trim();
    if (!cmd) return;

    const newEntries: typeof terminalHistory = [{ type: 'cmd', text: cmd }];

    switch (cmd) {
      case "help": 
        newEntries.push({ type: 'resp', text: "Commands: details, bio, skills, socials, clear, exit" }); 
        break;
      case "details": 
        newEntries.push({ type: 'resp', text: "NAME: Harsh Pathak | ROLE: Full Stack Engineer | LOC: Mumbai, IN" }); 
        break;
      case "bio": 
        newEntries.push({ type: 'resp', text: "I build scalable apps and high-performance code. Coffee in, logic out." }); 
        break;
      case "skills": 
        newEntries.push({ type: 'resp', text: "JS, React, Node, Python, Docker, AWS, GraphQL, MongoDB." }); 
        break;
      case "socials": 
        newEntries.push({ 
          type: 'resp', 
          text: (
            <div className="flex flex-col gap-1 mt-1 font-mono">
              <p className="text-white/60 underline mb-1 font-sans">Direct links established:</p>
              <a href="mailto:pathakharsh3601@gmail.com" className="text-emerald-400 hover:text-white transition-colors">📧 Email: pathakharsh3601@gmail.com</a>
              <a href="https://linkedin.com/in/harshpathak" target="_blank" rel="noreferrer" className="text-emerald-400 hover:text-white transition-colors">🔗 LinkedIn: /in/harsh-pathak</a>
              <a href="https://github.com/Harsh-Pathak3601" target="_blank" rel="noreferrer" className="text-emerald-400 hover:text-white transition-colors">🐙 GitHub: Harsh-Pathak3601</a>
              <a href="/resume.pdf" target="_blank" rel="noreferrer" className="text-purple-400 font-bold hover:text-white transition-colors mt-1">📄 [DOWNLOAD_RESUME.pdf]</a>
            </div>
          ) 
        }); 
        break;
      case "exit": 
        setIsTerminalOpen(false); 
        return;
      case "clear": 
        setTerminalHistory([]); 
        return;
      default: 
        newEntries.push({ type: 'resp', text: `ERROR: Command '${cmd}' not found.` });
    }

    setTerminalHistory(prev => [...prev, ...newEntries]);
    setTerminalInput("");
  };

  /* ===================== TERMINAL PORTAL UI ===================== */
  const terminalPortal = isTerminalOpen && typeof document !== "undefined" ? createPortal(
    <div className="fixed inset-0 z-[999999] flex flex-col bg-[#04071d] font-mono p-4 md:p-10 overflow-hidden">
      {/* Visual CRT effect Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_2px] z-[1000001]" />

      <div className="flex justify-between items-center border-b border-purple-500/30 pb-4 mb-4 relative z-[1000002]">
        <span className="text-purple-400 font-bold tracking-wider text-xs md:text-base">
          HARSH_PERSONAL_TERMINAL
        </span>
        <button onClick={() => setIsTerminalOpen(false)} className="text-[#C1C2D3] hover:text-white text-2xl transition-transform hover:scale-110">
          <ImCancelCircle />
        </button>
      </div>

      <div ref={scrollRef} className="flex-1 overflow-y-auto space-y-3 custom-scrollbar relative z-[1000002]">
        {terminalHistory.map((line, i) => (
          <div key={i} className={cn(
              "flex flex-wrap items-center gap-2",
              line.type === "cmd" ? "text-purple-400 font-bold" : 
              line.type === "sys" ? "text-blue-300 opacity-60 italic" : "text-emerald-400"
            )}>
            {line.type === "cmd" && (
              <span className="flex items-center gap-2 shrink-0">
                <span>➜</span>
                <span className="whitespace-nowrap">admin@harsh:~$</span>
              </span>
            )} 
            <span>{line.text}</span>
          </div>
        ))}
      </div>

      <form onSubmit={handleCommand} className="mt-4 flex items-center gap-2 border-t border-purple-500/20 pt-4 relative z-[1000002] w-full">
        <div className="flex items-center gap-2 shrink-0 text-purple-500 font-bold font-mono">
          <span>➜</span>
          <span className="whitespace-nowrap">admin@harsh:~$</span>
        </div>
        <input
          autoFocus
          value={terminalInput}
          onChange={(e) => setTerminalInput(e.target.value)}
          className="bg-transparent border-none outline-none text-emerald-400 w-full font-mono caret-purple-500"
          autoComplete="off"
          spellCheck={false}
        />
      </form>
    </div>,
    document.body
  ) : null;

  return (
    <>
      {terminalPortal}

      <div
        className={cn(
          "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-500 justify-between flex flex-col space-y-4",
          id === 5 ? "min-h-[300px] md:min-h-full" : "min-h-[200px] md:min-h-full",
          className
        )}
        style={{
          background: "rgb(4,7,29)",
          backgroundImage: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
        }}
      >
        <div className="h-full">
          <div className="w-full h-full absolute inset-0">
            {img && id !== 5 && (
              <img src={img} alt="grid-image" className={cn("w-full h-full object-cover object-center", imgClassName)} />
            )}
            {spareImg && <img src={spareImg} alt="spare-img" className="object-cover object-center w-full h-full absolute opacity-20" />}
          </div>

          {(id === 1 || id === 2 || id === 3 || id === 4 || id === 6) && (
            <div className={cn(titleClassName, "group-hover/bento:translate-x-2 transition duration-300 relative h-full flex flex-col px-5 p-5 lg:p-10")}>
              <div className="font-sans font-extralight text-[#C1C2D3] text-sm md:text-xs lg:text-base z-30 uppercase tracking-widest">{description}</div>
              <div className={cn("font-sans text-lg lg:text-3xl max-w-96 font-bold z-30")}>{title}</div>
              
              {id === 6 ? (
                <div 
                  className="mt-4 md:mt-6 flex flex-col items-center justify-center gap-4 md:gap-6 z-30 cursor-pointer relative group/terminal w-full h-full" 
                  onClick={launchTerminal}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-transparent to-emerald-500/5 opacity-0 group-hover/terminal:opacity-100 transition-opacity duration-500 rounded-3xl" />
                  <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-purple-500/30 group-hover/terminal:border-purple-500 transition-colors" />
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-purple-500/30 group-hover/terminal:border-purple-500 transition-colors" />

                  <div className="w-full max-w-full bg-black/60 border border-white/10 rounded-xl p-3 md:p-6 font-mono text-left backdrop-blur-md shadow-2xl transform group-hover/terminal:-translate-y-2 transition-transform duration-500 group-hover/terminal:border-purple-500/40 mx-auto">
                    <div className="flex justify-between items-center mb-4 border-b border-white/5 pb-2">
                      <div className="flex gap-1.5">
                          <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                          <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                          <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                      </div>
                      <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
                    </div>
                    <div className="space-y-1 md:space-y-2 text-[10px] md:text-sm">
                      <div className="flex gap-2 text-purple-400">
                        <span className="opacity-30 italic">01</span>
                        <span>➜ ~/harsh-pathak</span>
                      </div>
                      <div className="flex gap-2 text-white/90">
                        <span className="opacity-30 italic">02</span>
                        <span>$ access core_system</span>
                      </div>
                      <div className="flex gap-2 text-emerald-400/80 italic">
                        <span className="opacity-30 italic">03</span>
                        <span className="animate-pulse">_ Waiting for input...</span>
                      </div>
                    </div>
                  </div>

                  <div className="relative px-5 py-1.5 md:px-10 md:py-3 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-[10px] md:text-sm font-mono font-bold group-hover/terminal:bg-purple group-hover/terminal:text-black transition-all duration-300 w-full md:w-auto text-center">
                    EXECUTE: CORE_DEEP_DIVE
                  </div>
                </div>
              ) : (
                <div className="mt-4 z-30">
                  {id === 2 && <img src="https://github-readme-stats-fast.vercel.app/api?username=Harsh-Pathak3601&show_icons=true&theme=tokyonight&hide_border=true&bg_color=00000000" className="w-full rounded-xl" alt="Github" />}
                  {id === 3 && <img src="https://leetcard.jacoblin.cool/Pathak?theme=dark&font=Karma&ext=contest&hide_border=true&bg_color=00000000" className="w-full rounded-xl" alt="Leetcode" />}
                  {id === 4 && <img src="https://github-readme-stats-eight-theta.vercel.app/api/top-langs/?username=Harsh-Pathak3601&layout=compact&theme=tokyonight&hide_border=true&bg_color=00000000" className="w-full rounded-xl" alt="Langs" />}
                </div>
              )}
            </div>
          )}

          {id === 5 && (
            <div className="relative flex flex-col h-full w-full py-8 justify-around items-center overflow-hidden">
              <div className="flex flex-col items-center text-center px-5 z-20 mb-8">
                <h2 className="font-sans text-2xl lg:text-3xl font-bold text-white tracking-tight mb-2">{title}</h2>
                <span className="font-kaushan font-extralight text-[#C1C2D3] text-[10px] md:text-xs uppercase tracking-[0.4em] opacity-80">{description}</span>
              </div>
              <div className="relative flex items-center w-full overflow-hidden z-10 py-5">
                <div className="absolute inset-y-0 left-0 w-20 md:w-32 bg-gradient-to-r from-[#04071d] to-transparent z-20 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-20 md:w-32 bg-gradient-to-l from-[#04071d] to-transparent z-20 pointer-events-none" />
                <div className="flex gap-4 md:gap-6 w-max animate-skill-scroll hover:[animation-play-state:paused] px-10">
                  {[...Object.keys(skillIcons), ...Object.keys(skillIcons)].map((skill, i) => (
                    <div key={i} className="flex items-center gap-2 md:gap-3 px-3 py-2 md:px-6 md:py-4 rounded-xl md:rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-md transition-all duration-300 ease-in-out hover:scale-110 hover:border-purple-500/50 hover:bg-white/[0.07] group cursor-pointer">
                      <div className="w-5 h-5 md:w-8 md:h-8 flex items-center justify-center transition-transform duration-300 group-hover:rotate-6">
                        <img src={skillIcons[skill as SkillKey]} className="w-full h-full object-contain" alt={skill} />
                      </div>
                      <span className="text-white font-medium text-[10px] md:text-sm tracking-tight whitespace-nowrap opacity-80 group-hover:opacity-100 transition-opacity">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col items-center px-10 z-20 mt-4">
                <div className="w-20 h-[1.5px] bg-gradient-to-r from-transparent via-purple-500/60 to-transparent mb-4" />
                <span className="font-kaushan font-extralight text-[#C1C2D3] text-[10px] md:text-xs uppercase tracking-[0.3em] leading-relaxed text-center opacity-70">Continuous Learning Modern Tools & Technologies</span>
              </div>
            </div>
          )}
        </div>

        <style jsx>{`
          @keyframes skill-scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
          .animate-skill-scroll { animation: skill-scroll 35s linear infinite; }
          .custom-scrollbar::-webkit-scrollbar { width: 4px; }
          .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(168, 85, 247, 0.4); border-radius: 10px; }
        `}</style>
      </div>
    </>
  );
};
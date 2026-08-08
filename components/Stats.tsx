"use client";

import React, { useState, useEffect, useRef } from "react";
import { GitHubCalendar } from "react-github-calendar";
import { ImCancelCircle } from "react-icons/im";
import {
  SiReact, SiNextdotjs, SiTailwindcss, SiTypescript,
  SiNodedotjs, SiMongodb, SiPostgresql, SiPython,
  SiDocker, SiFigma, SiGit, SiExpress, SiCplusplus,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { statsItems } from "@/data";

/*SKILLS DATA*/
const skills = [
  { name: "React", icon: <SiReact className="text-blue-400" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
  { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
  { name: "Python", icon: <SiPython className="text-yellow-400" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
  { name: "Docker", icon: <SiDocker className="text-blue-400" /> },
  { name: "Figma", icon: <SiFigma className="text-purple-400" /> },
  { name: "Postgres", icon: <SiPostgresql className="text-blue-300" /> },
  { name: "Express", icon: <SiExpress className="text-white/80" /> },
  { name: "Git", icon: <SiGit className="text-[#F05032]" /> },
  { name: "C++", icon: <SiCplusplus className="text-blue-600" /> },
  { name: "Java", icon: <FaJava className="text-red-500" /> },
];

/*COMPONENTS*/
const TerminalPreview = () => (
  <div className="w-full h-28 bg-[#04071d]/80 backdrop-blur-sm rounded-xl border border-white/10 p-3 font-mono text-[8px] flex flex-col gap-1 overflow-hidden pointer-events-none group-hover:border-purple-500/50 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.2)] transition-all duration-500 relative">
    <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(147,51,234,0.05)_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px] z-10 opacity-30" />
    <div className="flex items-center justify-between mb-1 relative z-20">
      <div className="flex gap-1 z-10">
        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-red-500/80 shadow-[0_0_5px_rgba(239,68,68,0.5)]" />
        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-yellow-500/80 shadow-[0_0_5px_rgba(234,179,8,0.5)]" />
        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-500/80 shadow-[0_0_5px_rgba(34,197,94,0.5)]" />
      </div>
      <span className="absolute left-1/2 -translate-x-1/2 text-[5px] sm:text-[6px] tracking-[0.2em] text-white/30 uppercase font-bold italic whitespace-nowrap drop-shadow-[0_0_5px_rgba(255,255,255,0.2)]">
        HARSH_PERSONAL_TERMINAL
      </span>
    </div>
    <div className="text-emerald-400 mt-1 truncate z-20 drop-shadow-[0_0_5px_rgba(52,211,153,0.3)]">➜ ~ access core_metrics</div>
    <div className="text-white/50 italic truncate z-20">Initializing virtual environment...</div>
    <div className="text-purple-400/90 truncate z-20 drop-shadow-[0_0_5px_rgba(168,85,247,0.3)]">Authenticated as: HARSH_PATHAK</div>
    <div className="text-emerald-400 flex items-center gap-1 mt-auto z-20">
      <span className="shrink-0 drop-shadow-[0_0_5px_rgba(52,211,153,0.3)]">➜</span>
      <span className="whitespace-nowrap shrink-0 opacity-80">admin@harsh:~$</span>
      <span className="w-1.5 h-2.5 bg-emerald-400 animate-pulse shrink-0 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
    </div>
  </div>
);

const TerminalModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [input, setInput] = useState("");
  const initialHistory = [
    { type: "sys", text: "HARSH_CORE_OS v4.0.2 - SECURE_BOOT_INIT..." },
    { type: "sys", text: "Establishing encrypted tunnel... DONE" },
    { type: "resp", text: "Interactive session started. Type 'help' for available commands or 'exit' to close." }
  ];
  const [history, setHistory] = useState<any[]>(initialHistory);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) { setInput(""); document.body.style.overflow = "hidden"; }
    else { document.body.style.overflow = "unset"; }
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

    let response: any = `ERR: Protocol '${cmd}' not recognized.`;

    if (cmd === "help") response = "Commands: bio, skills, socials, resume, clear, exit";
    if (cmd === "bio") response = "Harsh Pathak: Full Stack Engineer specializing in scalable web architectures.";
    if (cmd === "skills") response = "STACK: Next.js, Python, Docker, Java, TypeScript, MongoDB.";

    if (cmd === "resume") {
      response = (
        <div className="mt-2 p-3 bg-purple-500/10 rounded-lg border border-purple-500/20 w-fit">
          <a href="/Harsh_Pathak_Resume.pdf" target="_blank" className="text-purple-300 font-bold hover:text-purple-200 transition-colors flex items-center gap-2 text-sm sm:text-base break-words drop-shadow-[0_0_5px_rgba(168,85,247,0.5)]">
            ➜ DOWNLOAD_Harsh_Pathak_Resume.pdf
          </a>
        </div>
      );
    }

    // Socials Links
    if (cmd === "socials") {
      response = (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3 mt-2 text-xs sm:text-sm md:text-base p-2">
          <a href="https://github.com/Harsh-Pathak3601" target="_blank" className="text-emerald-400/90 hover:text-purple-300 transition-colors break-words hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]">➜ GitHub: Harsh-Pathak3601</a>
          <a href="https://linkedin.com/in/harsh-pathak-199503370/" target="_blank" className="text-emerald-400/90 hover:text-purple-300 transition-colors break-words hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]">➜ LinkedIn: /in/harsh-pathak-199503370</a>
          <a href="https://instagram.com/harsh._.pathak1905" target="_blank" className="text-emerald-400/90 hover:text-purple-300 transition-colors break-words hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]">➜ Instagram: @harsh._.pathak1905</a>
          <a href="mailto:pathakharsh3601@gmail.com" className="text-emerald-400/90 hover:text-purple-300 transition-colors break-words hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]">➜ Email: pathakharsh3601@gmail.com</a>
        </div>
      );
    }

    if (cmd === "clear") {
      setHistory(initialHistory);
    } else {
      setHistory(prev => [...prev, { type: "cmd", text: cmd }, { type: "resp", text: response }]);
    }
    setInput("");
  };

  return (
    <div className="fixed inset-0 z-[9999] bg-[#0D0214]/60 backdrop-blur-sm flex flex-col items-center justify-center p-2 sm:p-4 md:p-10 font-mono text-white transition-opacity duration-300">
      <div className="w-full max-w-6xl h-[90vh] sm:h-[85vh] bg-[#04071d]/90 backdrop-blur-xl rounded-2xl sm:rounded-3xl border border-purple-500/30 flex flex-col shadow-[0_0_60px_rgba(168,85,247,0.15)] relative z-10 overflow-hidden ring-1 ring-white/5">
        <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(147,51,234,0.05)_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px] z-20 opacity-40" />

        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 border-b border-purple-500/20 bg-black/20 relative z-30">
          <div className="flex gap-1.5 sm:gap-2 z-30">
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500/80 shadow-[0_0_8px_rgba(239,68,68,0.5)]" />
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500/80 shadow-[0_0_8px_rgba(234,179,8,0.5)]" />
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500/80 shadow-[0_0_8px_rgba(34,197,94,0.5)]" />
          </div>
          <span className="absolute left-1/2 -translate-x-1/2 text-[8px] sm:text-[10px] tracking-widest sm:tracking-[0.5em] text-purple-300/40 uppercase font-bold italic whitespace-nowrap hidden sm:block drop-shadow-[0_0_8px_rgba(168,85,247,0.3)]">
            HARSH_PERSONAL_TERMINAL
          </span>
          <span className="absolute left-1/2 -translate-x-1/2 text-[10px] tracking-widest text-purple-300/40 uppercase font-bold italic whitespace-nowrap sm:hidden drop-shadow-[0_0_8px_rgba(168,85,247,0.3)]">
            TERMINAL
          </span>
          <button onClick={onClose} className="text-purple-400/50 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all relative z-30 p-1">
            <ImCancelCircle size={18} className="sm:w-5 sm:h-5" />
          </button>
        </div>

        {/* Terminal Body */}
        <div className="flex-1 p-3 sm:p-6 md:p-10 overflow-hidden flex flex-col relative z-30 bg-gradient-to-b from-transparent to-purple-900/5">
          <div ref={scrollRef} className="flex-1 overflow-y-auto space-y-4 text-xs sm:text-sm md:text-base pr-2 sm:pr-4 custom-scrollbar break-words">
            {history.map((line, i) => (
              <div key={i} className="animate-fade-in-up">
                {line.type === "cmd" ? (
                  <div className="flex items-start sm:items-center gap-1 sm:gap-2 text-emerald-400 font-bold">
                    <span className="mt-[2px] sm:mt-0 shrink-0 drop-shadow-[0_0_5px_rgba(52,211,153,0.3)]">➜</span>
                    <span className="whitespace-nowrap mt-[2px] sm:mt-0 shrink-0 opacity-80">admin@harsh:~$</span>
                    <span className="text-purple-300 uppercase break-all drop-shadow-[0_0_8px_rgba(168,85,247,0.4)]">{line.text}</span>
                  </div>
                ) : (
                  <div className={line.type === "sys" ? "text-blue-300/60 italic break-words pl-2 sm:pl-3 border-l-2 border-blue-500/30 py-1" : "text-emerald-300/90 break-words pl-1 sm:pl-2"}>
                    {line.text}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Terminal Input */}
          <form onSubmit={handleCmd} className="mt-4 sm:mt-6 flex items-center gap-2 border-t border-purple-500/20 pt-3 sm:pt-4 bg-black/20 rounded-xl px-3 sm:px-4 pb-3 sm:pb-4 shadow-inner">
            <div className="flex items-center gap-1 sm:gap-2 text-emerald-400 font-bold text-sm sm:text-base md:text-xl shrink-0 drop-shadow-[0_0_5px_rgba(52,211,153,0.3)]">
              <span>➜</span>
              <span className="whitespace-nowrap opacity-80">admin@harsh:~$</span>
            </div>
            <input
              autoFocus
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="bg-transparent outline-none flex-1 text-white text-sm sm:text-base md:text-xl caret-purple-500 min-w-0 placeholder-white/20"
              spellCheck={false}
              autoComplete="off"
              placeholder="Type 'help' for commands..."
            />
          </form>
        </div>
      </div>
    </div>
  );
};

/*CARD WRAPPER*/
const CardWrapper = ({ item, children, onClick }: { item: any; children?: React.ReactNode; onClick?: () => void }) => (
  <div
    onClick={onClick}
    className={`group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#04071d] p-1 transition-all duration-700 hover:border-purple-500/40 hover:shadow-[0_0_40px_rgba(168,85,247,0.1)] ${item.className}`}
  >
    <div className="flex h-full flex-col rounded-[1.9rem] bg-gradient-to-br from-white/[0.03] via-transparent to-transparent p-5 md:p-6 text-white">
      <div className="w-full text-center mb-4">
        <h3 className="font-kaushan font-extralight text-[#C1C2D3] text-[10px] md:text-sm uppercase tracking-[0.3em] leading-relaxed text-center group-hover:text-purple-400 transition-colors duration-500">
          {item.title}
        </h3>
        <div className="w-10 h-1 bg-purple-500 mx-auto mt-1 rounded-full opacity-50 group-hover:w-16 transition-all duration-500" />
      </div>
      <div className="flex-1 flex items-center justify-center overflow-hidden w-full">
        {children}
      </div>
      <div className="mt-4 text-center">
        <p className="font-kaushan font-extralight text-[#C1C2D3] text-[10px] md:text-xs uppercase tracking-[0.3em] leading-relaxed text-center opacity-70 group-hover:text-purple-400 group-hover:opacity-100 transition-all duration-500">
          {item.description}
        </p>
      </div>
    </div>
  </div>
);

/*MAIN PAGE */
export default function ActivityPage() {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  // level wise color distribution 
  const purpleTheme = {
    dark: ["#18181b", "#4c1d95", "#7c3aed", "#a855f7", "#c084fc"],
  };

  return (
    <section id="about"
      className="min-h-screen w-full bg-[#0D0214] py-16 px-4 md:px-12 lg:px-20 relative overflow-hidden text-white"
      style={{ contentVisibility: "auto" }}
    >
      <TerminalModal isOpen={isTerminalOpen} onClose={() => setIsTerminalOpen(false)} />

      <div className="mx-auto max-w-[1300px] relative z-10">
        <header className="mb-16 flex flex-col items-center text-center">
          <h1 className="heading text-foreground">
            Engineering <span className="text-primary">Snapshot</span>
          </h1>
          <p className="mt-3 text-sm sm:text-base md:text-lg lg:text-xl md:tracking-wider text-muted-foreground font-kaushan max-w-2xl mx-auto italic opacity-80">
            Proof of my skills, consistency, and problem-solving approach.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 lg:gap-6">
          {statsItems.map((item) => (
            <CardWrapper
              key={item.id}
              item={item}
              onClick={item.id === 2 ? () => setIsTerminalOpen(true) : undefined}
            >
              {item.id === 1 && (
                <div className="relative flex overflow-hidden w-full group/marquee">
                  <div className="flex whitespace-nowrap animate-scroll group-hover/marquee:[animation-play-state:paused]">
                    {[...skills, ...skills].map((skill, i) => (
                      <div key={i} className="flex items-center gap-3 bg-white/[0.03] px-6 py-3 rounded-2xl border border-white/[0.05] mx-3 group">
                        <span className="text-2xl group-hover:scale-110 transition-transform">{skill.icon}</span>
                        <span className="text-gray-300 font-medium text-sm">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {item.id === 2 && (
                <div className="flex flex-col items-center gap-4 w-full px-4 cursor-pointer">
                  <TerminalPreview />
                  <span className="text-purple-400 font-mono text-[9px] md:text-[10px] tracking-[0.25em] uppercase text-center transition-all duration-300 group-hover:text-purple-300 group-hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]">
                    Click to Explore Harsh&apos;s Interactive Terminal
                  </span>
                  <div className="relative w-16 h-[1px] mt-2 bg-purple-500/20 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500 to-transparent -translate-x-full animate-scan" />
                  </div>
                </div>
              )}

              {/* GitHub Calendar (ID 6) */}
              {item.id === 6 ? (
                <div className="w-full flex justify-center py-4 scale-[0.8] md:scale-100 transition-all duration-500 group-hover:brightness-110">
                  <GitHubCalendar
                    username="Harsh-Pathak3601"
                    colorScheme="dark"
                    fontSize={12}
                    blockSize={11}
                    blockMargin={4}
                    theme={purpleTheme}
                    tooltips={{
                      activity: {
                        text: (activity: { date: string; count: number }) => {
                          const contributions = activity.count;
                          const verb = contributions === 1 ? 'contribution' : 'contributions';
                          const date = new Date(activity.date).toLocaleDateString(undefined, {
                            weekday: 'short',
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric'
                          });
                          return `${contributions} ${verb} on ${date}`;
                        }
                      }
                    }}
                  />
                </div>
              ) : (
                item.id >= 3 && item.img && (
                  <div className="w-full flex justify-center p-2 group-hover:scale-[1.02] transition-transform duration-500">
                    <img src={item.img} alt={item.title} className="w-full h-auto object-contain" />
                  </div>
                )
              )}
            </CardWrapper>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll { from { transform: translate3d(0, 0, 0); } to { transform: translate3d(-50%, 0, 0); } }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        .animate-scroll { 
          animation: scroll 40s linear infinite; 
          will-change: transform;
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.3s ease-out forwards;
        }
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(168, 85, 247, 0.2); border-radius: 10px; }
      `}</style>
    </section>
  );
}
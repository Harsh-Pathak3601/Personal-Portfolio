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
  <div className="w-full h-28 bg-black/40 rounded-xl border border-white/10 p-3 font-mono text-[8px] flex flex-col gap-1 overflow-hidden pointer-events-none group-hover:border-purple-500/50 transition-colors">
    <div className="flex items-center justify-between mb-1 relative">
      <div className="flex gap-1 z-10">
        <div className="w-1.5 h-1.5 rounded-full bg-red-500/50" />
        <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/50" />
        <div className="w-1.5 h-1.5 rounded-full bg-green-500/50" />
      </div>
      <span className="absolute left-1/2 -translate-x-1/2 text-[6px] tracking-[0.2em] text-white/20 uppercase font-bold italic whitespace-nowrap">
        HARSH_PERSONAL_TERMINAL
      </span>
    </div>
    <div className="text-emerald-500/80 mt-1">➜ ~ access core_metrics</div>
    <div className="text-white/40 italic">Initializing virtual environment...</div>
    <div className="text-purple-400/70">Authenticated as: HARSH_PATHAK</div>
    <div className="text-emerald-500/80 flex items-center gap-1">
      <span>➜</span>
      <span className="whitespace-nowrap">admin@harsh:~$</span>
      <span className="w-1 h-2 bg-emerald-500/80 animate-pulse" />
    </div>
  </div>
);

const TerminalModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<any[]>([
    { type: "sys", text: "HARSH_CORE_OS v4.0.2 - SECURE_BOOT_INIT..." },
    { type: "sys", text: "Establishing encrypted tunnel... DONE" },
    { type: "resp", text: "Interactive session started. Type 'help' for available commands or 'exit' to close." }
  ]);
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

    if (cmd === "help") response = "Commands: bio, skills, socials,resume, clear, exit";
    if (cmd === "bio") response = "Harsh Pathak: Full Stack Engineer specializing in scalable web architectures.";
    if (cmd === "skills") response = "STACK: Next.js, Python, Docker, Java, TypeScript, MongoDB.";

    if (cmd === "resume") {
      response = (
        <div className="mt-2 p-3">
          <a href="/Harsh_Pathak_Resume.pdf" target="_blank" className="text-purple-400 font-bold hover:underline flex items-center gap-2">
            ➜ DOWNLOAD_Harsh_Pathak_Resume.pdf
          </a>
        </div>
      );
    }

    // Socials Links
    if (cmd === "socials") {
      response = (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
          <a href="https://github.com/Harsh-Pathak3601" target="_blank" className="text-emerald-400 hover:text-purple-400 transition-colors">➜ GitHub: Harsh-Pathak3601</a>
          <a href="https://linkedin.com/in/harsh-pathak-199503370/" target="_blank" className="text-emerald-400 hover:text-purple-400 transition-colors">➜ LinkedIn: /in/harsh-pathak-199503370</a>
          <a href="https://instagram.com/harsh._.pathak1905" target="_blank" className="text-emerald-400 hover:text-purple-400 transition-colors">➜ Instagram: @harsh._.pathak1905</a>
          <a href="mailto:pathakharsh3601@gmail.com" className="text-emerald-400 hover:text-purple-400 transition-colors">➜ Email: pathakharsh3601@gmail.com</a>
        </div>
      );
    }

    if (cmd === "clear") {
      setHistory([]);
    } else {
      setHistory(prev => [...prev, { type: "cmd", text: cmd }, { type: "resp", text: response }]);
    }
    setInput("");
  };


  return (
    <div className="fixed inset-0 z-[9999] bg-[#0D0214] flex flex-col items-center justify-center p-4 md:p-10 font-mono text-white">
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(147,51,234,0.05)_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px] z-20 opacity-30" />
      <div className="w-full max-w-6xl h-[85vh] bg-[#020617]/95 rounded-3xl border border-purple-500/30 flex flex-col shadow-[0_0_100px_rgba(168,85,247,0.15)] relative z-10 overflow-hidden">
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-white/5 relative">
          <div className="flex gap-2 z-30">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <span className="absolute left-1/2 -translate-x-1/2 text-[10px] tracking-[0.5em] text-white/30 uppercase font-bold italic whitespace-nowrap">
            HARSH_PERSONAL_TERMINAL
          </span>
          <button onClick={onClose} className="text-[#C1C2D3] hover:text-white transition-colors relative z-30"><ImCancelCircle size={20} /></button>
        </div>
        <div className="flex-1 p-6 md:p-10 overflow-hidden flex flex-col">
          <div ref={scrollRef} className="flex-1 overflow-y-auto space-y-3 text-sm md:text-base pr-4 custom-scrollbar">
            {history.map((line, i) => (
              <div key={i}>
                {line.type === "cmd" ? (
                  <div className="flex items-center gap-2 text-emerald-500 font-bold">
                    <span>➜</span>
                    <span className="whitespace-nowrap">admin@harsh:~$</span>
                    <span className="text-purple-400 uppercase">{line.text}</span>
                  </div>
                ) : (
                  <div className={line.type === "sys" ? "text-blue-400/50 italic" : "text-emerald-400"}>
                    {line.text}
                  </div>
                )}
              </div>
            ))}
          </div>
          <form onSubmit={handleCmd} className="mt-6 flex items-center gap-2 border-t border-white/5 pt-6">
            <div className="flex items-center gap-2 text-emerald-500 font-bold text-xl">
              <span>➜</span>
              <span className="whitespace-nowrap">admin@harsh:~$</span>
            </div>
            <input
              autoFocus
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="bg-transparent outline-none flex-1 text-white text-xl caret-purple-500"
              spellCheck={false}
              autoComplete="off"
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
        .animate-scroll { 
          animation: scroll 40s linear infinite; 
          will-change: transform;
        }
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(168, 85, 247, 0.2); border-radius: 10px; }
      `}</style>
    </section>
  );
}
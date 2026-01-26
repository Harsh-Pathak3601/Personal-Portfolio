"use client";
import { useState, useEffect } from "react";
import Lottie from "lottie-react";
import { cn } from "@/lib/utils";
import animationData from "@/data/confetti.json";

const skillIcons = {
  JavaScript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  React: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  Express: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  MongoDB: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  PostgreSQL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  Python: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  Docker: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  Git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  "Tailwind CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  Redux: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
  AWS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
  GraphQL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
  MySQL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
} as const;

type SkillKey = keyof typeof skillIcons;

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

  const handleCopy = () => {
    const text = "pathakharsh3601@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const LiveClock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
      const timer = setInterval(() => setTime(new Date()), 1000);
      return () => clearInterval(timer);
    }, []);

    const timeString = new Intl.DateTimeFormat("en-IN", {
      timeZone: "Asia/Kolkata",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    }).format(time);

    const parts = timeString.split(/\s+/);

    return (
      <div className="flex items-baseline justify-center gap-1 font-mono">
        <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tighter shadow-sm">
          {parts[0]}
        </span>
        <span className="text-xs md:text-sm text-purple-400 font-bold uppercase animate-pulse">
          {parts[1]}
        </span>
      </div>
    );
  };

  return (
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
          
          {id === 5 && (
            <div className="relative flex flex-col h-full w-full py-12 justify-around items-center overflow-hidden">
              <div className="flex flex-col items-center text-center px-5 z-20 mb-10">
                <h2 className="font-sans text-2xl lg:text-3xl font-bold text-white tracking-tight mb-2">
                  {title}
                </h2>
                <span className="font-kaushan font-extralight text-[#C1C2D3] text-[10px] md:text-xs uppercase tracking-[0.4em] opacity-80">
                  {description}
                </span>
              </div>

              <div className="relative flex items-center w-full overflow-hidden z-10 py-5">
                <div className="absolute inset-y-0 left-0 w-20 md:w-32 bg-gradient-to-r from-[#04071d] to-transparent z-20 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-20 md:w-32 bg-gradient-to-l from-[#04071d] to-transparent z-20 pointer-events-none" />

                <div className="flex gap-4 md:gap-6 w-max animate-skill-scroll hover:[animation-play-state:paused] px-10">
                  {[...Object.keys(skillIcons), ...Object.keys(skillIcons)].map((skill, i) => (
                    <div 
                      key={i} 
                      className="flex items-center gap-2 md:gap-3 px-3 py-2 md:px-6 md:py-4 rounded-xl md:rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-md transition-all duration-300 ease-in-out hover:scale-110 hover:border-purple-500/50 hover:bg-white/[0.07] group cursor-pointer"
                    >
                      <div className="w-5 h-5 md:w-8 md:h-8 flex items-center justify-center transition-transform duration-300 group-hover:rotate-6">
                        <img 
                          src={skillIcons[skill as SkillKey]} 
                          className="w-full h-full object-contain" 
                          alt={skill} 
                        />
                      </div>
                      <span className="text-white font-medium text-[10px] md:text-sm tracking-tight whitespace-nowrap opacity-80 group-hover:opacity-100 transition-opacity">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col items-center px-10 z-20 mt-8">
                <div className="w-20 h-[1.5px] bg-gradient-to-r from-transparent via-purple-500/60 to-transparent mb-4" />
                <span className="font-kaushan font-extralight text-[#C1C2D3] text-[10px] md:text-xs uppercase tracking-[0.3em] leading-relaxed text-center opacity-70">
                  Continuous Learning Modern Tools & Technologies
                </span>
              </div>
            </div>
          )}
        </div>

        {id === 6 ? (
          <div className="relative flex flex-col items-center justify-center h-full p-6 text-center w-full group">
            <div className="absolute inset-0 bg-gradient-to-t from-purple-500/10 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="z-50 w-full space-y-4">
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
                <p className="text-[#C1C2D3] uppercase tracking-[0.3em] text-[10px] font-bold">
                  System Status: Active
                </p>
              </div>

              <div className="py-2">
                <LiveClock />
                <p className="text-[#C1C2D3] text-[10px] mt-1 opacity-50 font-mono tracking-widest uppercase">
                  Mumbai, India (IST)
                </p>
              </div>

              <div className="bg-black/40 border border-white/10 rounded-lg p-3 font-mono text-left text-[10px] md:text-xs backdrop-blur-md shadow-2xl">
                <div className="flex gap-1.5 mb-2">
                  <div className="w-2 h-2 rounded-full bg-red-500/50" />
                  <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                  <div className="w-2 h-2 rounded-full bg-green-500/50" />
                </div>
                <div className="text-purple-400 font-bold">➜ <span className="text-white">~/harsh-pathak</span></div>
                <div className="text-white/70">
                  $ <span className="text-emerald-400 italic">npm init</span> collab-project
                </div>
                <div className="text-white/40 mt-1 animate-pulse">
                  &gt; Establishing secure connection...
                </div>
              </div>

              <div className="pt-2 relative overflow-visible">
                <div className={`absolute -top-40 left-1/2 -translate-x-1/2 pointer-events-none z-50 ${copied ? "block" : "hidden"}`}>
                  <Lottie animationData={animationData} loop={false} style={{ width: 400, height: 200 }} />
                </div>
                <button 
                  onClick={handleCopy}
                  className="text-[10px] md:text-xs text-[#C1C2D3] hover:text-white transition-colors border-b border-dashed border-white/20 pb-0.5 cursor-pointer relative z-[60]"
                >
                  {copied ? "ID Secured to Clipboard" : "Access via secure-channel (email)"}
                </button>
              </div>
            </div>
          </div>
        ) : (
          id !== 5 && (
            <div className={cn(titleClassName, "group-hover/bento:translate-x-2 transition duration-300 relative h-full flex flex-col px-5 p-5 lg:p-10")}>
              <div className="font-sans font-extralight text-[#C1C2D3] text-sm md:text-xs lg:text-base z-30 uppercase tracking-widest">
                {description}
              </div>
              
              <div className={cn("font-sans text-lg lg:text-3xl max-w-96 font-bold z-30")}>
                {title}
              </div>

              <div className="mt-4 z-30">
                {id === 2 && <img src="https://github-readme-stats-fast.vercel.app/api?username=Harsh-Pathak3601&show_icons=true&theme=tokyonight&hide_border=true&bg_color=00000000" className="w-full rounded-xl" alt="Github" />}
                {id === 3 && <img src="https://leetcard.jacoblin.cool/Pathak?theme=dark&font=Karma&ext=contest&hide_border=true&bg_color=00000000" className="w-full rounded-xl" alt="Leetcode" />}
                {id === 4 && <img src="https://github-readme-stats-eight-theta.vercel.app/api/top-langs/?username=Harsh-Pathak3601&layout=compact&theme=tokyonight&hide_border=true&bg_color=00000000" className="w-full rounded-xl" alt="Langs" />}
              </div>
            </div>
          )
        )}
      </div>

      <style jsx>{`
        @keyframes skill-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-skill-scroll { 
          animation: skill-scroll 35s linear infinite;
        }
        .animate-skill-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};
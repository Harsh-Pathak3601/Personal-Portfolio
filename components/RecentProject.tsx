"use client";

import React, { useState } from "react";
import { FaLocationArrow, FaGithub, FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { LayoutGrid, Layers, ArrowUpRight, GitFork, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { projects } from "@/data";

const RecentProjects = () => {
  const [viewMode, setViewMode] = useState<"stack" | "grid">("stack");
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % projects.length);
  const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);

  const ProjectCard = ({ item }: { item: any }) => (
    <motion.div
      whileHover={{ 
        y: -5,
        borderColor: "rgba(168, 85, 247, 0.6)", 
        boxShadow: "0px 0px 40px -10px rgba(168, 85, 247, 0.4)"
      }}
      className="relative flex flex-col rounded-[2rem] overflow-hidden border border-white/[0.08] bg-[#10131e] group shadow-2xl w-full max-w-[500px]"
    >
      <div className="relative aspect-[16/9] overflow-hidden m-3 rounded-[1.5rem]">
        <img
          src={item.img}
          alt={item.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
        />
      </div>

      <div className="px-6 pb-6 pt-1 flex flex-col items-center text-center">
        <div className="flex items-center justify-between w-full mb-3">
          {viewMode === "stack" && (
            <button onClick={(e) => { e.stopPropagation(); handlePrev(); }} className="md:hidden p-2 text-primary active:scale-75 transition-transform">
              <FaChevronLeft size={18} />
            </button>
          )}

          <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight flex-1">
            {item.title}
          </h2>

          {viewMode === "stack" && (
            <button onClick={(e) => { e.stopPropagation(); handleNext(); }} className="md:hidden p-2 text-primary active:scale-75 transition-transform">
              <FaChevronRight size={18} />
            </button>
          )}
        </div>

        <p className="text-muted-foreground text-xs md:text-sm leading-relaxed mb-5 line-clamp-3 h-[60px]">
          {item.des}
        </p>

        <div className="flex flex-wrap justify-center gap-2 mb-6 h-[64px] overflow-hidden">
          {item.iconLists.map((icon: string, i: number) => (
            <div key={i} className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 h-fit">
               <img src={icon} alt="tech" className="w-3.5 h-3.5 opacity-80" />
               <span className="text-[10px] font-medium text-primary uppercase tracking-wider">
                 {item.techNames ? item.techNames[i] : "Tech"}
               </span>
            </div>
          ))}
        </div>

        <div className="w-full flex items-center justify-between pt-4 border-t border-white/5">
          <div className="flex items-center gap-3 text-muted-foreground/60">
            <div className="flex items-center gap-1 text-[11px]"><Star size={14} className="text-yellow-500/50" /> 0</div>
            <div className="flex items-center gap-1 text-[11px]"><GitFork size={14} /> 0</div>
          </div>
          <div className="flex items-center gap-2">
            <Link href={item.github || "#"} target="_blank" className="p-2.5 rounded-full bg-white/5 text-white/40 hover:text-white transition-all border border-white/5">
              <FaGithub size={18} />
            </Link>
            <Link href={item.link} target="_blank" className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-white text-[10px] sm:text-xs font-bold hover:bg-opacity-90 transition-all shadow-lg active:scale-95">
              Live Demo <FaLocationArrow size={12} />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section 
      className="w-full py-20 relative min-h-screen flex flex-col items-center justify-start overflow-x-hidden" 
      id="projects"
      style={{ background: `radial-gradient(circle at 50% -10%, #1a0b2e 0%, #050505 60%, #000000 100%)` }}
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full flex flex-col items-center text-center mb-10">
        <h1 className="text-white mb-3 text-3xl md:text-5xl font-bold">
          Selected <span className="text-primary">Projects</span>
        </h1>
        <p className="text-muted-foreground font-kaushan text-base md:text-lg max-w-xl">
          A showcase of my recent work and technical experiments.
        </p>

        <div className="flex bg-white/5 p-1 rounded-2xl border border-white/10 backdrop-blur-md mt-8 shadow-xl">
          <button onClick={() => setViewMode("stack")} className={`flex items-center gap-2 px-5 py-2 rounded-xl text-xs font-bold transition-all ${viewMode === "stack" ? "bg-primary text-white shadow-lg" : "text-white/40 hover:text-white"}`}>
            <Layers size={14} /> Stack
          </button>
          <button onClick={() => setViewMode("grid")} className={`flex items-center gap-2 px-5 py-2 rounded-xl text-xs font-bold transition-all ${viewMode === "grid" ? "bg-primary text-white shadow-lg" : "text-white/40 hover:text-white"}`}>
            <LayoutGrid size={14} /> Grid
          </button>
        </div>
      </div>

      <div className="relative w-full max-w-7xl px-4 flex justify-center items-center flex-1">
        <AnimatePresence mode="wait">
          {viewMode === "stack" ? (
            <motion.div 
              key="stack" 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }} 
              className="relative w-full h-[600px] flex items-center justify-center"
            >
              <div className="absolute inset-0 hidden md:flex items-center justify-between z-50 pointer-events-none md:px-10 lg:px-20">
                <button onClick={handlePrev} className="group p-4 rounded-full bg-white/5 border border-white/10 hover:border-primary/50 transition-all pointer-events-auto backdrop-blur-sm">
                  <FaChevronLeft size={24} className="text-white group-hover:text-primary transition-colors" />
                </button>
                <button onClick={handleNext} className="group p-4 rounded-full bg-white/5 border border-white/10 hover:border-primary/50 transition-all pointer-events-auto backdrop-blur-sm">
                  <FaChevronRight size={24} className="text-white group-hover:text-primary transition-colors" />
                </button>
              </div>

              <div className="relative w-full flex flex-col items-center justify-center perspective-1000">
                <div className="relative w-full flex items-center justify-center h-[520px]">
                  <AnimatePresence mode="popLayout">
                    {projects.map((item, index) => {
                      const isCenter = index === currentIndex;
                      const isNext = index === (currentIndex + 1) % projects.length;
                      const isPrev = index === (currentIndex - 1 + projects.length) % projects.length;
                      
                      if (!isCenter && !isNext && !isPrev) return null;

                      return (
                        <motion.div
                          key={item.id}
                          drag={isCenter ? "x" : false}
                          dragConstraints={{ left: 0, right: 0 }}
                          dragElastic={0.2}
                          onDragEnd={(_, info) => {
                            if (info.offset.x > 80) handlePrev();
                            else if (info.offset.x < -80) handleNext();
                          }}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{
                            opacity: isCenter ? 1 : 0.4,
                            scale: isCenter ? 1 : 0.85,
                            x: isCenter ? 0 : isNext ? 120 : -120,
                            zIndex: isCenter ? 30 : 10,
                            rotateY: isCenter ? 0 : isNext ? -10 : 10,
                          }}
                          exit={{ opacity: 0, scale: 0.5 }}
                          transition={{ type: "spring", stiffness: 300, damping: 25 }}
                          className={`absolute w-full max-w-[400px] ${isCenter ? "cursor-grab active:cursor-grabbing" : ""} touch-none`}
                          style={{
                            pointerEvents: isCenter ? "auto" : "none",
                            willChange: "transform, opacity"
                          }}
                        >
                          <ProjectCard item={item} />
                        </motion.div>
                      );
                    })}
                  </AnimatePresence>
                </div>

                <div className="flex gap-2.5 items-center justify-center mt-8">
                  {projects.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      className={`group relative flex items-center justify-center transition-all duration-500 ${
                        currentIndex === idx ? "w-10" : "w-3"
                      }`}
                    >
                      <div 
                        className={`h-2 rounded-full transition-all duration-500 ${
                          currentIndex === idx 
                            ? "w-full bg-primary shadow-[0_0_15px_rgba(168,85,247,0.6)]" 
                            : "bg-white/20 w-full group-hover:bg-white/40"
                        }`} 
                      />
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div 
              key="grid" 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              /* CHANGED: md:grid-cols-2 lg:grid-cols-2 and max-w-5xl for 2x2 feel */
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 w-full max-w-5xl py-10 mx-auto"
            >
              {projects.map((item) => (
                <div key={item.id} className="flex justify-center w-full">
                  <ProjectCard item={item} />
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="mt-20 pb-10">
        <Link href="https://github.com/Harsh-Pathak3601?tab=repositories" target="_blank" className="group flex items-center gap-2 px-8 py-3.5 rounded-full bg-white/5 border border-white/10 hover:border-primary/50 transition-all duration-500">
          <span className="text-white/80 text-sm font-semibold">View Full Archive</span>
          <ArrowUpRight className="w-4 h-4 text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </Link>
      </div>
    </section>
  );
};

export default RecentProjects;
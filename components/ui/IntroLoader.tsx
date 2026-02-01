"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const IntroLoader = ({ onComplete }: { onComplete: () => void }) => {
  const [step, setStep] = useState(0);

  const getCustomGreeting = () => {
    const hour = new Date().getHours();
    let timeGreeting = hour < 12 ? "Good Morning" : hour < 17 ? "Good Afternoon" : "Good Evening";
    return `Hello, ${timeGreeting}`;
  };

  useEffect(() => {
    const timer1 = setTimeout(() => setStep(1), 50); 
    const timer2 = setTimeout(() => setStep(2), 1200); 
    const timer3 = setTimeout(() => onComplete(), 2500); 

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        y: "-100%", 
        transition: { duration: 0.8, ease: [0.7, 0, 0.3, 1] } 
      }}
      /* Updated to use your Obsidian Background variable */
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background overflow-hidden"
    >
      {/* Subtle Grid - Tuned to your border color */}
      <div className="absolute inset-0 opacity-[0.15] bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="relative flex flex-col items-center w-full px-6 z-10">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="greeting"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10, filter: "blur(8px)" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="flex flex-col items-center"
            >
              <motion.div 
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="mb-6 p-4 bg-primary/5 rounded-full border border-primary/20 relative"
              >
                <svg width="50" height="50" viewBox="0 0 24 24" fill="none" className="text-primary">
                  <rect x="5" y="7" width="14" height="12" rx="3" stroke="currentColor" strokeWidth="1.5"/>
                  <circle cx="9" cy="12" r="1.5" fill="currentColor" />
                  <circle cx="15" cy="12" r="1.5" fill="currentColor" />
                  <path d="M9 16H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M12 7V4M12 4L10 2M12 4L14 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M4 11V15M20 11V15" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                </svg>
                <div className="absolute inset-4 bg-primary/20 blur-xl -z-10 rounded-full" />
              </motion.div>
              <h1 className="text-foreground text-2xl md:text-3xl font-extralight italic tracking-wide text-center">
                {getCustomGreeting()}
              </h1>
            </motion.div>
          )}

          {step >= 2 && (
            <motion.div
              key="branding"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center"
            >
              <div className="flex items-center gap-4 md:gap-6 mb-6">
                <div className="relative group">
                   <div className="absolute -inset-2 bg-primary/30 blur-2xl rounded-full opacity-50" />
                   <div className="relative w-14 h-14 md:w-20 md:h-20 flex items-center justify-center border border-primary/20 rounded-2xl bg-secondary/30 backdrop-blur-xl text-foreground">
                    <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10 md:w-12 md:h-12">
                      <motion.path
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                        stroke="currentColor" 
                        strokeWidth="2.5" 
                        strokeLinecap="round"
                        d="M7 4V20"
                      />
                      <motion.path
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.8, delay: 0.1, ease: "easeInOut" }}
                        stroke="currentColor" 
                        strokeWidth="2.5" 
                        strokeLinecap="round"
                        d="M17 4V20"
                      />
                      <motion.path
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.6, delay: 0.3, ease: "easeInOut" }}
                        stroke="hsl(var(--primary))" 
                        strokeWidth="2.5" 
                        strokeLinecap="round"
                        d="M7 12H12M17 12H15"
                      />
                    </svg>
                  </div>
                </div>

                <div className="flex flex-col">
                  <h2 className="text-foreground font-bold text-4xl md:text-6xl tracking-[0.25em] uppercase leading-none">
                    HARSH
                  </h2>
                  <div className="flex items-center gap-1 mt-2">
                    <div className="h-[2px] w-full bg-gradient-to-r from-primary to-transparent" />
                    <div className="h-2 w-2 rounded-full bg-primary animate-pulse shadow-[0_0_12px_hsl(var(--primary))]" />
                  </div>
                </div>
              </div>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-[0.5em] font-medium text-center"
              >
                Welcome to my Portfolio
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="absolute bottom-10 w-full px-12 flex justify-between items-end opacity-40">
        <div className="flex flex-col gap-1 font-mono">
          <p className="text-[9px] text-primary tracking-[0.2em]">
            {step === 2 ? "ENTERING PORTFOLIO" : "SYSTEM READY"}
          </p>
        </div>
      </div>
    </motion.div>
  );
};
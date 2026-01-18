"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const IntroLoader = ({ onComplete }: { onComplete: () => void }) => {
  const [step, setStep] = useState(0);
  const [timer, setTimer] = useState(0);

  const getCustomGreeting = () => {
    const hour = new Date().getHours();
    let timeGreeting = "";
    if (hour < 12) timeGreeting = "Good Morning";
    else if (hour < 18) timeGreeting = "Good Afternoon";
    else timeGreeting = "Good Evening";
    
    // Adding a friendly "Hello" prefix
    return `Hello, ${timeGreeting}`;
  };

  useEffect(() => {
    const startTime = Date.now();
    const timerInterval = setInterval(() => {
      const elapsed = (Date.now() - startTime) / 1000;
      setTimer(elapsed);
    }, 10);

    const timer1 = setTimeout(() => setStep(1), 30); 
    const timer2 = setTimeout(() => setStep(2), 900); 
    const timer3 = setTimeout(() => {
      clearInterval(timerInterval);
      onComplete();
    }, 2400); 

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearInterval(timerInterval);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        y: "-100%", 
        transition: { duration: 0.6, ease: [0.7, 0, 0.3, 1] } 
      }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#030303] overflow-hidden"
    >
      <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="relative flex flex-col items-center w-full px-6 z-10">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="greeting"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, y: -20, filter: "blur(5px)" }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center"
            >
              <motion.div 
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="mb-6 p-4 bg-white/5 rounded-full border border-white/10 relative"
              >
                <svg width="50" height="50" viewBox="0 0 24 24" fill="none" className="text-purple-500">
                  <rect x="5" y="7" width="14" height="12" rx="3" stroke="currentColor" strokeWidth="1.5"/>
                  <circle cx="9" cy="12" r="1.5" fill="white" />
                  <circle cx="15" cy="12" r="1.5" fill="white" />
                  <path d="M9 16H15" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M12 7V4M12 4L10 2M12 4L14 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M4 11V15M20 11V15" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                </svg>
                <div className="absolute inset-4 bg-purple-500/20 blur-xl -z-10 rounded-full" />
              </motion.div>
              
              <h1 className="text-white text-2xl md:text-3xl font-extralight italic tracking-wide text-center">
                {getCustomGreeting()}
              </h1>
            </motion.div>
          )}

          {step >= 2 && (
            <motion.div
              key="branding"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center"
            >
              <div className="flex items-center gap-4 md:gap-6 mb-4">
                <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center border border-white/10 rounded-2xl bg-white/5 backdrop-blur-xl text-white">
                  <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 md:w-10 md:h-10">
                    <motion.path
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.5 }}
                      stroke="currentColor" strokeWidth="1.5" d="M7 4V20"
                    />
                    <motion.path
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      stroke="currentColor" strokeWidth="1.5" d="M17 4V20"
                    />
                    <motion.path
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.4, delay: 0.3 }}
                      stroke="#a855f7" strokeWidth="2.5" d="M7 12H12M17 12H15"
                    />
                  </svg>
                </div>
                <h2 className="text-white font-bold text-4xl md:text-6xl tracking-tighter uppercase leading-none">
                  HARSH<span className="text-purple-500">.</span>
                </h2>
              </div>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-[10px] md:text-xs text-white/40 uppercase tracking-[0.5em] font-medium text-center"
              >
                Welcome to my Portfolio
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="absolute bottom-10 w-full px-12 flex justify-between items-end opacity-40">
        <div className="flex flex-col gap-1 font-mono">
          <p className="text-[9px] text-white tracking-[0.2em]">
            BOOT_TIME: <span className={timer > 2.5 ? "text-red-500" : "text-green-500"}>{timer.toFixed(2)}s</span>
          </p>
          <p className="text-[9px] text-purple-400 tracking-[0.2em]">STATUS: {step === 2 ? "READY" : "LOADING"}</p>
        </div>
      </div>
    </motion.div>
  );
};
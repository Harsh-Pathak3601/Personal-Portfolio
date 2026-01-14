"use client";
import React, { useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export const Navbar = ({
  navItems,
  className,
}: {
  navItems: { name: string; link: string }[];
  className?: string;
}) => {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(true);
  const [active, setActive] = useState("Home");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (current) => {
    const direction = current - lastScrollY;
    if (current < 50) {
      setVisible(true);
    } else if (direction > 0 && !isOpen) {
      setVisible(false);
    } else {
      setVisible(true);
    }
    setLastScrollY(current);
  });

  return (
    <AnimatePresence mode="wait">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className={cn(
          "fixed top-6 inset-x-4 md:inset-x-0 mx-auto z-[5000] flex flex-col md:flex-row items-center justify-between",
          "max-w-7xl md:max-w-fit px-6 py-3 rounded-[2rem] md:rounded-full shadow-lg transition-all duration-300",
          "bg-white/10 backdrop-blur-xl border border-white/20",
          className
        )}
      >
        {/* Logo Section */}
        <div className="flex w-full md:w-auto items-center justify-between px-2">
          <Link 
            href="#home" 
            onClick={() => setActive("Home")}
            className="group flex items-center gap-3 md:mr-6 outline-none"
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-cyan-500/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative flex items-center justify-center w-10 h-10 border border-white/20 rounded-xl bg-white/5 backdrop-blur-sm group-hover:border-cyan-500/50 transition-colors duration-300">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6 text-white group-hover:text-cyan-400 transition-colors duration-300">
                  <motion.path
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    d="M7 4V20"
                  />
                  <motion.path
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    d="M17 4V20"
                  />
                  <motion.path
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeInOut" }}
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    d="M7 12H12M17 12H15"
                    className="stroke-cyan-400"
                  />
                </svg>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-white font-black tracking-[0.25em] text-xl leading-none transition-all duration-300 group-hover:tracking-[0.35em]">
                HARSH
              </span>
              <div className="flex items-center gap-1 mt-1">
                <div className="h-[1px] w-full bg-gradient-to-r from-cyan-500 to-transparent" />
                <div className="h-1 w-1 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_#22d3ee]" />
              </div>
            </div>
          </Link>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-white/80 transition-colors focus:outline-none">
            {isOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
          </button>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.link.toLowerCase()} 
              onClick={() => setActive(item.name)}
              className="relative px-4 py-2 text-sm font-medium transition-colors text-white/70 hover:text-white"
            >
              {active === item.name && (
                <motion.div
                  // REMOVED layoutId: This stops all movement/sliding between links
                  // Added a simple fade-in so it doesn't flicker harshly
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                  className="absolute inset-0 bg-white/10 rounded-full border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.05)]"
                />
              )}
              <span className="relative z-10">{item.name}</span>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden w-full overflow-hidden flex flex-col gap-4 mt-4 pb-4 px-2"
            >
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.link.toLowerCase()}
                  onClick={() => { setActive(item.name); setIsOpen(false); }}
                  className={cn(
                    "text-lg font-medium border-b border-white/5 pb-2 transition-colors",
                    active === item.name ? "text-cyan-400" : "text-white/60 hover:text-white"
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </AnimatePresence>
  );
};
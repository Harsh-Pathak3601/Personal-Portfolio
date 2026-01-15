"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Github, Linkedin, Twitter, ArrowUpRight } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: "Home", href: "#Home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="w-full py-14 relative overflow-hidden bg-[#000319]">
      {/* Visual Separator: Purple Gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[1px] bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Changed to flex-col on mobile and grid-cols-3 on desktop with better alignment */}
        <div className="flex flex-col md:grid md:grid-cols-3 gap-10 md:gap-12 items-center">
          
          {/* Section 1: Logo (Left) */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <Link href="#Home" className="group flex items-center gap-3 outline-none">
              <div className="relative">
                <div className="absolute -inset-1 bg-purple-500/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative flex items-center justify-center w-10 h-10 border border-white/10 rounded-xl bg-white/5 backdrop-blur-sm group-hover:border-purple-500 transition-colors duration-300">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6 text-white group-hover:text-purple-400 transition-colors duration-300">
                    <motion.path
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      transition={{ duration: 1, ease: "easeInOut" }}
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      d="M7 4V20"
                    />
                    <motion.path
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      d="M17 4V20"
                    />
                    <motion.path
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      transition={{ duration: 0.8, delay: 0.4, ease: "easeInOut" }}
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      d="M7 12H12M17 12H15"
                      className="stroke-purple-500"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-kaushan tracking-[0.25em] text-xl leading-none transition-all duration-300 group-hover:tracking-[0.35em]">
                  HARSH
                </span>
                <div className="flex items-center gap-1 mt-1">
                  <div className="h-[1px] w-full bg-gradient-to-r from-purple-500 to-transparent" />
                  <div className="h-1 w-1 rounded-full bg-purple-500 animate-pulse shadow-[0_0_8px_#a855f7]" />
                </div>
              </div>
            </Link>
            <p className="text-xs text-white/40 uppercase tracking-[0.3em] font-medium text-center md:text-left">
              Mumbai • Maharashtra • India
            </p>
          </div>

          {/* Section 2: Social Links (Center) - Added order-3 on mobile to move it below Nav */}
          <div className="flex justify-center items-center gap-4 order-3 md:order-2">
            {[
              { icon: Github, href: "https://github.com/Harsh-Pathak3601" },
              { icon: Linkedin, href: "https://linkedin.com/in/harsh-pathak-199503370" },
              { icon: Twitter, href: "#" },
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 rounded-xl bg-white/[0.03] border border-white/5 text-white/40 hover:text-purple-400 hover:border-purple-500/30 transition-all duration-300"
              >
                <social.icon size={18} className="group-hover:scale-110 transition-transform" />
              </a>
            ))}
          </div>

          {/* Section 3: Navigation (Right) - Added order-2 on mobile */}
          <nav className="flex flex-row justify-center md:justify-end items-center gap-x-6 gap-y-4 flex-wrap order-2 md:order-3">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="group flex items-center gap-1 text-[11px] font-bold text-white/40 hover:text-purple-400 transition-colors uppercase tracking-[0.2em] whitespace-nowrap"
              >
                {link.name}
                <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-all -translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            ))}
          </nav>
        </div>

        {/* Copyright Bar */}
        <div className="mt-14 pt-8 border-t border-white/5 flex flex-col items-center gap-4">
          <p className="text-xs font-bold text-white text-center whitespace-nowrap">
            © {currentYear} <span className="text-white font-bold">Portfolio</span>. 
            Made with ❤️ by <span className="text-purple-500 font-bold">Harsh Pathak</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
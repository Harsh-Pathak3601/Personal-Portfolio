"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Github, Linkedin, ArrowUpRight, Instagram, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: "Home", href: "#Home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    /* 1. FULL-WIDTH SHELL: 
       'w-full' and 'bg-background' ensure the obsidian purple spans the whole screen.
    */
    <footer className="w-full py-14 mt-20 relative overflow-hidden bg-background">
      
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

     
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:grid md:grid-cols-3 gap-10 md:gap-12 items-center">
          
          {/* Section 1: Logo & Tagline */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <Link href="#Home" className="group flex items-center gap-3 outline-none">
              <div className="relative">
                <div className="absolute -inset-1 bg-primary/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative flex items-center justify-center w-10 h-10 border border-border rounded-xl bg-secondary/20 backdrop-blur-sm group-hover:border-primary transition-colors duration-300">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6 text-foreground group-hover:text-primary transition-colors duration-300">
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
                      className="stroke-primary"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-foreground font-bold tracking-[0.25em] text-xl leading-none transition-all duration-300 group-hover:tracking-[0.35em]">
                  HARSH
                </span>
                <div className="flex items-center gap-1 mt-1">
                  <div className="h-[1px] w-full bg-gradient-to-r from-primary to-transparent" />
                  <div className="h-1 w-1 rounded-full bg-primary animate-pulse shadow-[0_0_8px_hsl(var(--primary))]" />
                </div>
              </div>
            </Link>
            
            <p className="text-sm italic text-muted-foreground font-kaushan tracking-wide max-w-[250px] text-center md:text-left">
               Turning lines of code into <span className="text-primary/80">exceptional</span> digital experiences.
            </p>
          </div>

          {/* Section 2: Social Links */}
          <div className="flex justify-center items-center gap-4 order-3 md:order-2">
            {[
              { icon: Github, href: "https://github.com/Harsh-Pathak3601" },
              { icon: Linkedin, href: "https://linkedin.com/in/harsh-pathak-199503370" },
              { icon: Mail, href: "mailto:harshpathak3601@gmail.com" },
              { icon: Instagram, href: "https://instagram.com/harsh._.pathak1905" },
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 rounded-xl bg-secondary/20 border border-border text-muted-foreground/60 hover:text-primary hover:border-primary/30 transition-all duration-300"
              >
                <social.icon size={18} className="group-hover:scale-110 transition-transform" />
              </a>
            ))}
          </div>

          {/* Section 3: Navigation */}
          <nav className="flex flex-row justify-center md:justify-end items-center gap-x-6 gap-y-4 flex-wrap order-2 md:order-3">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="group flex items-center gap-1 text-[11px] font-bold text-muted-foreground/60 hover:text-primary transition-colors uppercase tracking-[0.2em] whitespace-nowrap"
              >
                {link.name}
                <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-all -translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            ))}
          </nav>
        </div>

        {/* Copyright Bar & Location */}
        <div className="mt-14 pt-8 border-t border-border flex flex-col items-center gap-3">
          <p className="text-sm tracking-tight font-bold text-foreground text-center whitespace-nowrap">
            © {currentYear} Portfolio. Made with ❤️ by <span className="text-primary">Harsh Pathak</span>
          </p>
          
          <div className="flex items-center gap-2 opacity-40 group hover:opacity-100 transition-opacity">
            <span className="h-[1px] w-4 bg-primary" />
            <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-foreground whitespace-nowrap">
              Mumbai • Maharashtra • India
            </p>
            <span className="h-[1px] w-4 bg-primary" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
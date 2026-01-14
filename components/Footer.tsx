import React from "react";
import {
  Mail,
  Github,
  Linkedin,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import MagicButton from "@/components/ui/MagicButton";

const socials: { icon: LucideIcon; href: string }[] = [
  { icon: Github, href: "https://github.com/Harsh-Pathak3601" },
  { icon: Linkedin, href: "https://linkedin.com/in/harsh-pathak-199503370" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: "Home", href: "#Home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
  ];

  return (
    <footer className="w-full pt-20 pb-10 relative overflow-hidden" id="contact">
      {/* Background Grid Decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="max-w-10xl mx-auto px-6 relative z-10">
        {/* CTA Section */}
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 mb-6">
            <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[10px] font-bold text-green-500 uppercase tracking-widest">
              Available for new projects
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white lg:max-w-[50vw] leading-tight">
            Ready to build <span className="text-purple">something</span>{" "}
            meaningful together?
          </h1>

          <p className="text-white/60 md:mt-10 my-5 max-w-md font-kaushan italic">
            Reach out to me today and let&apos;s discuss how I can help you achieve
            your goals.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4 mt-2 relative z-20">
            <a href="mailto:pathakharsh3601@gmail.com">
              <MagicButton
                title="Let's get in touch"
                icon={<Mail />}
                position="right"
              />
            </a>

            <div className="flex gap-3 md:mt-9">
              {socials.map((social, i) => {
                const Icon = social.icon;
                return (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/5 border border-white/10 rounded-xl text-white hover:bg-purple/20 hover:border-purple/50 transition-all duration-300"
                  >
                    <Icon size={22} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Mobile Nav Links - Visible on small screens, hidden on MD */}
          <nav className="flex md:hidden gap-6 text-[10px] font-medium text-white/50 uppercase tracking-[0.2em]">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="hover:text-purple transition-colors">
                {link.name}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-2 items-center md:items-start text-center md:text-left">
            {/* Added whitespace-nowrap to keep this on one line */}
            <p className="md:text-base text-xs font-light text-white/80 whitespace-nowrap">
              © {currentYear} Portfolio. Made with{" "}
              <span className="text-red-500">❤️</span> by{" "}
              <span className="text-purple font-medium">Harsh Pathak</span>
            </p>
            <p className="text-[10px] text-white/30 uppercase tracking-[0.2em]">
              Mumbai, Maharashtra, India
            </p>
          </div>

          <div className="flex items-center gap-8">
            {/* Desktop Nav Links */}
            <nav className="hidden md:flex gap-6 text-xs font-medium text-white/50 uppercase tracking-wider">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="hover:text-purple transition-colors">
                  {link.name}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
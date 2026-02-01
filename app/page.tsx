"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import { AnimatePresence } from "framer-motion";
import { navItems } from "@/data";
import { Navbar } from "@/components/ui/Navbar";
import { IntroLoader } from "@/components/ui/IntroLoader";

// Lazy Load components
const Hero = dynamic(() => import("@/components/Hero"), { ssr: true });
const Grid = dynamic(() => import("@/components/Grid"), { ssr: true });
const RecentProject = dynamic(() => import("@/components/RecentProject"), { ssr: true });
const ContactPage = dynamic(() => import("@/components/ContactPage"), { ssr: true });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: true });

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <main className="relative bg-background flex flex-col items-center overflow-x-hidden w-full min-h-screen">
      {/* 1. Intro Screen Logic */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <IntroLoader key="loader" onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {!isLoading && (
        <div className="w-full flex flex-col items-center">
          <Navbar navItems={navItems} />
          <Hero />
          <Grid />
          <RecentProject />
          <ContactPage />
          <Footer />
        </div>
      )}
    </main>
  );
};

export default Home;
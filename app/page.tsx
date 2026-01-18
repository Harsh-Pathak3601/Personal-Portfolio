"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import { AnimatePresence } from "framer-motion";
import { navItems } from "@/data";
import { Navbar } from "@/components/ui/Navbar";
import {IntroLoader} from "@/components/ui/IntroLoader";

// Lazy Load components
const Hero = dynamic(() => import("@/components/Hero"), { ssr: true });
const Grid = dynamic(() => import("@/components/Grid"), { ssr: true });
const RecentProject = dynamic(() => import("@/components/RecentProject"), { ssr: true });
const ContactPage = dynamic(() => import("@/components/ContactPage"), { ssr: true });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: true });

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
      {/* 1. Intro Screen Logic */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <IntroLoader key="loader" onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {/* 2. Main Content - Hidden until loading is done */}
      {!isLoading && (
        <div className="max-w-7xl w-full">
          <Navbar navItems={navItems} />
          <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen">
            <Hero />
          </div>
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
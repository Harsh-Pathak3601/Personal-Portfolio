"use client";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero"
import RecentProject from "@/components/RecentProject";
import Footer from "@/components/Footer";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
import { FaHome } from "react-icons/fa";


const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen">
          <Hero />
        </div>
        <Grid />
        <RecentProject />
        <Footer/>
      </div>
    </main>
  );
};

export default Home;

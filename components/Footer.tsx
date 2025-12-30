import { Mail, Github, Linkedin } from "lucide-react";
import MagicButton from "@/components/ui/MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
      
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw] text-white">
        Let’s build something <span className="text-purple">impactful</span> together.
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
       <div className="flex items-center gap-6 mt-8">
  {/* Mail Button */}
  <a href="mailto:pathakharsh3601@gmail.com">
    <MagicButton
      title="Let's get in touch"
      icon={<Mail  />}
      position="right"
    />
  </a>

  {/* GitHub */}
  <a 
    href="https://github.com/Harsh-Pathak3601"
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 cursor-pointer flex justify-center items-center
backdrop-filter backdrop-blur-lg
bg-white/10
border border-white/20
rounded-lg md:mt-10 "
  >
    <Github size={28} />
  </a>

  {/* LinkedIn */}
  <a
    href="https://linkedin.com/in/harsh-pathak-199503370"
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 cursor-pointer flex justify-center items-center
backdrop-filter backdrop-blur-lg
bg-white/10
border border-white/20
rounded-lg md:mt-10"
  >
    <Linkedin size={28} />
  </a>
</div>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
       <p className="md:text-base text-sm md:font-normal font-light text-white/80">
  © 2026 Portfolio. Made with <span className="text-red-500">❤️</span> by{" "}
  <span className="text-purple font-medium">Harsh Pathak</span>
</p>
      </div>
    </footer>
  );
};

export default Footer;
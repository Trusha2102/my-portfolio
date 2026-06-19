import { portfolioData } from "@/data/portfolio";
import { FileText, FolderOpen } from "lucide-react";
import {
  CloudDoodle,
  ButterflyDoodle,
  HeartDoodle,
  CodeBracketsDoodle,
  CoffeeDoodle,
  LaptopDoodle,
} from "./Doodles";

// Small inline doodles for this section. Feel free to move these into
// Doodles.tsx alongside CloudDoodle/ButterflyDoodle if you want them
// reusable elsewhere on the site.
function StarDoodle({ className = "", style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} style={style}>
      <path
        d="M12 2L14.3 9.1L21.5 12L14.3 14.9L12 22L9.7 14.9L2.5 12L9.7 9.1L12 2Z"
        fill="currentColor"
      />
    </svg>
  );
}

function SparkleDoodle({ className = "", style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} style={style}>
      <path
        d="M12 2C12 7.5 12.5 9 18 9C12.5 9 12 10.5 12 16C12 10.5 11.5 9 6 9C11.5 9 12 7.5 12 2Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen relative flex flex-col items-center justify-center px-6 pt-32 pb-20 overflow-hidden bg-[#F4F5FC] bg-grid bg-[url('/hero_doodle.png')] bg-cover bg-center"
    >
      {/* Scattered Background Doodles */}
      <CloudDoodle className="absolute top-[10%] left-[-4%] w-48 h-32 text-slate-800/10 doodle-float hidden lg:block" />
      <CloudDoodle
        className="absolute top-[12%] right-[-4%] w-52 h-36 text-slate-800/10 doodle-wiggle hidden lg:block"
        style={{ animationDelay: "1.2s" }}
      />
      <ButterflyDoodle className="absolute top-[22%] left-[6%] w-14 h-14 text-pink-400/50 doodle-wiggle" />
      <ButterflyDoodle className="absolute bottom-[18%] right-[8%] w-16 h-16 text-indigo-400/50 doodle-float" />
      <StarDoodle className="absolute top-[10%] right-[20%] w-10 h-10 text-pink-400/70 doodle-wiggle hidden md:block" />
      <StarDoodle
        className="absolute bottom-[18%] left-[22%] w-8 h-8 text-amber-400/70 doodle-float hidden md:block"
        style={{ animationDelay: "0.6s" }}
      />
      <SparkleDoodle className="absolute top-[26%] right-[8%] w-12 h-12 text-indigo-400/60 doodle-wiggle hidden lg:block" />

      {/* Added Doodles */}
      <CodeBracketsDoodle className="absolute top-[45%] left-[10%] w-20 h-20 text-indigo-400/40 doodle-float hidden md:block" style={{ animationDelay: "0.8s" }} />
      <CoffeeDoodle className="absolute top-[52%] right-[14%] w-20 h-20 text-[#2A1B28]/15 doodle-wiggle hidden md:block" style={{ animationDelay: "1.5s" }} />
      <HeartDoodle className="absolute top-[32%] left-[25%] w-14 h-14 text-pink-300/50 doodle-float hidden lg:block" style={{ animationDelay: "2.2s" }} />
      <LaptopDoodle className="absolute bottom-[22%] left-[15%] w-20 h-20 text-[#2A1B28]/15 rotate-[12deg] doodle-wiggle hidden lg:block" style={{ animationDelay: "0.4s" }} />
      <ButterflyDoodle className="absolute top-[42%] right-[24%] w-14 h-14 text-pink-400/40 doodle-float" style={{ animationDelay: "1.8s" }} />
      <ButterflyDoodle className="absolute bottom-[10%] left-[8%] w-16 h-16 text-teal-400/50 doodle-wiggle" style={{ animationDelay: "1s" }} />
      <StarDoodle className="absolute top-[18%] left-[18%] w-10 h-10 text-amber-400/60 doodle-wiggle hidden sm:block" />
      <StarDoodle className="absolute bottom-[35%] right-[32%] w-8 h-8 text-indigo-400/70 doodle-float hidden sm:block" style={{ animationDelay: "2.5s" }} />

      {/* Hero Content Panel */}
      <div className="max-w-4xl mx-auto w-full flex flex-col items-center text-center relative z-10">
        {/* Tilted Tag Badge */}
        <div className="inline-flex items-center gap-1.5 px-4 py-2 bg-peach border-2 border-slate-800 rounded-full text-xs font-bold shadow-[2px_2px_0px_0px_rgba(42,27,40,0.9)] mb-6 -rotate-1 hover:rotate-0 transition-transform">
          <span>✎ FUN & SKILLED DEVELOPER</span>
          <StarDoodle className="w-3 h-3 text-pink-500" />
        </div>

        {/* Big Tagline */}
        <h1
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#2A1B28] mb-6 leading-[1.2]"
          style={{ fontFamily: "'Fredoka', sans-serif" }}
        >
          Crafting Robust Code <br className="hidden sm:inline" />
          & Playful{" "}
          <span className="relative inline-block">
            <span className="relative z-10">Interfaces</span>
            <span
              className="absolute left-[-6px] right-[-6px] bottom-[4px] sm:bottom-[8px] h-3 sm:h-5 bg-amber-300/70 -rotate-1 rounded-sm"
              aria-hidden="true"
            />
          </span>
        </h1>

        {/* Small Tagline */}
        <p
          className="text-base sm:text-lg text-[#2A1B28]/85 mb-8 max-w-2xl leading-relaxed font-semibold"
          style={{ fontFamily: "'Quicksand', sans-serif" }}
        >
          I'm Trusha! A full-stack developer who loves architecting solid backend systems, optimizing complex queries, and bringing creative designs to life with fast, responsive frontends.
        </p>

        {/* Resume & Work Actions */}
        <div className="flex gap-4 justify-center items-center flex-wrap">
          <a
            href={portfolioData.contact.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 bg-zinc-900 text-white font-bold rounded-full border-2 border-zinc-900 shadow-[3px_3px_0px_0px_rgba(42,27,40,0.4)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_rgba(42,27,40,0.4)] transition-all flex items-center gap-2"
            style={{ fontFamily: "'Fredoka', sans-serif" }}
          >
            <FileText className="w-5 h-5 text-pink-400" />
            <span>View Resume</span>
          </a>

          <a
            href="#projects"
            className="px-8 py-3.5 bg-white text-[#2A1B28] font-bold rounded-full border-2 border-slate-800 shadow-[3px_3px_0px_0px_rgba(42,27,40,0.9)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_rgba(42,27,40,0.9)] transition-all flex items-center gap-2"
            style={{ fontFamily: "'Fredoka', sans-serif" }}
          >
            <FolderOpen className="w-5 h-5 text-indigo-500" />
            <span>See My Work</span>
          </a>
        </div>
      </div>
    </section>
  );
}
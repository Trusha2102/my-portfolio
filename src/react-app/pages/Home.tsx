import { useEffect } from "react";
import { SakuraPetals } from "../components/SakuraPetals";
import { ButterflyButton } from "../components/ButterflyButton";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ExperienceSection } from "../components/ExperienceSection";
import { EducationSection } from "../components/EducationSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import { FaqSection } from "../components/FaqSection";
import { Navbar } from "../components/Navbar";

export default function Home() {
  useEffect(() => {
    // Load Google Fonts
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Fredoka:wght@300..700&family=Quicksand:wght@300..700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <SakuraPetals />
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <EducationSection />
        <ProjectsSection />
        <SkillsSection />
        <FaqSection />
        <ContactSection />
        <footer className="py-12 text-center bg-gradient-to-t from-sakura-light/20 to-transparent relative z-10">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white border-3 border-slate-800 rounded-2xl shadow-[4px_4px_0px_0px_rgba(42,27,40,0.9)] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(42,27,40,0.9)] transition-all duration-200">
            <span className="text-sm font-black text-slate-800" style={{ fontFamily: "'Fredoka', sans-serif" }}>
              Made with 💕 by
            </span>
            <a
              href="https://github.com/Trusha2102"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-black text-pink-500 hover:text-pink-600 underline decoration-2 decoration-pink-300 hover:decoration-pink-500 transition-all duration-200"
              style={{ fontFamily: "'Fredoka', sans-serif" }}
            >
              Trusha Jadeja
            </a>
          </div>
        </footer>
      </div>
      <ButterflyButton />
    </div>
  );
}

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
import { Navbar } from "../components/Navbar";

export default function Home() {
  useEffect(() => {
    // Load Google Fonts
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Nunito:wght@300;400;500;600;700&display=swap";
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
        <ContactSection />
        <footer className="py-8 text-center bg-gradient-to-t from-sakura-light/50 to-transparent">
          <p className="text-muted-foreground text-sm font-medium" style={{ fontFamily: "'Nunito', sans-serif" }}>
            Made with 💕 by Trusha Jadeja
          </p>
        </footer>
      </div>
      <ButterflyButton />
    </div>
  );
}

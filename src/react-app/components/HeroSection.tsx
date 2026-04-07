import { portfolioData } from "@/data/portfolio";
import { Github, Linkedin, Instagram, Mail, FileText } from "lucide-react";

export function HeroSection() {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 pt-24 sm:pt-32 pb-8"
    >
      <div className="text-center w-full max-w-4xl mx-auto">
        {/* Decorative flower */}
        <div className="mb-6 sm:mb-8 flex justify-center scale-75 sm:scale-100 origin-bottom">
          <div className="w-24 h-24 relative animate-pulse">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <defs>
                <radialGradient id="flowerCenter" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#FFE4B5" />
                  <stop offset="100%" stopColor="#FFB347" />
                </radialGradient>
              </defs>
              {[0, 72, 144, 216, 288].map((rotation, i) => (
                <ellipse
                  key={i}
                  cx="50"
                  cy="25"
                  rx="18"
                  ry="25"
                  fill="url(#petalGradient)"
                  transform={`rotate(${rotation} 50 50)`}
                  opacity="0.9"
                />
              ))}
              <circle cx="50" cy="50" r="12" fill="url(#flowerCenter)" />
              <defs>
                <radialGradient id="petalGradient" cx="50%" cy="30%" r="70%">
                  <stop offset="0%" stopColor="#FFD1DC" />
                  <stop offset="100%" stopColor="#FF91A4" />
                </radialGradient>
              </defs>
            </svg>
          </div>
        </div>

        <h1
          className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-pink-400 to-rose-gold bg-clip-text text-transparent drop-shadow-sm px-2 py-2"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {portfolioData.name}
        </h1>

        <p
          className="text-base sm:text-lg md:text-xl text-muted-foreground w-full max-w-2xl mx-auto mb-6 sm:mb-10 px-2 sm:px-4 leading-relaxed"
          style={{ fontFamily: "'Nunito', sans-serif" }}
        >
          {portfolioData.tagline}
        </p>

        {/* Social Links */}
        <div className="flex justify-center gap-3 sm:gap-4 mb-8 sm:mb-10 flex-wrap">
          {[
            { icon: Github, href: portfolioData.contact.github, label: "GitHub" },
            { icon: Linkedin, href: portfolioData.contact.linkedin, label: "LinkedIn" },
            { icon: Instagram, href: portfolioData.contact.instagram, label: "Instagram" },
            { icon: Mail, href: `mailto:${portfolioData.contact.email}`, label: "Email" },
            { icon: FileText, href: portfolioData.contact.resume, label: "Resume" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 bg-white rounded-full shadow-lg shadow-sakura-medium/20 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-1 transition-all duration-300"
              aria-label={label}
            >
              <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          ))}
        </div>

        <button
          onClick={scrollToContact}
          className="px-8 py-3 bg-gradient-to-r from-primary to-pink-400 text-white font-semibold rounded-full shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-1 hover:scale-105 transition-all duration-300"
          style={{ fontFamily: "'Nunito', sans-serif" }}
        >
          Get in Touch
        </button>

        {/* Scroll indicator */}
        <div className="mt-16 animate-bounce">
          <div className="w-6 h-10 mx-auto border-2 border-primary/50 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-primary/50 rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}

import { portfolioData } from "@/data/portfolio";
import { ExternalLink } from "lucide-react";
import { CodeBracketsDoodle, SparkleDoodle } from "./Doodles";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-6 relative overflow-hidden bg-[#F4F5FC]/60">
      
      {/* Background doodles */}
      <SparkleDoodle className="absolute top-[8%] left-[4%] w-8 h-8 text-primary/30 doodle-float" />
      <CodeBracketsDoodle className="absolute bottom-[10%] right-[5%] w-12 h-12 text-primary/20 doodle-wiggle" />

      {/* Main Container - Extended to max-w-7xl */}
      <div className="max-w-7xl mx-auto relative z-10 w-full">
        
        {/* Title */}
        <div className="text-center lg:text-left mb-16 relative">
          <h2
            className="text-3xl sm:text-4xl font-extrabold text-[#2A1B28] mb-4 relative inline-block"
            style={{ fontFamily: "'Fredoka', sans-serif" }}
          >
            My Projects
            <span className="text-pink-400 ml-1">✿</span>
            <CodeBracketsDoodle className="absolute -top-10 -right-12 w-8 h-8 text-primary/50 doodle-float hidden sm:block" />
          </h2>
          <div className="flex justify-center lg:justify-start gap-1.5">
            <div className="w-8 h-1.5 bg-[#2A1B28] rounded-full" />
            <div className="w-16 h-1.5 bg-pink-400 rounded-full" />
            <div className="w-8 h-1.5 bg-[#2A1B28] rounded-full" />
          </div>
        </div>

        {/* Symmetrical Projects Grid matching reference inspo */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {portfolioData.projects.map((project, index) => {
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-[32px] border border-slate-100/80 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-[0_15px_40px_-5px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full"
              >
                <div>
                  {/* Left-aligned Project Logo Illustration */}
                  <div className="w-full h-40 flex items-center justify-start mb-6 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="max-h-full max-w-full object-contain"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://cdn-icons-png.flaticon.com/512/1087/1087815.png'; // fallback icon
                      }}
                    />
                  </div>

                  {/* Title */}
                  <h3
                    className="font-extrabold text-[#2A1B28] text-xl sm:text-2xl mb-3 text-left"
                    style={{ fontFamily: "'Fredoka', sans-serif" }}
                  >
                    {project.name}
                  </h3>

                  {/* Description directly displayed */}
                  <p
                    className="text-sm text-slate-500 leading-relaxed font-semibold text-left mb-6"
                    style={{ fontFamily: "'Quicksand', sans-serif" }}
                  >
                    {project.description}
                  </p>
                </div>

                {/* Bottom Link Button */}
                <div className="mt-auto pt-4 border-t border-dashed border-[#2A1B28]/15">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 bg-[#2A1B28] hover:bg-[#3d293b] text-white font-bold rounded-2xl transition-colors text-sm shadow-sm"
                    style={{ fontFamily: "'Fredoka', sans-serif" }}
                  >
                    <span>Visit Project</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

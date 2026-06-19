import { portfolioData } from "@/data/portfolio";
import { ChevronRight, Calendar } from "lucide-react";
import { BriefcaseDoodle, SparkleDoodle } from "./Doodles";

const cardColors = ["bg-peach", "bg-lilac", "bg-pink-soft", "bg-mint"];

function renderFormattedText(text: string) {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <span key={i} className="font-extrabold text-[#2A1B28]">
          {part.slice(2, -2)}
        </span>
      );
    }
    return part;
  });
}

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-6 relative overflow-hidden bg-light-blue bg-grid">
      
      {/* Background decoration */}
      <SparkleDoodle className="absolute top-[8%] left-[6%] w-8 h-8 text-primary/30 doodle-float" />
      <BriefcaseDoodle className="absolute bottom-[10%] right-[4%] w-12 h-12 text-primary/20 doodle-wiggle" />

      {/* Main Container - Extended to max-w-7xl */}
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Title */}
        <div className="text-center lg:text-left mb-16 relative">
          <h2
            className="text-3xl sm:text-4xl font-extrabold text-[#2A1B28] mb-4 relative inline-block"
            style={{ fontFamily: "'Fredoka', sans-serif" }}
          >
            Work Experience
            <span className="text-pink-400 ml-1">✿</span>
            <BriefcaseDoodle className="absolute -top-10 -right-12 w-8 h-8 text-primary/50 doodle-float hidden sm:block" />
          </h2>
          <div className="flex justify-center lg:justify-start gap-1.5">
            <div className="w-8 h-1.5 bg-[#2A1B28] rounded-full" />
            <div className="w-16 h-1.5 bg-pink-400 rounded-full" />
            <div className="w-8 h-1.5 bg-[#2A1B28] rounded-full" />
          </div>
        </div>

        {/* Dual-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Stats & Milestones Card */}
          <div className="lg:col-span-4">
            <div className="nachotopia-card bg-white p-6 sm:p-8">
              <h3 className="font-extrabold text-[#2A1B28] text-xl mb-6 flex items-center gap-2" style={{ fontFamily: "'Fredoka', sans-serif" }}>
                <span>Career Highlights</span>
                <SparkleDoodle className="w-5 h-5 text-pink-500 animate-pulse" />
              </h3>

              <div className="space-y-6">
                {[
                  { label: "Active Years in Tech", val: "3+ Years", color: "bg-peach" },
                  { label: "Completed Projects", val: "8+ Live Apps", color: "bg-lilac" },
                  { label: "Coffee Converted", val: "Infinite ☕", color: "bg-pink-soft" },
                ].map((stat) => (
                  <div key={stat.label} className={`flex items-center justify-between p-4 ${stat.color} border-2 border-slate-800 rounded-2xl shadow-[2px_2px_0px_0px_rgba(42,27,40,0.9)]`}>
                    <span className="text-xs sm:text-sm font-bold text-[#2A1B28]/80" style={{ fontFamily: "'Quicksand', sans-serif" }}>
                      {stat.label}
                    </span>
                    <span className="text-sm sm:text-base font-black text-[#2A1B28]" style={{ fontFamily: "'Fredoka', sans-serif" }}>
                      {stat.val}
                    </span>
                  </div>
                ))}
              </div>

              {/* Little tip */}
              <div className="mt-8 p-4 bg-mint border-2 border-dashed border-slate-800 rounded-2xl text-xs font-semibold text-[#2A1B28] leading-relaxed">
                🚀 Dynamic full-stack development, database query optimization, and user experience engineering.
              </div>
            </div>
          </div>

          {/* Right Column: Horizontal Cards Stack utilizing full screen */}
          <div className="lg:col-span-8 space-y-6">
            {portfolioData.experience.map((exp, index) => {
              const cardBg = cardColors[index % cardColors.length];

              return (
                <div key={index} className={`nachotopia-card ${cardBg} p-6 sm:p-8 flex flex-col md:flex-row gap-6 items-start`}>
                  
                  {/* Left Column in Card: Logo only */}
                  <div className="flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 bg-white border-2 border-slate-800 rounded-[24px] flex items-center justify-center p-3 shadow-[3px_3px_0px_0px_rgba(42,27,40,0.9)] overflow-hidden">
                    {exp.logo ? (
                      <img
                        src={exp.logo}
                        alt={exp.company}
                        className="max-h-full max-w-full object-contain"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = 'none';
                        }}
                      />
                    ) : (
                      <BriefcaseDoodle className="w-10 h-10 text-[#2A1B28]" />
                    )}
                  </div>

                  {/* Right Column in Card: Body details & Tags */}
                  <div className="flex-1 min-w-0 flex flex-col justify-between h-full w-full">
                    <div>
                      <div className="mb-4">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-1">
                          <h4 className="font-extrabold text-[#2A1B28] text-xl" style={{ fontFamily: "'Fredoka', sans-serif" }}>
                            {exp.position}
                          </h4>
                          {/* Duration Badge */}
                          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border-2 border-slate-800 rounded-full text-xs font-bold shadow-[2px_2px_0px_0px_rgba(42,27,40,0.9)] w-fit flex-shrink-0">
                            <Calendar className="w-3.5 h-3.5 text-pink-500" />
                            <span className="whitespace-nowrap">{exp.duration}</span>
                          </div>
                        </div>
                        <p className="text-sm font-black text-slate-800/80" style={{ fontFamily: "'Quicksand', sans-serif" }}>
                          {exp.company}
                        </p>
                      </div>

                      {/* Details list */}
                      <ul className="space-y-2.5 mb-6">
                        {exp.details.map((detail, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-[#2A1B28]/85 leading-relaxed font-semibold" style={{ fontFamily: "'Quicksand', sans-serif" }}>
                            <ChevronRight className="w-4 h-4 text-[#2A1B28] mt-0.5 flex-shrink-0" />
                            <span>{renderFormattedText(detail)}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech tag highlights */}
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-dashed border-[#2A1B28]/15">
                      {exp.technologies?.map((tech, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center gap-1 px-2.5 py-1 bg-white border-2 border-slate-800 rounded-lg text-[11px] font-bold shadow-[1.5px_1.5px_0px_0px_rgba(42,27,40,0.9)]"
                        >
                          <span className="text-pink-500">#</span>
                          <span>{tech}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}

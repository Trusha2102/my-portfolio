import { portfolioData } from "@/data/portfolio";
import { Award } from "lucide-react";
import { GraduationDoodle, SparkleDoodle } from "./Doodles";

const tagColors = ["bg-peach", "bg-lilac", "bg-mint", "bg-yellow-soft"];

export function EducationSection() {
  return (
    <section id="education" className="py-20 px-4 relative overflow-hidden bg-white">
      
      {/* Background doodles */}
      <SparkleDoodle className="absolute top-[15%] right-[8%] w-10 h-10 text-primary/30 doodle-float" />
      <GraduationDoodle className="absolute bottom-[10%] left-[6%] w-14 h-14 text-primary/20 doodle-wiggle" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Title */}
        <div className="text-center mb-16 relative">
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#2A1B28] mb-4 relative inline-block"
            style={{ fontFamily: "'Fredoka', sans-serif" }}
          >
            Education
            <span className="text-pink-400 ml-1">✿</span>
            <GraduationDoodle className="absolute -top-10 -right-12 w-8 h-8 text-primary/50 doodle-wiggle hidden sm:block" />
          </h2>
          <div className="flex justify-center gap-1.5">
            <div className="w-8 h-1.5 bg-[#2A1B28] rounded-full" />
            <div className="w-16 h-1.5 bg-pink-400 rounded-full" />
            <div className="w-8 h-1.5 bg-[#2A1B28] rounded-full" />
          </div>
        </div>

        {/* Education Stack */}
        <div className="space-y-8">
          {portfolioData.education.map((edu, index) => (
            <div
              key={index}
              className="nachotopia-card bg-white p-6 sm:p-8"
            >
              <div className="flex flex-col sm:flex-row gap-6">
                
                {/* Icon Column */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-white border-3 border-[#2A1B28] rounded-2xl flex items-center justify-center p-2 shadow-[3px_3px_0px_0px_#2A1B28] overflow-hidden">
                    {edu.logo ? (
                      <img
                        src={edu.logo}
                        alt={edu.institution}
                        className="max-h-full max-w-full object-contain"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = 'none';
                        }}
                      />
                    ) : (
                      <GraduationDoodle className="w-9 h-9 text-[#2A1B28]" />
                    )}
                  </div>
                </div>

                {/* Content Column */}
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                    <div>
                      <h3
                        className="font-bold text-[#2A1B28] text-xl mb-1"
                        style={{ fontFamily: "'Fredoka', sans-serif" }}
                      >
                        {edu.degree}
                      </h3>
                      <p
                        className="text-[#2A1B28]/80 font-bold text-sm"
                        style={{ fontFamily: "'Quicksand', sans-serif" }}
                      >
                        {edu.institution}
                      </p>
                    </div>
                    
                    {/* Badges */}
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3.5 py-1 bg-peach border-2 border-[#2A1B28] text-[#2A1B28] rounded-full text-xs font-bold shadow-[2px_2px_0px_0px_#2A1B28]">
                        {edu.years}
                      </span>
                      <span className="px-3.5 py-1 bg-lilac border-2 border-[#2A1B28] text-[#2A1B28] rounded-full text-xs font-black shadow-[2px_2px_0px_0px_#2A1B28]">
                        {edu.grade}
                      </span>
                    </div>
                  </div>

                  {/* Achievements badges */}
                  <div className="flex flex-wrap gap-3 mt-6">
                    {edu.achievements.map((achievement, i) => {
                      const tagBg = tagColors[i % tagColors.length];
                      return (
                        <span
                          key={i}
                          className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 ${tagBg} border-2 border-[#2A1B28] rounded-xl text-xs font-bold text-[#2A1B28] shadow-[2px_2px_0px_0px_#2A1B28] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_#2A1B28] transition-all`}
                          style={{ fontFamily: "'Quicksand', sans-serif" }}
                        >
                          <Award className="w-3.5 h-3.5 text-[#2A1B28]" />
                          {achievement}
                        </span>
                      );
                    })}
                  </div>

                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

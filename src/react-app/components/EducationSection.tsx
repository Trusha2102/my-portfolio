import { portfolioData } from "@/data/portfolio";
import { GraduationCap, Award } from "lucide-react";

export function EducationSection() {
  return (
    <section id="education" className="py-12 md:py-20 px-4 bg-gradient-to-b from-transparent via-sakura-light/30 to-transparent">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2
            className="text-3xl sm:text-4xl font-bold text-foreground mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Education
          </h2>
          <div className="flex justify-center gap-1">
            <div className="w-8 h-1 bg-sakura-medium rounded-full" />
            <div className="w-16 h-1 bg-primary rounded-full" />
            <div className="w-8 h-1 bg-sakura-medium rounded-full" />
          </div>
        </div>

        <div className="space-y-6">
          {portfolioData.education.map((edu, index) => (
            <div
              key={index}
              className="relative z-10 group bg-white/90 backdrop-blur-sm rounded-3xl p-5 sm:p-8 shadow-xl shadow-sakura-medium/20 hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-1 transition-all duration-500 border border-sakura-light"
            >
              <div className="flex flex-col sm:flex-row gap-6">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-pink-400 rounded-2xl flex items-center justify-center shadow-lg shadow-primary/30 group-hover:scale-110 transition-transform duration-300">
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                    <div>
                      <h3
                        className="font-bold text-foreground text-xl mb-1"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                      >
                        {edu.degree}
                      </h3>
                      <p
                        className="text-primary font-semibold"
                        style={{ fontFamily: "'Nunito', sans-serif" }}
                      >
                        {edu.institution}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-sakura-light/80 rounded-full text-xs font-medium text-muted-foreground">
                        {edu.years}
                      </span>
                      <span className="px-3 py-1 bg-gradient-to-r from-primary/20 to-pink-200 rounded-full text-xs font-bold text-primary">
                        {edu.grade}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {edu.achievements.map((achievement, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-lavender/50 to-sakura-light rounded-full text-sm text-foreground/80 shadow-sm"
                        style={{ fontFamily: "'Nunito', sans-serif" }}
                      >
                        <Award className="w-3.5 h-3.5 text-primary" />
                        {achievement}
                      </span>
                    ))}
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

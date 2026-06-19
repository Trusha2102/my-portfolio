import { portfolioData } from "@/data/portfolio";
import { FileText } from "lucide-react";
import { CoffeeDoodle, SparkleDoodle, HeartDoodle, CodeBracketsDoodle } from "./Doodles";

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 relative overflow-hidden bg-white">
      {/* Background doodles */}
      <SparkleDoodle className="absolute top-[10%] right-[12%] w-10 h-10 text-primary/35 doodle-float" />
      <CoffeeDoodle className="absolute bottom-[10%] left-[6%] w-12 h-12 text-primary/25 doodle-wiggle" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Title */}
        <div className="text-center mb-16 relative">
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#2A1B28] mb-4 relative inline-block"
            style={{ fontFamily: "'Fredoka', sans-serif" }}
          >
            About Me 
            <span className="text-pink-400 ml-1">✿</span>
            <CoffeeDoodle className="absolute -top-10 -right-12 w-8 h-8 text-rose-500/60 doodle-wiggle hidden sm:block" />
          </h2>
          <div className="flex justify-center gap-1.5">
            <div className="w-8 h-1.5 bg-[#2A1B28] rounded-full" />
            <div className="w-16 h-1.5 bg-pink-400 rounded-full" />
            <div className="w-8 h-1.5 bg-[#2A1B28] rounded-full" />
          </div>
        </div>

        {/* Content Box */}
        <div className="nachotopia-card bg-white p-8 sm:p-12 mb-12">
          <p
            className="text-lg text-[#2A1B28]/95 leading-relaxed text-center mb-8 font-medium"
            style={{ fontFamily: "'Quicksand', sans-serif" }}
          >
            {portfolioData.about}
          </p>

          <div className="flex justify-center">
            <a
              href={portfolioData.contact.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 bg-mint text-[#2A1B28] font-bold rounded-full nachotopia-btn flex items-center gap-2"
              style={{ fontFamily: "'Fredoka', sans-serif" }}
            >
              <FileText className="w-5 h-5 text-indigo-600" />
              <span>View My Resume</span>
            </a>
          </div>
        </div>

        {/* Three Pillars (Nachotopia Card Styles) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {[
            {
              doodle: HeartDoodle,
              title: "Passionate",
              desc: "Dedicated to creating meaningful, performant backend solutions.",
              color: "text-rose-600",
              bgColor: "bg-pink-soft",
            },
            {
              doodle: CodeBracketsDoodle,
              title: "Technical",
              desc: "Deep knowledge of full-stack engineering and scaling.",
              color: "text-indigo-600",
              bgColor: "bg-lilac",
            },
            {
              doodle: SparkleDoodle,
              title: "Creative",
              desc: "Delivering delightful, interactive, and gorgeous applications.",
              color: "text-amber-600",
              bgColor: "bg-peach",
            },
          ].map(({ doodle: Doodle, title, desc, color, bgColor }) => (
            <div
              key={title}
              className={`nachotopia-card ${bgColor} p-6 flex flex-col items-center text-center`}
            >
              <div className="inline-flex p-3 bg-white rounded-2xl border-3 border-[#2A1B28] shadow-[3px_3px_0px_0px_#2A1B28] mb-5">
                <Doodle className={`w-8 h-8 ${color}`} />
              </div>
              
              <h3
                className="font-bold text-[#2A1B28] text-xl mb-3"
                style={{ fontFamily: "'Fredoka', sans-serif" }}
              >
                {title}
              </h3>
              
              <p
                className="text-sm text-[#2A1B28]/85 leading-relaxed font-semibold"
                style={{ fontFamily: "'Quicksand', sans-serif" }}
              >
                {desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

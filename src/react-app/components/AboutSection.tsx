import { portfolioData } from "@/data/portfolio";
import { Heart, Code, Sparkles } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-12 md:py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2
            className="text-3xl sm:text-4xl font-bold text-foreground mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            About Me
          </h2>
          <div className="flex justify-center gap-1">
            <div className="w-8 h-1 bg-sakura-medium rounded-full" />
            <div className="w-16 h-1 bg-primary rounded-full" />
            <div className="w-8 h-1 bg-sakura-medium rounded-full" />
          </div>
        </div>

        <div className="relative z-10 bg-white/80 backdrop-blur-sm rounded-3xl p-8 sm:p-12 shadow-xl shadow-sakura-medium/30 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 border border-sakura-light">
          <p
            className="text-lg text-foreground/80 leading-relaxed text-center mb-8"
            style={{ fontFamily: "'Nunito', sans-serif" }}
          >
            {portfolioData.about}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                icon: Heart,
                title: "Passionate",
                desc: "Dedicated to creating meaningful solutions",
              },
              {
                icon: Code,
                title: "Technical",
                desc: "Expert in modern web technologies",
              },
              {
                icon: Sparkles,
                title: "Creative",
                desc: "Bringing innovative ideas to life",
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="group text-center p-6 bg-gradient-to-b from-sakura-light/50 to-transparent rounded-2xl hover:from-primary/10 transition-all duration-300"
              >
                <div className="inline-flex p-4 bg-white rounded-full shadow-lg shadow-sakura-medium/20 group-hover:shadow-primary/30 group-hover:-translate-y-1 transition-all duration-300 mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3
                  className="font-bold text-foreground mb-2"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {title}
                </h3>
                <p
                  className="text-sm text-muted-foreground"
                  style={{ fontFamily: "'Nunito', sans-serif" }}
                >
                  {desc}
                </p>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-10">
            <a
              href={portfolioData.contact.resume}
              target="_blank"
              rel="noreferrer"
              className="px-8 py-3 bg-gradient-to-r from-primary to-pink-400 text-white font-semibold rounded-full shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-1 hover:scale-105 transition-all duration-300"
              style={{ fontFamily: "'Nunito', sans-serif" }}
            >
              View Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

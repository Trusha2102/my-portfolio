import { portfolioData } from "@/data/portfolio";
import { ExternalLink } from "lucide-react";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-12 md:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2
            className="text-3xl sm:text-4xl font-bold text-foreground mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Projects
          </h2>
          <div className="flex justify-center gap-1">
            <div className="w-8 h-1 bg-sakura-medium rounded-full" />
            <div className="w-16 h-1 bg-primary rounded-full" />
            <div className="w-8 h-1 bg-sakura-medium rounded-full" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg shadow-sakura-medium/20 hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-2 transition-all duration-500 border border-sakura-light block h-full flex flex-col"
            >
              {/* Image Container */}
              <div className="relative h-40 sm:h-48 w-full overflow-hidden bg-gradient-to-br from-sakura-light to-lavender/30">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      // Fallback if image doesn't load
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
                  />
                ) : null}
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6 flex flex-col flex-1">
                <h3
                  className="font-bold text-foreground text-lg mb-2 group-hover:text-primary transition-colors"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {project.name}
                </h3>
                <p
                  className="text-sm text-muted-foreground leading-relaxed flex-1"
                  style={{ fontFamily: "'Nunito', sans-serif" }}
                >
                  {project.description}
                </p>

                {/* Footer */}
                <div className="mt-4 flex items-center justify-between">
                  <div className="h-0.5 flex-1 bg-gradient-to-r from-primary to-pink-400 group-hover:opacity-100 opacity-0 transition-opacity duration-500 rounded-full" />
                  <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors ml-2 flex-shrink-0" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

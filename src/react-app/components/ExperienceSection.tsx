import { portfolioData } from "@/data/portfolio";
import { Briefcase, ChevronRight } from "lucide-react";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-12 md:py-20 px-4 bg-sakura-light/10">
      <div className="max-w-4xl mx-auto relative overflow-hidden">
        <div className="text-center mb-12">
          <h2
            className="text-3xl sm:text-4xl font-bold text-foreground mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Work Experience
          </h2>
          <div className="flex justify-center gap-1">
            <div className="w-8 h-1 bg-sakura-medium rounded-full" />
            <div className="w-16 h-1 bg-primary rounded-full" />
            <div className="w-8 h-1 bg-sakura-medium rounded-full" />
          </div>
        </div>

        <div className="relative pt-10 sm:pt-16">
          <div className="absolute inset-0 -z-10 pointer-events-none opacity-95 overflow-hidden hidden sm:block">
            <svg viewBox="0 0 1200 3200" preserveAspectRatio="xMidYMin slice" className="w-full h-full">
              <circle cx="600" cy="120" r="140" fill="#ffe7ef" opacity="0.7" />
              <circle cx="540" cy="180" r="80" fill="#ffeaf1" opacity="0.75" />
              <path
                d="M600 120 C620 170 670 190 720 230 C770 270 790 330 760 380 C730 430 670 450 620 500 C580 540 560 590 560 650 C560 710 580 770 600 820 C620 870 640 920 640 980 C640 1040 620 1100 600 1160 C580 1220 580 1280 600 1340 C620 1400 640 1460 640 1520 C640 1580 620 1640 600 1700 C580 1760 580 1820 600 1880 C620 1940 640 2000 640 2060 C640 2120 620 2180 600 2240 C580 2300 580 2360 600 2420 C620 2480 640 2540 640 2600 C640 2660 620 2720 600 2780 C580 2840 580 2900 600 2960 C620 3020 640 3080 640 3140"
                fill="none"
                stroke="#b77e5f"
                strokeWidth="32"
                strokeLinecap="round"
              />
              <path d="M620 480 C640 460 680 450 720 470" fill="none" stroke="#deb8a1" strokeWidth="18" strokeLinecap="round" opacity="0.9" />
              <path d="M680 540 C700 520 740 515 780 540" fill="none" stroke="#deb8a1" strokeWidth="16" strokeLinecap="round" opacity="0.9" />
              <path d="M600 420 C610 400 630 390 650 405" fill="none" stroke="#f6d8e1" strokeWidth="16" strokeLinecap="round" opacity="0.92" />
              <path d="M580 1600 C560 1580 520 1570 480 1590" fill="none" stroke="#deb8a1" strokeWidth="16" strokeLinecap="round" opacity="0.9" />
              <path d="M620 2100 C640 2080 680 2070 720 2090" fill="none" stroke="#deb8a1" strokeWidth="16" strokeLinecap="round" opacity="0.9" />
              
              <circle cx="600" cy="112" r="48" fill="#ffcedd" opacity="0.98" />
              <circle cx="600" cy="112" r="24" fill="#f9a5c4" opacity="0.95" />
              <circle cx="640" cy="92" r="18" fill="#fde2ef" opacity="0.95" />
              <circle cx="560" cy="92" r="18" fill="#fde2ef" opacity="0.95" />
              <circle cx="620" cy="140" r="16" fill="#fde2ef" opacity="0.95" />
              <circle cx="580" cy="140" r="16" fill="#fde2ef" opacity="0.95" />
              <circle cx="760" cy="360" r="20" fill="#fbe2ec" opacity="0.95" />
              <circle cx="820" cy="430" r="18" fill="#fce4ed" opacity="0.95" />
              <circle cx="500" cy="520" r="22" fill="#f9dee6" opacity="0.95" />
              <circle cx="580" cy="600" r="18" fill="#fbe2ec" opacity="0.95" />
              <circle cx="680" cy="690" r="20" fill="#fce4ed" opacity="0.95" />
              <circle cx="620" cy="780" r="18" fill="#f9dee6" opacity="0.95" />
              <circle cx="600" cy="880" r="24" fill="#fbe2ec" opacity="0.95" />
              <circle cx="700" cy="1650" r="18" fill="#fce4ed" opacity="0.95" />
              <circle cx="500" cy="2150" r="22" fill="#f9dee6" opacity="0.95" />

              <path d="M600 120 L570 90 L620 85" fill="#f6d8e1" opacity="0.85" />
              <path d="M720 230 L740 200 L760 228" fill="#a3c59d" opacity="0.85" />
              <path d="M780 540 L800 520 L820 545" fill="#a3c59d" opacity="0.85" />
              <path d="M620 650 L640 630 L660 655" fill="#a3c59d" opacity="0.85" />
              <path d="M580 760 L600 740 L620 765" fill="#a3c59d" opacity="0.85" />
            </svg>
          </div>

          <div className="relative space-y-12 sm:space-y-16">
            {/* Continuous Vertical Line */}
            <div className="absolute left-[15px] sm:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-pink-200/80 via-primary/30 to-pink-200/20 rounded-full transform sm:-translate-x-1/2" />

            {portfolioData.experience.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col sm:flex-row gap-4 sm:gap-8 ${
                  index % 2 === 0 ? "sm:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-[15px] sm:left-1/2 top-8 inline-flex items-center justify-center h-8 w-8 rounded-full bg-white border-2 border-primary shadow-md shadow-primary/20 transform -translate-x-1/2 z-10">
                  <span className="h-3 w-3 rounded-full bg-primary" />
                </div>

                <div className={`ml-10 sm:ml-0 sm:w-1/2 ${index % 2 === 0 ? "sm:pr-12" : "sm:pl-12"}`}>
                  <div className="group bg-white/95 backdrop-blur-sm rounded-2xl p-5 sm:p-6 shadow-xl shadow-sakura-medium/20 hover:shadow-2xl hover:shadow-primary/25 hover:-translate-y-1 transition-all duration-300 border border-sakura-light">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-4">
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-pink-400 shadow-md sm:flex-shrink-0">
                        <Briefcase className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3
                          className="font-bold text-foreground text-lg"
                          style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                          {exp.position}
                        </h3>
                        <p
                          className="text-primary font-semibold text-sm"
                          style={{ fontFamily: "'Nunito', sans-serif" }}
                        >
                          {exp.company}
                        </p>
                      </div>
                    </div>

                    <div className="inline-block px-3 py-1.5 bg-sakura-light/60 rounded-full text-xs font-semibold text-primary mb-4">
                      {exp.duration}
                    </div>

                    <ul className="space-y-2">
                      {exp.details.map((detail, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-foreground/70"
                          style={{ fontFamily: "'Nunito', sans-serif" }}
                        >
                          <ChevronRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

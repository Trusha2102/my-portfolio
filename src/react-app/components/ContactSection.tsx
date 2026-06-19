import { useState } from "react";
import { portfolioData } from "@/data/portfolio";
import { Github, Linkedin, Instagram, FileText, Send, Play, Terminal, Check } from "lucide-react";
import { MailDoodle, SparkleDoodle, HeartDoodle } from "./Doodles";

function StackOverflowIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={props.className}
      {...props}
    >
      <path d="M18.986 21.867v-5.604h2.16v7.764H2.85v-7.764h2.16v5.604h13.977zM7.172 13.967l8.283 1.712.44-2.12-8.284-1.712-.44 2.12zm1.614-4.839l7.24 3.66.974-1.928-7.24-3.66-.974 1.928zm2.748-4.321l5.632 5.633 1.528-1.527-5.632-5.633-1.528 1.527zm4.072-3.136l-1.916 1.008 3.66 6.953 1.916-1.008-3.66-6.953zm-8.472 13.8v2.16h8.4v-2.16H7.134z" />
    </svg>
  );
}

const socialLinks = [
  { icon: Github, href: portfolioData.contact.github, label: "GitHub", color: "bg-peach" },
  { icon: Linkedin, href: portfolioData.contact.linkedin, label: "LinkedIn", color: "bg-lilac" },
  { icon: Instagram, href: portfolioData.contact.instagram, label: "Instagram", color: "bg-pink-soft" },
  { icon: StackOverflowIcon, href: portfolioData.contact.stackoverflow, label: "Stack Overflow", color: "bg-mint" },
  { icon: FileText, href: portfolioData.contact.resume, label: "Resume", color: "bg-yellow-soft" },
];

export function ContactSection() {
  const [activeTab, setActiveTab] = useState<"ts" | "json">("ts");
  const [runState, setRunState] = useState<"idle" | "compiling" | "done">("idle");
  const [consoleLogs, setConsoleLogs] = useState<string[]>([]);

  const handleRunCode = () => {
    if (runState !== "idle") return;
    setRunState("compiling");
    setConsoleLogs(["$ tsc developer.ts && node developer.js", "Compiling developer.ts... ⏳"]);

    setTimeout(() => {
      setConsoleLogs((prev) => [...prev, "Resolving dependencies... Done! ✅"]);
      setTimeout(() => {
        setConsoleLogs((prev) => [
          ...prev,
          "Running developer.js...",
          "----------------------------------------",
          "✨ [SUCCESS] Trusha Jadeja loaded!",
          "💖 [INFO] Trait check: Clean code, scalable design.",
          "🏆 [VERDICT] Certified Good Developer! 🌸🦋",
        ]);
        setRunState("done");
      }, 1000);
    }, 1200);
  };

  const resetConsole = () => {
    setRunState("idle");
    setConsoleLogs([]);
  };

  return (
    <section id="contact" className="py-20 px-4 relative overflow-hidden bg-light-blue bg-grid">
      
      {/* Background doodles */}
      <SparkleDoodle className="absolute top-[15%] left-[8%] w-10 h-10 text-primary/30 doodle-float" />
      <MailDoodle className="absolute bottom-[10%] right-[10%] w-12 h-12 text-primary/20 doodle-wiggle" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Title */}
        <div className="text-center mb-16 relative">
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#2A1B28] mb-4 relative inline-block"
            style={{ fontFamily: "'Fredoka', sans-serif" }}
          >
            Get In Touch
            <span className="text-pink-400 ml-1">✿</span>
            <MailDoodle className="absolute -top-10 -right-12 w-8 h-8 text-primary/50 doodle-wiggle hidden sm:block" />
          </h2>
          <div className="flex justify-center gap-1.5 mb-6">
            <div className="w-8 h-1.5 bg-[#2A1B28] rounded-full" />
            <div className="w-16 h-1.5 bg-pink-400 rounded-full" />
            <div className="w-8 h-1.5 bg-[#2A1B28] rounded-full" />
          </div>
          <p
            className="text-[#2A1B28]/85 max-w-lg mx-auto text-sm sm:text-base leading-relaxed font-semibold"
            style={{ fontFamily: "'Quicksand', sans-serif" }}
          >
            I am always open to new professional opportunities, code collaborations, or creative discussions. Feel free to drop a message!
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Code Editor Widget */}
          <div className="lg:col-span-7 w-full">
            <div className="nachotopia-card overflow-hidden bg-white">
              
              {/* Window Header */}
              <div className="bg-peach px-6 py-4 border-b-3 border-[#2A1B28] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-rose-400 border-2 border-[#2A1B28]" />
                  <div className="w-4 h-4 rounded-full bg-pink-300 border-2 border-[#2A1B28]" />
                  <div className="w-4 h-4 rounded-full bg-amber-300 border-2 border-[#2A1B28]" />
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 bg-white rounded-xl text-xs font-bold text-[#2A1B28] border-2 border-[#2A1B28] shadow-[2px_2px_0px_0px_#2A1B28]">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>trusha_developer.ts</span>
                </div>
                <div className="w-12" />
              </div>

              {/* Tabs */}
              <div className="bg-light-blue border-b-3 border-[#2A1B28] flex px-4 gap-2 text-xs font-bold">
                <button
                  onClick={() => setActiveTab("ts")}
                  className={`py-3 px-4 border-r-3 border-[#2A1B28] transition-all duration-155 ${
                    activeTab === "ts"
                      ? "bg-white text-[#2A1B28] border-b-3 border-b-transparent"
                      : "text-muted-foreground hover:text-[#2A1B28]"
                  }`}
                >
                  developer.ts
                </button>
                <button
                  onClick={() => setActiveTab("json")}
                  className={`py-3 px-4 border-r-3 border-l-3 border-[#2A1B28] transition-all duration-155 ${
                    activeTab === "json"
                      ? "bg-white text-[#2A1B28] border-b-3 border-b-transparent"
                      : "text-muted-foreground hover:text-[#2A1B28]"
                  }`}
                >
                  metrics.json
                </button>
              </div>

              {/* Code Panel */}
              <div className="p-6 font-mono text-sm leading-relaxed overflow-x-auto min-h-[240px] bg-white text-[#2A1B28]">
                {activeTab === "ts" ? (
                  <div>
                    <span className="text-pink-600 font-bold">const</span>{" "}
                    <span className="text-purple-600 font-bold">developer</span> = {"{"}
                    <div className="pl-6">
                      name: <span className="text-rose-700">"Trushaba Jadeja"</span>,
                      <br />
                      role: <span className="text-rose-700">"Software Engineer"</span>,
                      <br />
                      traits: [
                      <span className="text-rose-700">"Writes Clean Code"</span>,
                      <span className="text-rose-700">"Solves Complex Bugs"</span>
                      ],
                      <br />
                      skills: [
                      <span className="text-rose-700">"TypeScript"</span>,
                      <span className="text-rose-700">"Node.js"</span>,
                      <span className="text-rose-700">"React"</span>
                      ],
                      <br />
                      isGoodDeveloper: <span className="text-pink-600 font-bold">true</span>
                    </div>
                    {"};"}
                    <br />
                    <br />
                    <span className="text-pink-600 font-bold">if</span> (developer.isGoodDeveloper) {"{"}
                    <div className="pl-6 text-emerald-600 font-semibold italic">
                      {"// Run compilation test to check live statistics"}
                    </div>
                    {"}"}
                  </div>
                ) : (
                  <div>
                    {"{"}
                    <div className="pl-6">
                      <span className="text-purple-600">"cleanCodeRating"</span>:{" "}
                      <span className="text-rose-700">"100%"</span>,
                      <br />
                      <span className="text-purple-600">"coffeeConsumption"</span>:{" "}
                      <span className="text-rose-700">"High"</span>,
                      <br />
                      <span className="text-purple-600">"completedProjects"</span>:{" "}
                      <span className="text-amber-600 font-bold">8</span>,
                      <br />
                      <span className="text-purple-600">"isGoodDeveloper"</span>:{" "}
                      <span className="text-pink-600 font-bold">true</span>
                    </div>
                    {"}"}
                  </div>
                )}
              </div>

              {/* Compile Panel */}
              <div className="bg-white px-6 py-4 border-t-3 border-[#2A1B28] flex items-center justify-between flex-wrap gap-4">
                <div className="text-xs text-[#2A1B28] font-bold flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>Ready to compile developer details.</span>
                </div>
                <div className="flex gap-2">
                  {runState !== "idle" && (
                    <button
                      onClick={resetConsole}
                      className="px-4 py-2 bg-pink-soft text-[#2A1B28] border-2 border-[#2A1B28] rounded-xl text-xs font-bold shadow-[2px_2px_0px_0px_#2A1B28] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_#2A1B28] transition-all"
                    >
                      Clear
                    </button>
                  )}
                  <button
                    onClick={handleRunCode}
                    disabled={runState === "compiling"}
                    className="px-5 py-2 bg-mint text-[#2A1B28] border-2 border-[#2A1B28] rounded-xl text-xs font-bold shadow-[2px_2px_0px_0px_#2A1B28] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_#2A1B28] transition-all flex items-center gap-1.5"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>{runState === "compiling" ? "Running..." : "Compile & Run"}</span>
                  </button>
                </div>
              </div>

              {/* Console logs output */}
              {consoleLogs.length > 0 && (
                <div className="bg-zinc-900 p-5 font-mono text-xs text-zinc-300 border-t-3 border-[#2A1B28] animate-slide-up">
                  <div className="flex items-center justify-between mb-3 pb-1.5 border-b border-zinc-800 text-zinc-500 font-bold">
                    <span>TERMINAL OUTPUT</span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  </div>
                  <div className="space-y-1.5">
                    {consoleLogs.map((log, index) => (
                      <div
                        key={index}
                        className={
                          log.startsWith("✨") || log.startsWith("🏆") || log.startsWith("💖")
                            ? "text-rose-400 font-bold"
                            : log.startsWith("[SUCCESS]")
                            ? "text-emerald-400 font-semibold"
                            : ""
                        }
                      >
                        {log}
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>
          </div>

          {/* Right Column: Actions (Email & Social Grid) */}
          <div className="lg:col-span-5 w-full flex flex-col gap-6">
            
            {/* Email Card */}
            <div className="nachotopia-card bg-white p-6 sm:p-8">
              <a
                href={`mailto:${portfolioData.contact.email}`}
                className="group flex flex-col sm:flex-row items-center gap-4 p-5 bg-pink-soft border-3 border-[#2A1B28] rounded-3xl shadow-[4px_4px_0px_0px_#2A1B28] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[3px_3px_0px_0px_#2A1B28] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none transition-all block w-full"
              >
                <div className="p-3 bg-white border-3 border-[#2A1B28] rounded-2xl shadow-[2px_2px_0px_0px_#2A1B28] group-hover:scale-105 transition-transform flex-shrink-0">
                  <MailDoodle className="w-7 h-7 text-[#2A1B28]" />
                </div>
                
                <div className="flex-1 min-w-0 text-center sm:text-left">
                  <p
                    className="text-xs text-[#2A1B28]/70 mb-1 font-bold tracking-wide uppercase"
                    style={{ fontFamily: "'Fredoka', sans-serif" }}
                  >
                    Send Email Direct
                  </p>
                  <p
                    className="text-base sm:text-lg font-bold text-[#2A1B28] break-all"
                    style={{ fontFamily: "'Fredoka', sans-serif" }}
                  >
                    {portfolioData.contact.email}
                  </p>
                </div>
                
                <div className="p-3 bg-white border-3 border-[#2A1B28] rounded-xl shadow-[2px_2px_0px_0px_#2A1B28] group-hover:translate-x-1 transition-transform hidden sm:block">
                  <Send className="w-5 h-5 text-[#2A1B28]" />
                </div>
              </a>
            </div>

            {/* Social Grid Card */}
            <div className="nachotopia-card bg-white p-6 sm:p-8">
              <p
                className="text-sm text-[#2A1B28]/70 mb-6 font-bold text-center"
                style={{ fontFamily: "'Fredoka', sans-serif" }}
              >
                Connect on professional profiles
              </p>
              
              <div className="flex justify-center gap-4 flex-wrap">
                {socialLinks.map(({ icon: Icon, href, label, color }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group p-4 ${color} border-3 border-[#2A1B28] rounded-2xl shadow-[4px_4px_0px_0px_#2A1B28] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[3px_3px_0px_0px_#2A1B28] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none transition-all`}
                    aria-label={label}
                  >
                    <Icon className="w-6 h-6 text-[#2A1B28]" />
                  </a>
                ))}
              </div>
            </div>

            {/* Bottom cute elements */}
            <div className="flex justify-center gap-5 opacity-40 py-2">
              <SparkleDoodle className="w-6 h-6 text-primary animate-pulse" />
              <HeartDoodle className="w-6 h-6 text-primary animate-bounce" />
              <SparkleDoodle className="w-6 h-6 text-primary animate-pulse" style={{ animationDelay: "0.5s" }} />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

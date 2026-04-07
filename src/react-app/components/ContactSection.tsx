import { portfolioData } from "@/data/portfolio";
import { Mail, Github, Linkedin, Instagram, MessageCircle, FileText, Send } from "lucide-react";

const socialLinks = [
  { icon: Github, href: portfolioData.contact.github, label: "GitHub", color: "hover:bg-gray-800 hover:text-white" },
  { icon: Linkedin, href: portfolioData.contact.linkedin, label: "LinkedIn", color: "hover:bg-blue-600 hover:text-white" },
  { icon: Instagram, href: portfolioData.contact.instagram, label: "Instagram", color: "hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-500 hover:text-white" },
  { icon: MessageCircle, href: portfolioData.contact.stackoverflow, label: "Stack Overflow", color: "hover:bg-orange-500 hover:text-white" },
  { icon: FileText, href: portfolioData.contact.resume, label: "Resume", color: "hover:bg-green-600 hover:text-white" },
];

export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-b from-transparent via-sakura-light/30 to-sakura-light/50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2
            className="text-3xl sm:text-4xl font-bold text-foreground mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Get In Touch
          </h2>
          <div className="flex justify-center gap-1 mb-6">
            <div className="w-8 h-1 bg-sakura-medium rounded-full" />
            <div className="w-16 h-1 bg-primary rounded-full" />
            <div className="w-8 h-1 bg-sakura-medium rounded-full" />
          </div>
          <p
            className="text-muted-foreground max-w-lg mx-auto"
            style={{ fontFamily: "'Nunito', sans-serif" }}
          >
            I'm always open to new opportunities and collaborations. Feel free to reach out!
          </p>
        </div>

        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 sm:p-12 shadow-xl shadow-sakura-medium/30 border border-sakura-light">
          {/* Email Card */}
          <a
            href={`mailto:${portfolioData.contact.email}`}
            className="group flex flex-col sm:flex-row items-center sm:items-center gap-4 p-4 sm:p-6 bg-gradient-to-r from-sakura-light/50 to-lavender/30 rounded-2xl hover:from-primary/10 hover:to-pink-100 transition-all duration-300 mb-8"
          >
            <div className="p-4 bg-white rounded-full shadow-lg shadow-sakura-medium/30 group-hover:shadow-primary/30 group-hover:scale-110 transition-all duration-300">
              <Mail className="w-6 h-6 text-primary" />
            </div>
            <div className="flex-1 min-w-0 text-center sm:text-left">
              <p
                className="text-sm text-muted-foreground mb-1"
                style={{ fontFamily: "'Nunito', sans-serif" }}
              >
                Email me at
              </p>
              <p
                className="text-base sm:text-lg font-semibold text-foreground group-hover:text-primary transition-colors break-all"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {portfolioData.contact.email}
              </p>
            </div>
            <Send className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
          </a>

          {/* Social Links */}
          <div className="text-center">
            <p
              className="text-muted-foreground mb-6"
              style={{ fontFamily: "'Nunito', sans-serif" }}
            >
              Or connect with me on social media
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              {socialLinks.map(({ icon: Icon, href, label, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group p-4 bg-white rounded-2xl shadow-lg shadow-sakura-medium/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${color}`}
                  aria-label={label}
                >
                  <Icon className="w-6 h-6 text-muted-foreground group-hover:text-current transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Decorative flowers */}
          <div className="flex justify-center mt-10 gap-4 opacity-60">
            {[...Array(5)].map((_, i) => (
              <svg key={i} viewBox="0 0 100 100" className="w-8 h-8">
                {[0, 72, 144, 216, 288].map((rotation, j) => (
                  <ellipse
                    key={j}
                    cx="50"
                    cy="25"
                    rx="12"
                    ry="20"
                    fill={i % 2 === 0 ? "#FFB6C1" : "#DDA0DD"}
                    transform={`rotate(${rotation} 50 50)`}
                    opacity="0.8"
                  />
                ))}
                <circle cx="50" cy="50" r="8" fill="#FFE4B5" />
              </svg>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { SparkleDoodle } from "./Doodles";

interface FaqItem {
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  {
    question: "What is your main technology stack?",
    answer: "I specialize in the JavaScript/TypeScript ecosystem (Node.js, Express, NestJS, React, Next.js), backend services using C# (.NET Core), and database architectures across PostgreSQL, MongoDB, MySQL, and MariaDB.",
  },
  {
    question: "How do you approach system design & scalability?",
    answer: "I architect systems with high scalability, clean API contracts, and optimized database queries. I establish PM2/Nginx reverse proxies, SSL configurations, CI/CD pipelines, and robust authorization systems (JWT, Passport.js) on VPS/AWS infrastructure.",
  },
  {
    question: "What is your preferred database strategy?",
    answer: "I have extensive experience with both SQL (PostgreSQL, MySQL, MariaDB) and NoSQL (MongoDB, Redis). I focus on eliminating N+1 query patterns, database schema redesign to reduce redundancy, and integrating caching for high-speed performance.",
  },
  {
    question: "How do you handle API documentation & integration?",
    answer: "I prioritize building clean, developer-friendly REST APIs. I document system contracts comprehensively to ensure smooth integration with frontend teams, minimizing handoff friction and acceleration of sprint velocity.",
  },
  {
    question: "How do you debug and resolve production issues?",
    answer: "I conduct thorough root cause analysis of errors, implement robust centralized logging, and apply preventative error-handling middleware. I also optimize long-running API endpoints and database queries to ensure near-zero downtime.",
  },
  {
    question: "What is your experience with cloud platforms & DevOps?",
    answer: "I deploy and manage production environments using Nginx, PM2, and Docker on cloud providers. I integrate cloud services like AWS Cognito, SES, and S3 for user authentication, mailing systems, and secure media storage.",
  },
  {
    question: "How do you stay updated with new technologies?",
    answer: "I enjoy exploring open-source projects, experimenting with new frameworks (like NestJS or Next.js App Router), reading technical engineering blogs, and applying modern development practices to personal sandbox projects.",
  },
  {
    question: "Are you open to remote work or relocation?",
    answer: "Yes, absolutely! I am fully equipped to collaborate with distributed global teams remotely, and I am also open to relocations for the right professional opportunities.",
  },
];

function FaqCard({ item, index }: { item: FaqItem; index: number }) {
  const [isOpen, setIsOpen] = useState(false);
  
  // Theme color palettes matching the main design
  const colors = [
    { header: "bg-peach", body: "bg-[#FFFDF9]" },
    { header: "bg-lilac", body: "bg-[#FAF8FF]" },
    { header: "bg-pink-soft", body: "bg-[#FFF9FB]" },
    { header: "bg-mint", body: "bg-[#F7FCFA]" },
  ];
  
  const theme = colors[index % colors.length];

  return (
    <div className="nachotopia-card bg-white overflow-hidden w-full hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(42,27,40,0.9)] transition-all duration-200">
      {/* Header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full p-5 text-left flex items-center justify-between gap-4 transition-colors ${theme.header}`}
        style={{ fontFamily: "'Fredoka', sans-serif" }}
      >
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-white border-2 border-slate-800 text-xs font-black shadow-[1px_1px_0px_0px_rgba(42,27,40,0.9)] flex-shrink-0">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className="font-extrabold text-base sm:text-lg text-[#2A1B28] leading-snug">
            {item.question}
          </span>
        </div>
        <ChevronDown
          className={`w-5 h-5 text-[#2A1B28] transition-transform duration-300 flex-shrink-0 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Body Content */}
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-[300px] border-t-3 border-[#2A1B28]" : "max-h-0"
        }`}
      >
        <p
          className={`p-5 text-sm sm:text-base text-[#2A1B28]/95 leading-relaxed font-semibold ${theme.body}`}
          style={{ fontFamily: "'Quicksand', sans-serif" }}
        >
          {item.answer}
        </p>
      </div>
    </div>
  );
}

export function FaqSection() {
  return (
    <section id="faq" className="py-20 px-4 relative overflow-hidden bg-white">
      
      {/* Background doodles */}
      <SparkleDoodle className="absolute top-[12%] right-[10%] w-10 h-10 text-primary/30 doodle-float" />
      <SparkleDoodle className="absolute bottom-[15%] left-[5%] w-8 h-8 text-primary/25 doodle-wiggle" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Title */}
        <div className="text-center mb-16 relative">
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#2A1B28] mb-4 relative inline-block"
            style={{ fontFamily: "'Fredoka', sans-serif" }}
          >
            Common Questions
            <span className="text-pink-400 ml-1">✿</span>
            <SparkleDoodle className="absolute -top-10 -right-12 w-8 h-8 text-primary/50 doodle-float hidden sm:block" />
          </h2>
          <div className="flex justify-center gap-1.5">
            <div className="w-8 h-1.5 bg-[#2A1B28] rounded-full" />
            <div className="w-16 h-1.5 bg-pink-400 rounded-full" />
            <div className="w-8 h-1.5 bg-[#2A1B28] rounded-full" />
          </div>
        </div>

        {/* FAQ Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {faqData.map((item, index) => (
            <FaqCard key={index} item={item} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}

import { portfolioData } from "@/data/portfolio";
import { SparkleDoodle, LaptopDoodle, CodeBracketsDoodle } from "./Doodles";

const skillCategories = [
  { key: "backend" as const, image: "backend.jpg", title: "Backend Development", color: "from-pink-400 to-rose-500", doodle: CodeBracketsDoodle },
  { key: "database" as const, image: "database.jpeg", title: "Database Systems", color: "from-purple-400 to-pink-500", doodle: SparkleDoodle },
  { key: "frontend" as const, image: "frontend.jpg", title: "Frontend Engineering", color: "from-rose-400 to-orange-400", doodle: LaptopDoodle },
  { key: "tools" as const, image: "devops.jpg", title: "Tools & DevOps", color: "from-pink-500 to-purple-500", doodle: SparkleDoodle },
];

const skillIconMap: Record<string, string> = {
  "C": "c.png",
  "Java": "java.png",
  "Python (FastAPI)": "python.png",
  "JavaScript": "js.png",
  "TypeScript": "typescript.png",
  "JSON": "json.png",
  "Node.js": "node.png",
  "ASP.NET Core": "dotnet-core.png",
  "NPM": "npm.png",
  "REST API": "rest-api.png",
  "ExpressJS": "expressjs.png",
  "NestJS": "nestjs.png",
  "GraphQL": "graphql.png",
  "Passport.js": "passportjs.png",
  "JWT": "jwt.png",
  "AWS": "aws.png",
  "MySQL": "mysql.png",
  "MongoDB": "mongodb.png",
  "PostgreSQL": "postgresql.png",
  "MariaDB": "mariadb.png",
  "Redis": "redis.png",
  "Mongoose": "mongoose.png",
  "Sequelize": "sequlize.svg",
  "Prisma": "prisma.png",
  "Waterline": "waterline.png",
  "Knex.js": "knex.png",
  "React": "react.png",
  "Next.js": "nextjs.svg",
  "Angular.js": "angularjs.png",
  "jQuery": "jquery.png",
  "HTML": "html.png",
  "CSS": "css.png",
  "VS Code": "visual-studio.png",
  "PgAdmin4": "postgresql.png",
  "PyCharm": "pycharm.png",
  "Postman": "postman.svg",
  "Docker": "docker.svg",
  "Linux Terminal": "terminal.png",
  "AWS Cognito": "aws-cognito.png",
  "AWS SES": "aws-ses.png",
  "AWS S3": "aws-s.png",
  "PM2": "pm2.png",
  "Jenkins": "jenkins.png",
  "MongoDB Compass": "mongodb.png",
  "Strapi": "strapi.png",
  "Apollo": "apollo.png",
  "HeidiSQL": "heidisql.png",
};

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-4 relative overflow-hidden bg-white">
      
      {/* Background doodles */}
      <SparkleDoodle className="absolute top-[8%] right-[10%] w-10 h-10 text-primary/30 doodle-float" />
      <LaptopDoodle className="absolute bottom-[10%] left-[5%] w-12 h-12 text-primary/20 doodle-wiggle" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Title */}
        <div className="text-center mb-16 relative">
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#2A1B28] mb-4 relative inline-block"
            style={{ fontFamily: "'Fredoka', sans-serif" }}
          >
            My Skills
            <span className="text-pink-400 ml-1">✿</span>
            <SparkleDoodle className="absolute -top-10 -right-12 w-8 h-8 text-primary/50 doodle-float hidden sm:block" />
          </h2>
          <div className="flex justify-center gap-1.5">
            <div className="w-8 h-1.5 bg-[#2A1B28] rounded-full" />
            <div className="w-16 h-1.5 bg-pink-400 rounded-full" />
            <div className="w-8 h-1.5 bg-[#2A1B28] rounded-full" />
          </div>
        </div>

        {/* Categories Stack */}
        <div className="space-y-12">
          {skillCategories.map(({ key, image, title, doodle: DoodleIcon }, index) => {
            const isReversed = index % 2 === 1;

            return (
              <div
                key={key}
                className="nachotopia-card p-6 sm:p-8"
              >
                <div
                  className={`grid gap-8 lg:items-center ${
                    isReversed ? "lg:grid-cols-[1fr_1.3fr]" : "lg:grid-cols-[1.3fr_1fr]"
                  }`}
                >
                  
                  {/* Skill Badges Layout */}
                  {(!isReversed) && (
                    <div>
                      {/* Category Title Pill */}
                      <div className="mb-6 flex justify-start">
                        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-peach border-3 border-[#2A1B28] text-[#2A1B28] text-base font-bold shadow-[3px_3px_0px_0px_#2A1B28]">
                          <DoodleIcon className="w-5 h-5 text-primary" />
                          <span>{title}</span>
                        </div>
                      </div>

                      {/* Grid of badges */}
                      <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-4">
                        {portfolioData.skills[key].map((skill) => (
                          <div
                            key={skill}
                            className="group flex flex-col items-center gap-2 p-3 bg-white border-2 border-[#2A1B28] rounded-2xl shadow-[2.5px_2.5px_0px_0px_#2A1B28] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_#2A1B28] transition-all"
                            style={{ fontFamily: "'Quicksand', sans-serif" }}
                          >
                            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-pink-50 border-2 border-transparent group-hover:border-[#2A1B28]/20 transition-all">
                              <img
                                src={`/icons/${skillIconMap[skill]}`}
                                alt={skill}
                                className="w-7 h-7 object-contain"
                                onError={(e) => {
                                  (e.target as HTMLImageElement).src = "/favicon.ico";
                                }}
                              />
                            </div>
                            <span className="text-[11px] font-bold text-center text-[#2A1B28] leading-tight">
                              {skill}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Illustration Image Column */}
                  <div className="flex justify-center">
                    <img
                      src={`/${image}`}
                      alt={`${title} illustration`}
                      className="w-full max-w-sm rounded-2xl border-3 border-[#2A1B28] shadow-[5px_5px_0px_0px_#2A1B28]"
                    />
                  </div>

                  {/* Skills layout if reversed */}
                  {(isReversed) && (
                    <div>
                      {/* Category Title Pill */}
                      <div className="mb-6 flex justify-start">
                        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-peach border-3 border-[#2A1B28] text-[#2A1B28] text-base font-bold shadow-[3px_3px_0px_0px_#2A1B28]">
                          <DoodleIcon className="w-5 h-5 text-primary" />
                          <span>{title}</span>
                        </div>
                      </div>

                      {/* Grid of badges */}
                      <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-4">
                        {portfolioData.skills[key].map((skill) => (
                          <div
                            key={skill}
                            className="group flex flex-col items-center gap-2 p-3 bg-white border-2 border-[#2A1B28] rounded-2xl shadow-[2.5px_2.5px_0px_0px_#2A1B28] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_#2A1B28] transition-all"
                            style={{ fontFamily: "'Quicksand', sans-serif" }}
                          >
                            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-pink-50 border-2 border-transparent group-hover:border-[#2A1B28]/20 transition-all">
                              <img
                                src={`/icons/${skillIconMap[skill]}`}
                                alt={skill}
                                className="w-7 h-7 object-contain"
                                onError={(e) => {
                                  (e.target as HTMLImageElement).src = "/favicon.ico";
                                }}
                              />
                            </div>
                            <span className="text-[11px] font-bold text-center text-[#2A1B28] leading-tight">
                              {skill}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

import { portfolioData } from "@/data/portfolio";

const skillCategories = [
  { key: "backend" as const, image: "backend.jpg", title: "Backend", color: "from-pink-400 to-rose-500" },
  { key: "database" as const, image: "database.jpeg", title: "Database", color: "from-purple-400 to-pink-500" },
  { key: "frontend" as const, image: "frontend.jpg", title: "Frontend", color: "from-rose-400 to-orange-400" },
  { key: "tools" as const, image: "devops.jpg", title: "Tools & DevOps", color: "from-pink-500 to-purple-500" },
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
    <section id="skills" className="py-20 px-4 bg-gradient-to-b from-transparent via-sakura-light/30 to-transparent">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2
            className="text-3xl sm:text-4xl font-bold text-foreground mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            My Skills
          </h2>
          <div className="flex justify-center gap-1">
            <div className="w-8 h-1 bg-sakura-medium rounded-full" />
            <div className="w-16 h-1 bg-primary rounded-full" />
            <div className="w-8 h-1 bg-sakura-medium rounded-full" />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {skillCategories.map(({ key, image, title }, index) => {
            const isReversed = index % 2 === 1;

            return (
              <div
                key={key}
                className="group bg-rose-50/90 backdrop-blur-sm rounded-3xl p-6 sm:p-8 shadow-xl shadow-rose-200/40 hover:shadow-2xl hover:shadow-rose-300/45 hover:-translate-y-2 transition-all duration-500 border border-rose-200"
              >
                <div
                  className={`grid gap-8 lg:items-center ${isReversed ? "lg:grid-cols-[1fr_1.4fr]" : "lg:grid-cols-[1.4fr_1fr]"}`}
                >
                  {!isReversed && (
                    <div>
                      <div className="text-center mb-8">
                        <div className="inline-flex items-center justify-center rounded-full bg-pink-100/90 px-6 py-3 text-lg font-semibold text-rose-900 shadow-sm border border-pink-200">
                          {title}
                        </div>
                      </div>

                      <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-4">
                        {portfolioData.skills[key].map((skill) => (
                          <div
                            key={skill}
                            className="group flex flex-col items-center gap-2 p-3 bg-white/95 border border-pink-100 rounded-2xl shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-primary/25 hover:-translate-y-1 hover:scale-105"
                            style={{ fontFamily: "'Nunito', sans-serif" }}
                          >
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-50 transition-all duration-300">
                              <img
                                src={`/icons/${skillIconMap[skill]}`}
                                alt={skill}
                                className="w-8 h-8 object-contain"
                              />
                            </div>
                            <span className="text-xs font-semibold text-center text-rose-800 leading-tight">
                              {skill}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className={`flex justify-center ${isReversed ? "lg:justify-start" : "lg:justify-end"}`}>
                    <img
                      src={`/${image}`}
                      alt={`${title} illustration`}
                      className="w-full max-w-sm rounded-3xl border border-pink-200 shadow-xl"
                    />
                  </div>

                  {isReversed && (
                    <div>
                      <div className="text-center mb-8">
                        <div className="inline-flex items-center justify-center rounded-full bg-pink-100/90 px-6 py-3 text-lg font-semibold text-rose-900 shadow-sm border border-pink-200">
                          {title}
                        </div>
                      </div>

                      <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-4">
                        {portfolioData.skills[key].map((skill) => (
                          <div
                            key={skill}
                            className="group flex flex-col items-center gap-2 p-3 bg-white/95 border border-pink-100 rounded-2xl shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-primary/25 hover:-translate-y-1 hover:scale-105"
                            style={{ fontFamily: "'Nunito', sans-serif" }}
                          >
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-50 transition-all duration-300">
                              <img
                                src={`/icons/${skillIconMap[skill]}`}
                                alt={skill}
                                className="w-8 h-8 object-contain"
                              />
                            </div>
                            <span className="text-xs font-semibold text-center text-rose-800 leading-tight">
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

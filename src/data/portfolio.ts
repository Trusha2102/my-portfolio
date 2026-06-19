export const portfolioData = {
  name: "Trushaba B. Jadeja",
  nickname: "Trusha Jadeja",
  title: "Software Engineer",
  tagline: "Delivering impactful solutions that push the boundaries of technology and drive success in an ever-evolving digital landscape.",
  
  about: "Passionate software engineer with expertise in backend development and full-stack solutions. Proficient in JavaScript, TypeScript, Node.js, and various databases. Focus on creating scalable and efficient applications with a goal to build innovative solutions and contribute to impactful projects.",
  
  contact: {
    email: "trushababjadeja2003@gmail.com",
    github: "https://github.com/Trusha2102",
    linkedin: "https://www.linkedin.com/in/trusha-jadeja",
    instagram: "https://instagram.com/trusha.js",
    stackoverflow: "https://stackoverflow.com/users/27944924/trusha-jadeja",
    resume: "https://drive.google.com/file/d/1lJt-HVZcslF7rEwRQwxqdsuUBvQFP7eo/view?usp=sharing",
  },

  skills: {
    backend: ["C", "Java", "Python (FastAPI)", "JavaScript", "TypeScript", "JSON", "Node.js", "ASP.NET Core", "NPM", "REST API", "ExpressJS", "NestJS", "GraphQL", "Passport.js", "JWT", "AWS"],
    database: ["MySQL", "MongoDB", "PostgreSQL", "MariaDB", "Redis", "Mongoose", "Sequelize", "Prisma", "Waterline", "Knex.js"],
    frontend: ["React", "Next.js", "Angular.js", "jQuery", "HTML", "CSS"],
    tools: ["VS Code", "PgAdmin4", "PyCharm", "Postman", "Docker", "Linux Terminal", "AWS Cognito", "AWS SES", "AWS S3", "PM2", "Jenkins", "MongoDB Compass", "Strapi", "Apollo", "HeidiSQL"],
  },

  experience: [
    {
      position: "Co-Founder & Technical Director",
      company: "Vizon Technolabs",
      duration: "Oct 2025 - Present",
      logo: "/vizon_light-transparent.png",
      technologies: ["MERN Stack", "System Design", "CI/CD", "Nginx", "PM2", "VPS", "JWT", "Passport.js"],
      details: [
        "Architected **end-to-end MERN stack products** for multiple enterprise clients, defining system design, API contracts, and database schemas that support **10× growth capacity**.",
        "Established engineering standards including **code review workflows**, **CI/CD pipelines with PM2 and Nginx on VPS**, reducing deployment downtime to near-zero.",
        "Led and mentored a **cross-functional development team** of engineers, maintaining sprint velocity and on-time delivery across all client engagements.",
        "Designed **secure authentication flows (JWT, Passport.js)** and role-based access control systems deployed to production environments.",
        "Translated ambiguous client requirements into **precise technical specifications**, bridging the gap between business stakeholders and the engineering team."
      ],
    },
    {
      position: "Software Development Engineer",
      company: "Hex Wireless Pvt. Ltd.",
      duration: "Nov 2024 - March 2025",
      logo: "/hex_logo.png",
      technologies: [".NET Core", "Three-Tier", "MVC", "Redis", "RabbitMQ", "Microsoft Identity", "MariaDB", "HeidiSQL"],
      details: [
        "Built and maintained enterprise-grade applications using **.NET Core with Three-Tier Architecture and MVC**, ensuring clean separation of concerns and maintainability at scale.",
        "Integrated **Redis for caching** and **RabbitMQ for asynchronous message brokering**, improving system throughput and decoupling critical service dependencies.",
        "Implemented **Microsoft Identity for secure authentication** and authorization, ensuring compliance with enterprise security standards.",
        "Managed **MariaDB databases via HeidiSQL**, optimizing query performance and ensuring data integrity across distributed services."
      ],
    },
    {
      position: "Jr. Backend Developer",
      company: "Creative Hustlers",
      duration: "Feb 2024 - June 2024",
      logo: "/creativehustlers_logo.png",
      technologies: ["Node.js", "Express", "TypeScript", "Prisma", "PostgreSQL", "JWT", "REST API"],
      details: [
        "Engineered a scalable **College Management System backend** (Node.js, Express, TypeScript, Prisma, PostgreSQL) handling student registration, fee tracking, and academic reporting.",
        "Optimized critical database queries and **eliminated N+1 patterns**, reducing average API response time by **30% in production**.",
        "Implemented **end-to-end encryption** and **JWT-based authentication**, hardening system security for student PII and financial data.",
        "Collaborated with frontend engineers to design and document **RESTful API contracts**, reducing integration friction and cutting cross-team miscommunication."
      ],
    },
    {
      position: "Jr. Software Engineer",
      company: "Digiqt Technolabs",
      duration: "March 2023 - June 2023",
      logo: "/digiqt_technolabs_logo.png",
      technologies: ["Node.js", "Express", "PostgreSQL", "HDFC International API", "React", "Debugging"],
      details: [
        "Delivered backend features for the **HDFC International banking platform** (Node.js, Express, PostgreSQL), building secure APIs handling sensitive financial data at scale.",
        "Reduced production errors by **20%** by leading debugging initiatives, performing root cause analysis, and implementing preventive error-handling patterns.",
        "Collaborated with **React frontend teams** to design API contracts, enabling smooth data flow across the full stack."
      ],
    },
    {
      position: "Software Engineer - Intern",
      company: "Digiqt Technolabs",
      duration: "Sept 2022 - Feb 2023",
      logo: "/digiqt_technolabs_logo.png",
      technologies: ["Node.js", "JavaScript", "Sequelize", "QuickBooks Integration", "API Optimization"],
      details: [
        "Contributed to a **QuickBooks-integrated backend** (Node.js, JavaScript, Sequelize), optimizing API structure and improving request throughput.",
        "Reduced data redundancy by **20%** by redesigning database schemas and adding query-level optimizations.",
        "Implemented **user authentication mechanisms**, improving security posture for key application modules."
      ],
    },
  ],

  education: [
    {
      institution: "Dr. Subhash University, Junagadh",
      degree: "B.E. Computer Science",
      years: "2020 - 2024",
      grade: "8.73 CGPA",
      logo: "/dr_subhash_uni.png",
      achievements: ["Class Representative", "Placement in 2nd year"],
    },
    {
      institution: "Adani Public School, Mundra",
      degree: "HSC",
      years: "2019 - 2020",
      grade: "77.4%",
      logo: "/adani_logo.png",
      achievements: ["Science stream", "PCM specialization", "Informatics Practices"],
    },
    {
      institution: "Aga Khan School, Mundra",
      degree: "SSC",
      years: "2017 - 2018",
      grade: "85.33%",
      logo: "/aga_khan_school_logo.png",
      achievements: ["First Class with Distinction", "Batch topper"],
    },
  ],

  projects: [
    {
      name: "HDFC International",
      description: "A secure, international banking portal designed for child education savings planning and long-term financial security.",
      link: "https://www.hdfclife-international.com/",
      image: "/hdfc.jpg",
    },
    {
      name: "Customer Compliance Services (CCS)",
      description: "An automated compliance tracking engine facilitating license renewals, secure document management, and real-time status alerts.",
      link: "https://customercompliancefe.onrender.com/",
      image: "/ccs.png",
    },
    {
      name: "Vizon Technolabs",
      description: "The official showcase portfolio website for Vizon Technolabs, displaying premium design and development services, case studies, and client work.",
      link: "https://vizontechnolabs.com/",
      image: "/vizon_light-transparent.png",
    },
    {
      name: "Vanividhya Foundation",
      description: "An educational and community welfare platform empowering underprivileged children in rural Maharashtra and Gujarat through food distribution, stationery drives, and learning camps.",
      link: "https://vanividhya.org/",
      image: "/vanividhya.png",
    },
    {
      name: "R.H. Patel Institute of Technology",
      description: "A unified college administration portal managing student enrollment, academic scheduling, fee collections, and reporting workflows.",
      link: "https://cms-api-admin.surge.sh/#/homePage",
      image: "/rhpatel.jpg",
    },
    {
      name: "Mfluence",
      description: "An advanced AI-powered influencer marketing platform streamlining brand collaborations, creator analytics, and campaign performance tracking.",
      link: "https://app.mfluence.ai/",
      image: "/mfluence_site_logo.png",
    },
    {
      name: "Aarya Foundation",
      description: "A full-stack NGO platform built to streamline community outreach, manage secure online donations, and broadcast upcoming charity events.",
      link: "https://aaryagaushala.com",
      image: "/aryalogo.png",
    },
    {
      name: "ShipsGo",
      description: "A real-time logistics tracking system for container shipping, monitoring port activity, schedules, and carrier routes.",
      link: "https://github.com/Trusha2102/Yard-Management",
      image: "/shipsgo_logo.png",
    },
    {
      name: "My Portfolio",
      description: "A playful, neobrutalist developer portfolio showcasing projects, interactive tools, and responsive components.",
      link: "https://github.com/Trusha2102/my-portfolio",
      image: "/portfolio_logo.png",
    },
    
  ],
};

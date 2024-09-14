"use client"; // Ensures the component is treated as a Client Component

import styles from './Skills.module.scss';

const skills = {
 
  BackEnd: [
    { name: 'C', logo: '/icons/c.png' },
    { name: 'Java', logo: '/icons/java.png' },
    { name: 'Python (FastAPI)', logo: '/icons/python.png' },
    { name: 'JavaScript', logo: '/icons/js.png' },
    { name: 'TypeScript', logo: '/icons/typescript.png' },
    { name: 'JSON', logo: '/icons/json.png' },
    { name: 'Node.js', logo: '/icons/node.png' },
    { name: 'NPM', logo: '/icons/npm.png' },
    { name: 'Rest API', logo: '/icons/rest-api.png' },
    { name: 'ExpressJS', logo: '/icons/expressjs.png' },
    { name: 'NestJS', logo: '/icons/nestjs.png' },
    { name: 'Graphql', logo: '/icons/graphql.png' },
    { name: 'Passport.js', logo: '/icons/passportjs.png' },
    { name: 'JWT', logo: '/icons/jwt.png' },
    { name: 'AWS', logo: '/icons/aws.png' },
  ],
  Database: [
    { name: 'MySQL', logo: '/icons/mysql.png' },
    { name: 'MongoDB', logo: '/icons/mongodb.png' },
    { name: 'PostgreSQL', logo: '/icons/postgresql.png' },
    { name: 'Mongoose', logo: '/icons/mongoose.png' },
    { name: 'Sequelize', logo: '/icons/sequlize.svg' },
    { name: 'Prisma', logo: '/icons/prisma.png' },
    { name: 'Waterline', logo: '/icons/waterline.png' },
    { name: 'Knex.js', logo: '/icons/knex.png' },
  ],
  FrontEnd: [
    { name: 'React', logo: '/icons/react.png' },
    { name: 'Next.js', logo: '/icons/nextjs.svg' },
    { name: 'HTML', logo: '/icons/html.png' },
    { name: 'CSS', logo: '/icons/css.png' },
  ],
 
  Tools: [
    { name: 'VS Code', logo: '/icons/visual-studio.png' },
    { name: 'PgAdmin4', logo: '/icons/postgresql.png' },
    { name: 'PyCharm', logo: '/icons/pycharm.png' },
    { name: 'Postman', logo: '/icons/postman.svg' },
    { name: 'Docker', logo: '/icons/docker.svg' },
    { name: 'Linux Terminal', logo: '/icons/terminal.png' },
    { name: 'AWS Cognito', logo: '/icons/aws-cognito.png' },
    { name: 'AWS SES', logo: '/icons/aws-ses.png' },
    { name: 'AWS S3', logo: '/icons/aws-s.png' },
    { name: 'PM2', logo: '/icons/pm2.png' },
    { name: 'Jenkins', logo: '/icons/jenkins.png' },
    { name: 'Compass', logo: '/icons/mongodb.png' },
    { name: 'Strapi', logo: '/icons/strapi.png' },
    { name: 'Apollo', logo: '/icons/apollo.png' },
  ],
};

const imagePaths = [
 
  '/backend.jpg',
  '/database.jpeg',
  '/frontend.jpg',
  '/devops.jpg',
];

const Skills = () => {
  return (
    <section id="skills" className={styles.skillsSection}>
  <h2 className={styles.sectionTitle}>Skills</h2>
  {Object.entries(skills).map(([category, techs], index) => (
    <div className={styles.section} key={category}>
      <div className={styles.squarishBox}>
        <div className={styles.title}>{category}</div>
        <div className={styles.techTiles}>
          {techs.map((tech) => (
            <div className={styles.tile} key={tech.name}>
              <img src={tech.logo} alt={tech.name} />
              <span className={styles.techName}>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.image}>
        <img src={imagePaths[index]} alt={category} />
      </div>
    </div>
  ))}
</section>
  );
};

export default Skills;

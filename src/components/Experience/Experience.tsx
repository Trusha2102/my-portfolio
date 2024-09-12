import styles from './Experience.module.scss';

export default function Experience() {
  const experiences = [
    {
      company: "Creative Hustlers",
      duration: "Feb 2024 - June 2024",
      position: "Jr. Backend Developer",
      description: "In my role as the sole backend developer for a live College Management System project, I engineered a scalable backend infrastructure using Node.js, Express, TypeScript, and Prisma. I also integrated PostgreSQL and advanced security features such as authentication and encryption using crypto libraries. This experience expanded my expertise in TypeORM and furthered my knowledge of TypeScript for high-performance backend development.",
    },
    {
      company: "Digiqt Technolabs",
      duration: "March 2023 - June 2023",
      position: "Jr. Software Engineer",
      description: "As a Node.js Developer on the HDFC International project, I worked closely with international clients to deliver robust backend solutions. My responsibilities included implementing secure systems with Node.js, Express, and PostgreSQL, focusing on areas such as authentication, encryption, and debugging. Additionally, I collaborated on API integration with a React-based frontend, ensuring seamless communication between the backend and frontend components.",
    },
    {
      company: "Digiqt Technolabs",
      duration: "Sept 2022 - Feb 2023",
      position: "Software Engineer - Intern",
      description: "During my internship, I honed my skills in JavaScript, Node.js, and Sequelize, while gaining hands-on experience in API development, authentication mechanisms, and database design. I played a key role in supporting a QuickBooks-related project, contributing to both backend enhancements and API building efforts.",
    },
  ];

  return (
    <section className={styles.experienceSection}>
      <div className={styles.experienceTitle}>
        <h2>Work Experience</h2>
      </div>
      <div className={styles.experienceContainer}>
        {experiences.map((exp, index) => (
          <div key={index} className={styles.experienceCard}>
            <div className={styles.left}>
              <h3>{exp.position}</h3>
              <h4>{exp.company}</h4>
              <p className={styles.workDuration}>{exp.duration}</p>
            </div>
            <div className={styles.right}>
              <p>{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

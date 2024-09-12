import styles from './Education.module.scss';

const Education = () => {
  const educationData = [
    {
      institution: "XYZ School",
      degree: "SSC - Secondary School Certificate",
      year: "2015 - 2016",
    },
    {
      institution: "ABC College",
      degree: "HSC - Higher Secondary Certificate",
      year: "2017 - 2018",
    },
    {
      institution: "DEF University",
      degree: "Bachelor of Technology in Computer Science",
      year: "2019 - 2023",
    },
  ];

  return (
    <section className={styles.educationSection}>
      <div className={styles.educationTitle}>
        <h2>Education</h2>
      </div>
      <div className={styles.educationContainer}>
        {educationData.map((edu, index) => (
          <div key={index} className={styles.educationCard}>
            <div className={styles.left}>
              <h3>{edu.institution}</h3>
              <p className={styles.degree}>{edu.degree}</p>
              <p className={styles.year}>{edu.year}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;

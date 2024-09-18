"use client";  // Ensures the component is treated as a Client Component

import { useState } from 'react';
import styles from './Education.module.scss';

const Education = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const educationData = [
    {
      institution: "Aga Khan School, Mundra",
      degree: "SSC - Secondary School Certificate",
      year: "2017 - 2018",
      percentage: "85.33%",
      details: ["First Class with Distinction", "Topper of the batch"],
      image: "/Student_1.jpg",
    },
    {
      institution: "Adani Public School, Mundra",
      degree: "HSC - Higher Secondary Certificate",
      year: "2019 - 2020",
      percentage: "77.4%",
      details: ["Science Stream", "Specialized in PCM", "Informatics Practices as one of the subjects"],
      image: "/Student_2.jpg",
    },
    {
      institution: "Dr. Subhash University, Junagadh",
      degree: "B.E. in Computer Science",
      year: "2020 - 2024",
      percentage: "8.73 CGPA",
      details: ["Computer Science Major", "Served as Class Representative (CR)", "Got placement in 2nd Year of College"],
      image: "/Student_3.jpg",
    },
  ];

  return (
    <section id="education" className={styles.educationSection}>
      <div className={styles.educationTitle}>
        <h2>Education</h2>
      </div>
      <div className={styles.educationContainer}>
        {educationData.map((edu, index) => (
          <div
            key={index}
            className={styles.educationCard}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className={styles.cardInner}>
              <div className={styles.cardFront}>
                <img
                  src={edu.image}
                  alt={`${edu.institution} Image`}
                  className={styles.image}
                />
                <div className={styles.content}>
                  <h3>{edu.institution}</h3>
                  <p className={styles.degree}>{edu.degree}</p>
                  <p className={styles.year}>{edu.year}</p>
                </div>
              </div>
              <div className={styles.cardBack}>
                <div className={styles.percentage}>{edu.percentage}</div>
                <ul className={styles.bulletPoints}>
                  {edu.details.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;

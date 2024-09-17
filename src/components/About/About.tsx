import React from 'react';
import styles from './About.module.scss'; // Adjust path if necessary

const About: React.FC = () => {
    return (
      <section id="about" className={styles.about}>
        <div className={styles.content}>
          <h2>About Me</h2>
          <p>
            Hello! I&apos;m Trusha Jadeja, a passionate software engineer
            specializing in backend development and full-stack solutions. With
            experience in JavaScript, TypeScript, Node.js, and various
            databases, I enjoy creating scalable and efficient applications. My
            goal is to leverage my skills to build innovative solutions and
            contribute to impactful projects.
          </p>
        </div>
      </section>
    );
};

export default About;

"use client"; // Ensures the component is treated as a Client Component

import styles from './Project.module.scss';

const ProjectsComponent = () => {
  const projects = [
    {
      title: 'HDFC International',
      image: '/hdfc.jpg',
      description: 'Bank-related website focused on child education funding and savings, including foreign education options and more.',
      link: 'https://www.hdfclife-international.com/', 
    },
    {
      title: 'College Management System',
      image: '/college.jpg',
      description: 'Comprehensive management system for student registration, class handling, fees management, and reporting.',
      link: 'https://cms-api-admin.surge.sh/#/homePage',
    },
    {
      title: 'All \'Bout Pets',
      image: '/dog.png',
      description: 'Platform for Pet Parents, Pet Sellers, Pet Sitters, and Pet Care Givers with user privacy and dashboard features.',
      link: 'https://allboutpets.onrender.com/', 
    },
    {
      title: 'Hotel Management System',
      image: '/hotel.jpg',
      description: 'Hotel dashboard showing hotel packages, pictures, and detailed information.',
      link: 'https://dn-hotel.onrender.com/', 
    },
  ];

  return (
    <section id="projects" className={styles.projectsSection}>
      <h2 className={styles.title}>My Projects</h2>
      <div className={styles.projectsGrid}>
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.projectLink}
          >
            <div className={styles.projectCard}>
              <img 
                src={project.image} 
                alt={project.title} 
                className={styles.projectImage} 
              />
              <div className={styles.projectContent}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default ProjectsComponent;

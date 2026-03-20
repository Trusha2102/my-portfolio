"use client"; // Ensures the component is treated as a Client Component

import styles from './Project.module.scss';

const ProjectsComponent = () => {
  const projects = [
    {
      title: "HDFC International",
      image: "/hdfc.jpg",
      description:
        "Bank-related website focused on child education funding and savings, including foreign education options and more.",
      link: "https://www.hdfclife-international.com/",
    },
    {
      title: "Customer Compliance Services (CSS)",
      image: "/ccs.png",
      description:
        "Compliance tracking system for clients with license tracking, renewals, notifications, overdue alerts, document management, and a complete admin workflow.",
      link: "https://customercompliancefe.onrender.com/", // update when final repo is public
    },
    {
      title: "Aarya Foundation",
      image: "/aryalogo.png",
      description:
        "Built a full-stack NGO website enabling donations, event updates, and improved online presence with a scalable backend.",
      link: "https://aaryagaushala.com",
    },
    {
      title: "R.H. Patel Institute of Technology",
      image: "/rhpatel.jpg",
      description:
        "Comprehensive management system for student registration, class handling, fees management, and reporting.",
      link: "https://cms-api-admin.surge.sh/#/homePage",
    },
    {
      title: "Hotel Management System",
      image: "/hotel.jpg",
      description:
        "Hotel dashboard showing hotel packages, pictures, and detailed information.",
      link: "https://dn-hotel.onrender.com/",
    },
    {
      title: "ShipsGo",
      image: "/port.png",
      description:
        "Web app for managing and tracking incoming containers at ports, optimizing logistics and inventory.",
      link: "https://github.com/GovindxSharma/YMs-v2",
    },
    {
      title: "All 'Bout Pets",
      image: "/dog.png",
      description:
        "Platform for Pet Parents, Pet Sellers, Pet Sitters, and Pet Care Givers with user privacy and dashboard features.",
      link: "https://allboutpets.onrender.com/",
    },
    {
      title: "My Portfolio",
      image: "/portfolio.png",
      description:
        "Interactive portfolio website showcasing my projects, skills, and professional achievements.",
      link: "https://github.com/Trusha2102/my-portfolio",
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

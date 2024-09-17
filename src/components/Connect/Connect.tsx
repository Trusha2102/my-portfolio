"use client"; // This ensures the component runs on the client side

import React, { useEffect, useRef } from "react";
import styles from "./Connect.module.scss"; // CSS Modules for styling

const Connect = () => {
  const fireflyRef = useRef<HTMLDivElement>(null);

  // Move the firefly to random positions
  useEffect(() => {
    const firefly = fireflyRef.current;

    if (!firefly) return;

    const moveFirefly = () => {
      if (!firefly) return;

      // Get the dimensions of the parent element (.headerSection)
      const parent = firefly.parentElement;
      if (!parent) return;

      const parentRect = parent.getBoundingClientRect();
      const x = Math.random() * (parentRect.width - 50); // Random X position within the section
      const y = Math.random() * (parentRect.height - 50); // Random Y position within the section

      firefly.style.transform = `translate(${x}px, ${y}px)`; // Move within the section
    };

    const interval = setInterval(moveFirefly, 1000); // Move every 1 second for more dynamic effect

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

  // Function to scroll to the Contact section
  const scrollToContact = () => {
    const contactElement = document.getElementById("contact");
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className={styles.contactMeSection}>
      <div className={styles.headerSection}>
        <div className={styles.textSection}>
          <h2>Let&rsquo;s Connect!</h2>
          <p>
            I&rsquo;d love to hear from you! Whether you have a project in mind,
            a question, or just want to say hello, feel free to reach out.
          </p>
          <button className={styles.resumeButton} onClick={scrollToContact}>
            Let&rsquo;s Connect
          </button>
        </div>
        <div className={styles.imageSection}>
          <img
            src="/workspace.jpg" // Replace with the actual path
            alt="Your Image"
            className={styles.image}
          />
        </div>
        <div ref={fireflyRef} className={styles.firefly}></div>{" "}
        {/* Moved outside imageSection */}
      </div>
    </div>
  );
};

export default Connect;

import React from "react";
import styles from "./Contact.module.scss";
import {
  FaGithub,
  FaInstagram,
  FaEnvelope,
  FaLinkedin,
  FaFileAlt,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.imageSection}>
        <img src="/contact.png" alt="Contact support illustration" />
      </div>
      <div className={styles.formSection}>
        <div className={styles.formContainer}>
          <h2 className={styles.formTitle}>Contact Me</h2>
          <form className={styles.contactForm}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" placeholder="Your Name" />

            <label htmlFor="phone">Phone:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Your Phone Number"
            />

            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
            />

            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Your Message"
            ></textarea>

            <button
              type="submit"
              className={`${styles.learnMoreButton} ${styles.learnMore}`}
            >
              Submit
            </button>
          </form>
        </div>

        <div className={styles.socialIcons}>
          <a
            href="https://github.com/Trusha2102"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://instagram.com/trusha.js"
            target="_blank"
            rel="noopener noreferrer"
            title="Instagram"
          >
            <FaInstagram />
          </a>
          <a href="mailto:trushababjadeja2003@gmail.com" title="Email">
            <FaEnvelope />
          </a>
          <a
            href="https://www.linkedin.com/in/trushaba-b-jadeja-149432284/"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://drive.google.com/file/d/1AV2vAwT86cQfVNIBxt3KhpjQcYdhFeDJ/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            title="Resume"
          >
            <FaFileAlt />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;

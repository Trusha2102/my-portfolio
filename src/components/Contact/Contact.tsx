"use client";

import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import the styles
import styles from "./Contact.module.scss";
import {
  FaGithub,
  FaInstagram,
  FaEnvelope,
  FaLinkedin,
  FaFileAlt,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const apiUrl =
        (process.env.REACT_APP_API_URL as string) ||
        "https://trusha-jadeja-backend.onrender.com/api/send-email";

      if (!apiUrl) {
        console.error("API URL is missing. Check your .env file.");
        toast.error("API URL not found. Please check your configuration.");
        return;
      }

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Message sent successfully!");
        setFormData({ name: "", phone: "", email: "", message: "" }); // Clear form after successful submission
      } else {
        const errorData = await response.json();
        console.error("Error response:", errorData);
        toast.error(
          `Error sending message: ${errorData.error || "Unknown error"}`
        );
      }
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error(
        "Error sending message. Please check the console for more details."
      );
    }
  };

  return (
    <section id="contact" className={styles.contactSection}>
      {/* ToastContainer for displaying notifications */}
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar />

      <div className={styles.imageSection}>
        <img src="/contact.png" alt="Contact support illustration" />
      </div>
      <div className={styles.formSection}>
        <div className={styles.formContainer}>
          <h2 className={styles.formTitle}>Contact Me</h2>
          <form className={styles.contactForm} onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <label htmlFor="phone">Phone:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Your Phone Number"
              value={formData.phone}
              onChange={handleChange}
            />

            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
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
            href="https://www.linkedin.com/in/trusha-jadeja"
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

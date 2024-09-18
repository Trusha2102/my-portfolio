require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Route to handle form submission
app.post("/api/send-email", (req, res) => {
  const { name, phone, email, message } = req.body;

  // Validate required fields
  if (!name || !email || !message) {
    return res
      .status(400)
      .json({ error: "Name, email, and message are required." });
  }

  // Email options
  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER, // Replace with your email
    subject: "New Contact Form Submission",
    text: `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nMessage: ${message}`,
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error); // Log the error for debugging
      return res
        .status(500)
        .json({ error: "Error sending email. Please try again later." });
    }
    res.status(200).json({ message: "Email sent successfully" });
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

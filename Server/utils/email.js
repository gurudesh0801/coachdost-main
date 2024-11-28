// utils/email.js

const nodemailer = require("nodemailer");

// Create a transporter object using SMTP transport
const transporter = nodemailer.createTransport({
  service: "gmail", // you can use other services like SendGrid, Mailgun, etc.
  auth: {
    user: process.env.EMAIL_USER, // Your email (from which emails will be sent)
    pass: process.env.EMAIL_PASS, // Your email password or app password for Gmail
  },
});

// Function to send the approval email
const sendApprovalEmail = async (coachEmail, coachName) => {
  const mailOptions = {
    from: process.env.EMAIL_USER, // Sender's email address
    to: coachEmail, // Recipient's email address (coach's email)
    subject: "Coach Approval Notification", // Email subject
    text: `Hello ${coachName},\n\nWelcome to Team!!! You have been successfully approved as a coach! Welcome to our platform.\n\nBest regards,\nCoachDost Admin Team!!`, // Email body (plain text)
  };

  try {
    // Sending the email
    await transporter.sendMail(mailOptions);
    console.log("Approval email sent to:", coachEmail);
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

module.exports = { sendApprovalEmail };

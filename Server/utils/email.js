const nodemailer = require("nodemailer");

// Create a transporter object using SMTP transport
const transporter = nodemailer.createTransport({
  service: "gmail", // you can use other services like SendGrid, Mailgun, etc.
  auth: {
    user: process.env.EMAIL_USER, // Your email (from which emails will be sent)
    pass: process.env.EMAIL_PASS, // Your email password or app password for Gmail
  },
});

// Function to send the approval email to the coach
const sendApprovalEmail = async (coachEmail, coachName) => {
  const mailOptions = {
    from: process.env.EMAIL_USER, // Sender's email address
    to: coachEmail, // Recipient's email address (coach's email)
    subject: "Welcome to Our Coaching Platform!", // Email subject
    html: `<p>Dear ${coachName},</p>
           <p>Congratulations! You have been successfully approved as a coach on our platform.</p>
           <p>We are excited to have you join our team of exceptional coaches. Together, we aim to provide outstanding coaching experiences to students and help them achieve their goals.</p>
           <p>If you have any questions or need assistance as you get started, feel free to reach out to us at <a href="mailto:support@coachdost.com">support@coachdost.com</a>.</p>
           <p>Welcome aboard!</p>
           <p>Best regards,</p>
           <p><strong>The CoachDost Team</strong></p>`, // Email body (HTML)
  };

  try {
    // Sending the email
    await transporter.sendMail(mailOptions);
    console.log("Approval email sent to:", coachEmail);
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

// Function to send a session approval email to the student
const sendSessionApprovalEmail = async (
  studentEmail,
  studentName,
  sessionTime,
  googleMeetLink
) => {
  const mailOptions = {
    from: process.env.EMAIL_USER, // Sender's email address
    to: studentEmail, // Recipient's email address (student's email)
    subject: "Your Coaching Session is Confirmed!", // Email subject
    html: `<p>Dear ${studentName},</p>
           <p>We are delighted to inform you that your coaching session has been approved and confirmed.</p>
           <p><strong>Session Details:</strong></p>
           <ul>
             <li><strong>Date & Time:</strong> ${new Date(
               sessionTime
             ).toLocaleString()}</li>
             <li><strong>Google Meet Link:</strong> <a href="${googleMeetLink}">${googleMeetLink}</a></li>
           </ul>
           <p>Please ensure you are prepared and ready to join the session on time. If you have any questions or require assistance, feel free to contact us at <a href="mailto:support@coachdost.com">support@coachdost.com</a>.</p>
           <p>We look forward to seeing you in the session!</p>
           <p>Best regards,</p>
           <p><strong>The CoachDost Team</strong></p>`, // Email body (HTML)
  };

  try {
    // Sending the email
    await transporter.sendMail(mailOptions);
    console.log("Session approval email sent to:", studentEmail);
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

module.exports = { sendApprovalEmail, sendSessionApprovalEmail };

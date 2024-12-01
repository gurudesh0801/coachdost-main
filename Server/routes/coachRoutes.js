const express = require("express");
const router = express.Router();
const Booking = require("../models/Booking");
const User = require("../models/userModel");
const Coach = require("../models/Coach");
const { google } = require("googleapis");
const { sendSessionApprovalEmail } = require("../utils/email");
const {
  registerCoach,
  getAllCoaches,
} = require("../controllers/coachController");
const {
  getUnapprovedCoaches,
  approveCoach,
} = require("../controllers/adminController");
const { default: mongoose } = require("mongoose");
require("dotenv").config();

const atoken = process.env.ACCESS_TOKEN;

// Coach routes
router.post("/signup", registerCoach);
router.get("/getallcoach", getAllCoaches);

router.get("/pending-requests", async (req, res) => {
  try {
    const pendingSessions = await Booking.find({ status: "Pending" });
    res.status(200).json(pendingSessions);
  } catch (error) {
    console.error("Error fetching pending sessions:", error);
    res.status(500).json({ error: "Failed to fetch pending sessions" });
  }
});

const oauth2Client = new google.auth.OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  process.env.REDIRECT_URI
);

oauth2Client.setCredentials({
  access_token: process.env.ACCESS_TOKEN,
  refresh_token: process.env.REFRESH_TOKEN,
});

const calendar = google.calendar({ version: "v3", auth: oauth2Client });

const createGoogleMeetLink = async (coachEmail) => {
  try {
    const event = {
      summary: "Coaching Session",
      description: "A coaching session between the coach and student.",
      start: {
        dateTime: new Date().toISOString(), // Replace with actual session start time
        timeZone: "Asia/Kolkata", // Replace with the actual timezone
      },
      end: {
        dateTime: new Date(new Date().getTime() + 60 * 60 * 1000).toISOString(), // 1-hour session
        timeZone: "Asia/Kolkata",
      },
      attendees: [{ email: coachEmail }],
      conferenceData: {
        createRequest: {
          requestId: "random-request-id",
          conferenceSolutionKey: { type: "hangoutsMeet" },
        },
      },
    };

    const response = await calendar.events.insert({
      calendarId: "primary",
      resource: event,
      conferenceDataVersion: 1,
    });

    return response.data.hangoutLink; // Google Meet link
  } catch (error) {
    console.error("Error creating Google Meet link:", error);
    throw error;
  }
};

// For Generating a Google Meet Link

router.post("/approve-session", async (req, res) => {
  console.log("atoken", atoken);
  const { sessionId, studentId } = req.body;
  try {
    // Update session status and perform student-specific actions
    const session = await Booking.findByIdAndUpdate(
      sessionId,
      { status: "Approved" },
      { new: true }
    );
    console.log(session.coach);

    if (!session) {
      return res.status(404).json({ message: "Session not found" });
    }
    const student = await User.findById(studentId); // Adjust to match your schema
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }
    const coach = await Coach.findById(session.coach); // Adjust to match your schema
    if (!coach) {
      return res.status(404).json({ message: "Coach not found" });
    }
    console.log(coach);
    const meetLink = await createGoogleMeetLink(coach.email);

    // Perform additional actions with the studentId if needed
    await sendSessionApprovalEmail(
      student.email, // Email address
      student.username, // Student's name
      session.time, // Session time
      meetLink // Google Meet link
    );

    console.log(
      `Student Info: ${session.user.name} approved for session \"${session.coachingType}\"`
    );
    res.status(200).json({
      message: "Session approved successfully and email sent",
      session,
      meetLink,
    });
  } catch (error) {
    console.error("Error approving session:", error);
    res.status(500).json({ message: "Failed to approve session" });
  }
});

router.get("/book-session", async (req, res) => {
  try {
    // Query the database for sessions with status "Approved"
    const approvedSessions = await Booking.find({ status: "Approved" });

    // Return the approved sessions as a response
    res.status(200).json(approvedSessions);
    console.log("Book Session", approvedSessions);
  } catch (error) {
    console.error("Error fetching approved sessions:", error);
    res.status(500).json({ error: "Failed to fetch approved sessions" });
  }
});

router.get("/book-session-chart", async (req, res) => {
  try {
    const { interval, coachId } = req.query; // 'day', 'month', 'year', and 'coachId'
    console.log(coachId);
    if (!coachId) {
      return res.status(400).json({ error: "Coach ID is required" });
    }

    // Check if the coach exists
    const coachExists = await Coach.findById(coachId);
    if (!coachExists) {
      return res.status(404).json({ error: "Coach not found" });
    }
    // Define group format based on interval
    let groupFormat;
    if (interval === "day") {
      groupFormat = {
        year: { $year: "$time" },
        month: { $month: "$time" },
        day: { $dayOfMonth: "$time" },
      };
    } else if (interval === "month") {
      groupFormat = {
        year: { $year: "$time" },
        month: { $month: "$time" },
      };
    } else if (interval === "year") {
      groupFormat = {
        year: { $year: "$time" },
      };
    } else {
      return res.status(400).json({ error: "Invalid interval" });
    }

    // MongoDB aggregation
    const chartData = await Booking.aggregate([
      {
        $match: {
          status: "Approved", // Only approved bookings
          coach: new mongoose.Types.ObjectId(coachId), // Match the coach ID
        },
      },
      {
        $group: {
          _id: groupFormat,
          count: { $sum: 1 }, // Count the number of sessions
        },
      },
      { $sort: { "_id.year": 1, "_id.month": 1, "_id.day": 1 } }, // Sort by date
    ]);

    // Format data for frontend
    const formattedData = chartData.map((item) => {
      let date;
      if (interval === "day") {
        date = `${item._id.year}-${String(item._id.month).padStart(
          2,
          "0"
        )}-${String(item._id.day).padStart(2, "0")}`;
      } else if (interval === "month") {
        date = `${item._id.year}-${String(item._id.month).padStart(2, "0")}`;
      } else {
        date = `${item._id.year}`;
      }
      return { date, count: item.count };
    });

    res.status(200).json(formattedData);
  } catch (error) {
    console.error("Error fetching chart data:", error);
    res.status(500).json({ error: "Failed to fetch chart data" });
  }
});

// Admin routes
router.get("/coaches/unapproved", getUnapprovedCoaches); // Fetch unapproved coaches
router.put("/coaches/approve/:id", approveCoach); // Approve a coach

module.exports = router;

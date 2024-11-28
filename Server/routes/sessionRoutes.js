// routes/sessionRoutes.js
const express = require("express");
const PendingSession = require("../models/PendingSession");
const ApprovedSession = require("../models/ApprovedSession");

const router = express.Router();

// Submit session for approval
router.post("/submit-session", async (req, res) => {
  const { sessionName, date, time, subject, fees, coachInfo } = req.body;
  console.log(req.body);

  try {
    const newSession = new PendingSession({
      sessionName,
      date,
      time,
      subject,
      fees,
      coachInfo,
    });

    await newSession.save();
    return res
      .status(201)
      .json({ message: "Session submitted for approval.", pend });
  } catch (error) {
    console.error("Error submitting session:", error);
    return res.status(500).json({ message: "Failed to submit session." });
  }
});

// Approve session (admin only)
router.post("/approve-session", async (req, res) => {
  const { sessionId } = req.body;
  console.log("In the ", sessionId);

  try {
    const pendingSession = await PendingSession.findById(sessionId);
    if (!pendingSession) {
      return res.status(404).json({ message: "Session not found." });
    }

    const approvedSession = new ApprovedSession({
      sessionName: pendingSession.sessionName,
      date: pendingSession.date,
      time: pendingSession.time,
      subject: pendingSession.subject,
      fees: pendingSession.fees,
      coachInfo: pendingSession,
    });

    // console.log(pendingSession._id);

    await approvedSession.save();
    await PendingSession.findByIdAndDelete(sessionId);

    return res.status(200).json({ message: "Session approved successfully." });
  } catch (error) {
    console.error("Error approving session:", error);
    return res.status(500).json({ message: "Failed to approve session." });
  }
});

// Get all approved sessions (for frontend display)
router.get("/approved-sessions", async (req, res) => {
  try {
    // Fetch sessions and populate coachId field with name and email
    const sessions = await ApprovedSession.find().populate(
      "coachInfo",
      "name email"
    );

    // Log the result for debugging
    // console.log("Fetched sessions:", sessions);

    return res.status(200).json(sessions);
  } catch (error) {
    console.error("Error fetching approved sessions:", error);
    return res.status(500).json({ message: "Failed to fetch sessions." });
  }
});

router.get("/pending", async (req, res) => {
  try {
    const sessions = await PendingSession.find();
    res.status(200).json(sessions);
  } catch (error) {
    res.status(500).json({ message: "Error fetching pending sessions." });
  }
});

module.exports = router;

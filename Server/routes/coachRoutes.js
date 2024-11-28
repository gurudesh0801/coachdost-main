const express = require("express");
const router = express.Router();
const Booking = require("../models/Booking");
const {
  registerCoach,
  getAllCoaches,
} = require("../controllers/coachController");
const {
  getUnapprovedCoaches,
  approveCoach,
} = require("../controllers/adminController");

// Coach routes
router.post("/signup", registerCoach);
router.get("/getallcoach", getAllCoaches);

router.get("/pending-requests", async (req, res) => {
  console.log("hiii");
  try {
    const pendingSessions = await Booking.find({ status: "Pending" });
    res.status(200).json(pendingSessions);
  } catch (error) {
    console.error("Error fetching pending sessions:", error);
    res.status(500).json({ error: "Failed to fetch pending sessions" });
  }
});

router.post("/approve-session", async (req, res) => {
  const { sessionId, studentId } = req.body;

  try {
    // Update session status and perform student-specific actions
    const session = await Booking.findByIdAndUpdate(
      sessionId,
      { status: "Approved" },
      { new: true }
    );

    if (!session) {
      return res.status(404).json({ message: "Session not found" });
    }

    // Perform additional actions with the studentId if needed
    console.log(
      `Student Info: ${session.user.name} approved for session \"${session.coachingType}\"`
    );

    res.status(200).json({ message: "Session approved successfully", session });
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
    console.log(approvedSessions);
  } catch (error) {
    console.error("Error fetching approved sessions:", error);
    res.status(500).json({ error: "Failed to fetch approved sessions" });
  }
});

// Admin routes
router.get("/coaches/unapproved", getUnapprovedCoaches); // Fetch unapproved coaches
router.put("/coaches/approve/:id", approveCoach); // Approve a coach

module.exports = router;

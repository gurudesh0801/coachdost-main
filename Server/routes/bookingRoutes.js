const express = require("express");
const Booking = require("../models/Booking");
const Coach = require("../models/Coach");

const router = express.Router();

// Create a new booking
router.post("/book-session", async (req, res) => {
  try {
    const { userType, coachingType, focusArea, time, coach, user } = req.body;

    if (!userType || !coachingType || !focusArea || !time || !coach || !user) {
      return res.status(400).json({ message: "All fields are required." });
    }

    // Validate coach existence
    const selectedCoach = await Coach.findById(coach);
    if (!selectedCoach) {
      return res.status(404).json({ message: "Coach not found." });
    }

    // Create a new booking
    const booking = new Booking({
      userType,
      coachingType,
      focusArea,
      time,
      coach,
      user: {
        id: user.id,
        name: user.username,
        email: user.email,
      },
    });

    await booking.save();

    // Send approval request to the coach (mock notification or email)
    // In a real application, integrate email or notification services here.
    console.log(
      `Approval request sent to Coach ${selectedCoach.username} for booking ${booking._id}`
    );

    res.status(201).json({
      message: "Booking request sent successfully!",
      bookingId: booking._id,
    });
  } catch (error) {
    console.error("Error creating booking:", error);
    res.status(500).json({ message: "Server error. Please try again later." });
  }
});

module.exports = router;

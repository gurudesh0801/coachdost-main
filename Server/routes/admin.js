const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const Coach = require("../models/Coach");
const Session = require("../models/PendingSession");
const { sendApprovalEmail } = require("../utils/email");
const { default: mongoose } = require("mongoose");

dotenv.config(); // Load environment variables

const router = express.Router();

// Load admin credentials from .env
const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;
const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRY = process.env.JWT_EXPIRY;

// Hash the password from .env during runtime
const hashedAdminPassword = bcrypt.hashSync(ADMIN_PASSWORD, 10);

// Admin Login Route
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  // Validate input
  if (!email || !password) {
    return res
      .status(400)
      .json({ message: "Please provide email and password." });
  }

  try {
    // Check if email matches
    if (email !== ADMIN_EMAIL) {
      return res.status(404).json({ message: "Admin not found." });
    }

    // Verify password
    const isMatch = await bcrypt.compare(password, hashedAdminPassword);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials." });
    }

    // Generate JWT token
    const token = jwt.sign({ email: ADMIN_EMAIL }, JWT_SECRET, {
      expiresIn: JWT_EXPIRY,
    });

    return res.status(200).json({
      message: "Login successful.",
      token,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error." });
  }
});

router.get("/coaches/unapproved", async (req, res) => {
  try {
    const unapprovedCoaches = await Coach.find({ approved: false }); // Fetch all coaches where approved is false
    res.status(200).json({
      message: "Unapproved coaches fetched successfully.",
      data: unapprovedCoaches,
    });
  } catch (error) {
    console.error("Error fetching unapproved coaches:", error);
    res
      .status(500)
      .json({ message: "An error occurred while fetching coaches." });
  }
});

router.put("/coaches/approve/:id", async (req, res) => {
  try {
    const { id } = req.params;

    // Find the coach by id
    const coach = await Coach.findById(id);
    if (!coach) {
      return res.status(404).json({ message: "Coach not found" });
    }

    // Update the coach's status to 'approved'
    coach.approved = true;
    await coach.save();
    await sendApprovalEmail(coach.email, coach.username);

    return res
      .status(200)
      .json({ message: "Coach approved and email sent", coach });
  } catch (error) {
    console.error("Error approving coach:", error);
    return res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;

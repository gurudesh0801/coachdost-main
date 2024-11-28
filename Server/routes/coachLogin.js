const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;

// Import the Coach model
const Coach = require("../models/Coach");

// @route POST /api/coaches/login
// @desc Login Coach
// @access Public
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if email and password are provided
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Please provide both email and password" });
    }

    // Check if the coach exists in the database
    const coach = await Coach.findOne({ email });
    if (!coach) {
      return res.status(404).json({ message: "Coach not found" });
    }

    // Check if coach is approved
    if (!coach.approved) {
      return res.status(403).json({ message: "Coach approval pending" });
    }

    // Validate password
    const isMatch = await bcrypt.compare(password, coach.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Generate JWT token
    const token = jwt.sign(
      { id: coach._id, role: "Coach" },
      JWT_SECRET,
      { expiresIn: "1d" } // Token expires in 1 day
    );

    res.status(200).json({
      message: "Login successful",
      token,
      coach: coach,
    });
  } catch (error) {
    console.error("Error during coach login:", error);
    res.status(500).json({ message: "Server error. Please try again." });
  }
});

module.exports = router;

const Coach = require("../models/Coach");

// Fetch unapproved coaches
const getUnapprovedCoaches = async (req, res) => {
  try {
    const unapprovedCoaches = await Coach.find({ isApproved: false });
    res.status(200).json(unapprovedCoaches);
  } catch (error) {
    console.error("Error fetching unapproved coaches:", error);
    res.status(500).json({ message: "Server error. Please try again later." });
  }
};

// Approve a coach

const approveCoach = async (req, res) => {
  try {
    const { id } = req.params;

    const coach = await Coach.findById(id);
    if (!coach) {
      return res.status(404).json({ message: "Coach not found." });
    }

    coach.approved = true;
    await coach.save();

    res.status(200).json({ message: "Coach approved successfully!" });
  } catch (error) {
    console.error("Error approving coach:", error);
    res.status(500).json({ message: "Server error. Please try again later." });
  }
};

module.exports = { getUnapprovedCoaches, approveCoach };

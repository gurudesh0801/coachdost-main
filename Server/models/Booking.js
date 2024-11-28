const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  userType: { type: String, required: true },
  coachingType: { type: String, required: true },
  focusArea: { type: String, required: true },
  time: { type: Date, required: true },
  coach: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Coach", // Reference the Coach model
    required: true,
  },
  user: {
    id: { type: String, required: true }, // User ID
    name: { type: String, required: true }, // User name
    email: { type: String, required: true }, // User email
  },
  status: { type: String, default: "Pending" }, // Pending, Approved, Rejected
});

const Booking = mongoose.model("Booking", bookingSchema);
module.exports = Booking;

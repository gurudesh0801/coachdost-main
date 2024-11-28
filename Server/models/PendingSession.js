// models/PendingSession.js
const mongoose = require("mongoose");

const PendingSessionSchema = new mongoose.Schema({
  sessionName: { type: String, required: true },
  date: { type: Date, required: true },
  time: { type: String, required: true },
  subject: { type: String, required: true },
  fees: { type: String, required: true },
  coachId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Coach",
  },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("PendingSession", PendingSessionSchema);

// models/ApprovedSession.js
const mongoose = require("mongoose");

const ApprovedSessionSchema = new mongoose.Schema({
  sessionName: { type: String, required: true },
  date: { type: Date, required: true },
  time: { type: String, required: true },
  subject: { type: String, required: true },
  fees: { type: String, required: true },
  coachInfo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Coach",
    require: true,
  },
  approvedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("ApprovedSession", ApprovedSessionSchema);

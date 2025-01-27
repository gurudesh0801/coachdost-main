const mongoose = require("mongoose");

const coachSchema = new mongoose.Schema({
  username: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  categories: { type: String, required: true },
  experience: { type: String, required: true },
  approved: { type: Boolean, default: false },
  profilePicture: { type: String, required: false },
});

const Coach = mongoose.model("Coach", coachSchema);
module.exports = Coach;

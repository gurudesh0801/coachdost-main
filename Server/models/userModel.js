const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, required: true, enum: ["Client", "Coach"] }, // Role field
    profession: { type: String }, // New field
    designation: { type: String }, // New field
    bio: { type: String }, // New field
    photo: { type: String }, // New field for storing file path
    active: { type: Boolean, default: false }, // Set default to false
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;

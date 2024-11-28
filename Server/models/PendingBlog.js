// models/PendingBlog.js
const mongoose = require("mongoose");

const pendingBlogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    authorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Coach", // Assuming the user is stored in a "User" collection
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "approved"],
      default: "pending",
    },
  },
  { timestamps: true }
);

const PendingBlog = mongoose.model("PendingBlog", pendingBlogSchema);

module.exports = PendingBlog;

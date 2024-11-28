const mongoose = require("mongoose");

const approvedBlogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  body: { type: String, required: true },
  authorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Coach",
  },
  approvedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("ApprovedBlog", approvedBlogSchema);

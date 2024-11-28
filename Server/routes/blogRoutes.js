// routes/blogRoutes.js
const express = require("express");
const PendingBlog = require("../models/PendingBlog");
const ApprovedBlog = require("../models/ApprovedBlog");
const router = express.Router();

// Submit blog for approval
router.post("/submit-blog", async (req, res) => {
  const { title, description, body, authorId } = req.body;
  console.log(req.body);

  try {
    const newBlog = new PendingBlog({
      title,
      description,
      body,
      authorId,
    });

    await newBlog.save();
    return res.status(201).json({ message: "Blog submitted for approval." });
  } catch (error) {
    console.error("Error submitting blog:", error);
    return res.status(500).json({ message: "Failed to submit blog." });
  }
});

router.post("/approve-blog", async (req, res) => {
  const { blogId } = req.body;

  try {
    const pendingBlog = await PendingBlog.findById(blogId);
    if (!pendingBlog) {
      return res.status(404).json({ message: "Blog not found." });
    }

    const approvedBlog = new ApprovedBlog({
      title: pendingBlog.title,
      description: pendingBlog.description,
      body: pendingBlog.body,
      authorId: pendingBlog.authorId,
    });

    await approvedBlog.save();
    await PendingBlog.findByIdAndDelete(blogId); // Delete from pending

    return res.status(200).json({ message: "Blog approved successfully." });
  } catch (error) {
    console.error("Error approving blog:", error);
    return res.status(500).json({ message: "Failed to approve blog." });
  }
});

// Reject a blog (admin only)
router.post("/reject-blog", async (req, res) => {
  const { blogId } = req.body;

  try {
    const pendingBlog = await PendingBlog.findById(blogId);
    if (!pendingBlog) {
      return res.status(404).json({ message: "Blog not found." });
    }

    await PendingBlog.findByIdAndDelete(blogId); // Delete from pending
    return res.status(200).json({ message: "Blog rejected successfully." });
  } catch (error) {
    console.error("Error rejecting blog:", error);
    return res.status(500).json({ message: "Failed to reject blog." });
  }
});

router.get("/unapproved", async (req, res) => {
  try {
    const unapprovedBlogs = await PendingBlog.find(); // Fetch all unapproved blogs
    res.status(200).json({
      success: true,
      data: unapprovedBlogs,
    });
  } catch (error) {
    console.error("Error fetching unapproved blogs:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch unapproved blogs.",
    });
  }
});

module.exports = router;

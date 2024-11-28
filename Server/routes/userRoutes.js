const express = require("express");
const {
  signupUser,
  getAllUsers,
  getUserGrowth,
  loginUser,
  updateUserProfile,
} = require("../controllers/userController");
const authMiddleware = require("../middleware/authMiddleware");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

const router = express.Router();

// Signup route
router.post("/signup", signupUser);
router.get("/", getAllUsers);
router.get("/growth", getUserGrowth);
router.post("/login", loginUser);
router.post(
  "/update-profile",
  authMiddleware,
  upload.single("photo"),
  updateUserProfile
);

module.exports = router;

const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("../config/cloudinary");
const bcrypt = require("bcryptjs");
const Coach = require("../models/Coach");

// Configure Cloudinary storage for Multer
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "profile-pictures", // Folder in Cloudinary
    allowed_formats: ["jpeg", "png", "jpg"], // Allow only image formats
  },
});

const upload = multer({ storage });

// Updated registerCoach function
const registerCoach = async (req, res) => {
  try {
    upload.single("profilePicture")(req, res, async (err) => {
      if (err) {
        console.error("Error uploading file:", err);
        return res.status(400).json({ message: err.message });
      }

      const { username, phone, email, password, categories, experience } =
        req.body;
      console.log(req.body);

      if (
        !username ||
        !phone ||
        !email ||
        !password ||
        !categories ||
        !experience
      ) {
        return res.status(400).json({ message: "All fields are required." });
      }

      // Check if email is already registered
      const existingCoach = await Coach.findOne({ email });
      if (existingCoach) {
        return res
          .status(400)
          .json({ message: "Email is already registered." });
      }

      // Hash the password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      // Save the coach details in the database
      const coach = new Coach({
        username,
        phone,
        email,
        password: hashedPassword,
        categories,
        experience,
        profilePicture: req.file ? req.file.path : null, // Save Cloudinary URL
        approved: false, // Default to not approved
      });

      await coach.save();
      res
        .status(201)
        .json({ message: "Signup request sent for admin approval!" });
    });
  } catch (error) {
    console.error("Error registering coach:", error);
    res.status(500).json({ message: "Server error. Please try again later." });
  }
};

// Get All Coaches
const getAllCoaches = async (req, res) => {
  try {
    // Fetch only approved coaches
    const coaches = await Coach.find({ approved: true });

    res.status(200).json(coaches);
  } catch (error) {
    console.error("Error fetching coaches:", error);
    res.status(500).json({ message: "Server error. Please try again later." });
  }
};

module.exports = { registerCoach, getAllCoaches };

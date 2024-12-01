const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const { generateToken } = require("../utils/jwtUtils");
const multer = require("multer");

const signupUser = async (req, res) => {
  const { username, phone, email, password, role } = req.body;
  // console.log(req);

  // Validate input
  if (!username || !phone || !email || !password || !role) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    // Check if user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = await User.create({
      username,
      phone,
      email,
      password: hashedPassword,
      role,
    });

    // Generate JWT
    const token = generateToken(newUser);

    console.log("New User Added:", newUser);

    return res.status(201).json({
      message: "Signup successful",
      user: {
        id: newUser._id,
        username: newUser.username,
        email: newUser.email,
      },
      token,
    });
  } catch (error) {
    console.error("Error in signupUser controller:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }

  // To get all data API
};
const getAllUsers = async (req, res) => {
  try {
    // Fetch all users, excluding the password field for security
    const users = await User.find({}, "-password");
    return res.status(200).json({ users });
  } catch (error) {
    console.error("Error in getAllUsers controller:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getUserGrowth = async (req, res) => {
  const { timePeriod } = req.query; // Get time period from query params
  const groupingField = getGroupingField(timePeriod);

  try {
    const userGrowth = await User.aggregate([
      {
        $group: {
          _id: groupingField, // Group by day, month, or year based on selected time period
          users: { $sum: 1 }, // Count the number of users
        },
      },
      {
        $sort: { _id: 1 }, // Sort by time (ascending)
      },
      {
        $project: {
          _id: 0,
          time: "$_id", // Rename _id to 'time'
          users: 1, // Include the users count
        },
      },
    ]);

    res.status(200).json(userGrowth);
  } catch (error) {
    console.error("Error fetching user growth:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Helper function to determine the grouping field based on the timePeriod
const getGroupingField = (timePeriod) => {
  switch (timePeriod) {
    case "day":
      return { $dayOfMonth: "$createdAt" }; // Group by day
    case "month":
      return { $month: "$createdAt" }; // Group by month
    case "year":
      return { $year: "$createdAt" }; // Group by year
    default:
      return { $month: "$createdAt" }; // Default to grouping by month
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  // Validate input
  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  try {
    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Compare password
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Generate JWT token
    const token = generateToken(user);

    console.log(user);
    // Respond with user info and token
    return res.status(200).json({
      message: "Login successful",
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        role: user.role,
        phone: user.phone,
        createdAt: user.createdAt,
      },
      token,
    });
  } catch (error) {
    console.error("Error in loginUser controller:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Directory to store uploaded files
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, `${uniqueSuffix}-${file.originalname}`); // Generate unique file name
  },
});

// Set up Multer middleware
const upload = multer({
  storage,
  limits: { fileSize: 2 * 1024 * 1024 }, // Max file size: 2MB
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith("image/")) {
      cb(null, true);
    } else {
      cb(new Error("Only image files are allowed!"), false);
    }
  },
});

const updateUserProfile = async (req, res) => {
  console.log("Request body:", req.body);

  const { profession, designation, bio } = req.body;

  try {
    const userId = req.user; // Assuming you extract userId in middleware
    if (!userId) {
      return res.status(400).json({ message: "User ID is required" });
    }

    const updates = { profession, designation, bio };

    // If a file is uploaded, add its path to the updates
    if (req.file) {
      updates.photo = req.file.path; // Path to the uploaded file
    }

    // Find and update the user
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { $set: updates },
      { new: true } // Return the updated document
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({
      message: "Profile updated successfully",
      user: updatedUser,
    });
  } catch (error) {
    console.error("Error in updateUserProfile controller:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = updateUserProfile;

module.exports = {
  signupUser,
  getAllUsers,
  getUserGrowth,
  loginUser,
  upload,
  updateUserProfile,
};

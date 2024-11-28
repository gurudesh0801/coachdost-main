const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

// Function to generate JWT
const generateToken = (user) => {
  return jwt.sign(
    {
      id: user.id,
      username: user.username,
      email: user.email,
    },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRY } // Expiry set in .env
  );
};

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1]; // Bearer token
  if (!token) return res.status(403).json({ message: "No token provided" });

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(401).json({ message: "Unauthorized" });

    req.user = decoded; // Attach user info to the request
    next();
  });
};

module.exports = { generateToken, verifyToken };

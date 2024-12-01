import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    phone: "",
    email: "",
    password: "",
    experience: "",
    categories: "",
    role: "Client",
    profilePicture: null, // For profile picture upload
  });
  const [loading, setLoading] = useState(false); // Loading state

  const [message, setMessage] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      profilePicture: file,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate required fields for "Coach"
    if (formData.role === "Coach") {
      if (
        !formData.categories ||
        !formData.experience ||
        !formData.profilePicture
      ) {
        setMessage({
          type: "error",
          text: "All fields are required for Coach signup.",
        });
        return;
      }
    }

    // Create FormData object for file and text data
    const formPayload = new FormData();
    formPayload.append("username", formData.username);
    formPayload.append("phone", formData.phone);
    formPayload.append("email", formData.email);
    formPayload.append("password", formData.password);
    formPayload.append("role", formData.role);

    if (formData.role === "Coach") {
      formPayload.append("experience", formData.experience);
      formPayload.append("categories", formData.categories);
      if (formData.profilePicture) {
        formPayload.append("profilePicture", formData.profilePicture);
      }
    }

    const endpoint =
      formData.role === "Client"
        ? `${import.meta.env.VITE_API_BASE_URL}/api/users/signup`
        : `${import.meta.env.VITE_API_BASE_URL}/api/coaches/signup`;

    try {
      setLoading(true); // Show loading indicator
      const response = await fetch(endpoint, {
        method: "POST",
        body: formPayload,
      });

      const data = await response.json();

      if (response.ok) {
        setMessage({ type: "success", text: data.message });
        alert("Successfully signed up!");

        if (formData.role === "Client") {
          window.location.href = "https://user.coachdost.com"; // Use window.location.href for external navigation
        } else if (formData.role === "Coach") {
          window.location.href = "https://coach.coachdost.com"; // Use window.location.href for external navigation
        }
      } else {
        setMessage({ type: "error", text: data.message || "Signup failed" });
      }
    } catch (error) {
      setMessage({
        type: "error",
        text: "An error occurred. Please try again.",
      });
      console.error("Error during signup:", error);
    } finally {
      setLoading(false); // Hide loading indicator
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2>Signup</h2>
        {message && <p className={`message ${message.type}`}>{message.text}</p>}

        <div className="role-selection">
          <label className="role-label">
            <input
              type="radio"
              name="role"
              value="Client"
              checked={formData.role === "Client"}
              onChange={handleChange}
            />
            Client
          </label>
          <label className="role-label">
            <input
              type="radio"
              name="role"
              value="Coach"
              checked={formData.role === "Coach"}
              onChange={handleChange}
            />
            Coach
          </label>
        </div>

        <form className="signup-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            placeholder="Phone Number"
            name="phone"
            pattern="[0-9]{10}"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          {formData.role === "Coach" && (
            <>
              <select
                name="categories"
                value={formData.categories}
                onChange={handleChange}
                className="signup-select"
                required
              >
                <option value="">Select Category</option>
                <option value="Interview Preparation">
                  Interview Preparation
                </option>
                <option value="Career Guidance">Career Guidance</option>
                <option value="Leadership Coaching">Leadership Coaching</option>
                <option value="Work-Life Balance">Work-Life Balance</option>
                <option value="Skill Training">Skill Training</option>
                <option value="Startup Coaching">Startup Coaching</option>
                <option value="Business Expansion">Business Expansion</option>
                <option value="Marketing Skills">Marketing Skills</option>
              </select>
              <input
                type="text"
                placeholder="Years of Experience"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                required
              />
              <div className="file-upload">
                <label className="file-label" htmlFor="profilePicture">
                  Upload Profile Picture
                </label>
                <input
                  type="file"
                  id="profilePicture"
                  name="profilePicture"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="file-input"
                />
              </div>
            </>
          )}

          <button type="submit" className="signup-btn">
            Signup
          </button>
        </form>
        {loading ? "Processing..." : ""}

        <p className="or-divider">OR</p>
        <div className="social-signup">
          <button
            onClick={() => alert("Google Signup Clicked")}
            className="social-btn google"
          >
            Signup with Google
          </button>
          <button
            onClick={() => alert("LinkedIn Signup Clicked")}
            className="social-btn linkedin"
          >
            Signup with LinkedIn
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;

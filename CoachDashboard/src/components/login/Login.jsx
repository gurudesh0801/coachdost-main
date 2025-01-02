import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const Login = ({ setToken, setUser }) => {
  // State to track the active button
  const [activeRole, setActiveRole] = useState("Coach");
  const navigate = useNavigate();

  // Form state
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // API URLs
  const apiUrls = {
    Coach: `${import.meta.env.VITE_API_BASE_URL}/api/coaches/login`,
  };

  // Handler to set active role
  const handleToggle = (role) => {
    setActiveRole(role);
  };

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const apiUrl = apiUrls[activeRole]; // Get the API URL based on the active role
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        alert(`${activeRole} login successful!`);
        console.log("User data:", result); // Handle successful login
        setToken(result.token);
        setUser(result.user);
      } else {
        setError(result.message || "Login failed. Please try again.");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-content">
        <div className="titleHead">
          <h1>
            Explore Our <br /> Application
          </h1>
        </div>
        <div className="auth-card">
          <h1>Coach Sign In</h1>
          <form className="auth-form" onSubmit={handleSubmit}>
            {error && <p className="error">{error}</p>}
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              className="auth-input"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              className="auth-input"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <div className="auth-links">
              <div className="links">
                <a href="#">Help</a>
                <a href="#">Privacy</a>
                <a href="#">Terms</a>
              </div>
              <button type="submit" className="auth-button" disabled={loading}>
                {loading ? "Loading..." : "Next"}
              </button>
            </div>
            <div className="linkwithother">
              <a href="#">
                <i className="fa-brands fa-google"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

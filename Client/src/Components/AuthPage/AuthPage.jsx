import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import "./AuthPage.css";

const AuthPage = ({ setToken, setUser, user }) => {
  const [userType, setUserType] = useState("client");
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let endpoint = "";

    // Determine the API endpoint
    if (isLogin) {
      endpoint =
        userType === "client"
          ? `${import.meta.env.VITE_API_BASE_URL}/api/users/login`
          : `${import.meta.env.VITE_API_BASE_URL}/api/coaches/login`;
    } else {
      endpoint =
        userType === "client"
          ? `${import.meta.env.VITE_API_BASE_URL}/api/users/signup`
          : `${import.meta.env.VITE_API_BASE_URL}/api/coaches/signup`;
    }

    // Prepare the request payload
    const payload = {
      email: formData.email,
      password: formData.password,
    };

    if (!isLogin) {
      payload.fullName = formData.fullName;
      if (
        userType === "client" &&
        formData.password !== formData.confirmPassword
      ) {
        alert("Passwords do not match!");
        return;
      }
    }

    try {
      // Send the request
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      console.log(data.token);

      console.log(data.role);
      if (response.ok) {
        alert(`Success: ${data.message}`);
        setToken(data.token);
        setUser(data.user);
        if (data.user.role === "Client") {
          window.location.href = `https://client.coachdost.com?token=${
            data.token
          }&user=${encodeURIComponent(JSON.stringify(data.user))}`;
        } else {
          window.location.href = `https://coach.coachdost.com?token=${
            data.token
          }&user=${encodeURIComponent(JSON.stringify(data.user))}`;
        }
      } else {
        alert(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="auth-container">
      <div className="background-pattern">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="pattern-line" style={{ top: `${i * 5}%` }} />
        ))}
      </div>

      <div className="main-content">
        <div className="content-wrapper">
          <div className="title-section">
            <h1 className="main-title">
              Explore Our
              <br />
              Application
            </h1>
          </div>

          <div className="auth-card">
            <div className="auth-header">
              <h2 className="auth-title">
                {isLogin ? "User Sign In" : "User Sign Up"}
              </h2>
            </div>

            <div className="toggle-container">
              <button
                type="button"
                onClick={() => setIsLogin(true)}
                className={`toggle-button ${isLogin ? "active" : "inactive"}`}
              >
                Sign In
              </button>
              <button
                type="button"
                onClick={() => setIsLogin(false)}
                className={`toggle-button ${!isLogin ? "active" : "inactive"}`}
              >
                Sign Up
              </button>
            </div>

            <div className="toggle-container">
              <button
                type="button"
                onClick={() => setUserType("client")}
                className={`toggle-button ${
                  userType === "client" ? "active" : "inactive"
                }`}
              >
                User
              </button>
              <button
                type="button"
                onClick={() => setUserType("coach")}
                className={`toggle-button ${
                  userType === "coach" ? "active" : "inactive"
                }`}
              >
                Coach
              </button>
            </div>

            <form onSubmit={handleSubmit}>
              {!isLogin && (
                <div className="form-group">
                  <label className="form-label">Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    className="form-input"
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={handleInputChange}
                  />
                </div>
              )}

              <div className="form-group">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-input"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>

              {!isLogin && (
                <div className="form-group">
                  <label className="form-label">Phone no.</label>
                  <input
                    type="text"
                    name="phone"
                    className="form-input"
                    placeholder="Enter your Phone no."
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>
              )}

              <div className="form-group">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  name="password"
                  className="form-input"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleInputChange}
                />
              </div>

              {!isLogin && (
                <div className="form-group">
                  <label className="form-label">Confirm Password</label>
                  <input
                    type="password"
                    name="confirmPassword"
                    className="form-input"
                    placeholder="Confirm your password"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                  />
                </div>
              )}
              <div className="social-login">
                <button
                  onClick={() => handleSocialLogin("google")}
                  className="social-button google"
                >
                  <svg viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"
                    />
                  </svg>
                </button>
                <button
                  onClick={() => handleSocialLogin("linkedin")}
                  className="social-button linkedin"
                >
                  <svg viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M19,3H5C3.895,3,3,3.895,3,5v14c0,1.105,0.895,2,2,2h14c1.105,0,2-0.895,2-2V5C21,3.895,20.105,3,19,3z M9,17H6.477v-7H9 V17z M7.694,8.717c-0.771,0-1.286-0.514-1.286-1.2s0.514-1.2,1.371-1.2c0.771,0,1.286,0.514,1.286,1.2S8.551,8.717,7.694,8.717z M18,17h-2.442v-3.826c0-1.058-0.651-1.302-0.895-1.302s-1.058,0.163-1.058,1.302c0,0.163,0,3.826,0,3.826h-2.523v-7h2.523v0.977 C13.93,10.407,14.581,10,15.802,10C17.023,10,18,10.977,18,13.174V17z"
                    />
                  </svg>
                </button>
              </div>

              <div className="form-footer">
                <div className="footer-links">
                  <button type="button">Help</button>
                  <button type="button">Privacy</button>
                  <button type="button">Terms</button>
                </div>
                <button type="submit" className="submit-button">
                  Next
                  <ArrowRight size={16} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;

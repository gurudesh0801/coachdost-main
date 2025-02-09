import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { GoogleLogin } from "@react-oauth/google";
import google from "../../assets/images/google.webp";
import linkedin from "../../assets/images/linkedin.png";
import "./AuthPage.css";

const AuthPage = ({ setToken, setUser, user }) => {
  const [userType, setUserType] = useState("Client");
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    username: "",
    phone: "",
    email: "",
    password: "",
    experience: "",
    categories: "",
    role: userType,
    profilePicture: null, // For profile picture upload
  });

  console.log(
    "Categories:",
    formData.categories,
    "Experience :",
    formData.experience,
    "profilePicture:",
    formData.profilePicture
  );

  console.log("This is UserType", userType);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedFormData = {
      ...formData,
      role: userType === "Client" ? "Client" : "Coach",
    };

    console.log(userType);

    let endpoint = "";

    if (isLogin) {
      endpoint =
        userType === "Client"
          ? `${import.meta.env.VITE_API_BASE_URL}/api/users/login`
          : `${import.meta.env.VITE_API_BASE_URL}/api/coaches/login`;
    } else {
      endpoint =
        userType === "Client"
          ? `${import.meta.env.VITE_API_BASE_URL}/api/users/signup`
          : `${import.meta.env.VITE_API_BASE_URL}/api/coaches/signup`;
    }

    const payload = {
      email: updatedFormData.email,
      password: updatedFormData.password,
      role: updatedFormData.role,
      experience: updatedFormData.experience,
      categories: updatedFormData.categories,
      profilePicture: updatedFormData.profilePicture,
    };

    if (!isLogin) {
      payload.username = updatedFormData.username;
      payload.phone = updatedFormData.phone;

      if (
        userType === "Client" &&
        updatedFormData.password !== updatedFormData.confirmPassword
      ) {
        alert("Passwords do not match!");
        return;
      }
    }

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      console.log(data);

      if (response.ok) {
        alert(`Success: ${data.message}`);
        setToken(data.token);
        setUser(data.user);

        if (userType === "Client") {
          window.location.href = `https://user.coachdost.com?token=${
            data.token
          }&user=${encodeURIComponent(JSON.stringify(data.user))}`;
        } else {
          if (isLogin) {
            window.location.href = `https://coach.coachdost.com?token=${
              data.token
            }&coach=${encodeURIComponent(JSON.stringify(data.coach))}`;
          } else {
            window.location.href = "https://coachdost.com";
          }
        }
      } else {
        alert(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  };
  const gotoLinkedIn = () => {
    alert("My name LinkedIn");
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
                onClick={() => setUserType("Client")}
                className={`toggle-button ${
                  userType === "Client" ? "active" : "inactive"
                }`}
              >
                User
              </button>
              <button
                type="button"
                onClick={() => setUserType("Coach")}
                className={`toggle-button ${
                  userType === "Coach" ? "active" : "inactive"
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
                    name="username"
                    className="form-input"
                    placeholder="Enter your full name"
                    value={formData.username}
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
              {!isLogin && userType === "Coach" && (
                <div className="form-group">
                  <label className="form-label">Categories</label>
                  <input
                    type="text"
                    name="categories"
                    className="form-input"
                    placeholder="Categories"
                    value={formData.categories}
                    onChange={handleInputChange}
                  />
                </div>
              )}
              {!isLogin && userType === "Coach" && (
                <div className="form-group">
                  <label className="form-label">Experience</label>
                  <input
                    type="text"
                    name="experience"
                    className="form-input"
                    placeholder="Experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                  />
                </div>
              )}
              {!isLogin && userType === "Coach" && (
                <div className="form-group">
                  <label className="form-label">Profile Picture</label>
                  <input
                    type="file"
                    name="profilePicture"
                    className="form-input"
                    placeholder="Profile Picture"
                    value={formData.profilePicture}
                    onChange={handleInputChange}
                  />
                </div>
              )}
              <div className="social-login">
                <button type="button" className="social-button google">
                  <GoogleLogin
                    onSuccess={(credentialResponse) => {
                      console.log(credentialResponse);
                    }}
                    onError={() => {
                      console.log("Login Failed");
                    }}
                    useOneTap // Optional: Enables auto-login
                  />
                  ;
                </button>
                <button
                  type="button"
                  onClick={gotoLinkedIn}
                  className="social-button linkedin"
                >
                  <img src={linkedin} alt="linkedin" />
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

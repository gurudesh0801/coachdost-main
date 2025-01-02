import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/images/logo.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State for mobile menu
  const [activeDropdown, setActiveDropdown] = useState(""); // Track the active dropdown
  const navigate = useNavigate();

  // Toggle the mobile menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setActiveDropdown(""); // Close any open dropdowns when toggling the mobile menu
  };

  // Handle Dropdown Toggle
  const toggleDropdown = (dropdownName) => {
    setActiveDropdown((prev) => (prev === dropdownName ? "" : dropdownName));
  };

  // Navigate to signup page
  const gotoSignup = () => {
    navigate("/signup");
  };

  // Navigate to login pages
  const gotoLoginAsUser = () => {
    window.location.href = "https://user.coachdost.com";
  };
  const gotoLoginAsCoach = () => {
    window.location.href = "https://coach.coachdost.com";
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo" onClick={() => navigate("/")}>
          <img src={logo} alt="Logo" />
        </div>

        {/* Navbar Links */}
        <div className={`navbar-links ${menuOpen ? "active" : ""}`}>
          <a href="/">Home</a>

          {/* Dropdown: About Us */}
          <div
            className={`dropdown ${activeDropdown === "about" ? "open" : ""}`}
          >
            <span
              className="dropdown-link"
              onClick={() => toggleDropdown("about")}
            >
              About Us ▾
            </span>
            <div className="dropdown-menu">
              <a href="/who-we-are">Who We Are?</a>
              <a href="/our-team">Our Team</a>
              <a href="#success-stories">Success Stories</a>
              <a href="#joinascoach">Join as Coach</a>
            </div>
          </div>

          {/* Dropdown: Services */}
          <div
            className={`dropdown ${
              activeDropdown === "services" ? "open" : ""
            }`}
          >
            <span
              className="dropdown-link"
              onClick={() => toggleDropdown("services")}
            >
              Services ▾
            </span>
            {activeDropdown === "services" && (
              <div className="dropdown-menu">
                <a href="/findcoaches">Find Coach</a>
                <a href="/booksession">Book a Session</a>
                <a href="#corporate">Corporate Solutions</a>
                <a href="#pricingplanes">Pricing Plans</a>
              </div>
            )}
          </div>

          {/* Dropdown: Blog */}
          <div
            className={`dropdown ${activeDropdown === "blog" ? "open" : ""}`}
          >
            <span
              className="dropdown-link"
              onClick={() => toggleDropdown("blog")}
            >
              Blog ▾
            </span>
            <div className="dropdown-menu">
              <a href="#latest-articles">Latest Articles</a>
              <a href="#video-resources">Video Resources</a>
              <a href="#newsletter">Newsletter</a>
            </div>
          </div>

          <a href="/faq">FAQ's</a>
          <a href="/contact">Contact</a>

          {/* Mobile Buttons */}
          <div className="mobile-buttons">
            <button className="join-btn" onClick={gotoSignup}>
              Join Now
            </button>
            <div className="dropdown login-btn login-dropdown">
              <span
                className="dropdown-link"
                onClick={() => toggleDropdown("login")}
                style={{ color: "white" }}
              >
                Login ▾
              </span>
              {activeDropdown === "login" && (
                <div className="dropdown-menu">
                  <span onClick={gotoLoginAsUser}>Login as User</span>
                  <span onClick={gotoLoginAsCoach}>Login as Coach</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Desktop Buttons */}
        <div className="navbar-buttons">
          <button className="join-btn" onClick={gotoSignup}>
            Join Now
          </button>
          <div className="dropdown login-btn login-dropdown">
            <span
              className="dropdown-link"
              onClick={() => toggleDropdown("login")}
              style={{ color: "white" }}
            >
              Login ▾
            </span>
            {activeDropdown === "login" && (
              <div className="dropdown-menu">
                <span onClick={gotoLoginAsUser}>Login as User</span>
                <span onClick={gotoLoginAsCoach}>Login as Coach</span>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="menu-icon" onClick={toggleMenu}>
          {menuOpen ? "✖" : "☰"}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

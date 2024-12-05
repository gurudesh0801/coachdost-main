import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/images/logo.png"; // Replace with the correct path to your logo
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate(); // Fix: Call the useNavigate hook

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Smooth scroll
  document.querySelectorAll("a[href^='#']").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault(); // Prevent default anchor behavior

      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        window.scrollTo({
          top: target.offsetTop,
          behavior: "smooth",
        });

        // Slowing down the scroll further
        let distance = Math.abs(window.scrollY - target.offsetTop);
        let duration = distance / 2; // Adjust this value for speed (higher = slower)
        window.setTimeout(() => {
          window.scrollTo({ top: target.offsetTop });
        }, duration);
      }
    });
  });

  const goto = () => {
    navigate("/signup"); // Navigate to the /signup page
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo Section */}
        <div className="navbar-logo">
          <img src={logo} alt="Logo" />
        </div>

        {/* Links Section */}
        <div className={`navbar-links ${menuOpen ? "active" : ""}`}>
          <a href="/" onClick={() => setMenuOpen(false)}>
            Home
          </a>
          <a href="#about" onClick={() => setMenuOpen(false)}>
            About Us
          </a>
          <a href="#whyus" onClick={() => setMenuOpen(false)}>
            Why Us
          </a>
          <div className="dropdown">
            <span className="dropdown-link">Services ▾</span>
            <div className="dropdown-menu">
              <a href="#web-development" onClick={() => setMenuOpen(false)}>
                Web Development
              </a>
              <a href="#mobile-development" onClick={() => setMenuOpen(false)}>
                Mobile Development
              </a>
              <a href="#data-science" onClick={() => setMenuOpen(false)}>
                Data Science
              </a>
            </div>
          </div>
          <a href="#blog" onClick={() => setMenuOpen(false)}>
            Blog
          </a>
          <div className="dropdown">
            <span className="dropdown-link">FAQ ▾</span>
            <div className="dropdown-menu">
              <a href="#general-questions" onClick={() => setMenuOpen(false)}>
                General Questions
              </a>
              <a href="#technical-support" onClick={() => setMenuOpen(false)}>
                Technical Support
              </a>
              <a href="#billing" onClick={() => setMenuOpen(false)}>
                Billing
              </a>
            </div>
          </div>
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
          <div className="mobile-buttons">
            <button className="join-btn" onClick={goto}>
              Join Now
            </button>
            <button className="login-btn">Login</button>
          </div>
        </div>

        {/* Buttons (Desktop Only) */}
        <div className="navbar-buttons">
          <button className="join-btn" onClick={goto}>
            Join Now
          </button>
          <button className="login-btn">Login</button>
        </div>

        {/* Hamburger Icon */}
        <div className="menu-icon" onClick={toggleMenu}>
          {menuOpen ? "✖" : "☰"}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

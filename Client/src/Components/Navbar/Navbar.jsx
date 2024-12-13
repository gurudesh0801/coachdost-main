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

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <img src={logo} alt="Logo" />
        </div>

        {/* Navbar Links */}
        <div className={`navbar-links ${menuOpen ? "active" : ""}`}>
          <a href="/">Home</a>

          {/* About Dropdown */}
          <div className="dropdown">
            <span
              className="dropdown-link"
              onClick={() => toggleDropdown("about")}
            >
              About Us ▾
            </span>
            {activeDropdown === "about" && (
              <div className="dropdown-menu">
                <a href="/who-we-are">Who We Are?</a>
                <a href="/our-team">Our Team</a>
                <a href="#success-stories">Success Stories</a>
                <a href="#joinascoach">Join as Coach s</a>
                <a href="#career-opportunities">Career Opportunities</a>
              </div>
            )}
          </div>

          {/* Services Dropdown */}
          <div className="dropdown">
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
                <div className="dropdown">
                  <span
                    className="dropdown-link"
                    onClick={() => toggleDropdown("coachcategories")}
                  >
                    Coach Categories ▾
                  </span>
                  {activeDropdown === "coachcategories" && (
                    <div className="dropdown-menu">
                      <a href="#life-coach">Life Coaching</a>
                      <a href="#career-coaching">Career Coaching</a>
                      <a href="#leadership-coaching">Leadership Development</a>
                      <a href="#educationalcoaches">IELTS/TOEFL/OET</a>
                    </div>
                  )}
                </div>
                <a href="#corporate">Corporate Solutions</a>
                <a href="#pricingplanes">Pricing Plans</a>
              </div>
            )}
          </div>

          {/* Blog Dropdown */}
          <div className="dropdown">
            <span
              className="dropdown-link"
              onClick={() => toggleDropdown("blog")}
            >
              Blog ▾
            </span>
            {activeDropdown === "blog" && (
              <div className="dropdown-menu">
                <a href="#latest-articles">Latest Articles</a>
                <a href="#coach-insights">Coach Insights</a>
                <a href="#coach-insights">Success Stories</a>
                <a href="#coach-insights">Industry Updates</a>
                <a href="#coach-insights">Video Resources</a>
                <a href="#coach-insights">Newsletter</a>
              </div>
            )}
          </div>

          {/* FAQ Dropdown */}
          <div className="dropdown">
            <span
              className="dropdown-link"
              onClick={() => toggleDropdown("faq")}
            >
              FAQ ▾
            </span>
            {activeDropdown === "faq" && (
              <div className="dropdown-menu">
                <a href="#student-guide">Student Guide</a>
                <a href="#technical-support">Technical Support</a>
                <a href="#technical-support">Payment FAQs</a>
                <a href="#technical-support">Technical Support</a>
                <a href="#technical-support">Our Policies</a>
              </div>
            )}
          </div>

          {/* Contact Dropdown */}
          <div className="dropdown">
            <span
              className="dropdown-link"
              onClick={() => toggleDropdown("contact")}
            >
              Contact ▾
            </span>
            {activeDropdown === "contact" && (
              <div className="dropdown-menu">
                <a href="#student-guide">Student Guide</a>
                <a href="#technical-support">Technical Support</a>
                <a href="#technical-support">Become a Coach</a>
                <a href="#technical-support">Corporate Partnerships</a>
                <a href="#technical-support">Book a Call</a>
                <a href="#technical-support">Chat with Us</a>
              </div>
            )}
          </div>

          {/* Mobile Buttons */}
          <div className="mobile-buttons">
            <button className="join-btn" onClick={gotoSignup}>
              Join Now
            </button>
            <button className="login-btn">Login</button>
          </div>
        </div>

        {/* Desktop Buttons */}
        <div className="navbar-buttons">
          <button className="join-btn" onClick={gotoSignup}>
            Join Now
          </button>
          <button className="login-btn">Login</button>
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

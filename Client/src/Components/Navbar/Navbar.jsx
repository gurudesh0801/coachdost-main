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
              <a href="#career-opportunities">Career Opportunities</a>
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

                {/* Nested Dropdown: Coach Categories */}
                <div
                  className={`dropdown ${
                    activeDropdown === "coachcategories" ? "open" : ""
                  }`}
                >
                  <span
                    className="dropdown-link nested"
                    onClick={() => toggleDropdown("coachcategories")}
                  >
                    Coach Categories ▾
                  </span>
                  {activeDropdown === "coachcategories" && (
                    <div className="dropdown-menu nested-menu">
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
              <a href="#coach-insights">Coach Insights</a>
              <a href="#success-stories">Success Stories</a>
              <a href="#industry-updates">Industry Updates</a>
              <a href="#video-resources">Video Resources</a>
              <a href="#newsletter">Newsletter</a>
            </div>
          </div>

          {/* Dropdown: FAQ */}
          <div className={`dropdown ${activeDropdown === "faq" ? "open" : ""}`}>
            <span
              className="dropdown-link"
              onClick={() => toggleDropdown("faq")}
            >
              FAQ ▾
            </span>
            <div className="dropdown-menu">
              <a href="#student-guide">Student Guide</a>
              <a href="#technical-support">Technical Support</a>
              <a href="#payment-faqs">Payment FAQs</a>
              <a href="#our-policies">Our Policies</a>
            </div>
          </div>

          {/* Dropdown: Contact */}
          <div
            className={`dropdown ${activeDropdown === "contact" ? "open" : ""}`}
          >
            <span
              className="dropdown-link"
              onClick={() => toggleDropdown("contact")}
            >
              Contact ▾
            </span>
            <div className="dropdown-menu">
              <a href="#student-guide">Student Guide</a>
              <a href="#technical-support">Technical Support</a>
              <a href="#become-a-coach">Become a Coach</a>
              <a href="#corporate-partnerships">Corporate Partnerships</a>
              <a href="#book-a-call">Book a Call</a>
              <a href="#chat-with-us">Chat with Us</a>
            </div>
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

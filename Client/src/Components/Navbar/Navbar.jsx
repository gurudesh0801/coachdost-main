import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const gotoSignup = () => {
    navigate("/signup");
  };

  const gotoLogin = (role) => {
    if (role === "Coach") {
      window.location.href = "https://coach.coachdost.com";
    } else if (role === "User") {
      window.location.href = "https://user.coachdost.com";
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>

      {/* Centered Navigation Links */}
      <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
        <li>
          <Link to="#why" onClick={toggleMenu}>
            Explore Coaches
          </Link>
        </li>
        <li>
          <Link to="#services" onClick={toggleMenu}>
            About us
          </Link>
        </li>
        <li>
          <Link to="#contact" onClick={toggleMenu}>
            Why us?
          </Link>
        </li>
      </ul>

      {/* Right Side Buttons */}
      <div className="left-button">
        <button onClick={gotoSignup} className="demo-button">
          Join Now
        </button>

        {/* Login Dropdown */}
        <div className="dropdown">
          <button
            className="demo-button dropdown-toggle"
            onClick={toggleDropdown}
          >
            Login
          </button>
          {isDropdownOpen && (
            <div className="dropdown-menu">
              <button
                onClick={() => gotoLogin("Coach")}
                className="dropdown-item"
              >
                Login as Coach
              </button>
              <button
                onClick={() => gotoLogin("User")}
                className="dropdown-item"
              >
                Login as User
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Hamburger Icon */}
      <div
        className={`hamburger ${isMenuOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
}

export default Navbar;

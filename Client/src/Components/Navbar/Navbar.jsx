import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const goto = () => {
    navigate("/signup");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    const hamburger = document.querySelector(".hamburger");

    // Toggle the active class on click
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
    });
  };
  // Select the hamburger element

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      {/* Left Button */}

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
      <div className="left-button">
        <button onClick={goto} className="demo-button">
          Join Now
        </button>
        <button className="demo-button">Login</button>
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

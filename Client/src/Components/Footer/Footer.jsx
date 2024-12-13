import React from "react";
import "./Footer.css";
import { FaEnvelope, FaGlobe, FaCheck } from "react-icons/fa"; // For icons

const Footer = () => {
  return (
    <footer className="footer-container">
      {/* Top Section */}
      <div className="footer-top">
        <div className="footer-top-box">
          <div className="footer-icon">
            <FaEnvelope />
          </div>
          <p>
            Need Advice On How To Become A Better Version Of Yourself In Your
            Personal Life?
          </p>
        </div>
        <div className="footer-top-box">
          <div className="footer-icon">
            <FaGlobe />
          </div>
          <p>
            Are You Ready For Sharpening Your Skillsets For Your Professional
            Life?
          </p>
        </div>
      </div>

      {/* Middle Section */}
      <div className="footer-middle">
        <div className="footer-section company-details">
          <h3>COACHDOST</h3>
          <p>
            Corporate business typically refers to large-scale mansola it
            enterprises or organizat
          </p>
        </div>

        <div className="footer-section services">
          <h3>Services</h3>
          <ul>
            <li>
              <FaCheck className="check-icon" /> Mistakes To Avoid
            </li>
            <li>
              <FaCheck className="check-icon" /> Your Startup
            </li>
            <li>
              <FaCheck className="check-icon" /> Knew About Fonts
            </li>
            <li>
              <FaCheck className="check-icon" /> Knew About Fonts
            </li>
          </ul>
        </div>

        <div className="footer-section useful-links">
          <h3>Useful Link</h3>
          <ul>
            <li>Latest News</li>
            <li>Careers</li>
            <li>General Inquiries</li>
            <li>Case Studies</li>
          </ul>
        </div>

        <div className="footer-section newsletter">
          <h3>Subscribe Our Newsletter</h3>
          <p>Corporate business typically refers to large-scale mansola it.</p>
          <div className="newsletter-input">
            <input type="email" placeholder="Enter Email" />
            <button className="subscribe-btn"></button>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p>Trams & Condition</p>
        <p>Privacy Policy</p>
        <p>Contact Us</p>
      </div>
    </footer>
  );
};

export default Footer;

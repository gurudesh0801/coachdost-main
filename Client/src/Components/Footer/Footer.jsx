import React from "react";
import "./Footer.css";
import { FaPassport, FaGlobe, FaArrowRight } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Top Section */}
      <div className="footer-top">
        <div className="footer-section">
          <div className="icon-support">
            <FaPassport />
          </div>
          <h3>NEED ANY SUPPORT?</h3>
        </div>
        <div className="footer-section">
          <div className="icon-travel">
            <FaGlobe />
          </div>
          <h3>READY TO GET STARTED?</h3>
        </div>
      </div>

      {/* Middle Section */}
      <div className="footer-middle">
        <div className="footer-column">
          <h4>COACHDOST</h4>
          <p>
            A Global Coaching Platform Offering High-quality Guidance To You,
            Anytime, Anywhere
          </p>
        </div>
        <div className="footer-column">
          <h4>Services</h4>
          <ul>
            <li>FIND COACH</li>
            <li>CORPORATE COACHING</li>
            <li>CUSTOM SESSIONS</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Useful Links</h4>
          <ul>
            <li>BLOGS</li>
            <li>SUPPORT</li>
            <li>TESTIMONIALS</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Subscribe Our Newsletter</h4>
          <div className="newsletter">
            <input type="email" placeholder="Enter Email" />
            <button>
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p>© CoachDost 2025. All Rights Reserved</p>
        <ul>
          <li>Terms & Conditions</li>
          <li>Privacy Policy</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

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
          <h3>Need Any Support For Tour And Visa?</h3>
        </div>
        <div className="footer-section">
          <div className="icon-travel">
            <FaGlobe />
          </div>
          <h3>Are You Ready For Get Started Travelling?</h3>
        </div>
      </div>

      {/* Middle Section */}
      <div className="footer-middle">
        <div className="footer-column">
          <h4>RouteX</h4>
          <p>
            Corporate business typically refers to large-scale enterprises or
            organizations.
          </p>
        </div>
        <div className="footer-column">
          <h4>Services</h4>
          <ul>
            <li>Mistakes to Avoid</li>
            <li>Your Startup</li>
            <li>Know About Funds</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Useful Links</h4>
          <ul>
            <li>Latest News</li>
            <li>Careers</li>
            <li>Case Studies</li>
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
        <p>© Yourcompany 2024. All Rights Reserved</p>
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

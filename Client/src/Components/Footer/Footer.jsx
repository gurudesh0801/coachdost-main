import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <footer class="footer">
        <div class="subscribe-section">
          <h2>Subscribe for get update every new courses</h2>
          <p>Be a part of us and get the latest information</p>
          <div class="subscribe-form">
            <input type="email" placeholder="examplemail@gmail.com" />
            <button type="button">Subscribe</button>
          </div>
        </div>
        <div class="footer-bottom">
          <button class="contact-button">Contact Us</button>
          <div class="footer-text">
            <h3>CoachDost</h3>
            <p>
              Education is a commitment to <br />
              excellence in Teaching and Learning.
            </p>
          </div>
          <div class="footer-links">
            <a href="#">Home</a>
            <a href="#">How it works</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

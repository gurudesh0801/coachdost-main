import React from "react";
import "./TestimonialCard.css";
import profileImg from "../../assets/images/Testimonial.png"; // Replace with your actual image path
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Icons for navigation buttons

const TestimonialCard = () => {
  return (
    <div className="testimonial-container">
      {/* Left Image Section */}
      <div className="testimonial-image">
        <img src={profileImg} alt="Profile" />
      </div>

      {/* Right Content Section */}
      <div className="testimonial-content">
        <span className="quote-mark">“</span>
        <p className="testimonial-text">
          We have been operating for over a decade, providing <br /> top-notch
          services to our clients and building <br /> a strong track record in
          the industry. We have <br /> been operating for over a decade,
          providing <br /> top-notch services.
        </p>
        <div className="testimonial-buttons">
          <button className="nav-btn">
            <FaArrowLeft />
          </button>
          <button className="nav-btn">
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;

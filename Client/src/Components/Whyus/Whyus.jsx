import React from "react";
import "./Whyus.css";
import image from "../../assets/images/image.png";

const Whyus = () => {
  return (
    <div className="coachDost-container" id="whyus">
      <div className="coachDost-left">
        <img
          src={image} // Replace with your image URL
          alt="Coach"
          className="coachDost-image"
        />
      </div>
      <div className="coachDost-right">
        <h1>
          Why Choose <br />
          <span>CoachDost?</span>
        </h1>
        <ul>
          <li>24/7 Access To Expert Guidance</li>
          <li>Multilingual Coaches Across Industries</li>
          <li>Safe & Private Coaching Environment</li>
          <li>End-To-End Coaching Platform</li>
        </ul>
        <button className="coachDost-button">Explore Our Coaches ➜</button>
      </div>
    </div>
  );
};

export default Whyus;

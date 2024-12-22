import React from "react";
import "./Whyus.css";
import image from "../../assets/images/save.png";
import { useNavigate } from "react-router-dom";

const Whyus = () => {
  const navigate = useNavigate();
  const goto = () => {
    navigate("/explorecoaches");
  };
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
        <h1>Why Choose CoachDost?</h1>
        <ul>
          <li>One-to-one focus</li>
          <li>Measurable Goal Setting for each session</li>
          <li>Confidentiality</li>
          <li>Action—immediate, progressive review</li>
          <li>Coach acts as a partner to help you</li>
          <li>Stretch beyond your comfort zone</li>
          <li>Accountability & Ownership</li>
        </ul>
        <button className="coachDost-button" onClick={goto}>
          Explore Our Coaches
        </button>
        <button className="coachDost-button2">
          Schedule Free Consultation
        </button>
      </div>
    </div>
  );
};

export default Whyus;

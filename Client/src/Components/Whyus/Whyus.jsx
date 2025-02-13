import React, { useEffect, useRef } from "react";
import "./Whyus.css";
import image from "../../assets/images/save.png";
import { useNavigate } from "react-router-dom";

const Whyus = () => {
  const navigate = useNavigate();
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
          }
        });
      },
      { threshold: 0.2 } // Trigger when 20% of the element is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div className="coachDost-container hidden" id="whyus" ref={sectionRef}>
      <div className="coachDost-left">
        <img src={image} alt="Coach" className="coachDost-image" />
      </div>
      <div className="coachDost-right">
        <h1 id="why_h1">Why Choose CoachDost?</h1>
        <ul>
          <li>One-to-one focus</li>
          <li>Measurable Goal Setting for each session</li>
          <li>Confidentiality</li>
          <li>Action—immediate, progressive review</li>
          <li>Coach acts as a partner to help you</li>
          <li>Stretch beyond your comfort zone</li>
          <li>Accountability & Ownership</li>
        </ul>
        <button
          className="coachDost-button"
          onClick={() => navigate("/explorecoaches")}
        >
          Explore Our Coaches
        </button>
        <button
          className="coachDost-button2"
          onClick={() => navigate("/signup")}
        >
          Join Now
        </button>
      </div>
    </div>
  );
};

export default Whyus;

import React from "react";
import { FaGlobe, FaCalendarAlt, FaBook } from "react-icons/fa";
import "./Features.css";

const Features = () => {
  const features = [
    {
      title: "Range of Highly Experienced Coaches",
      description:
        "Access a diverse selection of coaches with extensive industry experience and expertise in their specific niches.",
      icon: <FaGlobe />,
    },
    {
      title: "End-to-End Platform for Finding Your Coach",
      description:
        "Discover your ideal coach with ease using our integrated scheduler and secure payment gateway.",
      icon: <FaCalendarAlt />,
    },
    {
      title: "One Platform for All Coaching Needs",
      description:
        "A comprehensive solution to meet all your coaching-related requirements, all in one place.",
      icon: <FaBook />,
    },
  ];

  return (
    <div className="features-container">
      <h1>Unlock Your Full Potential with Personalized Coaching</h1>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <div className="feature-icon">{feature.icon}</div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
      <button className="features-button">Book a Session</button>
    </div>
  );
};

export default Features;

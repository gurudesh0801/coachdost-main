import React, { useEffect } from "react";
import "./CoreValues.css";
import {
  FaUsers,
  FaChartLine,
  FaLightbulb,
  FaHandsHelping,
} from "react-icons/fa";

const CoreValues = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          } else {
            entry.target.classList.remove("animate");
          }
        });
      },
      { threshold: 0.2 } // Adjust threshold for when the animation triggers
    );

    const elements = document.querySelectorAll(
      ".core-values-title, .value-card1"
    );
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const values = [
    {
      title: "Unwavering Support Throughout Your Journey",
      icon: <FaHandsHelping />,
    },
    { title: "Growth-Focused Development Path", icon: <FaChartLine /> },
    { title: "Knowledge-Driven Progress", icon: <FaLightbulb /> },
    { title: "Resilience-Building Approach", icon: <FaUsers /> },
  ];

  return (
    <div className="core-values-container">
      <div className="core-values-left">
        <p className="core-values-subtitle">CORE VALUES</p>
        <h1 className="core-values-title">
          Our <br /> Commitment to <br /> Your Success
        </h1>
      </div>
      <div className="core-values-right">
        {values.map((value, index) => (
          <div className="value-card1" key={index}>
            <div className="value-icon">{value.icon}</div>
            <p className="value-title">{value.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoreValues;

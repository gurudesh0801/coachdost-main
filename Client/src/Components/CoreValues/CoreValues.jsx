import React from "react";
import "./CoreValues.css";
import {
  FaUsers,
  FaChartLine,
  FaLightbulb,
  FaHandsHelping,
} from "react-icons/fa"; // Import different icons

const CoreValues = () => {
  const values = [
    {
      title: "Unwavering Support Throughout Your Journey",
      icon: <FaHandsHelping />, // Helping hands icon
    },
    {
      title: "Growth-Focused Development Path",
      icon: <FaChartLine />, // Growth chart icon
    },
    {
      title: "Knowledge-Driven Progress",
      icon: <FaLightbulb />, // Lightbulb icon for knowledge
    },
    {
      title: "Resilience-Building Approach",
      icon: <FaUsers />, // Team icon
    },
  ];

  return (
    <div className="core-values-container">
      <div className="core-values-left">
        <p className="core-values-subtitle">CORE VALUES</p>
        <h1 className="core-values-title">
          Our <br /> Commitment to Your Success
        </h1>
      </div>
      <div className="core-values-right">
        {values.map((value, index) => (
          <div className="value-card" key={index}>
            <div className="value-icon">{value.icon}</div>
            <p className="value-title">{value.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoreValues;

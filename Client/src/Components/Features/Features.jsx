import React, { useEffect, useRef } from "react";
import { FaGlobe, FaCalendarAlt, FaBook } from "react-icons/fa";
import "./Features.css";

const Features = () => {
  const featureRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible"); // Optional: remove to re-trigger on scroll up
          }
        });
      },
      { threshold: 0.2 } // Trigger animation when 20% of the element is visible
    );

    const elements = featureRef.current.querySelectorAll(
      ".features-title, .feature-card, .features-button"
    );
    elements.forEach((el) => observer.observe(el));

    return () => elements.forEach((el) => observer.unobserve(el)); // Cleanup observer
  }, []);

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
      title: "Best Online Coaching",
      description:
        "A comprehensive solution to meet all your coaching-related requirements, all in one place.",
      icon: <FaBook />,
    },
  ];

  return (
    <div className="features-container" ref={featureRef}>
      <h1 className="features-title">
        Unlock Your Full Potential with Personalized Coaching
      </h1>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <div className="feature-icon">{feature.icon}</div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
      <button className="features-button">Start Your Journey</button>
    </div>
  );
};

export default Features;

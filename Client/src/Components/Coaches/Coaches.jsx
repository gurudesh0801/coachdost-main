import React from "react";
import "./Coaches.css";

const Coaches = () => {
  const cards = [
    {
      id: 1,
      title: "Life Coaching",
      description:
        "Unlock your true potential with personalized guidance for a balanced, fulfilling life.",
      buttonText: "Book Now",
    },
    {
      id: 2,
      title: "Career Coaching",
      description:
        "Achieve your career aspirations with structured coaching for professional success.",
      buttonText: "Learn More",
    },
    {
      id: 3,
      title: "Health Coaching",
      description:
        "Optimize your health and wellness with tailored strategies and expert support.",
      buttonText: "Get Started",
    },
    {
      id: 4,
      title: "Business Coaching",
      description:
        "Grow your business with practical guidance and actionable insights.",
      buttonText: "Contact Us",
    },
    {
      id: 5,
      title: "Personal Coaching",
      description:
        "Enhance your personal growth journey with individualized coaching.",
      buttonText: "Join Now",
    },
  ];

  return (
    <div className="container">
      <h1 className="title">Explore Coaches</h1>
      <div className="carousel">
        {cards.map((card) => (
          <div className="card" key={card.id}>
            <div className="card-content">
              <h3>{card.title}</h3>
              <p>{card.description}</p>
              <button className="card-button">{card.buttonText}</button>
            </div>
          </div>
        ))}
      </div>
      <div className="controls">
        <button className="control left">◀</button>
        <button className="control right">▶</button>
      </div>
    </div>
  );
};

export default Coaches;

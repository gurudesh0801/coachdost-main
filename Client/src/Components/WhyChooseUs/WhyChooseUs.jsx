import React from "react";
import { FaClock, FaLanguage, FaLock, FaTools } from "react-icons/fa"; // Import React Icons
import "./WhyChooseUs.css"; // Import the CSS file

const WhyChooseUs = () => {
  const cards = [
    {
      title: "24/7 Access to Expert Guidance",
      icon: <FaClock />, // React Icon for clock
    },
    {
      title: "Multilingual Coaches Across Industries",
      icon: <FaLanguage />, // React Icon for languages
    },
    {
      title: "Safe & Private Coaching Environment",
      icon: <FaLock />, // React Icon for lock
    },
    {
      title: "End-to-End Coaching Platform",
      icon: <FaTools />, // React Icon for tools
    },
  ];

  return (
    <>
      <h2 className="why-choose-us-title">Why Choose CoachDost?</h2>
      <section className="why-choose-us-container">
        <div className="cards-container1">
          {cards.map((card, index) => (
            <div key={index} className="card1">
              <div className="icon">{card.icon}</div>
              <p className="card-title">{card.title}</p>
            </div>
          ))}
        </div>
        <button className="explore-button">Explore Our Platform</button>
      </section>
    </>
  );
};

export default WhyChooseUs;

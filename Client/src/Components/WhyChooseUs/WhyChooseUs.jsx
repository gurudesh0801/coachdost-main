import React, { useEffect } from "react";
import { FaClock, FaLanguage, FaLock, FaTools } from "react-icons/fa";
import "./WhyChooseUs.css";

const WhyChooseUs = () => {
  const cards = [
    { title: "24/7 Access to Expert Guidance", icon: <FaClock /> },
    { title: "Multilingual Coaches Across Industries", icon: <FaLanguage /> },
    { title: "Safe & Private Coaching Environment", icon: <FaLock /> },
    { title: "End-to-End Coaching Platform", icon: <FaTools /> },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          } else {
            entry.target.classList.remove("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = document.querySelectorAll(".card1, .explore-button12");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <>
      <h2 className="why-choose-us-title">Your Success Is Our Priority</h2>
      <section className="why-choose-us-container">
        <div className="cards-container1">
          {cards.map((card, index) => (
            <div key={index} className="card1">
              <div className="icon">{card.icon}</div>
              <p className="card-title">{card.title}</p>
            </div>
          ))}
        </div>
        <button className="explore-button1">Start Now</button>
      </section>
    </>
  );
};

export default WhyChooseUs;

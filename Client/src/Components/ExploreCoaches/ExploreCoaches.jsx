import React from "react";
import "./ExploreCoaches.css";

const ExploreCoaches = () => {
  const coaches = [
    {
      image: "https://via.placeholder.com/150",
      title: "Life Coaching",
      description:
        "Unlock your true potential with personalized guidance for a balanced, fulfilling life.",
      cta: "Book Now",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Business Coaching",
      description:
        "Achieve your business goals with expert strategies and actionable plans.",
      cta: "Learn More",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Fitness Coaching",
      description:
        "Transform your fitness journey with tailored workouts and nutritional advice.",
      cta: "Get Started",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Career Coaching",
      description:
        "Take the next step in your career with professional guidance and mentorship.",
      cta: "Discover More",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Relationship Coaching",
      description:
        "Build stronger relationships with communication skills and emotional intelligence.",
      cta: "Join Us",
    },
  ];

  return (
    <section className="explore-coaches-container">
      <p className="section-subtitle">OUR COACHES</p>
      <h2 className="section-title1">Explore Coaches</h2>
      <div className="coaches-grid">
        {coaches.map((coach, index) => (
          <div key={index} className="coach-card">
            <img
              src={coach.image}
              alt={`Coach ${index}`}
              className="coach-image"
            />
            <div className="coach-info">
              <h3 className="coach-title">{coach.title}</h3>
              <p className="coach-description">{coach.description}</p>
              <button className="coach-cta">
                {coach.cta} <span>→</span>
              </button>
            </div>
          </div>
        ))}
      </div>
      {/* Navigation Arrows */}
      <div className="navigation-arrows">
        <button className="nav-arrow left-arrow">←</button>
        <button className="nav-arrow right-arrow">→</button>
      </div>
    </section>
  );
};

export default ExploreCoaches;

import React from "react";
import "./TestimonialsCoaches.css";

const TestimonialsCoaches = () => {
  const testimonials = [
    {
      name: "Person 1",
      image: "https://via.placeholder.com/150", // Replace with real images
      description: "El purus odio sollicitudin dignissim elementum egestas.",
    },
    {
      name: "Person 2",
      image: "https://via.placeholder.com/150",
      description: "El purus odio sollicitudin dignissim elementum egestas.",
    },
    {
      name: "Person 3",
      image: "https://via.placeholder.com/150",
      description: "El purus odio sollicitudin dignissim elementum egestas.",
    },
    {
      name: "Person 4",
      image: "https://via.placeholder.com/150",
      description: "El purus odio sollicitudin dignissim elementum egestas.",
    },
  ];

  const coaches = [
    {
      country: "Canada",
      image: "https://via.placeholder.com/100", // Replace with coach image URL
      points: ["Mistakes to Avoid", "Your Startup", "Know About Fonts"],
    },
    {
      country: "Bangladesh",
      image: "https://via.placeholder.com/100",
      points: ["Mistakes to Avoid", "Your Startup", "Know About Fonts"],
    },
    {
      country: "Australia",
      image: "https://via.placeholder.com/100",
      points: ["Mistakes to Avoid", "Your Startup", "Know About Fonts"],
    },
    {
      country: "United Kingdom",
      image: "https://via.placeholder.com/100",
      points: ["Mistakes to Avoid", "Your Startup", "Know About Fonts"],
    },
  ];

  return (
    <div className="testimonials-coaches-container">
      {/* Testimonials Section */}
      <section className="testimonials-wrapper">
        <h2 className="testimonials-title">Testimonials</h2>
        <div className="testimonials-grid">
          {testimonials.map((person, index) => (
            <div key={index} className="testimonials-card">
              <img
                src={person.image}
                alt={person.name}
                className="testimonials-image"
              />
              <div className="testimonials-details">
                <h3 className="testimonials-name">{person.name}</h3>
                <p className="testimonials-description">{person.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Top Coaches Section */}
      <section className="coaches-wrapper">
        <div className="textT">
          <div className="left">
            <p className="coaches-subtitle">AVAILABLE COUNTRIES</p>
            <h2 className="coaches-title">Our Top Coaches</h2>
          </div>
          <div className="right">
            <button className="coaches-view-more-btn">View More →</button>
          </div>
        </div>
        <div className="coaches-grid">
          {coaches.map((coach, index) => (
            <div key={index} className="coaches-card">
              <img
                src={coach.image}
                alt={coach.country}
                className="coaches-image"
              />
              <div className="coaches-details">
                <h3 className="coaches-country">{coach.country}</h3>
                <ul className="coaches-points">
                  {coach.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default TestimonialsCoaches;

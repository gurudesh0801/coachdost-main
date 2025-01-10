import React from "react";
import "./ExploreCoaches.css";
import img1 from "../../assets/images/slider_img1.jpg";

const coaches = [
  {
    id: 1,
    image: img1,
    title: "Life Coaching",
    description:
      "Unlock your true potential with personalized guidance for a balanced, fulfilling life. Empower yourself to achieve goals and embrace positivity.",
    button: "Book Now",
  },
  {
    id: 2,
    image: "https://via.placeholder.com/300x400",
    title: "Language Coaching",
    description:
      "Enhance your language skills with customized lessons tailored to your learning pace and needs. Speak fluently and confidently.",
    button: "Learn More",
  },
  {
    id: 3,
    image: "https://via.placeholder.com/300x400",
    title: "Fitness Coaching",
    description:
      "Transform your body and mind with personalized fitness plans, guided workouts, and nutritional advice to achieve your health goals.",
    button: "Get Started",
  },
  {
    id: 4,
    image: "https://via.placeholder.com/300x400",
    title: "Relationship Coaching",
    description:
      "Build stronger, healthier relationships by developing communication skills, emotional intelligence, and conflict resolution strategies.",
    button: "Join Us",
  },
  {
    id: 5,
    image: "https://via.placeholder.com/300x400",
    title: "Career Coaching",
    description:
      "Advance your professional career with mentorship, guidance, and actionable strategies to achieve your dream job or promotion.",
    button: "Discover More",
  },
];

const cardsData = [
  {
    id: 1,
    country: "Career Coaching",
    image: "https://via.placeholder.com/100", // Replace with actual image URL
    topics: ["Land your dream job with personalized career guidance."],
  },
  {
    id: 2,
    country: "Startup Coaching",
    image: "https://via.placeholder.com/100", // Replace with actual image URL
    topics: [" Turn your business idea into reality with expert mentors"],
  },
  {
    id: 3,
    country: "Fitness Coaching",
    image: "https://via.placeholder.com/100", // Replace with actual image URL
    topics: ["Achieve your health and fitness goals with top coaches."],
  },
  {
    id: 4,
    country: "Language Coaching",
    image: "https://via.placeholder.com/100", // Replace with actual image URL
    topics: [" Improve your communication skills with language experts."],
  },
];
const ExploreCoaches = () => {
  return (
    <section className="explore-coaches-section">
      {/* Header */}
      <header className="explore-coaches-header">
        <div className="explore-coaches-title-section">
          <h2 className="explore-coaches-main-title">Exolore Coaches</h2>
        </div>
        <div className="explore-coaches-title-section2">
          <ul>
            <li>Life</li>
            <li>Language</li>
            <li>Relationship</li>
            <li>Fitness</li>
          </ul>
          <button className="explore-coaches-view-all-btn">
            View All Coaches
          </button>
        </div>
      </header>

      {/* Coaches Slider */}
      <div className="explore-coaches-slider">
        {coaches.map((coach) => (
          <div key={coach.id} className="explore-coach-card">
            <img
              src={coach.image}
              alt={coach.title}
              className="explore-coach-image"
            />
            <div className="explore-coach-hover-content">
              <h3 className="explore-coach-hover-title">{coach.title}</h3>
              <p className="explore-coach-hover-description">
                {coach.description}
              </p>
              <button className="explore-coach-hover-button">
                {coach.button}
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="textCont">
        <h1 className="texth1">Popular Coaching Categories</h1>
        <button className="textbtn">Explore Now</button>
      </div>
      <div className="cards-container">
        {cardsData.map((card) => (
          <div key={card.id} className="card">
            <img src={card.image} alt={card.country} className="card-image" />
            <h3 className="card-title">{card.country}</h3>
            <ul className="card-list">
              {card.topics.map((topic, index) => (
                <li key={index} className="card-list-item">
                  ✔ {topic}
                </li>
              ))}
            </ul>
            <button className="textbtn2">View More</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExploreCoaches;

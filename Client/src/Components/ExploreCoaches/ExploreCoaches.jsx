import React, { useEffect } from "react";
import "./ExploreCoaches.css";
import img1 from "../../assets/images/slider_img1.jpg";
import img2 from "../../assets/images/img3.jpg";
import img3 from "../../assets/images/img6.jpg";
import img4 from "../../assets/images/img7.jpg";
import img5 from "../../assets/images/img8.jpg";

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
    image: img2,
    title: "Language Coaching",
    description:
      "Enhance your language skills with customized lessons tailored to your learning pace and needs.",
    button: "Learn More",
  },
  {
    id: 3,
    image: img3,
    title: "Fitness Coaching",
    description:
      "Transform your body and mind with personalized fitness plans, guided workouts, and nutritional advice to achieve your health goals.",
    button: "Get Started",
  },
  {
    id: 4,
    image: img4,
    title: "Relationship Coaching",
    description:
      "Build stronger, healthier relationships by developing communication skills, emotional intelligence, and conflict resolution strategies.",
    button: "Join Us",
  },
  {
    id: 5,
    image: img5,
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
    image: img1,
    topics: ["Land your dream job with personalized career guidance."],
  },
  {
    id: 2,
    country: "Executive Coaching",
    image: img2,
    topics: ["Turn your business idea into reality with expert mentors"],
  },
  {
    id: 3,
    country: "Anger Management Coaching",
    image: img3,
    topics: ["Achieve your health and fitness goals with top coaches."],
  },
  {
    id: 4,
    country: "Self Confidence Coaching",
    image: img4,
    topics: ["Improve your communication skills with language experts."],
  },
];

const ExploreCoaches = () => {
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

    const elements = document.querySelectorAll(
      ".explore-coach-card, .card, .explore-coaches-main-title, .texth1, .textbtn"
    );
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section className="explore-coaches-section">
      {/* Header */}
      <header className="explore-coaches-header">
        <div className="explore-coaches-title-section">
          <h2 className="explore-coaches-main-title">Meet Your Coaches</h2>
        </div>
        <div className="explore-coaches-title-section2">
          <ul>
            <li>Life</li>
            <li>Self Confidence</li>
            <li>Relationship</li>
            <li>Executive</li>
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

      <div className="btnSide">
        <button className="textbtn2">
          <i className="ri-arrow-left-line"></i>
        </button>
        <button className="textbtn1">
          <i className="ri-arrow-right-line"></i>
        </button>
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
            <button className="textbtn2">VIEW MORE</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExploreCoaches;

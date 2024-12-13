import React from "react";
import "./WhoWeAre.css";

const WhoWeAre = () => {
  return (
    <div className="who-we-are">
      {/* Hero Section */}
      <div className="hero">
        <h1>A Global Coaching Platform</h1>
        <p>
          Providing high-quality, personalized guidance in a secure and
          confidential environment.
        </p>
        <button>Explore Our Platform</button>
      </div>

      {/* Key Stats */}
      <div className="key-stats">
        {[
          { number: "10k+", label: "Successful Sessions" },
          { number: "500+", label: "Expert Coaches" },
          { number: "20+", label: "Countries" },
          { number: "95%", label: "Success Rate" },
        ].map((stat, index) => (
          <div key={index} className="stat">
            <h2>{stat.number}</h2>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Core Values */}
      <div className="core-values">
        <h2>Our Core Values</h2>
        <div className="values-grid">
          {["Commitment", "Growth", "Fortitude", "Knowledge", "Synergy"].map(
            (value, index) => (
              <div key={index} className="value-card">
                {value}
              </div>
            )
          )}
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="mission-vision">
        <div className="mission">
          <h3>Our Mission</h3>
          <p>
            To make professional coaching accessible to everyone, enabling
            personal and professional growth through expert guidance and
            support.
          </p>
        </div>
        <div className="vision">
          <h3>Our Vision</h3>
          <p>
            To become the world's most trusted coaching platform, transforming
            lives through quality coaching and personalized development paths.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;

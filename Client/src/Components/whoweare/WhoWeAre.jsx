import React from "react";
import "./WhoWeAre.css";

const WhoWeAre = () => {
  return (
    <div className="who-container">
      {/* Hero Section */}
      <section className="who-hero">
        <h1 className="who-hero-title">A Global Coaching Platform</h1>
        <p className="who-hero-description">
          Providing high-quality, personalized guidance in a secure and
          confidential environment. Best Online Coaching Platforms.
        </p>
        <button className="who-hero-button">Explore Our Platform</button>
      </section>

      {/* Key Stats */}
      <section className="who-stats">
        {[
          { number: "10k+", label: "Successful Sessions" },
          { number: "500+", label: "Expert Coaches" },
          { number: "20+", label: "Countries" },
          { number: "95%", label: "Success Rate" },
        ].map((stat, index) => (
          <div key={index} className="who-stat-card">
            <h2 className="who-stat-number">{stat.number}</h2>
            <p className="who-stat-label">{stat.label}</p>
          </div>
        ))}
      </section>

      {/* Core Values */}
      <section className="who-values">
        <h2 className="who-values-title">Our Core Values</h2>
        <div className="who-values-grid">
          {["Commitment", "Growth", "Fortitude", "Knowledge", "Synergy"].map(
            (value, index) => (
              <div key={index} className="who-value-card">
                {value}
              </div>
            )
          )}
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="who-mission-vision">
        <div className="who-mission">
          <h3 className="who-mission-title">Our Mission</h3>
          <p className="who-mission-description">
            To make professional coaching accessible to everyone, enabling
            personal and professional growth through expert guidance and support
            and to make best online coaching programs.
          </p>
        </div>
        <div className="who-vision">
          <h3 className="who-vision-title">Our Vision</h3>
          <p className="who-vision-description">
            To become the world's most trusted coaching platform, transforming
            lives through quality coaching and personalized development paths.
          </p>
        </div>
      </section>
    </div>
  );
};

export default WhoWeAre;

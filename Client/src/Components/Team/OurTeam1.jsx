import React from "react";
import "./OurTeam1.css";

const OurTeam1 = () => {
  const leadershipTeam = [
    {
      name: "John Smith",
      position: "Founder & CEO",
      expertise: "Leadership Development",
      experience: "15+ years",
      achievements: "Led 500+ coaching sessions",
    },
    {
      name: "Sarah Johnson",
      position: "Head of Coaching",
      expertise: "Career Development",
      experience: "12+ years",
      achievements: "Developed coaching frameworks for 100+ coaches",
    },
    {
      name: "David Lee",
      position: "Technical Lead",
      expertise: "Platform Development",
      experience: "10+ years",
      achievements: "Built solutions for 50k+ users",
    },
  ];

  return (
    <div className="our-team-container">
      {/* Hero Section */}
      <section className="hero-section">
        <h1 className="hero-title">The Minds Behind CoachDost</h1>
        <p className="hero-description">
          Meet our team of dedicated professionals passionate about transforming
          lives through coaching.
        </p>
      </section>

      {/* Leadership Section */}
      <section className="leadership-section">
        <h2 className="leadership-title">Leadership Team</h2>
        <div className="leadership-grid">
          {leadershipTeam.map((leader) => (
            <div className="leadership-card" key={leader.name}>
              <div className="card-content">
                <h3 className="card-name">{leader.name}</h3>
                <p className="card-position">{leader.position}</p>
                <p className="card-expertise">{leader.expertise}</p>
                <p className="card-experience">{leader.experience}</p>
                <p className="card-achievements">{leader.achievements}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Culture Section */}
      <section className="culture-section">
        <h2 className="culture-title">Our Culture</h2>
        <div className="culture-grid">
          {[
            {
              title: "Innovation",
              description:
                "We push boundaries to improve the coaching experience.",
            },
            {
              title: "Collaboration",
              description: "We work together to create impactful solutions.",
            },
            {
              title: "Excellence",
              description:
                "We are committed to delivering high-quality results.",
            },
          ].map((value, index) => (
            <div className="culture-card" key={index}>
              <h3 className="culture-card-title">{value.title}</h3>
              <p className="culture-card-description">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Join Us Section */}
      <section className="join-us-section">
        <h2 className="join-us-title">Join Our Mission</h2>
        <p className="join-us-description">
          We're always looking for passionate individuals to help transform
          lives through coaching.
        </p>
        <button className="join-us-button">View Open Positions</button>
      </section>
    </div>
  );
};

export default OurTeam1;

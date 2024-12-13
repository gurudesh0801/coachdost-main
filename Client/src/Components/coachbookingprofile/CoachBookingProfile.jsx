import React, { useState } from "react";
import "./CoachBookingProfile.css";

const CoachBookingProfile = () => {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <div className="coach-profile-container">
      <div className="hero-section">
        <div className="profile-summary">
          <img src="/coach-image.jpg" alt="Coach" className="profile-image" />
          <div className="profile-info">
            <h1>Sarah Johnson</h1>
            <p>Career Coach | Leadership Expert | IELTS Trainer</p>
            <ul>
              <li>⭐ 4.9 (128 reviews)</li>
              <li>⏳ 5+ years experience</li>
              <li>🌐 English, Hindi</li>
            </ul>
            <button>Book a Session</button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="tabs">
        {["about", "experience", "sessions", "reviews"].map((tab) => (
          <button
            key={tab}
            className={activeTab === tab ? "active" : ""}
            onClick={() => setActiveTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        {activeTab === "about" && (
          <div>
            <h2>About Me</h2>
            <p>
              I help professionals navigate career transitions, develop
              leadership skills, and achieve their goals. Certified coach with
              500+ success stories.
            </p>
          </div>
        )}
        {activeTab === "sessions" && (
          <div>
            <h2>Session Packages</h2>
            <ul>
              <li>Single Session: ₹2,000</li>
              <li>5 Sessions Pack: ₹9,000</li>
              <li>10 Sessions Pack: ₹17,000</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default CoachBookingProfile;

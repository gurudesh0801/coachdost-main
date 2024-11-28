import React from "react";
import "./CoachSidebar.css";

export default function CoachSidebar({ coaches, setSelectedCoach }) {
  return (
    <div className="sidebar">
      <h2>Responses</h2>
      <div className="filter-buttons">
        <button>Unsorted</button>
        <button>Liked</button>
        <button>Disliked</button>
      </div>
      <ul className="profile-list">
        {coaches.map((coach) => (
          <li
            key={coach.id}
            className="profile-item"
            onClick={() => setSelectedCoach(coach)}
          >
            <img src={coach.img} alt={coach.name} />
            <div className="profile-info">
              <span className="name">{coach.name}</span>
              <span className="date">{coach.date}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

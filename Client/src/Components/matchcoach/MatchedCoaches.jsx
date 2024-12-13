import React, { useState } from "react";
import "./MatchedCoaches.css";

const MatchedCoaches = () => {
  const [sortBy, setSortBy] = useState("relevance");
  const [filters, setFilters] = useState({
    priceRange: "",
    availability: "",
    languages: [],
  });

  return (
    <div className="matched-coaches-container">
      {/* Header */}
      <div className="header">
        <h1>We found 15 coaches matching your requirements</h1>
        <p>Category: Career Development</p>
      </div>

      {/* Filters and Sorting */}
      <div className="filter-sort-section">
        <button className="filter-button">Filters</button>
        <select
          className="sort-select"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="relevance">Sort by: Best Match</option>
          <option value="rating">Sort by: Rating</option>
          <option value="price_low">Sort by: Price (Low to High)</option>
          <option value="price_high">Sort by: Price (High to Low)</option>
          <option value="experience">Sort by: Experience</option>
        </select>
      </div>

      {/* Content */}
      <div className="main-content">
        {/* Filters Sidebar */}
        <div className="filters">
          <h2>Refine Results</h2>
          <label>
            Price Range:
            <select
              value={filters.priceRange}
              onChange={(e) =>
                setFilters({ ...filters, priceRange: e.target.value })
              }
            >
              <option value="">Any Price</option>
              <option value="0-1000">₹0 - ₹1,000</option>
              <option value="1000-2000">₹1,000 - ₹2,000</option>
              <option value="2000+">₹2,000+</option>
            </select>
          </label>

          <label>
            Availability:
            {["Today", "This Week", "Weekends Only"].map((option) => (
              <div key={option}>
                <input type="checkbox" /> {option}
              </div>
            ))}
          </label>

          <label>
            Languages:
            {["English", "Hindi", "Spanish"].map((lang) => (
              <div key={lang}>
                <input type="checkbox" /> {lang}
              </div>
            ))}
          </label>
        </div>

        {/* Coaches Grid */}
        <div className="coaches-grid">
          {[1, 2, 3, 4, 5, 6].map((coach) => (
            <div key={coach} className="coach-card">
              <div className="coach-image"></div>
              <div className="coach-details">
                <h3>Coach {coach}</h3>
                <p>Career Development Expert</p>
                <p>5+ years experience | English, Hindi</p>
                <div className="price">₹1,500/session</div>
                <button>View Profile</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MatchedCoaches;

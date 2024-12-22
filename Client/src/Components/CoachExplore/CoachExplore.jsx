import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CoachExplore.css";
import speakerImage from "../../assets/images/slider_img1.jpg";

const CoachExplore = () => {
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 1;

  const handleNavigation = (route) => {
    navigate(route);
  };

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="coach-explore-container">
      {/* Hero Section */}
      <section className="coach-explore-hero">
        <p>
          Explore Our
          <br />
          Expert Coaches
        </p>
      </section>

      {/* Top Coaches Section */}
      <section className="top-coaches-section">
        <div className="top-coaches-header">
          <h2>Top Educational Coaches</h2>
          <div className="pagination-wrapper">
            <button
              className="pagination-button prev"
              onClick={() => handlePageClick(currentPage - 1)}
              disabled={currentPage === 1}
            >
              &lt;
            </button>
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index + 1}
                className={`pagination-button page ${
                  currentPage === index + 1 ? "active" : ""
                }`}
                onClick={() => handlePageClick(index + 1)}
              >
                {index + 1}
              </button>
            ))}
            <button
              className="pagination-button next"
              onClick={() => handlePageClick(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              &gt;
            </button>
          </div>
        </div>

        <div className="coaches-card-container">
          {["OET Coaching", "IELTS Coaching", "OET Coaching"].map(
            (title, index) => (
              <div key={index} className="coach-card">
                <div className="coach-card-image">
                  <img src={speakerImage} alt={title} />
                </div>
                <div className="coach-card-content">
                  <h3>{title}</h3>
                  <p>There are many variations of passages of engineer.</p>
                  <a href="#">Request Custom Package</a>
                </div>
              </div>
            )
          )}
        </div>
      </section>

      {/* Sidebar & Coaching List */}
      <section className="coaching-list-section">
        <div className="coaching-sidebar">
          {[
            "Life",
            "Career",
            "Relationships",
            "Skills Exam",
            "Health",
            "Self Confidence",
            "Fitness",
            "Education",
            "Money",
          ].map((category, index) => (
            <div key={index} className="sidebar-item">
              <span>{category}</span>
              <span className="sidebar-arrow">&gt;</span>
            </div>
          ))}
        </div>

        <div className="coaching-list">
          {[
            "OET Coaching",
            "IELTS Coaching",
            "TOFEL Coaching",
            "OET Coaching",
            "PTE Coaching",
            "Skills Exam",
          ].map((title, index) => (
            <div key={index} className="coaching-card">
              <img
                src={speakerImage}
                alt={title}
                className="coaching-card-image"
              />
              <div className="coaching-card-content">
                <h4>{title}</h4>
                <p>There are many variations of passages of engineer.</p>
                <a href="#">Read More →</a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CoachExplore;

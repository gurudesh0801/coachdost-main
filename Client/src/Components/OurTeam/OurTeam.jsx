import React from "react";
import "./OurTeam.css";
import teamMemberImg from "../../assets/images/ourTeamImg.png"; // Replace with your team member image

const OurTeam = () => {
  return (
    <div className="team-container">
      <h1 className="team-title">Our Team</h1>
      <div className="team-content">
        <div className="team-info">
          <div className="team-card">
            <h2 className="team-name">Courtney Henry</h2>
            <p className="team-role">Medical Assistant</p>
          </div>
          <div className="team-card">
            <h2 className="team-name">Viraj Sarade</h2>
            <p className="team-role">Marketing Coordinator</p>
          </div>
          <div className="team-card">
            <h2 className="team-name">Albert Flores</h2>
            <p className="team-role">Web Designer</p>
          </div>
        </div>
        <div className="team-image-container">
          <img src={teamMemberImg} alt="Team Member" className="team-image" />
        </div>
      </div>
    </div>
  );
};

export default OurTeam;

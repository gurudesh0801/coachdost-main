import React from "react";
import "./EducationalCoaches.css";
import img1 from "../../assets/images/slider_img1.jpg";

const EducationalCoaches = () => {
  return (
    <div className="eduCoach">
      {/* Header Section */}
      <div className="textedu">
        <div className="text1">
          <p className="supportingText">SUPPORTING COACHING</p>
          <h1 className="heading">Educational Coaches</h1>
        </div>
        <div className="text2">
          <button className="larr">&larr;</button>
          <button className="rarr">&rarr;</button>
        </div>
      </div>

      {/* Profiles Section */}
      <div className="coachesProfile">
        <div className="profile">
          <img src={img1} alt="TOFEL Coaching" className="coachImg" />
          <div className="textBox">
            <h2 className="coachTitle">TOFEL Coaching</h2>
            <p className="coachDesc">
              There are many variati of passages of engineer
            </p>
            <a href="#" className="customPackage">
              Request Custom Package
            </a>
          </div>
        </div>
        <div className="profile">
          <img src={img1} alt="IELTS Coaching" className="coachImg" />
          <div className="textBox">
            <h2 className="coachTitle">IELTS Coaching</h2>
            <p className="coachDesc">
              There are many variati of passages of engineer
            </p>
            <a href="#" className="customPackage">
              Request Custom Package
            </a>
          </div>
        </div>
        <div className="profile">
          <img src={img1} alt="OET Coaching" className="coachImg" />
          <div className="textBox">
            <h2 className="coachTitle">OET Coaching</h2>
            <p className="coachDesc">
              There are many variati of passages of engineer
            </p>
            <a href="#" className="customPackage">
              Request Custom Package
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationalCoaches;

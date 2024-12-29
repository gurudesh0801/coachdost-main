import React from "react";
import "./EducationalCoaches.css";
import img1 from "../../assets/images/image.png";
import img2 from "../../assets/images/image-1.png";
import img3 from "../../assets/images/image-2.png";

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
          <img src={img2} alt="IELTS Coaching" className="coachImg" />
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
          <img src={img3} alt="OET Coaching" className="coachImg" />
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

import React, { useEffect, useRef, useState } from "react";
import "./SkillsPage.css";
import img from "../../assets/images/image.png";

const SkillsPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  const contentRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const content = contentRef.current;
      const image = imageRef.current;
      const text = textRef.current;

      // Check if the content section is in view
      if (
        content &&
        content.getBoundingClientRect().top <= window.innerHeight * 0.8
      ) {
        setIsVisible(true);
        content.style.opacity = "1"; // Fade content in when visible
      }

      // Check if the image is in view
      if (
        image &&
        image.getBoundingClientRect().top <= window.innerHeight * 0.8
      ) {
        image.classList.add("visible"); // Apply fade-in animation
      }

      // Check if the text is in view
      if (
        text &&
        text.getBoundingClientRect().top <= window.innerHeight * 0.8
      ) {
        text.classList.add("visible"); // Apply slide-in animation for text
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="skills-page">
      <div className="content" ref={contentRef}>
        <div className="image-section">
          <img
            ref={imageRef}
            src={img}
            alt="Online Learning"
            className="laptop-image"
          />
        </div>
        <div className="text-section" ref={textRef}>
          <h1 className={`slide-in-left ${isVisible ? "visible" : ""}`}>
            We help students grow their skills
          </h1>
          <p className={`slide-in-left ${isVisible ? "visible" : ""}`}>
            In a world shaped by rapid advances in communication and technology,
            new opportunities are everywhere. At Coach Dost, we turn challenges
            into stepping stones, empowering students to thrive in an
            ever-changing educational landscape.
          </p>
          <div className="button-group">
            <button className="btn-primary">Join Now</button>
            <button className="btn-secondary">Explore Courses</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;

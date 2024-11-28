import React, { useEffect, useRef, useState } from "react";
import "./Tab.css";
import img1 from "../../assets/images/img2.png";

const Tab = () => {
  const imgRef = useRef(null);
  const textRefs = useRef([]); // Array to store multiple text element refs
  const [isImgVisible, setIsImgVisible] = useState(false);
  const [textVisibility, setTextVisibility] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === imgRef.current) {
              setIsImgVisible(true);
            } else {
              // Update visibility for text elements
              setTextVisibility((prev) => ({
                ...prev,
                [entry.target.id]: true,
              }));
            }
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    // Observe all text elements
    textRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
      textRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <div className="course-card2">
      <div className="course-content">
        <div className="card">
          <img
            src={img1}
            alt="Instructor"
            className={`card-image ${isImgVisible ? "slide-in" : ""}`}
            ref={imgRef}
          />
        </div>
        <div className="description">
          <h1
            id="title"
            ref={(el) => (textRefs.current[0] = el)} // Assign ref dynamically
            className={textVisibility["title"] ? "text-slide-in" : ""}
          >
            The quickest and effective way for learning
          </h1>
          <p
            id="paragraph"
            ref={(el) => (textRefs.current[1] = el)} // Assign ref dynamically
            className={textVisibility["paragraph"] ? "text-slide-in" : ""}
          >
            Discover a 24/7 accessible platform with experienced coaches to
            guide you every step of the way.
          </p>
          <div className="actions">
            <button className="btn join">Join course</button>
            <button className="btn read-more">Read more</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tab;

import React, { useEffect, useRef, useState } from "react";
import CoachSidebar from "./CoachSidebar";
import "./CoachProfileContainer.css";
import img1 from "../../assets/images/img2.png";
import img2 from "../../assets/images/slider_img2.jpg";
import img3 from "../../assets/images/slider_img3.jpg";
import img4 from "../../assets/images/slider_img4.jpg";
import img5 from "../../assets/images/slider_img5.jpg";
import img6 from "../../assets/images/slider_img6.jpg";
import img7 from "../../assets/images/slider_img7.jpg";
import Tab from "../Tab/Tab";

const coaches = [
  {
    id: 1,
    name: "Emily Johnson",
    date: "1h ago",
    img: img1,
  },
  { id: 2, name: "Ryan Moore", date: "29 Jun", img: img2 },
  { id: 3, name: "David Garcia", date: "29 Jun", img: img3 },
  { id: 4, name: "David Garcia2", date: "29 Jun", img: img4 },
  { id: 5, name: "David Garcia3", date: "29 Jun", img: img5 },
  { id: 6, name: "David Garcia4", date: "29 Jun", img: img6 },
  { id: 7, name: "David Garcia5", date: "29 Jun", img: img7 },
  // Add more profiles as needed
];

export default function CoachProfileContainer() {
  const [selectedCoach, setSelectedCoach] = useState(coaches[0]);
  const imgRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the image is visible
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, []);

  return (
    <>
      <div className="coach-profile-container">
        <img
          src={img1}
          alt=""
          ref={imgRef}
          className={isVisible ? "visible" : ""}
        />
        <h1>Your growth, our priority anytime, anywhere.</h1>
      </div>
    </>
  );
}

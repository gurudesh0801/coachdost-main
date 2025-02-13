import React, { useEffect, useRef } from "react";
import leftImg from "../../assets/images/leftImg.png";
import rightImg from "../../assets/images/rightIng.png";
import "./OfferSection.css";

const OfferSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    });

    sectionRef.current
      .querySelectorAll(
        ".mainCont, .leftImg, .rightSide, .leftCont, .countCont div"
      )
      .forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="mainCont">
      <div className="leftImg">
        <img src={leftImg} alt="Left Side Image" />
      </div>
      <div className="rightSide">
        <div className="text-btn">
          <div className="leftCont">
            <h1>Get our best offers quickly</h1>
            <p>
              Lorem Ipsum is simply dummy text <br /> the printing and typese
              Lorem Ipsum has been the industry's <br /> standard dummy
            </p>
            <button className="btn2">
              Contact us &nbsp; <i className="ri-arrow-right-line"></i>
            </button>
          </div>
          <div className="rightCont">
            <img src={rightImg} alt="Right Side Image" />
          </div>
        </div>
        <div className="countCont">
          <div>
            <h1>10k+</h1>
            <p>Completed Projects</p>
          </div>
          <div>
            <h1>20+</h1>
            <p>Satisfied Clients</p>
          </div>
          <div>
            <h1>5k+</h1>
            <p>Happy Customers</p>
          </div>
          <div>
            <h1>100+</h1>
            <p>Professional Coaches</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferSection;

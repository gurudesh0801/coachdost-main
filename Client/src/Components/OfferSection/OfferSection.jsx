import React from "react";
import leftImg from "../../assets/images/leftImg.png";
import rightImg from "../../assets/images/rightIng.png";
import "./OfferSection.css";

const OfferSection = () => {
  return (
    <>
      <div className="mainCont">
        <div className="leftImg">
          <img src={leftImg} alt="" />
        </div>
        <div className="rightSide">
          <div className="circle"></div>
          <div className="text-btn">
            <div className="leftCont">
              <h1>Get our best offers quickly</h1>
              <p>
                Lorem Ipsum is simply dummy text <br /> the printing and typese
                Lorem Ipsum has been the industry's <br /> standard dummy
              </p>
              <button>Contact us &rarr;</button>
            </div>
            <div className="rightCont">
              <img src={rightImg} alt="" />
            </div>
          </div>
          <div className="countCont">
            <div>
              <h1>10k+</h1>
              <p>Completed Projects</p>
            </div>
            <div>
              <h1>20+</h1>
              <p>Completed Projects</p>
            </div>
            <div>
              <h1>5k+</h1>
              <p>Completed Projects</p>
            </div>
            <div>
              <h1>100+</h1>
              <p>Completed Projects</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OfferSection;

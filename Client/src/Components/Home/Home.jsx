import React from "react";
import "./Home.css";
import heroImage from "../../assets/images/img5.png"; // Replace with the correct path
import Whyus from "../Whyus/Whyus";
import Features from "../Features/Features";
import CoreValues from "../CoreValues/CoreValues";
import Coaches from "../Coaches/Coaches";

const Home = () => {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1>
            A Global Coaching Platform Providing Confidential, Premium Guidance
            In A Secure Environment
          </h1>
          <p>
            A Safe, Private, And High-Quality Coaching Experience Accessible
            From The Comfort Of Your Home. Transform Your Life Today!
          </p>
          <button className="hero-button">Start Your Growth Journey ➔</button>
        </div>
        <div className="hero-image">
          <img src={heroImage} alt="Hero Coaches" />
        </div>
      </section>
      <Whyus />
      <Features />
      <CoreValues />
      <Coaches />
    </>
  );
};

export default Home;

import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import heroImage from "../../assets/images/img5.png";
import Whyus from "../Whyus/Whyus";
import Features from "../Features/Features";
import CoreValues from "../CoreValues/CoreValues";
import Coaches from "../ExploreCoaches/ExploreCoaches";
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs";
import TestimonialsCoaches from "../TestimonialsCoaches/TestimonialsCoaches";
import OfferSection from "../OfferSection/OfferSection";
import TestimonialCard from "../TestimonialCard/TestimonialCard";

const Home = () => {
  const navigate = useNavigate();
  const compRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = compRef.current.querySelectorAll(
      ".fade-in, .slide-in-left, .slide-in-right, .btns"
    );

    elements.forEach((el) => observer.observe(el));

    return () => elements.forEach((el) => observer.unobserve(el)); // Cleanup observer
  }, []);

  return (
    <>
      <section className="hero" ref={compRef}>
        <div className="hero-content">
          <h1 id="slider_text" className="slide-in-left">
            A Global Coaching Platform Offering High-quality Guidance To You,
            Anytime, Anywhere
          </h1>
          <p id="slider_text_p" className="slide-in-right">
            We are focused on providing a safe, private, and high-quality
            environment to people all around the world. We will provide
            high-quality coaches to the people from the comfort of their home.
          </p>
          <div className="btns">
            <button
              className="hero-button1 btn"
              onClick={() => navigate("/findcoaches")}
            >
              Start Your Growth Journey
            </button>
            <button className="hero-button2 btn">Meet Our Coaches</button>
          </div>
        </div>
        <div className="hero-image">
          <img src={heroImage} alt="Hero Coaches" className="fade-in" />
        </div>
      </section>
      <Whyus />
      <Features />
      <CoreValues />
      <WhyChooseUs />
      <Coaches />
      <OfferSection />
      <TestimonialsCoaches />
    </>
  );
};

export default Home;

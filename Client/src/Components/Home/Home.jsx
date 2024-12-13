import React from "react";
import "./Home.css";
import heroImage from "../../assets/images/img5.png"; // Replace with the correct path
import Whyus from "../Whyus/Whyus";
import Features from "../Features/Features";
import CoreValues from "../CoreValues/CoreValues";
import Coaches from "../ExploreCoaches/ExploreCoaches";
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs";
import TestimonialsCoaches from "../TestimonialsCoaches/TestimonialsCoaches";
import EducationalCoaches from "../EducationalCoaches/EducationalCoaches";
import OfferSection from "../OfferSection/OfferSection";
import OurTeam from "../OurTeam/OurTeam";
import TestimonialCard from "../TestimonialCard/TestimonialCard";

const Home = () => {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1>
            A Global Coaching Platform Offering High-quality Guidance To You,
            Anytime, Anywhere
          </h1>
          <p>
            A coaching platform focused on a providing a safe, private and high
            quality environment to people all around the world. We will provide
            high quality coaches to the people from the comfort of their home.
          </p>
          <div className="btns">
            <button className="hero-button1">
              Start Your Growth Journey ➔
            </button>
            <button className="hero-button2">Meet Our Coaches</button>
          </div>
        </div>
        <div className="hero-image">
          <img src={heroImage} alt="Hero Coaches" />
        </div>
      </section>
      <Whyus />
      <Features />
      <CoreValues />
      <WhyChooseUs />
      <Coaches />
      <TestimonialsCoaches />
      <OfferSection />
      <EducationalCoaches />
      <OurTeam />
      <TestimonialCard />
      {/* <EducationalCoaches /> */}
    </>
  );
};

export default Home;

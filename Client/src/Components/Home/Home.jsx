import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import img1 from "../../assets/images/slider_img1.jpg";
import img2 from "../../assets/images/slider_img2.jpg";
import img3 from "../../assets/images/slider_img3.jpg";
import img4 from "../../assets/images/slider_img4.jpg";
import img5 from "../../assets/images/slider_img5.jpg";
import img6 from "../../assets/images/slider_img6.jpg";
import img7 from "../../assets/images/slider_img7.jpg";
import "./Home.css";
import CoachProfileContainer from "../Coaches/CoachProfileContainer";
import Tab from "../Tab/Tab";
import FeaturesGrid from "../FeaturesGrid/FeaturesGrid";
import SkillsPage from "../SkillsPage/SkillsPage";
import Courses from "../Courses/Courses";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  const coaches = [
    { id: 1, img: img1, name: "Coach 1" },
    { id: 2, img: img2, name: "Coach 2" },
    { id: 3, img: img3, name: "Coach 3" },
    { id: 4, img: img4, name: "Coach 4" },
    { id: 5, img: img5, name: "Coach 5" },
    { id: 6, img: img6, name: "Coach 6" },
    { id: 7, img: img7, name: "Coach 7" },
  ];

  const swiperRef = useRef(null);

  const swiperSettings = {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    autoplay: {
      delay: 2000,
      disableOnInteraction: true,
    },
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 4,
      slideShadows: true,
    },
    initialSlide: Math.floor(coaches.length / 2),
    modules: [EffectCoverflow, Pagination, Autoplay],
  };

  const handleMouseEnter = () => {
    swiperRef.current?.autoplay.stop();
  };

  const handleMouseLeave = () => {
    swiperRef.current?.autoplay.start();
  };

  return (
    <>
      <section className="hero-section">
        <div className="hero-text">
          <div className="texts">
            <h1>
              <span className="coach">COACH</span>
              <span className="dost">DOST</span>
            </h1>
            <p>Your Transformation Journey Begins Here</p>
          </div>
        </div>
        <div
          className="cylindrical-container"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Swiper {...swiperSettings} className="mySwiper" ref={swiperRef}>
            {coaches.map((coach) => (
              <SwiperSlide key={coach.id}>
                <img src={coach.img} alt={coach.name} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      <CoachProfileContainer />
      <Tab />
      <FeaturesGrid />
      <SkillsPage />
      <Courses />
      <Testimonials />
    </>
  );
};

export default Home;

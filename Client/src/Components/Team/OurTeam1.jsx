import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./OurTeam1.css";

import img1 from "../../assets/images/slider_img1.jpg";
import img2 from "../../assets/images/slider_img2.jpg";

gsap.registerPlugin(ScrollTrigger);

const OurTeam1 = () => {
  useEffect(() => {
    // Hero Section Animation
    let ctx = gsap.context(() => {
      gsap.from(".hero-title", {
        opacity: 0,
        y: -50,
        duration: 1,
        ease: "power2.out",
      });

      gsap.from(".hero-description", {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power2.out",
        delay: 0.3,
      });

      // Leadership Cards Animation
      gsap.from(".leadership-card", {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".leadership-section",
          start: "top 80%",
          end: "top 50%",
          scrub: 1,
        },
      });
    });
    return () => ctx.revert();
  }, []);

  const leadershipTeam = [
    {
      name: "Tina Rattra",
      position: "Co-Founder and Strategy Head",
      image:
        "https://res.cloudinary.com/dhfl0g2hw/image/upload/v1740235635/Coachdost/h2ibtom1rhupllyiq0c9.png",
    },
    {
      name: "Kapil Joshi",
      position: "Co-Founder and Strategy Head",
      image:
        "https://res.cloudinary.com/dhfl0g2hw/image/upload/v1740235635/Coachdost/o8thxtxvkfcdoo9nfppi.png",
    },
    {
      name: "Tanvi Tepan",
      position: "Creative Head",
      image:
        "https://res.cloudinary.com/dhfl0g2hw/image/upload/v1740235635/Coachdost/ixz3gniumrwjmhmhmnyv.png",
    },
    {
      name: "Arjun Tepan",
      position: "Creative Head",
      image: img1,
    },
    {
      name: "Yash Bhosale",
      position: "CTO",
      image: img2,
    },
  ];

  return (
    <div className="our-team-container">
      {/* Hero Section */}
      <section className="hero-section">
        <h1 className="hero-title">The Minds Behind CoachDost</h1>
        <p className="hero-description">
          Meet our team of dedicated professionals passionate about transforming
          lives through coaching.
        </p>
      </section>

      {/* Leadership Section */}
      <section className="leadership-section">
        <h2 className="leadership-title">Leadership Team</h2>
        <div className="leadership-grid">
          {leadershipTeam.map((leader) => (
            <div className="leadership-card" key={leader.name}>
              <img
                src={leader.image}
                alt={leader.name}
                className="team-image"
              />
              <div className="card-content">
                <h3 className="card-name">{leader.name}</h3>
                <p className="card-position">{leader.position}</p>
                <p className="card-expertise">{leader.expertise}</p>
                <p className="card-experience">{leader.experience}</p>
                <p className="card-achievements">{leader.achievements}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default OurTeam1;

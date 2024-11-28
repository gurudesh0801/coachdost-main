import React, { useEffect, useRef, useState } from "react";
import "./FeaturesGrid.css";

const FeaturesGrid = () => {
  const features = [
    {
      title: "Expert Coaches",
      description:
        "Learn at whatever and whenever at your suitable time and place.",
    },
    {
      title: "24/7 Accessibility",
      description:
        "Work with highly experienced coaches specializing in diverse industries and languages.",
    },
    {
      title: "End-to-End Solutions",
      description:
        "A complete platform for all your coaching needs in one place.",
    },
    {
      title: "One-to-One Focus",
      description:
        "Personalized sessions designed to help you achieve your unique goals.",
    },
    {
      title: "Accountability & Ownership",
      description:
        "We partner with you to track progress and ensure consistent growth.",
    },
    {
      title: "Confidentiality",
      description: "A safe, secure space to stretch beyond your comfort zone.",
    },
  ];

  const [visibleItems, setVisibleItems] = useState({});
  const featureRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleItems((prev) => ({
              ...prev,
              [entry.target.dataset.index]: true,
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    featureRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      featureRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section id="why">
      <div className="features-grid">
        <h2 className="features-heading">Why CoachDost?</h2>
        <div className="grid1">
          {features.map((feature, index) => (
            <div
              key={index}
              ref={(el) => (featureRefs.current[index] = el)}
              data-index={index}
              className={`grid-item ${visibleItems[index] ? "slide-in" : ""}`}
              style={{ animationDelay: `${index * 0.3}s` }} // Add delay based on index
            >
              <div className="icon-circle"></div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
        <h2 className="features-lower-heading">
          Ready to transform your life? Let’s get started today!
        </h2>
      </div>
    </section>
  );
};

export default FeaturesGrid;

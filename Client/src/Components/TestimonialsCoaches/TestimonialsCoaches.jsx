import React, { useEffect, useRef } from "react";
import "./TestimonialsCoaches.css";
import img from "../../assets/images/slider_img4.jpg";

const TestimonialsCoaches = () => {
  const testimonialsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements =
      testimonialsRef.current?.querySelectorAll(".testimonial-card");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const testimonials = [
    {
      name: "PERSON 1",
      image: img,
      description:
        "Et purus duis sollicitudin dignissim habitant. Egestas nulla quis the venenatis cras sed eu",
    },
    {
      name: "PERSON 2",
      image: img,
      description:
        "Et purus duis sollicitudin dignissim habitant. Egestas nulla quis the venenatis cras sed eu",
    },
    {
      name: "PERSON 3",
      image: img,
      description:
        "Et purus duis sollicitudin dignissim habitant. Egestas nulla quis the venenatis cras sed eu",
    },
    {
      name: "PERSON 4",
      image: img,
      description:
        "Et purus duis sollicitudin dignissim habitant. Egestas nulla quis the venenatis cras sed eu",
    },
  ];

  return (
    <div className="testimonials-container">
      <h1 className="testimonials-heading">Testimonials</h1>

      <div ref={testimonialsRef} className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="testimonial-image"
            />
            <div className="testimonial-content1">
              <h3 className="testimonial-name">{testimonial.name}</h3>
              <p className="testimonial-description">
                {testimonial.description}
              </p>
              <div className="testimonial-actions">
                <button className="play-button">▶</button>
                <a href="#" className="read-more">
                  Read More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="testimonials-footer">
        <button className="join-button">JOIN THEM NOW</button>
        <button className="read-more-stories">Read More</button>
      </div>
    </div>
  );
};

export default TestimonialsCoaches;

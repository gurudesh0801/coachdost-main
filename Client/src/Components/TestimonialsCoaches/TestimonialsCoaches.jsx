import React from "react";
import "./TestimonialsCoaches.css";
import img from "../../assets/images/slider_img4.jpg";

const TestimonialsCoaches = () => {
  const testimonials = [
    {
      name: "PERSON 1",
      image: img, // Replace with actual image URL
      description:
        "Et purus duis sollicitudin dignissim habitant. Egestas nulla quis the venenatis cras sed eu",
    },
    {
      name: "PERSON 2",
      image: img, // Replace with actual image URL
      description:
        "Et purus duis sollicitudin dignissim habitant. Egestas nulla quis the venenatis cras sed eu",
    },
    {
      name: "PERSON 3",
      image: img, // Replace with actual image URL
      description:
        "Et purus duis sollicitudin dignissim habitant. Egestas nulla quis the venenatis cras sed eu",
    },
    {
      name: "PERSON 4",
      image: img, // Replace with actual image URL
      description:
        "Et purus duis sollicitudin dignissim habitant. Egestas nulla quis the venenatis cras sed eu",
    },
  ];

  return (
    <div className="testimonials-container">
      {/* Heading */}
      <h1 className="testimonials-heading">Testimonials</h1>

      {/* Testimonials Grid */}
      <div className="testimonials-grid">
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

      {/* Footer Buttons */}
      <div className="testimonials-footer">
        <button className="join-button">JOIN THEM NOW</button>
        <button className="read-more-stories">Read More</button>
      </div>
    </div>
  );
};

export default TestimonialsCoaches;

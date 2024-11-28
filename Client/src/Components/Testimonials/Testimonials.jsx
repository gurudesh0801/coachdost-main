import React from "react";
import "./Testimonials.css";
import img1 from "../../assets/images/image2.png";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Ashlesha Bhate",
      review:
        "With online learning, interactions between teachers and students will be more practical because they do not have to travel to meet",
      rating: 5,
      image: "https://via.placeholder.com/50",
    },
    {
      name: "Ishan Shimpukade",
      review:
        "With online learning, interactions between teachers and students will be more practical because they do not have to travel to meet",
      rating: 4,
      image: "https://via.placeholder.com/50",
    },
    {
      name: "Aditya Kulkarni",
      review:
        "With online learning, interactions between teachers and students will be more practical because they do not have to travel to meet",
      rating: 5,
      image: "https://via.placeholder.com/50",
    },
  ];

  return (
    <div className="testimonials-container">
      <div className="testimonials-left">
        <img src={img1} alt="Students grid" className="students-image" />
        <h1>What our student say about us</h1>
        <p>
          With CoachDost, interactions between teachers and students will be
          more practical because they do not have to travel to meet
        </p>
        <a href="#" className="see-all-reviews">
          See all reviews
        </a>
      </div>
      <div className="testimonials-right">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="testimonial-image"
            />
            <div className="testimonial-content">
              <h3>{testimonial.name}</h3>
              <p>{testimonial.review}</p>
              <div className="rating">
                {"★".repeat(testimonial.rating)}
                {"☆".repeat(5 - testimonial.rating)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;

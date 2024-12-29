// FAQ.jsx
import { useState } from "react";
import "./FAQ.css";

const FAQ = () => {
  const [openCategory, setOpenCategory] = useState("general");
  const [openQuestions, setOpenQuestions] = useState([]);

  const faqs = {
    general: {
      title: "General Questions",
      questions: [
        {
          q: "What is CoachDost?",
          a: "CoachDost is a global coaching platform connecting professionals with expert coaches.",
        },
        {
          q: "How does coaching work?",
          a: "Online sessions matched with a coach based on your goals. Sessions last 60 minutes.",
        },
      ],
    },
    sessions: {
      title: "Sessions & Booking",
      questions: [
        {
          q: "How do I book a session?",
          a: "Select your coach, choose an available time slot, and complete payment.",
        },
        {
          q: "What's the rescheduling policy?",
          a: "Free rescheduling up to 24 hours before session.",
        },
      ],
    },
    payment: {
      title: "Payment & Pricing",
      questions: [
        {
          q: "What payment methods do you accept?",
          a: "All major credit/debit cards with secure processing.",
        },
        {
          q: "Do you offer refunds?",
          a: "100% satisfaction guarantee on first session.",
        },
      ],
    },
  };

  const toggleQuestion = (id) => {
    setOpenQuestions((prev) =>
      prev.includes(id) ? prev.filter((q) => q !== id) : [...prev, id]
    );
  };

  return (
    <div className="faq-wrapper">
      <div className="faq-header">
        <h1>Frequently Asked Questions</h1>
        <div className="faq-search">
          <input
            type="text"
            placeholder="Search questions..."
            className="search-input"
          />
        </div>
      </div>

      <div className="faq-sections">
        {Object.entries(faqs).map(([category, { title, questions }]) => (
          <div key={category} className="faq-category">
            <button
              onClick={() => setOpenCategory(category)}
              className="category-toggle"
            >
              <h2>{title}</h2>
              <span className="toggle-icon">
                {openCategory === category ? "-" : "+"}
              </span>
            </button>

            {openCategory === category && (
              <div className="faq-questions">
                {questions.map((faq, index) => (
                  <div key={index} className="faq-item">
                    <button
                      onClick={() => toggleQuestion(`${category}-${index}`)}
                      className="question-toggle"
                    >
                      <span>{faq.q}</span>
                      <span className="toggle-icon">
                        {openQuestions.includes(`${category}-${index}`)
                          ? "-"
                          : "+"}
                      </span>
                    </button>

                    {openQuestions.includes(`${category}-${index}`) && (
                      <div className="faq-answer">
                        <p>{faq.a}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}

        <div className="faq-contact">
          <h3>Still have questions?</h3>
          <button className="contact-button">Contact Support</button>
        </div>
      </div>
    </div>
  );
};

export default FAQ;

import React, { useState } from "react";
import "./FAQ.css";

const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState("about");
  const [openQuestions, setOpenQuestions] = useState([]);

  const categories = {
    about: "About CoachDost",
    coaching: "Coaching Process",
    platform: "Platform & Security",
  };

  const faqData = {
    about: [
      {
        q: "What is CoachDost?",
        a: "CoachDost is a global coaching platform focused on providing a safe, private, and high-quality environment to people all around the world.",
      },
      {
        q: "What makes CoachDost unique?",
        a: "Our range of experienced coaches, end-to-end solutions, and 24/7 accessibility make us unique.",
      },
    ],
    coaching: [
      {
        q: "How does coaching work at CoachDost?",
        a: "Our coaching process focuses on one-to-one sessions, measurable goals, confidentiality, and accountability.",
      },
      {
        q: "What are CoachDost's core values?",
        a: "Our core values include commitment, growth, fortitude, knowledge sharing, and synergy.",
      },
    ],
    platform: [
      {
        q: "How do I get started with CoachDost?",
        a: "Create an account, browse coaches, book a session, and start your journey.",
      },
      {
        q: "Is my information secure?",
        a: "Yes, we prioritize privacy and employ robust security measures.",
      },
    ],
  };

  const toggleQuestion = (id) => {
    setOpenQuestions((prev) =>
      prev.includes(id) ? prev.filter((q) => q !== id) : [...prev, id]
    );
  };

  return (
    <div className="faq-container">
      <h1 className="faq-title">Frequently Asked Questions</h1>

      <div className="faq-categories">
        {Object.keys(categories).map((key) => (
          <button
            key={key}
            onClick={() => setActiveCategory(key)}
            className={`faq-category-button ${
              activeCategory === key ? "active" : ""
            }`}
          >
            {categories[key]}
          </button>
        ))}
      </div>

      <div className="faq-content">
        {faqData[activeCategory].map((faq, index) => (
          <div key={index} className="faq-item">
            <button
              onClick={() => toggleQuestion(index)}
              className="faq-question"
            >
              {faq.q}
            </button>
            {openQuestions.includes(index) && (
              <div className="faq-answer">{faq.a}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;

import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-section">
      <div className="contact-wrapper">
        <div className="contact-img-container">
          <img
            src="https://plus.unsplash.com/premium_photo-1675842663249-a8b70103dbaa?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29udGFjdCUyMHVzfGVufDB8fDB8fHww"
            alt="Contact Illustration"
            className="contact-img"
          />
        </div>
        <div className="contact-form-container">
          <h2 className="contact-title">CONTACT US</h2>
          <p className="contact-description">
            Have any questions? Feel free to reach out. We’d love to hear from
            you!
          </p>
          <form className="contact-form">
            <div className="contact-input-group">
              <input
                type="email"
                placeholder="Enter your email"
                className="contact-input"
              />
              <input
                type="text"
                placeholder="Enter your name"
                className="contact-input"
              />
            </div>
            <textarea
              placeholder="Enter your message"
              className="contact-textarea"
            ></textarea>
            <button type="submit" className="contact-button">
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

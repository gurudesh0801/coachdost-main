import React, { useState } from "react";
import "./FindCoach.css";

const FindCoach = () => {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({
    goals: [],
    preferredLanguage: "",
    sessionType: "",
    timePreference: "",
  });

  const handleNextStep = () => setStep(step + 1);
  const handlePreviousStep = () => setStep(step - 1);

  return (
    <div className="find-coach-wrapper">
      {/* Progress Bar */}
      <div className="find-coach-progress-bar">
        {["Goals", "Preferences", "Schedule", "Match"].map((label, index) => (
          <div
            key={index}
            className={`find-coach-step ${index + 1 <= step ? "active" : ""}`}
          >
            <div className="find-coach-step-circle">{index + 1}</div>
            <div className="find-coach-step-label">{label}</div>
          </div>
        ))}
      </div>

      {/* Step Content */}
      <div className="find-coach-content">
        {step === 1 && (
          <div className="find-coach-step-content">
            <h2 className="find-coach-step-title">What are your goals?</h2>
            <p className="find-coach-step-description">
              Select all that apply:
            </p>
            <div className="find-coach-options">
              {[
                "Career Development",
                "Leadership Skills",
                "Personal Growth",
                "Communication Skills",
              ].map((goal) => (
                <label
                  key={goal}
                  className={`find-coach-option ${
                    answers.goals.includes(goal) ? "selected" : ""
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={answers.goals.includes(goal)}
                    onChange={() => {
                      setAnswers((prev) => ({
                        ...prev,
                        goals: prev.goals.includes(goal)
                          ? prev.goals.filter((g) => g !== goal)
                          : [...prev.goals, goal],
                      }));
                    }}
                  />
                  {goal}
                </label>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="find-coach-step-content">
            <h2 className="find-coach-step-title">Your Preferences</h2>
            <div className="find-coach-form-group">
              <label className="find-coach-form-label">
                Preferred Language:
                <select
                  className="find-coach-select"
                  value={answers.preferredLanguage}
                  onChange={(e) =>
                    setAnswers({
                      ...answers,
                      preferredLanguage: e.target.value,
                    })
                  }
                >
                  <option value="">Select...</option>
                  <option>English</option>
                  <option>Hindi</option>
                  <option>Spanish</option>
                </select>
              </label>
              <label className="find-coach-form-label">
                Session Type:
                <select
                  className="find-coach-select"
                  value={answers.sessionType}
                  onChange={(e) =>
                    setAnswers({ ...answers, sessionType: e.target.value })
                  }
                >
                  <option value="">Select...</option>
                  <option>One-on-One</option>
                  <option>Group Sessions</option>
                </select>
              </label>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="find-coach-step-content">
            <h2 className="find-coach-step-title">
              When would you like to start?
            </h2>
            <div className="find-coach-options">
              {["As soon as possible", "Next week", "Just exploring"].map(
                (time) => (
                  <label
                    key={time}
                    className={`find-coach-option ${
                      answers.timePreference === time ? "selected" : ""
                    }`}
                  >
                    <input
                      type="radio"
                      checked={answers.timePreference === time}
                      onChange={() =>
                        setAnswers({ ...answers, timePreference: time })
                      }
                    />
                    {time}
                  </label>
                )
              )}
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="find-coach-step-content">
            <h2 className="find-coach-step-title">
              Finding Your Perfect Match!
            </h2>
            <p className="find-coach-step-description">
              Based on your preferences, we've found these coaches for you.
            </p>
            <div className="find-coach-list">
              {[1, 2, 3].map((index) => (
                <div key={index} className="find-coach-card">
                  <div className="find-coach-card-icon">C{index}</div>
                  <div>
                    <h3 className="find-coach-card-title">Coach {index}</h3>
                    <p className="find-coach-card-description">
                      Matches {90 - index * 10}% of your preferences
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Navigation Buttons */}
      <div className="find-coach-buttons">
        {step > 1 && (
          <button className="find-coach-button" onClick={handlePreviousStep}>
            Back
          </button>
        )}
        {step < 4 ? (
          <button className="find-coach-button" onClick={handleNextStep}>
            Continue
          </button>
        ) : (
          <button className="find-coach-button">Book Free Consultation</button>
        )}
      </div>
    </div>
  );
};

export default FindCoach;

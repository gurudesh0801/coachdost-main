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

  return (
    <div className="find-coach-container">
      {/* Progress Bar */}
      <div className="progress-bar">
        {["Goals", "Preferences", "Schedule", "Match"].map((label, index) => (
          <div
            key={index}
            className={`step ${index + 1 <= step ? "active" : ""}`}
          >
            <div className="step-circle">{index + 1}</div>
            <div className="step-label">{label}</div>
          </div>
        ))}
      </div>

      {/* Step Content */}
      <div className="content-container">
        {step === 1 && (
          <div className="step-content">
            <h2>What are your goals?</h2>
            <p>Select all that apply:</p>
            <div className="options">
              {[
                "Career Development",
                "Leadership Skills",
                "Personal Growth",
                "Communication Skills",
              ].map((goal) => (
                <label
                  key={goal}
                  className={`option ${
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
          <div className="step-content">
            <h2>Your Preferences</h2>
            <label>
              Preferred Language:
              <select
                value={answers.preferredLanguage}
                onChange={(e) =>
                  setAnswers({ ...answers, preferredLanguage: e.target.value })
                }
              >
                <option value="">Select...</option>
                <option>English</option>
                <option>Hindi</option>
                <option>Spanish</option>
              </select>
            </label>

            <label>
              Session Type:
              <select
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
        )}

        {step === 3 && (
          <div className="step-content">
            <h2>When would you like to start?</h2>
            {["As soon as possible", "Next week", "Just exploring"].map(
              (time) => (
                <label
                  key={time}
                  className={`option ${
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
        )}

        {step === 4 && (
          <div className="step-content">
            <h2>Finding Your Perfect Match!</h2>
            <p>Based on your preferences, we've found these coaches for you.</p>
            <div className="coach-list">
              {[1, 2, 3].map((index) => (
                <div key={index} className="coach-card">
                  <div className="coach-icon">C{index}</div>
                  <div>
                    <h3>Coach {index}</h3>
                    <p>Matches {90 - index * 10}% of your preferences</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="navigation-buttons">
          {step > 1 && <button onClick={() => setStep(step - 1)}>Back</button>}
          {step < 4 ? (
            <button onClick={() => setStep(step + 1)}>Continue</button>
          ) : (
            <button>Book Free Consultation</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default FindCoach;

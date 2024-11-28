import React, { useState, useEffect } from "react";

const FindCoach = ({ user }) => {
  const data = {
    Student: {
      options: ["Career Coaching", "Skill Development", "Mental Wellness"],
      details: {
        "Career Coaching": [
          "Interview Preparation",
          "Career Guidance",
          "Resume Building",
        ],
        "Skill Development": [
          "Coding Bootcamp",
          "Language Skills",
          "Public Speaking",
        ],
        "Mental Wellness": ["Stress Management", "Time Management", "Focus"],
      },
    },
    Professional: {
      options: ["Leadership Coaching", "Work-Life Balance", "Skill Training"],
      details: {
        "Leadership Coaching": [
          "Team Management",
          "Decision Making",
          "Conflict Resolution",
        ],
        "Work-Life Balance": ["Stress Management", "Productivity"],
        "Skill Training": [
          "Advanced Coding",
          "Project Management",
          "Sales Training",
        ],
      },
    },
    Entrepreneur: {
      options: ["Startup Coaching", "Business Expansion", "Marketing Skills"],
      details: {
        "Startup Coaching": [
          "Pitch Deck Preparation",
          "Funding Strategies",
          "Team Building",
        ],
        "Business Expansion": [
          "Scaling Strategies",
          "Market Analysis",
          "Partnership Building",
        ],
        "Marketing Skills": [
          "Social Media Marketing",
          "SEO",
          "Content Marketing",
        ],
      },
    },
  };

  const [coaches, setCoaches] = useState([]); // State to store coaches' data
  const [loading, setLoading] = useState(true); // State for loading
  const [error, setError] = useState(null); // State for error handling

  const [firstInput, setFirstInput] = useState("");
  const [secondInput, setSecondInput] = useState("");
  const [thirdInput, setThirdInput] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedCoach, setSelectedCoach] = useState(null);

  // Fetch coaches from the backend
  useEffect(() => {
    const fetchCoaches = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_BASE_URL}/api/coaches/getallcoach`
        ); // Replace with your backend API endpoint
        if (!response.ok) {
          throw new Error("Failed to fetch coaches data.");
        }
        const data = await response.json();
        setCoaches(data); // Update coaches state
        setLoading(false); // Stop loading
      } catch (err) {
        setError(err.message);
        setLoading(false); // Stop loading
      }
    };

    fetchCoaches();
  }, []);

  const handleFirstChange = (e) => {
    setFirstInput(e.target.value);
    setSecondInput("");
    setThirdInput("");
    setSelectedTime("");
    setSelectedCoach(null);
  };

  const handleSecondChange = (e) => {
    setSecondInput(e.target.value);
    setThirdInput("");
    setSelectedTime("");
    setSelectedCoach(null);
  };

  const handleBookSession = (coach) => {
    setSelectedCoach(coach);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const requestData = {
      userType: firstInput,
      coachingType: secondInput,
      focusArea: thirdInput,
      time: selectedTime,
      coach: selectedCoach,
      user: {
        id: user.id, // Include user ID
        username: user.username, // Include user's name
        email: user.email, // Include user's email
      },
    };

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/api/book-session`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestData),
        }
      );

      const result = await response.json();

      if (response.ok) {
        alert(
          `Session booked successfully! Details: ${JSON.stringify(result)}`
        );
      } else {
        alert(`Error: ${result.message}`);
      }
    } catch (error) {
      console.error("Error booking session:", error);
      alert("Failed to book session. Please try again later.");
    }
  };

  if (loading) {
    return <p className="text-white text-center">Loading coaches...</p>;
  }

  if (error) {
    return <p className="text-red-500 text-center">Error: {error}</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-white text-center mb-6">
        Book Your Coaching Session
      </h1>

      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstInput" className="block text-white mb-2 text-lg">
            I am:
          </label>
          <select
            id="firstInput"
            value={firstInput}
            onChange={handleFirstChange}
            className="w-full px-4 py-3 rounded-md bg-white text-gray-700 shadow focus:ring-2 focus:ring-purple-400"
          >
            <option value="">-- Select --</option>
            <option value="Student">Student</option>
            <option value="Professional">Professional</option>
            <option value="Entrepreneur">Entrepreneur</option>
          </select>
        </div>

        {firstInput && (
          <div>
            <label
              htmlFor="secondInput"
              className="block text-white mb-2 text-lg"
            >
              I am looking for:
            </label>
            <select
              id="secondInput"
              value={secondInput}
              onChange={handleSecondChange}
              className="w-full px-4 py-3 rounded-md bg-white text-gray-700 shadow focus:ring-2 focus:ring-purple-400"
            >
              <option value="">-- Select --</option>
              {data[firstInput].options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Focus Area */}
        {secondInput && (
          <div>
            <label
              htmlFor="thirdInput"
              className="block text-white mb-2 text-lg"
            >
              To focus on:
            </label>
            <select
              id="thirdInput"
              value={thirdInput}
              onChange={(e) => setThirdInput(e.target.value)}
              className="w-full px-4 py-3 rounded-md bg-white text-gray-700 shadow focus:ring-2 focus:ring-purple-400"
            >
              <option value="">-- Select --</option>
              {data[firstInput].details[secondInput].map((detail) => (
                <option key={detail} value={detail}>
                  {detail}
                </option>
              ))}
            </select>
          </div>
        )}
      </form>

      {/* Coaches Display */}
      {thirdInput && (
        <div className="mt-6 space-y-4">
          <h2 className="text-2xl font-bold text-white mb-4">
            Available Coaches
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {coaches
              .filter((coach) => coach.categories === secondInput)
              .map((coach) => (
                <div
                  key={coach._id}
                  className="bg-gray-600 rounded-lg shadow-md p-4 flex flex-col items-center"
                >
                  {console.log(coach)}
                  <img
                    src={coach.profilePicture}
                    alt={coach.username}
                    className="w-20 h-20 rounded-full mb-4"
                  />
                  <h3 className="text-lg font-semibold">{coach.username}</h3>
                  <p className="text-gray-600 text-center">{coach.fees}</p>
                  <button
                    onClick={() => handleBookSession(coach)}
                    className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-500"
                  >
                    Book Session
                  </button>
                </div>
              ))}
          </div>
        </div>
      )}

      {/* Time Selection */}
      {selectedCoach && (
        <form className="mt-6" onSubmit={handleSubmit}>
          <h2 className="text-2xl font-bold text-white mb-4">
            Book Session with {selectedCoach.username}
          </h2>
          <div>
            <label
              htmlFor="timeInput"
              className="block text-white mb-2 text-lg"
            >
              Select Time:
            </label>
            <input
              type="datetime-local"
              id="timeInput"
              value={selectedTime}
              onChange={(e) => setSelectedTime(e.target.value)}
              className="w-full px-4 py-3 rounded-md bg-white text-gray-700 shadow focus:ring-2 focus:ring-purple-400"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full mt-4 px-4 py-2 bg-purple-700 text-white rounded-md hover:bg-purple-600"
          >
            Confirm Booking
          </button>
        </form>
      )}
    </div>
  );
};

export default FindCoach;

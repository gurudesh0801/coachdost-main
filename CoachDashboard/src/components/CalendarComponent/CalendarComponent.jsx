// src/components/calendar/CalendarComponent.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const CalendarComponent = ({ sessions }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [days, setDays] = useState([]);

  useEffect(() => {
    const generateCalendar = (date) => {
      const startOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
      const endOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);
      const daysInMonth = [];
      const firstDay = startOfMonth.getDay(); // Day of the week (0 = Sunday, 1 = Monday, etc.)
      const numberOfDays = endOfMonth.getDate();

      // Add leading empty days for the start of the month
      for (let i = 0; i < firstDay; i++) {
        daysInMonth.push(null);
      }

      // Add the actual days of the month
      for (let day = 1; day <= numberOfDays; day++) {
        daysInMonth.push(day);
      }

      setDays(daysInMonth);
    };

    generateCalendar(currentDate);
  }, [currentDate]);

  const handlePreviousMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );
  };

  const handleNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    );
  };

  const getEventsForDate = (date) => {
    return sessions.filter((session) => {
      const sessionDate = new Date(session.date);
      return (
        sessionDate.getDate() === date &&
        sessionDate.getMonth() === currentDate.getMonth()
      );
    });
  };

  return (
    <div className="overflow-x-auto bg-gray-800 rounded-lg shadow-md">
      <div className="flex justify-between items-center p-4 bg-gray-900">
        <motion.button
          onClick={handlePreviousMonth}
          className="px-4 py-2 bg-gray-700 text-gray-100 rounded hover:bg-gray-600"
          whileHover={{ scale: 1.1 }}
        >
          Previous
        </motion.button>
        <h3 className="text-xl font-semibold text-gray-100">
          {currentDate.toLocaleString("default", { month: "long" })}{" "}
          {currentDate.getFullYear()}
        </h3>
        <motion.button
          onClick={handleNextMonth}
          className="px-4 py-2 bg-gray-700 text-gray-100 rounded hover:bg-gray-600"
          whileHover={{ scale: 1.1 }}
        >
          Next
        </motion.button>
      </div>
      <motion.div className="grid grid-cols-7 gap-2 p-4">
        {"Sun Mon Tue Wed Thu Fri Sat".split(" ").map((day) => (
          <div key={day} className="text-center font-semibold text-gray-400">
            {day}
          </div>
        ))}
        {days.map((day, index) => (
          <motion.div
            key={index}
            className={`p-4 text-center border rounded ${
              day ? "bg-gray-800 hover:bg-gray-700" : "bg-transparent"
            } ${getEventsForDate(day).length > 0 ? "border-yellow-500" : ""}`}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            role="button"
            aria-label={day ? `Date ${day}` : "Empty day"}
          >
            {day ? (
              <>
                <div className="text-white font-medium">{day}</div>
                {getEventsForDate(day).length > 0 && (
                  <div className="mt-2 text-sm text-yellow-400">
                    {getEventsForDate(day).map((event, i) => (
                      <div key={i}>{event.sessionName}</div>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <div>&nbsp;</div>
            )}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default CalendarComponent;

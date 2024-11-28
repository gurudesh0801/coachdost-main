import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const CalendarComponent = ({ sessions }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [days, setDays] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const generateCalendar = (date) => {
      const startOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
      const endOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);
      const daysInMonth = [];
      const firstDay = startOfMonth.getDay();
      const numberOfDays = endOfMonth.getDate();

      for (let i = 0; i < firstDay; i++) {
        daysInMonth.push(null);
      }

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

  const handleDateClick = (day) => {
    if (!day) return;
    const selectedDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      day
    );
    const formattedDate = selectedDate.toISOString().split("T")[0]; // Format date as YYYY-MM-DD
    navigate(`/find-coach?date=${formattedDate}`);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-4 w-full max-w-md mx-auto">
      <div className="flex justify-between items-center mb-4">
        <motion.button
          onClick={handlePreviousMonth}
          className="text-lg font-semibold text-gray-600"
          whileHover={{ scale: 1.1 }}
        >
          &lt;
        </motion.button>
        <h3 className="text-xl font-bold text-gray-800">
          {currentDate.toLocaleString("default", { month: "long" })}{" "}
          {currentDate.getFullYear()}
        </h3>
        <motion.button
          onClick={handleNextMonth}
          className="text-lg font-semibold text-gray-600"
          whileHover={{ scale: 1.1 }}
        >
          &gt;
        </motion.button>
      </div>
      <div className="grid grid-cols-7 gap-2 text-center text-gray-600 font-medium">
        {"SMTWTFS".split("").map((day) => (
          <div key={day} className="text-sm">
            {day}
          </div>
        ))}
        {days.map((day, index) => (
          <motion.div
            key={index}
            onClick={() => handleDateClick(day)}
            className={`h-12 flex items-center justify-center rounded-lg cursor-pointer ${
              day
                ? day === currentDate.getDate()
                  ? "bg-blue-500 text-white font-bold"
                  : "bg-gray-100 text-gray-800 hover:bg-blue-100"
                : ""
            }`}
            whileHover={{ scale: day ? 1.05 : 1 }}
          >
            {day || ""}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CalendarComponent;

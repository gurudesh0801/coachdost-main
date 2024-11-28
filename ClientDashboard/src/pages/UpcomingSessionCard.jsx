// src/components/UpcomingSessionCard.jsx
import React from "react";

const UpcomingSessionCard = ({ session }) => {
  return (
    <div className="bg-gray-800 border border-gray-700 p-4 rounded-md shadow-md">
      <h3 className="text-lg font-semibold text-blue-100">{session.title}</h3>
      <p className="text-sm text-gray-400">
        Date: {new Date(session.date).toDateString()}
      </p>
      <p className="text-sm text-gray-400">
        Time: {new Date(session.date).toLocaleTimeString()}
      </p>
    </div>
  );
};

export default UpcomingSessionCard;

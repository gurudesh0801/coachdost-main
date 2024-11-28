// components/sessions/SessionsTable.js
import React from "react";

const SessionsTable = ({ sessions, showApprovalActions, onApprove }) => {
  return (
    <div className="bg-gray-800 bg-opacity-75 backdrop-blur-md shadow-lg rounded-xl p-8 w-full">
      <table className="min-w-full table-auto text-gray-300">
        <thead>
          <tr>
            <th className="py-3 px-4">Session Name</th>
            <th className="py-3 px-4">Date</th>
            <th className="py-3 px-4">Time</th>
            <th className="py-3 px-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {sessions.map((session) => (
            <tr key={session._id}>
              <td className="py-3 px-4">{session.sessionName}</td>
              <td className="py-3 px-4">
                {new Date(session.date).toLocaleDateString()}
              </td>
              <td className="py-3 px-4">{session.time}</td>
              <td className="py-3 px-4">
                {showApprovalActions && (
                  <button
                    onClick={() => onApprove(session._id)}
                    className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-500 transition"
                  >
                    Approve
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SessionsTable;

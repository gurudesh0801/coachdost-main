import React from "react";

const SessionsTable = ({
  sessions,
  coachId,
  showApprovalActions,
  onApprove,
  onReject,
}) => {
  const handleApprove = async (id, studentId) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/api/coaches/approve-session`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ sessionId: id, studentId }),
        }
      );

      if (response.ok) {
        onApprove(id);
      } else {
        console.error("Failed to approve session");
      }
    } catch (error) {
      console.error("Error approving session:", error);
    }
  };

  const handleReject = async (id) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/api/sessions/reject-session`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ sessionId: id }),
        }
      );

      if (response.ok) {
        onReject(id);
      } else {
        console.error("Failed to reject session");
      }
    } catch (error) {
      console.error("Error rejecting session:", error);
    }
  };

  return (
    <div className="overflow-hidden border border-gray-700 rounded-lg bg-gray-900">
      <table className="min-w-full bg-gray-800 text-gray-200">
        <thead>
          <tr>
            <th className="px-6 py-3 border-b-2 border-gray-700 text-left text-gray-300 tracking-wider">
              Title
            </th>
            <th className="px-6 py-3 border-b-2 border-gray-700 text-left text-gray-300 tracking-wider">
              Date
            </th>
            <th className="px-6 py-3 border-b-2 border-gray-700 text-left text-gray-300 tracking-wider">
              User
            </th>
            {showApprovalActions && (
              <th className="px-6 py-3 border-b-2 border-gray-700 text-left text-gray-300 tracking-wider">
                Actions
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          {sessions
            .filter((session) => session.coach === coachId._id) // Filter sessions based on coach ID
            .map((session) => (
              <tr key={session._id} className="hover:bg-gray-700">
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-700">
                  {session.coachingType}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-700">
                  {new Date(session.time).toLocaleString()}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-700">
                  {session.user.name}
                </td>
                {showApprovalActions && (
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-700">
                    <button
                      className="text-green-400 hover:text-green-500 mr-2"
                      onClick={() =>
                        handleApprove(session._id, session.user.id)
                      }
                    >
                      Approve
                    </button>
                    <button
                      className="text-red-400 hover:text-red-500"
                      onClick={() => handleReject(session._id)}
                    >
                      Reject
                    </button>
                  </td>
                )}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default SessionsTable;

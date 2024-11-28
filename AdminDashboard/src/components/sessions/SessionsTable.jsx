// src/components/sessions/SessionsTable.jsx
const SessionsTable = ({ sessions, showApprovalActions, onApprove }) => {
  const approveSession = async (sessionId) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/api/admin/approve-session`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ sessionId }),
        }
      );
      console.log(response);
      if (response.ok) {
        onApprove(sessionId); // Call parent function to update the state
      } else {
        console.error("Failed to approve session");
      }
    } catch (error) {
      console.error("Error approving session:", error);
    }
  };
  console.log(sessions);

  return (
    <div className="overflow-x-auto bg-gray-800 rounded-lg shadow-md">
      <table className="min-w-full divide-y divide-gray-700">
        <thead className="bg-gray-900">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
              Session Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
              Date
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
              Time
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
              Subject
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
              Fees
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
              Coach Name
            </th>
            {showApprovalActions && (
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-400 uppercase tracking-wider">
                Actions
              </th>
            )}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-700">
          {sessions.map((session) => (
            <tr key={session._id}>
              <td className="px-6 py-4 text-sm text-gray-300">
                {session.sessionName}
              </td>
              <td className="px-6 py-4 text-sm text-gray-300">
                {session.date}
              </td>
              <td className="px-6 py-4 text-sm text-gray-300">
                {session.time}
              </td>
              <td className="px-6 py-4 text-sm text-gray-300">
                {session.subject}
              </td>
              <td className="px-6 py-4 text-sm text-gray-300">
                {session.fees}
              </td>
              <td className="px-6 py-4 text-sm text-gray-300">
                {session.username}
              </td>
              {showApprovalActions && (
                <td className="px-6 py-4 text-right">
                  <button
                    onClick={() => approveSession(session._id)}
                    className="text-white bg-blue-600 hover:bg-blue-500 px-3 py-2 rounded-lg text-sm"
                  >
                    Approve
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

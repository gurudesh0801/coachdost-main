import React, { useState } from "react";

const CoachesTable = ({ coaches, showApprovalActions, onApprove }) => {
  const [loading, setLoading] = useState(false); // Loading state

  const handleApprove = async (id) => {
    try {
      setLoading(true); // Show loading indicator
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/api/admin/coaches/approve/${id}`,
        { method: "PUT" }
      );
      if (!response.ok) {
        throw new Error("Failed to approve coach");
      }
      alert("Coach approved successfully and verification email sent!");
      onApprove(id); // Refresh the table or update UI accordingly
    } catch (error) {
      console.error("Error approving coach:", error);
      alert("An error occurred while approving the coach.");
    } finally {
      setLoading(false); // Hide loading indicator
    }
  };

  return (
    <div className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-700">
        <thead className="bg-gray-700">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider"
            >
              Name
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider"
            >
              Email
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider"
            >
              Phone
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider"
            >
              Categorie
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider"
            >
              Experience
            </th>
            {showApprovalActions && (
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider"
              >
                Actions
              </th>
            )}
          </tr>
        </thead>
        <tbody className="bg-gray-800 divide-y divide-gray-700">
          {coaches.map((coach) => (
            <tr
              key={coach._id}
              className="hover:bg-gray-700 transition duration-150 ease-in-out"
            >
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-100">
                {coach.username}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                {coach.email}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                {coach.phone}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                {coach.categories}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                {coach.experience}
              </td>
              {showApprovalActions && (
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  <button
                    className="text-white bg-green-500 hover:bg-green-600 px-3 py-1 rounded"
                    onClick={() => handleApprove(coach._id)}
                    disabled={loading} // Disable button while loading
                  >
                    {loading ? "Loading..." : "Approve"}
                  </button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Loading Indicator */}
      {loading && (
        <div className="mt-4 flex justify-center items-center">
          <div className="loader border-t-transparent border-4 border-gray-200 rounded-full w-8 h-8 animate-spin"></div>
          <span className="ml-2 text-gray-200">Processing...</span>
        </div>
      )}
    </div>
  );
};

export default CoachesTable;

import React from "react";

const BlogsTable = ({ blogs, showApprovalActions, onApprove, onReject }) => {
  const handleApprove = async (id) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/api/blogs/approve-blog`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ blogId: id }),
        }
      );

      if (response.ok) {
        onApprove(id);
      } else {
        console.error("Failed to approve blog");
      }
    } catch (error) {
      console.error("Error approving blog:", error);
    }
  };

  const handleReject = async (id) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/api/blogs/reject-blog`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ blogId: id }),
        }
      );

      if (response.ok) {
        onReject(id);
      } else {
        console.error("Failed to reject blog");
      }
    } catch (error) {
      console.error("Error rejecting blog:", error);
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
              Description
            </th>
            <th className="px-6 py-3 border-b-2 border-gray-700 text-left text-gray-300 tracking-wider">
              Author
            </th>
            {showApprovalActions && (
              <th className="px-6 py-3 border-b-2 border-gray-700 text-left text-gray-300 tracking-wider">
                Actions
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          {blogs.map((blog) => (
            <tr key={blog._id} className="hover:bg-gray-700">
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-700">
                {blog.title}
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-700">
                {blog.description}
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-700">
                {blog.authorId}
              </td>
              {console.log(blog.authorId, "CoachId")}
              {showApprovalActions && (
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-700">
                  <button
                    className="text-green-400 hover:text-green-500 mr-2"
                    onClick={() => handleApprove(blog._id)}
                  >
                    Approve
                  </button>
                  <button
                    className="text-red-400 hover:text-red-500"
                    onClick={() => handleReject(blog._id)}
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

export default BlogsTable;

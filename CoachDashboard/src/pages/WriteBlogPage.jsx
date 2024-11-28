import React, { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "react-toastify"; // Optional for notifications

const WriteBlogPage = ({ token, coachInfo }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    body: "",
  });
  console.log(coachInfo);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/api/blogs/submit-blog`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // Include the token for authentication if required
          },
          body: JSON.stringify({
            ...formData,
            authorId: coachInfo.id, // Attach authorId from coachInfo
          }),
        }
      );

      const result = await response.json();

      if (response.ok) {
        toast.success(result.message); // Use toast or any notification library
        setFormData({ title: "", description: "", body: "" }); // Reset form
        alert("Your Blog Approval Request has been sent to the admin!");
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      console.error("Error submitting blog:", error);
      toast.error("Something went wrong.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex-1 overflow-auto relative z-10">
      <header className="bg-gray-800 text-white p-4 text-center">
        <h1 className="text-2xl font-semibold">Write a New Blog</h1>
      </header>

      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        <motion.div
          className="bg-gray-800 p-6 rounded-xl shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-300 mb-2">Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg bg-gray-700 text-white"
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-2">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg bg-gray-700 text-white"
              ></textarea>
            </div>

            <div>
              <label className="block text-gray-300 mb-2">Body</label>
              <textarea
                name="body"
                value={formData.body}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg bg-gray-700 text-white"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-500"
            >
              {isSubmitting ? "Submitting..." : "Submit Blog for Approval"}
            </button>
          </form>
        </motion.div>
      </main>
    </div>
  );
};

export default WriteBlogPage;

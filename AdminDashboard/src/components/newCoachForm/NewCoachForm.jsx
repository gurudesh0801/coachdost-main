import { useState } from "react";
import { motion } from "framer-motion";
import Header from "../common/Header";

const NewCoachForm = ({ onAddCoach }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "Coach",
    status: "Active",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Call a function to handle adding the new coach (e.g., API call or state update)
    onAddCoach({ id: Date.now(), ...formData });

    // Reset form data
    setFormData({
      name: "",
      email: "",
      role: "Coach",
      status: "Active",
    });
  };

  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="New Coaches Entry" />
      <motion.div
        className="flex justify-center items-center min-h-screen bg-gray-900 p-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="bg-gray-800 bg-opacity-75 backdrop-blur-md shadow-lg rounded-xl p-8 w-full sm:w-96 border border-gray-700">
          <h2 className="text-2xl font-semibold text-gray-100 mb-6 text-center">
            Add New Coach
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-300 text-sm mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                placeholder="Enter name"
                className="bg-gray-700 text-white placeholder-gray-400 rounded-lg w-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              />
            </div>

            <div>
              <label className="block text-gray-300 text-sm mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder="Enter email"
                className="bg-gray-700 text-white placeholder-gray-400 rounded-lg w-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              />
            </div>

            <div>
              <label className="block text-gray-300 text-sm mb-1">Status</label>
              <select
                name="status"
                value={formData.status}
                onChange={handleInputChange}
                className="bg-gray-700 text-white rounded-lg w-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white rounded-lg px-6 py-3 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            >
              Add Coach
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default NewCoachForm;

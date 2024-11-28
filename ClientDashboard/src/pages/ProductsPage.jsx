import { useState } from "react";
import { motion } from "framer-motion";
import Header from "../components/common/Header"; // Update the path as per your project structure

const AddSessionPage = () => {
  const [formData, setFormData] = useState({
    sessionName: "",
    date: "",
    time: "",
    subject: "",
    fees: "",
  });

  const [statusMessage, setStatusMessage] = useState("");
  const [statusColor, setStatusColor] = useState("text-gray-500");
  const [isLoading, setIsLoading] = useState(false); // Loading indicator

  // Input change handler
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Form submission handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatusMessage("");
    setStatusColor("text-gray-500");
    setIsLoading(true);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/api/admin/submit-session`, // Replace with your actual API endpoint
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setStatusMessage("Session submitted successfully for admin approval!");
        setStatusColor("text-green-500");
        setFormData({
          sessionName: "",
          date: "",
          time: "",
          subject: "",
          fees: "",
        }); // Reset form
      } else {
        setStatusMessage(data.message || "Error submitting the session.");
        setStatusColor("text-red-500");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatusMessage("An error occurred while submitting the session.");
      setStatusColor("text-red-500");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="All Sessions" /> {/* Common header component */}
      <main className="flex justify-center items-center max-w-7xl mx-auto py-6 px-4 lg:px-8 ">
        <motion.div
          className="grid grid-cols-1 gap-5 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="bg-gray-800 bg-opacity-75 backdrop-blur-md shadow-lg rounded-xl p-8 w-full sm:w-96 border border-gray-700">
            <h2 className="text-2xl font-semibold text-gray-100 mb-6 text-center">
              Add a New Session
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-300 text-sm mb-2">
                  Session Name
                </label>
                <input
                  type="text"
                  name="sessionName"
                  placeholder="Session Name"
                  value={formData.sessionName}
                  onChange={handleInputChange}
                  required
                  className="bg-gray-700 text-white rounded-lg w-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                />
              </div>

              <div>
                <label className="block text-gray-300 text-sm mb-2">Date</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  required
                  className="bg-gray-700 text-white rounded-lg w-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                />
              </div>

              <div>
                <label className="block text-gray-300 text-sm mb-2">Time</label>
                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleInputChange}
                  required
                  className="bg-gray-700 text-white rounded-lg w-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                />
              </div>

              <div>
                <label className="block text-gray-300 text-sm mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="bg-gray-700 text-white rounded-lg w-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                />
              </div>

              <div>
                <label className="block text-gray-300 text-sm mb-2">Fees</label>
                <input
                  type="text"
                  name="fees"
                  placeholder="Fees"
                  value={formData.fees}
                  onChange={handleInputChange}
                  required
                  className="bg-gray-700 text-white rounded-lg w-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-blue-600 text-white rounded-lg px-6 py-3 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              >
                {isLoading ? "Submitting..." : "Submit Session for Approval"}
              </button>
            </form>
            {statusMessage && (
              <p className={`mt-4 ${statusColor} text-center text-sm`}>
                {statusMessage}
              </p>
            )}
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default AddSessionPage;

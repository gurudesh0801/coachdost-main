import { useState } from "react";
import { motion } from "framer-motion";

const Login = ({ setToken, setUser }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState(""); // New state for error messages

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/api/users/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        // Set error message if login fails
        setErrorMessage(data.message || "Login failed!");
        alert(data.message || "Login failed!");
        return;
      }

      // Handle successful login
      // console.log("Login Data Fetch", data.token);
      console.log(data);
      setToken(data.token);
      setUser(data.user);
      setErrorMessage(""); // Clear any previous error messages
      alert("Login successful!");
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage("An error occurred while logging in.");
    }
  };

  return (
    <div className="flex-1 overflow-auto relative z-10">
      <motion.div
        className="flex justify-center items-center min-h-screen bg-gray-900 p-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="bg-gray-800 bg-opacity-75 backdrop-blur-md shadow-lg rounded-xl p-8 w-full sm:w-96 border border-gray-700">
          <h2 className="text-2xl font-semibold text-gray-100 mb-6 text-center">
            User Login
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-300 text-sm mb-2">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="bg-gray-700 text-white rounded-lg w-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              />
            </div>

            <div>
              <label className="block text-gray-300 text-sm mb-2">
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                required
                className="bg-gray-700 text-white rounded-lg w-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              />
            </div>

            {/* Display error message */}
            {errorMessage && (
              <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
            )}

            <button
              type="submit"
              className="w-full bg-blue-600 text-white rounded-lg px-6 py-3 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            >
              Login
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;

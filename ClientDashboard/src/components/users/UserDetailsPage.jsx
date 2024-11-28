import React from "react";
import { motion } from "framer-motion";

const UserDetailsPage = ({ user }) => {
  // Placeholder user data if no props are provided
  const defaultUser = {
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "+1234567890",
    address: "123 Main Street, Cityville, Countryland",
    role: "Administrator",
    joinedDate: "2023-01-15",
  };

  const userDetails = user || defaultUser;
  console.log(user);

  return (
    <div className="flex-1 overflow-auto relative z-10">
      <main className="flex justify-center items-center max-w-7xl mx-auto py-6 px-4 lg:px-8">
        <motion.div
          className="bg-gray-800 bg-opacity-75 backdrop-blur-md shadow-lg rounded-xl p-8 w-full sm:w-100 border border-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-semibold text-gray-100 mb-6 text-center">
            User Details
          </h2>
          <div className="space-y-4">
            <p className="text-gray-300">
              <strong>Name:</strong> {userDetails.username}
            </p>
            <p className="text-gray-300">
              <strong>Email:</strong> {userDetails.email}
            </p>
            <p className="text-gray-300">
              <strong>Phone:</strong> {userDetails.phone}
            </p>
            <p className="text-gray-300">
              <strong>Joined:</strong> {userDetails.createdAt}
            </p>
          </div>
          <div className="mt-6">
            <button className="w-full bg-blue-600 text-white rounded-lg px-6 py-3 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300">
              Edit User Details
            </button>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default UserDetailsPage;

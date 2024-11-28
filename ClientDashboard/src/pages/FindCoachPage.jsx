import React, { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "react-toastify"; // Optional for notifications
import FindCoach from "../components/findCoach/FindCoach";

const FindCoachPage = ({ token, user }) => {
  console.log(user);
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <header className="bg-gray-800 text-white p-4 text-center">
        <h1 className="text-2xl font-semibold">Find Your CoachDost</h1>
      </header>

      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        <motion.div
          className="bg-gray-800 p-6 rounded-xl shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <section className="mt-8">
            <FindCoach user={user} />
          </section>
        </motion.div>
      </main>
    </div>
  );
};

export default FindCoachPage;

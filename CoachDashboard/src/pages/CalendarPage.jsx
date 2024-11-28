// src/pages/CalendarPage.jsx
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import CalendarComponent from "../components/CalendarComponent/CalendarComponent"; // Adjust the path as needed
import Header from "../components/common/Header";
import StatCard from "../components/common/StatCard";
import { CalendarIcon, ClockIcon, FileTextIcon } from "lucide-react";

const CalendarPage = () => {
  const [sessions, setSessions] = useState([]);
  const [totalSessions, setTotalSessions] = useState(0);
  const [sessionsToday, setSessionsToday] = useState(0);
  const [upcomingSessions, setUpcomingSessions] = useState(0);

  useEffect(() => {
    const fetchSessions = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_BASE_URL}/api/coach/approved-sessions`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch sessions data");
        }
        const data = await response.json();
        setSessions(data);

        // Calculate statistics based on the fetched sessions
        const today = new Date().toISOString().split("T")[0];
        const total = data.length;
        const todayCount = data.filter((session) => {
          const sessionDate = new Date(session.date)
            .toISOString()
            .split("T")[0];
          return sessionDate === today;
        }).length;
        const upcomingCount = data.filter((session) => {
          return new Date(session.date) > new Date();
        }).length;

        setTotalSessions(total);
        setSessionsToday(todayCount);
        setUpcomingSessions(upcomingCount);
      } catch (error) {
        console.error("Error fetching sessions data:", error);
      }
    };

    fetchSessions();
  }, []);

  return (
    <div className="flex-1 overflow-auto relative z-10 bg-gray-900 text-blue-100">
      <Header title="Calendar" />
      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        {/* STATS */}
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard
            name="Total Sessions"
            icon={CalendarIcon}
            value={totalSessions}
            color="#10B981"
          />
          <StatCard
            name="Sessions Today"
            icon={ClockIcon}
            value={sessionsToday}
            color="#F59E0B"
          />
          <StatCard
            name="Upcoming Sessions"
            icon={FileTextIcon}
            value={upcomingSessions}
            color="#3B82F6"
          />
        </motion.div>

        {/* CALENDAR */}
        <CalendarComponent sessions={sessions} />
      </main>
    </div>
  );
};

export default CalendarPage;

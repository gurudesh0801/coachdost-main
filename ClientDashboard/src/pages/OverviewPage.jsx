import React, { useState, useEffect } from "react";
import {
  BarChart2,
  ShoppingBag,
  Users,
  Zap,
  CalendarIcon,
  ClockIcon,
  FileTextIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import Header from "../components/common/Header";
import StatCard from "../components/common/StatCard";
import UserDetailsForm from "../components/users/UserDetailsForm";
import FindCoach from "../components/findCoach/FindCoach";
import UserDetailsPage from "../components/users/UserDetailsPage";
import CalendarComponent from "../components/CalendarComponent/CalendarComponent";

const OverviewPage = ({ token, user }) => {
  const [newUsers, setNewUsers] = useState(0);
  const [sessions, setSessions] = useState([]);
  const [totalSessions, setTotalSessions] = useState(0);
  const [sessionsToday, setSessionsToday] = useState(0);
  const [upcomingSessions, setUpcomingSessions] = useState(0);
  const [approvedSessions, setApprovedSessions] = useState([]);

  useEffect(() => {
    const fetchSessions = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_BASE_URL}/api/coaches/approved-sessions`
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

    const fetchApprovedSessions = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_BASE_URL}/api/coaches/book-session`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch approved sessions data");
        }
        const data = await response.json();
        const approved = data.filter(
          (session) => session.status === "Approved"
        );
        setApprovedSessions(approved);
      } catch (error) {
        console.error("Error fetching approved sessions:", error);
      }
    };

    fetchSessions();
    fetchApprovedSessions();
  }, []);

  console.log("it is in overview page", user);

  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Overview" user={user} />
      <h1 className="text-5xl m-6">Hii, {user.username}</h1>
      <main className="max-w-7xl mx-auto py-1 px-4 lg:px-8">
        <section className="mt-8 flex flex-2">
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

            {/* JOIN SESSION CARDS */}
            <motion.div
              className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              {/* {console.log(approvedSessions, "this is")} */}
              {approvedSessions
                .filter((session) => session.user.id === user.id) // Filter by matching user ID
                .map((session) => (
                  <div
                    key={session.id}
                    className="p-4 bg-white shadow rounded-md border border-gray-200"
                  >
                    <h3 className="text-lg font-bold mb-2">{session.title}</h3>
                    <p className="text-sm text-gray-600">
                      {new Date(session.date).toLocaleString()}
                    </p>
                    <p className="text-sm text-gray-600 mb-4">
                      Coach: {session.coachName}
                    </p>
                    <button
                      className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                      onClick={() => (window.location.href = session.joinLink)}
                    >
                      Join
                    </button>
                  </div>
                ))}
            </motion.div>
          </main>
          <CalendarComponent sessions={sessions} />
        </section>
      </main>
    </div>
  );
};

export default OverviewPage;

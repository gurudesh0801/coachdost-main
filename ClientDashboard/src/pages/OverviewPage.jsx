import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import moment from "moment";
moment().format();

const Overview = ({ token, user }) => {
  const [totalSessions, setTotalSessions] = useState(0);
  const [sessionsToday, setSessionsToday] = useState(0);
  const [upcomingSessions, setUpcomingSessions] = useState(0);
  const [upcomingSessionsData, setUpcomingSessionsData] = useState([]);
  const [recentActivities, setRecentActivities] = useState([]);

  // Fetch data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_BASE_URL}/api/bookings`
        );
        if (!response.ok) throw new Error("Failed to fetch data");

        const data = await response.json();

        // Filter sessions for the logged-in user
        const userSessions = data.filter(
          (session) => session.user?.id === user.id
        );

        setTotalSessions(userSessions.length);
        setSessionsToday(
          userSessions.filter(
            (session) =>
              new Date(session.time).toDateString() ===
              new Date().toDateString()
          ).length
        );
        setUpcomingSessionsData(
          userSessions.filter((session) => new Date(session.time) > new Date())
        );
        setUpcomingSessions(
          userSessions.filter((session) => new Date(session.time) > new Date())
            .length
        );

        // Filter past sessions and add them to recent activities
        const pastSessions = userSessions.filter(
          (session) => new Date(session.time) < new Date()
        );

        const activities = pastSessions.map((session) => ({
          type: "Session Completed",
          details: `${session.coachingType || "Coaching Type"} with ${
            session.coach?.username || "Coach Name"
          }`,
          time: moment(session.time).fromNow(), // Relative time (e.g., "2 days ago")
        }));

        setRecentActivities(activities);

        console.log("Filtered Data:", userSessions);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [user.id]);

  const statsCards = [
    {
      title: "Total Sessions",
      count: totalSessions,
      icon: <i className="fas fa-calendar text-emerald-500"></i>,
      borderColor: "border-l-emerald-500",
    },
    {
      title: "Sessions Today",
      count: sessionsToday,
      icon: <i className="fas fa-clock text-orange-500"></i>,
      borderColor: "border-l-orange-500",
    },
    {
      title: "Upcoming Sessions",
      count: upcomingSessions,
      icon: <i className="fas fa-calendar-alt text-blue-500"></i>,
      borderColor: "border-l-blue-500",
    },
  ];

  return (
    <div className="flex-1 overflow-auto relative z-10 bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow p-4">
        <h1 className="text-3xl text-black font-bold">Overview</h1>
      </header>

      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        {/* STATS */}
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {statsCards.map((stat, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl shadow-sm p-6 border-l-4 ${stat.borderColor}`}
            >
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-gray-600 mb-1">{stat.title}</p>
                  <h3 className="text-2xl text-black font-bold">
                    {stat.count}
                  </h3>
                </div>
                {stat.icon}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Content */}
          <motion.div
            className="col-span-2 space-y-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {/* Next Session */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-lg text-black font-bold mb-4">
                Next Sessions
              </h2>
              {upcomingSessionsData.length > 0 ? (
                upcomingSessionsData.map((session, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-purple-50 rounded-lg mb-4"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center">
                        <i className="fas fa-clock text-purple-600"></i>
                      </div>
                      <div>
                        <h3 className="font-medium text-black">
                          {session.coachingType || "Coaching Type"}
                        </h3>
                        <p className="text-sm text-gray-600">
                          with {session.coach?.username || "Coach Name"}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-black">
                        {new Date(session.time).toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </p>
                      <p className="text-sm text-gray-600">
                        {moment(session.time).format("DD/MM/YYYY")} min
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-gray-600">No upcoming sessions scheduled.</p>
              )}
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-lg font-bold text-black mb-4">
                Recent Activity
              </h2>
              <div className="space-y-4">
                {recentActivities.length > 0 ? (
                  recentActivities.map((activity, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 p-4 border rounded-lg"
                    >
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <i className="fas fa-chart-line text-blue-600"></i>
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-black">
                          {activity.type}
                        </p>
                        <p className="text-sm text-gray-600">
                          {activity.details}
                        </p>
                      </div>
                      <span className="text-sm text-gray-500">
                        {activity.time}
                      </span>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-600">No recent activity.</p>
                )}
              </div>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {/* Progress Section */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-lg text-black font-bold mb-4">Progress</h2>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-black text-sm mb-2">
                    <span>Monthly Goals</span>
                    <span>4/5 Completed</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full w-4/5 bg-green-500 rounded-full"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-black text-sm mb-2">
                    <span>Session Attendance</span>
                    <span>90%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full w-[90%] bg-purple-500 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Overview;

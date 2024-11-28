import { UserCheck, UserPlus, UsersIcon, UserX } from "lucide-react";
import { motion } from "framer-motion";

import Header from "../components/common/Header";
import StatCard from "../components/common/StatCard";
import UsersTable from "../components/users/UsersTable";
import UserGrowthChart from "../components/users/UserGrowthChart";
import UserActivityHeatmap from "../components/users/UserActivityHeatmap";
import UserDemographicsChart from "../components/users/UserDemographicsChart";
import { useEffect, useState } from "react";

const UsersPage = () => {
  const [newUsers, setNewUsers] = useState(0);
  const [totalUsersToday, setTotalUsersToday] = useState(0); // State for total users today
  const [activeUsers, setActiveUsers] = useState(0); // State for active users count

  // Fetch users count, total users for today, and active users
  useEffect(() => {
    const fetchUserStats = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_BASE_URL}/api/users` // Update with your API URL
        );
        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }
        const data = await response.json();

        // Get today's date in YYYY-MM-DD format
        const today = new Date().toISOString().split("T")[0]; // Format as YYYY-MM-DD

        // Count users whose 'createdAt' is today's date
        const usersTodayCount = data.users.filter((user) => {
          const userCreatedAt = new Date(user.createdAt)
            .toISOString()
            .split("T")[0];
          return userCreatedAt === today; // Compare with today's date
        }).length;

        // Count active users
        const activeUserCount = data.users.filter((user) => user.active).length;

        setNewUsers(data.users.length); // Total users (or modify as needed)
        setTotalUsersToday(usersTodayCount); // Set the count of users created today
        setActiveUsers(activeUserCount); // Set active users count

        console.log(data); // For debugging
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserStats();
  }, []); // Empty dependency array ensures this runs only once

  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Users" />

      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        {/* STATS */}
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard
            name="Total Users Today"
            icon={UserPlus}
            value={totalUsersToday} // Dynamically rendering the value
            color="#10B981"
          />
          <StatCard
            name="Total Users"
            icon={UsersIcon}
            value={newUsers}
            color="#10B981"
          />
          <StatCard
            name="Active Users"
            icon={UserCheck}
            value={activeUsers} // Dynamically rendering the active users count
            color="#F59E0B"
          />
          <StatCard name="Churn Rate" icon={UserX} value={0} color="#EF4444" />
        </motion.div>

        <UsersTable />

        {/* USER CHARTS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
          <UserGrowthChart />
          {/* <UserActivityHeatmap /> */}
          <UserDemographicsChart />
        </div>
      </main>
    </div>
  );
};

export default UsersPage;

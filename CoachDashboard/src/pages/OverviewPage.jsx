import { useState, useEffect } from "react";
import { BarChart2, ShoppingBag, Users, Zap } from "lucide-react";
import { motion } from "framer-motion";

import Header from "../components/common/Header";
import StatCard from "../components/common/StatCard";
import SalesOverviewChart from "../components/overview/SalesOverviewChart";
import CategoryDistributionChart from "../components/overview/CategoryDistributionChart";
import SalesChannelChart from "../components/overview/SalesChannelChart";

const OverviewPage = ({ token, coachInfo }) => {
  const [newUsers, setNewUsers] = useState(0);
  console.log(coachInfo);

  // Fetch new users count
  useEffect(() => {
    const fetchNewUsers = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_BASE_URL}/api/users`
        ); // Update with your API URL
        if (!response.ok) {
          throw new Error("Failed to fetch new users count");
        }
        const data = await response.json();
        setNewUsers(data.users.length);
        console.log(data);
      } catch (error) {
        console.error("Error fetching new users count:", error);
      }
    };

    fetchNewUsers();
  }, []); // Empty dependency array ensures this runs only once

  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Overview" coachInfo={coachInfo} />

      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        {/* STATS */}
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard
            name="Total Sales"
            icon={Zap}
            value="₹12,345"
            color="#6366F1"
          />
          <StatCard
            name="Total Users"
            icon={Users}
            value={newUsers} // Dynamically rendered from API
            color="#8B5CF6"
          />
          <StatCard
            name="Total Coaches"
            icon={ShoppingBag}
            value="567"
            color="#EC4899"
          />
          <StatCard
            name="Conversion Rate"
            icon={BarChart2}
            value="12.5%"
            color="#10B981"
          />
        </motion.div>

        {/* CHARTS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <SalesOverviewChart />
          <CategoryDistributionChart />
          <SalesChannelChart />
        </div>
      </main>
    </div>
  );
};

export default OverviewPage;

import { motion } from "framer-motion";
import {
  DollarSign,
  Users,
  ShoppingBag,
  Eye,
  ArrowDownRight,
  ArrowUpRight,
} from "lucide-react";
import { useEffect, useState } from "react";

const OverviewCards = () => {
  const [newUsers, setNewUsers] = useState(0);

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
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8">
      {/* Revenue Card */}
      <motion.div
        className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg rounded-xl p-6 border border-gray-700"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-sm font-medium text-gray-400">Revenue</h3>
            <p className="mt-1 text-xl font-semibold text-gray-100">
              $1,234,567
            </p>
          </div>
          <div className="p-3 rounded-full bg-opacity-20 bg-green-500">
            <DollarSign className="size-6 text-green-500" />
          </div>
        </div>
        <div className="mt-4 flex items-center text-green-500">
          <ArrowUpRight size="20" />
          <span className="ml-1 text-sm font-medium">12.5%</span>
          <span className="ml-2 text-sm text-gray-400">vs last period</span>
        </div>
      </motion.div>

      {/* Users Card */}
      <motion.div
        className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg rounded-xl p-6 border border-gray-700"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-sm font-medium text-gray-400">Users</h3>
            <p className="mt-1 text-xl font-semibold text-gray-100">
              {newUsers}
            </p>
          </div>
          <div className="p-3 rounded-full bg-opacity-20 bg-green-500">
            <Users className="size-6 text-green-500" />
          </div>
        </div>
        <div className="mt-4 flex items-center text-green-500">
          <ArrowUpRight size="20" />
          <span className="ml-1 text-sm font-medium">{`${newUsers}%`}</span>
          <span className="ml-2 text-sm text-gray-400">vs last period</span>
        </div>
      </motion.div>

      {/* Orders Card */}
      <motion.div
        className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg rounded-xl p-6 border border-gray-700"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-sm font-medium text-gray-400">Orders</h3>
            <p className="mt-1 text-xl font-semibold text-gray-100">9,876</p>
          </div>
          <div className="p-3 rounded-full bg-opacity-20 bg-red-500">
            <ShoppingBag className="size-6 text-red-500" />
          </div>
        </div>
        <div className="mt-4 flex items-center text-red-500">
          <ArrowDownRight size="20" />
          <span className="ml-1 text-sm font-medium">3.2%</span>
          <span className="ml-2 text-sm text-gray-400">vs last period</span>
        </div>
      </motion.div>

      {/* Page Views Card */}
      <motion.div
        className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg rounded-xl p-6 border border-gray-700"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-sm font-medium text-gray-400">Page Views</h3>
            <p className="mt-1 text-xl font-semibold text-gray-100">
              1,234,567
            </p>
          </div>
          <div className="p-3 rounded-full bg-opacity-20 bg-green-500">
            <Eye className="size-6 text-green-500" />
          </div>
        </div>
        <div className="mt-4 flex items-center text-green-500">
          <ArrowUpRight size="20" />
          <span className="ml-1 text-sm font-medium">15.7%</span>
          <span className="ml-2 text-sm text-gray-400">vs last period</span>
        </div>
      </motion.div>
    </div>
  );
};

export default OverviewCards;

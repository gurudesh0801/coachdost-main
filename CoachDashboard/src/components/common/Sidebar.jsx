import {
  BarChart2,
  DollarSign,
  Menu,
  Settings,
  ShoppingBag,
  ShoppingCart,
  TrendingUp,
  Users,
  Calendar,
} from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Sidebar = ({ setToken, coachInfo, setCoachInfo }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  // console.log(coachInfo, "Sidebar");

  return (
    <motion.div
      className={`relative z-10 transition-all duration-300 ease-in-out flex-shrink-0 ${
        isSidebarOpen ? "w-64" : "w-20"
      }`}
      animate={{ width: isSidebarOpen ? 256 : 80 }}
    >
      <div className="h-full bg-gray-800 bg-opacity-50 backdrop-blur-md p-4 flex flex-col border-r border-gray-700">
        <div className="flex items-center justify-between mb-6">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-2 rounded-full hover:bg-gray-700 transition-colors max-w-fit"
          >
            <Menu size={24} />
          </motion.button>

          {/* Greeting Section */}
          <motion.div
            className={`text-gray-100 font-medium ${
              isSidebarOpen ? "opacity-100 visible" : "opacity-0 invisible"
            } transition-all duration-300 ml-4`}
          >
            Hi, {coachInfo?.username || "Coach"}
          </motion.div>
        </div>

        <nav className="mt-8 flex-grow">
          <Link to="/">
            <motion.div className="flex items-center p-4 text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors mb-2">
              <BarChart2
                size={20}
                style={{ color: "#6366f1", minWidth: "20px" }}
              />
              {isSidebarOpen && (
                <motion.span
                  className="ml-4 whitespace-nowrap"
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: "auto" }}
                  exit={{ opacity: 0, width: 0 }}
                  transition={{ duration: 0.2, delay: 0.3 }}
                >
                  Overview
                </motion.span>
              )}
            </motion.div>
          </Link>

          <Link to="/sessions">
            <motion.div className="flex items-center p-4 text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors mb-2">
              <ShoppingBag
                size={20}
                style={{ color: "#8B5CF6", minWidth: "20px" }}
              />
              {isSidebarOpen && (
                <motion.span
                  className="ml-4 whitespace-nowrap"
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: "auto" }}
                  exit={{ opacity: 0, width: 0 }}
                  transition={{ duration: 0.2, delay: 0.3 }}
                >
                  View Sessions
                </motion.span>
              )}
            </motion.div>
          </Link>

          <Link to="/users">
            <motion.div className="flex items-center p-4 text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors mb-2">
              <Users size={20} style={{ color: "#EC4899", minWidth: "20px" }} />
              {isSidebarOpen && (
                <motion.span
                  className="ml-4 whitespace-nowrap"
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: "auto" }}
                  exit={{ opacity: 0, width: 0 }}
                  transition={{ duration: 0.2, delay: 0.3 }}
                >
                  Users
                </motion.span>
              )}
            </motion.div>
          </Link>

          <Link to="/blogpage">
            <motion.div className="flex items-center p-4 text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors mb-2">
              <Users size={20} style={{ color: "#EC4899", minWidth: "20px" }} />
              {isSidebarOpen && (
                <motion.span
                  className="ml-4 whitespace-nowrap"
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: "auto" }}
                  exit={{ opacity: 0, width: 0 }}
                  transition={{ duration: 0.2, delay: 0.3 }}
                >
                  Write Blog Page
                </motion.span>
              )}
            </motion.div>
          </Link>

          <Link to="/sales">
            <motion.div className="flex items-center p-4 text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors mb-2">
              <DollarSign
                size={20}
                style={{ color: "#10B981", minWidth: "20px" }}
              />
              {isSidebarOpen && (
                <motion.span
                  className="ml-4 whitespace-nowrap"
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: "auto" }}
                  exit={{ opacity: 0, width: 0 }}
                  transition={{ duration: 0.2, delay: 0.3 }}
                >
                  Sales
                </motion.span>
              )}
            </motion.div>
          </Link>

          <Link to="/calendar">
            <motion.div className="flex items-center p-4 text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors mb-2">
              <Calendar
                size={20}
                style={{ color: "#F59E0B", minWidth: "20px" }}
              />
              {isSidebarOpen && (
                <motion.span
                  className="ml-4 whitespace-nowrap"
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: "auto" }}
                  exit={{ opacity: 0, width: 0 }}
                  transition={{ duration: 0.2, delay: 0.3 }}
                >
                  Calendar
                </motion.span>
              )}
            </motion.div>
          </Link>

          <Link to="/analytics">
            <motion.div className="flex items-center p-4 text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors mb-2">
              <TrendingUp
                size={20}
                style={{ color: "#3B82F6", minWidth: "20px" }}
              />
              {isSidebarOpen && (
                <motion.span
                  className="ml-4 whitespace-nowrap"
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: "auto" }}
                  exit={{ opacity: 0, width: 0 }}
                  transition={{ duration: 0.2, delay: 0.3 }}
                >
                  Analytics
                </motion.span>
              )}
            </motion.div>
          </Link>

          <Link to="/settings">
            <motion.div className="flex items-center p-4 text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors mb-2">
              <Settings
                size={20}
                style={{ color: "#6EE7B7", minWidth: "20px" }}
              />
              {isSidebarOpen && (
                <motion.span
                  className="ml-4 whitespace-nowrap"
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: "auto" }}
                  exit={{ opacity: 0, width: 0 }}
                  transition={{ duration: 0.2, delay: 0.3 }}
                >
                  Settings
                </motion.span>
              )}
            </motion.div>
          </Link>

          <Link to="/newcoachform">
            <motion.div className="flex items-center p-4 text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors mb-2">
              <Settings
                size={20}
                style={{ color: "#ffff", minWidth: "20px" }}
              />
              {isSidebarOpen && (
                <motion.span
                  className="ml-4 whitespace-nowrap"
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: "auto" }}
                  exit={{ opacity: 0, width: 0 }}
                  transition={{ duration: 0.2, delay: 0.3 }}
                >
                  New Coach Form
                </motion.span>
              )}
            </motion.div>
          </Link>

          <button
            onClick={() => {
              setToken("");
              setCoachInfo("");
              localStorage.removeItem("token"); // Clear token from localStorage
              localStorage.removeItem("coachInfo"); // Clear coachInfo from localStorage
            }}
          >
            <motion.div className="flex items-center p-4 text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors mb-2">
              <Settings
                size={20}
                style={{ color: "#0073ff", minWidth: "20px" }}
              />
              {isSidebarOpen && (
                <motion.span
                  className="ml-4 whitespace-nowrap"
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: "auto" }}
                  exit={{ opacity: 0, width: 0 }}
                  transition={{ duration: 0.2, delay: 0.3 }}
                >
                  Logout
                </motion.span>
              )}
            </motion.div>
          </button>
        </nav>
      </div>
    </motion.div>
  );
};

export default Sidebar;

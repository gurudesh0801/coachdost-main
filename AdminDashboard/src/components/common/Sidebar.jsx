import {
  BarChart2,
  DollarSign,
  Menu,
  Settings,
  ShoppingBag,
  ShoppingCart,
  TrendingUp,
  Users,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Sidebar = ({ setToken }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isCoachesDropdownOpen, setIsCoachesDropdownOpen] = useState(false);

  return (
    <motion.div
      className={`relative z-10 transition-all duration-300 ease-in-out flex-shrink-0 ${
        isSidebarOpen ? "w-64" : "w-20"
      }`}
      animate={{ width: isSidebarOpen ? 256 : 80 }}
    >
      <div className="h-full bg-gray-800 bg-opacity-50 backdrop-blur-md p-4 flex flex-col border-r border-gray-700">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2 rounded-full hover:bg-gray-700 transition-colors max-w-fit"
        >
          <Menu size={24} />
        </motion.button>

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

          {/* Users Link */}
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

          {/* Dropdown for Coaches */}
          <div>
            <motion.div
              className="flex items-center p-4 text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors mb-2 cursor-pointer"
              onClick={() => setIsCoachesDropdownOpen(!isCoachesDropdownOpen)}
            >
              <Users size={20} style={{ color: "#10B981", minWidth: "20px" }} />
              {isSidebarOpen && (
                <>
                  <motion.span
                    className="ml-4 whitespace-nowrap"
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: "auto" }}
                    exit={{ opacity: 0, width: 0 }}
                    transition={{ duration: 0.2, delay: 0.3 }}
                  >
                    Coaches
                  </motion.span>
                  <span className="ml-auto">
                    {isCoachesDropdownOpen ? (
                      <ChevronUp size={16} />
                    ) : (
                      <ChevronDown size={16} />
                    )}
                  </span>
                </>
              )}
            </motion.div>

            {isCoachesDropdownOpen && (
              <motion.div
                className="ml-8 text-sm text-gray-300"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  to="/unapproved"
                  className="block py-2 px-4 rounded-lg hover:bg-gray-700"
                >
                  All Coaches
                </Link>
                <Link
                  to="/unapproved-session"
                  className="block py-2 px-4 rounded-lg hover:bg-gray-700"
                >
                  Sessions
                </Link>
                <Link
                  to="/unapproved-blogs"
                  className="block py-2 px-4 rounded-lg hover:bg-gray-700"
                >
                  Blogs
                </Link>
              </motion.div>
            )}
          </div>

          {/* Remaining Links */}
          <Link to="/products">
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
                  Products
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

          <Link to="/orders">
            <motion.div className="flex items-center p-4 text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors mb-2">
              <ShoppingCart
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
                  Orders
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

          <button onClick={() => setToken("")}>
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

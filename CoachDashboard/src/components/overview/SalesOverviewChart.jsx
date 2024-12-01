import React, { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { motion } from "framer-motion";

const SalesOverviewChart = ({ token, coachInfo }) => {
  console.log(coachInfo, "CoachInfo");
  const [interval, setInterval] = useState("day"); // Default to daily view
  const [data, setData] = useState([]); // Chart data

  const fetchChartData = async () => {
    if (!coachInfo?._id) {
      console.error("Coach information is not available");
      return;
    }

    try {
      const response = await fetch(
        `${
          import.meta.env.VITE_API_BASE_URL
        }/api/coaches/book-session-chart?interval=${interval}&coachId=${
          coachInfo._id
        }`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`, // Include token in headers
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`Failed to fetch data: ${response.statusText}`);
      }

      const chartData = await response.json();
      console.log(chartData);
      setData(chartData); // Update the chart data state
    } catch (error) {
      console.error("Error fetching chart data:", error);
    }
  };

  useEffect(() => {
    fetchChartData();
  }, [interval, coachInfo?._id]); // Fetch data whenever interval or coachInfo._id changes

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-full mt-8 text-center"
    >
      <h2 className="mb-6 text-2xl font-bold text-gray-700">
        Approved Sessions Chart
      </h2>
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-4"
      >
        <div className="flex items-center justify-center">
          <label
            htmlFor="interval"
            className="mr-4 text-lg font-medium text-gray-600"
          >
            View by:
          </label>
          <select
            id="interval"
            onChange={(e) => setInterval(e.target.value)}
            value={interval}
            className="px-4 py-2 text-black border rounded-lg shadow-sm"
          >
            <option value="day">Day</option>
            <option value="month">Month</option>
            <option value="year">Year</option>
          </select>
        </div>
      </motion.div>
      <div className="w-full h-96">
        <ResponsiveContainer>
          <LineChart
            data={data}
            margin={{ top: 20, right: 20, left: 0, bottom: 0 }}
          >
            <CartesianGrid stroke="#e2e8f0" strokeDasharray="5 5" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="count"
              stroke="#4f46e5"
              strokeWidth={2}
              dot={{ r: 5 }}
              activeDot={{ r: 8 }}
              animationBegin={0}
              animationDuration={800}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default SalesOverviewChart;

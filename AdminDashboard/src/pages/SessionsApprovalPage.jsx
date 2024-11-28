import { Clock, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import Header from "../components/common/Header";
import StatCard from "../components/common/StatCard";
import SessionsTable from "../components/sessions/SessionsTable"; // Table to show session details
import { useEffect, useState } from "react";

const SessionsApprovalPage = ({}) => {
  const [unapprovedSessions, setUnapprovedSessions] = useState([]);
  const [totalUnapproved, setTotalUnapproved] = useState(0);
  const [totalApproved, setTotalApproved] = useState(0); // New state for approved count

  // Fetch unapproved sessions
  const fetchUnapprovedSessions = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/api/admin/pending`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch unapproved sessions");
      }
      const result = await response.json();
      console.log(result);
      setUnapprovedSessions(result || []);
      setTotalUnapproved(result?.length || 0);
    } catch (error) {
      console.error("Error fetching unapproved sessions:", error);
    }
  };

  // Fetch approved sessions count
  const fetchApprovedCount = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/api/admin/approved-sessions`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch approved sessions count");
      }
      const result = await response.json();
      console.log(result);
      setTotalApproved(result.length || 0); // Set approved count
    } catch (error) {
      console.error("Error fetching approved sessions count:", error);
    }
  };

  useEffect(() => {
    fetchUnapprovedSessions(); // Fetch unapproved sessions once on mount
    fetchApprovedCount(); // Fetch approved sessions count once on mount
  }, []);

  const handleApprovalUpdate = (id) => {
    // Update state after approving a session
    setUnapprovedSessions((prev) =>
      prev.filter((session) => session._id !== id)
    );
    setTotalUnapproved((prev) => prev - 1);
    setTotalApproved((prev) => prev + 1); // Update approved count after approving a session
  };

  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Sessions Approval" />

      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        {/* Display stats */}
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard
            name="Unapproved Sessions"
            icon={Clock}
            value={totalUnapproved}
            color="#F59E0B"
          />
          <StatCard
            name="Approved Sessions"
            icon={CheckCircle}
            value={totalApproved} // Display the approved sessions count
            color="#10B981"
          />
        </motion.div>

        {/* Show unapproved sessions */}
        <SessionsTable
          sessions={unapprovedSessions}
          showApprovalActions={true}
          onApprove={handleApprovalUpdate}
          coach
        />
      </main>
    </div>
  );
};

export default SessionsApprovalPage;

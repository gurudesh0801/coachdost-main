import { Calendar, XCircle } from "lucide-react";
import { motion } from "framer-motion";
import Header from "../components/common/Header";
import StatCard from "../components/common/StatCard";
import SessionsTable from "../components/sessions/SessionsTable";
import { useEffect, useState } from "react";

const UnapprovedSessionsPage = ({ token, coachInfo }) => {
  const [unapprovedSessions, setUnapprovedSessions] = useState([]);
  const [totalUnapproved, setTotalUnapproved] = useState(0);
  const [totalApproved, setTotalApproved] = useState(0);

  // Fetch unapproved sessions
  const fetchUnapprovedSessions = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/api/coaches/pending-requests`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch unapproved sessions");
      }
      const result = await response.json();

      // Access data array properly
      setUnapprovedSessions(result || []);
      console.log();
      setTotalUnapproved(
        result?.filter((session) => session.coach === coachInfo._id).length || 0
      );
    } catch (error) {
      console.error("Error fetching unapproved sessions:", error);
    }
  };

  useEffect(() => {
    fetchUnapprovedSessions(); // Fetch once on mount
  }, [coachInfo]);

  const handleApprovalUpdate = (id) => {
    // Update state after approving or rejecting a session
    setUnapprovedSessions((prev) =>
      prev.filter((session) => session._id !== id)
    );
    setTotalUnapproved((prev) => prev - 1);
  };

  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Unapproved Sessions" />

      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard
            name="Unapproved Sessions"
            icon={XCircle}
            value={totalUnapproved}
            color="#EF4444"
          />
          <StatCard
            name="Approved Sessions"
            icon={Calendar}
            value={0} // Adjust dynamically if needed
            color="#10B981"
          />
        </motion.div>

        <SessionsTable
          sessions={unapprovedSessions}
          coachId={coachInfo} // Pass logged-in coach ID
          showApprovalActions={true}
          onApprove={handleApprovalUpdate}
          onReject={handleApprovalUpdate}
        />
      </main>
    </div>
  );
};

export default UnapprovedSessionsPage;

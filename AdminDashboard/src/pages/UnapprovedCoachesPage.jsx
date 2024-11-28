import { UserX, UserCheck } from "lucide-react";
import { motion } from "framer-motion";
import Header from "../components/common/Header";
import StatCard from "../components/common/StatCard";
import CoachesTable from "../components/coaches/CoachesTable";
import { useEffect, useState } from "react";

const UnapprovedCoachesPage = () => {
  const [unapprovedCoaches, setUnapprovedCoaches] = useState([]);
  const [totalUnapproved, setTotalUnapproved] = useState(0);

  // Fetch unapproved coaches
  const fetchUnapprovedCoaches = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/api/admin/coaches/unapproved`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch unapproved coaches");
      }
      const result = await response.json();

      // Access data array properly
      setUnapprovedCoaches(result.data || []);
      console.log(result.data);
      setTotalUnapproved(result.data?.length || 0);
    } catch (error) {
      console.error("Error fetching unapproved coaches:", error);
    }
  };

  useEffect(() => {
    fetchUnapprovedCoaches(); // Fetch once on mount
  }, []);

  const handleApprovalUpdate = (id) => {
    // Update state after approving a coach
    setUnapprovedCoaches((prev) => prev.filter((coach) => coach._id !== id));
    setTotalUnapproved((prev) => prev - 1);
  };

  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Unapproved Coaches" />

      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard
            name="Unapproved Coaches"
            icon={UserX}
            value={totalUnapproved}
            color="#EF4444"
          />
          <StatCard
            name="Approved Coaches"
            icon={UserCheck}
            value={0}
            color="#10B981"
          />
        </motion.div>

        <CoachesTable
          coaches={unapprovedCoaches}
          showApprovalActions={true}
          onApprove={handleApprovalUpdate}
        />
      </main>
    </div>
  );
};

export default UnapprovedCoachesPage;

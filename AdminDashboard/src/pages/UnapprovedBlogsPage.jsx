import { BookOpen, XCircle } from "lucide-react";
import { motion } from "framer-motion";
import Header from "../components/common/Header";
import StatCard from "../components/common/StatCard";
import BlogsTable from "../components/blogs/BlogsTable";
import { useEffect, useState } from "react";

const UnapprovedBlogsPage = () => {
  const [unapprovedBlogs, setUnapprovedBlogs] = useState([]);
  const [totalUnapproved, setTotalUnapproved] = useState(0);

  // Fetch unapproved blogs
  const fetchUnapprovedBlogs = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/api/blogs/unapproved`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch unapproved blogs");
      }
      const result = await response.json();

      // Access data array properly
      setUnapprovedBlogs(result.data || []);
      setTotalUnapproved(result.data?.length || 0);
    } catch (error) {
      console.error("Error fetching unapproved blogs:", error);
    }
  };

  useEffect(() => {
    fetchUnapprovedBlogs(); // Fetch once on mount
  }, []);

  const handleApprovalUpdate = (id) => {
    // Update state after approving or rejecting a blog
    setUnapprovedBlogs((prev) => prev.filter((blog) => blog._id !== id));
    setTotalUnapproved((prev) => prev - 1);
  };

  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Unapproved Blogs" />

      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard
            name="Unapproved Blogs"
            icon={XCircle}
            value={totalUnapproved}
            color="#EF4444"
          />
          <StatCard
            name="Approved Blogs"
            icon={BookOpen}
            value={0} // Adjust dynamically if needed
            color="#10B981"
          />
        </motion.div>

        <BlogsTable
          blogs={unapprovedBlogs}
          showApprovalActions={true}
          onApprove={handleApprovalUpdate}
          onReject={handleApprovalUpdate}
        />
      </main>
    </div>
  );
};

export default UnapprovedBlogsPage;

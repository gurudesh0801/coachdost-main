import { Route, Routes, useLocation } from "react-router-dom";

import Sidebar from "./components/common/Sidebar";

import OverviewPage from "./pages/OverviewPage";
import UsersPage from "./pages/UsersPage";
import SalesPage from "./pages/SalesPage";
import AnalyticsPage from "./pages/AnalyticsPage";
import SettingsPage from "./pages/SettingsPage";
import { useEffect, useState } from "react";
import Login from "./components/login/Login";
import WriteBlogPage from "./pages/WriteBlogPage";
import CalendarPage from "./pages/CalendarPage";
import UnapprovedSessionsPage from "./pages/UnapprovedSessionsPage ";

function App() {
  const location = useLocation();
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [coach, setCoach] = useState(
    localStorage.getItem("coach")
      ? JSON.parse(localStorage.getItem("coach"))
      : null
  );
  console.log("Name is Prasad");

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const urlToken = params.get("token");
    const urlCoach = params.get("coach");
    console.log("This is Coach", coach);

    if (urlToken) {
      setToken(urlToken);
      localStorage.setItem("token", urlToken);
    }

    if (urlCoach) {
      try {
        const parsedCoach = JSON.parse(decodeURIComponent(urlCoach));
        setCoach(parsedCoach);
        localStorage.setItem("coach", JSON.stringify(parsedCoach));
      } catch (err) {
        console.error("Failed to parse user data from URL:", err);
      }
    }
  }, [location.search]);

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
    }

    if (coach) {
      localStorage.setItem("coach", JSON.stringify(coach));
    }
  }, [token, coach]);

  return (
    <>
      <div className="flex h-screen bg-gray-900 text-gray-100 overflow-hidden">
        <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-80" />
          <div className="absolute inset-0 backdrop-blur-sm" />
        </div>

        <Sidebar setToken={setToken} coach={coach} setCoach={setCoach} />
        <Routes>
          <Route
            path="/"
            element={<OverviewPage token={token} coach={coach} />}
          />
          <Route
            path="/users"
            element={<UsersPage token={token} coach={coach} />}
          />
          <Route
            path="/sales"
            element={<SalesPage token={token} coach={coach} />}
          />
          <Route
            path="/calendar"
            element={<CalendarPage token={token} coach={coach} />}
          />
          <Route path="/analytics" element={<AnalyticsPage token={token} />} />
          <Route
            path="/settings"
            element={<SettingsPage token={token} coach={coach} />}
          />
          <Route
            path="/blogpage"
            element={<WriteBlogPage token={token} coach={coach} />}
          />
          <Route
            path="/sessions"
            element={<UnapprovedSessionsPage token={token} coach={coach} />}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;

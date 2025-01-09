import { Route, Routes } from "react-router-dom";

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
  const [token, setToken] = useState(
    sessionStorage.getItem("token") ? sessionStorage.getItem("token") : ""
  );
  const [coach, setCoach] = useState(
    sessionStorage.getItem("coach")
      ? JSON.parse(sessionStorage.getItem("coach"))
      : ""
  );
  // console.log(coachInfo, "App");

  useEffect(() => {
    sessionStorage.setItem("token", token);

    // Store coachInfo properly as a JSON string
    if (coach) {
      sessionStorage.setItem("coach", JSON.stringify(coach));
    }
  }, [token, coach]);
  console.log(coach, "App.jsx");

  return (
    <>
      {token === "" ? (
        <Login setToken={setToken} setCoach={setCoach} />
      ) : (
        <div className="flex h-screen bg-gray-900 text-gray-100 overflow-hidden">
          {/* BG */}
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
            <Route
              path="/analytics"
              element={<AnalyticsPage token={token} />}
            />
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
      )}
    </>
  );
}

export default App;

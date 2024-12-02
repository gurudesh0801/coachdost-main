import { Route, Routes } from "react-router-dom";

import Sidebar from "./components/common/Sidebar";

import OverviewPage from "./pages/OverviewPage";
import UsersPage from "./pages/UsersPage";
import SalesPage from "./pages/SalesPage";
import AnalyticsPage from "./pages/AnalyticsPage";
import SettingsPage from "./pages/SettingsPage";
import NewCoachForm from "./components/sessions/SessionsTable";
import { useEffect, useState } from "react";
import Login from "./components/login/Login";
import WriteBlogPage from "./pages/WriteBlogPage";
import CalendarPage from "./pages/CalendarPage";
import UnapprovedSessionsPage from "./pages/UnapprovedSessionsPage ";

function App() {
  const [token, setToken] = useState(
    sessionStorage.getItem("token") ? sessionStorage.getItem("token") : ""
  );
  const [coachInfo, setCoachInfo] = useState(
    sessionStorage.getItem("coachInfo")
      ? JSON.parse(sessionStorage.getItem("coachInfo"))
      : ""
  );
  // console.log(coachInfo, "App");

  useEffect(() => {
    sessionStorage.setItem("token", token);

    // Store coachInfo properly as a JSON string
    if (coachInfo) {
      sessionStorage.setItem("coachInfo", JSON.stringify(coachInfo));
    }
  }, [token, coachInfo]);
  console.log(coachInfo, "App.jsx");

  return (
    <>
      {token === "" ? (
        <Login setToken={setToken} setCoachInfo={setCoachInfo} />
      ) : (
        <div className="flex h-screen bg-gray-900 text-gray-100 overflow-hidden">
          {/* BG */}
          <div className="fixed inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-80" />
            <div className="absolute inset-0 backdrop-blur-sm" />
          </div>

          <Sidebar
            setToken={setToken}
            coachInfo={coachInfo}
            setCoachInfo={setCoachInfo}
          />
          <Routes>
            <Route
              path="/"
              element={<OverviewPage token={token} coachInfo={coachInfo} />}
            />
            <Route
              path="/sessions"
              element={
                <UnapprovedSessionsPage token={token} coachInfo={coachInfo} />
              }
            />
            <Route
              path="/users"
              element={<UsersPage token={token} coachInfo={coachInfo} />}
            />
            <Route
              path="/sales"
              element={<SalesPage token={token} coachInfo={coachInfo} />}
            />
            <Route
              path="/calendar"
              element={<CalendarPage token={token} coachInfo={coachInfo} />}
            />
            <Route
              path="/analytics"
              element={<AnalyticsPage token={token} />}
            />
            <Route
              path="/settings"
              element={<SettingsPage token={token} coachInfo={coachInfo} />}
            />
            <Route
              path="/blogpage"
              element={<WriteBlogPage token={token} coachInfo={coachInfo} />}
            />
          </Routes>
        </div>
      )}
    </>
  );
}

export default App;

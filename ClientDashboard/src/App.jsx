import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import Sidebar from "./components/common/Sidebar";
import OverviewPage from "./pages/OverviewPage";
import ProductsPage from "./pages/ProductsPage";
import UsersPage from "./pages/UsersPage";
import SalesPage from "./pages/SalesPage";
import OrdersPage from "./pages/OrdersPage";
import AnalyticsPage from "./pages/AnalyticsPage";
import SettingsPage from "./pages/SettingsPage";
import TotalSessionsPage from "./pages/UpcomingSessionCard";
import FindCoachPage from "./pages/FindCoachPage";

function App() {
  const location = useLocation();
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [user, setUser] = useState(
    localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null
  );
  console.log("Name is Prasad");

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const urlToken = params.get("token");
    const urlUser = params.get("user");
    console.log(urlToken);

    if (urlToken) {
      setToken(urlToken);
      localStorage.setItem("token", urlToken);
    }

    if (urlUser) {
      try {
        const parsedUser = JSON.parse(decodeURIComponent(urlUser));
        setUser(parsedUser);
        localStorage.setItem("user", JSON.stringify(parsedUser));
      } catch (err) {
        console.error("Failed to parse user data from URL:", err);
      }
    }
  }, [location.search]);

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
    }

    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    }
  }, [token, user]);

  return (
    <>
      <div className="flex h-screen bg-gray-900 text-gray-100 overflow-hidden">
        <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-80" />
          <div className="absolute inset-0 backdrop-blur-sm" />
        </div>

        <Sidebar setToken={setToken} user={user} setUser={setUser} />
        <Routes>
          <Route
            path="/"
            element={<OverviewPage token={token} user={user} />}
          />
          <Route
            path="/products"
            element={<ProductsPage token={token} user={user} />}
          />
          <Route
            path="/users"
            element={<UsersPage token={token} user={user} />}
          />
          <Route
            path="/sales"
            element={<SalesPage token={token} user={user} />}
          />
          <Route
            path="/orders"
            element={<OrdersPage token={token} user={user} />}
          />
          <Route path="/analytics" element={<AnalyticsPage token={token} />} />
          <Route
            path="/settings"
            element={<SettingsPage token={token} user={user} />}
          />
          <Route
            path="/find-coach"
            element={<FindCoachPage token={token} user={user} />}
          />
          <Route
            path="/total-sessions"
            element={<TotalSessionsPage token={token} user={user} />}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;

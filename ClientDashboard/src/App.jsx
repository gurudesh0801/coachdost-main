import { Route, Routes } from "react-router-dom";

import Sidebar from "./components/common/Sidebar";

import OverviewPage from "./pages/OverviewPage";
import ProductsPage from "./pages/ProductsPage";
import UsersPage from "./pages/UsersPage";
import SalesPage from "./pages/SalesPage";
import OrdersPage from "./pages/OrdersPage";
import AnalyticsPage from "./pages/AnalyticsPage";
import SettingsPage from "./pages/SettingsPage";
import { useEffect, useState } from "react";
import Login from "./components/login/Login";
import TotalSessionsPage from "./pages/UpcomingSessionCard";
import FindCoachPage from "./pages/FindCoachPage";

function App() {
  const [token, setToken] = useState(
    localStorage.getItem("token") ? localStorage.getItem("token") : ""
  );
  const [user, setUser] = useState(
    localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : ""
  );
  console.log(user);

  useEffect(() => {
    localStorage.setItem("token", token);

    // Store user properly as a JSON string
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    }
  }, [token, user]);
  return (
    <>
      {token === "" ? (
        <Login setToken={setToken} setUser={setUser} />
      ) : (
        <div className="flex h-screen bg-gray-900 text-gray-100 overflow-hidden">
          {/* BG */}
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
            <Route
              path="/analytics"
              element={<AnalyticsPage token={token} />}
            />
            <Route
              path="/settings"
              element={<SettingsPage token={token} user={user} />}
            />
            <Route
              path="/find-coach"
              element={<FindCoachPage token={token} user={user} />}
            />
            <Route
              path="/newcoachform"
              element={<NewCoachForm token={token} user={user} />}
            />
            <Route
              path="/total-sessions"
              element={<TotalSessionsPage token={token} user={user} />}
            />
          </Routes>
        </div>
      )}
    </>
  );
}

export default App;

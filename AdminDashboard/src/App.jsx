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
import Login from "./components/login/login";
import UnapprovedCoachesPage from "./pages/UnapprovedCoachesPage";
import SessionsApprovalPage from "./pages/SessionsApprovalPage";
import UnapprovedBlogsPage from "./pages/UnapprovedBlogsPage";

function App() {
  const [token, setToken] = useState(
    localStorage.getItem("token") ? localStorage.getItem("token") : ""
  );

  useEffect(() => {
    localStorage.setItem("token", token);
  }, [token]);

  return (
    <>
      {token === "" ? (
        <Login setToken={setToken} />
      ) : (
        <div className="flex h-screen bg-gray-900 text-gray-100 overflow-hidden">
          {/* BG */}
          <div className="fixed inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-80" />
            <div className="absolute inset-0 backdrop-blur-sm" />
          </div>

          <Sidebar setToken={setToken} />
          <Routes>
            <Route path="/" element={<OverviewPage token={token} />} />
            <Route path="/products" element={<ProductsPage token={token} />} />
            <Route path="/users" element={<UsersPage token={token} />} />
            <Route path="/sales" element={<SalesPage token={token} />} />
            <Route path="/orders" element={<OrdersPage token={token} />} />
            <Route
              path="/analytics"
              element={<AnalyticsPage token={token} />}
            />
            <Route
              path="/unapproved"
              element={<UnapprovedCoachesPage />}
              token={token}
            />
            <Route
              path="/unapproved-session"
              element={<SessionsApprovalPage />}
              token={token}
            />
            <Route
              path="/unapproved-blogs"
              element={<UnapprovedBlogsPage />}
              token={token}
            />
            <Route path="/settings" element={<SettingsPage token={token} />} />
            <Route
              path="/newcoachform"
              element={<NewCoachForm token={token} />}
            />
          </Routes>
        </div>
      )}
    </>
  );
}

export default App;

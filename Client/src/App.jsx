import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import "./App.css";
import Home from "./Components/Home/Home";
// import CoachProfileContainer from "./Components/Coaches/CoachProfileContainer";
import Footer from "./Components/Footer/Footer";
import StickyFooterBar from "./Components/StickyFooterBar/StickyFooterBar";
import Loading from "./Components/Loading/Loading";
import Signup from "./Components/Signup/Signup";
import FindCoach from "./Components/Find-coach/FindCoach";
import CoachBookingProfile from "./Components/coachbookingprofile/CoachBookingProfile";
import WhoWeAre from "./Components/whoweare/WhoWeAre";
import OurTeam1 from "./Components/Team/OurTeam1";

const AppContent = () => {
  const location = useLocation(); // Get the current location (path)

  // Check if the current route is the admin dashboard
  const isAdminRoute = location.pathname === "/admindashboard";

  return (
    <>
      {!isAdminRoute && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/findcoaches" element={<FindCoach />} />
        <Route path="/booksession" element={<CoachBookingProfile />} />
        <Route path="/who-we-are" element={<WhoWeAre />} />
        <Route path="/our-team" element={<OurTeam1 />} />
      </Routes>
      {!isAdminRoute && <Footer />} <StickyFooterBar />
    </>
  );
};

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleAnimationEnd = () => {
    setIsLoading(false);
  };

  return (
    <Router>
      {isLoading ? (
        <Loading onAnimationEnd={handleAnimationEnd} />
      ) : (
        <AppContent />
      )}
    </Router>
  );
}

export default App;

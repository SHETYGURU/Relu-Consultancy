import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ForgotPassword from "./components/ForgotPassword";
import Logo from "./components/Logo";
import SearchBar from "./components/SearchBar";
import BecomeSellerButton from "./components/BecomeSellerButton";
import SideNavbar from "./components/SideNavbar";
import PostCard from "./components/PostCard";
import ArtistSection from "./components/ArtistSection";
import WelcomePopup from "./components/WelcomePopup";

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if the device is mobile
    if (window.innerWidth <= 768) {
      setIsMobile(true);
    }

    // Listen for resize to adjust for mobile view
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    
    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Router>
      <Routes>
        {/* Login Page */}
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />

        {/* Signup Page */}
        <Route path="/signup" element={<Signup />} />

        {/* Forgot Password Page */}
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* Dashboard Page */}
        <Route
          path="/dashboard"
          element={
            <div className="bg-gray-100 min-h-screen">
              {/* Display the Welcome Popup or Mobile Warning Popup */}
              {!isMobile ? <WelcomePopup type="welcome" /> : <WelcomePopup type="mobileWarning" />}

              {/* Top Section */}
              <div className="flex items-center justify-between px-10 py-5">
                <Logo />
                <SearchBar />
                <BecomeSellerButton />
              </div>

              {/* Main Layout */}
              <div className="flex px-10">
                {/* Sidebar */}
                <SideNavbar />

                {/* Middle Content */}
                <div className="flex-1 bg-white rounded-xl mx-4 p-6">
                  <PostCard />
                  <PostCard />
                </div>

                {/* Artists Section */}
                <ArtistSection />
              </div>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;

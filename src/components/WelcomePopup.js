import React, { useEffect, useState } from "react";
import './welcome.css';

const WelcomePopup = ({ type }) => {
  const [showPopup, setShowPopup] = useState(true);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to check if the device is mobile based on screen width
    const checkMobileView = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Run on mount to set the initial state
    checkMobileView();

    // Listen for window resize to update the isMobile state
    window.addEventListener("resize", checkMobileView);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", checkMobileView);
    };
  }, []);

  useEffect(() => {
    if (type === "welcome") {
      // Fetch username and email from localStorage for the welcome popup
      setUsername(localStorage.getItem("username"));
      setEmail(localStorage.getItem("email"));
      setTimeout(() => setShowPopup(false), 5000); // Close after 5 seconds
    } else if (type === "mobileWarning") {
      setTimeout(() => setShowPopup(false), 5000); // Close after 5 seconds for mobile warning
    }
  }, [type]);

  return (
    showPopup && (
      <div className="popup-overlay fade-in">
        <div className="popup-content">
          {/* Display the GIF for both types */}
          <img src="/assets/welcome.gif" alt="Welcome Gif" className="popup-gif" />

          {/* Conditional rendering based on the device type */}
          {isMobile ? (
            // Mobile View
            <div>
              <h2>Please view the page on a PC or Desktop for the best experience!</h2>
              <img src="/assets/mobile-warning.gif" alt="Mobile Warning Gif" className="popup-gif" />
            </div>
          ) : (
            // PC View
            <div>
              {type === "welcome" ? (
                <div>
                  <h2>Welcome, {username}!</h2>
                  <p style={{ fontSize: "12px", color: "#888" }}>{email}</p>
                </div>
              ) : (
                <h2>Please view the page on a PC or Desktop for the best experience!</h2>
              )}
            </div>
          )}
        </div>
      </div>
    )
  );
};

export default WelcomePopup;

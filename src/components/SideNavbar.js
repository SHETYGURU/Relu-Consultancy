import React from "react";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook
import {
  FaHome,
  FaBell,
  FaShoppingCart,
  FaEnvelope,
  FaWallet,
  FaUser,
  FaCog,
  FaSignOutAlt, // Importing logout icon
} from "react-icons/fa";

const SideNavbar = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const menuItems = [
    { icon: <FaHome />, label: "Home" },
    { icon: <FaBell />, label: "Notifications" },
    { icon: <FaShoppingCart />, label: "Shop" },
    { icon: <FaEnvelope />, label: "Conversation" },
    { icon: <FaWallet />, label: "Wallet" },
    { icon: <FaUser />, label: "My Profile" },
    { icon: <FaCog />, label: "Settings" },
  ];

  // Function to handle logout
  const handleLogout = () => {
    
    navigate("/login");
  };

  return (
    <div
      className="bg-white rounded-xl p-6 flex flex-col items-start justify-start"
      style={{
        width: "250px",
        height: "100vh",
        paddingTop: "30px", // Remove top padding
      }}
    >
      {menuItems.map((item, index) => (
        <div
          key={index}
          className="flex items-center w-full mb-6 text-gray-700 hover:text-black"
          style={{ paddingLeft: "35px" }} // Add left padding to each item
        >
          <div className="text-xl mr-4">{item.icon}</div>
          <span className="text-md">{item.label}</span>
        </div>
      ))}
      <button
        className="flex items-center justify-center w-full mt-4"
        style={{ paddingTop: "80%", marginLeft: "-15px" }} // Add margin-left to shift logout button to the left
        onClick={handleLogout} // Call the handleLogout function on click
      >
        <FaSignOutAlt className="mr-2" /> {/* Logout icon */}
        <span>Log out</span>
      </button>
    </div>
  );
};

export default SideNavbar;

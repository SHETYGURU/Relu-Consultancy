import React from "react";

function BecomeSellerButton() {
  return (
    <button
      className="bg-teal-600 text-white rounded-lg shadow flex items-center justify-center transition-all duration-300"
      style={{
        width: "250px", // Match this to the logo container's width
        height: "80px", // Match this to the logo container's height
        opacity: 0.8, // Initial lower opacity
      }}
      onMouseEnter={(e) => (e.target.style.opacity = 1)} // Full opacity on hover
      onMouseLeave={(e) => (e.target.style.opacity = 0.8)} // Reset opacity
    >
      Become a Seller
    </button>
  );
}

export default BecomeSellerButton;

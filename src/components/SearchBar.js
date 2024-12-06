import React from "react";
import { FaSearch, FaAdjust } from "react-icons/fa"; // Import the "adjust" icon

const SearchBar = () => {
  return (
    <div className="flex items-center bg-white rounded-lg px-4 py-2 w-full max-w-lg">
      <FaSearch className="text-gray-400 mr-2" />
      <input
        type="text"
        placeholder="Search here..."
        className="flex-1 border-none outline-none text-sm text-gray-600"
        style={{
          width: "250px", // Match this to the logo container's width
          height: "50px", // Match this to the logo container's height
        }}
      />
      <div className="flex items-center ml-2 text-gray-500">
        <FaAdjust className="mr-1" /> {/* Adjust icon */}
        <span className="text-sm">Filter</span> {/* Filter text */}
      </div>
    </div>
  );
};

export default SearchBar;

import React from "react";
import { FaHeart, FaRegHeart, FaComment, FaShare } from "react-icons/fa";

const PostCard = () => {
  return (
    <div>
      {/* Post 1 */}
      <div className="border rounded-lg mb-6 shadow-sm p-4 relative">
        {/* Hollow like icon at the top right */}
        <div className="absolute top-2 right-2 text-white">
          <FaRegHeart className="text-xl" />
        </div>

        <div className="flex items-center mb-4">
          <img
            src="/assets/1.png"
            alt="Profile"
            className="w-10 h-10 rounded-full mr-3"
          />
          <div>
            <h3 className="font-bold">Lara Leones</h3>
            <p className="text-sm text-gray-500">2 hours ago</p>
          </div>
        </div>
        <img
          src="/assets/1.png"
          alt="Post"
          className="w-full rounded-lg mb-4"
        />
        <p className="text-gray-700 mb-4">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.{" "}
          <span className="text-teal-500">Read More</span>
        </p>
        <div className="flex items-center space-x-4 text-gray-500">
          <FaHeart /> <span>9.8k</span>
          <FaComment /> <span>8.6k</span>
          <FaShare /> <span>7.2k</span>
        </div>
      </div>

      {/* Post 2 */}
      <div className="border rounded-lg mb-6 shadow-sm p-4 relative">
        {/* Hollow like icon at the top right */}
        <div className="absolute top-2 right-2 text-white">
          <FaRegHeart className="text-xl" />
        </div>

        <div className="flex items-center mb-4">
          <img
            src="/assets/2.png"
            alt="Profile"
            className="w-10 h-10 rounded-full mr-3"
          />
          <div>
            <h3 className="font-bold">John Doe</h3>
            <p className="text-sm text-gray-500">5 hours ago</p>
          </div>
        </div>
        <img
          src="/assets/2.png"
          alt="Post"
          className="w-full rounded-lg mb-4"
        />
        <p className="text-gray-700 mb-4">
          Contrary to popular belief, Lorem Ipsum is not simply random text.{" "}
          <span className="text-teal-500">Read More</span>
        </p>
        <div className="flex items-center space-x-4 text-gray-500">
          <FaHeart /> <span>12.3k</span>
          <FaComment /> <span>10.1k</span>
          <FaShare /> <span>6.7k</span>
        </div>
      </div>
    </div>
  );
};

export default PostCard;

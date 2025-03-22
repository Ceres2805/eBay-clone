// components/Header.js
import { useState } from "react";

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="flex justify-between items-center p-4 bg-white shadow-md border border-gray-200">
      {/* Logo */}
      <div>
        <img src="EBay_logo.svg" alt="eBay Logo" className="h-12 ml-7" />
      </div>

      {/* Dropdown */}
      <div className="relative text-gray-500 text-sm">
        <button
          className="flex items-center space-x-1"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <div className="flex flex-col items-end">
            <span>Shop by</span>
            <span>category</span>
          </div>
          <svg
            className="w-4 h-4 text-black"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>
        <ul
          className={`absolute left-0 mt-2 w-48 bg-white border border-gray-200 shadow-xl rounded-md ${
            isDropdownOpen ? "block" : "hidden"
          }`}
        >
          {["Electronics", "Fashion", "Home & Garden", "Toys"].map((item) => (
            <li
              key={item}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Search Input */}
      <input
        type="text"
        placeholder="🔍︎ Search for anything"
        className="border-2 px-4 py-2 rounded-full w-1/2"
      />

      {/* Search Button */}
      <div className="flex space-x-4 bg-blue-600 text-white font-bold rounded-full px-13 py-2.5">
        <a href="#">Search</a>
      </div>

      {/* Advanced Link */}
      <div className="flex space-x-4 p-2 text-gray-500 text-sm">
        <a href="#">Advanced</a>
      </div>
    </div>
  );
}
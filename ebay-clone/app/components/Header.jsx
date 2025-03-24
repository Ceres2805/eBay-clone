// components/Header.js
import { useState } from "react";

export default function Header() {
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
  const [isAllCategoriesDropdownOpen, setIsAllCategoriesDropdownOpen] = useState(false);

  return (
    <div className="flex justify-between items-center p-[1.1rem] bg-white shadow-md border border-gray-200">
      {/* Logo */}
      <div>
        <img src="EBay_logo.svg" alt="eBay Logo" className="h-12 ml-7" />
      </div>

        <div className="relative text-gray-600 text-sm">
          <button
            className="flex items-center space-x-1"
            onClick={() => setIsCategoryDropdownOpen(!isCategoryDropdownOpen)}
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
          isCategoryDropdownOpen ? "block" : "hidden"
            }`}
          >
            {["Electronics", "Fashion", "Home & Garden", "Toys", "Motors", "Collectibles & Art", "Sports", "Health & Beauty", "Industrial Equipment", "Music", "Books", "Movies & TV"].map((item) => (
          <li
            key={item}
            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
          >
            {item}
          </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center border-2 px-4 py-2 rounded-full w-1/2">
          <input
            type="text"
            placeholder="🔍︎ Search for anything"
            className="flex-grow outline-none"
          />
          <div className="relative border-l-1 border-gray-300">
            <button
          className="flex items-center space-x-1 text-gray-600"
          onClick={() => setIsAllCategoriesDropdownOpen(!isAllCategoriesDropdownOpen)}
            >
          <span className="text-xs px-3 mr-4">All Categories</span>
          <svg
            className="w-4 h-4"
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
          className={`absolute right-0 text-xs mt-2 w-40 bg-white border border-black shadow-xl overflow-y-auto max-h-60 ${
            isAllCategoriesDropdownOpen ? "block" : "hidden"
          }`}
            >
          {["All Categories", "Electronics", "Fashion", "Home & Garden", "Toys", "Motors", "Collectibles & Art", "Sports", "Health & Beauty", "Industrial Equipment", "Music", "Books", "Movies & TV", "Everything else"].map((item) => (
            <li
              key={item}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              {item}
            </li>
          ))}
            </ul>
          </div>
        </div>

        {/* Search Button */}
      <div className="flex space-x-4 bg-[#3665f3] text-white font-bold rounded-full px-15 py-2.5">
        <a href="#">Search</a>
      </div>

      {/* Advanced Link */}
      <div className="flex space-x-4 text-gray-500 text-xs hover:text-blue-600">
        <a href="#">Advanced</a>
      </div>
    </div>
  );
}
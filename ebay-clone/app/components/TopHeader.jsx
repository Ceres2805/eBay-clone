// components/Header.js
import { PiBellBold } from "react-icons/pi";
import { FiShoppingCart } from "react-icons/fi";

export default function TopHeader() {
    return (
      <header className="flex justify-start items-center py-1 px-10 bg-white border border-gray-200">
        <div className="flex items-center space-x-2 text-sm">
            Hi! &nbsp;
            <a href='#' className="text-blue-600 underline">Sign in</a>
            or &nbsp;
            <a href='#' className="text-blue-600 underline">register</a></div>
        <ul className="flex space-x-7 px-10">
            <li><a href="#daily-deals" className="text-sm text-black">Daily Deals</a></li>
            <li><a href="#brand-outlet" className="text-sm text-black">Brand Outlet</a></li>
            <li><a href="#gift-cards" className="text-sm text-black">Gift Cards</a></li>
            <li><a href="#help-&-contact" className="text-sm text-black">Help & Contact</a></li>
        </ul>
        <ul className="flex space-x-7 px-10 ml-50">
            <li><a href="#daily-deals" className="text-sm text-black">Sell</a></li>
            <li><a href="#daily-deals" className="text-sm text-black">Watchlist</a></li>
            <li><a href="#daily-deals" className="text-sm text-black">My eBay</a></li>
            <li><a href="#daily-deals" className="text-xl text-black"><PiBellBold /></a></li>
            <li><a href="#daily-deals" className="text-xl text-black"><FiShoppingCart /></a></li>
        </ul>
      </header>
    );
  }
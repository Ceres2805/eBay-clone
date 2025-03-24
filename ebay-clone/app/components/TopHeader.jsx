// components/Header.js
import { PiBellBold } from "react-icons/pi";
import { FiShoppingCart } from "react-icons/fi";

export default function TopHeader() {
    return (
      <header className="flex justify-start items-center py-[0.15rem] px-10 bg-white border border-gray-100">
        <div className="flex items-center space-x-2 text-xs">
            Hi! &nbsp;
            <a href='#' className="text-blue-600 underline">Sign in</a>
            or &nbsp;
            <a href='#' className="text-blue-600 underline">register</a></div>
        <ul className="flex space-x-7 px-10">
            <li><a href="#daily-deals" className="text-xs text-black">Daily Deals</a></li>
            <li><a href="#brand-outlet" className="text-xs text-black">Brand Outlet</a></li>
            <li><a href="#gift-cards" className="text-xs text-black">Gift Cards</a></li>
            <li><a href="#help-&-contact" className="text-xs text-black">Help & Contact</a></li>
        </ul>
        <ul className="flex space-x-9 ml-80">
            <li><a href="#daily-deals" className="text-xs text-black">Sell</a></li>
            <li><a href="#daily-deals" className="text-xs text-black">Watchlist</a></li>
            <li><a href="#daily-deals" className="text-xs text-black">My eBay</a></li>
            <li><a href="#daily-deals" className="text-xl text-black"><PiBellBold /></a></li>
            <li><a href="#daily-deals" className="text-xl text-black"><FiShoppingCart /></a></li>
        </ul>
      </header>
    );
  }
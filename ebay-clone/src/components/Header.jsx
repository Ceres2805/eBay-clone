import React from 'react';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <img src="/images/logo.png" alt="eBay Logo" className="h-8" />
      <nav className="flex gap-4">
        <a href="#" className="hover:underline">Home</a>
        <a href="#" className="hover:underline">Shop</a>
        <a href="#" className="hover:underline">Contact</a>
      </nav>
      <button className="bg-yellow-500 px-4 py-2 rounded">Sign In</button>
    </header>
  );
};

export default Header;

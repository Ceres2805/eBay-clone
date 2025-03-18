import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center p-4">
      &copy; {new Date().getFullYear()} eBay Clone. All rights reserved.
    </footer>
  );
};

export default Footer;

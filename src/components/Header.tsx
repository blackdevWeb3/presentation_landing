// src/components/Header.tsx
import React from 'react';
import logo from "../assets/TAR44-logo.png"

const Header: React.FC = () => {
  return (
    <header className="text-white py-6 w-full">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <img src={logo} alt="TAR Global Logo" className="h-[149px]" />
        <nav className="space-x-6">
          <a href="#" className="hover:text-gray-200">Home</a>
          <a href="#" className="hover:text-gray-200">Grow</a>
          <a href="#" className="hover:text-gray-200">Markets</a>
          <a href="#" className="hover:text-gray-200">Business</a>
          <a href="#" className="hover:text-gray-200">Support</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;

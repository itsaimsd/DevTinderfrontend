import React from "react";
import { Link } from "react-router-dom"; // Import Link from React Router

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-lg font-semibold text-black">
          <Link to="/">Lockify</Link>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6 text-gray-800 text-sm font-medium">
          <Link to="/" className="hover:text-black">
            Home
          </Link>
          <Link to="/pricing" className="hover:text-black">
            Plan & Pricing
          </Link>
          <Link to="/faq" className="hover:text-black">
            FAQ
          </Link>
          <Link to="/support" className="hover:text-black">
            Support
          </Link>
        </nav>

        {/* Login & Signup */}
        <div className="flex items-center space-x-4">
          <Link to="/login" className="text-sm text-gray-700 hover:text-black">
            Login
          </Link>
          <Link
            to="/signup"
            className="text-sm bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

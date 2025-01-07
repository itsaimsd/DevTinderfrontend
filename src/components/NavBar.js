import React from "react";
import { Link } from "react-scroll"; // For smooth scrolling

const NavBar = () => {
  return (
    <nav className="bg-gray-900 text-white shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-semibold">Lockify</div>
        <div className="space-x-6">
          <Link
            to="how-it-works"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            How it Works
          </Link>
          <Link
            to="pricing"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            Pricing
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

import React, { useState } from "react";
import LuggageForm from "./Form/LuggageForm"; // Make sure to import the form

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state

  // Function to open the modal
  const handleGetStartedClick = () => {
    setIsModalOpen(true); // Open the modal
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  return (
    <div
      className="relative h-screen flex flex-col justify-center items-center text-white bg-cover bg-center"
      style={{ backgroundImage: "url(/bg.png)" }} // Background image from public folder
    >
      {/* Darker overlay to improve text contrast */}
      <div className="absolute inset-0 bg-black opacity-70"></div>

      <div className="relative z-10 text-center px-6 md:px-8 max-w-5xl">
        {/* Main Heading with a bigger font and cleaner styling */}
        <h1 className="text-6xl md:text-7xl font-extrabold leading-tight mb-6 text-gradient">
          Store Your Luggage Safely
        </h1>

        {/* Subheading with a more elegant font size and spacing */}
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          Easily store your luggage while traveling in the city. Enjoy the
          convenience and security you deserve.
        </p>

        {/* CTA Button with smooth hover effects */}
        <button
          onClick={handleGetStartedClick}
          className="mt-8 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white py-4 px-12 rounded-full text-xl shadow-xl transform hover:scale-105 transition-all duration-300"
        >
          Get Started
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full">
            {/* Close Button */}

            {/* LuggageForm in Modal */}
            <LuggageForm closeModal={closeModal} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;

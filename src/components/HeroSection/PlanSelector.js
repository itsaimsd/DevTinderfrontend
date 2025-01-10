import React, { useState, useRef, useEffect } from "react";

const PlanSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("Select Plan"); // Default text
  const dropdownRef = useRef(null);

  const handleSelectPlan = (plan) => {
    setSelectedPlan(plan); // Update the selected plan
    setIsOpen(false); // Close the dropdown
  };

  // Close the dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on cleanup
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div className="relative flex items-center w-full " ref={dropdownRef}>
      {/* Arrow Icon */}
      <svg
        onClick={() => setIsOpen(!isOpen)}
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-gray-600 cursor-pointer"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        {/* SVG path */}
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M6 9l6-6m0 0l6 6m-6-6v18"
        />
      </svg>

      {/* Selected Plan Text */}
      <span
        className="text-gray-700 font-medium ml-2 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedPlan}
      </span>

      {/* Dropdown Menu */}
      {isOpen && (
        <ul className="absolute top-10 left-0 bg-white shadow-lg rounded-md border border-gray-200 w-30 z-50">
          <li
            onClick={() => handleSelectPlan("Base Plan")}
            className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-800 cursor-pointer"
          >
            Base Plan
          </li>
          <li
            onClick={() => handleSelectPlan("Group Plan")}
            className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-800 cursor-pointer"
          >
            Group Plan
          </li>
        </ul>
      )}
    </div>
  );
};

export default PlanSelector;

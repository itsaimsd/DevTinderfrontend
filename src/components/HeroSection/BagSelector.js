import React from "react";

const BagSelector = () => {
  const [bags, setBags] = React.useState(2); // Default bag count is 2

  // Function to handle incrementing the bag count
  const increaseBags = () => {
    setBags((prevBags) => prevBags + 1);
  };

  // Function to handle decrementing the bag count
  const decreaseBags = () => {
    if (bags > 1) setBags((prevBags) => prevBags - 1); // Minimum 1 bag
  };

  return (
    <div className="flex items-center space-x-4 cursor-pointer w-full">
      {/* Bag Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-gray-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M16 11V5a2 2 0 00-2-2H8a2 2 0 00-2 2v6m10 10H6a2 2 0 01-2-2v-6h14v6a2 2 0 01-2 2z"
        />
      </svg>

      {/* Decrement Button */}
      <button
        onClick={decreaseBags}
        className="px-2 py-1 bg-gray-200 rounded-md text-gray-700 hover:bg-gray-300 focus:outline-none"
      >
        -
      </button>

      {/* Bag Count */}
      <span className="text-gray-700 font-medium">{bags} Bags</span>

      {/* Increment Button */}
      <button
        onClick={increaseBags}
        className="px-2 py-1 bg-gray-200 rounded-md text-gray-700 hover:bg-gray-300 focus:outline-none"
      >
        +
      </button>
    </div>
  );
};

export default BagSelector;

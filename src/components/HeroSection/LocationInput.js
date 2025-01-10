import React, { useState } from "react";

const LocationInput = ({ setAddress }) => {
  const [manualAddress, setManualAddress] = useState(""); // State to store the manual address
  const [error, setError] = useState(""); // State to store error message

  // This function will be triggered when the user types in the address field
  const handleAddressChange = (e) => {
    const address = e.target.value;
    setManualAddress(address); // Update the manual address as the user types
    setAddress(address); // Pass the updated address to the parent

    // Basic validation
    if (!address.trim()) {
      setError("Address cannot be empty");
    } else {
      setError(""); // Clear error when address is not empty
    }
  };

  return (
    <div className="flex items-center space-x-3">
      {/* Manual Location Input */}
      <input
        type="text"
        value={manualAddress}
        onChange={handleAddressChange} // Update the manual address on change
        placeholder="Enter your location (e.g., city or landmark)"
        className="w-full py-2 px-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
      />
      {/* Display error if the address is empty */}
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default LocationInput;

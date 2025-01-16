import React, { useState } from "react";

const LocationInput = ({ setAddress }) => {
  const [manualAddress, setManualAddress] = useState("");
  const [error, setError] = useState("");
  const handleAddressChange = (e) => {
    const address = e.target.value;
    setManualAddress(address);
    setAddress(address);

    if (!address.trim()) {
      setError("Address cannot be empty");
    } else {
      setError("");
    }
  };

  return (
    <div className="flex items-center space-x-3">
      <input
        type="text"
        value={manualAddress}
        onChange={handleAddressChange}
        placeholder="Enter your location"
        className="w-full py-2 px-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
      />

      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default LocationInput;

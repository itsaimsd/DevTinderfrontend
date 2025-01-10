import React, { useState } from "react";
import { Autocomplete, LoadScript } from "@react-google-maps/api";

const LocationInput = ({ setAddress }) => {
  const [autocomplete, setAutocomplete] = useState(null);

  const handleLoad = (autocompleteInstance) => {
    setAutocomplete(autocompleteInstance); // Set the autocomplete instance
  };

  const handlePlaceChanged = () => {
    if (autocomplete) {
      const place = autocomplete.getPlace();
      setAddress(place.formatted_address || "");
    }
  };

  return (
    <LoadScript
      googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
      libraries={["places"]}
    >
      <div className="flex items-center space-x-3">
        {/* Manual Location Input with Autocomplete */}
        <Autocomplete onLoad={handleLoad} onPlaceChanged={handlePlaceChanged}>
          <input
            type="text"
            placeholder="Enter location"
            className="w-full py-2 px-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
          />
        </Autocomplete>
      </div>
    </LoadScript>
  );
};

export default LocationInput;

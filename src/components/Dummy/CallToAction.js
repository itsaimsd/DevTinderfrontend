import React, { useState } from "react";

const CallToAction = ({ setAddress }) => {
  const [loading, setLoading] = useState(false); // Loading state

  const handleLocateMe = () => {
    setLoading(true); // Start loading when locating the user

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;

          // Reverse geocode to get address from latitude and longitude
          const geocoder = new window.google.maps.Geocoder();
          const latLng = new window.google.maps.LatLng(latitude, longitude);

          geocoder.geocode({ location: latLng }, (results, status) => {
            setLoading(false); // Stop loading state

            if (status === "OK" && results[0]) {
              const formattedAddress = results[0].formatted_address;
              setAddress(formattedAddress); // Update the address field
            } else {
              alert(
                "Unable to retrieve the address for the following reason: " +
                  status
              );
            }
          });
        },
        () => {
          setLoading(false); // Stop loading state on error
          alert("Unable to fetch your location. Please try again.");
        }
      );
    } else {
      setLoading(false); // Stop loading state if geolocation is not supported
      alert("Geolocation is not supported by your browser.");
    }
  };

  return (
    <button
      onClick={handleLocateMe}
      className={`${
        loading ? "bg-gray-400" : "bg-orange-500"
      } text-white text-sm font-medium px-6 py-4 rounded-2xl hover:bg-orange-600 shadow-md transition duration-200 flex items-center justify-center`}
      disabled={loading}
    >
      {loading ? "Locating..." : "Locate Me →"}
    </button>
  );
};

export default CallToAction;

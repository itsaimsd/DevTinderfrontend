import React, { useState } from "react";

const CallToAction = ({
  address,
  selectedDate,
  selectedPlan,
  selectedBags,
}) => {
  const [loading, setLoading] = useState(false); // Loading state

  const handleSubmit = () => {
    setLoading(true); // Start loading when submitting

    // Forming the message to send on WhatsApp
    const message = `Luggage Storage Request:\n\nAddress: ${address}\nDate: ${selectedDate}\nPlan: ${selectedPlan}\nBags: ${selectedBags}`;

    // Creating a WhatsApp URL to send the message
    const whatsappURL = `https://wa.me/919870509185?text=${encodeURIComponent(
      message
    )}`;

    // Opening WhatsApp with the message pre-filled
    window.open(whatsappURL, "_blank");

    setLoading(false); // Stop loading after submitting
  };

  return (
    <button
      onClick={handleSubmit}
      className={`${
        loading ? "bg-gray-400" : "bg-orange-500"
      } text-white text-sm font-medium px-6 py-4 rounded-2xl hover:bg-orange-600 shadow-md transition duration-200 flex items-center justify-center`}
      disabled={loading}
    >
      {loading ? "Submitting..." : "Submit"}
    </button>
  );
};

export default CallToAction;

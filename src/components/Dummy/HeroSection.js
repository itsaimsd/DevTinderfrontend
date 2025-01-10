import React, { useState } from "react";
import LocationInput from "./LocationInput";
import DatePicker from "./DatePicker";
import PlanSelector from "./PlanSelector";
import BagSelector from "./BagSelector";
import CallToAction from "./CallToAction";

const HeroSection = () => {
  const [address, setAddress] = useState(""); // State for the address

  return (
    <div className="bg-gradient-to-r from-blue-100 to-blue-300 h-screen flex flex-col items-center justify-center text-center px-4">
      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6">
        Luggage Storage Near LPU
      </h1>

      <div className="bg-white rounded-3xl shadow-lg flex items-center w-full max-w-4xl px-4 py-3 space-x-3">
        {/* Location Input */}
        <div className="flex items-center flex-1 px-9 ">
          <LocationInput setAddress={setAddress} />
        </div>

        {/* Divider */}
        <div className="border-l h-6"></div>

        {/* Date Picker */}
        <div className="flex items-center flex-1">
          <DatePicker />
        </div>

        {/* Divider */}
        <div className="border-l h-6"></div>

        {/* Plan Selector */}
        <div className="flex items-center flex-1 ">
          <PlanSelector />
        </div>

        {/* Divider */}
        <div className="border-l h-6 "></div>

        {/* Bag Selector */}
        <div className="flex items-center flex-1">
          <BagSelector />
        </div>

        {/* Locate Me Button */}
        <div>
          <CallToAction setAddress={setAddress} />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

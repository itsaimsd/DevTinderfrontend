import React, { useState } from "react";
import LocationInput from "./LocationInput";
import DateSelector from "./DatePicker";
import PlanSelector from "./PlanSelector";
import BagSelector from "./BagSelector";
import CallToAction from "./CallToAction";

const HeroSection = () => {
  const [address, setAddress] = useState(""); // Store the address from LocationInput
  const [selectedDate, setSelectedDate] = useState(""); // Store the selected date
  const [selectedPlan, setSelectedPlan] = useState(""); // Store the selected plan
  const [selectedBags, setSelectedBags] = useState(""); // Store the number of bags

  return (
    <div className="bg-gradient-to-r from-blue-100 to-blue-300 h-screen flex flex-col items-center justify-center text-center px-4">
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
          <DateSelector setSelectedDate={setSelectedDate} />
        </div>

        {/* Divider */}
        <div className="border-l h-6"></div>

        {/* Plan Selector */}
        <div className="flex items-center flex-1 ">
          <PlanSelector setSelectedPlan={setSelectedPlan} />
        </div>

        {/* Divider */}
        <div className="border-l h-6 "></div>

        {/* Bag Selector */}
        <div className="flex items-center flex-1">
          <BagSelector setSelectedBags={setSelectedBags} />
        </div>

        {/* Submit Button */}
        <div>
          <CallToAction
            address={address}
            selectedDate={selectedDate}
            selectedPlan={selectedPlan}
            selectedBags={selectedBags}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

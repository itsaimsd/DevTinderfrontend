import React, { useState } from "react";
import LocationInput from "./LocationInput";
import DateSelector from "./DatePicker";
import PlanSelector from "./PlanSelector";
import BagSelector from "./BagSelector";
import CallToAction from "./CallToAction";

const HeroSection = () => {
  const [address, setAddress] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedPlan, setSelectedPlan] = useState("");
  const [selectedBags, setSelectedBags] = useState("");

  return (
    <div className="bg-gradient-to-r from-indigo-200 via-blue-300 to-blue-500 h-screen flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-600 mb-16 tracking-wide animate-typing overflow-hidden whitespace-nowrap border-r-4 border-teal-500 ">
        Luggage Storage Near LPU
      </h1>

      <div className="bg-white rounded-3xl shadow-lg flex items-center w-full max-w-4xl px-4 py-3 space-x-3">
        <div className="flex items-center flex-1 px-2 ">
          <LocationInput setAddress={setAddress} />
        </div>

        <div className="border-l h-6"></div>

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

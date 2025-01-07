import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Form from "./Form"; // Import Form component

const LuggageForm = ({ closeModal }) => {
  const [totalCost, setTotalCost] = useState(0);
  const [arrivalDate, setArrivalDate] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [luggagePicture, setLuggagePicture] = useState(null);
  const [isVisible, setIsVisible] = useState(false); // State for fade-in effect

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Handle date change and calculate total cost
  const handleDateChange = () => {
    if (arrivalDate && departureDate) {
      const arrival = new Date(arrivalDate);
      const departure = new Date(departureDate);

      const timeDifference = departure - arrival;
      if (timeDifference > 0) {
        const days = timeDifference / (1000 * 3600 * 24);
        setTotalCost(days * 10); // 10 rupees per day
      } else {
        setTotalCost(0);
      }
    }
  };

  const onSubmit = (data) => {
    console.log(data);
    console.log("Luggage picture:", luggagePicture);
    console.log("Total Cost:", totalCost);
    closeModal();
  };

  useEffect(() => {
    setIsVisible(true); // Trigger fade-in effect when form is shown
  }, []);

  return (
    <div className="fixed inset-0 mt-40 mb-40 flex justify-center items-center">
      {/* Form Container */}
      <div className="max-w-3xl mx-auto rounded-lg border-2 transition-all duration-300 overflow-y-auto max-h-screen">
        {/* Increased max width and added scrollable feature */}
        <Form
          register={register}
          errors={errors}
          arrivalDate={arrivalDate}
          departureDate={departureDate}
          luggagePicture={luggagePicture}
          setLuggagePicture={setLuggagePicture}
          setArrivalDate={setArrivalDate} // Pass state function as prop
          setDepartureDate={setDepartureDate} // Pass state function as prop
          setIsVisible={setIsVisible} // Pass state function as prop
          handleDateChange={handleDateChange}
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          closeModal={closeModal}
        />
      </div>
    </div>
  );
};

export default LuggageForm;

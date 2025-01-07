import React from "react";
import { TextField } from "@mui/material";

const Form = ({
  register,
  totalCost,
  errors,
  arrivalDate,
  departureDate,
  luggagePicture,
  setLuggagePicture,
  setArrivalDate,
  setDepartureDate,
  handleDateChange,
  handleSubmit,
  onSubmit,
  closeModal,
}) => {
  return (
    <div className="bg-gradient-to-r from-indigo-200 via-purple-200 to-blue-300 p-10 rounded-xl shadow-2xl max-w-3xl mx-auto ">
      <h2 className="text-2xl font-extrabold text-center text-blue-700 mb-12 tracking-wider font-poppins">
        Luggage Storage Form
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Section: Personal Information */}
          <div className="space-y-8">
            <div className="space-y-6">
              <label
                htmlFor="name"
                className="text-xl font-medium text-gray-700"
              >
                Name (Required)
              </label>
              <TextField
                id="name"
                variant="outlined"
                fullWidth
                {...register("name", { required: "Name is required" })}
                error={!!errors.name}
                helperText={errors.name?.message}
                className="border-2 border-gray-300 p-4 rounded-md w-full focus:ring-2 focus:ring-blue-500 transition-all duration-300"
              />
            </div>

            <div className="space-y-6">
              <label
                htmlFor="phoneNumber"
                className="text-xl font-medium text-gray-700"
              >
                Phone Number (Optional)
              </label>
              <TextField
                id="phoneNumber"
                variant="outlined"
                fullWidth
                {...register("phoneNumber")}
                className="border-2 border-gray-300 p-4 rounded-md w-full focus:ring-2 focus:ring-blue-500 transition-all duration-300"
              />
            </div>

            <div className="space-y-6">
              <label
                htmlFor="studentId"
                className="text-xl font-medium text-gray-700"
              >
                Student ID / Email (Optional)
              </label>
              <TextField
                id="studentId"
                variant="outlined"
                fullWidth
                {...register("studentId")}
                className="border-2 border-gray-300 p-4 rounded-md w-full focus:ring-2 focus:ring-blue-500 transition-all duration-300"
              />
            </div>

            <div className="space-y-6">
              <label
                htmlFor="emergencyContact"
                className="text-xl font-medium text-gray-700"
              >
                Emergency Contact Name and Phone (Optional)
              </label>
              <TextField
                id="emergencyContact"
                variant="outlined"
                fullWidth
                {...register("emergencyContact")}
                className="border-2 border-gray-300 p-4 rounded-md w-full focus:ring-2 focus:ring-blue-500 transition-all duration-300"
              />
            </div>
          </div>

          {/* Right Section: Luggage Details & Dates */}
          <div className="space-y-8">
            <div className="space-y-6">
              <label
                htmlFor="luggageAmount"
                className="text-xl font-medium text-gray-700"
              >
                Amount of Luggage (Required)
              </label>
              <TextField
                id="luggageAmount"
                variant="outlined"
                fullWidth
                type="number"
                {...register("luggageAmount", {
                  required: "Luggage amount is required",
                })}
                error={!!errors.luggageAmount}
                helperText={errors.luggageAmount?.message}
                className="border-2 border-gray-300 p-4 rounded-md w-full focus:ring-2 focus:ring-blue-500 transition-all duration-300"
              />
            </div>

            <div className="space-y-6">
              <label
                htmlFor="luggageType"
                className="text-xl font-medium text-gray-700"
              >
                Type of Luggage (Optional)
              </label>
              <TextField
                id="luggageType"
                variant="outlined"
                fullWidth
                {...register("luggageType")}
                className="border-2 border-gray-300 p-4 rounded-md w-full focus:ring-2 focus:ring-blue-500 transition-all duration-300"
              />
            </div>

            <div className="space-y-6">
              <label
                htmlFor="luggagePicture"
                className="text-xl font-medium text-gray-700"
              >
                Upload Luggage Picture (Optional but highly encouraged)
              </label>
              <input
                type="file"
                id="luggagePicture"
                accept="image/*"
                onChange={(e) => setLuggagePicture(e.target.files[0])}
                className="border-2 border-gray-300 p-4 rounded-md w-full"
              />
              {luggagePicture && (
                <p className="text-sm text-gray-500 mt-2">
                  Selected File: {luggagePicture.name}
                </p>
              )}
            </div>

            {/* Date Section */}
            <div className="space-y-6">
              <label
                htmlFor="arrivalDate"
                className="text-xl font-medium text-gray-700"
              >
                Date of Arrival (Required)
              </label>
              <TextField
                id="arrivalDate"
                variant="outlined"
                fullWidth
                type="date"
                {...register("arrivalDate", {
                  required: "Arrival date is required",
                })}
                error={!!errors.arrivalDate}
                helperText={errors.arrivalDate?.message}
                value={arrivalDate}
                onChange={(e) => {
                  setArrivalDate(e.target.value);
                  handleDateChange();
                }}
                className="border-2 border-gray-300 p-4 rounded-md w-full focus:ring-2 focus:ring-blue-500 transition-all duration-300"
              />
            </div>

            <div className="space-y-6">
              <label
                htmlFor="departureDate"
                className="text-xl font-medium text-gray-700"
              >
                Date of Departure (Required)
              </label>
              <TextField
                id="departureDate"
                variant="outlined"
                fullWidth
                type="date"
                {...register("departureDate", {
                  required: "Departure date is required",
                })}
                error={!!errors.departureDate}
                helperText={errors.departureDate?.message}
                value={departureDate}
                onChange={(e) => {
                  setDepartureDate(e.target.value);
                  handleDateChange();
                }}
                className="border-2 border-gray-300 p-4 rounded-md w-full focus:ring-2 focus:ring-blue-500 transition-all duration-300"
              />
            </div>
          </div>
        </div>

        {/* Agreement Section */}
        <div className="space-y-6">
          <label
            htmlFor="termsAndConditions"
            className="text-xl font-medium text-gray-700"
          >
            Agree to Terms & Conditions
          </label>
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="termsAndConditions"
              {...register("termsAndConditions", {
                required: "You must agree to the terms",
              })}
              className="mr-2"
            />
            <span>I agree to the terms and conditions</span>
          </div>
          {errors.termsAndConditions && (
            <p className="text-red-500">{errors.termsAndConditions.message}</p>
          )}
        </div>

        {/* Display the Total Cost */}
        <div className="text-center mt-6">
          <p className="text-lg text-gray-700">
            <strong>Total Cost: ₹{totalCost}</strong>
          </p>
        </div>

        {/* Button Section */}
        <div className="flex justify-between gap-8 mt-8">
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-md transition-all duration-300"
          >
            Submit
          </button>
          <button
            type="button"
            onClick={closeModal}
            className="w-full bg-gray-600 hover:bg-gray-700 text-white py-4 rounded-md transition-all duration-300"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;

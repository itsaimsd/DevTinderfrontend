import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateSelector = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const getFormattedDateTime = (date) => {
    if (!date) return ""; // Fallback for null/undefined dates
    return date
      .toLocaleString("en-US", {
        month: "long", // Full month name (e.g., January)
        day: "numeric", // Day of the month (e.g., 24)
        hour: "2-digit", // 12-hour format
        minute: "2-digit", // Minutes with leading zero
        hour12: true, // AM/PM format
      })
      .replace(/, /g, " "); // Remove the extra space after time
  };

  return (
    <div className="flex items-center space-x-3 w-full">
      {/* Calendar Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-gray-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 7V3m8 4V3m-9 9h10M3 21h18a2 2 0 002-2V7a2 2 0 00-2-2H3a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>

      {/* Styled Date Picker */}
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        showTimeSelect
        timeFormat="h:mm aa"
        timeIntervals={15} // 15-minute intervals
        dateFormat="MMMM d, h:mm aa" // Show full month and time
        className="w-full py-2 px-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 min-w-[160px]" // Reduced padding and width
        placeholderText={getFormattedDateTime(selectedDate)} // Display custom formatted date-time
      />
    </div>
  );
};

export default DateSelector;

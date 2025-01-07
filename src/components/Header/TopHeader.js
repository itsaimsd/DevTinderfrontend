import React from "react";
import "./TopHeader.css"; // Add custom CSS for scrolling marquee

const TopHeader = () => {
  return (
    <div className="bg-black text-white py-2 text-sm font-sans overflow-hidden">
      <div className="marquee flex space-x-10">
        <span>From Students, For Students!</span>
        <span>Safe. Reliable.</span>
        <span>Over 300 Satisfied Customers</span>
        <span>Easy & Secure </span>
        <span> Just ₹10 per day </span>
        <span> CCTV Monitored.</span>
        <span>Convenient Pickup & Drop Services.</span>
        <span>Hassle-Free Booking Anytime.</span>
      </div>
    </div>
  );
};

export default TopHeader;

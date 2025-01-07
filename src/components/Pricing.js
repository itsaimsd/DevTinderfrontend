import React from "react";

const Pricing = () => {
  return (
    <div id="pricing" className="py-12 bg-blue-100 text-center">
      <h2 className="text-4xl font-bold">Our Pricing</h2>
      <p className="text-xl mt-4">Affordable storage for your luggage.</p>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="bg-white shadow-lg p-6 rounded-lg">
          <h3 className="text-2xl font-semibold">Basic</h3>
          <p className="text-lg mt-4">Rs10/day</p>
        </div>
        <div className="bg-white shadow-lg p-6 rounded-lg">
          <h3 className="text-2xl font-semibold">Standard</h3>
          <p className="text-lg mt-4">Rs20/day</p>
        </div>
        <div className="bg-white shadow-lg p-6 rounded-lg">
          <h3 className="text-2xl font-semibold">Premium</h3>
          <p className="text-lg mt-4">Rs30/day</p>
        </div>
      </div>
    </div>
  );
};

export default Pricing;

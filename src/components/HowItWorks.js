import React from "react";

const HowItWorks = () => {
  return (
    <div id="how-it-works" className="py-12 bg-gray-50 text-center">
      <h2 className="text-4xl font-bold">How It Works</h2>
      <p className="text-xl mt-4">
        We make storing your luggage easy. Here's how it works:
      </p>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="bg-white shadow-lg p-6 rounded-lg">
          <h3 className="text-2xl font-semibold">Step 1</h3>
          <p>Fill out the form with your details.</p>
        </div>
        <div className="bg-white shadow-lg p-6 rounded-lg">
          <h3 className="text-2xl font-semibold">Step 2</h3>
          <p>We store your luggage securely.</p>
        </div>
        <div className="bg-white shadow-lg p-6 rounded-lg">
          <h3 className="text-2xl font-semibold">Step 3</h3>
          <p>Pick up your luggage at your convenience.</p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;

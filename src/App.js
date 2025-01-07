import React, { useState } from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import LuggageForm from "./components/Form/LuggageForm";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import { Element } from "react-scroll"; // To define a scrollable section

function App() {
  const [showForm, setShowForm] = useState(false);

  const handleGetStartedClick = () => {
    setShowForm(true); // Show the form
    // Optionally, scroll the page to the form
    window.scrollTo({
      top: document.getElementById("luggage-form").offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <NavBar />
      <Hero onGetStartedClick={handleGetStartedClick} />
      <HowItWorks />

      {/* Wrapping the LuggageForm inside an Element to allow scroll to this section */}
      <Element name="luggage-form" id="luggage-form">
        {showForm && <LuggageForm />}
      </Element>

      <Pricing />
      <Footer />
    </div>
  );
}

export default App;

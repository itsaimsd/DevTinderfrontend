import React from "react";
import HeroSection from "../components/HeroSection";
import MapSection from "../components/MapSection";
import PlanSelector from "../components/PlanSelector";
import BagSelector from "../components/BagSelector";
import CTASection from "../components/CTASection";

const HomePage = () => {
  return (
    <div className="home-page">
      <HeroSection />
      <MapSection />
      <PlanSelector />
      <BagSelector />
      <CTASection />
    </div>
  );
};

export default HomePage;

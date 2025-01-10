import React from "react"; // To define a scrollable section
import TopHeader from "./components/Header/TopHeader";
import Header from "./components/Header/Header";
import HomePage from "./components/pages/HomePage";
import Footer from "./components/Footer/Footer"; 

function App() {
  return (
    <div>
      <TopHeader />
      <Header /> 
      <HomePage /> 
      <Footer />
    </div>
  );
}

export default App;

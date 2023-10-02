import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Destinations from "./components/Destinations";
import Search from "./components/Search";
import Locations from "./components/Locations";
import Slidercomp from "./components/Slidercomp";
import Footer from "./components/Footer";
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Destinations />
      <Search />
      <Locations />
      <Slidercomp />
      <Footer />
    </div>
    
  );
}

export default App;

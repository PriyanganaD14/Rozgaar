import React from "react";
import Navbar from "./Components/Navbar";
import Buttons from "./Components/Buttons";
import CardSection from "./Components/CardSection";
import Footer from "./Components/Footer";
import './App.css';

const App = () => {
  return (
      <div className="all">
        <Navbar/>
        <Buttons/>
        <hr/>
        <CardSection/>
        <Footer/>
      </div>
  );
};


export default App;

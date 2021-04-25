import React from "react";
import Navbar from "./Components/Navbar";
import Buttons from "./Components/Buttons";
import CardSection from "./Components/CardSection";
import Footer from "./Components/Footer";

import {BrowserRouter,Route,Switch} from 'react-router-dom'
import './App.css';
import Dashboard from "./Components/Dashboard";

const Home =()=>(
  <>
       <Buttons/>
        <hr/>
        <CardSection/>
  </>
)
const App = () => {
  return (
      <div className="all">
      <BrowserRouter>
      <Navbar/>
   
       <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/Dashboard" component={Dashboard}/>
      
       </Switch>
        <Footer/>
        </BrowserRouter>
      </div>
  );
};


export default App;

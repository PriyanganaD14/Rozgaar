import React from "react";
import Navbar from "./Components/Navbar";
import Buttons from "./Components/Buttons";
import CardSection from "./Components/CardSection";
import Footer from "./Components/Footer";
import './App.css';
import {BrowserRouter as Router,Route,Switch } from "react-router-dom";
import Dashboard from './Components/Dashboard';


const App = () => {
  return (
    <Router>
      
      <div className="all">  
        <Navbar/>
        <Switch>
        <Route path="/Dashboard" exact={true} component={Dashboard}/>
        </Switch>
       <Route path="/" exact={true} component={Buttons}/>
        <hr/>
       <Route path="/" exact={true} component={CardSection}/>
       <Route path="/" exact={true} component={Footer}/>
      
      </div>
      </Router>
  );
};


export default App;

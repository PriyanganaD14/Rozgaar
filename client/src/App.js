import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Buttons from "./Components/JobSearch/Buttons";
import CardSection from "./Components/MidPage/CardSection";
import Footer from "./Components/Footer/Footer";
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import './App.css';
import Dashboard from "./Components/Dashboard/Dashboard";

const Home =()=>(
  <div>
       <Buttons/>
        <hr/>
        <CardSection/>
  </div>
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

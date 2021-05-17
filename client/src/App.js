import React from "react";
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import Buttons from "./Components/JobSearch/Buttons";
import CardSection from "./Components/MidPage/CardSection";
import Footer from "./Components/Footer/Footer";
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Dashboard from "./Components/Dashboard/Dashboard";
import Profile from "./Components/Profile/Profile";
import ProfileUpdate from "./Components/ProfileUpdate/ProfileUpdate";
import ContactUs from "./Components/ContactUs/ContactUs";
import JobsFeed from "./Components/JobsFeed/JobsFeed";
import OurTeam from "./Components/OurTeam/OurTeam";
import Application from "./Components/Dashboard/Application/Application"

import UpdatePassword from "./Components/auth/UpdatePassword";
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
        <Route exact path="/Profile" component={Profile}/>
        <Route export path="/Profile/ProfileUpdate" component={ProfileUpdate}/>
        <Route export path="/ContactUs" component={ContactUs}/>
        <Route export path="/jobsFeed" component={JobsFeed}/>
        <Route export path="/OurTeam" component={OurTeam}/>
        <Route excat path="/updatePassword/:token" component={UpdatePassword} />
        <Route exact path="/Application" component={Application}/>
       </Switch>
        <Footer/>
        </BrowserRouter>
      </div>
  );
};


export default App;

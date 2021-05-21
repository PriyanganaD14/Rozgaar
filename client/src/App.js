import React from "react";

import { useSelector } from 'react-redux';

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
import JobSeekerApplication from "./Components/Dashboard/Application/EmployerApplication/EmployerApplication"; 
import EmployerApplication from "./Components/Dashboard/Application/JobSeekerApplication/JobSeekerApplication";
import PostJob from "./Components/Dashboard/PostJob/PostJob";
import EmployeeDashboard from "./Components/EmployeeDashboard/Dashboard";

import UpdatePassword from "./Components/auth/UpdatePassword";
const Home =()=>(
  <div>
       <Buttons/>
        <hr/>
        <CardSection/>
  </div>
)
const App = () => {
  // const auth = useSelector(state => state.auth);
  // console.log(auth); 
  // console.log(auth.authData.result.userType);
  return (
      <div className="all">
      <BrowserRouter>
      <Navbar/>
   
       <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/jobSeeker/Dashboard" component={Dashboard}/> 
        <Route exact path="/employer/Dashboard" component={EmployeeDashboard}/> 
        <Route exact path="/jobSeeker/Profile" component={Profile}/>
        <Route exact path="/employer/Profile" component={Profile}/>
        <Route export path="/Profile/ProfileUpdate" component={ProfileUpdate}/>
        <Route export path="/ContactUs" component={ContactUs}/>
        <Route export path="/jobsFeed" component={JobsFeed}/>
        <Route export path="/employer/postJob" component={PostJob}/>
        <Route export path="/OurTeam" component={OurTeam}/>
        <Route excat path="/updatePassword/:token" component={UpdatePassword} />
        <Route exact path="/jobSeeker/Application" component={JobSeekerApplication}/>
        <Route exact path="/employer/Application" component={EmployerApplication}/>
       
       </Switch>
        <Footer/>
        </BrowserRouter>
      </div>
  );
};


export default App;

import React from "react";
import Navbar1 from "./Components/Navbar1";
import Footer from "./Components/Footer";
import {BrowserRouter,Switch,Route} from 'react-router-dom'

import './App.css';
import Home from "./Components/Home";

const App = () => {
  return (
      <div>
        <Navbar1/>
        <Home/>


        {/* <BrowserRouter>
          <Switch>
              <Route exact path="/" component={Home} />
          </Switch>
          </BrowserRouter> */}
       
        

        <Footer/>
      </div>
  );
};


export default App;

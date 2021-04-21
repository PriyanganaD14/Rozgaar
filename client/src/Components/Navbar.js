import React, { Component } from 'react';
import './Navbar.css'
import {NavbarBrand} from "reactstrap"
import logo from "./Assets/favicon.ico"
import Dashboard from "./Dashboard";

import {BrowserRouter as Router,Route,Link,Switch} from "react-router-dom"

class Navbar extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return(
            <nav className="NavbarItems">
            <h1  className="navbar-logo">
            <NavbarBrand className="fav" href="/">
            <a href="/">
              <img
                src={logo}
                alt="logoImg"
                style={{ height: 30, width: 30 }}
                className="mr-2 d-inline-block align-top"
              ></img>
            </a>
            <i>
              <b>Rozgaar</b>
            </i>
          </NavbarBrand>
          </h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                   <Router>
                   <li><Link className="nav-links" to="/Profile">Profile</Link></li>
                   <li><Link className="nav-links" to="/Dashboard">Dashboard</Link></li>
                   <li><Link className="nav-links" to="/Signin">Sign In</Link></li>

                   <Switch>
                   <Route path="/Dashboard" exact component={Dashboard}/>
                   </Switch>
                   </Router>
                </ul>
            </nav>
        )
    }
}

export default Navbar
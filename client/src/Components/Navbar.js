import React, { Component } from 'react';
import { MenuItems } from "./MenuItems"
import './Navbar.css'
import {NavbarBrand} from "reactstrap"
import logo from "./Assets/favicon.ico"

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
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}

export default Navbar
import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
} from "reactstrap";
import logo from "./Assets/favicon.ico";

const Navbar1 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" dark expand="md" >
        <NavbarBrand href="/">
          <a>
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
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="#postjob">POST JOB |</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#findjob">FIND JOB |</NavLink>
            </NavItem>
            <Button color="success" className="ml-3" type="submit">
              SIGN IN
            </Button>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Navbar1;

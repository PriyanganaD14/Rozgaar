import React, { Component } from 'react';
import './Navbar.css'
import { Button, NavbarBrand } from "reactstrap"
import logo from "./Assets/favicon.ico"
import Dashboard from "./Dashboard";
import { Link } from "react-router-dom"
import { ButtonBase, ButtonGroup } from '@material-ui/core';


import { useState } from "react";


//signin and signup
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Card, Grid } from '@material-ui/core';
import CancelIcon from '@material-ui/icons/Cancel';


import SignIn from './auth/SignIn'
import SignUp from './auth/SignUp'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 800,
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

}));



const Navbar = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);
  const [state,setState]=useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen1 = () => {
    setOpen1(true);
  };
  const handleClose1 = () => {
    setOpen1(false);
  };


  const [isOpen, setIsOpen] = useState(false);
  // const toggle = () => setIsOpen(!isOpen);
  // state = { clicked: false }

  const handleClick = () => {
    setState(true);
    // this.setState({ clicked: !this.state.clicked })
  }


    return (
      <>
        <nav className="NavbarItems">
          <h1 className="navbar-logo">
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
          <div className="menu-icon" onClick={handleClick}>
            <i className={state ? 'fas fa-times' : 'fas fa-bars'}></i>
          </div>
          <ul className={state ? 'nav-menu active' : 'nav-menu'}>
            <li><Link className="nav-links" to="/Profile">Profile</Link></li>
            <li><Link className="nav-links" to="/Dashboard">Dashboard</Link></li>
            <li><Link className="nav-links" onClick={handleOpen}>Signin </Link></li>
            {/* <li><Link className="nav-links" onClick={handleOpen1}>Signup </Link></li> */}
          </ul>
        </nav>
        <div style={{ marginBottom: 100 }}>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={open}>
              <Card>
                <Grid container justify="flex-end" >
                  <Grid ><Button color="white" style={{ margin: "0px", padding: "0px" }} onClick={handleClose}><CancelIcon /></Button></Grid>
                </Grid>
                <SignIn
                  setOpen={setOpen}
                  setOpen1={setOpen1}
                />
              </Card>
            </Fade>
          </Modal>

          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={open1}
            onClose={handleClose1}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={open1}>

              <Card>
                <Grid container justify="flex-end" >
                  <Grid ><Button color="white" style={{ margin: "0px", padding: "0px" }} onClick={handleClose1}><CancelIcon /></Button></Grid>
                </Grid>
                <SignUp
                  setOpen={setOpen}
                  setOpen1={setOpen1}
                />
              </Card>
            </Fade>
          </Modal>
        </div>
      </>
    )

}

export default Navbar
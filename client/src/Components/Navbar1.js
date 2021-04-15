import React, { useState } from "react";
import { Link } from 'react-router-dom'

//signin and signup
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Card, Grid } from '@material-ui/core';
import CancelIcon from '@material-ui/icons/Cancel';

import SignIn from './auth/SignIn'
import SignUp from './auth/SignUp'
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




const Navbar1 = () => {

  //for sigin signup
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);
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
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div style={{ marginBottom: 100 }}>
      <Navbar color="dark" dark expand="md" fixed="top">
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

            <button type="button" onClick={handleOpen}> Signin</button>
            <button type="button" onClick={handleOpen1}>SignUp</button>
            {/* <Button component={Link} to='/signin' href="/signin" color="success"className="ml-3" >SIGN IN</Button>
            <Button color="success"className="ml-3" type="submit">Sign UP</Button> */}
          </Nav>
        </Collapse>
      </Navbar>

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
  );
};

export default Navbar1;

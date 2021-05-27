import React from 'react';
import './EDashboard.css';
import './EDash.css';
import EDash from  "./EDash"
import { useState } from "react"; 
<<<<<<< HEAD
//import FullOption from './FullOption.tsx';
=======

import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Col, Row
} from 'reactstrap';

import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '92%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));
>>>>>>> a7f5a66ada5eb93172493e7f6f2b05886af41e15

const EDashboard = () =>
{
  const [state,setState]=useState(false);
  const classes = useStyles();
  const handleClick = () => {
    setState(!state)
  }
    return(
        <div className="row" id="ewhole"> 
        <div className="col-3 eside">
     <EDash/>
    </div>
    <div className="col-9 emainss">
    <div className="earrows">
    <i className={state ? 'fas fa-arrow-left' : 'fas fa-arrow-right'} onClick={handleClick}></i>
    <ul className={state ? 'ecd eside' : 'eab'}>
    <EDash/>
    </ul>
  </div>
    <div className="container">
    <div className="row align-items-start">
      <div className="col">
      <div  className="eone" id="ecrd" style={{width:250,height:150}}>
      <div className="ecrcle0">
      <i className="far fa-file-alt" id="eikons"></i>
      </div>
        <p className="etxt">Total Job Posted</p>
    </div>
      </div>
      <div className="col">
      <div className="etwo" id="ecrd" style={{width:250,height:150}}>
      <div className="ecrcle1">
      <i className="fas fa-clipboard-check" id="eikons"></i>
      </div>
        <p className="etxt">Review</p>
    </div>
      </div>
      <div className="col">
      <div className="ethree" id="ecrd" style={{width:250,height:150}}>
      <div className="ecrcle2">
      <i className="far fa-check-square" id="eikons"></i>
      </div>
        <p className="etxt">Applications Approved</p>
    </div>
      </div>
    </div>
    <div className="row align-items-center" id="esrow">

      <div className="col-md-6" id="eleftapp">
      <h className="enp">New Applications</h>
      <table className="table" id="tbl">
      <thead>
        <tr>
          <th scope="col">XYZ(Applied for....)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">XYZ(Applied for....)</th>
        </tr>
        <tr>
          <th scope="row">XYZ(Applied for...)</th>
        </tr>
        <tr>
          <th scope="row">XYZ(Applied for...)</th>
        </tr>
      </tbody>
    </table>

  
      </div>

      <div className="col-md-4" id="ebeftapp">
<<<<<<< HEAD
    
{/* 
    <FullOption
  data={[
    { title: 'Applications', value: 18, color: '#000080' },
    { title: 'Selected', value: 10, color: '#008000' },
    { title: 'On Hold', value: 10, color: '#FFFF00' },
    { title: 'Rejected', value: 62, color: '#FF0000' },

  ]}
/>; */}
=======
>>>>>>> a7f5a66ada5eb93172493e7f6f2b05886af41e15

      </div>
    </div>
    
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading} ><h5 >JOB POSTED BY YOU</h5></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget. */}
            <Row className="mt-3">
                                <Col className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mt-3">
                                    <Card body className="sz hvr">
                                        <CardTitle tag="h5">Company Name / Title </CardTitle>
                                        <CardTitle tag="h5">Post Name</CardTitle>
                                        <CardTitle tag="h6">Vecancy</CardTitle>
                                            <CardText style={{ textAlign: "Left" }}>Experience</CardText>
                                             <CardText>Address / Location</CardText>
                                            <CardText>Job Type</CardText>
                                             <CardText>Salary</CardText>
                                             <CardText>Date Of Post</CardText>
                                        <CardText style={{ textAlign: "center" }}>Thank You</CardText>
                                    </Card>
                                </Col>
                                <Col className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mt-3">
                                    <Card body className="sz hvr">
                                    <CardTitle tag="h5"> Company Name / TITLE </CardTitle>
                                        <CardTitle tag="h5">Post Name</CardTitle>
                                        <CardTitle tag="h6">Vecancy</CardTitle>
                                            <CardText>Experience</CardText>
                                             <CardText>Address</CardText>
                                            <CardText>Job Type</CardText>
                                             <CardText>Salary</CardText>
                                             <CardText>Date Of Post</CardText>
                                        <CardText style={{ textAlign: "center" }}>Thank You</CardText>
                                    </Card>
                                </Col>
                                <Col className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mt-3">
                                    <Card body className="sz hvr">
                                    <CardTitle tag="h5">Company Name /TITLE </CardTitle>
                                        <CardTitle tag="h5">Post Name</CardTitle>
                                        <CardTitle tag="h6">Vecancy</CardTitle>
                                            <CardText>Experience</CardText>
                                             <CardText>Address</CardText>
                                            <CardText>Job Type</CardText>
                                             <CardText>Salary</CardText>
                                             <CardText>Date Of Post</CardText>
                                        <CardText style={{ textAlign: "center" }}>Thank You</CardText>
                                    </Card>
                                </Col>
                            
                            
                                <Col className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mt-3">
                                    <Card body className="sz hvr">
                                    <CardTitle tag="h5">Company Name / TITLE </CardTitle>
                                        <CardTitle tag="h5">Post Name</CardTitle>
                                        <CardTitle tag="h6">Vecancy</CardTitle>
                                            <CardText>Experience</CardText>
                                             <CardText>Address</CardText>
                                            <CardText>Job Type</CardText>
                                             <CardText>Salary</CardText>
                                             <CardText>Date Of Post</CardText>
                                        <CardText style={{ textAlign: "center" }}>Thank You</CardText>
                                    </Card>
                                </Col>
                                <Col className="col-lg-6 col-md-6 col--sm-12 col-xs-12 mt-3">
                                    <Card body className="sz hvr">
                                    <CardTitle tag="h5">Company Name / TITLE </CardTitle>
                                        <CardTitle tag="h5">Post Name</CardTitle>
                                        <CardTitle tag="h6">Vecancy</CardTitle>
                                            <CardText>Experience</CardText>
                                             <CardText>Address</CardText>
                                            <CardText>Job Type</CardText>
                                             <CardText>Salary</CardText>
                                              <CardText>Date Of Post</CardText>
                                        <CardText style={{ textAlign: "center" }}>Thank You</CardText>
                                    </Card>
                                </Col>
                                <Col className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mt-3">
                                    <Card body className="sz hvr">
                                    <CardTitle tag="h5">Company Name / TITLE </CardTitle>
                                        <CardTitle tag="h5">Post Name</CardTitle>
                                        <CardTitle tag="h6">Vecancy</CardTitle>
                                            <CardText>Experience</CardText>
                                             <CardText>Address</CardText>
                                            <CardText>Job Type</CardText>
                                             <CardText>Salary</CardText>
                                             <CardText>Date Of Post</CardText>
                                        <CardText style={{ textAlign: "center" }}>Thank You</CardText>
                                    </Card>
                                </Col>
                            </Row>
          </Typography>
        </AccordionDetails>
      </Accordion>
      
    </div>

  </div>
    </div>
    </div>
    )
} 

export default EDashboard;
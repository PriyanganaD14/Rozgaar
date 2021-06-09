import React, {useEffect } from 'react';
import './EDashboard.css';
import './EDash.css';
import EDash from  "./EDash"
import { useState } from "react"; 
import PieChart from './PieChart'



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
import { extractEmpPosts } from '../../../actions/application'; 
import { CircularProgress } from '@material-ui/core';
import { useDispatch } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));


const EDashboard = () =>
{ 
  const user = JSON.parse(localStorage.getItem('profile')); 
  const [jobs, setJobs] = useState([]); 
  const [state,setState]=useState(false);
  const [error, setError] = useState(""); 
  const dispatch = useDispatch();
  const classes = useStyles();
  
  console.log(user?.result?._id); 

  useEffect(() => {    
    const dummy = async () => {
      return await setJobs(await extractEmpPosts(user?.result?._id));
    }
    dummy();
  }, [])
  
  const handleSubmit = async (e) => {
    e.preventDefault(); 
    const userId = user?.result?._id;
    
    const data = await extractEmpPosts(userId);
 
    
    if(data?.error) {
      setError(data?.error);
      return;
    }
    setJobs(data?.result);
    
    console.log(jobs);
    dispatch({ type: "APPLICATIONS", data})
  }

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
        <p className="etxt">Applications Pending</p>
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
      <PieChart />
      </div>
    </div>
    
    <div className={classes.root} className="zobs">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          onClick={handleSubmit}
        >
          <Typography className={classes.heading} style={{color:'green'}}><h5 onClick={handleSubmit}>JOB POSTED BY YOU</h5></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="zobcard">
            {error 
              ? <h1>{error}</h1>
              : (!jobs?.length 
              ? <CircularProgress /> 
              :  <div>
                  <h1>{jobs.length} {jobs.length === 1 ? `job` : `jobs`} posted by you</h1>
                  <Row> 
                  {jobs.map((job) => (
              <Col className="col-lg-6 col-md-6 col-sm-12 col-xs-12" key={job._id}>
                  <Card body className="mb-4 mt-4 cr sz hvr" style={{ textAlign: "center"}}>
                  <CardTitle tag="h5">Title: {job?.title.toUpperCase()} </CardTitle>
                      <CardTitle tag="h6">Vacancy: {job?.vacancy}</CardTitle>
                           <CardText>
                           Adddress: {` `}
                           {job?.location?.city}, 
                           {` `}
                           {job?.location?.state}
                           </CardText>
                           <CardText>whoCanApply: {job?.whoCanApply}</CardText>
                          <CardText>Highest Qualification: {job?.highestQual}</CardText>
                           <CardText>Salary: {job?.salary}</CardText>
                           <CardText>Date Posted: {job?.dateOfPost.substring(10,0)}</CardText>
                  </Card>
              </Col>
              ))}
                  </Row>   
            </div>
              )} 
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
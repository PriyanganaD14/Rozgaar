import React from 'react'
import './Dashboard.css'
import './Dash.css'
import Dash from  "./Dash"
import { useState } from "react"; 

const Dashboard = () =>
{
  const [state,setState]=useState(false);
  const handleClick = () => {
    setState(!state)
  }
    return(
        <div className="row" id="whole"> 
        <div className="col-3 side">
     <Dash/>
    </div>
    <div className="col-9 mainss">
    <div className="arrows">
    <i className={state ? 'fas fa-arrow-left' : 'fas fa-arrow-right'} onClick={handleClick}></i>
    <ul className={state ? 'cd side' : 'ab'}>
    <Dash/>
    </ul>
  </div>
    <div className="container">
    <div className="row align-items-start">
      <div className="col">
      <div  className="one" id="crd" style={{width:250,height:150}}>
      <div className="crcle0">
      <i className="far fa-file-alt" id="ikons"></i>
      </div>
        <p className="txt">Total Job Applied</p>
    </div>
      </div>
      <div className="col">
      <div className="two" id="crd" style={{width:250,height:150}}>
      <div className="crcle1">
      <i className="fas fa-clipboard-check" id="ikons"></i>
      </div>
        <p className="txt">Applications Submit</p>
    </div>
      </div>
      <div className="col">
      <div className="three" id="crd" style={{width:250,height:150}}>
      <div className="crcle2">
      <i className="far fa-check-square" id="ikons"></i>
      </div>
        <p className="txt">Applications Approved</p>
    </div>
      </div>
    </div>
    <div className="row align-items-center" id="srow">

      <div className="col-md-6" id="leftapp">
      <h className="np">New Applications</h>
      <table class="table" id="tbl">
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

      <div className="col-md-6" id="leftapp">
      <h className="np">Total Applications</h>
      <table class="table" id="tbl">
      <thead>
        <tr>
          <th scope="col"><i className="fas fa-circle ek"></i>
          <h className="rc">Applications</h>
          <h className="dc">18%</h>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row"><i className="fas fa-circle do"></i>
          <h className="rc">Selected</h>
          <h className="dc">10%</h>
          </th>
        </tr>
        <tr>
          <th scope="row"><i className="fas fa-circle teen"></i>
          <h className="rc">On Hold</h>
          <h className="dc">10%</h>
          </th>
        </tr>
        <tr>
          <th scope="row"><i className="fas fa-circle char"></i>
          <h className="rc">Rejected</h>
          <h className="dc">62%</h>
          </th>
        </tr>
      </tbody>
    </table>
      </div>

    </div>
  </div>
    </div>
    </div>
    )
} 

export default Dashboard;
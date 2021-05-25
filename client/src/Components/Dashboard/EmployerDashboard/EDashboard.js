import React from 'react';
import './EDashboard.css';
import './EDash.css';
import EDash from  "./EDash"
import { useState } from "react"; 

const EDashboard = () =>
{
  const [state,setState]=useState(false);
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

      </div>
    </div>
  </div>
    </div>
    </div>
    )
} 

export default EDashboard;
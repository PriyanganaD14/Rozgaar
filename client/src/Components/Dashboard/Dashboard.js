import React from 'react'
import './Dashboard.css'
import './dash.css'
import {Link} from "react-router-dom"

 
const Dashboard = () =>
{
    return(
        <div className="row"> 
        <div className="col-3 side">
        <div className="col-md-2 col-sm-1 hidden-xs display-table-cell v-align box" id="navigation">
        <div className="logo">
        </div>
        <div className="navi">
            <ul>
                <li className="active"><Link to="Dashboard/dashboard"><i className="fa fa-home" aria-hidden="true"></i><span className="hidden-xs hidden-sm">Dashboard</span></Link></li>
                <li><Link to="#"><i className="fa fa-tasks" aria-hidden="true"></i><span className="hidden-xs hidden-sm">Jobs</span></Link></li>
                <li><Link to="#"><i className="far fa-address-card" aria-hidden="true"></i><span className="hidden-xs hidden-sm">Applications</span></Link></li>
                <li><Link to="#"><i className="fas fa-bookmark" aria-hidden="true"></i><span className="hidden-xs hidden-sm">Bookmarks</span></Link></li>
                <li><Link to="#"><i className="fa fa-cog" aria-hidden="true"></i><span className="hidden-xs hidden-sm">Setting</span></Link></li>
                <li><Link to="/Profile"><i className="fa fa-user" aria-hidden="true"></i><span className="hidden-xs hidden-sm">Profile</span></Link></li>
                <li><Link to="#"><i className="fas fa-sign-out-alt" aria-hidden="true"></i><span className="hidden-xs hidden-sm">Logout</span></Link></li>     
            </ul>
        </div>
    </div>
    </div>
    <div className="col-9 mainss">
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
    <div className="row align-items-end">
      <div className="col">
        6
      </div>
    </div>
  </div>
    </div>
    </div>
    )
} 

export default Dashboard;
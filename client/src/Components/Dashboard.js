import React from 'react'
import './Dashboard.css'
 
 
const Dashboard = () =>
{
    return(
        <div>
        <div className="col-md-2 col-sm-1 hidden-xs display-table-cell v-align box" id="navigation">
        <div className="logo">
        </div>
        <div className="navi">
            <ul>
                <li className="active"><a href="#"><i className="fa fa-home" aria-hidden="true"></i><span className="hidden-xs hidden-sm">Dashboard</span></a></li>
                <li><a href="https://www.google.com/"><i className="fa fa-tasks" aria-hidden="true"></i><span className="hidden-xs hidden-sm">Jobs</span></a></li>
                <li><a href="https://www.google.com/"><i className="far fa-address-card" aria-hidden="true"></i><span className="hidden-xs hidden-sm">Applications</span></a></li>
                <li><a href="https://www.google.com/"><i className="fas fa-bookmark" aria-hidden="true"></i><span className="hidden-xs hidden-sm">Bookmarks</span></a></li>
                <li><a href="https://www.google.com/"><i className="fa fa-cog" aria-hidden="true"></i><span className="hidden-xs hidden-sm">Setting</span></a></li>
                <li><a href="https://www.google.com/"><i className="fa fa-user" aria-hidden="true"></i><span className="hidden-xs hidden-sm">Profile</span></a></li>
                <li><a href="https://www.google.com/"><i className="fas fa-sign-out-alt" aria-hidden="true"></i><span className="hidden-xs hidden-sm">Logout</span></a></li>
            </ul>
        </div>
    </div>
    <div className="col-md-10 col-sm-11" id="dfs">
    </div>
    </div>
    )
} 

export default Dashboard;
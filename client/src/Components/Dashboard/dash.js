import  React from "react"
import "./Dash.css"
import {Link} from "react-router-dom"
// import { useSelector } from "react-redux"

const Dash = () =>
{  
    const user = JSON.parse(localStorage.getItem('profile'));
  
    return (
       <>
       <div className="col-md-2 col-sm-1 hidden-xs display-table-cell v-align box" id="navigation">
       <div className="logo">
       </div>
       <div className="navi">
           {user.result.userType ? ( 
               <ul>
               <li className="active dummy"><Link to="/Dashboard"><i className="fa fa-home" aria-hidden="true"></i><span className="hidden-xs hidden-sm">Dashboard</span></Link></li>
               <li><Link to="#"><i className="fa fa-tasks" aria-hidden="true"></i><span className="hidden-xs hidden-sm">Jobs</span></Link></li>
               <li><Link to={user.result.userType ? "/employer/Application":"/jobSeeker/Application"}><i className="far fa-address-card" aria-hidden="true"></i><span className="hidden-xs hidden-sm">Applications</span></Link></li>   
               <li className="reactive"><Link to={"/employer/postJob"}><i className="fas fa-bookmark" aria-hidden="true"></i><span className="hidden-xs hidden-sm">Post Job</span></Link></li>
               <li><Link to="#"><i className="fa fa-cog" aria-hidden="true"></i><span className="hidden-xs hidden-sm">Setting</span></Link></li>
               <li><Link to={user.result.userType ? "/employer/Profile":"/jobSeeker/Profile"}><i className="fa fa-user" aria-hidden="true"></i><span className="hidden-xs hidden-sm">Profile</span></Link></li>
               <li><Link to="#"><i className="fas fa-sign-out-alt" aria-hidden="true"></i><span className="hidden-xs hidden-sm">Logout</span></Link></li>
               </ul>  
                 ) : 
                 (
            <ul>
            <li className="active dummy"><Link to="/Dashboard"><i className="fa fa-home" aria-hidden="true"></i><span className="hidden-xs hidden-sm">Dashboard</span></Link></li>
            <li><Link to="#"><i className="fa fa-tasks" aria-hidden="true"></i><span className="hidden-xs hidden-sm">Jobs</span></Link></li>
            <li><Link to={user.result.userType ? "/employer/Application":"/jobSeeker/Application"}><i className="far fa-address-card" aria-hidden="true"></i><span className="hidden-xs hidden-sm">Applications</span></Link></li>   
            <li><Link to="#"><i className="fa fa-cog" aria-hidden="true"></i><span className="hidden-xs hidden-sm">Setting</span></Link></li>
            <li><Link to={user.result.userType ? "/employer/Profile":"/jobSeeker/Profile"}><i className="fa fa-user" aria-hidden="true"></i><span className="hidden-xs hidden-sm">Profile</span></Link></li>
            <li><Link to="#"><i className="fas fa-sign-out-alt" aria-hidden="true"></i><span className="hidden-xs hidden-sm">Logout</span></Link></li>
            </ul>
           )} 
       </div>
   </div>
       </>
    )
}
export default Dash
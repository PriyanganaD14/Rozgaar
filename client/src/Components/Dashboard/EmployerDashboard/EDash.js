import  React from "react"
import "./EDash.css"
import {Link} from "react-router-dom"

const EDash = () =>
{
    return (
       <>
       <div className="col-md-2 col-sm-1 hidden-xs display-table-cell v-align box" id="enavigation">
       <div className="elogo">
       </div>
       <div className="enavi">
           <ul>
               <li className="active"><Link to="/Dashboard"><i className="fa fa-home" aria-hidden="true"></i><span className="hidden-xs hidden-sm">Dashboard</span></Link></li>
               <li><Link to="#"><i className="fa fa-tasks" aria-hidden="true"></i><span className="hidden-xs hidden-sm">Jobs</span></Link></li>
               <li><Link to="/Application"><i className="far fa-address-card" aria-hidden="true"></i><span className="hidden-xs hidden-sm">Applications</span></Link></li>
               <li><Link to="/employer/postJob"><i className="fas fa-bookmark" aria-hidden="true"></i><span className="hidden-xs hidden-sm">Post Job</span></Link></li>
               <li><Link to="#"><i className="fa fa-cog" aria-hidden="true"></i><span className="hidden-xs hidden-sm">Setting</span></Link></li>
               <li><Link to="/Profile"><i className="fa fa-user" aria-hidden="true"></i><span className="hidden-xs hidden-sm">Profile</span></Link></li>
               <li><Link to="#"><i className="fas fa-sign-out-alt" aria-hidden="true"></i><span className="hidden-xs hidden-sm">Logout</span></Link></li>     
           </ul>
       </div>
   </div>
       </>
    )
}
export default EDash;
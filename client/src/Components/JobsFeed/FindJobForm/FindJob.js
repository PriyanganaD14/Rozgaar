import React from 'react';
import './FindJob.css';
import ApplyJob from "./ApplyJob/ApplyJob"



const FindJob = ( props ) =>
{
    return (
        <div className="container"  style={{marginTop: "-70px"}}>

        <p className="heads">Apply Job</p>

        <div className="row">
        <ApplyJob jobPostId= {props.location.jobPostId}/>
        </div>

        </div>
    )
}

export default FindJob;
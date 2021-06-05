import React from 'react';
import './FindJob.css';
import Personal from "./Personal/Personal"
const FindJob = () =>
{
    return (
        <div className="container">

        <p className="heads">JOB APPLICATION</p>

        <div className="row">
        <Personal/>
        </div>

        </div>
    )
}

export default FindJob;
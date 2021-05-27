

import React from 'react';
import './PostJob.css';

const PostJob = () =>
{
    return (
        <div className="container">

        <h2 className="headss">Post a Job </h2>

        <div className="row">
        <div className="xdd container">
        <form className="needs-validation">
  <p className="xsd">General Information:-</p>
  <div className="form-row">
    <div className="col-lg-4 col-md-4 mb-3">
    <label for="exampleJobTitle">Job Title</label>
    <input type="text" className="form-control" name="jobTitle" id="exampleJobTitle" placeholder="Enter Job Titile" required/>
    <div className="invalid-feedback">
    Please provide a valid Job Title.
    </div>
    </div>
    <div className="col-lg-4 col-md-4 mb-3">
    <label for="exampleJobType">Job Type</label>
    <select type="select" className="custom-select mr-sm-2" name="jobType" id="exampleJobType">
        <option selected>Select Job Type</option>
        <option value="1">Driver</option>
        <option value="2">Delivery Boy</option>
        <option value="3">Security Guard</option>
        <option value="4">Receptionist</option>
        <option value="5">Field Sales</option>
        <option value="6">Cook</option>
        <option value="7">Mason</option>
        <option value="8">Maid/Servant</option>
      </select>
    <div className="invalid-feedback">
    Please select a valid Job Type.
    </div>
    </div>
    <div className="col-lg-4 col-md-4 mb-3">
      <label for="exampleSalary">Salary</label>
      <div className="input-group">
        <input type="number" className="form-control" name="salary" id="exampleSalary" placeholder="Enter Salary"required/>
        <div className="invalid-feedback">
          Please provide paid salary
        </div>
      </div>
    </div>
    <div className="col-lg-4 col-md-4 mb-3">
    <label for="exampleSkill">Skill</label>
    <select type="select" className="custom-select mr-sm-2" name="skill" id="exampleSkill">
        <option selected>Select Required Skill</option>
        <option value="1">Driving</option>
        <option value="2">Communication and Skills</option>
        <option value="3">Cooking</option>
        <option value="4">Housekeeping hard Skills</option>
      </select>
    <div className="invalid-feedback">
    Please select a required skill.
    </div>
    </div>
    <div className="col-lg-4 col-md-4 mb-3">
    <label for="exampleQualification">Qualification</label>
    <select type="select" className="custom-select mr-sm-2" name="qualification" id="exampleQualification">
        <option selected>Select Required Qualification</option>
        <option value="1">Graduation</option>
        <option value="2">Higher Secondary</option>
        <option value="3">Matric</option>
        <option value="4">Below Matric</option>
      </select>
    <div className="invalid-feedback">
    Please select a required qualification.
    </div>
    </div>
    <div className="col-lg-4 col-md-4 mb-3">
    <label for="exampleGender">Who Can Apply</label>
    <select type="select" className="custom-select mr-sm-2" name="gender" id="exampleGender">
        <option selected>Select who can</option>
        <option value="1">Male and Female both</option>
        <option value="2">Male</option>
        <option value="3">Female</option>
      </select>
    <div className="invalid-feedback">
    Please select required gender.
    </div>
    </div>
    <div className="col-lg-4 col-md-4 mb-3">
    <label for="exampleVacancy">No of Vacancy</label>
    <input type="text" className="form-control" name="vacancy" id="exampleVacancy" placeholder="Enter Vacancy" required/>
    <div className="invalid-feedback">
    Please provide  valid vacancy.
    </div>
    </div>
    <div className="col-lg-4 col-md-4 mb-3">
    <label for="exampleLanguage">Job Language</label>
    <select type="select" className="custom-select mr-sm-2" name="language" id="exampleLanguage">
        <option selected>Select Required Language</option>
        <option value="1">English</option>
        <option value="2">Hindi</option>
        <option value="3">Bengali</option>
      </select>
    <div className="invalid-feedback">
    Please select required language.
    </div>
    </div>
  </div>
  <p className="xsd">Address :-</p>
  <div className="form-row">
  <div className="col-md-4 mb-3">
      <label for="exampleLocality">Locality</label>
      <input type="text" className="form-control" name="locality" id="exampleLocalit" placeholder="Enter Locality" required/>
      <div className="invalid-feedback">
        Please provide a valid input
      </div>
    </div>
    <div className="col-md-4 mb-3">
    <label for="exampleCity">City</label>
    <input type="text" className="form-control" name="city" id="exampleCity" placeholder="Enter City" required/>
    <div className="invalid-feedback">
      Please provide a valid city.
    </div>
  </div>
  <div className="col-md-4 mb-3">
      <label for="exampleDistrict">District</label>
      <input type="text" className="form-control" name="district" id="exampleDistrict" placeholder="Enter District" required/>
      <div className="invalid-feedback">
        Please provide a valid district
      </div>
    </div>
    <div className="col-md-4 mb-3">
    <label for="exampleState">State</label>
    <input type="text" className="form-control" name="state" id="exampleState" placeholder="Enter State" required/>
    <div className="invalid-feedback">
      Please provide a valid state
    </div>
  </div>
  <div className="col-md-4 mb-3">
    <label for="examplePincode">Pincode</label>
    <input type="text" className="form-control" name="pincode" id="examplePincode" placeholder="Enter Pincode" required/>
    <div className="invalid-feedback">
      Please provide a valid pincode
    </div>
  </div>
  </div>

 <p className="xsd">Job Description :-</p>
 <div className="form-row">
     <div className="col-lg-12 col-md-12 col-sm-12 col-xm-12">
     <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon">
                <i className="fas fa-pencil-alt prefix"></i>
                </span>
            </div>
            <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Write your job description..." rows="5"></textarea>
       
     </div>

 </div>
  <div className="form-group">
  <div className="form-check">
    <input className="form-check-input" type="checkbox" name="terms" value="" id="invalidCheck" required/>
    <label className="form-check-label" for="invalidCheck">
    By Submitting Job You Confirm That You Accept The Terms & Conditions And Privacy Policy
    </label>
    <div className="invalid-feedback">
      You must agree to  Terms and Conditions
    </div>
  </div>
</div>


  <button className="btn btn-primary" type="submit">+ Submit form</button>
</form>

        </div>
        </div>

        </div>
    )
}

export default PostJob;
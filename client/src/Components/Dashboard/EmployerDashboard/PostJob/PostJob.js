import React, { useState } from "react";
import "./PostJob.css";

import { postJob } from '../../../../actions/job';
import { useHistory } from "react-router";

const PostJob = () => {
  const user = JSON.parse(localStorage.getItem('profile'));
  const [message, setMessage] = useState("");  
  const history = useHistory();
  const initialState = {
    title:"", 
    whoCanApply:"",
    salary:"",
    skill:"",
    postedBy:"",
    vacancyCnt:"",
    locality:"", 
    city:"", 
    district:"",
    state:"", 
    pincode:"", 
    language:"", 
    highestQual:"",
    jobDescription:""
  }
  const [formData, setFormData] = useState(initialState);
  useState(() => {
    console.log(user?.result?._id);
    setFormData({ ...formData, ["postedBy"]: user?.result?._id })
  }, [])
  const handleChange = (e) => {
    // console.log(e.target.name, e.target.value);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleChange1 = (e) => {
    // console.log(e.target.name, e.target[e.target.value].label);
    setFormData({ ...formData, [e.target.name]: e.target[e.target.value].label });
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await postJob(formData);
    setMessage("Job is successfully created.");
    setFormData(initialState);
    setTimeout(() => {
      history.push('/employer/Dashboard');
    }, 2000)
  }
  return (
    <div className="container" style={{marginTop: "-70px"}}>
      <h2 className="headss">Post a Job </h2>
      <div className="row">
        <div className="xdd container">
          <form className="needs-validation" onSubmit={handleSubmit}>
            <p className="xsd">General Information:-</p>
            <div className="form-row">
              <div className="col-lg-4 col-md-4 mb-3">
                <label for="exampleJobTitle">Job Title</label>
                <input
                  type="text"
                  className="form-control"
                  name="title"
                  id="exampleJobTitle"
                  placeholder="Enter Job Titile"
                  required
                  onChange={handleChange}
                />
                <div className="invalid-feedback">
                  Please provide a valid Job Title.
                </div>
              </div>
              <div className="col-lg-4 col-md-4 mb-3">
                <label for="exampleJobType">Job Type</label>
                <select
                  type="select"
                  className="custom-select mr-sm-2"
                  name="jobType"
                  id="exampleJobType"
                  onChange={handleChange1}
                >
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
                  <input
                    type="number"
                    className="form-control"
                    name="salary"
                    id="exampleSalary"
                    placeholder="Enter Salary"
                    required
                    onChange={handleChange}
                  />
                  <div className="invalid-feedback">
                    Please provide paid salary
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 mb-3">
                <label for="exampleSkill">Skill</label>
                <select
                  type="select"
                  className="custom-select mr-sm-2"
                  name="skill"
                  id="exampleSkill"
                  onChange={handleChange1}
                >
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
                <select
                  type="select"
                  className="custom-select mr-sm-2"
                  name="highestQual"
                  id="exampleQualification"
                  onChange={handleChange1}
                >
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
                <select
                  type="select"
                  className="custom-select mr-sm-2"
                  name="whoCanApply"
                  id="exampleGender"
                  onChange={handleChange1}
                >
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
                <input
                  type="text"
                  className="form-control"
                  name="vacancyCnt"
                  id="exampleVacancy"
                  placeholder="Enter Vacancy"
                  required
                  onChange={handleChange}
                />
                <div className="invalid-feedback">
                  Please provide valid vacancy.
                </div>
              </div>
              <div className="col-lg-4 col-md-4 mb-3">
                <label for="exampleLanguage">Job Language</label>
                <select
                  type="select"
                  className="custom-select mr-sm-2"
                  name="language"
                  id="exampleLanguage"
                  onChange={handleChange1}
                >
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
                <input
                  type="text"
                  className="form-control"
                  name="locality"
                  id="exampleLocalit"
                  placeholder="Enter Locality"
                  required
                  onChange={handleChange}
                />
                <div className="invalid-feedback">
                  Please provide a valid input
                </div>
              </div>
              <div className="col-md-4 mb-3">
                <label for="exampleCity">City</label>
                <input
                  type="text"
                  className="form-control"
                  name="city"
                  id="exampleCity"
                  placeholder="Enter City"
                  required
                  onChange={handleChange}
                />
                <div className="invalid-feedback">
                  Please provide a valid city.
                </div>
              </div>
              <div className="col-md-4 mb-3">
                <label for="exampleDistrict">District</label>
                <input
                  type="text"
                  className="form-control"
                  name="district"
                  id="exampleDistrict"
                  placeholder="Enter District"
                  required
                  onChange={handleChange}
                />
                <div className="invalid-feedback">
                  Please provide a valid district
                </div>
              </div>
              <div className="col-md-4 mb-3">
                <label for="exampleState">State</label>
                <input
                  type="text"
                  className="form-control"
                  name="state"
                  id="exampleState"
                  placeholder="Enter State"
                  required
                  onChange={handleChange}
                />
                <div className="invalid-feedback">
                  Please provide a valid state
                </div>
              </div>
              <div className="col-md-4 mb-3">
                <label for="examplePincode">Pincode</label>
                <input
                  type="text"
                  className="form-control"
                  name="pincode"
                  id="examplePincode"
                  placeholder="Enter Pincode"
                  required
                  onChange={handleChange}
                />
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
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  placeholder="Write your job description..."
                  rows="5"
                  name="jobDescription"
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>
            <div className="form-group">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="terms"
                  value=""
                  id="invalidCheck"
                  required
                />
                <label className="form-check-label" for="invalidCheck">
                  By Submitting Job You Confirm That You Accept The Terms &
                  Conditions And Privacy Policy
                </label>
                <div className="invalid-feedback">
                  You must agree to Terms and Conditions
                </div>
              </div>
            </div>

            <button className="btn btn-primary" type="submit">
              + Submit form
            </button>
          </form>
          <h3>{message}</h3>
        </div>
      </div>
    </div>
  );
};

export default PostJob;

import React, { useState } from 'react'
import "./ApplyJob.css"

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import {applyJob} from '../../../../actions/job.js'
import { useHistory } from 'react-router';
import { PromiseProvider } from 'mongoose';


const ApplyJob = (props) =>
{
  const user = JSON.parse(localStorage.getItem('profile'));
  const [message, setMessage] = useState("");
  const history = useHistory();
  const [dob, setDob] = useState("");

  const qualInitstate = [{
    school: "",
    board:"",
    percent :""
  }]

  const expInitState = {
    job :"",
    year : ""
  }

  const[qualification, setQualification] = useState(qualInitstate);
  //console.log(qualification);

  const[experience, setExperience] = useState(expInitState);
  

  const initialState = {
    name: "",
    email :"", 
    contact :"",
    locality : "",
    city : "",
    district :"",
    state :"",
    pincode : "",
    skills : "",
    jobSeekerId: "",
    jobPostId : "",
    //dob :"",
    read : false,
    qualification : [],
    currentStatus : "",
    experience: {
      job :"",
      year:"",
    }  
  }
  const [formData, setFormData] = useState(initialState);
  
  const handleChangeExp= (event)=>{
      // console.log(event.target.value + " hh "+ event.target.name );
      // setExperience({...experience, [event.target.name] : event.target.value});
      // console.log(formData);
  }

  const handleChangeQual= (event)=>{
  //   console.log(event.target.name);
  //  // setFormData({...qualification, ["qualifi"] : formData)
  }

  const handleChange= (event)=>{
  //  console.log(event.target.value);
    setFormData({...formData,[event.target.name] : event.target.value})
  }

  const handleChange1 =(e)=>{
    setFormData({...formData, [e.target.name] : e.target[e.target.value].label })
  }

  const handleSubmit = async (e)=>{
    e.preventDefault();
    console.log(user?.result?._id, props.jobPostId)
    await setFormData((prevState) => {
      return {
        ...prevState,
        jobPostId: props.jobPostId,
        jobSeekerId: user?.result?._id,
       // dob: dob
      }
    })
    console.log(formData);
    const data = await applyJob(formData);
    setMessage("Applied successfully!");
    // setFormData(initialState);
    // setTimeout(()=>{
    //   history.push('/jobsFeed');
    // },2000);
  }

  return (
    
    <div className="xdd">
    <form className="needs-validation" onSubmit = {handleSubmit}>

      <p className="xsd">Personal Details :-</p>
      
      <div className="form-row">
        <div className="col-md-4 mb-3">
          <label for="validationCustom03">Full Name</label>
          <input type="text" 
          className="form-control" 
          id="validationCustom03" 
          name = "name"
          placeholder="Full Name" 
          onChange = {handleChange}
          required
          />
          <div className="invalid-feedback">
          Please provide a valid name.
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <label for="validationCustom03">Email</label>
          <input type="text" className="form-control" id="validationCustom03"
          name = "email"
          onChange = {handleChange}
          placeholder="Email" required/>
          <div className="invalid-feedback">
            Please provide a valid Email.
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <label for="validationCustomUsername">Contact</label>
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text" id="inputGroupPrepend">+91</span>
            </div>
            <input type="text" className="form-control" 
            id="validationCustomUsername" placeholder="Phone number"
            name = "contact"
            onChange = {handleChange}
            aria-describedby="inputGroupPrepend" required/>
            
            <div className="invalid-feedback">
              Please choose a username.
            </div>
          </div>
        </div>
      </div>

    <div className="form-row">
      <label className="Dob">Date Of Birth  :-</label>
      <DatePicker 
        selected={dob} 
        onChange={(date) => setDob(date)}
        name = "dob" 
      />
    </div>

    <p className="xsd">Address :-</p>
      <div className="form-row">
        <div className="col-md-4 mb-3">
            <label for="validationCustom03">Locality</label>
            <input type="text" className="form-control"
            name = "locality" 
            onChange = {handleChange}
            id="validationCustom03" placeholder="Locality" required/>
            <div className="invalid-feedback">
              Please provide a valid input
            </div>
          </div>

        <div className="col-md-4 mb-3">
          <label for="validationCustom03">City</label>
          <input type="text" className="form-control"
           id="validationCustom03" placeholder="City"
           name = "city"
           onChange= {handleChange}
           required/>
          <div className="invalid-feedback">
            Please provide a valid city.
          </div>
        </div>

        <div className="col-md-4 mb-3">
            <label for="validationCustom03">District</label>
            <input type="text" className="form-control"
             name = "district"
             onChange= {handleChange}
             id="validationCustom03" placeholder="District" required/>
            <div className="invalid-feedback">
              Please provide a valid district
            </div>
        </div>

        <div className="col-md-4 mb-3">
            <label for="validationCustom03">State</label>
            <input type="text" className="form-control"
             name = "state"
             onChange= {handleChange}
             id="validationCustom03" placeholder="State" required/>
            <div className="invalid-feedback">
              Please provide a valid state
            </div>
        </div>


        <div className="col-md-4 mb-3">
          <label for="validationCustom03">Pincode</label>
          <input type="text" className="form-control" 
           name = "pincode"
           onChange= {handleChange}
          id="validationCustom03" placeholder="Pincode" required/>
          <div className="invalid-feedback">
            Please provide a valid pincode
          </div>
        </div>
      </div>

      <p className="xsd">Skills :-</p>
      <div className="form-row">
        <div className="col-auto my-1">
          <label className="mr-sm-2 sr-only" for="inlineFormCustomSelect">Skills</label>
          <select className="custom-select mr-sm-2" id="inlineFormCustomSelect"
           name = "skills"
           onChange= {handleChange1} >

            <option selected>Skills</option>
            <option value="1">Cooking</option>
            <option value="2">Driving</option>
            <option value="3">Security guard</option>
            <option value="4">Receptionist</option>
          </select>
        </div>
      </div>


      <p className="xsd">Educational Qualification :-</p>
      <div className="form-row">
      <h6 className="can">Can You ?</h6>
      <div className="able">
      <div class="form-check form-check-inline">
      <input class="form-check-input" type="checkbox" id="inlineCheckbox1"
        name = "read"
      // value="option1"
      />
      <label class="form-check-label" for="inlineCheckbox1">Read</label>
      </div>
      <div class="form-check form-check-inline">
      <input class="form-check-input" type="checkbox" id="inlineCheckbox1" 
        name = "write"
        value="option1"/>

      <label class="form-check-label" for="inlineCheckbox1">Write</label>
      </div>
      </div>
      </div>
      { /* 10th */ }
      <div className="form-row met">
        <h className="matric">Matric</h>
        <div className="col-md-3 mb-3">
            <label for="validationCustom03">School</label>
            <input 
              type="text" 
              className="form-control" 
              name = "10th-school"
              onChange= {handleChangeQual}
              id="validationCustom03" 
              placeholder="School" 
            />
            <div className="invalid-feedback">
              Please provide a valid input
            </div>
        </div>

        <div className="col-md-3 mb-3">
          <label for="validationCustom03">Board</label>
          <input 
            type="text" 
            className="form-control"
            name = "10th-board"
            onChange= {handleChangeQual} 
            id="validationCustom03" 
            placeholder="Board"
          />

          <div className="invalid-feedback">
            Please provide a valid input
          </div>
          </div>

        <div className="col-md-3 mb-3">
          <label for="validationCustom03">Percentage</label>
          <input 
            type="text" 
            className="form-control" 
            name = "10th-percentage"
            onChange= {handleChangeQual}
            id="validationCustom03" 
            placeholder="Percentage" 
          />
          <div className="invalid-feedback">
            Please provide a valid input
          </div>
        </div>

      </div>

      <div className="form-row met">
      <h className="matric">Intermediate</h>
      <div className="col-md-3 mb-3">
          <label for="validationCustom03">School</label>
          <input 
            type="text" 
            className="form-control"
            name = "12th-school"
            onChange= {handleChangeQual}
            id="validationCustom03" 
            placeholder="School"
          />
          
          <div className="invalid-feedback">
            Please provide a valid input
          </div>
        </div>
      { /* 12th */ }
      <div className="col-md-3 mb-3">
        <label for="validationCustom03">Board</label>
        <input 
          type="text" 
          className="form-control" 
          name = "12th-board"
          onChange= {handleChangeQual}
          id="validationCustom03" placeholder="Board"
        />
        <div className="invalid-feedback">
          Please provide a valid input
        </div>
      </div>

      <div className="col-md-3 mb-3">
          <label for="validationCustom03">Percentage</label>
          <input type="text" className="form-control"
           id="validationCustom03" 
           name = "12th-percentage"
           onChange= {handleChangeQual}
           placeholder="Percentage" />
          <div className="invalid-feedback">
            Please provide a valid input
          </div>
        </div>
      </div>

      <div className="form-row met">
      <h className="matric">Graduation</h>
      <div className="col-md-3 mb-3">
          <label for="validationCustom03">School</label>
         
          <input 
            type="text" 
            className="form-control" 
            id="validationCustom03" 
            name = "grad-school"
            onChange= {handleChangeQual}
            placeholder="University" 
          />
         
          <div className="invalid-feedback">
            Please provide a valid input
          </div>
        </div>

        <div className="col-md-3 mb-3">
        <label for="validationCustom03">Board</label>
        
        <input 
          type="text" 
          className="form-control"
          id="validationCustom03"
          name = "grad-board"
          onChange= {handleChangeQual}
          placeholder="Degree" 
         />
        
        <div className="invalid-feedback">
          Please provide a valid input
        </div>
      </div>

        <div className="col-md-3 mb-3">
            <label for="validationCustom03">Percentage</label>
        
            <input 
              type="text" 
              className="form-control"
              id="validationCustom03"
              name = "grad-percentage"
              onChange= {handleChangeQual}
              placeholder="Percentage" 
            />
        
            <div className="invalid-feedback">
              Please provide a valid %
            </div>
          </div>

        </div>
      <div className="form-row">
          <div className="col-auto my-1">
              <h4>Current Status</h4>
              <label className="mr-sm-2 sr-only" for="inlineFormCustomSelect">Current Status</label>
              <select className="custom-select mr-sm-2"
                name = "currentStatus"
                onChange= {handleChange1}
               id="inlineFormCustomSelect">
                <option selected>Current Status</option>
                <option value="1">Employed</option>
                <option value="2">Student</option>
                <option value="3">Unemployed</option>
                <option value="4">Self Employed</option>
              </select>
            </div>
        </div>

      <p className="xsd">Job Experience :-</p>
        
      <div className="form-row">
          <div className="col-md-3 mb-3">
          <label for="validationCustom03">Job</label>
          <input type="text" className="form-control" 
          id="validationCustom03" 
          name = "job"
          onChange= {handleChangeExp}
          placeholder="Job" />
            <div className="invalid-feedback">
              Please provide a valid input
            </div>
          </div>

          <div className="col-md-2 mb-3">
            <label for="validationCustom03">Year</label>
            <input type="text" className="form-control"
             id="validationCustom03"
             name = "year"
             onChange= {handleChangeExp}
             placeholder="year" />
            <div className="invalid-feedback">
              Please provide a valid year
            </div>
          </div>
        </div>

      <div className="form-group">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
            <label className="form-check-label" for="invalidCheck">
              Agree to terms and conditions
            </label>
            <div className="invalid-feedback">
              You must agree to our Terms n Conditions
            </div>
          </div>
        </div>


      <button className="btn btn-primary" type="submit">Submit form</button>
    </form>
    <h3>{message}</h3>
    
  </div>
  
  
  )
}
  
export default ApplyJob;
import React, { useState } from 'react'
import "./Personal.css"

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const Personal = () =>
{
    const [startDate, setStartDate] = useState(new Date());
    return (
        <div className="xdd">
        <form className="needs-validation" novalidate>
  <p className="xsd">Personal Details :-</p>
  <div className="form-row">
    <div className="col-md-4 mb-3">
    <label for="validationCustom03">Full Name</label>
    <input type="text" className="form-control" id="validationCustom03" placeholder="Full Name" required/>
    <div className="invalid-feedback">
    Please provide a valid name.
    </div>
    </div>
    <div className="col-md-4 mb-3">
    <label for="validationCustom03">Email</label>
    <input type="text" className="form-control" id="validationCustom03" placeholder="Email" required/>
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
        <input type="text" className="form-control" id="validationCustomUsername" placeholder="Phone number" aria-describedby="inputGroupPrepend" required/>
        <div className="invalid-feedback">
          Please choose a username.
        </div>
      </div>
    </div>
  </div>
  <div className="form-row">
  
  <label className="Dob">Date Of Birth  :-</label>
  <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />

  </div>
  <p className="xsd">Address :-</p>
  <div className="form-row">
  <div className="col-md-4 mb-3">
      <label for="validationCustom03">Locality</label>
      <input type="text" className="form-control" id="validationCustom03" placeholder="Locality" required/>
      <div className="invalid-feedback">
        Please provide a valid input
      </div>
    </div>
    <div className="col-md-4 mb-3">
    <label for="validationCustom03">City</label>
    <input type="text" className="form-control" id="validationCustom03" placeholder="City" required/>
    <div className="invalid-feedback">
      Please provide a valid city.
    </div>
  </div>
  <div className="col-md-4 mb-3">
      <label for="validationCustom03">District</label>
      <input type="text" className="form-control" id="validationCustom03" placeholder="District" required/>
      <div className="invalid-feedback">
        Please provide a valid district
      </div>
    </div>
    <div className="col-md-4 mb-3">
    <label for="validationCustom03">State</label>
    <input type="text" className="form-control" id="validationCustom03" placeholder="State" required/>
    <div className="invalid-feedback">
      Please provide a valid state
    </div>
  </div>
  <div className="col-md-4 mb-3">
    <label for="validationCustom03">Pincode</label>
    <input type="text" className="form-control" id="validationCustom03" placeholder="Pincode" required/>
    <div className="invalid-feedback">
      Please provide a valid pincode
    </div>
  </div>
  </div>
  <p className="xsd">Skills :-</p>
  <div className="form-row">
  <div className="col-auto my-1">
      <label className="mr-sm-2 sr-only" for="inlineFormCustomSelect">Skills</label>
      <select className="custom-select mr-sm-2" id="inlineFormCustomSelect">
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
  <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"/>
  <label class="form-check-label" for="inlineCheckbox1">Read</label>
  </div>
  <div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"/>
  <label class="form-check-label" for="inlineCheckbox1">Write</label>
  </div>
  </div>
  </div>
  <div className="form-row met">
  <h className="matric">Matric</h>
  <div className="col-md-3 mb-3">
      <label for="validationCustom03">School</label>
      <input type="text" className="form-control" id="validationCustom03" placeholder="School" required/>
      <div className="invalid-feedback">
        Please provide a valid input
      </div>
    </div>
    <div className="col-md-3 mb-3">
    <label for="validationCustom03">Board</label>
    <input type="text" className="form-control" id="validationCustom03" placeholder="Board" required/>
    <div className="invalid-feedback">
      Please provide a valid input
    </div>
  </div>
  <div className="col-md-3 mb-3">
      <label for="validationCustom03">Percentage</label>
      <input type="text" className="form-control" id="validationCustom03" placeholder="Percentage" required/>
      <div className="invalid-feedback">
        Please provide a valid input
      </div>
    </div>

  </div>

  <div className="form-row met">
  <h className="matric">Intermediate</h>
  <div className="col-md-3 mb-3">
      <label for="validationCustom03">School</label>
      <input type="text" className="form-control" id="validationCustom03" placeholder="School" required/>
      <div className="invalid-feedback">
        Please provide a valid input
      </div>
    </div>
    <div className="col-md-3 mb-3">
    <label for="validationCustom03">Board</label>
    <input type="text" className="form-control" id="validationCustom03" placeholder="Board" required/>
    <div className="invalid-feedback">
      Please provide a valid input
    </div>
  </div>
  <div className="col-md-3 mb-3">
      <label for="validationCustom03">Percentage</label>
      <input type="text" className="form-control" id="validationCustom03" placeholder="Percentage" required/>
      <div className="invalid-feedback">
        Please provide a valid input
      </div>
    </div>

  </div>

  <div className="form-row met">
  <h className="matric">Graduation</h>
  <div className="col-md-3 mb-3">
      <label for="validationCustom03">School</label>
      <input type="text" className="form-control" id="validationCustom03" placeholder="School" required/>
      <div className="invalid-feedback">
        Please provide a valid input
      </div>
    </div>
    <div className="col-md-3 mb-3">
    <label for="validationCustom03">Board</label>
    <input type="text" className="form-control" id="validationCustom03" placeholder="Board" required/>
    <div className="invalid-feedback">
      Please provide a valid input
    </div>
  </div>
  <div className="col-md-3 mb-3">
      <label for="validationCustom03">Percentage</label>
      <input type="text" className="form-control" id="validationCustom03" placeholder="Percentage" required/>
      <div className="invalid-feedback">
        Please provide a valid %
      </div>
    </div>

  </div>

  <div className="form-row">
  <div className="col-auto my-1">
      <label className="mr-sm-2 sr-only" for="inlineFormCustomSelect">Current Status</label>
      <select className="custom-select mr-sm-2" id="inlineFormCustomSelect">
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
  <input type="text" className="form-control" id="validationCustom03" placeholder="Job" required/>
  <div className="invalid-feedback">
    Please provide a valid input
  </div>
</div>
<div className="col-md-2 mb-3">
      <label for="validationCustom03">Year</label>
      <input type="text" className="form-control" id="validationCustom03" placeholder="year" required/>
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

        </div>
    )
}
export default Personal;
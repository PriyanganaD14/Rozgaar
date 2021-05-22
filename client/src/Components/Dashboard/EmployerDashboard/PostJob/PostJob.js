import React from 'react';
import Dash from '../EDash';
import { Col, Row, Form, FormGroup, Label, Input } from 'reactstrap';
import './PostJob.css';
import { useState } from "react"; 




const PostJob = ()=>{

    const [state,setState]=useState(false);
  const handleClick = () => {
    setState(!state)
  }

    return (
        <div>
            <div className="row">
            <div className="col-lg-3 sidee">
                <Dash/>
            </div>
            <div className="col-lg-9 minss">
            <div className="arrows">
    <i className={state ? 'fas fa-arrow-left' : 'fas fa-arrow-right'} onClick={handleClick}></i>
    <ul className={state ? 'cd side' : 'ab'}>
    <Dash/>
    </ul>
  </div>
                <h1 className="mb-4"><i>Post a Job</i></h1>
                <div className="frmgrp mr-5">
            <Form>       
      <Row className="container ml-1">
        <Col className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mt-4 szz">
          <FormGroup>
            <Label for="exampleCity">Job Title</Label>
            <Input type="text" name="city" id="exampleCity" placeholder="Enter Job Title"/>
          </FormGroup>
        </Col>
        <Col className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mt-4 szz">
          <FormGroup>
            <Label for="exampleState">User Name</Label>
            <Input type="text" name="state" id="exampleState" placeholder="User Name"/>
          </FormGroup>
        </Col>
        <Col className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mt-4 szz">
        <FormGroup>
        <Label for="exampleSelect">Job Type</Label>
        <Input type="select" name="select" id="exampleSelect">
          <option>Select Job Type </option>
          <option>Driver</option>
          <option>Delivery Boy</option>
          <option>Field Sales</option>
          <option>Receptionist</option>
          <option>Cook</option>
          <option>Maid/Servant</option>
          <option>Mason</option>
          <option>Security Guard</option>
        </Input>
      </FormGroup>
        </Col>
        <Col className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mt-4">
          <FormGroup>
            <Label for="exampleZip"> Min Salary</Label>
            <Input type="number" name="zip" id="exampleZip" placeholder="Offered Min Salary" className="szz"/>
          </FormGroup>  
        </Col>
        <Col className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mt-4 szz">
          <FormGroup>
            <Label for="exampleCity"> Max Salary</Label>
            <Input type="number" name="city" id="exampleCity" placeholder="Offered Max Salary"/>
          </FormGroup>
        </Col>
        <Col className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mt-4 szz">
        <FormGroup>
        <Label for="exampleSelect">Skill Requirements</Label>
        <Input type="select" name="select" id="exampleSelect">
          <option>Choose Skill </option>
          <option>Driving</option>
          <option>Communication and Skills</option>
          <option>Cooking</option>
          <option>Housekeeping hard Skills</option>
        </Input>
      </FormGroup>
        </Col>
        <Col className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mt-4 szz">
          <FormGroup>
            <Label for="exampleZip">Qualification</Label>
        <Input type="select" name="select" id="exampleSelect">
          <option>Choose Qualification </option>
          <option>Graduation</option>
          <option>Higher Secondary</option>
          <option>Metric</option>
          <option>Below Metric</option>
        </Input>
          </FormGroup>  
        </Col>
        <Col className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mt-4 szz">
          <FormGroup>
            <Label for="exampleZip">Gender</Label>
        <Input type="select" name="select" id="exampleSelect">
          <option>Choose Gender </option>
          <option>Male or Female</option>
          <option>Male</option>
          <option>Female</option>
        </Input>
          </FormGroup>  
        </Col>
        <Col className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mt-4 szz">
          <FormGroup>
            <Label for="exampleZip">No of Vacancy</Label>
            <Input type="text" name="zip" id="exampleZip" placeholder="Enter No of Vacancy"/>
          </FormGroup>  
        </Col>
        <Col className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mt-4 szz">
          <FormGroup>
            <Label for="exampleZip">Language Skill Requirements</Label>
        <Input type="select" name="select" id="exampleSelect">
          <option>Choose Language </option>
          <option>Choose Language</option>
          <option>English</option>
          <option>Hindi</option>
          <option>Bengali</option>
        </Input>
          </FormGroup>  
        </Col>
        <Col className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mt-4 szz">
          <FormGroup>
            <Label for="exampleCity">Locality</Label>
            <Input type="text" name="city" id="exampleCity" placeholder="Enter Locality"/>
          </FormGroup>
        </Col>
        <Col className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mt-4 szz">
          <FormGroup>
            <Label for="exampleCity">City</Label>
            <Input type="text" name="city" id="exampleCity" placeholder="Enter City"/>
          </FormGroup>
        </Col>
        <Col className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mt-4 szz">
          <FormGroup>
            <Label for="exampleCity">District</Label>
            <Input type="text" name="city" id="exampleCity" placeholder="Enter District"/>
          </FormGroup>
        </Col>
        <Col className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mt-4 szz">
          <FormGroup>
            <Label for="exampleCity">State</Label>
            <Input type="text" name="city" id="exampleCity" placeholder="Enter State"/>
          </FormGroup>
        </Col>
        <Col className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mt-4 szz">
          <FormGroup>
            <Label for="exampleCity">Pincode</Label>
            <Input type="text" name="city" id="exampleCity" placeholder="Enter Pincode"/>
          </FormGroup>
        </Col>
        <Col szz>
        <h5 style={{textAlign: "left"}}>Job Description</h5>
        </Col>
        <Col className=" col-lg-12 col-md-12 col-sm-12 col-xs-12 szz input-group">
            <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon">
                <i className="fas fa-pencil-alt prefix"></i>
                </span>
            </div>
            <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Write your job description" rows="5"></textarea>
        </Col>
        
        <Col className="col-lg-12 col-md-12 col-sm-12 col-xs-112 mt-4 szz">
        <FormGroup check>
        <Input type="checkbox" name="check" id="exampleCheck"/>
        <Label for="exampleCheck" check>By Submitting Job You Confirm That You Accept The Terms & Conditions And Privacy Policy</Label>
      </FormGroup>
      </Col>
      <Col className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mt-4 mb-4 szz">
      <button type="submit" class="btn btn-primary">+ Submit Your Job</button>
      </Col>
      </Row>


     
    </Form>
    </div>
   
            </div>
            </div>
        </div>
    );
}


export default PostJob;
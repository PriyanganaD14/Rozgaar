import React from 'react';
import Dash from  "../Dash";
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
        <Col className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mt-4">
          <FormGroup>
            <Label for="exampleCity">Job Title</Label>
            <Input type="text" name="city" id="exampleCity" placeholder="Enter Job Title"/>
          </FormGroup>
        </Col>
        <Col className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mt-4">
          <FormGroup>
            <Label for="exampleState">User Name</Label>
            <Input type="text" name="state" id="exampleState" placeholder="User Name"/>
          </FormGroup>
        </Col>
        <Col className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mt-4">
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
            <Label for="exampleZip">Salary</Label>
            <Input type="number" name="zip" id="exampleZip" placeholder="Offered Salary"/>
          </FormGroup>  
        </Col>
        <Col className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mt-4">
        <FormGroup>
        <Label for="exampleSelect">Skill Requirements</Label>
        <Input type="select" name="select" id="exampleSelect">
          <option>Choose Skill </option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option></option>
        </Input>
      </FormGroup>
        </Col>
        <Col className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mt-4">
          <FormGroup>
            <Label for="exampleZip">Qualification</Label>
        <Input type="select" name="select" id="exampleSelect">
          <option>Choose Qualification </option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
        </Input>
          </FormGroup>  
        </Col>
        <Col className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mt-4">
          <FormGroup>
            <Label for="exampleZip">Gender</Label>
        <Input type="select" name="select" id="exampleSelect">
          <option>Choose Gender </option>
          <option>Choose Gender</option>
          <option>Male or Female</option>
          <option>Male</option>
          <option>Female</option>
        </Input>
          </FormGroup>  
        </Col>
        <Col className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mt-4">
          <FormGroup>
            <Label for="exampleZip">No of Vacancy</Label>
            <Input type="text" name="zip" id="exampleZip" placeholder="Enter No of Vacancy"/>
          </FormGroup>  
        </Col>
        <Col className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mt-4">
          <FormGroup>
            <Label for="exampleZip">Language</Label>
            <Label for="exampleSelect">Skill Requirements</Label>
        <Input type="select" name="select" id="exampleSelect">
          <option>Choose Language </option>
          <option>Choose Language</option>
          <option>English</option>
          <option>Hindi</option>
          <option>Bengali</option>
        </Input>
          </FormGroup>  
        </Col>

        <h5 className="mt-4 ml-4 mb-3">Job Description</h5>

        <Col className=" col-lg-12 input-group">
            <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon">
                <i className="fas fa-pencil-alt prefix"></i>
                </span>
            </div>
            <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Write your job description" rows="5"></textarea>
        </Col>
        
        <Col className="col-lg-12 mt-4">
        <FormGroup check>
        <Input type="checkbox" name="check" id="exampleCheck"/>
        <Label for="exampleCheck" check>By Submitting Job You Confirm That You Accept The Terms & Conditions And Privacy Policy</Label>
      </FormGroup>
      </Col>
      <Col className="col-lg-12 mt-4 mb-4">
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
import React from 'react';
import { Form, Row, Col, FormGroup,Label, Input} from "reactstrap";
import { Card, Button, CardTitle, CardText } from 'reactstrap';
import "./JobsFeed.css";


const JobsFeed = ()=>{
    return(
<div className="container">
<Form>
<Row form>
        <Col md={6} sm={6}>
          <FormGroup>
          <div className="ikons">
            <Label for="jobcategory"><h3><b>JOB CATEGORY</b></h3></Label>
            <Input type="text" name="job" id="jobcategory" placeholder="Job-Category" />
      <i className="ikon"><svg width="1.4em" height="1.8em" viewBox="0 0 16 16" className="bi bi-bag-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M1 4h14v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4zm7-2.5A2.5 2.5 0 0 0 5.5 4h-1a3.5 3.5 0 1 1 7 0h-1A2.5 2.5 0 0 0 8 1.5z"/>
</svg></i>
</div>
          </FormGroup>
        </Col>
        <Col md={6} sm={6}>
          <FormGroup>
          <div className="ikons">
            <Label for="location"><h3><b>LOCATION</b></h3></Label>
            <Input type="text" name="location" id="location" placeholder="Location" />
            <i className="ikon"><svg width="1.5em" height="1.8em" viewBox="0 0 16 16" className="bi bi-geo-alt" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
</svg></i>
</div>
          </FormGroup>
        </Col>
      </Row>
</Form>

<Row>
      <Col className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
        <Card body className="mb-4 mt-4 cr"style={{textAlign:"center"}}>
          <CardTitle tag="h5">Post Name</CardTitle>
          <CardTitle tag="h6">Company Name</CardTitle>
          <CardText>Experience</CardText>
          <CardText>Address</CardText>
          <CardText>Job Type</CardText>
          <CardText>Salary</CardText>
          <Button type="button" color="primary" size="lg" className="btnsz">Apply Now</Button>
        </Card>
      </Col>
      <Col className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
        <Card body className="mb-4 mt-4 cr"style={{textAlign:"center"}}>
          <CardTitle tag="h5">Post Name</CardTitle>
          <CardTitle tag="h6">Company Name</CardTitle>
          <CardText>Experience</CardText>
          <CardText>Address</CardText>
          <CardText>Job Type</CardText>
          <CardText>Salary</CardText>
          <Button type="button" color="primary" size="lg" className="btnsz">Apply Now</Button>
        </Card>
      </Col>
      <Col className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
        <Card body className="mb-4 mt-4 cr"style={{textAlign:"center"}}>
          <CardTitle tag="h5">Post Name</CardTitle>
          <CardTitle tag="h6">Company Name</CardTitle>
          <CardText>Experience</CardText>
          <CardText>Address</CardText>
          <CardText>Job Type</CardText>
          <CardText>Salary</CardText>
          <Button type="button" color="primary" size="lg" className="btnsz">Apply Now</Button>
        </Card>
      </Col>
      <Col className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
        <Card body className="mb-4 mt-4 cr"style={{textAlign:"center"}}>
          <CardTitle tag="h5">Post Name</CardTitle>
          <CardTitle tag="h6">Company Name</CardTitle>
          <CardText>Experience</CardText>
          <CardText>Address</CardText>
          <CardText>Job Type</CardText>
          <CardText>Salary</CardText>
          <Button type="button" color="primary" size="lg" className="btnsz">Apply Now</Button>
        </Card>
      </Col>
      <Col className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
        <Card body className="mb-4 mt-4 cr"style={{textAlign:"center"}}>
          <CardTitle tag="h5">Post Name</CardTitle>
          <CardTitle tag="h6">Company Name</CardTitle>
          <CardText>Experience</CardText>
          <CardText>Address</CardText>
          <CardText>Job Type</CardText>
          <CardText>Salary</CardText>
          <Button type="button" color="primary" size="lg" className="btnsz">Apply Now</Button>
        </Card>
      </Col>
      <Col className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
        <Card body className="mb-4 mt-4 cr"style={{textAlign:"center"}}>
          <CardTitle tag="h5">Post Name</CardTitle>
          <CardTitle tag="h6">Company Name</CardTitle>
          <CardText>Experience</CardText>
          <CardText>Address</CardText>
          <CardText>Job Type</CardText>
          <CardText>Salary</CardText>
          <Button type="button" color="primary" size="lg" className="btnsz">Apply Now</Button>
        </Card>
      </Col>
      <Col className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
        <Card body className="mb-4 mt-4 cr"style={{textAlign:"center"}}>
          <CardTitle tag="h5">Post Name</CardTitle>
          <CardTitle tag="h6">Company Name</CardTitle>
          <CardText>Experience</CardText>
          <CardText>Address</CardText>
          <CardText>Job Type</CardText>
          <CardText>Salary</CardText>
          <Button type="button" color="primary" size="lg" className="btnsz">Apply Now</Button>
        </Card>
      </Col>
      <Col className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
        <Card body className="mb-4 mt-4 cr"style={{textAlign:"center"}}>
          <CardTitle tag="h5">Post Name</CardTitle>
          <CardTitle tag="h6">Company Name</CardTitle>
          <CardText>Experience</CardText>
          <CardText>Address</CardText>
          <CardText>Job Type</CardText>
          <CardText>Salary</CardText>
          <Button type="button" color="primary" size="lg" className="btnsz">Apply Now</Button>
        </Card>
      </Col>
     
    </Row>
</div>
    );
}


export default JobsFeed;
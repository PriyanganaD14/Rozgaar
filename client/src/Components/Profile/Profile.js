
import React from 'react';
import { Link } from "react-router-dom";
import profilepicture from '../Assets/ProfilePicture.jpg';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Col, Row
  } from 'reactstrap';
import './Profile.css';


const Profile = () => {
    return (
        <div>
            <div class="row ml-3 mr-3">
                <div className="col-lg-3">
                <Card style={{backgroundColor:"bisque", border:"none"}}>
        <CardImg className="mid" src={profilepicture} alt="Profile picture" style={{ width: "250px", height: "250px", borderRadius: "180px"}} />
        <CardBody className="middle">
          <CardTitle tag="h5">Rohan Roy</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Driver</CardSubtitle>
          <Link to="/Profile/ProfileUpdate" class="btn btn-primary btn-lg" role="button" aria-pressed="true"><b>Edit Profile</b></Link>
        </CardBody>
      </Card>
                </div>
                <div className="col-lg-9">
                    <h2 style={{ textAlign: "center" }}><b><i>Rohan Roy</i></b></h2>
                    <div>
                        <div >
                            <Row className="mt-3">
                                <Col className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mt-3">
                                    <Card body className="sz hvr">
                                        <CardTitle tag="h5">User ID</CardTitle>
                                        <CardText style={{ textAlign: "center" }}>1234</CardText>
                                    </Card>
                                </Col>
                                <Col className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mt-3">
                                    <Card body className="sz hvr">
                                        <CardTitle tag="h5">Expected Salary</CardTitle>
                                        <CardText style={{ textAlign: "center" }}>$18k - $25k</CardText>
                                    </Card>
                                </Col>
                                <Col className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mt-3">
                                    <Card body className="sz hvr">
                                        <CardTitle tag="h5">Rating</CardTitle>
                                        <CardText style={{ textAlign: "center" }}>4.9/5</CardText>
                                    </Card>
                                </Col>
                            
                            
                                <Col className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mt-3">
                                    <Card body className="sz hvr">
                                        <CardTitle tag="h5">Current Salary</CardTitle>
                                        <CardText style={{ textAlign: "center" }}>$14k - $16k</CardText>
                                    </Card>
                                </Col>
                                <Col className="col-lg-4 col-md-6 col--sm-12 col-xs-12 mt-3">
                                    <Card body className="sz hvr">
                                        <CardTitle tag="h5">Age</CardTitle>
                                        <CardText style={{ textAlign: "center" }}>28 years</CardText>
                                    </Card>
                                </Col>
                                <Col className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mt-3">
                                    <Card body className="sz hvr">
                                        <CardTitle tag="h5">Experience</CardTitle>
                                        <CardText style={{ textAlign: "center" }}>4 years</CardText>
                                    </Card>
                                </Col>
                            </Row>
                            <h2 className="mt-4"><b><i>More Details</i></b></h2>
                            <hr />
                            <div className="row">
                                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6"><h4>Name : </h4></div>
                                <div className="col-lg-9 col-md-6 col-sm-6 col-xs-6 sz1"><p><i>Rohan Roy</i></p></div>
                            </div>
                            <div className="row">
                                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6"><h4>Email id : </h4></div>
                                <div className="col-lg-9 col-md-6 col-sm-6 col-xs-6 sz1"><p><i>abc@gmail.com</i></p></div>
                            </div>
                            <div className="row">
                                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6"><h4>Phone no : </h4></div>
                                <div className="col-lg-9 col-md-6 col-sm-6 col-xs-6 sz1"><p><i>1234567890</i></p></div>
                            </div>
                            <div className="row">
                                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6"><h4>Address : </h4></div>
                                <div className="col-lg-9 col-md-6 col-sm-6 col-xs-6 sz1"><p><i>Kolkata, PIN - 700010</i></p></div>
                            </div>
                            <div className="row">
                                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6"><h4>Language : </h4></div>
                                <div className="col-lg-9 col-md-6 col-sm-6 col-xs-6 sz1"><p><i>English, Bengali, Hind</i>i</p></div>
                            </div>
                            <div className="row">
                                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6"><h4>Skill : </h4></div>
                                <div className="col-lg-9 col-md-6 col-sm-6 col-xs-6 sz1"><p><i>Driver</i></p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>





        </div>
    );
}

export default Profile;

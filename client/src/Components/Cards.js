import React from 'react';

import {
    Card, CardBody,
    CardTitle, CardSubtitle, Button, Row, Col,
} from 'reactstrap';



const Cards = () => {
    return (
        <div>

            <Row>
                <Col className="sm-12">
                    <Card style={{ width: 400 }}>
                        <CardBody style={{ textAlign: "center" }}>
                            <CardTitle tag="h5">I am Employer</CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">Need Staff</CardSubtitle>
                            <Button type="submit" color="btn btn-primary">Hire Now</Button>
                        </CardBody>
                    </Card>
                </Col>

                <Col className="sm-12">
                    <Card style={{ width: 400 }}>
                        <CardBody style={{ textAlign: "center" }}>
                            <CardTitle tag="h5">I am Candidate</CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">Need Job</CardSubtitle>
                            <Button type="submit" color="btn btn-primary">Get job now</Button>
                        </CardBody>
                    </Card>
                </Col>
            </Row>

        </div>
    );
}

export default Cards;
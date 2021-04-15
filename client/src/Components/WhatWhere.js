import React from "react";

import { Form, FormGroup, Label, Input, Row, Button } from "reactstrap";
const WhatWhere = () => {
  const handleSubmit = () => {};

  return (
    <Form style={{padding: "20px"}}>
      <Row form>
        <div className="col-sm-12">
          <FormGroup>
            <Label className="mytext">What</Label>
            <Input type="what" name="what" id="what" placeholder="job, title, keywords, or company" />
          </FormGroup>
        </div>
        <div className="col-sm-12">
          <FormGroup>
            <Label className="mytext">Where</Label>
            <Input type="where" name="where" id="where" placeholder="City, state, or pinCode" />
          </FormGroup>
        </div>
        <div className="col-md-2">
          <Button color="btn btn-outline-primary btn-sm">Find jobs</Button>
        </div>      
      </Row>
    </Form>
  );
};

export default WhatWhere;

import React from "react";
import {Link} from "react-router-dom";

import { Form,} from "reactstrap";
const WhatWhere = () => {
  //const handleSubmit = () => {};

  return (
    <Form class="form-row align-items-center forms" id="ssec" >
    <div className="form-row align-items-center forms" >
    <div className="col-sm-10 ikons">
      <label className="sr-only" for="inlineFormInputName">Name</label>
      <h3 className="wht">WHAT</h3>
      <input type="text"  className="form-control" id="inlineFormInputName" placeholder="Job-Category"/>
      <i className="ikon"><svg width="1.4em" height="1.8em" viewBox="0 0 16 16" className="bi bi-bag-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M1 4h14v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4zm7-2.5A2.5 2.5 0 0 0 5.5 4h-1a3.5 3.5 0 1 1 7 0h-1A2.5 2.5 0 0 0 8 1.5z"/>
</svg></i>
    </div>
    <div className="col-sm-10 my-1 ikons">
      <label className="sr-only" for="inlineFormInputName">Name</label>
      <h3 className="wht">WHERE</h3>
      <input type="text" className="form-control" id="inlineFormInputName" placeholder="Location"/>
      <i className="ikon"><svg width="1.5em" height="1.8em" viewBox="0 0 16 16" className="bi bi-geo-alt" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
</svg></i>
    </div>
    <div className="col-auto my-1">
    <Link to="/jobsFeed" > <button type="submit" className="btn btn-primary findlogo">Find Jobs</button></Link>
    </div>
  </div>
    </Form>
  );
};

export default WhatWhere;

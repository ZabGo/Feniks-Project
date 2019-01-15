import React,{Fragment} from 'react';
import {Link} from 'react-router-dom';

const NewClient=()=>(
  <Fragment>
    New Client Page <br/>
    <Link to="/equality" className="btn btn-lg btn-info">Submit & do Equality Form</Link>
  </Fragment>
)
export default NewClient;

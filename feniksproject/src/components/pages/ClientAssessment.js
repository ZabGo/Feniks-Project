import React,{Fragment} from 'react';
import {Link} from 'react-router-dom';

const ClientAssessment=()=>(
  <Fragment>
    Client Assessment Form <br/>
    <Link to="/details" className="btn btn-lg btn-info">Client Details</Link>
    <Link to="/edit" className="btn btn-lg btn-info">Edit Client</Link>
    <Link to="/assess" className="btn btn-lg btn-info disabled">Client Assessment</Link>
  </Fragment>
)
export default ClientAssessment;

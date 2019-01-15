import React,{Fragment} from 'react';
import {Link} from 'react-router-dom';

const ClientInfo=()=>(
  <Fragment>
    Client information page <br/>
    <Link to="/details" className="btn btn-lg btn-info disabled">Client Details</Link>
    <Link to="/edit" className="btn btn-lg btn-info">Edit Client</Link>
    <Link to="/assess" className="btn btn-lg btn-info">Client Assessment</Link>
  </Fragment>
)
export default ClientInfo;

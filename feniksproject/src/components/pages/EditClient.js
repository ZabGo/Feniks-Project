import React,{Fragment} from 'react';
import {Link} from 'react-router-dom';

const EditClient=()=>(
  <Fragment>
    Edit client details <br/>
    <Link to="/details" className="btn btn-lg btn-info">Client Details</Link>
    <Link to="/edit" className="btn btn-lg btn-info disabled">Edit Client</Link>
    <Link to="/assess" className="btn btn-lg btn-info">Client Assessment</Link>
  </Fragment>
)
export default EditClient;

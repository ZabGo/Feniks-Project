import React,{Fragment} from 'react';
import {Link} from 'react-router-dom';

const ExistingClients=()=>(
  <Fragment>
    Existing Clients Page <br/>
    <Link to="/details" className="btn btn-lg btn-info">View Client</Link>
  </Fragment>
)
export default ExistingClients;

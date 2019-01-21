import React,{Fragment} from 'react';
import {Link} from 'react-router-dom';

const EditClient=()=>(
  <Fragment>
    <div className="content-block">
      <div className="row">
        <h4>Edit Client Information</h4>
      </div>
      <div className="row">
        <div className="col-sm-12 btn-group">
          <Link to="/details" className="btn btn-lg btn-info">Client Details</Link>
          <Link to="/edit" className="btn btn-lg btn-info disabled">Edit Client</Link>
          <Link to="/assess" className="btn btn-lg btn-info">Client Assessment</Link>
        </div>
      </div>
    </div>
  </Fragment>
)
export default EditClient;

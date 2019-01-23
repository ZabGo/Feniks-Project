import React,{Fragment} from 'react';
import {Link} from 'react-router-dom';

const ClientInfo= (props) => {

console.log("props in ClientInfo", props);

  return (
  <Fragment>
    <div className="content-block">
      <div className="row">
        <h4>Client Information</h4>
      </div>
      <div className="row">
        <div className="col-sm-12 btn-group">
          <Link to={"/details/"+ props.client.id} className="btn btn-lg btn-info disabled float-right">Client Details</Link>
          <Link to="/edit" className="btn btn-lg btn-info float-right">Edit Client</Link>
          <Link to="/assess" className="btn btn-lg btn-info float-right">Client Assessment</Link>
        </div>
      </div>
    </div>

    <div className="content-block">
      <div className="row">
        <h4>Personal Information</h4>
      </div>
      <div className="row">
        <div className="col-sm-12">
        <p> NAME </p>
        <p> {props.client.forename} </p>
        <p> {props.client.surname} </p>
          Client ID | Title | Name | Date of Birth | GP | Address | Phone | email | employment status | voicemail | from Feniks? | Mailing list
        </div>
      </div>
    </div>

    <div className="content-block">
      <div className="row">
        <h4>Projects</h4>
      </div>
      <div className="row">
        <div className="col-sm-12">
          Projects to attend
        </div>
      </div>
    </div>
  </Fragment>
)};
export default ClientInfo;

import React,{Fragment} from 'react';
import {Link} from 'react-router-dom';

const ClientInfo= (props) => {


console.log("props in ClientInfo", props);
console.log('Projects: ',props.client.projects);

  var projects = "";

  for (var key in props.client.projects) {
    var value = props.client.projects[key];
    console.log(key);
    if (value == true){
      projects = projects + key + " | ";
    }
  }

  return (
  <Fragment>
    <div className="content-block">
      <div className="row">
        <h4>Client Information</h4>
      </div>
      <div className="row">
        <div className="col-sm-12 btn-group">
          <Link to={"/details/"+ props.client.id} className="btn btn-lg btn-info disabled float-right">Client Details</Link>
          <Link to={"/edit/"+ props.client.id} className="btn btn-lg btn-info float-right">Edit Client</Link>
          <Link to={"/assess/"+ props.client.id} className="btn btn-lg btn-info float-right">Client Assessment</Link>
        </div>
      </div>
    </div>

    <div className="content-block">
      <div className="row">
        <h4>{props.client.title} {props.client.forename} {props.client.surname}</h4>
      </div>
      <div className="row">
        <div className="col-sm-12">
        <p> Date of Birth: {props.client.dob} </p>
        <p>{props.client.email} </p>
        <p>{props.client.phone} </p>
        <p>{props.client.address.address1} {props.client.address.address2}<br/>
        {props.client.address.address3}<br/>
        {props.client.address.address4} </p>
        <p> Employment: {props.client.employment} </p>

        </div>
      </div>
    </div>

    <div className="content-block">
      <div className="row">
        <h4>Projects</h4>
      </div>
      <div className="row">
        <div className="col-sm-12">
          {projects}
        </div>
      </div>
    </div>
  </Fragment>
)};
export default ClientInfo;

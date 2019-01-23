import React,{Fragment} from 'react';
import {Link} from 'react-router-dom';

const ClientList = (props) => {

  return (
    <Link to={"/details/"+ props.client.id}  className="btn btn-lg btn-light btn-block btn-outline-dark btn-shadow">
      {props.client.forename} {props.client.surname}
    </Link>
  );
}


export default ClientList;

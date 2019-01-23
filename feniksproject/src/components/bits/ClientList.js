import React,{Fragment} from 'react';
import {Link} from 'react-router-dom';

const ClientList = (props) => {


console.log("Props in client ClientList", props);

  return (
    <Link to={"/details/"+ props.client.id}  className="btn btn-lg btn-light btn-block btn-outline-dark btn-shadow">
      {props.client.forename}
    </Link>
  );
}


export default ClientList;

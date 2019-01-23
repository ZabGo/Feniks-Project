import React,{Fragment} from 'react';
import {Link} from 'react-router-dom';

const ClientList = (props) => {




  return (
    <Link to="/details" className="btn btn-lg btn-light btn-block btn-outline-dark btn-shadow">
      {props.name}
    </Link>
  );
}


export default ClientList;

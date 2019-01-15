import React,{Fragment} from 'react';
import {Link} from 'react-router-dom';

const Equalities=()=>(
  <Fragment>
    Equalities Form <br/>
    <Link to="/clients" className="btn btn-lg btn-info">Submit & continue</Link>
  </Fragment>
)
export default Equalities;

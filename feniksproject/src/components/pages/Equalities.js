import React,{Fragment} from 'react';
import {Link} from 'react-router-dom';

const Equalities=(props)=>{
  console.log("Props: ",props.location.state)
  return (
    <Fragment>
      <form>
        <div className="content-block">
          <div className="row">
            <h4>Basic Information</h4>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <ul>
                <li>Age: {props.location.state.dob}</li>
                <li>Employment: {props.location.state.employment}</li>
                <li></li>
              </ul>
            </div>
          </div>
          <div className="form-group row">
            <label for="title" className="col-sm-2 col-form-label">Title</label>
            <div className="col-sm-9">
              <select id="title" name="title" className="form-control">
                <option>Select...</option>
                <option value="1">Mr</option>
                <option value="2">Miss</option>
                <option value="3">Ms</option>
                <option value="4">Other</option>
              </select>
            </div>
          </div>
        </div>
      </form>
    </Fragment>
  )

}
export default Equalities;

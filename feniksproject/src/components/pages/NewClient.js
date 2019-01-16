import React,{Fragment} from 'react';
import {Link} from 'react-router-dom';

const NewClient=()=>(
  <Fragment>
      <form>
        <div className="content-block">
          <div className="form-group row">
            <label for="title" className="col-sm-2 col-form-label">Title</label>
            <div className="col-sm-10">
              <select id="title" name="title" className="form-control">
                <option>Select...</option>
                <option value="1">Mr</option>
                <option value="2">Miss</option>
                <option value="3">Ms</option>
                <option value="4">Other</option>
              </select>
            </div>
          </div>
          <div className="form-group row">
            <label for="surname" className="col-sm-2 col-form-label">Surname(s)</label>
            <div className="col-sm-10">
              <input type="text" id="surname" name="surname" className="form-control"  placeholder="Surname(s)" required/>
            </div>
          </div>
          <div className="form-group row">
            <label for="forename" className="col-sm-2 col-form-label">Forename(s)</label>
            <div className="col-sm-10">
              <input type="text" id="forename" name="forename" className="form-control"  placeholder="Forename(s)" required/>
            </div>
          </div>
          <div className="form-group row">
            <label for="dob" className="col-sm-2 col-form-label">Date of Birth</label>
            <div className="col-sm-10">
              <input type="date" id="dob" name="dob" className="form-control"  placeholder="" required/>
            </div>
          </div>
        </div>

        <div className="content-block">
          <div className="form-group row">
            <label for="address1" className="col-sm-2 col-form-label">Address Line 1</label>
            <div className="col-sm-10">
              <input type="text" id="address1" name="address1" className="form-control"  placeholder="House name / number"/>
            </div>
          </div>
          <div className="form-group row">
            <label for="address2" className="col-sm-2 col-form-label">Address Line 2</label>
            <div className="col-sm-10">
              <input type="text" id="address2" name="address2" className="form-control"  placeholder="Street"/>
            </div>
          </div>
          <div className="form-group row">
            <label for="address3" className="col-sm-2 col-form-label">Address Line 3</label>
            <div className="col-sm-10">
              <input type="text" id="address3" name="address3" className="form-control"  placeholder="Town"/>
            </div>
          </div>
          <div className="form-group row">
            <label for="address4" className="col-sm-2 col-form-label">Address Line 4</label>
            <div className="col-sm-10">
              <input type="text" id="address4" name="address4" className="form-control"  placeholder="Postcode"/>
            </div>
          </div>
        </div>

        <div className="content-block">
          <div className="form-group row">
            <label for="employment" className="col-sm-2 col-form-label">Employment Status</label>
            <div className="col-sm-10">
              <select id="employment" name="employment" className="form-control">
                <option>Select...</option>
                <option value="1">Employed Full-Time</option>
                <option value="2">Employed Part-Time</option>
                <option value="3">Unemployed</option>
                <option value="4">Retired</option>
                <option value="5">Student</option>
                <option value="6">Other</option>
              </select>
            </div>
          </div>
          <div className="form-group row">
            <label for="projects" className="col-sm-12 col-form-label">Which Project(s) would you like to attend? Please tick all relevant boxes.</label>
          </div>
          <div className="form-group form-check form-check-inline">
            <input type="checkbox" id="project1" name="project1" className="form-check-input" value="1"/>
            <label className="form-check-label" for="project1">Active 50+</label>
            <input type="checkbox" id="project2" name="project2" className="form-check-input" value="2"/>
            <label className="form-check-label" for="project2">Counselling / Therapy</label>
            <input type="checkbox" id="project3" name="project3" className="form-check-input" value="3"/>
            <label className="form-check-label" for="project3">Group Therapy</label>
          </div>
          <br/>
          <div className="form-group form-check form-check-inline">
            <input type="checkbox" id="project4" name="project4" className="form-check-input" value="4"/>
            <label className="form-check-label" for="project4">Survivors Group</label>
            <input type="checkbox" id="project5" name="project5" className="form-check-input" value="5"/>
            <label className="form-check-label" for="project5">SMART</label>
            <input type="checkbox" id="project6" name="project6" className="form-check-input" value="6"/>
            <label className="form-check-label" for="project6">Toddler Group</label>
          </div>
        </div>

        <div className="content-block">
          <div className="form-group">
            <Link to="/equality" className="btn btn-lg btn-info btn-block">Demo Submit</Link>
            <button type="submit" className="btn btn-lg btn-success btn-block disabled">Submit</button>
            <button type="reset" className="btn btn-lg btn-block btn-danger">Reset</button>
          </div>
        </div>
      </form>




  </Fragment>
)
export default NewClient;

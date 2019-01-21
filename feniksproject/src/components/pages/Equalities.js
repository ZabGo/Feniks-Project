import React,{Component,Fragment} from 'react';
import {Link} from 'react-router-dom';

const Equalities =(props)=> {
  function handleSubmit(event){
    event.preventDefault();
    const equalities = {
      "age":"35",
      "employment":"#",
      "hear":"35",
      "gender":event.target.gender.value,
      "nationality":event.target.nationality.value,
      "orientation":event.target.orientation.value,
      "disability":event.target.disability.value,
      "abroad":event.target.abroad.value
    }
    console.log("event",equalities);
    props.handleEqualitiesPost(equalities);

    // Move to equalities page

    // wait for response from server / db before doing this next bit
    window.location = "/equality"
  }
    return (
      <Fragment>
        <form onSubmit={handleSubmit}>
          <div className="content-block">
            <div className="row">
              <h4>Basic Information</h4>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <ul>
                  <li>Age (add script to calculate from DOB): -</li>
                  <li>Employment (add script to translate to text): -</li>
                  <li>Where did you hear about Feniks? (add script to translate to text): -</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="content-block">
            <div className="row">
              <h4>Personal Information</h4>
            </div>
            <div className="form-group row">
              <label htmlFor="gender" className="col-sm-12 col-form-label">Gender</label>
            </div>
            <div className="form-group form-check form-check-inline">
              <input type="radio" id="gender1" name="gender" className="form-check-input" value="1"/>
              <label className="form-check-label" htmlFor="gender1">Female</label>
              <input type="radio" id="gender2" name="gender" className="form-check-input" value="2"/>
              <label className="form-check-label" htmlFor="gender2">Male</label>
              <input type="radio" id="gender3" name="gender" className="form-check-input" value="3"/>
              <label className="form-check-label" htmlFor="gender3">Other</label>
              <input type="radio" id="gender4" name="gender" className="form-check-input" value="0"/>
              <label className="form-check-label" htmlFor="gender4">I do not wish to disclose this</label>
            </div>
            <hr/>
            <div className="form-group row">
              <label htmlFor="nationality" className="col-sm-2 col-form-label">Nationality</label>
              <div className="col-sm-9">
                <select id="nationality" name="nationality" className="form-control">
                  <option>Select...</option>
                  <option value="1">Česká republika / Czech Republic</option>
                  <option value="2">Eesti / Estonia</option>
                  <option value="3">Magyarország / Hungary</option>
                  <option value="4">Latvija / Latvia</option>
                  <option value="5">Lietuva / Lithuania</option>
                  <option value="6">Polska / Poland</option>
                  <option value="7">Slovensko / Slovakia</option>
                  <option value="8">Slovenija / Slovenia</option>
                  <option value="0">Other</option>
                </select>
              </div>
            </div>
            <hr/>
            <div className="form-group row">
              <label htmlFor="orientation" className="col-sm-12 col-form-label">Please select the option which best describes your sexual orientation</label>
            </div>
            <div className="form-group form-check form-check-inline">
              <input type="radio" id="orientation1" name="orientation" className="form-check-input" value="1"/>
              <label className="form-check-label" htmlFor="orientation1">Heterosexual / Straight</label>
              <input type="radio" id="orientation2" name="orientation" className="form-check-input" value="2"/>
              <label className="form-check-label" htmlFor="orientation2">Gay Woman / Lesbian</label>
              <input type="radio" id="orientation3" name="orientation" className="form-check-input" value="3"/>
              <label className="form-check-label" htmlFor="orientation3">Gay Man / Homosexual</label>
              <input type="radio" id="orientation4" name="orientation" className="form-check-input" value="4"/>
              <label className="form-check-label" htmlFor="orientation4">Bisexual</label>
              <input type="radio" id="orientation5" name="orientation" className="form-check-input" value="0"/>
              <label className="form-check-label" htmlFor="orientation5">Prefer not to say</label>
            </div>
            <hr/>
            <div className="form-group row">
              <label htmlFor="disability" className="col-sm-12 col-form-label">Do you consider yourself to have a disability?</label>
            </div>
            <div className="form-group form-check form-check-inline">
              <input type="radio" id="disability1" name="disability" className="form-check-input" value="1"/>
              <label className="form-check-label" htmlFor="disability1">Yes</label>
              <input type="radio" id="disability2" name="disability" className="form-check-input" value="2"/>
              <label className="form-check-label" htmlFor="disability2">No</label>
              <input type="radio" id="disability3" name="disability" className="form-check-input" value="0"/>
              <label className="form-check-label" htmlFor="disability3">I do not wish to disclose this</label>
            </div>
          </div>
          <div className="content-block">
            <div className="form-group row">
              <label htmlFor="abroad" className="col-sm-12 col-form-label">Time Abroad?</label>
            </div>
            <div className="form-group form-check form-check-inline">
              <input type="radio" id="abroad1" name="abroad" className="form-check-input" value="1"/>
              <label className="form-check-label" htmlFor="abroad1">Less than a Year</label>
              <input type="radio" id="abroad2" name="abroad" className="form-check-input" value="2"/>
              <label className="form-check-label" htmlFor="abroad2">1 - 2 Years</label>
              <input type="radio" id="abroad3" name="abroad" className="form-check-input" value="3"/>
              <label className="form-check-label" htmlFor="abroad3">2 - 3 Years</label>
              <input type="radio" id="abroad4" name="abroad" className="form-check-input" value="4"/>
              <label className="form-check-label" htmlFor="abroad4">3 - 5 Years</label>
              <input type="radio" id="abroad5" name="abroad" className="form-check-input" value="5"/>
              <label className="form-check-label" htmlFor="abroad5">Over 5 Years</label>
            </div>
          </div>
          <div className="content-block">
            <div className="form-group btn-group" role="group" aria-label="Submission Buttons">
              <input type="submit" className="btn btn-lg btn-block btn-success" value="Submit"/>
              <button type="reset" className="btn btn-lg btn-danger">Reset</button>
              <Link to='/clients' className="btn btn-lg btn-danger">Skip</Link>
            </div>
          </div>
        </form>
      </Fragment>
    )
  }

export default Equalities;

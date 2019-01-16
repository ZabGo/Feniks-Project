import React,{Fragment} from 'react';
import {Link} from 'react-router-dom';

const NewClient=()=>(
  <Fragment>
      <form>
        <div className="content-block">
          <div className="row">
            <h4>Personal Information</h4>
          </div>
          <div className="form-group row">
            <label htmlFor="title" className="col-sm-2 col-form-label">Title</label>
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
          <div className="form-group row">
            <label htmlFor="surname" className="col-sm-2 col-form-label">Surname(s)</label>
            <div className="col-sm-9">
              <input type="text" id="surname" name="surname" className="form-control"  placeholder="Surname(s)" required/>
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="forename" className="col-sm-2 col-form-label">Forename(s)</label>
            <div className="col-sm-9">
              <input type="text" id="forename" name="forename" className="form-control"  placeholder="Forename(s)" required/>
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="dob" className="col-sm-2 col-form-label">Date of Birth</label>
            <div className="col-sm-9">
              <input type="date" id="dob" name="dob" className="form-control"  placeholder="" required/>
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="gp" className="col-sm-2 col-form-label">GP Name and Practice</label>
            <div className="col-sm-9">
              <input type="text" id="gp" name="gp" className="form-control"  placeholder="GP Name and Paractice"/>
            </div>
          </div>
        </div>

        <div className="content-block">
          <div className="row">
            <h4>Details</h4>
          </div>
          <div className="form-group row">
            <label htmlFor="address1" className="col-sm-2 col-form-label">Address Line 1</label>
            <div className="col-sm-9">
              <input type="text" id="address1" name="address1" className="form-control"  placeholder="House name / number"/>
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="address2" className="col-sm-2 col-form-label">Address Line 2</label>
            <div className="col-sm-9">
              <input type="text" id="address2" name="address2" className="form-control"  placeholder="Street"/>
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="address3" className="col-sm-2 col-form-label">Address Line 3</label>
            <div className="col-sm-9">
              <input type="text" id="address3" name="address3" className="form-control"  placeholder="Town"/>
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="address4" className="col-sm-2 col-form-label">Address Line 4</label>
            <div className="col-sm-9">
              <input type="text" id="address4" name="address4" className="form-control"  placeholder="Postcode"/>
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="phone" className="col-sm-2 col-form-label">Phone Number</label>
            <div className="col-sm-9">
              <input type="number" id="phone" name="phone" className="form-control"  placeholder="Phone Number"/>
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
            <div className="col-sm-9">
              <input type="text" id="email" name="email" className="form-control"  placeholder="Email Address"/>
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="employment" className="col-sm-2 col-form-label">Employment Status</label>
            <div className="col-sm-9">
              <select id="employment" name="employment" className="form-control">
                <option>Select...</option>
                <option value="1">Employed</option>
                <option value="2">Self-Employed</option>
                <option value="3">Unemployed</option>
                <option value="4">Retired</option>
                <option value="5">Student</option>
                <option value="6">Other</option>
              </select>
            </div>
          </div>
          <div className="form-group">
            <div className="form-check">
              <input type="checkbox" id="leavemessage" name="leavemessage" className="form-check-input" value="1"/>
              <label className="form-check-label" htmlFor="leavemessage">Tick if we can leave a message on your voicemail</label>
            </div>
            <div className="form-check">
              <input type="checkbox" id="fromfeniks" name="fromfeniks" className="form-check-input" value="2"/>
              <label className="form-check-label" htmlFor="fromfeniks">Tick if we can say we are calling from Feniks</label>
            </div>
            <div className="form-check">
              <input type="checkbox" id="mailing" name="mailing" className="form-check-input" value="2"/>
              <label className="form-check-label" htmlFor="mailing">Tick if you agree to be added to our mailing list to be informed about news, services and projects</label>
            </div>
          </div>
        </div>

        <div className="content-block">
          <div className="row">
            <h4>Details</h4>
          </div>
          <div className="form-group row">
            <label htmlFor="projects" className="col-sm-12 col-form-label">Which Project(s) would you like to attend? Please tick all relevant boxes.</label>
          </div>
          <div className="form-group form-check form-check-inline">
            <input type="checkbox" id="project1" name="project1" className="form-check-input" value="1"/>
            <label className="form-check-label" htmlFor="project1">Active 50+</label>
            <input type="checkbox" id="project2" name="project2" className="form-check-input" value="2"/>
            <label className="form-check-label" htmlFor="project2">Counselling / Therapy</label>
            <input type="checkbox" id="project3" name="project3" className="form-check-input" value="3"/>
            <label className="form-check-label" htmlFor="project3">Group Therapy</label>
          </div>
          <br/>
          <div className="form-group form-check form-check-inline">
            <input type="checkbox" id="project4" name="project4" className="form-check-input" value="4"/>
            <label className="form-check-label" htmlFor="project4">Toddler Group</label>
            <input type="checkbox" id="project5" name="project5" className="form-check-input" value="5"/>
            <label className="form-check-label" htmlFor="project5">Survivors' Group</label>
            <input type="checkbox" id="project6" name="project6" className="form-check-input" value="6"/>
            <label className="form-check-label" htmlFor="project6">Personal Development Workshops</label>
          </div>
          <br/>
          <div className="form-group form-check form-check-inline">
            <input type="checkbox" id="project7" name="project7" className="form-check-input" value="7"/>
            <label className="form-check-label" htmlFor="project7">Leith Conversation Cafes</label>
            <input type="checkbox" id="project8" name="project8" className="form-check-input" value="8"/>
            <label className="form-check-label" htmlFor="project8">SMART Recovery</label>
            <input type="checkbox" id="project9" name="project9" className="form-check-input" value="9"/>
            <label className="form-check-label" htmlFor="project9">Other</label>
          </div>
        </div>

        <div className="content-block">
          <div className="row">
            <h4>Feniks</h4>
          </div>
          <div className="form-group row">
            <label htmlFor="info" className="col-sm-12 col-form-label">How did you hear about Feniks?</label>
          </div>
          <div className="form-group form-check form-check-inline">
            <input type="checkbox" id="hear1" name="hear1" className="form-check-input" value="1"/>
            <label className="form-check-label" htmlFor="hear1">Emito</label>
            <input type="checkbox" id="hear2" name="hear2" className="form-check-input" value="2"/>
            <label className="form-check-label" htmlFor="hear2">Feniks' Website</label>
            <input type="checkbox" id="hear3" name="hear3" className="form-check-input" value="3"/>
            <label className="form-check-label" htmlFor="hear3">Friend / Family Member</label>
          </div>
          <br/>
          <div className="form-group form-check form-check-inline">
            <input type="checkbox" id="hear4" name="hear4" className="form-check-input" value="4"/>
            <label className="form-check-label" htmlFor="hear4">GP</label>
            <input type="checkbox" id="hear5" name="hear5" className="form-check-input" value="5"/>
            <label className="form-check-label" htmlFor="hear5">Leaflet</label>
            <input type="checkbox" id="hear6" name="hear6" className="form-check-input" value="6"/>
            <label className="form-check-label" htmlFor="hear6">Other</label>
          </div>
        </div>

        <div className="content-block gdpr">
          In accordance with this Act your permission is needed for us to collect and keep any personal data (e.g. name, e-mail, address) whether by manual or electronic means. We therefore ask every client / a person making referral on the client’s behalf to confirm below that they give Feniks the necessary permission to keep the data they are willing to disclose, and to keep confidential records about their attendance and counselling. This does not affect in any way the confidentiality of therapy / counselling sessions.
          Feniks gathers statistical information about its work and its clients, which is used for policy making, statistical and promotional purposes. In all cases this does not identify individual clients.
          <hr/>
          On behalf of myself / the client I refer I give permission for Feniks to keep the data I disclose and for   confidential records to be kept about the attendance and therapy / counselling

        </div>

        <div className="content-block">
          <div className="form-group">
            <Link to={{pathname:'/equality',state:{dob:"14/5/82",employment:"2",hear:"3"}}} className="btn btn-lg btn-success btn-block">Demo Submit</Link>

            <button type="submit" className="btn btn-lg btn-success btn-block disabled">Submit</button>
            <button type="reset" className="btn btn-lg btn-block btn-danger">Reset</button>
          </div>
        </div>
      </form>




  </Fragment>
)
export default NewClient;

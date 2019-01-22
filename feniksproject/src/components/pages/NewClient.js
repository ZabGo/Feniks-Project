import React,{Component,Fragment,Link} from 'react';

const NewClient =(props)=>{
  function handleSubmit(event){
    event.preventDefault();

    // Turn address and projects into array
    const address = {
      "address1": event.target.address1.value,
      "address2": event.target.address2.value,
      "address3": event.target.address3.value,
      "address4": event.target.address4.value
    };

    const projects = {
      "active50":event.target.project1.checked,
      "counselling":event.target.project2.checked,
      "grouptherapy":event.target.project3.checked,
      "toddler":event.target.project4.checked,
      "survivors":event.target.project5.checked,
      "personaldevelopment":event.target.project6.checked,
      "leithcafe":event.target.project7.checked,
      "smart":event.target.project8.checked,
      "other":event.target.project9.checked
    }

    const client = {
      "title":event.target.title.value,
      "surname":event.target.surname.value,
      "forename":event.target.forename.value,
      "dob":event.target.dob.value,
      "gp":event.target.gp.value,
      "address":address,
      "phone":event.target.phone.value,
      "email":event.target.email.value,
      "employment":event.target.employment.value,
      "leavemessage":event.target.leavemessage.value,
      "fromfeniks":event.target.fromfeniks.value,
      "mailing":event.target.mailing.value,
      "projects":projects,
      "hear":event.target.hear.value
    }
    console.log("event",client);
    props.handleClientPost(client);
    // Move to equalities page

    // wait for response from server / db before doing this next bit
    window.location = "/equality"
  }

    return(
      <Fragment>
        <form onSubmit={handleSubmit}>
          <div className="content-block">
            <div className="row">
              <h4>Personal Information</h4>
            </div>

            <div className="form-group row">
              <label htmlFor="title" className="col-sm-2 col-form-label">Title</label>
              <div className="col-sm-9">
                <select id="title" name="title" className="form-control">
                  <option>Select...</option>
                  <option value="Mr">Mr</option>
                  <option value="Miss">Miss</option>
                  <option value="Ms">Ms</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <div className="form-group row">
              <label htmlFor="surname" className="col-sm-2 col-form-label">Surname(s)</label>
              <div className="col-sm-9">

                <input type="text" id="surname" name="surname" className="form-control"  placeholder="Surname(s)" />
              </div>
            </div>

            <div className="form-group row">
              <label htmlFor="forename" className="col-sm-2 col-form-label">Forename(s)</label>
              <div className="col-sm-9">

                <input type="text" id="forename" name="forename" className="form-control"  placeholder="Forename(s)" />
              </div>
            </div>

            <div className="form-group row">
              <label htmlFor="dob" className="col-sm-2 col-form-label">Date of Birth</label>
              <div className="col-sm-9">
                <input type="date" id="dob" name="dob" className="form-control"  placeholder="" />
              </div>
            </div>

            <div className="form-group row">
              <label htmlFor="gp" className="col-sm-2 col-form-label">GP Name and Practice</label>
              <div className="col-sm-9">
                <input type="text" id="gp" name="gp" className="form-control"  placeholder="GP Name and Practice" />
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
                <input type="text" id="address2" name="address2" className="form-control"  placeholder="Street" />
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
                <input type="text" id="address4" name="address4" className="form-control"  placeholder="Postcode" />
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
                  <option value="Employed">Employed</option>
                  <option value="Self-Employed">Self-Employed</option>
                  <option value="Unemployed">Unemployed</option>
                  <option value="Retired">Retired</option>
                  <option value="Student">Student</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <div className="form-check">
                <input type="checkbox" id="leavemessage" name="leavemessage" className="form-check-input"/>
                <label className="form-check-label" htmlFor="leavemessage">Tick if we can leave a message on your voicemail</label>
              </div>
              <div className="form-check">
                <input type="checkbox" id="fromfeniks" name="fromfeniks" className="form-check-input"/>
                <label className="form-check-label" htmlFor="fromfeniks">Tick if we can say we are calling from Feniks</label>
              </div>
              <div className="form-check">
                <input type="checkbox" id="mailing" name="mailing" className="form-check-input"/>
                <label className="form-check-label" htmlFor="mailing">Tick if you agree to be added to our mailing list to be informed about news, services and projects</label>
              </div>
            </div>
          </div>

          <div className="content-block">
            <div className="row">
              <h4>Projects</h4>
            </div>
            <div className="form-group row">
              <label htmlFor="projects" className="col-sm-12 col-form-label">Which Project(s) would you like to attend? Please tick all relevant boxes.</label>
            </div>
            <div className="form-group form-check form-check-inline">
              <input type="checkbox" id="project1" name="project1" className="form-check-input"/>
              <label className="form-check-label" htmlFor="project1" value="1">Active 50+</label>
              <input type="checkbox" id="project2" name="project2" className="form-check-input"/>
              <label className="form-check-label" htmlFor="project2" value="1">Counselling / Therapy</label>
              <input type="checkbox" id="project3" name="project3" className="form-check-input"/>
              <label className="form-check-label" htmlFor="project3" value="1">Group Therapy</label>
            </div>
            <br/>
            <div className="form-group form-check form-check-inline">
              <input type="checkbox" id="project4" name="project4" className="form-check-input"/>
              <label className="form-check-label" htmlFor="project4" value="1">Toddler Group</label>
              <input type="checkbox" id="project5" name="project5" className="form-check-input"/>
              <label className="form-check-label" htmlFor="project5" value="1">Survivors' Group</label>
              <input type="checkbox" id="project6" name="project6" className="form-check-input"/>
              <label className="form-check-label" htmlFor="project6" value="1">Personal Development Workshops</label>
            </div>
            <br/>
            <div className="form-group form-check form-check-inline">
              <input type="checkbox" id="project7" name="project7" className="form-check-input"/>
              <label className="form-check-label" htmlFor="project7" value="1">Leith Conversation Cafes</label>
              <input type="checkbox" id="project8" name="project8" className="form-check-input"/>
              <label className="form-check-label" htmlFor="project8" value="1">SMART Recovery</label>
              <input type="checkbox" id="project9" name="project9" className="form-check-input"/>
              <label className="form-check-label" htmlFor="project9" value="1">Other</label>
            </div>
          </div>

          <div className="content-block">
            <div className="row">
              <h4>Feniks</h4>
            </div>
            <div className="form-group row">
              <label htmlFor="hear" className="col-sm-12 col-form-label">How did you hear about Feniks?</label>
            </div>
            <div className="form-group form-check form-check-inline">
              <input type="radio" id="hear1" name="hear" className="form-check-input" value="1"/>
              <label className="form-check-label" htmlFor="hear1">Emito</label>
              <input type="radio" id="hear2" name="hear" className="form-check-input" value="2"/>
              <label className="form-check-label" htmlFor="hear2">Feniks' Website</label>
              <input type="radio" id="hear3" name="hear" className="form-check-input" value="3"/>
              <label className="form-check-label" htmlFor="hear3">Friend / Family Member</label>
            </div>
            <br/>
            <div className="form-group form-check form-check-inline">
              <input type="radio" id="hear4" name="hear" className="form-check-input" value="4"/>
              <label className="form-check-label" htmlFor="hear4">GP</label>
              <input type="radio" id="hear5" name="hear" className="form-check-input" value="5"/>
              <label className="form-check-label" htmlFor="hear5">Leaflet</label>
              <input type="radio" id="hear6" name="hear" className="form-check-input" value="6"/>
              <label className="form-check-label" htmlFor="hear6">Other</label>
            </div>
          </div>


          <div className="content-block">
            <div className="form-group">
              <input type="submit" className="btn btn-lg btn-block btn-success" value="Submit"/>
              <button type="reset" className="btn btn-lg btn-block btn-danger">Reset</button>
            </div>
          </div>
        </form>
      </Fragment>
    )
  }

export default NewClient;

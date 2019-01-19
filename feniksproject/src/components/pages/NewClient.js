import React,{Component,Fragment} from 'react';


const NewClient = (props) => {

  function handleSubmit(event){
    event.preventDefault();
    const client = {
      "title": event.target.title.value,
      "surname": event.target.surname.value,
      "forename": event.target.forename.value,
      "dob": event.target.dob.value,
      "gp": event.target.gp.value
    }


    console.log("event", client);
    props.handleClientPost(client);

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
                <input type="text" id="surname" name="surname" className="form-control"  placeholder="surname" />
              </div>
            </div>

            <div className="form-group row">
              <label htmlFor="forename" className="col-sm-2 col-form-label">Forename(s)</label>
              <div className="col-sm-9">
                <input type="text" id="forename" name="forename" className="form-control"  placeholder="forename" />
              </div>
            </div>

            <div className="form-group row">
              <label htmlFor="dob" className="col-sm-2 col-form-label">Date of Birth</label>
              <div className="col-sm-9">
                <input type="text" id="dob" name="dob" className="form-control"  placeholder="dob"  />
              </div>
            </div>

            <div className="form-group row">
              <label htmlFor="gp" className="col-sm-2 col-form-label">GP Name and Practice</label>
              <div className="col-sm-9">
                <input type="text" id="gp" name="gp" className="form-control"  placeholder="gp" />
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
                <input type="text" id="address1" name="address1" className="form-control"  placeholder="House name / number" />
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
                <input type="text" id="address3" name="address3" className="form-control"  placeholder="Town" />
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
                <input type="number" id="phone" name="phone" className="form-control"  placeholder="Phone Number" />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
              <div className="col-sm-9">
                <input type="text" id="email" name="email" className="form-control"  placeholder="Email Address" />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="employment" className="col-sm-2 col-form-label">Employment Status</label>
              <div className="col-sm-9">
                <select id="employment" name="employment" className="form-control" >
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
                <input type="checkbox" id="leavemessage" name="leavemessage" className="form-check-input"  />
                <label className="form-check-label" htmlFor="leavemessage">Tick if we can leave a message on your voicemail</label>
              </div>
              <div className="form-check">
                <input type="checkbox" id="fromfeniks" name="fromfeniks" className="form-check-input" />
                <label className="form-check-label" htmlFor="fromfeniks">Tick if we can say we are calling from Feniks</label>
              </div>
              <div className="form-check">
                <input type="checkbox" id="mailing" name="mailing" className="form-check-input" />
                <label className="form-check-label" htmlFor="mailing">Tick if you agree to be added to our mailing list to be informed about news, services and projects</label>
              </div>
            </div>
            </div>



          <div className="content-block">
            <div className="form-group">
              <button type="submit" className="btn btn-lg btn-block btn-danger">Submit</button>
            </div>
          </div>
        </form>
      </Fragment>
    )
  }

export default NewClient;

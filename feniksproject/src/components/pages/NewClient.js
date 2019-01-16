import React,{Component,Fragment} from 'react';
import {Link} from 'react-router-dom';

class NewClient extends Component{
  constructor(){
    super();
    this.state = {
      title:'',
      surname:'',
      forename:'',
      dob:'',
      gp:'',
      address1:'',
      address2:'',
      address3:'',
      address4:'',
      phone:'',
      email:'',
      employment:'',
      leavemessage:'',
      fromfeniks:'',
      mailing:'',
      project1:'',
      project2:'',
      project3:'',
      project4:'',
      project5:'',
      project6:'',
      project7:'',
      project8:'',
      project9:'',
      hear:''
    };

    this.HandleTitleChange = this.HandleTitleChange.bind(this);
    this.HandleSurnameChange = this.HandleSurnameChange.bind(this);
    this.HandleForenameChange = this.HandleForenameChange.bind(this);
    this.HandleDobChange = this.HandleDobChange.bind(this);
    this.HandleGpChange = this.HandleGpChange.bind(this);
    this.HandleAddress1Change = this.HandleAddress1Change.bind(this);
    this.HandleAddress2Change = this.HandleAddress2Change.bind(this);
    this.HandleAddress3Change = this.HandleAddress3Change.bind(this);
    this.HandleAddress4Change = this.HandleAddress4Change.bind(this);
    this.HandlePhoneChange = this.HandlePhoneChange.bind(this);
    this.HandleEmailChange = this.HandleEmailChange.bind(this);
    this.HandleEmploymentChange = this.HandleEmploymentChange.bind(this);
    this.HandleLeaveMessageChange = this.HandleLeaveMessageChange.bind(this);
    this.HandleFromFeniksChange = this.HandleFromFeniksChange.bind(this);
    this.HandleMailingChange = this.HandleMailingChange.bind(this);
    this.HandleProject1Change = this.HandleProject1Change.bind(this);
    this.HandleProject2Change = this.HandleProject2Change.bind(this);
    this.HandleProject3Change = this.HandleProject3Change.bind(this);
    this.HandleProject4Change = this.HandleProject4Change.bind(this);
    this.HandleProject5Change = this.HandleProject5Change.bind(this);
    this.HandleProject6Change = this.HandleProject6Change.bind(this);
    this.HandleProject7Change = this.HandleProject7Change.bind(this);
    this.HandleProject8Change = this.HandleProject8Change.bind(this);
    this.HandleProject9Change = this.HandleProject9Change.bind(this);
    this.HandleHearChange = this.HandleHearChange.bind(this);
  }

  HandleTitleChange(event) {
    const userTitle = event.target.value;
    this.setState({title: userTitle});
  }

  HandleSurnameChange(event) {
    const userSurname = event.target.value;
    this.setState({surname: userSurname});
  }

  HandleForenameChange(event) {
    const userForename = event.target.value;
    this.setState({forename: userForename});
  }

  HandleDobChange(event) {
    const userDob = event.target.value;
    this.setState({dob: userDob});
  }

  HandleGpChange(event) {
    const userGp = event.target.value;
    this.setState({gp: userGp});
  }

  HandleAddress1Change(event) {
    const userAddress1 = event.target.value;
    this.setState({address1: userAddress1});
  }

  HandleAddress2Change(event) {
    const userAddress2 = event.target.value;
    this.setState({address2: userAddress2});
  }

  HandleAddress3Change(event) {
    const userAddress3 = event.target.value;
    this.setState({address3: userAddress3});
  }

  HandleAddress4Change(event) {
    const userAddress4 = event.target.value;
    this.setState({address4: userAddress4});
  }

  HandlePhoneChange(event) {
    const userPhone = event.target.value;
    this.setState({phone: userPhone});
  }

  HandleEmailChange(event) {
    const userEmail = event.target.value;
    this.setState({email: userEmail});
  }

  HandleEmploymentChange(event) {
    const userEmployment = event.target.value;
    this.setState({employment: userEmployment});
  }

  HandleLeaveMessageChange(event) {
    const userMessage = event.target.value;
    this.setState({leavemessage: userMessage});
  }

  HandleFromFeniksChange(event) {
    const userFromFeniks = event.target.value;
    this.setState({fromfeniks: userFromFeniks});
  }

  HandleMailingChange(event) {
    const userMailing = event.target.value;
    this.setState({mailing: userMailing});
  }

  HandleProject1Change(event) {
    console.log("HERE")
    const userProject1 = event.target.value;
    this.setState({project1: userProject1});
  }

  HandleProject2Change(event) {
    const userProject2 = event.target.value;
    this.setState({project2: userProject2});
  }

  HandleProject3Change(event) {
    const userProject3 = event.target.value;
    this.setState({project3: userProject3});
  }

  HandleProject4Change(event) {
    const userProject4 = event.target.value;
    this.setState({project4: userProject4});
  }

  HandleProject5Change(event) {
    const userProject5 = event.target.value;
    this.setState({project5: userProject5});
  }

  HandleProject6Change(event) {
    const userProject6 = event.target.value;
    this.setState({project6: userProject6});
  }

  HandleProject7Change(event) {
    const userProject7 = event.target.value;
    this.setState({project7: userProject7});
  }

  HandleProject8Change(event) {
    const userProject8 = event.target.value;
    this.setState({project8: userProject8});
  }

  HandleProject9Change(event) {
    const userProject9 = event.target.value;
    this.setState({project9: userProject9});
  }

  HandleHearChange(event) {
    const userHear = event.target.value;
    this.setState({hear: userHear});
  }

  handleSubmit(event){
    // Arrange states for database schema
    // Either insert into DB or run script to insert
  }



  render(){
    console.log("State: ",this.state)
    return(
      <Fragment>
        <form onSubmit={this.handleSubmit}>
          <div className="content-block">
            <div className="row">
              <h4>Personal Information</h4>
            </div>
            <div className="form-group row">
              <label htmlFor="title" className="col-sm-2 col-form-label">Title</label>
              <div className="col-sm-9">
                <select id="title" name="title" className="form-control" value={this.state.title} onChange={this.HandleTitleChange}>
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
                <input type="text" id="surname" name="surname" className="form-control"  placeholder="Surname(s)" required value={this.state.surname} onChange={this.HandleSurnameChange}/>
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="forename" className="col-sm-2 col-form-label">Forename(s)</label>
              <div className="col-sm-9">
                <input type="text" id="forename" name="forename" className="form-control"  placeholder="Forename(s)" required value={this.state.forename} onChange={this.HandleForenameChange}/>
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="dob" className="col-sm-2 col-form-label">Date of Birth</label>
              <div className="col-sm-9">
                <input type="date" id="dob" name="dob" className="form-control"  placeholder="" required value={this.state.dob} onChange={this.HandleDobChange}/>
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="gp" className="col-sm-2 col-form-label">GP Name and Practice</label>
              <div className="col-sm-9">
                <input type="text" id="gp" name="gp" className="form-control"  placeholder="GP Name and Paractice" value={this.state.gp} onChange={this.HandleGpChange}/>
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
                <input type="text" id="address1" name="address1" className="form-control"  placeholder="House name / number" value={this.state.address1} onChange={this.HandleAddress1Change}/>
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="address2" className="col-sm-2 col-form-label">Address Line 2</label>
              <div className="col-sm-9">
                <input type="text" id="address2" name="address2" className="form-control"  placeholder="Street" value={this.state.address2} onChange={this.HandleAddress2Change}/>
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="address3" className="col-sm-2 col-form-label">Address Line 3</label>
              <div className="col-sm-9">
                <input type="text" id="address3" name="address3" className="form-control"  placeholder="Town" value={this.state.address3} onChange={this.HandleAddress3Change}/>
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="address4" className="col-sm-2 col-form-label">Address Line 4</label>
              <div className="col-sm-9">
                <input type="text" id="address4" name="address4" className="form-control"  placeholder="Postcode" value={this.state.address4} onChange={this.HandleAddress4Change}/>
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="phone" className="col-sm-2 col-form-label">Phone Number</label>
              <div className="col-sm-9">
                <input type="number" id="phone" name="phone" className="form-control"  placeholder="Phone Number" value={this.state.phone} onChange={this.HandlePhoneChange}/>
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
              <div className="col-sm-9">
                <input type="text" id="email" name="email" className="form-control"  placeholder="Email Address" value={this.state.email} onChange={this.HandleEmailChange}/>
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="employment" className="col-sm-2 col-form-label">Employment Status</label>
              <div className="col-sm-9">
                <select id="employment" name="employment" className="form-control" value={this.state.employment} onChange={this.HandleEmploymentChange}>
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
                <input type="checkbox" id="leavemessage" name="leavemessage" className="form-check-input"  onChange={this.HandleLeaveMessageChange}/>
                <label className="form-check-label" htmlFor="leavemessage">Tick if we can leave a message on your voicemail</label>
              </div>
              <div className="form-check">
                <input type="checkbox" id="fromfeniks" name="fromfeniks" className="form-check-input" onChange={this.HandleFromFeniksChange}/>
                <label className="form-check-label" htmlFor="fromfeniks">Tick if we can say we are calling from Feniks</label>
              </div>
              <div className="form-check">
                <input type="checkbox" id="mailing" name="mailing" className="form-check-input" onChange={this.HandleMailingChange}/>
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
              <input type="checkbox" id="project1" name="project1" className="form-check-input" onChange={this.HandleProject1Change}/>
              <label className="form-check-label" htmlFor="project1">Active 50+</label>
              <input type="checkbox" id="project2" name="project2" className="form-check-input" onChange={this.HandleProject2Change}/>
              <label className="form-check-label" htmlFor="project2">Counselling / Therapy</label>
              <input type="checkbox" id="project3" name="project3" className="form-check-input" onChange={this.HandleProject3Change}/>
              <label className="form-check-label" htmlFor="project3">Group Therapy</label>
            </div>
            <br/>
            <div className="form-group form-check form-check-inline">
              <input type="checkbox" id="project4" name="project4" className="form-check-input" onChange={this.HandleProject4Change}/>
              <label className="form-check-label" htmlFor="project4">Toddler Group</label>
              <input type="checkbox" id="project5" name="project5" className="form-check-input" onChange={this.HandleProject5Change}/>
              <label className="form-check-label" htmlFor="project5">Survivors' Group</label>
              <input type="checkbox" id="project6" name="project6" className="form-check-input" onChange={this.HandleProject6Change}/>
              <label className="form-check-label" htmlFor="project6">Personal Development Workshops</label>
            </div>
            <br/>
            <div className="form-group form-check form-check-inline">
              <input type="checkbox" id="project7" name="project7" className="form-check-input" onChange={this.HandleProject7Change}/>
              <label className="form-check-label" htmlFor="project7">Leith Conversation Cafes</label>
              <input type="checkbox" id="project8" name="project8" className="form-check-input" onChange={this.HandleProject8Change}/>
              <label className="form-check-label" htmlFor="project8">SMART Recovery</label>
              <input type="checkbox" id="project9" name="project9" className="form-check-input" onChange={this.HandleProject9Change}/>
              <label className="form-check-label" htmlFor="project9">Other</label>
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
              <input type="radio" id="hear1" name="hear" className="form-check-input" value="1" onChange={this.HandleHearChange}/>
              <label className="form-check-label" htmlFor="hear1">Emito</label>
              <input type="radio" id="hear2" name="hear" className="form-check-input" value="2" onChange={this.HandleHearChange}/>
              <label className="form-check-label" htmlFor="hear2">Feniks' Website</label>
              <input type="radio" id="hear3" name="hear" className="form-check-input" value="3" onChange={this.HandleHearChange}/>
              <label className="form-check-label" htmlFor="hear3">Friend / Family Member</label>
            </div>
            <br/>
            <div className="form-group form-check form-check-inline">
              <input type="radio" id="hear4" name="hear" className="form-check-input" value="4" onChange={this.HandleHearChange}/>
              <label className="form-check-label" htmlFor="hear4">GP</label>
              <input type="radio" id="hear5" name="hear" className="form-check-input" value="5" onChange={this.HandleHearChange}/>
              <label className="form-check-label" htmlFor="hear5">Leaflet</label>
              <input type="radio" id="hear6" name="hear" className="form-check-input" value="6" onChange={this.HandleHearChange}/>
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
              <Link to={{pathname:'/equality',state:{dob:this.state.dob,employment:this.state.employment,hear:this.state.hear}}} className="btn btn-lg btn-success btn-block">Submit</Link>
              <button type="reset" className="btn btn-lg btn-block btn-danger">Reset</button>
            </div>
          </div>
        </form>
      </Fragment>
    )
  }
}
export default NewClient;

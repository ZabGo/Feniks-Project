import React,{Fragment} from 'react';
import {Link} from 'react-router-dom';

const ClientAssessment=(props)=>{
  function handleSubmit(event){
    event.preventDefault();

    const assessment = {
      "thing":event.target.thing.value,
      "thing2":event.target.thing2.value
    }

    props.handleAssessmentPost(assessment);
  }

  return (
    <Fragment>
      <div className="content-block">
        <div className="row">
          <h4>Client Assessment Form</h4>
        </div>
        <div className="row">
          <div className="col-sm-12 btn-group">
            <Link to="/details" className="btn btn-lg btn-info">Client Details</Link>
            <Link to="/edit" className="btn btn-lg btn-info">Edit Client</Link>
            <Link to="/assess" className="btn btn-lg btn-info disabled">Client Assessment</Link>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="content-block">
          <div className="row">
            <h4>Basic Information</h4>
          </div>
          <div className="row">
            <ul>
              <li>Client Code</li>
              <li>Assessment Date</li>
              <li>Therapist / Counsellor</li>
              <li>Pathway</li>
              <li>DOB</li>
              <li>Gender</li>
              <li>Nationality</li>
              <li>GP</li>
            </ul>
          </div>
        </div>

        <div className="content-block">
          <div className="row">
            <h4>Sessions</h4>
          </div>
          <div className="row">
            <ul>
              <li>Schedule</li>
              <li>Seen by practitioner</li>
              <li>Session type</li>
            </ul>
          </div>
        </div>

        <div className="content-block">
          <div className="row">
            <h4>Client Information</h4>
          </div>
          <div className="row">
            <ul>
              <li>Any Significant health problems or disabilities</li>
              <li>Current relevant medication (What medication, dose if known, why they were prescribed and when)</li>
              <li>Alcohol / Recreational drugs - past/present</li>
              <li>Has the client ever physically harmed themselves in any way</li>
              <li>Has the client ever considered taking their own life</li>
              <li>Does the client have suicidal thoughts as of now</li>
              <li>Has the client had therapy / counselling in the past</li>
              <li>Is the client receiving any other form of therapy / seeing any other healthcare professional at present</li>
              <li>Social situation (occupation, potential financial and social issues, living arrangements, family and friends, environmental issues, emotional support, etc)</li>
            </ul>
          </div>
        </div>

        <div className="content-block">
          <div className="row">
            <h4>Presenting Issues</h4>
          </div>
          <div className="form-group form-check form-check-inline">
            <input type="checkbox" id="1" name="1" className="form-check-input"/>
            <label className="form-check-label" htmlFor="1">Abuse / Trauma</label>
            <input type="checkbox" id="" name="" className="form-check-input"/>
            <label className="form-check-label" htmlFor="">Adaptation Problems</label>
            <input type="checkbox" id="" name="" className="form-check-input"/>
            <label className="form-check-label" htmlFor="">Addiction: Alcohol</label>
            <input type="checkbox" id="" name="" className="form-check-input"/>
            <label className="form-check-label" htmlFor="">Addiction: Drugs</label>
            <input type="checkbox" id="" name="" className="form-check-input"/>
            <label className="form-check-label" htmlFor="">Addiction: Gambling</label>
          </div>
          <br/>
          <div className="form-group form-check form-check-inline">
            <input type="checkbox" id="" name="" className="form-check-input"/>
            <label className="form-check-label" htmlFor="">Addiction: Other</label>
            <input type="checkbox" id="" name="" className="form-check-input"/>
            <label className="form-check-label" htmlFor="">Alcohol / substance abuse in family of origin</label>
            <input type="checkbox" id="" name="" className="form-check-input"/>
            <label className="form-check-label" htmlFor="">Anger and Aggression</label>
            <input type="checkbox" id="" name="" className="form-check-input"/>
            <label className="form-check-label" htmlFor="">Anxiety</label>
            <input type="checkbox" id="" name="" className="form-check-input"/>
            <label className="form-check-label" htmlFor="">Bereavement/Loss</label>
          </div>
          <br/>
          <div className="form-group form-check form-check-inline">
            <input type="checkbox" id="" name="" className="form-check-input"/>
            <label className="form-check-label" htmlFor="">Bullying / Mobbing</label>
            <input type="checkbox" id="" name="" className="form-check-input"/>
            <label className="form-check-label" htmlFor="">Childhood Issues</label>
            <input type="checkbox" id="" name="" className="form-check-input"/>
            <label className="form-check-label" htmlFor="">Cognitive / Learning</label>
            <input type="checkbox" id="" name="" className="form-check-input"/>
            <label className="form-check-label" htmlFor="">Dealing with Emotions</label>
            <input type="checkbox" id="" name="" className="form-check-input"/>
            <label className="form-check-label" htmlFor="">Depression</label>
          </div>
          <br/>
          <div className="form-group form-check form-check-inline">
            <input type="checkbox" id="" name="" className="form-check-input"/>
            <label className="form-check-label" htmlFor="">Domestic Violence</label>
            <input type="checkbox" id="" name="" className="form-check-input"/>
            <label className="form-check-label" htmlFor="">Eating Disorder</label>
            <input type="checkbox" id="" name="" className="form-check-input"/>
            <label className="form-check-label" htmlFor="">Family Difficulties</label>
            <input type="checkbox" id="" name="" className="form-check-input"/>
            <label className="form-check-label" htmlFor="">Gender / Sexuality</label>
            <input type="checkbox" id="" name="" className="form-check-input"/>
            <label className="form-check-label" htmlFor="">Interpersonal / Relationships</label>
          </div>
          <br/>
          <div className="form-group form-check form-check-inline">
            <input type="checkbox" id="" name="" className="form-check-input"/>
            <label className="form-check-label" htmlFor="">Isolation</label>
            <input type="checkbox" id="" name="" className="form-check-input"/>
            <label className="form-check-label" htmlFor="">Living / Welfare</label>
            <input type="checkbox" id="" name="" className="form-check-input"/>
            <label className="form-check-label" htmlFor="">Mental Health Diagnosis</label>
            <input type="checkbox" id="" name="" className="form-check-input"/>
            <label className="form-check-label" htmlFor="">Mood Disorders</label>
            <input type="checkbox" id="" name="" className="form-check-input"/>
            <label className="form-check-label" htmlFor="">Panic Attacks</label>
          </div>
          <br/>
          <div className="form-group form-check form-check-inline">
            <input type="checkbox" id="" name="" className="form-check-input"/>
            <label className="form-check-label" htmlFor="">Personality Disorders</label>
            <input type="checkbox" id="" name="" className="form-check-input"/>
            <label className="form-check-label" htmlFor="">Phobias</label>
            <input type="checkbox" id="" name="" className="form-check-input"/>
            <label className="form-check-label" htmlFor="">Psychosis</label>
            <input type="checkbox" id="" name="" className="form-check-input"/>
            <label className="form-check-label" htmlFor="">Self-Esteem</label>
            <input type="checkbox" id="" name="" className="form-check-input"/>
            <label className="form-check-label" htmlFor="">Self-Harming</label>
          </div>
          <br/>
          <div className="form-group form-check form-check-inline">
            <input type="checkbox" id="" name="" className="form-check-input"/>
            <label className="form-check-label" htmlFor="">Sexual</label>
            <input type="checkbox" id="" name="" className="form-check-input"/>
            <label className="form-check-label" htmlFor="">Stress</label>
            <input type="checkbox" id="" name="" className="form-check-input"/>
            <label className="form-check-label" htmlFor="">Studies</label>
            <input type="checkbox" id="" name="" className="form-check-input"/>
            <label className="form-check-label" htmlFor="">Suicidal Thoughts / Feelings</label>
            <input type="checkbox" id="" name="" className="form-check-input"/>
            <label className="form-check-label" htmlFor="">Suicidal Attempts</label>
          </div>
          <br/>
          <div className="form-group form-check form-check-inline">
            <input type="checkbox" id="" name="" className="form-check-input"/>
            <label className="form-check-label" htmlFor="">Work</label>
            <input type="checkbox" id="" name="" className="form-check-input"/>
            <label className="form-check-label" htmlFor="">Other</label>
          </div>
          <div className="row">
            <ul>
              <li>Main current issue</li>
              <li>What would the client like from therapy / counselling</li>
            </ul>
          </div>
        </div>

        <div className="content-block">
          <div className="row">
            <h4>Information for Allocation</h4>
          </div>
          <div className="row">
            <ul>
              <li>Assessment therapists / counsellors thoughts and feelings during and after session</li>
              <li>appropriate for therapy / counselling</li>
              <li>thype of therapist / counsellor required</li>
              <li>Referrals to other projects suggested</li>
              <li>Notes</li>
            </ul>
          </div>
        </div>
      </form>
    </Fragment>
  )
}
export default ClientAssessment;

import React,{Fragment} from 'react';
import {Link} from 'react-router-dom';

const ClientAssessment=(props)=>{
  function handleSubmit(event){
    event.preventDefault();

    const assessment = {
      "thing":event.target.thing.value,
      "thing2":event.target.thing2.value
    }
// Assessment form post functionality still missing: handleAssessmentPost not written.
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
            <h4>Schedule</h4>
          </div>
          <div className="form-group row">
            <div className="col-sm-12">
              <label>When is the client able to attend sessions? They are usually held at the same time, either weekly or fortnightly.</label>
            </div>
            <div className="col-sm-12">
              <table>
                <tr>
                  <th></th>
                  <th>Monday</th>
                  <th>Tuesday</th>
                  <th>Wednesday</th>
                  <th>Thursday</th>
                  <th>Friday</th>
                  <th>Saturday</th>
                </tr>
                <tr>
                  <td>Morning</td>
                  <td><input type="text" id="monday-morning" name="monday-morning" className="form-control"/></td>
                  <td><input type="text" id="tuesday-morning" name="tuesday-morning" className="form-control"/></td>
                  <td><input type="text" id="wednesday-morning" name="wednesday-morning" className="form-control"/></td>
                  <td><input type="text" id="thursday-morning" name="thursday-morning" className="form-control"/></td>
                  <td><input type="text" id="friday-morning" name="friday-morning" className="form-control"/></td>
                  <td><input type="text" id="saturday-morning" name="saturday-morning" className="form-control"/></td>
                </tr>
                <tr>
                  <td>Afternoon</td>
                  <td><input type="text" id="monday-afternoon" name="monday-afternoon" className="form-control"/></td>
                  <td><input type="text" id="tuesday-afternoon" name="tuesday-afternoon" className="form-control"/></td>
                  <td><input type="text" id="wednesday-afternoon" name="wednesday-afternoon" className="form-control"/></td>
                  <td><input type="text" id="thursday-afternoon" name="thursday-afternoon" className="form-control"/></td>
                  <td><input type="text" id="friday-afternoon" name="friday-afternoon" className="form-control"/></td>
                  <td><input type="text" id="saturday-afternoon" name="saturday-afternoon" className="form-control"/></td>
                </tr>
                <tr>
                  <td>Evening</td>
                  <td><input type="text" id="monday-evening" name="monday-evening" className="form-control"/></td>
                  <td><input type="text" id="tuesday-evening" name="tuesday-evening" className="form-control"/></td>
                  <td><input type="text" id="wednesday-evening" name="wednesday-evening" className="form-control"/></td>
                  <td><input type="text" id="thursday-evening" name="thursday-evening" className="form-control"/></td>
                  <td><input type="text" id="friday-evening" name="friday-evening" className="form-control"/></td>
                  <td><input type="text" id="saturday-evening" name="saturday-evening" className="form-control"/></td>
                </tr>
              </table>
            </div>
          </div>
        </div>

        <div className="content-block">
          <div className="row">
            <h4>Sessions</h4>
          </div>
          <div className="form-group row">
            <label htmlFor="practitioner" className="col-sm-2 col-form-label">Seen by Practitioner</label>
            <div className="col-sm-9">
              <input type="text" id="practitioner" name="practitioner" className="form-control"  placeholder="Seen by Practitioner" />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="sessiontype" className="col-sm-2 col-form-label">Session Type</label>
            <div className="col-sm-9">
              <input type="text" id="sessiontype" name="sessiontype" className="form-control"  placeholder="Session Type" />
            </div>
          </div>
        </div>

        <div className="content-block">
          <div className="row">
            <h4>Client Information</h4>
          </div>
          <div className="form-group">
            <div className="row">
              <label htmlFor="health-text" className="col-sm-12 col-form-label">Any Significant health problems or disabilities</label>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <textarea id="health-text" name="health-text" className="form-control" rows="7" />
              </div>
            </div>
          </div>
          <div className="form-group">
            <div className="row">
              <label htmlFor="medication-text" className="col-sm-12 col-form-label">Current relevant medication (What medication, dose if known, why they were prescribed and when)</label>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <textarea id="medication-text" name="medication-text" className="form-control" rows="7" />
              </div>
            </div>
          </div>
          <div className="form-group">
            <div className="row">
              <label htmlFor="alcoholdrugs-text" className="col-sm-12 col-form-label">Alcohol / Recreational drugs - past/present</label>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <textarea id="alcoholdrugs-text" name="alcoholdrugs-text" className="form-control" rows="7" />
              </div>
            </div>
          </div>
          <div className="form-group">
            <div className="row">
              <label htmlFor="selfharm-text" className="col-sm-12 col-form-label">Has the client ever physically harmed themselves in any way</label>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <textarea id="selfharm-text" name="selfharm-text" className="form-control" rows="7" />
              </div>
            </div>
          </div>
          <div className="form-group">
            <div className="row">
              <label htmlFor="suicidecons-text" className="col-sm-12 col-form-label">Has the client ever considered taking their own life</label>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <textarea id="suicidecons-text" name="suicidecons-text" className="form-control" rows="7" />
              </div>
            </div>
          </div>
          <div className="form-group">
            <div className="row">
              <label htmlFor="suicidethoughts-text" className="col-sm-12 col-form-label">Does the client have suicidal thoughts as of now</label>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <textarea id="suicidethoughts-text" name="suicidethoughts-text" className="form-control" rows="7" />
              </div>
            </div>
          </div>
          <div className="form-group">
            <div className="row">
              <label htmlFor="therapy-text" className="col-sm-12 col-form-label">Has the client had therapy / counselling in the past</label>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <textarea id="therapy-text" name="therapy-text" className="form-control" rows="7" />
              </div>
            </div>
          </div>
          <div className="form-group">
            <div className="row">
              <label htmlFor="othertherapy-text" className="col-sm-12 col-form-label">Is the client receiving any other form of therapy / seeing any other healthcare professional at present</label>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <textarea id="othertherapy-text" name="othertherapy-text" className="form-control" rows="7" />
              </div>
            </div>
          </div>
          <div className="form-group">
            <div className="row">
              <label htmlFor="social-text" className="col-sm-12 col-form-label">Social situation (occupation, potential financial and social issues, living arrangements, family and friends, environmental issues, emotional support, etc)</label>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <textarea id="social-text" name="social-text" className="form-control" rows="7" />
              </div>
            </div>
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

          <div className="form-group">
            <div className="row">
              <label htmlFor="currentissue" className="col-sm-2 col-form-label">Main Current Issue</label>
              <div className="col-sm-9">
                <input type="text" id="currentissue" name="currentissue" className="form-control"  placeholder="Main Current Issue" />
              </div>
            </div>
            <div className="row">
              <label htmlFor="counsellinggoal-text" className="col-sm-12 col-form-label">What would the client like from therapy / counselling</label>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <textarea id="counsellinggoal-text" name="counsellinggoal-text" className="form-control" rows="7" />
              </div>
            </div>
          </div>
        </div>

        <div className="content-block">
          <div className="row">
            <h4>Information for Allocation</h4>
          </div>
          <div className="form-group">
            <div className="row">
              <label htmlFor="thoughts-text" className="col-sm-12 col-form-label">Assessment therapists / counsellors thoughts and feelings during and after session</label>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <textarea id="thoughts-text" name="thoughts-text" className="form-control" rows="7" />
              </div>
            </div>
            <div className="row">
              <label htmlFor="appropriate-text" className="col-sm-12 col-form-label">Appropriate for therapy / counselling?</label>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <textarea id="appropriate-text" name="appropriate-text" className="form-control" rows="7" />
              </div>
            </div>
            <div className="row">
              <label htmlFor="type-text" className="col-sm-12 col-form-label">Type of therapist / counsellor required?</label>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <textarea id="type-text" name="type-text" className="form-control" rows="7" />
              </div>
            </div>
            <div className="row">
              <label htmlFor="referrals-text" className="col-sm-12 col-form-label">Referrals to other projects suggested</label>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <textarea id="referrals-text" name="referrals-text" className="form-control" rows="7" />
              </div>
            </div>
          </div>
        </div>
        <div className="content-block">
          <div className="row">
            <h4>Notes</h4>
          </div>
          <div className="form-group">
            <div className="row">
              <label htmlFor="thoughts-text" className="col-sm-12 col-form-label">All Notes</label>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <textarea id="thoughts-text" name="thoughts-text" className="form-control" rows="14" />
              </div>
            </div>
          </div>
        </div>
        <div className="content-block">
          <div className="form-group">
            <input type="submit" className="btn btn-lg btn-block btn-success" value="Save"/>
          </div>
        </div>
      </form>
    </Fragment>
  )
}
export default ClientAssessment;

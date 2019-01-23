import React,{Fragment, Component} from 'react';
import {Link} from 'react-router-dom';
import Request from '../../helper/Request.js'

import ClientList from '../bits/ClientList.js';


class ExistingClients extends Component{

constructor(props){
  super(props);
  this.state = {clients: [] }
}

componentDidMount(){
  let request = new Request();
  request.get('https://71vtl1r2jd.execute-api.eu-west-2.amazonaws.com/prodTest/clients/').then((data) => {
    console.log('get request for all existing clients', data);
    this.setState({clients: data});
    console.log('State is:',this.state);
  });
}

// const clients = props.clients.map( (client) => {
//   return (

//
//   );
// })


  render(){
  return (<Fragment>
    <div className="content-block">
      <div className="row">
        <h4>Existing Clients</h4>
      </div>
      <form>
        <div className="form-group row">
          <div className="col-sm-9">
            <input type="text" className="form-control" placeholder="Search by Name"/>
          </div>
          <div className="col-sm-3">
            <input type="submit" className="btn btn-block btn-success" value="Search"/>
          </div>
        </div>
      </form>
    </div>

    <div className="row">
      <div className="col-sm-3">
        <div className="column-head">Priority Clients</div>
        <div className="column-body">

        </div>
      </div>

      <div className="col-sm-3">
        <div className="column-head">FastTrack Clients</div>
        <div className="column-body">

        </div>
      </div>

      <div className="col-sm-3">
        <div className="column-head">Standard Clients</div>
        <div className="column-body">

        </div>
      </div>

      <div className="col-sm-3">
        <div className="column-head">Unassigned Clients</div>
        <div className="column-body">

          {
            this.state.clients.map((client) =>{
              return (<ClientList key={client.id} client={client} />);
            })
          }



        </div>
      </div>
    </div>
  </Fragment>

  )};
}
export default ExistingClients;

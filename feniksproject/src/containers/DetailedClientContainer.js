import React, {Component} from 'react';
import Request from '../helper/Request.js';
import ClientInfo from '../components/pages/ClientInfo.js';
import * as url from '../helper/awsRoute.js';

class DetailedClientContainer extends Component{
  constructor(props){
    super(props)
    this.state = {client: null }
    console.log("INITIAL Props", this.props);
  }

  componentDidMount(){
    console.log("DID Mount Props", this.props);
    let request = new Request();
    request.get('https://71vtl1r2jd.execute-api.eu-west-2.amazonaws.com/prodTest/clients/'+ this.props.id).then((data) => {
      console.log('get request for one client', data);
      this.setState({client: data});
      console.log('State is:',this.state);
    });

  };

  render(){
    if(!this.state.client){
      return null;
    }
    return <ClientInfo client = {this.state.client} />
  }

};




export default DetailedClientContainer;

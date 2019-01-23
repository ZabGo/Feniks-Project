import React, {Component} from 'react';
import Request from '../helper/Request.js';
import NewClient from '../components/pages/NewClient.js';


class NewClientContainer extends Component{
  constructor(props){
    super(props)

    this.handleClientPost = this.handleClientPost.bind(this);
  }

  handleClientPost(client){
    console.log("clientInClientContainer", client);
    const request = new Request();
    // xavier account:
    // request.post('https://qe957tlq68.execute-api.eu-west-2.amazonaws.com/production/clients/', client)
    // graham account:
    request.post('https://71vtl1r2jd.execute-api.eu-west-2.amazonaws.com/prodTest/clients/', client).then(() => window.location = "/equality")
}



  render(){
    return <NewClient handleClientPost = {this.handleClientPost} />
  }

}

export default NewClientContainer;

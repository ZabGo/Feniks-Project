import React, {Component} from 'react';
import Request from '../helper/Request.js';
import NewClient from '../components/pages/NewClient.js';


class NewClientContainer extends Component{
  constructor(props){
    super(props)

    this.handleClientPost = this.handleClientPost.bind(this);
  }

  handleClientPost(client){
    console.log("client", client);
    const request = new Request();
    request.post('', client)
  //   .then(() => {
  // window.location = "/clients"})
}



  render(){
    return <NewClient handleClientPost = {this.handleClientPost} />
  }

}

export default NewClientContainer;

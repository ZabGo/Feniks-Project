import React, {Component} from 'react';
import Request from '../helper/Request.js';
import NewClient from '../components/pages/NewClient.js';
import {url} from '../helper/AwsRoute.js';


class NewClientContainer extends Component{
  constructor(props){
    super(props)

    this.handleClientPost = this.handleClientPost.bind(this);
  }

  handleClientPost(client){
    const request = new Request();
    request.post(`${url}`, client).then(() => window.location = "/equality")
  }

  render(){
    return <NewClient handleClientPost = {this.handleClientPost} />
  }
}

export default NewClientContainer;

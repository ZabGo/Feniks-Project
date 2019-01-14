import React, { Component } from 'react';
import './css/feniks_style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6 fancybox pink">
            First div
          </div>
          <div className="col-sm-6 fancybox">
            Second div
          </div>
        </div>
      </div>
    );
  }
}

export default App;

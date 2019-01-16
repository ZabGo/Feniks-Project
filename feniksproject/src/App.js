import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';

import Home from './components/pages/Home.js';
import NewClient from './components/pages/NewClient.js';
import ExistingClients from './components/pages/ExistingClients.js';

import ClientAssessment from './components/pages/ClientAssessment.js'
import ClientInfo from './components/pages/ClientInfo.js'
import EditClient from './components/pages/EditClient.js'
import Equalities from './components/pages/Equalities.js'

import './css/feniks_style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.min.js';

class App extends Component {
  render() {
    return (
      <div className="container-fluid px-0">
        <Router>
          <>
          <nav className="nav navbar-expand-lg navbar-dark bg-dark mb-3 mx-0 px-3">
            <Link to="/" className="navbar-brand logo-text">Feniks</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/newclient" className="nav-link">New Client</Link>
                </li>
                <li className="nav-item">
                  <Link to="/clients" className="nav-link">Clients</Link>
                </li>
              </ul>
            </div>
          </nav>
          <div className="content-area mx-5">
            <Route exact path="/" component={Home} />
            <Route path="/newclient" component={NewClient} />
            <Route path="/clients" component={ExistingClients} />
            <Route path="/assess" component={ClientAssessment} />
            <Route path="/details" component={ClientInfo} />
            <Route path="/edit" component={EditClient} />
            <Route path="/equality" component={Equalities} />
          </div>
          </>
        </Router>
      </div>
    );
  }
}

export default App;

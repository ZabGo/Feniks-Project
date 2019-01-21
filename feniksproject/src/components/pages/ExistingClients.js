import React,{Fragment} from 'react';
import {Link} from 'react-router-dom';

import ClientList from '../bits/ClientList.js';

const ExistingClients=()=>(
  <Fragment>
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
          <ClientList name="George Mints"/>
          <ClientList name="Barry Stout"/>
          <ClientList name="Sharon Pastry"/>
          <ClientList name="Peter Gravy"/>
          <ClientList name="Jerry Tart"/>
        </div>
      </div>

      <div className="col-sm-3">
        <div className="column-head">FastTrack Clients</div>
        <div className="column-body">
          <ClientList name="Lenny Bovril"/>
          <ClientList name="Garry Shart"/>
          <ClientList name="Paula Turnip"/>
          <ClientList name="Adrian Chilli"/>
          <ClientList name="Lydia Jamfart"/>
        </div>
      </div>

      <div className="col-sm-3">
        <div className="column-head">Standard Clients</div>
        <div className="column-body">
          <ClientList name="Thog"/>
          <ClientList name="Chlamydia Stevens"/>
          <ClientList name="William Distractions"/>
          <ClientList name="Shaun McMadeupname"/>
          <ClientList name="Roger Hobos"/>
        </div>
      </div>

      <div className="col-sm-3">
        <div className="column-head">Unassigned Clients</div>
        <div className="column-body">
          <ClientList name="Shorty Flan"/>
          <ClientList name="Crunchy Michaels"/>
          <ClientList name="Terry Grapes"/>
          <ClientList name="Pimco Melon"/>
          <ClientList name="The Arnold"/>
        </div>
      </div>
    </div>
  </Fragment>
)
export default ExistingClients;

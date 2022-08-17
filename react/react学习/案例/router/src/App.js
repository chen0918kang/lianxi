import React, { Component } from 'react'
import {Route,NavLink,Redirect} from 'react-router-dom'

import Home from './components/Home/Home'
import About from './components/About/About'
export default class App extends Component {
  render() {
    return (
      <div>
      <div className="row">
        <div className="col-xs-offset-2 col-xs-8">
          <div className="page-header"><h2>React Router Demo</h2></div>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-2 col-xs-offset-2">
          <div className="list-group">
                
            <NavLink className="list-group-item" to="/about">About</NavLink>
            <NavLink className="list-group-item " to="/home">Home</NavLink>      
          
          </div>
        </div>
        <div className="col-xs-6">
          <div className="panel">
            <div className="panel-body">
                <Route path="/home" component={Home}/>
                <Route path="/about" component={About}/>
                <Redirect to="/about"/>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

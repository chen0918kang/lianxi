import React, { Component } from 'react'
import {NavLink,Switch,Route,Redirect} from 'react-router-dom'
import New from '../New/New'
import Message from '../Message/Message'
export default class Home extends Component {
  render() {
    return (
      <div>
             <h3>我是Home的内容</h3>
              <div>
                <ul className="nav nav-tabs">
                  <li>
                    <NavLink className="list-group-item " to="/home/news">News</NavLink>
                  </li>
                  <li>
                    <NavLink className="list-group-item " to="/home/message">Message</NavLink>
                  </li>
                </ul>
                <Switch>
                      <Route path="/home/news" component={New}/>
                      <Route path="/home/message" component={Message}/>
                      <Redirect to="/home/news"/>
                </Switch>
              </div>
      </div>
    )
  }
}

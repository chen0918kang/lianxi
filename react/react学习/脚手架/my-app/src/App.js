

import React, { Component } from 'react'
import axios from 'axios'
export default class App extends Component {
  getStudent=()=>{
      axios.get('http://localhost:3000/api1/students').then(    
      response => {console.log('成功了',response.data)},
      error => {console.log('失败',error)}

)
  }
  
  getCar=()=>{
    axios.get('http://localhost:3000/api2/cars').then(    
      response => {console.log('成功了',response.data)},
      error => {console.log('失败',error)})
     }





  render() {
    return (
      <div>  
        <button type="button" onClick={this.getStudent}>发起5000请求</button>
           <button type="button" onClick={this.getCar}>发起5001请求</button>
        </div>
    )
  }
}



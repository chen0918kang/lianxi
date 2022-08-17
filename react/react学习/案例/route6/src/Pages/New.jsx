import React from 'react'
import {Link} from 'react-router-dom'
export default function New() {
  return (
    <ul>
    <li>
      <Link to="/new1">New01</Link>&nbsp;&nbsp;
    </li>
    <li>
      <Link to="/new2">New02</Link>&nbsp;&nbsp;
    </li>
    <li>
      <Link to="/new3">New03</Link>&nbsp;&nbsp;
    </li>
  </ul>
  )
}

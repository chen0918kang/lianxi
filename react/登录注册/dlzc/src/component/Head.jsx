import React from "react";
import { NavLink } from "react-router-dom";
export default function Head() {
  return (
    <div>
      <h1>导航页</h1>
      <ul className="nav nav-pills">
        <li role="presentation">
          <NavLink to="/up">点击进去注册页面</NavLink>
        </li>
        <li role="presentation">
          <NavLink to="/dl">点击进去登录页面</NavLink>
        </li>
      </ul>
    </div>
  );
}

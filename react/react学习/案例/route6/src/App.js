import React from "react";
import { NavLink, useRoutes } from "react-router-dom";
import routes from "./routes/routes";
export default function App() {
  // 路由表
  const element = useRoutes(routes);

  function computedClassName({ isActive }) {
    return isActive ? "list-group-item cdx" : "list-group-item";
  }
  return (
    <div>
      <div className="row">
        <div className="col-xs-offset-2 col-xs-8">
          <div className="page-header">
            <h2>React Router Demo</h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-2 col-xs-offset-2">
          <div className="list-group">
            {/* 路由链接 */}
            <NavLink className={computedClassName} end to="/about">
              About
            </NavLink>
            <NavLink className={computedClassName} end to="/home">
              Home
            </NavLink>

            {/* <a className="list-group-item active" href="./about.html">
              About
            </a> */}
            {/* <a className="list-group-item" href="./home.html">
              Home
            </a> */}
          </div>
        </div>
        <div className="col-xs-6">
          <div className="panel">
            <div className="panel-body">
              {/* 注册路由 */}
              {/* <Routes>
                <Route path="/about" element={<About />} />
                <Route path="/home" element={<Home />} />
                <Route path="/" element={<Navigate to="/about" />} />
              </Routes> */}
              {/* 路由表 */}
              {element}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

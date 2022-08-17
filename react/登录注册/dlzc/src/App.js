import React from "react";
import { useRoutes } from "react-router-dom";
import route from "./router/route";
import Head from "./component/Head";

export default function App() {
  const element = useRoutes(route);

  return (
    <div>
      <Head />
      <hr />
      <h1>首页</h1>
      <hr />
      <h1>组件展示页</h1>
      {element}
    </div>
  );
}

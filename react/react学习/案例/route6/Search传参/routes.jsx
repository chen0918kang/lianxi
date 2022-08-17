/* eslint-disable import/no-anonymous-default-export */
import About from "../Pages/About";
import Home from "../Pages/Home";
import New from "../Pages/New";
import Message from "../Pages/Message";
import Detail from "../Pages/Detail";
import { Navigate } from "react-router-dom";

export default [
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/home",
    element: <Home />,
    children: [
      {
        path: "new",
        element: <New />,
      },
      {
        path: "message",
        element: <Message />,
        children: [
          {
            path: "detail",
            element: <Detail />,
          },
        ],
      },
      {
        path: "",
        element: <New />,
      },
    ],
  },
  {
    path: "/",
    element: <Navigate to="/about" />,
  },
];

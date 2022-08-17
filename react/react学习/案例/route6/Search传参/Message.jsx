import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

export default function Message() {
  const [message] = useState([
    { id: "001", title: "消息1", content: "锄禾日当午" },
    { id: "002", title: "消息2", content: "汗滴禾下土" },
    { id: "003", title: "消息3", content: "谁知盘中餐" },
    { id: "004", title: "消息4", content: "粒粒皆辛苦", p: true },
  ]);

  return (
    <div>
      <ul>
        {message.map((item) => {
          return (
            <li>
              <Link
                to={`detail/?id=${item.id}&title=${item.title}&content=${item.content}`}
                key={item.id}
              >
                {item.title}
              </Link>
              &nbsp;&nbsp;
            </li>
          );
        })}
      </ul>
      <Outlet />
    </div>
  );
}

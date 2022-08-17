import React from "react";
import { useSearchParams } from "react-router-dom";
export default function Detail() {
  const [search, setSearch] = useSearchParams();
  const id = search.get("id");
  const title = search.get("title");
  const content = search.get("content");
  function xiuGai() {
    setSearch("id=002&title=你好&content=清明上河图");
  }

  return (
    <ul>
      <li>{id}</li>
      <li>{title}</li>
      <li>{content}</li>
      <li>
        <button onClick={xiuGai}>点击修改</button>
      </li>
    </ul>
  );
}

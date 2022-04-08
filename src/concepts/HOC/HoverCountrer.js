import React from "react";
import WithCounter from "./WithCounter";

function HoverCounter(props) {
  return (
    <div>
      <div onMouseEnter={props.counter}>Hovered {props.count} times</div>
    </div>
  );
}

export default WithCounter(HoverCounter);

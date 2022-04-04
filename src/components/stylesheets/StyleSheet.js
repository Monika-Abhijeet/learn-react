import React from "react";
import "./myStyles.css";

function Stylesheet(props) {
  let className = props.primary ? "primary" : "";
  return <h1 className={className}> this is styling component</h1>;
}

export default Stylesheet;

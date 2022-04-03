import "./Header.css";
import React from "react";
function Header(props) {
  return (
    <div
      className="header-container"
      style={{ backgroundColor: props.bgColor, color: props.color }}
    >
      <h1 className="header">
        {props.title} {props.tutor}
      </h1>
    </div>
  );
}

export default Header;

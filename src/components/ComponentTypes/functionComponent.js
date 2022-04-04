import React from "react";
import ChildComponent from "./childComponent";

function FunctionComponent() {
  return (
    <div>
      <h1>this is a functional component</h1>
      <ChildComponent title="this is a child from functional component"></ChildComponent>
    </div>
  );
}

export default FunctionComponent;

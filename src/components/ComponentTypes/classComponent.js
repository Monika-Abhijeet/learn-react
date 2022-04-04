import React, { Component } from "react";
import ChildComponent from "./childComponent";

class ClassComponent extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <h1>This is a class Component</h1>
        {/* <ChildComponent title="hellopooo!"></ChildComponent> */}
      </div>
    );
  }
}

export default ClassComponent;

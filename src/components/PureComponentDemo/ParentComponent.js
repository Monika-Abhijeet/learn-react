import React, { Component, PureComponent } from "react";
import PureComp from "./PureComponent";
import RegComp from "./RegularComponent";

class ParentComp extends PureComponent {
  constructor() {
    super();
    this.state = {
      name: "Monika",
    };
  }
  componentDidMount() {
    // Simple GET request using fetch
    fetch("https://reqres.in/api/users?page=2")
      .then((response) => response.json())
      .then((data) => console.log(data));
  }
  render() {
    console.log("-------- Parent Component---------");
    console.log("Name is", this.state.name);
    return (
      <div>
        <h1>Parent Component as pure component</h1>
        <RegComp name={this.state.name}></RegComp>
        <PureComp name={this.state.name}></PureComp>
      </div>
    );
  }
}

export default ParentComp;

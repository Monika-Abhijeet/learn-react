import React, { Component } from "react";
import PureComp from "./PureComponent";
import RegComp from "./RegularComponent";

class ParentComp extends Component {
  constructor() {
    super();
    this.state = {
      name: "Monika",
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({ name: "Monika Abhijeet" });
    }, 2000);
  }
  render() {
    console.log("-------- Parent Component---------");
    console.log("Name is", this.state.name);
    return (
      <div>
        <h1>Parent Componnet</h1>
        <RegComp name={this.state.name}></RegComp>
        <PureComp name={this.state.name}></PureComp>
      </div>
    );
  }
}

export default ParentComp;

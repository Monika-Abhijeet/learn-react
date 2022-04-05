import React, { Component } from "react";

class RegComp extends Component {
  render() {
    console.log("-------- Regular Component---------");
    console.log("Name is", this.props.name);

    return (
      <div>
        <h4>Regular component</h4>
        <p> My name is {this.props.name}</p>
      </div>
    );
  }
}

export default RegComp;

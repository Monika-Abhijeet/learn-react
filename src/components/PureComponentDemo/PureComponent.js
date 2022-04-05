import React, { PureComponent } from "react";

class PureComp extends PureComponent {
  render() {
    console.log("-------- Pure Component---------");
    console.log("Name is", this.props.name);
    return (
      <div>
        <h4>Pure component</h4>
        <p> My name is {this.props.name}</p>
      </div>
    );
  }
}

export default PureComp;

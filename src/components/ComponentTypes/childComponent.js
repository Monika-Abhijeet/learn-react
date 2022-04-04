import React, { Component } from "react";

// function ChildComponent(props) {
//   function handleClick() {
//     alert("button clicked!!");
//   }
//   return (
//     <div>
//       <h4>{props.title}</h4>
//       <button
//         className="btn btn-primary"
//         onClick={handleClick}
//       >
//         Click me
//       </button>
//     </div>
//   );
// }

class ChildComponent extends Component {
  constructor() {
    super();
    this.state = {
      title: "State title",
    };
  }
  handleClick() {
    alert("this is a child method");
  }
  changeTitle() {
    console.log("title changes");
    // this.setState({ title: "heleo" });
  }
  render() {
    return (
      <div>
        <h4>received from parent = {this.props.title}</h4>
        <h4>received from state(same class component) = {this.state.title}</h4>
        <button onClick={this.changeTitle}> Change Title</button>

        <button className="btn btn-primary" onClick={this.handleClick}>
          Click me
        </button>
      </div>
    );
  }
}

export default ChildComponent;

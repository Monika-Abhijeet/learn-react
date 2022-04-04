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
      count: 15,
    };
  }
  handleClick() {
    alert("this is a child method");
    console.log("this is child method", this.state.count);
  }
  changeTitle() {
    console.log("title changes");
    this.setState({ title: "title changed" });
  }

  incrementCounter() {
    this.setState({ count: this.state.count + 1 });
  }
  render() {
    return (
      <div>
        <h4>received from parent = {this.props.title}</h4>
        <h1> {this.state.title}</h1>
        <button onClick={() => this.changeTitle()}> Change Title</button>

        <button onClick={this.changeTitle.bind(this)}> Change Title</button>

        <button
          className="btn btn-primary"
          onClick={this.handleClick.bind(this)}
        >
          Click me
        </button>
        <button
          className="btn btn-warning"
          onClick={() => this.incrementCounter()}
        >
          increment
        </button>
        <p> Count is {this.state.count}</p>
      </div>
    );
  }
}

export default ChildComponent;

import React, { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  incrementCounter = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return (
      <div>
        Counter value is {this.state.count}
        <button onClick={() => this.incrementCounter()}>increment</button>
      </div>
    );
  }
}

export default Counter;

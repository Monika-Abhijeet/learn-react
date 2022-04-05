import React, { Component } from "react";

class Counter extends Component {
  MAX_COUNT_ALLOWED = 5;
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  incrementCounter = () => {
    try {
      if (this.state.count === 5) {
        throw new Error("count limit exceeded");
      } else {
        this.setState({ count: this.state.count + 1 });
      }
    } catch (e) {
      console.log(e);
    }
  };
  render() {
    return (
      <div>
        Counter value is new {this.state.count}
        <button onClick={() => this.incrementCounter()}>increment</button>
      </div>
    );
  }
}

export default Counter;

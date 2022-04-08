import React, { useState } from "react";

const WithCounter = (OriginalComponent) => {
  class NewComponent extends React.Component {
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
        <OriginalComponent
          name="Monika"
          count={this.state.count}
          counter={this.incrementCounter}
        ></OriginalComponent>
      );
    }
  }
  return NewComponent;
};

export default WithCounter;

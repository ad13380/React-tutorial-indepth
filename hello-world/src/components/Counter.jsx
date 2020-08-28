import React, { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  render() {
    return (
      <div>
        <div>Count = {this.state.count}</div>
        <button onClick={this.handleIncrement}>Increment</button>
        <button onClick={this.handleIncrementFive}>Increment 5</button>
      </div>
    );
  }

  handleIncrement = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  handleIncrementFive = () => {
    for (let i = 0; i < 5; i++) {
      this.handleIncrement();
    }
  };
}

export default Counter;

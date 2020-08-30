import React, { Component } from "react";
import withCounter from "./withCounter";

class ClickCounter extends Component {
  render() {
    const { onIncrement, count, name } = this.props;
    return (
      <div>
        <button onClick={onIncrement}>
          {name} clicked {count} times
        </button>
      </div>
    );
  }
}

export default withCounter(ClickCounter, 5);

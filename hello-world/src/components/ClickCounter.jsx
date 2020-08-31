import React, { Component } from "react";

class ClickCounter extends Component {
  render() {
    const { onIncrement, count } = this.props;
    return (
      <div>
        <button onClick={onIncrement}>Clicked {count} times</button>
      </div>
    );
  }
}

export default ClickCounter;

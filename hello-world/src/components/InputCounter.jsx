import React, { Component } from "react";

class InputCounter extends Component {
  state = {
    count: 0,
  };

  handleIncrement = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  render() {
    const { count } = this.state;
    return (
      <div>
        <input onKeyDown={this.handleIncrement} />
        <p>Key down count: {count}</p>
      </div>
    );
  }
}

export default InputCounter;

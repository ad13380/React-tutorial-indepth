import React, { Component } from "react";

class HoverCounter extends Component {
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
        <h2 onMouseOver={this.handleIncrement}>Hovered {count} times</h2>
      </div>
    );
  }
}

export default HoverCounter;

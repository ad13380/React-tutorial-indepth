import React, { Component } from "react";

const withCounter = (WrappedComponent, step) => {
  class WithCounter extends Component {
    constructor() {
      super();
      this.state = {
        count: 0,
      };
    }

    handleIncrement = () => {
      this.setState((prevState) => ({
        count: prevState.count + step,
      }));
    };

    render() {
      return (
        <WrappedComponent
          count={this.state.count}
          onIncrement={this.handleIncrement}
          {...this.props}
        />
      );
    }
  }
  return WithCounter;
};

export default withCounter;

import React, { Component } from "react";

class LifecycleA extends Component {
  constructor() {
    super();
    this.state = {
      name: "Anthony",
    };
    console.log("LifecycleA constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifecycleA getDerivedStateFromProps");
    return state;
  }

  componentDidMount() {
    console.log("LifecycleA componentDidMount");
  }

  render() {
    console.log("LifecycleA render");
    return <div>LifecycleA</div>;
  }
}

export default LifecycleA;

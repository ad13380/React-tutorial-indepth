import React, { Component } from "react";
import ComponentC from "./ComponentC";

class ComponentB extends Component {
  state = {};
  render() {
    return <ComponentC />;
  }
}

export default ComponentB;

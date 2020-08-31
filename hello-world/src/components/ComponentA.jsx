import React, { Component } from "react";
import ComponentB from "./ComponentB";

class ComponentA extends Component {
  state = {};
  render() {
    return <ComponentB />;
  }
}

export default ComponentA;

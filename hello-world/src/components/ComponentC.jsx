import React, { Component } from "react";
import { UserConsumer } from "./userContext";

class ComponentC extends Component {
  state = {};
  render() {
    return (
      <UserConsumer>
        {(value) => {
          return <>Username is {value}</>;
        }}
      </UserConsumer>
    );
  }
}

export default ComponentC;

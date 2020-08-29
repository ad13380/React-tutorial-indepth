import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

class ParentComponent extends Component {
  constructor() {
    super();
    this.state = {
      parentName: "Parent",
    };
  }

  greetParent = (childName) => {
    alert(`Hello ${this.state.parentName} from ${childName}`);
  };

  render() {
    return (
      <div>
        <ChildComponent onGreet={this.greetParent} />
      </div>
    );
  }
}

export default ParentComponent;

import React, { Component } from "react";

class RefsDemo extends Component {
  constructor() {
    super();
    this.inputRef = React.createRef();
  }

  componentDidMount() {
    this.inputRef.current.focus();
    console.log(this.inputRef);
  }

  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
        <input type="text" />
      </div>
    );
  }
}

export default RefsDemo;

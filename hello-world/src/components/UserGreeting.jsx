import React, { Component } from "react";

class UserGreeting extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
    };
  }
  render() {
    return this.state.isLoggedIn ? (
      <div>Welcome Anthony</div>
    ) : (
      <div>Welcome Guest</div>
    );
  }
}

export default UserGreeting;

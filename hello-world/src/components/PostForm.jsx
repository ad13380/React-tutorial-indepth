import React, { Component } from "react";

class PostForm extends Component {
  constructor() {
    super();
    this.state = {
      userId: "",
      title: "",
      body: "",
    };
    this.initialState = { ...this.state };
  }

  handleInput(event, parameter) {
    this.setState({ [parameter]: event.target.value });
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/postss",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(this.state),
        }
      );
      console.log(await response.json());
    } catch (err) {
      console.log(err);
    }
    this.setState(this.initialState);
  };

  render() {
    const { userId, title, body } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={userId}
            onChange={(event) => this.handleInput(event, "userId")}
          />
          <input
            type="text"
            value={title}
            onChange={(event) => this.handleInput(event, "title")}
          />
          <input
            type="text"
            value={body}
            onChange={(event) => this.handleInput(event, "body")}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default PostForm;

import React, { Component } from "react";

class ListPosts extends Component {
  state = {
    posts: [],
    errorMsg: "",
  };

  async componentDidMount() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      this.setState({ posts: await response.json() });
    } catch (err) {
      console.log(err);
      this.setState({ errorMsg: "An Error Message" });
    }
  }

  render() {
    const { posts, errorMsg } = this.state;
    return (
      <div>
        {posts.map((item) => {
          return posts.length ? <div key={item.id}>{item.title}</div> : null;
        })}
        {errorMsg ? <div>{errorMsg}</div> : null}
      </div>
    );
  }
}

export default ListPosts;

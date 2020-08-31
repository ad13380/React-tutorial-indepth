import React from "react";
import "./App.css";
import PostForm from "./components/PostForm";
import ListPosts from "./components/ListPosts";

function App() {
  return (
    <div className="App">
      <PostForm />
      <ListPosts />
    </div>
  );
}

export default App;

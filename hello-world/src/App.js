import React from "react";
import "./App.css";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="App">
      <Hero heroName="Batman" />
      <Hero heroName="Joker" />
    </div>
  );
}

export default App;

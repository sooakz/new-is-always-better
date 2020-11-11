import './App.css';
import React from "react";
import Explore from "./Explore.js"
import Login from "./Login.js"

function App() {
  return (
    <div className="app">
      <h1 className="title">
        New is always better
      </h1>
      <div className="boxContainer">
        <Login/>
        <Explore/>
      </div>
    </div>
  );
}

export default App;

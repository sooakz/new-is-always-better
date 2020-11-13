import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import Login from "./Login.js"

function App() {
  return (
    <div className="app">
      <h1 className="title">
        New is always better
      </h1>      
        <Login/>
    </div>
  );
}

export default App;

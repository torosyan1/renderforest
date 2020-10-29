import React from "react";
import "./app.css";
import List from "./lists/list";

function App() {
  return (
    <div className="container">
      <div className="column">
        <div className="header">
          <p className="text-header">Should i eat at McDonalds?</p>
        </div>
        <div className="title-container">
          <div className="title_1">
            <p>PROS</p>
          </div>
          <div className="title_2">
            <p>CONS</p>
          </div>
        </div>
        <div className="list-container">
          <div className="list-pros">
            <List />
          </div>
          <div className="list-cons">
            <List />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

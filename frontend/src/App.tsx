import React from "react";
import "./App.css";

import GenericShape from "./GenericShape.tsx";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="shape-container">
          <GenericShape shapeType={"cylinder"} />
          <GenericShape shapeType={"box"} />
        </div>
        <div className="shape-container">
          <GenericShape shapeType={"plane"} />
          <p className="text">Hi, I'm Chris.</p>
          <GenericShape shapeType={"ellipsoid"} />
        </div>
        <div className="shape-container">
          <GenericShape shapeType={"cone"} />
          <GenericShape shapeType={"torus"} />
        </div>
      </header>
    </div>
  );
}

export default App;
